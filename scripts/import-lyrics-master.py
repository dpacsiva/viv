#!/usr/bin/env python3
"""Create a typed, read-only snapshot from the three lyrics spreadsheet tabs."""

import csv
import json
import re
import shutil
from collections import defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
INPUT_DIR = Path("/tmp")
RAW_DIR = ROOT / "src/data/lyrics-master"
OUTPUT = ROOT / "src/data/lyricsMaster.ts"

SPREADSHEET_ID = "1Iar_Zhy-VUmJG_bAjYrknO-fDjigWIKAWSS0hvS0YGc"
TABS = {
    "english": {"name": "English ALL YEARS", "gid": "636797614", "file": "english-all-years.csv"},
    "tamil": {"name": "TAMIL  All years", "gid": "54543233", "file": "tamil-all-years.csv"},
    "movies": {"name": "MOVIES LIST", "gid": "1373251782", "file": "movies-list.csv"},
}


def clean(value: str | None) -> str | None:
    if value is None:
        return None
    value = " ".join(value.replace("\ufeff", "").split()).strip()
    return value or None


def slugify(value: str) -> str:
    value = value.lower().replace("&", " and ")
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-") or "untitled"


def read_csv(path: Path) -> list[tuple[int, list[str]]]:
    with path.open(encoding="utf-8-sig", newline="") as handle:
        return [(index, row) for index, row in enumerate(csv.reader(handle), start=1)]


def is_data_row(row: list[str]) -> bool:
    return bool(row and clean(row[0]) and clean(row[0]).isdigit())


def json_text(value: object) -> str:
    return json.dumps(value, ensure_ascii=False, indent=2)


def main() -> None:
    RAW_DIR.mkdir(parents=True, exist_ok=True)
    input_paths = {
        "english": INPUT_DIR / "lyrics-english.csv",
        "tamil": INPUT_DIR / "lyrics-tamil.csv",
        "movies": INPUT_DIR / "lyrics-movies.csv",
    }
    for key, source in input_paths.items():
        shutil.copyfile(source, RAW_DIR / TABS[key]["file"])

    english_rows = read_csv(input_paths["english"])
    tamil_rows = read_csv(input_paths["tamil"])
    movie_rows = read_csv(input_paths["movies"])
    tamil_by_row = {row_number: row for row_number, row in tamil_rows}

    movies: list[dict[str, object]] = []
    movie_by_key: dict[tuple[int, str], dict[str, object]] = {}
    movie_slug_counts: defaultdict[str, int] = defaultdict(int)
    movie_index_by_name: dict[tuple[int, str], dict[str, object]] = {}

    for row_number, row in movie_rows:
        if len(row) < 5 or not clean(row[1]) or not clean(row[1]).isdigit() or not clean(row[2]):
            continue
        year = int(clean(row[1]) or 0)
        name = clean(row[2]) or "Untitled work"
        base_slug = slugify(f"{year}-{name}")
        movie_slug_counts[base_slug] += 1
        slug = base_slug if movie_slug_counts[base_slug] == 1 else f"{base_slug}-{movie_slug_counts[base_slug]}"
        kind = "special-collection" if name in {"TVK Songs", "Sithira Puthiri", "Pavazha Malli"} else "film"
        movie = {
            "id": f"master-work-{len(movies) + 1:03d}",
            "slug": slug,
            "year": year,
            "name": name,
            "kind": kind,
            "listedSongCount": int(clean(row[3]) or 0),
            "cataloguedSongCount": 0,
            "composer": clean(row[4]),
            "note": clean(row[5]) if len(row) > 5 else None,
            "songIds": [],
            "sourceRow": row_number,
        }
        movies.append(movie)
        movie_by_key[(year, name.casefold())] = movie
        movie_index_by_name[(year, name.casefold())] = movie

    def find_movie(year: int, film: str | None) -> dict[str, object] | None:
        if not film:
            return None
        direct = movie_by_key.get((year, film.casefold()))
        if direct:
            return direct
        if film in {"TVK FLAG ANTHEM", "TVK Unga Vijay Song", "TVK Election Song - Kadaisi Nambikkai"}:
            return movie_by_key.get((2026, "tvk songs"))
        if film in {"Sithira Puthiri", "Pavazha Malli"}:
            return next((item for item in movies if item["name"] == film), None)
        return None

    songs: list[dict[str, object]] = []
    song_slug_counts: defaultdict[str, int] = defaultdict(int)

    for row_number, row in english_rows:
        if len(row) < 3 or not is_data_row(row):
            continue
        year = int(clean(row[0]) or 0)
        sequence = int(clean(row[1]) or 0) if clean(row[1]) and clean(row[1]).isdigit() else None
        film = clean(row[2])
        song = clean(row[3]) if len(row) > 3 else None
        composer = clean(row[4]) if len(row) > 4 else None
        note = clean(row[5]) if len(row) > 5 else None
        is_music_video = sequence is not None and sequence >= 261
        movie = find_movie(year, film)
        tamil_row = tamil_by_row.get(row_number)
        tamil_film = clean(tamil_row[1]) if tamil_row and len(tamil_row) > 1 else None
        tamil_song = clean(tamil_row[2]) if tamil_row and len(tamil_row) > 2 else None
        tamil_composer = clean(tamil_row[3]) if tamil_row and len(tamil_row) > 3 else None
        tamil_note = clean(tamil_row[4]) if tamil_row and len(tamil_row) > 4 else None

        if is_music_video:
            tamil_matches_english = bool(tamil_film and film and tamil_film.casefold() == film.casefold())
            if not tamil_matches_english:
                tamil_row = next(
                    (
                        candidate
                        for candidate_number, candidate in tamil_rows
                        if len(candidate) > 1
                        and clean(candidate[0]) == str(year)
                        and clean(candidate[1]) == film
                    ),
                    None,
                )
                tamil_film = clean(tamil_row[1]) if tamil_row and len(tamil_row) > 1 else None
                tamil_song = clean(tamil_row[2]) if tamil_row and len(tamil_row) > 2 else None
                tamil_composer = clean(tamil_row[3]) if tamil_row and len(tamil_row) > 3 else None
                tamil_note = clean(tamil_row[4]) if tamil_row and len(tamil_row) > 4 else None

        display_name = song or film or "untitled-song"
        base_slug = slugify(f"{year}-{film or 'special'}-{display_name}-{sequence or row_number}")
        song_slug_counts[base_slug] += 1
        slug = base_slug if song_slug_counts[base_slug] == 1 else f"{base_slug}-{song_slug_counts[base_slug]}"
        song_id = f"master-song-{len(songs) + 1:03d}"
        song = {
            "id": song_id,
            "slug": slug,
            "year": year,
            "sequence": sequence,
            "kind": "music-video" if is_music_video else "film",
            "movieId": movie["id"] if movie else None,
            "english": {
                "film": film,
                "song": song,
                "composer": composer,
                "artist": song if is_music_video else None,
                "note": note,
                "sourceRow": row_number,
            },
            "tamil": {
                "film": tamil_film,
                "song": tamil_song,
                "composer": tamil_composer,
                "artist": tamil_composer if is_music_video else None,
                "note": tamil_note,
                "sourceRow": tamil_row and next(
                    candidate_number for candidate_number, candidate in tamil_rows if candidate is tamil_row
                ),
            }
            if tamil_row
            else None,
        }
        songs.append(song)
        if movie:
            movie["songIds"].append(song_id)
            movie["cataloguedSongCount"] = int(movie["cataloguedSongCount"]) + 1

    for movie in movies:
        tamil_names = [
            song["tamil"]["film"]
            for song in songs
            if song.get("movieId") == movie["id"]
            and song.get("tamil")
            and song["tamil"].get("film")
            and song["kind"] == "film"
        ]
        if tamil_names:
            movie["tamilName"] = tamil_names[0]

    # Remove empty optional values to keep the generated snapshot readable.
    def compact(value: object) -> object:
        if isinstance(value, dict):
            return {key: compact(item) for key, item in value.items() if item is not None}
        if isinstance(value, list):
            return [compact(item) for item in value]
        return value

    source = {
        "spreadsheetId": SPREADSHEET_ID,
        "importedAt": "2026-08-25",
        "tabs": [
            {"name": value["name"], "gid": value["gid"], "file": value["file"]}
            for value in TABS.values()
        ],
    }
    payload = (
        'import type { LyricsMasterMovie, LyricsMasterSong, LyricsMasterSource } from "@/types/lyricsMaster";\n\n'
        f"export const LYRICS_MASTER_SOURCE: LyricsMasterSource = {json_text(source)};\n\n"
        f"export const LYRICS_MASTER_MOVIES: readonly LyricsMasterMovie[] = {json_text([compact(movie) for movie in movies])};\n\n"
        f"export const LYRICS_MASTER_SONGS: readonly LyricsMasterSong[] = {json_text([compact(song) for song in songs])};\n"
    )
    OUTPUT.write_text(payload, encoding="utf-8")
    print(f"Imported {len(songs)} song rows and {len(movies)} movie-list rows into {OUTPUT}")


if __name__ == "__main__":
    main()
