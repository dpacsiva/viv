import type { LyricsMasterMovie, LyricsMasterSong, LyricsMasterSource } from "@/types/lyricsMaster";

export const LYRICS_MASTER_SOURCE: LyricsMasterSource = {
  "spreadsheetId": "1Iar_Zhy-VUmJG_bAjYrknO-fDjigWIKAWSS0hvS0YGc",
  "importedAt": "2026-08-25",
  "tabs": [
    {
      "name": "English ALL YEARS",
      "gid": "636797614",
      "file": "english-all-years.csv"
    },
    {
      "name": "TAMIL  All years",
      "gid": "54543233",
      "file": "tamil-all-years.csv"
    },
    {
      "name": "MOVIES LIST",
      "gid": "1373251782",
      "file": "movies-list.csv"
    }
  ]
};

export const LYRICS_MASTER_MOVIES: readonly LyricsMasterMovie[] = [
  {
    "id": "master-work-001",
    "slug": "2015-enakkul-oruvan",
    "year": 2015,
    "name": "Enakkul Oruvan",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "Santhosh Narayanan",
    "note": "Best Lyrics Writer - 2nd Behindwoods Gold Medals 2015",
    "songIds": [
      "master-song-001",
      "master-song-002"
    ],
    "sourceRow": 2,
    "tamilName": "எனக்குள் ஒருவன்"
  },
  {
    "id": "master-work-002",
    "slug": "2015-36-vayadhinile",
    "year": 2015,
    "name": "36 Vayadhinile",
    "kind": "film",
    "listedSongCount": 3,
    "cataloguedSongCount": 3,
    "note": "Best Lyricist of the year - Mirchi Music Awards South 2015",
    "songIds": [
      "master-song-003",
      "master-song-004",
      "master-song-005"
    ],
    "sourceRow": 3,
    "tamilName": "36 வயதினிலே"
  },
  {
    "id": "master-work-003",
    "slug": "2015-indru-netru-naalai",
    "year": 2015,
    "name": "Indru Netru Naalai",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Hiphop Tamizha",
    "songIds": [
      "master-song-006"
    ],
    "sourceRow": 4,
    "tamilName": "இன்று நேற்று நாளை"
  },
  {
    "id": "master-work-004",
    "slug": "2015-mathura-naranga",
    "year": 2015,
    "name": "Mathura Naranga",
    "kind": "film",
    "listedSongCount": 3,
    "cataloguedSongCount": 3,
    "composer": "Sreejith Saachin",
    "songIds": [
      "master-song-007",
      "master-song-008",
      "master-song-009"
    ],
    "sourceRow": 5,
    "tamilName": "மதுர நரங்கா"
  },
  {
    "id": "master-work-005",
    "slug": "2016-irudhi-suttru",
    "year": 2016,
    "name": "Irudhi Suttru",
    "kind": "film",
    "listedSongCount": 5,
    "cataloguedSongCount": 5,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-010",
      "master-song-011",
      "master-song-012",
      "master-song-013",
      "master-song-014"
    ],
    "sourceRow": 7,
    "tamilName": "இறுதி சுற்று"
  },
  {
    "id": "master-work-006",
    "slug": "2016-iraivi",
    "year": 2016,
    "name": "Iraivi",
    "kind": "film",
    "listedSongCount": 5,
    "cataloguedSongCount": 5,
    "songIds": [
      "master-song-015",
      "master-song-016",
      "master-song-017",
      "master-song-018",
      "master-song-019"
    ],
    "sourceRow": 8,
    "tamilName": "இறைவி"
  },
  {
    "id": "master-work-007",
    "slug": "2016-144",
    "year": 2016,
    "name": "144",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "Sean Roldan",
    "songIds": [
      "master-song-020",
      "master-song-021"
    ],
    "sourceRow": 9,
    "tamilName": "144"
  },
  {
    "id": "master-work-008",
    "slug": "2016-aranmanai-2",
    "year": 2016,
    "name": "Aranmanai 2",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Hiphop Tamizha",
    "songIds": [
      "master-song-022"
    ],
    "sourceRow": 10,
    "tamilName": "அரண்மனை 2"
  },
  {
    "id": "master-work-009",
    "slug": "2016-jil-jung-juk",
    "year": 2016,
    "name": "Jil Jung Juk",
    "kind": "film",
    "listedSongCount": 4,
    "cataloguedSongCount": 4,
    "composer": "Vishal Chandrasekhar",
    "songIds": [
      "master-song-023",
      "master-song-024",
      "master-song-025",
      "master-song-026"
    ],
    "sourceRow": 11,
    "tamilName": "ஜில் ஜங் ஜக்"
  },
  {
    "id": "master-work-010",
    "slug": "2016-unakkul-naan",
    "year": 2016,
    "name": "Unakkul Naan",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Tony Britto",
    "songIds": [
      "master-song-027"
    ],
    "sourceRow": 12,
    "tamilName": "உனக்குள் நான்"
  },
  {
    "id": "master-work-011",
    "slug": "2016-ka-ka-ka",
    "year": 2016,
    "name": "Ka Ka Ka",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Amrith",
    "songIds": [
      "master-song-028"
    ],
    "sourceRow": 13,
    "tamilName": "Ka Ka Ka"
  },
  {
    "id": "master-work-012",
    "slug": "2016-oru-naal-koothu",
    "year": 2016,
    "name": "Oru Naal Koothu",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Justin Prabhakaran",
    "songIds": [
      "master-song-029"
    ],
    "sourceRow": 14,
    "tamilName": "Oru Naal Koothu"
  },
  {
    "id": "master-work-013",
    "slug": "2016-maalai-nerathu-mayakkam",
    "year": 2016,
    "name": "Maalai Nerathu Mayakkam",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Amrith",
    "songIds": [
      "master-song-030"
    ],
    "sourceRow": 15,
    "tamilName": "Maalai Nerathu Mayakkam"
  },
  {
    "id": "master-work-014",
    "slug": "2016-manithan",
    "year": 2016,
    "name": "Manithan",
    "kind": "film",
    "listedSongCount": 3,
    "cataloguedSongCount": 3,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-031",
      "master-song-032",
      "master-song-033"
    ],
    "sourceRow": 16,
    "tamilName": "Manithan"
  },
  {
    "id": "master-work-015",
    "slug": "2016-pokkiri-raja",
    "year": 2016,
    "name": "Pokkiri Raja",
    "kind": "film",
    "listedSongCount": 4,
    "cataloguedSongCount": 4,
    "composer": "D. Imman",
    "songIds": [
      "master-song-034",
      "master-song-035",
      "master-song-036",
      "master-song-037"
    ],
    "sourceRow": 17,
    "tamilName": "Pokkiri Raja"
  },
  {
    "id": "master-work-016",
    "slug": "2016-kabali",
    "year": 2016,
    "name": "Kabali",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-038"
    ],
    "sourceRow": 18,
    "tamilName": "Kabali"
  },
  {
    "id": "master-work-017",
    "slug": "2016-merku-thodarchi-malai",
    "year": 2016,
    "name": "Merku Thodarchi Malai",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Illayaraja",
    "songIds": [
      "master-song-039"
    ],
    "sourceRow": 19,
    "tamilName": "Merku Thodarchi Malai"
  },
  {
    "id": "master-work-018",
    "slug": "2016-kadhalum-kadandhu-pogum",
    "year": 2016,
    "name": "Kadhalum Kadandhu Pogum",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-040",
      "master-song-041"
    ],
    "sourceRow": 20,
    "tamilName": "Kadhalum Kadandhu Pogum"
  },
  {
    "id": "master-work-019",
    "slug": "2016-sei",
    "year": 2016,
    "name": "Sei",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Nithin Lopez",
    "songIds": [
      "master-song-042"
    ],
    "sourceRow": 21,
    "tamilName": "Sei"
  },
  {
    "id": "master-work-020",
    "slug": "2016-dhuruvangal-pathinaaru",
    "year": 2016,
    "name": "Dhuruvangal Pathinaaru",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Jakes Bejoy",
    "songIds": [
      "master-song-043"
    ],
    "sourceRow": 22,
    "tamilName": "Dhuruvangal Pathinaaru"
  },
  {
    "id": "master-work-021",
    "slug": "2016-meow",
    "year": 2016,
    "name": "Meow",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Sreejith Edarana",
    "songIds": [
      "master-song-044"
    ],
    "sourceRow": 23,
    "tamilName": "Meow"
  },
  {
    "id": "master-work-022",
    "slug": "2016-ulkuthu",
    "year": 2016,
    "name": "Ulkuthu",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Justin Prabhakaran",
    "songIds": [
      "master-song-045"
    ],
    "sourceRow": 24,
    "tamilName": "Ulkuthu"
  },
  {
    "id": "master-work-023",
    "slug": "2016-remo",
    "year": 2016,
    "name": "Remo",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Anirudh Ravichander",
    "songIds": [
      "master-song-046"
    ],
    "sourceRow": 25,
    "tamilName": "Remo"
  },
  {
    "id": "master-work-024",
    "slug": "2016-aandavan-kattalai",
    "year": 2016,
    "name": "Aandavan Kattalai",
    "kind": "film",
    "listedSongCount": 3,
    "cataloguedSongCount": 3,
    "composer": "K",
    "songIds": [
      "master-song-047",
      "master-song-048",
      "master-song-049"
    ],
    "sourceRow": 26,
    "tamilName": "Aandavan Kattalai"
  },
  {
    "id": "master-work-025",
    "slug": "2016-kodi",
    "year": 2016,
    "name": "Kodi",
    "kind": "film",
    "listedSongCount": 4,
    "cataloguedSongCount": 4,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-050",
      "master-song-051",
      "master-song-052",
      "master-song-053"
    ],
    "sourceRow": 27,
    "tamilName": "Kodi"
  },
  {
    "id": "master-work-026",
    "slug": "2016-rum",
    "year": 2016,
    "name": "Rum",
    "kind": "film",
    "listedSongCount": 5,
    "cataloguedSongCount": 5,
    "composer": "Anirudh Ravichander",
    "songIds": [
      "master-song-054",
      "master-song-055",
      "master-song-056",
      "master-song-057",
      "master-song-058"
    ],
    "sourceRow": 28,
    "tamilName": "Rum"
  },
  {
    "id": "master-work-027",
    "slug": "2017-sathriyan",
    "year": 2017,
    "name": "Sathriyan",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Yuvan Shankar Raja",
    "songIds": [
      "master-song-059"
    ],
    "sourceRow": 30,
    "tamilName": "Sathriyan"
  },
  {
    "id": "master-work-028",
    "slug": "2017-ivan-thanthiran",
    "year": 2017,
    "name": "Ivan Thanthiran",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "Thaman S",
    "songIds": [
      "master-song-060",
      "master-song-061"
    ],
    "sourceRow": 31,
    "tamilName": "Ivan Thanthiran"
  },
  {
    "id": "master-work-029",
    "slug": "2017-mersal",
    "year": 2017,
    "name": "Mersal",
    "kind": "film",
    "listedSongCount": 5,
    "cataloguedSongCount": 5,
    "composer": "A. R. Rahman",
    "songIds": [
      "master-song-062",
      "master-song-063",
      "master-song-064",
      "master-song-065",
      "master-song-066"
    ],
    "sourceRow": 32,
    "tamilName": "மெர்சல்"
  },
  {
    "id": "master-work-030",
    "slug": "2017-velaikkaran",
    "year": 2017,
    "name": "Velaikkaran",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Anirudh Ravichander",
    "songIds": [
      "master-song-067"
    ],
    "sourceRow": 33,
    "tamilName": "Velaikkaran"
  },
  {
    "id": "master-work-031",
    "slug": "2017-meyaadha-maan",
    "year": 2017,
    "name": "Meyaadha Maan",
    "kind": "film",
    "listedSongCount": 4,
    "cataloguedSongCount": 4,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-068",
      "master-song-069",
      "master-song-070",
      "master-song-071"
    ],
    "sourceRow": 34,
    "tamilName": "Meyaadha Maan"
  },
  {
    "id": "master-work-032",
    "slug": "2017-theeran-adhigaaram-ondru",
    "year": 2017,
    "name": "Theeran Adhigaaram Ondru",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Ghibran",
    "songIds": [
      "master-song-072"
    ],
    "sourceRow": 35,
    "tamilName": "Theeran Adhigaaram Ondru"
  },
  {
    "id": "master-work-033",
    "slug": "2018-sketch",
    "year": 2018,
    "name": "Sketch",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "Thaman S",
    "songIds": [
      "master-song-073",
      "master-song-074"
    ],
    "sourceRow": 37,
    "tamilName": "Sketch"
  },
  {
    "id": "master-work-034",
    "slug": "2018-bhaagamathie",
    "year": 2018,
    "name": "Bhaagamathie",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "songIds": [
      "master-song-075"
    ],
    "sourceRow": 38,
    "tamilName": "Bhaagamathie"
  },
  {
    "id": "master-work-035",
    "slug": "2018-sarkar",
    "year": 2018,
    "name": "Sarkar",
    "kind": "film",
    "listedSongCount": 5,
    "cataloguedSongCount": 5,
    "composer": "A. R. Rahman",
    "songIds": [
      "master-song-076",
      "master-song-077",
      "master-song-078",
      "master-song-079",
      "master-song-080"
    ],
    "sourceRow": 39,
    "tamilName": "சர்கார்"
  },
  {
    "id": "master-work-036",
    "slug": "2018-irumbu-thirai",
    "year": 2018,
    "name": "Irumbu Thirai",
    "kind": "film",
    "listedSongCount": 3,
    "cataloguedSongCount": 3,
    "composer": "Yuvan Shankar Raja",
    "songIds": [
      "master-song-081",
      "master-song-082",
      "master-song-083"
    ],
    "sourceRow": 40,
    "tamilName": "இரும்பு திரை"
  },
  {
    "id": "master-work-037",
    "slug": "2018-kolamavu-kokila",
    "year": 2018,
    "name": "Kolamavu Kokila",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Anirudh Ravichander",
    "songIds": [
      "master-song-084"
    ],
    "sourceRow": 41,
    "tamilName": "Kolamavu Kokila"
  },
  {
    "id": "master-work-038",
    "slug": "2018-pyaar-prema-kaadhal",
    "year": 2018,
    "name": "Pyaar Prema Kaadhal",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Yuvan Shankar Raja",
    "songIds": [
      "master-song-085"
    ],
    "sourceRow": 42,
    "tamilName": "ப்யார் ப்ரேமா காதல்"
  },
  {
    "id": "master-work-039",
    "slug": "2018-60-vayadu-maaniram",
    "year": 2018,
    "name": "60 Vayadu Maaniram",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Ilaiyaraaja",
    "songIds": [
      "master-song-086"
    ],
    "sourceRow": 43,
    "tamilName": "60 Vayadu Maaniram"
  },
  {
    "id": "master-work-040",
    "slug": "2018-pariyerum-perumal",
    "year": 2018,
    "name": "Pariyerum Perumal",
    "kind": "film",
    "listedSongCount": 3,
    "cataloguedSongCount": 3,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-087",
      "master-song-088",
      "master-song-089"
    ],
    "sourceRow": 44,
    "tamilName": "Pariyerum Perumal"
  },
  {
    "id": "master-work-041",
    "slug": "2018-kaali",
    "year": 2018,
    "name": "Kaali",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Vijay Antony",
    "songIds": [
      "master-song-090"
    ],
    "sourceRow": 45,
    "tamilName": "Kaali"
  },
  {
    "id": "master-work-042",
    "slug": "2018-vada-chennai",
    "year": 2018,
    "name": "Vada Chennai",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-091",
      "master-song-092"
    ],
    "sourceRow": 46,
    "tamilName": "Vada Chennai"
  },
  {
    "id": "master-work-043",
    "slug": "2019-petta",
    "year": 2019,
    "name": "Petta",
    "kind": "film",
    "listedSongCount": 3,
    "cataloguedSongCount": 3,
    "composer": "Anirudh Ravichander",
    "songIds": [
      "master-song-093",
      "master-song-094",
      "master-song-095"
    ],
    "sourceRow": 48,
    "tamilName": "Petta"
  },
  {
    "id": "master-work-044",
    "slug": "2019-dev",
    "year": 2019,
    "name": "Dev",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Harris Jayaraj",
    "songIds": [
      "master-song-096"
    ],
    "sourceRow": 49,
    "tamilName": "Dev"
  },
  {
    "id": "master-work-045",
    "slug": "2019-boomerang",
    "year": 2019,
    "name": "Boomerang",
    "kind": "film",
    "listedSongCount": 3,
    "cataloguedSongCount": 3,
    "composer": "Radhan",
    "songIds": [
      "master-song-097",
      "master-song-098",
      "master-song-099"
    ],
    "sourceRow": 50,
    "tamilName": "Boomerang"
  },
  {
    "id": "master-work-046",
    "slug": "2019-devarattam",
    "year": 2019,
    "name": "Devarattam",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "Nivas K. Prasanna",
    "songIds": [
      "master-song-100",
      "master-song-101"
    ],
    "sourceRow": 51,
    "tamilName": "Devarattam"
  },
  {
    "id": "master-work-047",
    "slug": "2019-oththa-seruppu-size-7",
    "year": 2019,
    "name": "Oththa Seruppu Size 7",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-102"
    ],
    "sourceRow": 52,
    "tamilName": "Oththa Seruppu Size 7"
  },
  {
    "id": "master-work-048",
    "slug": "2019-jackpot",
    "year": 2019,
    "name": "Jackpot",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Vishal Chandrasekhar",
    "songIds": [
      "master-song-103"
    ],
    "sourceRow": 53,
    "tamilName": "Jackpot"
  },
  {
    "id": "master-work-049",
    "slug": "2019-ayogya",
    "year": 2019,
    "name": "Ayogya",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Sam C.S.",
    "songIds": [
      "master-song-104"
    ],
    "sourceRow": 54,
    "tamilName": "Ayogya"
  },
  {
    "id": "master-work-050",
    "slug": "2019-sindhubaadh",
    "year": 2019,
    "name": "Sindhubaadh",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Yuvan Shankar Raja",
    "songIds": [
      "master-song-105"
    ],
    "sourceRow": 55,
    "tamilName": "Sindhubaadh"
  },
  {
    "id": "master-work-051",
    "slug": "2019-bigil",
    "year": 2019,
    "name": "Bigil",
    "kind": "film",
    "listedSongCount": 6,
    "cataloguedSongCount": 6,
    "composer": "A. R. Rahman",
    "songIds": [
      "master-song-106",
      "master-song-107",
      "master-song-108",
      "master-song-109",
      "master-song-110",
      "master-song-111"
    ],
    "sourceRow": 56,
    "tamilName": "பிகில்"
  },
  {
    "id": "master-work-052",
    "slug": "2019-frozen-2-tamil",
    "year": 2019,
    "name": "Frozen 2 (Tamil)",
    "kind": "film",
    "listedSongCount": 7,
    "cataloguedSongCount": 7,
    "composer": "Robert Lopez Kristen Anderson-Lopez",
    "songIds": [
      "master-song-112",
      "master-song-113",
      "master-song-114",
      "master-song-115",
      "master-song-116",
      "master-song-117",
      "master-song-118"
    ],
    "sourceRow": 57,
    "tamilName": "Frozen 2 (Tamil)"
  },
  {
    "id": "master-work-053",
    "slug": "2019-adithya-varma",
    "year": 2019,
    "name": "Adithya Varma",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Radhan",
    "songIds": [
      "master-song-119"
    ],
    "sourceRow": 58,
    "tamilName": "Adithya Varma"
  },
  {
    "id": "master-work-054",
    "slug": "2019-thambi",
    "year": 2019,
    "name": "Thambi",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Govind Vasantha",
    "songIds": [
      "master-song-120"
    ],
    "sourceRow": 59,
    "tamilName": "Thambi"
  },
  {
    "id": "master-work-055",
    "slug": "2020-darbar",
    "year": 2020,
    "name": "Darbar",
    "kind": "film",
    "listedSongCount": 3,
    "cataloguedSongCount": 3,
    "composer": "Anirudh Ravichander",
    "songIds": [
      "master-song-121",
      "master-song-122",
      "master-song-123"
    ],
    "sourceRow": 61,
    "tamilName": "தர்பார்"
  },
  {
    "id": "master-work-056",
    "slug": "2020-pattas",
    "year": 2020,
    "name": "Pattas",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "Vivek-Mervin",
    "songIds": [
      "master-song-124",
      "master-song-125"
    ],
    "sourceRow": 62,
    "tamilName": "பட்டாஸ்"
  },
  {
    "id": "master-work-057",
    "slug": "2020-soorarai-pottru",
    "year": 2020,
    "name": "Soorarai Pottru",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "G.V. Prakash Kumar",
    "songIds": [
      "master-song-126"
    ],
    "sourceRow": 63,
    "tamilName": "Soorarai Pottru"
  },
  {
    "id": "master-work-058",
    "slug": "2020-ponmagal-vandhal",
    "year": 2020,
    "name": "Ponmagal Vandhal",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "Govind Vasantha",
    "songIds": [
      "master-song-127",
      "master-song-128"
    ],
    "sourceRow": 64,
    "tamilName": "பொன்மகள் வந்தாள்"
  },
  {
    "id": "master-work-059",
    "slug": "2020-penguin",
    "year": 2020,
    "name": "Penguin",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-129",
      "master-song-130"
    ],
    "sourceRow": 65,
    "tamilName": "பெங்குயின்"
  },
  {
    "id": "master-work-060",
    "slug": "2020-jagame-thandhiram",
    "year": 2020,
    "name": "Jagame Thandhiram",
    "kind": "film",
    "listedSongCount": 3,
    "cataloguedSongCount": 3,
    "songIds": [
      "master-song-131",
      "master-song-132",
      "master-song-133"
    ],
    "sourceRow": 66,
    "tamilName": "Jagame Thandhiram"
  },
  {
    "id": "master-work-061",
    "slug": "2020-99-songs",
    "year": 2020,
    "name": "99 Songs",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "A. R. Rahman",
    "songIds": [
      "master-song-134",
      "master-song-135"
    ],
    "sourceRow": 67,
    "tamilName": "99 Songs"
  },
  {
    "id": "master-work-062",
    "slug": "2020-vasantha-mullai",
    "year": 2020,
    "name": "Vasantha Mullai",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Rajesh Murugesan",
    "songIds": [
      "master-song-136"
    ],
    "sourceRow": 68,
    "tamilName": "Vasantha Mullai"
  },
  {
    "id": "master-work-063",
    "slug": "2020-sabhaapathy",
    "year": 2020,
    "name": "Sabhaapathy",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Sam C.S.",
    "songIds": [
      "master-song-137"
    ],
    "sourceRow": 69,
    "tamilName": "Sabhaapathy"
  },
  {
    "id": "master-work-064",
    "slug": "2021-annabelle-sethupathi",
    "year": 2021,
    "name": "Annabelle Sethupathi",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "Krishna Kishore",
    "songIds": [
      "master-song-138",
      "master-song-139"
    ],
    "sourceRow": 71,
    "tamilName": "Annabelle Sethupathi"
  },
  {
    "id": "master-work-065",
    "slug": "2021-oh-manapenne",
    "year": 2021,
    "name": "Oh Manapenne!",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Vishal Chandrashekhar",
    "songIds": [
      "master-song-140"
    ],
    "sourceRow": 72,
    "tamilName": "Oh Manapenne!"
  },
  {
    "id": "master-work-066",
    "slug": "2021-enemy",
    "year": 2021,
    "name": "Enemy",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Thaman S",
    "songIds": [
      "master-song-141"
    ],
    "sourceRow": 73,
    "tamilName": "Enemy"
  },
  {
    "id": "master-work-067",
    "slug": "2021-galatta-kalyanam",
    "year": 2021,
    "name": "Galatta Kalyanam",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "A. R. Rahman",
    "songIds": [
      "master-song-142"
    ],
    "sourceRow": 74,
    "tamilName": "Galatta Kalyanam"
  },
  {
    "id": "master-work-068",
    "slug": "2021-anbarivu",
    "year": 2021,
    "name": "Anbarivu",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Hiphop Tamizha",
    "songIds": [
      "master-song-143"
    ],
    "sourceRow": 75,
    "tamilName": "Anbarivu"
  },
  {
    "id": "master-work-069",
    "slug": "2022-naai-sekar",
    "year": 2022,
    "name": "Naai Sekar",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Ajesh",
    "songIds": [
      "master-song-144"
    ],
    "sourceRow": 77,
    "tamilName": "Naai Sekar"
  },
  {
    "id": "master-work-070",
    "slug": "2022-maaran",
    "year": 2022,
    "name": "Maaran",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "G.V. Prakash Kumar",
    "songIds": [
      "master-song-145",
      "master-song-146"
    ],
    "sourceRow": 78,
    "tamilName": "மாறன்"
  },
  {
    "id": "master-work-071",
    "slug": "2022-mahaan",
    "year": 2022,
    "name": "Mahaan",
    "kind": "film",
    "listedSongCount": 4,
    "cataloguedSongCount": 4,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-147",
      "master-song-148",
      "master-song-149",
      "master-song-150"
    ],
    "sourceRow": 79,
    "tamilName": "மகான்"
  },
  {
    "id": "master-work-072",
    "slug": "2022-veeramae-vaagai-soodum",
    "year": 2022,
    "name": "Veeramae Vaagai Soodum",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Yuvan Shankar Raja",
    "songIds": [
      "master-song-151"
    ],
    "sourceRow": 80,
    "tamilName": "வீரமே வாகை சூடும்"
  },
  {
    "id": "master-work-073",
    "slug": "2022-beast",
    "year": 2022,
    "name": "Beast",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Anirudh Ravichander",
    "songIds": [
      "master-song-152"
    ],
    "sourceRow": 81,
    "tamilName": "பீஸ்ட்"
  },
  {
    "id": "master-work-074",
    "slug": "2022-ranga",
    "year": 2022,
    "name": "Ranga",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Ramjeevan",
    "songIds": [
      "master-song-153"
    ],
    "sourceRow": 82,
    "tamilName": "Ranga"
  },
  {
    "id": "master-work-075",
    "slug": "2022-ayngaran",
    "year": 2022,
    "name": "Ayngaran",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "G. Vignesh",
    "songIds": [
      "master-song-154"
    ],
    "sourceRow": 83,
    "tamilName": "Ayngaran"
  },
  {
    "id": "master-work-076",
    "slug": "2022-andhagan",
    "year": 2022,
    "name": "Andhagan",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-155",
      "master-song-156"
    ],
    "sourceRow": 84,
    "tamilName": "Andhagan"
  },
  {
    "id": "master-work-077",
    "slug": "2022-don",
    "year": 2022,
    "name": "Don",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "Anirudh Ravichander",
    "songIds": [
      "master-song-157",
      "master-song-158"
    ],
    "sourceRow": 85,
    "tamilName": "டான்"
  },
  {
    "id": "master-work-078",
    "slug": "2022-bestie",
    "year": 2022,
    "name": "Bestie",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "J. V.",
    "songIds": [
      "master-song-159"
    ],
    "sourceRow": 86,
    "tamilName": "பெஸ்டி"
  },
  {
    "id": "master-work-079",
    "slug": "2022-anel-meley-pani-thuli",
    "year": 2022,
    "name": "Anel Meley Pani Thuli",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-160"
    ],
    "sourceRow": 87,
    "tamilName": "Anel Meley Pani Thuli"
  },
  {
    "id": "master-work-080",
    "slug": "2022-paper-rocket",
    "year": 2022,
    "name": "Paper Rocket",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Dharan Kumar",
    "songIds": [
      "master-song-161"
    ],
    "sourceRow": 88,
    "tamilName": "Paper Rocket"
  },
  {
    "id": "master-work-081",
    "slug": "2022-gulu-gulu",
    "year": 2022,
    "name": "Gulu Gulu",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-162"
    ],
    "sourceRow": 89,
    "tamilName": "Gulu Gulu"
  },
  {
    "id": "master-work-082",
    "slug": "2022-thiruchitrambalam",
    "year": 2022,
    "name": "Thiruchitrambalam",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Anirudh Ravichander",
    "songIds": [
      "master-song-163"
    ],
    "sourceRow": 90,
    "tamilName": "திருச்சிற்றம்பலம்"
  },
  {
    "id": "master-work-083",
    "slug": "2022-paramporul",
    "year": 2022,
    "name": "Paramporul",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Yuvan Shankar Raja",
    "songIds": [
      "master-song-164"
    ],
    "sourceRow": 91,
    "tamilName": "Paramporul"
  },
  {
    "id": "master-work-084",
    "slug": "2022-cobra",
    "year": 2022,
    "name": "Cobra",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "A. R. Rahman",
    "songIds": [
      "master-song-165"
    ],
    "sourceRow": 92,
    "tamilName": "Cobra"
  },
  {
    "id": "master-work-085",
    "slug": "2022-prince",
    "year": 2022,
    "name": "Prince",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Thaman S",
    "songIds": [
      "master-song-166"
    ],
    "sourceRow": 93,
    "tamilName": "Prince"
  },
  {
    "id": "master-work-086",
    "slug": "2022-singappenney",
    "year": 2022,
    "name": "Singappenney",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Kumaran Sivamani",
    "songIds": [
      "master-song-167"
    ],
    "sourceRow": 94,
    "tamilName": "Singappenney"
  },
  {
    "id": "master-work-087",
    "slug": "2022-naane-varuvean",
    "year": 2022,
    "name": "Naane Varuvean",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Yuvan Shankar Raja",
    "songIds": [
      "master-song-168"
    ],
    "sourceRow": 95,
    "tamilName": "Naane Varuvean"
  },
  {
    "id": "master-work-088",
    "slug": "2022-naai-sekar-returns",
    "year": 2022,
    "name": "Naai Sekar Returns",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-169"
    ],
    "sourceRow": 96,
    "tamilName": "Naai Sekar Returns"
  },
  {
    "id": "master-work-089",
    "slug": "2022-gatta-kusthi",
    "year": 2022,
    "name": "Gatta Kusthi",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Justin Prabhakaran",
    "songIds": [
      "master-song-170"
    ],
    "sourceRow": 97,
    "tamilName": "Gatta Kusthi"
  },
  {
    "id": "master-work-090",
    "slug": "2022-sanda-veerachi",
    "year": 2022,
    "name": "Sanda Veerachi",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Yuvan Shankar Raja",
    "note": "Best Lyricist - 14th Ananda Vikatan Cinema Awards 2022",
    "songIds": [
      "master-song-171"
    ],
    "sourceRow": 98,
    "tamilName": "Sanda Veerachi"
  },
  {
    "id": "master-work-091",
    "slug": "2022-varisu",
    "year": 2022,
    "name": "Varisu",
    "kind": "film",
    "listedSongCount": 5,
    "cataloguedSongCount": 5,
    "composer": "Thaman S",
    "songIds": [
      "master-song-172",
      "master-song-173",
      "master-song-174",
      "master-song-175",
      "master-song-176"
    ],
    "sourceRow": 99,
    "tamilName": "வாரிசு"
  },
  {
    "id": "master-work-092",
    "slug": "2023-kick",
    "year": 2023,
    "name": "Kick",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Arjun Janya",
    "songIds": [
      "master-song-177"
    ],
    "sourceRow": 101,
    "tamilName": "Kick"
  },
  {
    "id": "master-work-093",
    "slug": "2023-dasara",
    "year": 2023,
    "name": "Dasara",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-178",
      "master-song-179"
    ],
    "sourceRow": 102,
    "tamilName": "Dasara"
  },
  {
    "id": "master-work-094",
    "slug": "2023-theerkadarishi",
    "year": 2023,
    "name": "Theerkadarishi",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "G. Balasubramanian",
    "songIds": [
      "master-song-180"
    ],
    "sourceRow": 103,
    "tamilName": "Theerkadarishi"
  },
  {
    "id": "master-work-095",
    "slug": "2023-agilan",
    "year": 2023,
    "name": "Agilan",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Sam CS",
    "songIds": [
      "master-song-181"
    ],
    "sourceRow": 104,
    "tamilName": "Agilan"
  },
  {
    "id": "master-work-096",
    "slug": "2023-pathu-thala",
    "year": 2023,
    "name": "Pathu Thala",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "A. R. Rahman",
    "songIds": [
      "master-song-182",
      "master-song-183"
    ],
    "sourceRow": 105,
    "tamilName": "Pathu Thala"
  },
  {
    "id": "master-work-097",
    "slug": "2023-veeran",
    "year": 2023,
    "name": "Veeran",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Hiphop Tamizha",
    "songIds": [
      "master-song-184"
    ],
    "sourceRow": 106,
    "tamilName": "Veeran"
  },
  {
    "id": "master-work-098",
    "slug": "2023-regina",
    "year": 2023,
    "name": "Regina",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Sathish Nair",
    "songIds": [
      "master-song-185"
    ],
    "sourceRow": 107,
    "tamilName": "Regina"
  },
  {
    "id": "master-work-099",
    "slug": "2023-jawan-tamil",
    "year": 2023,
    "name": "Jawan (Tamil)",
    "kind": "film",
    "listedSongCount": 5,
    "cataloguedSongCount": 5,
    "composer": "Anirudh Ravichander",
    "songIds": [
      "master-song-186",
      "master-song-187",
      "master-song-188",
      "master-song-189",
      "master-song-190"
    ],
    "sourceRow": 108,
    "tamilName": "ஜவான்"
  },
  {
    "id": "master-work-100",
    "slug": "2023-iraivan",
    "year": 2023,
    "name": "Iraivan",
    "kind": "film",
    "listedSongCount": 5,
    "cataloguedSongCount": 5,
    "composer": "Yuvan Shankar Raja",
    "songIds": [
      "master-song-191",
      "master-song-192",
      "master-song-193",
      "master-song-194",
      "master-song-195"
    ],
    "sourceRow": 109,
    "tamilName": "Iraivan"
  },
  {
    "id": "master-work-101",
    "slug": "2023-chithha",
    "year": 2023,
    "name": "Chithha",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-196"
    ],
    "sourceRow": 110,
    "tamilName": "Chithha"
  },
  {
    "id": "master-work-102",
    "slug": "2023-chandramukhi-2",
    "year": 2023,
    "name": "Chandramukhi 2",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "M. M. Keeravani",
    "songIds": [
      "master-song-197"
    ],
    "sourceRow": 111,
    "tamilName": "சந்திரமுகி 2"
  },
  {
    "id": "master-work-103",
    "slug": "2023-miss-shetty-mr-polishetty-tamil",
    "year": 2023,
    "name": "Miss Shetty Mr Polishetty (Tamil)",
    "kind": "film",
    "listedSongCount": 4,
    "cataloguedSongCount": 4,
    "composer": "Radhan",
    "songIds": [
      "master-song-198",
      "master-song-199",
      "master-song-200",
      "master-song-201"
    ],
    "sourceRow": 112,
    "tamilName": "Miss Shetty Mr Polishetty (Tamil)"
  },
  {
    "id": "master-work-104",
    "slug": "2023-jigarthanda-doublex",
    "year": 2023,
    "name": "Jigarthanda DoubleX",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-202",
      "master-song-203"
    ],
    "sourceRow": 113,
    "tamilName": "Jigarthanda DoubleX"
  },
  {
    "id": "master-work-105",
    "slug": "2023-annapoorani-the-goddess-of-food",
    "year": 2023,
    "name": "Annapoorani: The Goddess of Food",
    "kind": "film",
    "listedSongCount": 5,
    "cataloguedSongCount": 5,
    "composer": "Thaman S",
    "songIds": [
      "master-song-204",
      "master-song-205",
      "master-song-206",
      "master-song-207",
      "master-song-208"
    ],
    "sourceRow": 114,
    "tamilName": "Annapoorani: The Goddess of Food"
  },
  {
    "id": "master-work-106",
    "slug": "2023-lal-salaam",
    "year": 2023,
    "name": "Lal Salaam",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "A. R. Rahman",
    "songIds": [
      "master-song-209"
    ],
    "sourceRow": 115,
    "tamilName": "Lal Salaam"
  },
  {
    "id": "master-work-107",
    "slug": "2023-saindhav-tamil",
    "year": 2023,
    "name": "Saindhav (Tamil)",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 2,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-210",
      "master-song-211"
    ],
    "sourceRow": 116,
    "tamilName": "Saindhav (Tamil)"
  },
  {
    "id": "master-work-108",
    "slug": "2023-hi-nanna-tamil",
    "year": 2023,
    "name": "Hi Nanna (Tamil)",
    "kind": "film",
    "listedSongCount": 4,
    "cataloguedSongCount": 4,
    "composer": "Hesham Abdul Wahab",
    "songIds": [
      "master-song-212",
      "master-song-213",
      "master-song-214",
      "master-song-215"
    ],
    "sourceRow": 117,
    "tamilName": "Hi Nanna (Tamil)"
  },
  {
    "id": "master-work-109",
    "slug": "2024-captain-miller",
    "year": 2024,
    "name": "Captain Miller",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "G.V. Prakash Kumar",
    "songIds": [
      "master-song-216"
    ],
    "sourceRow": 119,
    "tamilName": "Captain Miller"
  },
  {
    "id": "master-work-110",
    "slug": "2024-ayalaan",
    "year": 2024,
    "name": "Ayalaan",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "A. R. Rahman",
    "songIds": [
      "master-song-217",
      "master-song-218"
    ],
    "sourceRow": 120,
    "tamilName": "அயலான்"
  },
  {
    "id": "master-work-111",
    "slug": "2024-joshua",
    "year": 2024,
    "name": "Joshua",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Karthik",
    "songIds": [
      "master-song-219"
    ],
    "sourceRow": 121,
    "tamilName": "ஜோஷுவா"
  },
  {
    "id": "master-work-112",
    "slug": "2024-ranam-aram-thavarel",
    "year": 2024,
    "name": "Ranam Aram Thavarel",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Arroll Corelli",
    "songIds": [
      "master-song-220"
    ],
    "sourceRow": 122,
    "tamilName": "Ranam Aram Thavarel"
  },
  {
    "id": "master-work-113",
    "slug": "2024-the-family-star-tamil",
    "year": 2024,
    "name": "The Family star (Tamil)",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "Gopi Sundar",
    "songIds": [
      "master-song-221",
      "master-song-222"
    ],
    "sourceRow": 123,
    "tamilName": "The Family star (Tamil)"
  },
  {
    "id": "master-work-114",
    "slug": "2024-j-baby",
    "year": 2024,
    "name": "J Baby",
    "kind": "film",
    "listedSongCount": 3,
    "cataloguedSongCount": 3,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-223",
      "master-song-224",
      "master-song-225"
    ],
    "sourceRow": 124,
    "tamilName": "J Baby"
  },
  {
    "id": "master-work-115",
    "slug": "2024-kalki-2898-ad-tamil",
    "year": 2024,
    "name": "Kalki 2898 AD (Tamil)",
    "kind": "film",
    "listedSongCount": 5,
    "cataloguedSongCount": 5,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-226",
      "master-song-227",
      "master-song-228",
      "master-song-229",
      "master-song-230"
    ],
    "sourceRow": 125,
    "tamilName": "கல்கி 2898 AD"
  },
  {
    "id": "master-work-116",
    "slug": "2024-emi",
    "year": 2024,
    "name": "EMI",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Srinath Pitchai",
    "songIds": [
      "master-song-231"
    ],
    "sourceRow": 126,
    "tamilName": "ஈ.எம்.ஐ."
  },
  {
    "id": "master-work-117",
    "slug": "2024-vaazhai",
    "year": 2024,
    "name": "Vaazhai",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-232"
    ],
    "sourceRow": 127,
    "tamilName": "வாழை"
  },
  {
    "id": "master-work-118",
    "slug": "2024-the-greatest-of-all-time",
    "year": 2024,
    "name": "The Greatest of All Time",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Yuvan Shankar Raja",
    "songIds": [
      "master-song-233"
    ],
    "sourceRow": 128,
    "tamilName": "தி கிரேடெஸ்ட் ஆப் ஆல் டைம்"
  },
  {
    "id": "master-work-119",
    "slug": "2024-game-changer-tamil",
    "year": 2024,
    "name": "Game Changer (Tamil)",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "Thaman S",
    "note": "Also Tamil dialogues and screenplay along with S. Shankar",
    "songIds": [
      "master-song-234",
      "master-song-235"
    ],
    "sourceRow": 129,
    "tamilName": "கேம் சேஞ்சர்"
  },
  {
    "id": "master-work-120",
    "slug": "2024-amaran",
    "year": 2024,
    "name": "Amaran",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "G.V. Prakash Kumar",
    "songIds": [
      "master-song-236"
    ],
    "sourceRow": 130,
    "tamilName": "அமரன்"
  },
  {
    "id": "master-work-121",
    "slug": "2024-bloody-beggar",
    "year": 2024,
    "name": "Bloody Beggar",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Jen Martin",
    "note": "Co-wrote lyrics with Vishnu Edavan",
    "songIds": [
      "master-song-237"
    ],
    "sourceRow": 131,
    "tamilName": "Bloody Beggar"
  },
  {
    "id": "master-work-122",
    "slug": "2024-kadhalikka-neramillai",
    "year": 2024,
    "name": "Kadhalikka Neramillai",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "A. R. Rahman",
    "songIds": [
      "master-song-238"
    ],
    "sourceRow": 132,
    "tamilName": "Kadhalikka Neramillai"
  },
  {
    "id": "master-work-123",
    "slug": "2025-nilavuku-en-mel-ennadi-kobam",
    "year": 2025,
    "name": "Nilavuku En Mel Ennadi Kobam",
    "kind": "film",
    "listedSongCount": 5,
    "cataloguedSongCount": 5,
    "composer": "G.V. Prakash Kumar",
    "songIds": [
      "master-song-239",
      "master-song-240",
      "master-song-241",
      "master-song-242",
      "master-song-243"
    ],
    "sourceRow": 134,
    "tamilName": "நிலவுக்கு என் மேல் என்னடி கோபம்"
  },
  {
    "id": "master-work-124",
    "slug": "2025-retro",
    "year": 2025,
    "name": "Retro",
    "kind": "film",
    "listedSongCount": 4,
    "cataloguedSongCount": 4,
    "composer": "Santhosh Narayanan",
    "songIds": [
      "master-song-244",
      "master-song-245",
      "master-song-246",
      "master-song-247"
    ],
    "sourceRow": 135,
    "tamilName": "ரெட்ரோ"
  },
  {
    "id": "master-work-125",
    "slug": "2025-maaman",
    "year": 2025,
    "name": "Maaman",
    "kind": "film",
    "listedSongCount": 5,
    "cataloguedSongCount": 1,
    "composer": "Hesham Abdul Wahab",
    "note": "All songs except \"Vizhuthe Thalavizhuthe\"",
    "songIds": [
      "master-song-248"
    ],
    "sourceRow": 136,
    "tamilName": "மாமன்"
  },
  {
    "id": "master-work-126",
    "slug": "2025-3bhk",
    "year": 2025,
    "name": "3BHK",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Amrit Ramnath",
    "songIds": [
      "master-song-249"
    ],
    "sourceRow": 137,
    "tamilName": "3 பி.எச்.கே"
  },
  {
    "id": "master-work-127",
    "slug": "2025-thanal",
    "year": 2025,
    "name": "Thanal",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Justin Prabhakaran",
    "songIds": [
      "master-song-250"
    ],
    "sourceRow": 138,
    "tamilName": "தனல்"
  },
  {
    "id": "master-work-128",
    "slug": "2025-dude",
    "year": 2025,
    "name": "Dude",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Sai Abhyankkar",
    "songIds": [
      "master-song-251"
    ],
    "sourceRow": 139,
    "tamilName": "டியூட்"
  },
  {
    "id": "master-work-129",
    "slug": "2025-mark",
    "year": 2025,
    "name": "Mark",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "B. Ajaneesh Loknath",
    "note": "Tamil version",
    "songIds": [
      "master-song-252"
    ],
    "sourceRow": 140,
    "tamilName": "மார்க்"
  },
  {
    "id": "master-work-130",
    "slug": "2026-karuppu",
    "year": 2026,
    "name": "Karuppu",
    "kind": "film",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Sai Abhyankkar",
    "songIds": [
      "master-song-253"
    ],
    "sourceRow": 142,
    "tamilName": "கருப்பு"
  },
  {
    "id": "master-work-131",
    "slug": "2026-jana-nayagan",
    "year": 2026,
    "name": "Jana Nayagan",
    "kind": "film",
    "listedSongCount": 5,
    "cataloguedSongCount": 5,
    "composer": "Anirudh Ravichander",
    "songIds": [
      "master-song-254",
      "master-song-255",
      "master-song-256",
      "master-song-257",
      "master-song-258"
    ],
    "sourceRow": 143,
    "tamilName": "ஜன நாயகன்"
  },
  {
    "id": "master-work-132",
    "slug": "2026-peddi",
    "year": 2026,
    "name": "Peddi",
    "kind": "film",
    "listedSongCount": 2,
    "cataloguedSongCount": 2,
    "composer": "A. R. Rahman",
    "songIds": [
      "master-song-259",
      "master-song-260"
    ],
    "sourceRow": 144,
    "tamilName": "பெட்டி"
  },
  {
    "id": "master-work-133",
    "slug": "2026-tvk-songs",
    "year": 2026,
    "name": "TVK Songs",
    "kind": "special-collection",
    "listedSongCount": 3,
    "cataloguedSongCount": 3,
    "composer": "Arivu / Thaman",
    "songIds": [
      "master-song-261",
      "master-song-264",
      "master-song-265"
    ],
    "sourceRow": 145
  },
  {
    "id": "master-work-134",
    "slug": "2026-sithira-puthiri",
    "year": 2026,
    "name": "Sithira Puthiri",
    "kind": "special-collection",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Sai Abhyankkar",
    "songIds": [
      "master-song-262"
    ],
    "sourceRow": 146
  },
  {
    "id": "master-work-135",
    "slug": "2026-pavazha-malli",
    "year": 2026,
    "name": "Pavazha Malli",
    "kind": "special-collection",
    "listedSongCount": 1,
    "cataloguedSongCount": 1,
    "composer": "Sai Abhyankkar",
    "songIds": [
      "master-song-263"
    ],
    "sourceRow": 147
  }
];

export const LYRICS_MASTER_SONGS: readonly LyricsMasterSong[] = [
  {
    "id": "master-song-001",
    "slug": "2015-enakkul-oruvan-poo-avizhum-pozhudhil-1",
    "year": 2015,
    "sequence": 1,
    "kind": "film",
    "movieId": "master-work-001",
    "english": {
      "film": "Enakkul Oruvan",
      "song": "Poo Avizhum Pozhudhil",
      "composer": "Santhosh Narayanan",
      "note": "Best Lyrics Writer - 2nd Behindwoods Gold Medals 2015",
      "sourceRow": 2
    },
    "tamil": {
      "film": "எனக்குள் ஒருவன்",
      "song": "பூ அவிழும் பொழுதில்",
      "composer": "சந்தோஷ் நாராயணன்",
      "note": "Best Lyrics Writer - 2nd Behindwoods Gold Medals 2015",
      "sourceRow": 2
    }
  },
  {
    "id": "master-song-002",
    "slug": "2015-enakkul-oruvan-yaar-en-manama-2",
    "year": 2015,
    "sequence": 2,
    "kind": "film",
    "movieId": "master-work-001",
    "english": {
      "film": "Enakkul Oruvan",
      "song": "Yaar En Manama",
      "composer": "Santhosh Narayanan",
      "sourceRow": 3
    },
    "tamil": {
      "film": "எனக்குள் ஒருவன்",
      "song": "Yaar En Manama",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 3
    }
  },
  {
    "id": "master-song-003",
    "slug": "2015-36-vayadhinile-vaadi-raasathi-3",
    "year": 2015,
    "sequence": 3,
    "kind": "film",
    "movieId": "master-work-002",
    "english": {
      "film": "36 Vayadhinile",
      "song": "Vaadi Raasathi",
      "note": "Best Lyricist of the year - Mirchi Music Awards South 2015",
      "sourceRow": 5
    },
    "tamil": {
      "film": "36 வயதினிலே",
      "song": "Vaadi Raasathi",
      "note": "Best Lyricist of the year - Mirchi Music Awards South 2015",
      "sourceRow": 5
    }
  },
  {
    "id": "master-song-004",
    "slug": "2015-36-vayadhinile-pogiren-4",
    "year": 2015,
    "sequence": 4,
    "kind": "film",
    "movieId": "master-work-002",
    "english": {
      "film": "36 Vayadhinile",
      "song": "Pogiren",
      "sourceRow": 6
    },
    "tamil": {
      "film": "36 வயதினிலே",
      "song": "Pogiren",
      "sourceRow": 6
    }
  },
  {
    "id": "master-song-005",
    "slug": "2015-36-vayadhinile-happy-5",
    "year": 2015,
    "sequence": 5,
    "kind": "film",
    "movieId": "master-work-002",
    "english": {
      "film": "36 Vayadhinile",
      "song": "Happy",
      "sourceRow": 7
    },
    "tamil": {
      "film": "36 வயதினிலே",
      "song": "Happy",
      "sourceRow": 7
    }
  },
  {
    "id": "master-song-006",
    "slug": "2015-indru-netru-naalai-kadhale-kadhale-6",
    "year": 2015,
    "sequence": 6,
    "kind": "film",
    "movieId": "master-work-003",
    "english": {
      "film": "Indru Netru Naalai",
      "song": "Kadhale Kadhale",
      "composer": "Hiphop Tamizha",
      "sourceRow": 9
    },
    "tamil": {
      "film": "இன்று நேற்று நாளை",
      "song": "Kadhale Kadhale",
      "composer": "ஹிப்ஹாப் தமிழா",
      "sourceRow": 9
    }
  },
  {
    "id": "master-song-007",
    "slug": "2015-mathura-naranga-kan-kangalil-7",
    "year": 2015,
    "sequence": 7,
    "kind": "film",
    "movieId": "master-work-004",
    "english": {
      "film": "Mathura Naranga",
      "song": "Kan Kangalil",
      "composer": "Sreejith Saachin",
      "sourceRow": 11
    },
    "tamil": {
      "film": "மதுர நரங்கா",
      "song": "Kan Kangalil",
      "composer": "ஸ்ரீஜித் சச்சின்",
      "sourceRow": 11
    }
  },
  {
    "id": "master-song-008",
    "slug": "2015-mathura-naranga-neer-alaigalil-8",
    "year": 2015,
    "sequence": 8,
    "kind": "film",
    "movieId": "master-work-004",
    "english": {
      "film": "Mathura Naranga",
      "song": "Neer Alaigalil",
      "composer": "Sreejith Saachin",
      "sourceRow": 12
    },
    "tamil": {
      "film": "மதுர நரங்கா",
      "song": "Neer Alaigalil",
      "composer": "ஸ்ரீஜித் சச்சின்",
      "sourceRow": 12
    }
  },
  {
    "id": "master-song-009",
    "slug": "2015-mathura-naranga-eee-kootil-nee-vaanam-9",
    "year": 2015,
    "sequence": 9,
    "kind": "film",
    "movieId": "master-work-004",
    "english": {
      "film": "Mathura Naranga",
      "song": "Eee Kootil (Nee Vaanam)",
      "composer": "Sreejith Saachin",
      "sourceRow": 13
    },
    "tamil": {
      "film": "மதுர நரங்கா",
      "song": "Eee Kootil (Nee Vaanam)",
      "composer": "ஸ்ரீஜித் சச்சின்",
      "sourceRow": 13
    }
  },
  {
    "id": "master-song-010",
    "slug": "2016-irudhi-suttru-hey-sandakaara-10",
    "year": 2016,
    "sequence": 10,
    "kind": "film",
    "movieId": "master-work-005",
    "english": {
      "film": "Irudhi Suttru",
      "song": "Hey Sandakaara",
      "composer": "Santhosh Narayanan",
      "sourceRow": 15
    },
    "tamil": {
      "film": "இறுதி சுற்று",
      "song": "Hey Sandakaara",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 15
    }
  },
  {
    "id": "master-song-011",
    "slug": "2016-irudhi-suttru-vaangaji-warning-11",
    "year": 2016,
    "sequence": 11,
    "kind": "film",
    "movieId": "master-work-005",
    "english": {
      "film": "Irudhi Suttru",
      "song": "Vaangaji Warning",
      "composer": "Santhosh Narayanan",
      "sourceRow": 16
    },
    "tamil": {
      "film": "இறுதி சுற்று",
      "song": "Vaangaji Warning",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 16
    }
  },
  {
    "id": "master-song-012",
    "slug": "2016-irudhi-suttru-usuru-narambula-12",
    "year": 2016,
    "sequence": 12,
    "kind": "film",
    "movieId": "master-work-005",
    "english": {
      "film": "Irudhi Suttru",
      "song": "Usuru Narambula",
      "composer": "Santhosh Narayanan",
      "sourceRow": 17
    },
    "tamil": {
      "film": "இறுதி சுற்று",
      "song": "Usuru Narambula",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 17
    }
  },
  {
    "id": "master-song-013",
    "slug": "2016-irudhi-suttru-kaalathi-miratti-13",
    "year": 2016,
    "sequence": 13,
    "kind": "film",
    "movieId": "master-work-005",
    "english": {
      "film": "Irudhi Suttru",
      "song": "Kaalathi Miratti",
      "composer": "Santhosh Narayanan",
      "sourceRow": 18
    },
    "tamil": {
      "film": "இறுதி சுற்று",
      "song": "Kaalathi Miratti",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 18
    }
  },
  {
    "id": "master-song-014",
    "slug": "2016-irudhi-suttru-poda-poda-14",
    "year": 2016,
    "sequence": 14,
    "kind": "film",
    "movieId": "master-work-005",
    "english": {
      "film": "Irudhi Suttru",
      "song": "Poda Poda",
      "composer": "Santhosh Narayanan",
      "sourceRow": 19
    },
    "tamil": {
      "film": "இறுதி சுற்று",
      "song": "Poda Poda",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 19
    }
  },
  {
    "id": "master-song-015",
    "slug": "2016-iraivi-ghost-bottle-15",
    "year": 2016,
    "sequence": 15,
    "kind": "film",
    "movieId": "master-work-006",
    "english": {
      "film": "Iraivi",
      "song": "Ghost Bottle",
      "sourceRow": 21
    },
    "tamil": {
      "film": "இறைவி",
      "song": "Ghost Bottle",
      "sourceRow": 21
    }
  },
  {
    "id": "master-song-016",
    "slug": "2016-iraivi-kalavara-kangal-16",
    "year": 2016,
    "sequence": 16,
    "kind": "film",
    "movieId": "master-work-006",
    "english": {
      "film": "Iraivi",
      "song": "Kalavara Kangal",
      "sourceRow": 22
    },
    "tamil": {
      "film": "இறைவி",
      "song": "Kalavara Kangal",
      "sourceRow": 22
    }
  },
  {
    "id": "master-song-017",
    "slug": "2016-iraivi-manidhi-17",
    "year": 2016,
    "sequence": 17,
    "kind": "film",
    "movieId": "master-work-006",
    "english": {
      "film": "Iraivi",
      "song": "Manidhi",
      "sourceRow": 23
    },
    "tamil": {
      "film": "இறைவி",
      "song": "Manidhi",
      "sourceRow": 23
    }
  },
  {
    "id": "master-song-018",
    "slug": "2016-iraivi-kaatril-18",
    "year": 2016,
    "sequence": 18,
    "kind": "film",
    "movieId": "master-work-006",
    "english": {
      "film": "Iraivi",
      "song": "Kaatril",
      "sourceRow": 24
    },
    "tamil": {
      "film": "இறைவி",
      "song": "Kaatril",
      "sourceRow": 24
    }
  },
  {
    "id": "master-song-019",
    "slug": "2016-iraivi-thodaamal-19",
    "year": 2016,
    "sequence": 19,
    "kind": "film",
    "movieId": "master-work-006",
    "english": {
      "film": "Iraivi",
      "song": "Thodaamal",
      "sourceRow": 25
    },
    "tamil": {
      "film": "இறைவி",
      "song": "Thodaamal",
      "sourceRow": 25
    }
  },
  {
    "id": "master-song-020",
    "slug": "2016-144-kenatha-kaanam-20",
    "year": 2016,
    "sequence": 20,
    "kind": "film",
    "movieId": "master-work-007",
    "english": {
      "film": "144",
      "song": "Kenatha Kaanam",
      "composer": "Sean Roldan",
      "sourceRow": 27
    },
    "tamil": {
      "film": "144",
      "song": "Kenatha Kaanam",
      "composer": "Sean Roldan",
      "sourceRow": 27
    }
  },
  {
    "id": "master-song-021",
    "slug": "2016-144-aagaa-21",
    "year": 2016,
    "sequence": 21,
    "kind": "film",
    "movieId": "master-work-007",
    "english": {
      "film": "144",
      "song": "Aagaa",
      "composer": "Sean Roldan",
      "sourceRow": 28
    },
    "tamil": {
      "film": "144",
      "song": "Aagaa",
      "composer": "Sean Roldan",
      "sourceRow": 28
    }
  },
  {
    "id": "master-song-022",
    "slug": "2016-aranmanai-2-maya-maya-22",
    "year": 2016,
    "sequence": 22,
    "kind": "film",
    "movieId": "master-work-008",
    "english": {
      "film": "Aranmanai 2",
      "song": "Maya Maya",
      "composer": "Hiphop Tamizha",
      "sourceRow": 30
    },
    "tamil": {
      "film": "அரண்மனை 2",
      "song": "Maya Maya",
      "composer": "ஹிப்ஹாப் தமிழா",
      "sourceRow": 30
    }
  },
  {
    "id": "master-song-023",
    "slug": "2016-jil-jung-juk-shoot-the-kuruvi-23",
    "year": 2016,
    "sequence": 23,
    "kind": "film",
    "movieId": "master-work-009",
    "english": {
      "film": "Jil Jung Juk",
      "song": "Shoot The Kuruvi",
      "composer": "Vishal Chandrasekhar",
      "sourceRow": 32
    },
    "tamil": {
      "film": "ஜில் ஜங் ஜக்",
      "song": "Shoot The Kuruvi",
      "composer": "விஷால் சந்திரசேகர்",
      "sourceRow": 32
    }
  },
  {
    "id": "master-song-024",
    "slug": "2016-jil-jung-juk-cassenova-24",
    "year": 2016,
    "sequence": 24,
    "kind": "film",
    "movieId": "master-work-009",
    "english": {
      "film": "Jil Jung Juk",
      "song": "Cassenova",
      "composer": "Vishal Chandrasekhar",
      "sourceRow": 33
    },
    "tamil": {
      "film": "ஜில் ஜங் ஜக்",
      "song": "Cassenova",
      "composer": "விஷால் சந்திரசேகர்",
      "sourceRow": 33
    }
  },
  {
    "id": "master-song-025",
    "slug": "2016-jil-jung-juk-domaru-lord-25",
    "year": 2016,
    "sequence": 25,
    "kind": "film",
    "movieId": "master-work-009",
    "english": {
      "film": "Jil Jung Juk",
      "song": "Domaru Lord",
      "composer": "Vishal Chandrasekhar",
      "sourceRow": 34
    },
    "tamil": {
      "film": "ஜில் ஜங் ஜக்",
      "song": "Domaru Lord",
      "composer": "விஷால் சந்திரசேகர்",
      "sourceRow": 34
    }
  },
  {
    "id": "master-song-026",
    "slug": "2016-jil-jung-juk-milano-kedi-26",
    "year": 2016,
    "sequence": 26,
    "kind": "film",
    "movieId": "master-work-009",
    "english": {
      "film": "Jil Jung Juk",
      "song": "Milano Kedi",
      "composer": "Vishal Chandrasekhar",
      "sourceRow": 35
    },
    "tamil": {
      "film": "ஜில் ஜங் ஜக்",
      "song": "Milano Kedi",
      "composer": "விஷால் சந்திரசேகர்",
      "sourceRow": 35
    }
  },
  {
    "id": "master-song-027",
    "slug": "2016-unakkul-naan-athiran-nadaiyil-27",
    "year": 2016,
    "sequence": 27,
    "kind": "film",
    "movieId": "master-work-010",
    "english": {
      "film": "Unakkul Naan",
      "song": "Athiran Nadaiyil",
      "composer": "Tony Britto",
      "sourceRow": 37
    },
    "tamil": {
      "film": "உனக்குள் நான்",
      "song": "Athiran Nadaiyil",
      "composer": "டோனி பிரிட்டோ",
      "sourceRow": 37
    }
  },
  {
    "id": "master-song-028",
    "slug": "2016-ka-ka-ka-aabathin-arikuri-sila-sil-sila-28",
    "year": 2016,
    "sequence": 28,
    "kind": "film",
    "movieId": "master-work-011",
    "english": {
      "film": "Ka Ka Ka",
      "song": "Aabathin Arikuri: Sila Sil Sila",
      "composer": "Amrith",
      "sourceRow": 38
    },
    "tamil": {
      "film": "Ka Ka Ka",
      "song": "Aabathin Arikuri: Sila Sil Sila",
      "composer": "Amrith",
      "sourceRow": 38
    }
  },
  {
    "id": "master-song-029",
    "slug": "2016-oru-naal-koothu-adiye-azhagu-29",
    "year": 2016,
    "sequence": 29,
    "kind": "film",
    "movieId": "master-work-012",
    "english": {
      "film": "Oru Naal Koothu",
      "song": "Adiye Azhagu",
      "composer": "Justin Prabhakaran",
      "sourceRow": 39
    },
    "tamil": {
      "film": "Oru Naal Koothu",
      "song": "Adiye Azhagu",
      "composer": "Justin Prabhakaran",
      "sourceRow": 39
    }
  },
  {
    "id": "master-song-030",
    "slug": "2016-maalai-nerathu-mayakkam-ennodu-irupuram-30",
    "year": 2016,
    "sequence": 30,
    "kind": "film",
    "movieId": "master-work-013",
    "english": {
      "film": "Maalai Nerathu Mayakkam",
      "song": "Ennodu Irupuram",
      "composer": "Amrith",
      "sourceRow": 40
    },
    "tamil": {
      "film": "Maalai Nerathu Mayakkam",
      "song": "Ennodu Irupuram",
      "composer": "Amrith",
      "sourceRow": 40
    }
  },
  {
    "id": "master-song-031",
    "slug": "2016-manithan-azhagazhaga-31",
    "year": 2016,
    "sequence": 31,
    "kind": "film",
    "movieId": "master-work-014",
    "english": {
      "film": "Manithan",
      "song": "Azhagazhaga",
      "composer": "Santhosh Narayanan",
      "sourceRow": 42
    },
    "tamil": {
      "film": "Manithan",
      "song": "Azhagazhaga",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 42
    }
  },
  {
    "id": "master-song-032",
    "slug": "2016-manithan-poi-vazhva-32",
    "year": 2016,
    "sequence": 32,
    "kind": "film",
    "movieId": "master-work-014",
    "english": {
      "film": "Manithan",
      "song": "Poi Vazhva",
      "composer": "Santhosh Narayanan",
      "sourceRow": 43
    },
    "tamil": {
      "film": "Manithan",
      "song": "Poi Vazhva",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 43
    }
  },
  {
    "id": "master-song-033",
    "slug": "2016-manithan-kaaychal-33",
    "year": 2016,
    "sequence": 33,
    "kind": "film",
    "movieId": "master-work-014",
    "english": {
      "film": "Manithan",
      "song": "Kaaychal",
      "composer": "Santhosh Narayanan",
      "sourceRow": 44
    },
    "tamil": {
      "film": "Manithan",
      "song": "Kaaychal",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 44
    }
  },
  {
    "id": "master-song-034",
    "slug": "2016-pokkiri-raja-athuvitta-athuvitta-34",
    "year": 2016,
    "sequence": 34,
    "kind": "film",
    "movieId": "master-work-015",
    "english": {
      "film": "Pokkiri Raja",
      "song": "Athuvitta Athuvitta",
      "composer": "D. Imman",
      "sourceRow": 46
    },
    "tamil": {
      "film": "Pokkiri Raja",
      "song": "Athuvitta Athuvitta",
      "composer": "D. Imman",
      "sourceRow": 46
    }
  },
  {
    "id": "master-song-035",
    "slug": "2016-pokkiri-raja-bubbly-bubbly-35",
    "year": 2016,
    "sequence": 35,
    "kind": "film",
    "movieId": "master-work-015",
    "english": {
      "film": "Pokkiri Raja",
      "song": "Bubbly Bubbly",
      "composer": "D. Imman",
      "sourceRow": 47
    },
    "tamil": {
      "film": "Pokkiri Raja",
      "song": "Bubbly Bubbly",
      "composer": "D. Imman",
      "sourceRow": 47
    }
  },
  {
    "id": "master-song-036",
    "slug": "2016-pokkiri-raja-rain-rain-36",
    "year": 2016,
    "sequence": 36,
    "kind": "film",
    "movieId": "master-work-015",
    "english": {
      "film": "Pokkiri Raja",
      "song": "Rain Rain",
      "composer": "D. Imman",
      "sourceRow": 48
    },
    "tamil": {
      "film": "Pokkiri Raja",
      "song": "Rain Rain",
      "composer": "D. Imman",
      "sourceRow": 48
    }
  },
  {
    "id": "master-song-037",
    "slug": "2016-pokkiri-raja-athuvitta-remix-37",
    "year": 2016,
    "sequence": 37,
    "kind": "film",
    "movieId": "master-work-015",
    "english": {
      "film": "Pokkiri Raja",
      "song": "Athuvitta Remix",
      "composer": "D. Imman",
      "sourceRow": 49
    },
    "tamil": {
      "film": "Pokkiri Raja",
      "song": "Athuvitta Remix",
      "composer": "D. Imman",
      "sourceRow": 49
    }
  },
  {
    "id": "master-song-038",
    "slug": "2016-kabali-thalaivar-athiradi-rap-38",
    "year": 2016,
    "sequence": 38,
    "kind": "film",
    "movieId": "master-work-016",
    "english": {
      "film": "Kabali",
      "song": "Thalaivar Athiradi Rap",
      "composer": "Santhosh Narayanan",
      "sourceRow": 51
    },
    "tamil": {
      "film": "Kabali",
      "song": "Thalaivar Athiradi Rap",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 51
    }
  },
  {
    "id": "master-song-039",
    "slug": "2016-merku-thodarchi-malai-merku-mak-39",
    "year": 2016,
    "sequence": 39,
    "kind": "film",
    "movieId": "master-work-017",
    "english": {
      "film": "Merku Thodarchi Malai",
      "song": "Merku Mak",
      "composer": "Illayaraja",
      "sourceRow": 52
    },
    "tamil": {
      "film": "Merku Thodarchi Malai",
      "song": "Merku Mak",
      "composer": "இளையராஜா",
      "sourceRow": 52
    }
  },
  {
    "id": "master-song-040",
    "slug": "2016-kadhalum-kadandhu-pogum-paravai-paranduchu-40",
    "year": 2016,
    "sequence": 40,
    "kind": "film",
    "movieId": "master-work-018",
    "english": {
      "film": "Kadhalum Kadandhu Pogum",
      "song": "Paravai Paranduchu",
      "composer": "Santhosh Narayanan",
      "sourceRow": 54
    },
    "tamil": {
      "film": "Kadhalum Kadandhu Pogum",
      "song": "Paravai Paranduchu",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 54
    }
  },
  {
    "id": "master-song-041",
    "slug": "2016-kadhalum-kadandhu-pogum-bongu-kitchan-41",
    "year": 2016,
    "sequence": 41,
    "kind": "film",
    "movieId": "master-work-018",
    "english": {
      "film": "Kadhalum Kadandhu Pogum",
      "song": "Bongu Kitchan",
      "composer": "Santhosh Narayanan",
      "sourceRow": 55
    },
    "tamil": {
      "film": "Kadhalum Kadandhu Pogum",
      "song": "Bongu Kitchan",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 55
    }
  },
  {
    "id": "master-song-042",
    "slug": "2016-sei-machaney-42",
    "year": 2016,
    "sequence": 42,
    "kind": "film",
    "movieId": "master-work-019",
    "english": {
      "film": "Sei",
      "song": "Machaney",
      "composer": "Nithin Lopez",
      "sourceRow": 57
    },
    "tamil": {
      "film": "Sei",
      "song": "Machaney",
      "composer": "Nithin Lopez",
      "sourceRow": 57
    }
  },
  {
    "id": "master-song-043",
    "slug": "2016-dhuruvangal-pathinaaru-uthira-kaayangal-43",
    "year": 2016,
    "sequence": 43,
    "kind": "film",
    "movieId": "master-work-020",
    "english": {
      "film": "Dhuruvangal Pathinaaru",
      "song": "Uthira Kaayangal",
      "composer": "Jakes Bejoy",
      "sourceRow": 58
    },
    "tamil": {
      "film": "Dhuruvangal Pathinaaru",
      "song": "Uthira Kaayangal",
      "composer": "Jakes Bejoy",
      "sourceRow": 58
    }
  },
  {
    "id": "master-song-044",
    "slug": "2016-meow-oru-cute-littile-ponnu-44",
    "year": 2016,
    "sequence": 44,
    "kind": "film",
    "movieId": "master-work-021",
    "english": {
      "film": "Meow",
      "song": "Oru Cute Littile Ponnu",
      "composer": "Sreejith Edarana",
      "sourceRow": 59
    },
    "tamil": {
      "film": "Meow",
      "song": "Oru Cute Littile Ponnu",
      "composer": "Sreejith Edarana",
      "sourceRow": 59
    }
  },
  {
    "id": "master-song-045",
    "slug": "2016-ulkuthu-pesayum-esaya-45",
    "year": 2016,
    "sequence": 45,
    "kind": "film",
    "movieId": "master-work-022",
    "english": {
      "film": "Ulkuthu",
      "song": "Pesayum Esaya",
      "composer": "Justin Prabhakaran",
      "sourceRow": 60
    },
    "tamil": {
      "film": "Ulkuthu",
      "song": "Pesayum Esaya",
      "composer": "Justin Prabhakaran",
      "sourceRow": 60
    }
  },
  {
    "id": "master-song-046",
    "slug": "2016-remo-meesa-beauty-46",
    "year": 2016,
    "sequence": 46,
    "kind": "film",
    "movieId": "master-work-023",
    "english": {
      "film": "Remo",
      "song": "Meesa Beauty",
      "composer": "Anirudh Ravichander",
      "sourceRow": 61
    },
    "tamil": {
      "film": "Remo",
      "song": "Meesa Beauty",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 61
    }
  },
  {
    "id": "master-song-047",
    "slug": "2016-aandavan-kattalai-polambing-47",
    "year": 2016,
    "sequence": 47,
    "kind": "film",
    "movieId": "master-work-024",
    "english": {
      "film": "Aandavan Kattalai",
      "song": "Polambing",
      "composer": "K",
      "sourceRow": 63
    },
    "tamil": {
      "film": "Aandavan Kattalai",
      "song": "Polambing",
      "composer": "K",
      "sourceRow": 63
    }
  },
  {
    "id": "master-song-048",
    "slug": "2016-aandavan-kattalai-imsai-raani-48",
    "year": 2016,
    "sequence": 48,
    "kind": "film",
    "movieId": "master-work-024",
    "english": {
      "film": "Aandavan Kattalai",
      "song": "Imsai Raani",
      "composer": "K",
      "sourceRow": 64
    },
    "tamil": {
      "film": "Aandavan Kattalai",
      "song": "Imsai Raani",
      "composer": "K",
      "sourceRow": 64
    }
  },
  {
    "id": "master-song-049",
    "slug": "2016-aandavan-kattalai-vaazhkai-oru-ottagam-49",
    "year": 2016,
    "sequence": 49,
    "kind": "film",
    "movieId": "master-work-024",
    "english": {
      "film": "Aandavan Kattalai",
      "song": "Vaazhkai Oru Ottagam",
      "composer": "K",
      "sourceRow": 65
    },
    "tamil": {
      "film": "Aandavan Kattalai",
      "song": "Vaazhkai Oru Ottagam",
      "composer": "K",
      "sourceRow": 65
    }
  },
  {
    "id": "master-song-050",
    "slug": "2016-kodi-ei-suzhali-50",
    "year": 2016,
    "sequence": 50,
    "kind": "film",
    "movieId": "master-work-025",
    "english": {
      "film": "Kodi",
      "song": "Ei Suzhali",
      "composer": "Santhosh Narayanan",
      "sourceRow": 67
    },
    "tamil": {
      "film": "Kodi",
      "song": "Ei Suzhali",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 67
    }
  },
  {
    "id": "master-song-051",
    "slug": "2016-kodi-sirukki-vaasam-51",
    "year": 2016,
    "sequence": 51,
    "kind": "film",
    "movieId": "master-work-025",
    "english": {
      "film": "Kodi",
      "song": "Sirukki Vaasam",
      "composer": "Santhosh Narayanan",
      "sourceRow": 68
    },
    "tamil": {
      "film": "Kodi",
      "song": "Sirukki Vaasam",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 68
    }
  },
  {
    "id": "master-song-052",
    "slug": "2016-kodi-vettu-pottu-52",
    "year": 2016,
    "sequence": 52,
    "kind": "film",
    "movieId": "master-work-025",
    "english": {
      "film": "Kodi",
      "song": "Vettu Pottu",
      "composer": "Santhosh Narayanan",
      "sourceRow": 69
    },
    "tamil": {
      "film": "Kodi",
      "song": "Vettu Pottu",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 69
    }
  },
  {
    "id": "master-song-053",
    "slug": "2016-kodi-ariraro-53",
    "year": 2016,
    "sequence": 53,
    "kind": "film",
    "movieId": "master-work-025",
    "english": {
      "film": "Kodi",
      "song": "Ariraro",
      "composer": "Santhosh Narayanan",
      "sourceRow": 70
    },
    "tamil": {
      "film": "Kodi",
      "song": "Ariraro",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 70
    }
  },
  {
    "id": "master-song-054",
    "slug": "2016-rum-peiyophobilia-54",
    "year": 2016,
    "sequence": 54,
    "kind": "film",
    "movieId": "master-work-026",
    "english": {
      "film": "Rum",
      "song": "Peiyophobilia",
      "composer": "Anirudh Ravichander",
      "sourceRow": 72
    },
    "tamil": {
      "film": "Rum",
      "song": "Peiyophobilia",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 72
    }
  },
  {
    "id": "master-song-055",
    "slug": "2016-rum-kadavulae-vidai-55",
    "year": 2016,
    "sequence": 55,
    "kind": "film",
    "movieId": "master-work-026",
    "english": {
      "film": "Rum",
      "song": "Kadavulae Vidai",
      "composer": "Anirudh Ravichander",
      "sourceRow": 73
    },
    "tamil": {
      "film": "Rum",
      "song": "Kadavulae Vidai",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 73
    }
  },
  {
    "id": "master-song-056",
    "slug": "2016-rum-kadavulae-vidai-reprise-56",
    "year": 2016,
    "sequence": 56,
    "kind": "film",
    "movieId": "master-work-026",
    "english": {
      "film": "Rum",
      "song": "Kadavulae Vidai (Reprise)",
      "composer": "Anirudh Ravichander",
      "sourceRow": 74
    },
    "tamil": {
      "film": "Rum",
      "song": "Kadavulae Vidai (Reprise)",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 74
    }
  },
  {
    "id": "master-song-057",
    "slug": "2016-rum-pori-pathi-vizhum-57",
    "year": 2016,
    "sequence": 57,
    "kind": "film",
    "movieId": "master-work-026",
    "english": {
      "film": "Rum",
      "song": "Pori Pathi Vizhum",
      "composer": "Anirudh Ravichander",
      "sourceRow": 75
    },
    "tamil": {
      "film": "Rum",
      "song": "Pori Pathi Vizhum",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 75
    }
  },
  {
    "id": "master-song-058",
    "slug": "2016-rum-alladhe-siragiye-58",
    "year": 2016,
    "sequence": 58,
    "kind": "film",
    "movieId": "master-work-026",
    "english": {
      "film": "Rum",
      "song": "Alladhe Siragiye",
      "composer": "Anirudh Ravichander",
      "sourceRow": 76
    },
    "tamil": {
      "film": "Rum",
      "song": "Alladhe Siragiye",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 76
    }
  },
  {
    "id": "master-song-059",
    "slug": "2017-sathriyan-sooda-oru-sooriyan-59",
    "year": 2017,
    "sequence": 59,
    "kind": "film",
    "movieId": "master-work-027",
    "english": {
      "film": "Sathriyan",
      "song": "Sooda Oru Sooriyan",
      "composer": "Yuvan Shankar Raja",
      "sourceRow": 78
    },
    "tamil": {
      "film": "Sathriyan",
      "song": "Sooda Oru Sooriyan",
      "composer": "யுவன் சங்கர் ராஜா",
      "sourceRow": 78
    }
  },
  {
    "id": "master-song-060",
    "slug": "2017-ivan-thanthiran-ivan-ivan-thanthiran-60",
    "year": 2017,
    "sequence": 60,
    "kind": "film",
    "movieId": "master-work-028",
    "english": {
      "film": "Ivan Thanthiran",
      "song": "Ivan Ivan thanthiran",
      "composer": "Thaman S",
      "sourceRow": 80
    },
    "tamil": {
      "film": "Ivan Thanthiran",
      "song": "Ivan Ivan thanthiran",
      "composer": "தமன் எஸ்",
      "sourceRow": 80
    }
  },
  {
    "id": "master-song-061",
    "slug": "2017-ivan-thanthiran-medhakavitta-medhakavitta-61",
    "year": 2017,
    "sequence": 61,
    "kind": "film",
    "movieId": "master-work-028",
    "english": {
      "film": "Ivan Thanthiran",
      "song": "Medhakavitta Medhakavitta",
      "composer": "Thaman S",
      "sourceRow": 81
    },
    "tamil": {
      "film": "Ivan Thanthiran",
      "song": "Medhakavitta Medhakavitta",
      "composer": "தமன் எஸ்",
      "sourceRow": 81
    }
  },
  {
    "id": "master-song-062",
    "slug": "2017-mersal-aalaporaan-thamizhan-62",
    "year": 2017,
    "sequence": 62,
    "kind": "film",
    "movieId": "master-work-029",
    "english": {
      "film": "Mersal",
      "song": "Aalaporaan Thamizhan",
      "composer": "A. R. Rahman",
      "note": "Best Lyricist - 7th South Indian International Movie Awards 2018",
      "sourceRow": 83
    },
    "tamil": {
      "film": "மெர்சல்",
      "song": "Aalaporaan Thamizhan",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "note": "Best Lyricist - 7th South Indian International Movie Awards 2018",
      "sourceRow": 83
    }
  },
  {
    "id": "master-song-063",
    "slug": "2017-mersal-neethanae-63",
    "year": 2017,
    "sequence": 63,
    "kind": "film",
    "movieId": "master-work-029",
    "english": {
      "film": "Mersal",
      "song": "Neethanae",
      "composer": "A. R. Rahman",
      "sourceRow": 84
    },
    "tamil": {
      "film": "மெர்சல்",
      "song": "Neethanae",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 84
    }
  },
  {
    "id": "master-song-064",
    "slug": "2017-mersal-mersal-arasan-64",
    "year": 2017,
    "sequence": 64,
    "kind": "film",
    "movieId": "master-work-029",
    "english": {
      "film": "Mersal",
      "song": "Mersal Arasan",
      "composer": "A. R. Rahman",
      "sourceRow": 85
    },
    "tamil": {
      "film": "மெர்சல்",
      "song": "Mersal Arasan",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 85
    }
  },
  {
    "id": "master-song-065",
    "slug": "2017-mersal-maacho-65",
    "year": 2017,
    "sequence": 65,
    "kind": "film",
    "movieId": "master-work-029",
    "english": {
      "film": "Mersal",
      "song": "Maacho",
      "composer": "A. R. Rahman",
      "sourceRow": 86
    },
    "tamil": {
      "film": "மெர்சல்",
      "song": "Maacho",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 86
    }
  },
  {
    "id": "master-song-066",
    "slug": "2017-mersal-maayon-66",
    "year": 2017,
    "sequence": 66,
    "kind": "film",
    "movieId": "master-work-029",
    "english": {
      "film": "Mersal",
      "song": "Maayon",
      "composer": "A. R. Rahman",
      "sourceRow": 87
    },
    "tamil": {
      "film": "மெர்சல்",
      "song": "Maayon",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 87
    }
  },
  {
    "id": "master-song-067",
    "slug": "2017-velaikkaran-vaa-velikkara-67",
    "year": 2017,
    "sequence": 67,
    "kind": "film",
    "movieId": "master-work-030",
    "english": {
      "film": "Velaikkaran",
      "song": "Vaa Velikkara",
      "composer": "Anirudh Ravichander",
      "sourceRow": 89
    },
    "tamil": {
      "film": "Velaikkaran",
      "song": "Vaa Velikkara",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 89
    }
  },
  {
    "id": "master-song-068",
    "slug": "2017-meyaadha-maan-thangachi-song-68",
    "year": 2017,
    "sequence": 68,
    "kind": "film",
    "movieId": "master-work-031",
    "english": {
      "film": "Meyaadha Maan",
      "song": "Thangachi Song",
      "composer": "Santhosh Narayanan",
      "sourceRow": 91
    },
    "tamil": {
      "film": "Meyaadha Maan",
      "song": "Thangachi Song",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 91
    }
  },
  {
    "id": "master-song-069",
    "slug": "2017-meyaadha-maan-address-song-69",
    "year": 2017,
    "sequence": 69,
    "kind": "film",
    "movieId": "master-work-031",
    "english": {
      "film": "Meyaadha Maan",
      "song": "Address Song",
      "composer": "Santhosh Narayanan",
      "sourceRow": 92
    },
    "tamil": {
      "film": "Meyaadha Maan",
      "song": "Address Song",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 92
    }
  },
  {
    "id": "master-song-070",
    "slug": "2017-meyaadha-maan-rathina-katti-70",
    "year": 2017,
    "sequence": 70,
    "kind": "film",
    "movieId": "master-work-031",
    "english": {
      "film": "Meyaadha Maan",
      "song": "Rathina Katti",
      "composer": "Santhosh Narayanan",
      "sourceRow": 93
    },
    "tamil": {
      "film": "Meyaadha Maan",
      "song": "Rathina Katti",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 93
    }
  },
  {
    "id": "master-song-071",
    "slug": "2017-meyaadha-maan-megamo-aval-71",
    "year": 2017,
    "sequence": 71,
    "kind": "film",
    "movieId": "master-work-031",
    "english": {
      "film": "Meyaadha Maan",
      "song": "Megamo Aval",
      "composer": "Santhosh Narayanan",
      "sourceRow": 94
    },
    "tamil": {
      "film": "Meyaadha Maan",
      "song": "Megamo Aval",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 94
    }
  },
  {
    "id": "master-song-072",
    "slug": "2017-theeran-adhigaaram-ondru-theeran-da-72",
    "year": 2017,
    "sequence": 72,
    "kind": "film",
    "movieId": "master-work-032",
    "english": {
      "film": "Theeran Adhigaaram Ondru",
      "song": "Theeran Da",
      "composer": "Ghibran",
      "sourceRow": 96
    },
    "tamil": {
      "film": "Theeran Adhigaaram Ondru",
      "song": "Theeran Da",
      "composer": "ஜிப்ரான்",
      "sourceRow": 96
    }
  },
  {
    "id": "master-song-073",
    "slug": "2018-sketch-cheeni-chillaallee-73",
    "year": 2018,
    "sequence": 73,
    "kind": "film",
    "movieId": "master-work-033",
    "english": {
      "film": "Sketch",
      "song": "Cheeni Chillaallee",
      "composer": "Thaman S",
      "sourceRow": 98
    },
    "tamil": {
      "film": "Sketch",
      "song": "Cheeni Chillaallee",
      "composer": "தமன் எஸ்",
      "sourceRow": 98
    }
  },
  {
    "id": "master-song-074",
    "slug": "2018-sketch-dhaadikaara-74",
    "year": 2018,
    "sequence": 74,
    "kind": "film",
    "movieId": "master-work-033",
    "english": {
      "film": "Sketch",
      "song": "Dhaadikaara",
      "composer": "Thaman S",
      "sourceRow": 99
    },
    "tamil": {
      "film": "Sketch",
      "song": "Dhaadikaara",
      "composer": "தமன் எஸ்",
      "sourceRow": 99
    }
  },
  {
    "id": "master-song-075",
    "slug": "2018-bhaagamathie-mandhaara-75",
    "year": 2018,
    "sequence": 75,
    "kind": "film",
    "movieId": "master-work-034",
    "english": {
      "film": "Bhaagamathie",
      "song": "Mandhaara",
      "sourceRow": 101
    },
    "tamil": {
      "film": "Bhaagamathie",
      "song": "Mandhaara",
      "sourceRow": 101
    }
  },
  {
    "id": "master-song-076",
    "slug": "2018-sarkar-simtaangaran-76",
    "year": 2018,
    "sequence": 76,
    "kind": "film",
    "movieId": "master-work-035",
    "english": {
      "film": "Sarkar",
      "song": "Simtaangaran",
      "composer": "A. R. Rahman",
      "sourceRow": 103
    },
    "tamil": {
      "film": "சர்கார்",
      "song": "Simtaangaran",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 103
    }
  },
  {
    "id": "master-song-077",
    "slug": "2018-sarkar-oruviral-puratchi-77",
    "year": 2018,
    "sequence": 77,
    "kind": "film",
    "movieId": "master-work-035",
    "english": {
      "film": "Sarkar",
      "song": "Oruviral Puratchi",
      "composer": "A. R. Rahman",
      "sourceRow": 104
    },
    "tamil": {
      "film": "சர்கார்",
      "song": "Oruviral Puratchi",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 104
    }
  },
  {
    "id": "master-song-078",
    "slug": "2018-sarkar-omg-ponnu-78",
    "year": 2018,
    "sequence": 78,
    "kind": "film",
    "movieId": "master-work-035",
    "english": {
      "film": "Sarkar",
      "song": "OMG Ponnu",
      "composer": "A. R. Rahman",
      "sourceRow": 105
    },
    "tamil": {
      "film": "சர்கார்",
      "song": "OMG Ponnu",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 105
    }
  },
  {
    "id": "master-song-079",
    "slug": "2018-sarkar-ceo-in-the-house-79",
    "year": 2018,
    "sequence": 79,
    "kind": "film",
    "movieId": "master-work-035",
    "english": {
      "film": "Sarkar",
      "song": "CEO In The House",
      "composer": "A. R. Rahman",
      "sourceRow": 106
    },
    "tamil": {
      "film": "சர்கார்",
      "song": "CEO In The House",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 106
    }
  },
  {
    "id": "master-song-080",
    "slug": "2018-sarkar-toptucker-80",
    "year": 2018,
    "sequence": 80,
    "kind": "film",
    "movieId": "master-work-035",
    "english": {
      "film": "Sarkar",
      "song": "TopTucker",
      "composer": "A. R. Rahman",
      "sourceRow": 107
    },
    "tamil": {
      "film": "சர்கார்",
      "song": "TopTucker",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 107
    }
  },
  {
    "id": "master-song-081",
    "slug": "2018-irumbu-thirai-azhagae-81",
    "year": 2018,
    "sequence": 81,
    "kind": "film",
    "movieId": "master-work-036",
    "english": {
      "film": "Irumbu Thirai",
      "song": "Azhagae",
      "composer": "Yuvan Shankar Raja",
      "sourceRow": 109
    },
    "tamil": {
      "film": "இரும்பு திரை",
      "song": "Azhagae",
      "composer": "யுவன் சங்கர் ராஜா",
      "sourceRow": 109
    }
  },
  {
    "id": "master-song-082",
    "slug": "2018-irumbu-thirai-athiradi-82",
    "year": 2018,
    "sequence": 82,
    "kind": "film",
    "movieId": "master-work-036",
    "english": {
      "film": "Irumbu Thirai",
      "song": "Athiradi",
      "composer": "Yuvan Shankar Raja",
      "sourceRow": 110
    },
    "tamil": {
      "film": "இரும்பு திரை",
      "song": "Athiradi",
      "composer": "யுவன் சங்கர் ராஜா",
      "sourceRow": 110
    }
  },
  {
    "id": "master-song-083",
    "slug": "2018-irumbu-thirai-mudhal-mazhai-83",
    "year": 2018,
    "sequence": 83,
    "kind": "film",
    "movieId": "master-work-036",
    "english": {
      "film": "Irumbu Thirai",
      "song": "Mudhal Mazhai",
      "composer": "Yuvan Shankar Raja",
      "sourceRow": 111
    },
    "tamil": {
      "film": "இரும்பு திரை",
      "song": "Mudhal Mazhai",
      "composer": "யுவன் சங்கர் ராஜா",
      "sourceRow": 111
    }
  },
  {
    "id": "master-song-084",
    "slug": "2018-kolamavu-kokila-edhuvaraiyo-84",
    "year": 2018,
    "sequence": 84,
    "kind": "film",
    "movieId": "master-work-037",
    "english": {
      "film": "Kolamavu Kokila",
      "song": "Edhuvaraiyo",
      "composer": "Anirudh Ravichander",
      "sourceRow": 113
    },
    "tamil": {
      "film": "Kolamavu Kokila",
      "song": "Edhuvaraiyo",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 113
    }
  },
  {
    "id": "master-song-085",
    "slug": "2018-pyaar-prema-kaadhal-hold-me-now-85",
    "year": 2018,
    "sequence": 85,
    "kind": "film",
    "movieId": "master-work-038",
    "english": {
      "film": "Pyaar Prema Kaadhal",
      "song": "Hold Me Now",
      "composer": "Yuvan Shankar Raja",
      "sourceRow": 114
    },
    "tamil": {
      "film": "ப்யார் ப்ரேமா காதல்",
      "song": "Hold Me Now",
      "composer": "யுவன் சங்கர் ராஜா",
      "sourceRow": 114
    }
  },
  {
    "id": "master-song-086",
    "slug": "2018-60-vayadu-maaniram-naalum-naalum-86",
    "year": 2018,
    "sequence": 86,
    "kind": "film",
    "movieId": "master-work-039",
    "english": {
      "film": "60 Vayadu Maaniram",
      "song": "Naalum Naalum",
      "composer": "Ilaiyaraaja",
      "sourceRow": 115
    },
    "tamil": {
      "film": "60 Vayadu Maaniram",
      "song": "Naalum Naalum",
      "composer": "Ilaiyaraaja",
      "sourceRow": 115
    }
  },
  {
    "id": "master-song-087",
    "slug": "2018-pariyerum-perumal-karuppi-87",
    "year": 2018,
    "sequence": 87,
    "kind": "film",
    "movieId": "master-work-040",
    "english": {
      "film": "Pariyerum Perumal",
      "song": "Karuppi",
      "composer": "Santhosh Narayanan",
      "sourceRow": 117
    },
    "tamil": {
      "film": "Pariyerum Perumal",
      "song": "Karuppi",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 117
    }
  },
  {
    "id": "master-song-088",
    "slug": "2018-pariyerum-perumal-potta-kaatil-poovasam-88",
    "year": 2018,
    "sequence": 88,
    "kind": "film",
    "movieId": "master-work-040",
    "english": {
      "film": "Pariyerum Perumal",
      "song": "Potta Kaatil Poovasam",
      "composer": "Santhosh Narayanan",
      "sourceRow": 118
    },
    "tamil": {
      "film": "Pariyerum Perumal",
      "song": "Potta Kaatil Poovasam",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 118
    }
  },
  {
    "id": "master-song-089",
    "slug": "2018-pariyerum-perumal-vaa-rayil-vida-polaama-89",
    "year": 2018,
    "sequence": 89,
    "kind": "film",
    "movieId": "master-work-040",
    "english": {
      "film": "Pariyerum Perumal",
      "song": "Vaa Rayil Vida Polaama",
      "composer": "Santhosh Narayanan",
      "sourceRow": 119
    },
    "tamil": {
      "film": "Pariyerum Perumal",
      "song": "Vaa Rayil Vida Polaama",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 119
    }
  },
  {
    "id": "master-song-090",
    "slug": "2018-kaali-arumbey-arumbey-90",
    "year": 2018,
    "sequence": 90,
    "kind": "film",
    "movieId": "master-work-041",
    "english": {
      "film": "Kaali",
      "song": "Arumbey Arumbey",
      "composer": "Vijay Antony",
      "sourceRow": 121
    },
    "tamil": {
      "film": "Kaali",
      "song": "Arumbey Arumbey",
      "composer": "விஜய் ஆண்டனி",
      "sourceRow": 121
    }
  },
  {
    "id": "master-song-091",
    "slug": "2018-vada-chennai-ennadi-maayavi-nee-91",
    "year": 2018,
    "sequence": 91,
    "kind": "film",
    "movieId": "master-work-042",
    "english": {
      "film": "Vada Chennai",
      "song": "Ennadi Maayavi Nee",
      "composer": "Santhosh Narayanan",
      "sourceRow": 123
    },
    "tamil": {
      "film": "Vada Chennai",
      "song": "Ennadi Maayavi Nee",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 123
    }
  },
  {
    "id": "master-song-092",
    "slug": "2018-vada-chennai-kaarkuzhal-kadavaiye-92",
    "year": 2018,
    "sequence": 92,
    "kind": "film",
    "movieId": "master-work-042",
    "english": {
      "film": "Vada Chennai",
      "song": "Kaarkuzhal Kadavaiye",
      "composer": "Santhosh Narayanan",
      "sourceRow": 124
    },
    "tamil": {
      "film": "Vada Chennai",
      "song": "Kaarkuzhal Kadavaiye",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 124
    }
  },
  {
    "id": "master-song-093",
    "slug": "2019-petta-marana-mass-93",
    "year": 2019,
    "sequence": 93,
    "kind": "film",
    "movieId": "master-work-043",
    "english": {
      "film": "Petta",
      "song": "Marana Mass",
      "composer": "Anirudh Ravichander",
      "sourceRow": 126
    },
    "tamil": {
      "film": "Petta",
      "song": "Marana Mass",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 126
    }
  },
  {
    "id": "master-song-094",
    "slug": "2019-petta-ullaallaa-94",
    "year": 2019,
    "sequence": 94,
    "kind": "film",
    "movieId": "master-work-043",
    "english": {
      "film": "Petta",
      "song": "Ullaallaa",
      "composer": "Anirudh Ravichander",
      "sourceRow": 127
    },
    "tamil": {
      "film": "Petta",
      "song": "Ullaallaa",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 127
    }
  },
  {
    "id": "master-song-095",
    "slug": "2019-petta-petta-paraak-95",
    "year": 2019,
    "sequence": 95,
    "kind": "film",
    "movieId": "master-work-043",
    "english": {
      "film": "Petta",
      "song": "Petta Paraak",
      "composer": "Anirudh Ravichander",
      "sourceRow": 128
    },
    "tamil": {
      "film": "Petta",
      "song": "Petta Paraak",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 128
    }
  },
  {
    "id": "master-song-096",
    "slug": "2019-dev-dai-machan-dev-96",
    "year": 2019,
    "sequence": 96,
    "kind": "film",
    "movieId": "master-work-044",
    "english": {
      "film": "Dev",
      "song": "Dai Machan Dev",
      "composer": "Harris Jayaraj",
      "sourceRow": 130
    },
    "tamil": {
      "film": "Dev",
      "song": "Dai Machan Dev",
      "composer": "Harris Jayaraj",
      "sourceRow": 130
    }
  },
  {
    "id": "master-song-097",
    "slug": "2019-boomerang-mughaiyazhi-97",
    "year": 2019,
    "sequence": 97,
    "kind": "film",
    "movieId": "master-work-045",
    "english": {
      "film": "Boomerang",
      "song": "Mughaiyazhi",
      "composer": "Radhan",
      "sourceRow": 132
    },
    "tamil": {
      "film": "Boomerang",
      "song": "Mughaiyazhi",
      "composer": "Radhan",
      "sourceRow": 132
    }
  },
  {
    "id": "master-song-098",
    "slug": "2019-boomerang-desame-98",
    "year": 2019,
    "sequence": 98,
    "kind": "film",
    "movieId": "master-work-045",
    "english": {
      "film": "Boomerang",
      "song": "Desame",
      "composer": "Radhan",
      "sourceRow": 133
    },
    "tamil": {
      "film": "Boomerang",
      "song": "Desame",
      "composer": "Radhan",
      "sourceRow": 133
    }
  },
  {
    "id": "master-song-099",
    "slug": "2019-boomerang-mughaiyazhi-instrumental-version-99",
    "year": 2019,
    "sequence": 99,
    "kind": "film",
    "movieId": "master-work-045",
    "english": {
      "film": "Boomerang",
      "song": "Mughaiyazhi (Instrumental Version)",
      "composer": "Radhan",
      "sourceRow": 134
    },
    "tamil": {
      "film": "Boomerang",
      "song": "Mughaiyazhi (Instrumental Version)",
      "composer": "Radhan",
      "sourceRow": 134
    }
  },
  {
    "id": "master-song-100",
    "slug": "2019-devarattam-pasampukalli-100",
    "year": 2019,
    "sequence": 100,
    "kind": "film",
    "movieId": "master-work-046",
    "english": {
      "film": "Devarattam",
      "song": "Pasampukalli",
      "composer": "Nivas K. Prasanna",
      "sourceRow": 136
    },
    "tamil": {
      "film": "Devarattam",
      "song": "Pasampukalli",
      "composer": "Nivas K. Prasanna",
      "sourceRow": 136
    }
  },
  {
    "id": "master-song-101",
    "slug": "2019-devarattam-lesa-lesa-101",
    "year": 2019,
    "sequence": 101,
    "kind": "film",
    "movieId": "master-work-046",
    "english": {
      "film": "Devarattam",
      "song": "Lesa Lesa",
      "composer": "Nivas K. Prasanna",
      "sourceRow": 137
    },
    "tamil": {
      "film": "Devarattam",
      "song": "Lesa Lesa",
      "composer": "Nivas K. Prasanna",
      "sourceRow": 137
    }
  },
  {
    "id": "master-song-102",
    "slug": "2019-oththa-seruppu-size-7-kulirudha-pulla-102",
    "year": 2019,
    "sequence": 102,
    "kind": "film",
    "movieId": "master-work-047",
    "english": {
      "film": "Oththa Seruppu Size 7",
      "song": "Kulirudha Pulla",
      "composer": "Santhosh Narayanan",
      "sourceRow": 139
    },
    "tamil": {
      "film": "Oththa Seruppu Size 7",
      "song": "Kulirudha Pulla",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 139
    }
  },
  {
    "id": "master-song-103",
    "slug": "2019-jackpot-shero-shero-103",
    "year": 2019,
    "sequence": 103,
    "kind": "film",
    "movieId": "master-work-048",
    "english": {
      "film": "Jackpot",
      "song": "Shero Shero",
      "composer": "Vishal Chandrasekhar",
      "sourceRow": 140
    },
    "tamil": {
      "film": "Jackpot",
      "song": "Shero Shero",
      "composer": "விஷால் சந்திரசேகர்",
      "sourceRow": 140
    }
  },
  {
    "id": "master-song-104",
    "slug": "2019-ayogya-kanne-kanne-104",
    "year": 2019,
    "sequence": 104,
    "kind": "film",
    "movieId": "master-work-049",
    "english": {
      "film": "Ayogya",
      "song": "Kanne Kanne",
      "composer": "Sam C.S.",
      "sourceRow": 141
    },
    "tamil": {
      "film": "Ayogya",
      "song": "Kanne Kanne",
      "composer": "சாம் சி.எஸ்.",
      "sourceRow": 141
    }
  },
  {
    "id": "master-song-105",
    "slug": "2019-sindhubaadh-nenja-unakaga-105",
    "year": 2019,
    "sequence": 105,
    "kind": "film",
    "movieId": "master-work-050",
    "english": {
      "film": "Sindhubaadh",
      "song": "Nenja Unakaga",
      "composer": "Yuvan Shankar Raja",
      "sourceRow": 142
    },
    "tamil": {
      "film": "Sindhubaadh",
      "song": "Nenja Unakaga",
      "composer": "யுவன் சங்கர் ராஜா",
      "sourceRow": 142
    }
  },
  {
    "id": "master-song-106",
    "slug": "2019-bigil-singappenney-106",
    "year": 2019,
    "sequence": 106,
    "kind": "film",
    "movieId": "master-work-051",
    "english": {
      "film": "Bigil",
      "song": "Singappenney",
      "composer": "A. R. Rahman",
      "note": "Best Lyrics Writer - South Indian International Movie Awards 2021",
      "sourceRow": 144
    },
    "tamil": {
      "film": "பிகில்",
      "song": "Singappenney",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "note": "Best Lyrics Writer - South Indian International Movie Awards 2021",
      "sourceRow": 144
    }
  },
  {
    "id": "master-song-107",
    "slug": "2019-bigil-verithanam-107",
    "year": 2019,
    "sequence": 107,
    "kind": "film",
    "movieId": "master-work-051",
    "english": {
      "film": "Bigil",
      "song": "Verithanam",
      "composer": "A. R. Rahman",
      "sourceRow": 145
    },
    "tamil": {
      "film": "பிகில்",
      "song": "Verithanam",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 145
    }
  },
  {
    "id": "master-song-108",
    "slug": "2019-bigil-unakaga-108",
    "year": 2019,
    "sequence": 108,
    "kind": "film",
    "movieId": "master-work-051",
    "english": {
      "film": "Bigil",
      "song": "Unakaga",
      "composer": "A. R. Rahman",
      "sourceRow": 146
    },
    "tamil": {
      "film": "பிகில்",
      "song": "Unakaga",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 146
    }
  },
  {
    "id": "master-song-109",
    "slug": "2019-bigil-maathare-109",
    "year": 2019,
    "sequence": 109,
    "kind": "film",
    "movieId": "master-work-051",
    "english": {
      "film": "Bigil",
      "song": "Maathare",
      "composer": "A. R. Rahman",
      "sourceRow": 147
    },
    "tamil": {
      "film": "பிகில்",
      "song": "Maathare",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 147
    }
  },
  {
    "id": "master-song-110",
    "slug": "2019-bigil-kaalame-110",
    "year": 2019,
    "sequence": 110,
    "kind": "film",
    "movieId": "master-work-051",
    "english": {
      "film": "Bigil",
      "song": "Kaalame",
      "composer": "A. R. Rahman",
      "sourceRow": 148
    },
    "tamil": {
      "film": "பிகில்",
      "song": "Kaalame",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 148
    }
  },
  {
    "id": "master-song-111",
    "slug": "2019-bigil-idhurkuthaan-111",
    "year": 2019,
    "sequence": 111,
    "kind": "film",
    "movieId": "master-work-051",
    "english": {
      "film": "Bigil",
      "song": "Idhurkuthaan",
      "composer": "A. R. Rahman",
      "sourceRow": 149
    },
    "tamil": {
      "film": "பிகில்",
      "song": "Idhurkuthaan",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 149
    }
  },
  {
    "id": "master-song-112",
    "slug": "2019-frozen-2-tamil-vaadai-serum-112",
    "year": 2019,
    "sequence": 112,
    "kind": "film",
    "movieId": "master-work-052",
    "english": {
      "film": "Frozen 2 (Tamil)",
      "song": "Vaadai Serum",
      "composer": "Robert Lopez Kristen Anderson-Lopez",
      "sourceRow": 151
    },
    "tamil": {
      "film": "Frozen 2 (Tamil)",
      "song": "Vaadai Serum",
      "composer": "Robert Lopez Kristen Anderson-Lopez",
      "sourceRow": 151
    }
  },
  {
    "id": "master-song-113",
    "slug": "2019-frozen-2-tamil-siladhu-113",
    "year": 2019,
    "sequence": 113,
    "kind": "film",
    "movieId": "master-work-052",
    "english": {
      "film": "Frozen 2 (Tamil)",
      "song": "Siladhu",
      "composer": "Robert Lopez Kristen Anderson-Lopez",
      "sourceRow": 152
    },
    "tamil": {
      "film": "Frozen 2 (Tamil)",
      "song": "Siladhu",
      "composer": "Robert Lopez Kristen Anderson-Lopez",
      "sourceRow": 152
    }
  },
  {
    "id": "master-song-114",
    "slug": "2019-frozen-2-tamil-izhukkum-maayoll-114",
    "year": 2019,
    "sequence": 114,
    "kind": "film",
    "movieId": "master-work-052",
    "english": {
      "film": "Frozen 2 (Tamil)",
      "song": "Izhukkum Maayoll",
      "composer": "Robert Lopez Kristen Anderson-Lopez",
      "sourceRow": 153
    },
    "tamil": {
      "film": "Frozen 2 (Tamil)",
      "song": "Izhukkum Maayoll",
      "composer": "Robert Lopez Kristen Anderson-Lopez",
      "sourceRow": 153
    }
  },
  {
    "id": "master-song-115",
    "slug": "2019-frozen-2-tamil-nadu-kattukkul-naan-115",
    "year": 2019,
    "sequence": 115,
    "kind": "film",
    "movieId": "master-work-052",
    "english": {
      "film": "Frozen 2 (Tamil)",
      "song": "Nadu Kattukkul Naan",
      "composer": "Robert Lopez Kristen Anderson-Lopez",
      "sourceRow": 154
    },
    "tamil": {
      "film": "Frozen 2 (Tamil)",
      "song": "Nadu Kattukkul Naan",
      "composer": "Robert Lopez Kristen Anderson-Lopez",
      "sourceRow": 154
    }
  },
  {
    "id": "master-song-116",
    "slug": "2019-frozen-2-tamil-thondru-nee-116",
    "year": 2019,
    "sequence": 116,
    "kind": "film",
    "movieId": "master-work-052",
    "english": {
      "film": "Frozen 2 (Tamil)",
      "song": "Thondru Nee",
      "composer": "Robert Lopez Kristen Anderson-Lopez",
      "sourceRow": 155
    },
    "tamil": {
      "film": "Frozen 2 (Tamil)",
      "song": "Thondru Nee",
      "composer": "Robert Lopez Kristen Anderson-Lopez",
      "sourceRow": 155
    }
  },
  {
    "id": "master-song-117",
    "slug": "2019-frozen-2-tamil-naatkal-oda-117",
    "year": 2019,
    "sequence": 117,
    "kind": "film",
    "movieId": "master-work-052",
    "english": {
      "film": "Frozen 2 (Tamil)",
      "song": "Naatkal Oda",
      "composer": "Robert Lopez Kristen Anderson-Lopez",
      "sourceRow": 156
    },
    "tamil": {
      "film": "Frozen 2 (Tamil)",
      "song": "Naatkal Oda",
      "composer": "Robert Lopez Kristen Anderson-Lopez",
      "sourceRow": 156
    }
  },
  {
    "id": "master-song-118",
    "slug": "2019-frozen-2-tamil-seiven-sariyanathai-118",
    "year": 2019,
    "sequence": 118,
    "kind": "film",
    "movieId": "master-work-052",
    "english": {
      "film": "Frozen 2 (Tamil)",
      "song": "Seiven Sariyanathai",
      "composer": "Robert Lopez Kristen Anderson-Lopez",
      "sourceRow": 157
    },
    "tamil": {
      "film": "Frozen 2 (Tamil)",
      "song": "Seiven Sariyanathai",
      "composer": "Robert Lopez Kristen Anderson-Lopez",
      "sourceRow": 157
    }
  },
  {
    "id": "master-song-119",
    "slug": "2019-adithya-varma-yaarumillaa-119",
    "year": 2019,
    "sequence": 119,
    "kind": "film",
    "movieId": "master-work-053",
    "english": {
      "film": "Adithya Varma",
      "song": "Yaarumillaa",
      "composer": "Radhan",
      "sourceRow": 159
    },
    "tamil": {
      "film": "Adithya Varma",
      "song": "Yaarumillaa",
      "composer": "Radhan",
      "sourceRow": 159
    }
  },
  {
    "id": "master-song-120",
    "slug": "2019-thambi-thalattu-naal-120",
    "year": 2019,
    "sequence": 120,
    "kind": "film",
    "movieId": "master-work-054",
    "english": {
      "film": "Thambi",
      "song": "Thalattu Naal",
      "composer": "Govind Vasantha",
      "sourceRow": 160
    },
    "tamil": {
      "film": "Thambi",
      "song": "Thalattu Naal",
      "composer": "Govind Vasantha",
      "sourceRow": 160
    }
  },
  {
    "id": "master-song-121",
    "slug": "2020-darbar-chumma-kizhi-121",
    "year": 2020,
    "sequence": 121,
    "kind": "film",
    "movieId": "master-work-055",
    "english": {
      "film": "Darbar",
      "song": "Chumma Kizhi",
      "composer": "Anirudh Ravichander",
      "sourceRow": 162
    },
    "tamil": {
      "film": "தர்பார்",
      "song": "Chumma Kizhi",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 162
    }
  },
  {
    "id": "master-song-122",
    "slug": "2020-darbar-tharam-maara-single-122",
    "year": 2020,
    "sequence": 122,
    "kind": "film",
    "movieId": "master-work-055",
    "english": {
      "film": "Darbar",
      "song": "Tharam Maara Single",
      "composer": "Anirudh Ravichander",
      "sourceRow": 163
    },
    "tamil": {
      "film": "தர்பார்",
      "song": "Tharam Maara Single",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 163
    }
  },
  {
    "id": "master-song-123",
    "slug": "2020-darbar-dumm-dumm-123",
    "year": 2020,
    "sequence": 123,
    "kind": "film",
    "movieId": "master-work-055",
    "english": {
      "film": "Darbar",
      "song": "Dumm Dumm",
      "composer": "Anirudh Ravichander",
      "sourceRow": 164
    },
    "tamil": {
      "film": "தர்பார்",
      "song": "Dumm Dumm",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 164
    }
  },
  {
    "id": "master-song-124",
    "slug": "2020-pattas-morattu-tamizhan-124",
    "year": 2020,
    "sequence": 124,
    "kind": "film",
    "movieId": "master-work-056",
    "english": {
      "film": "Pattas",
      "song": "Morattu Tamizhan",
      "composer": "Vivek-Mervin",
      "sourceRow": 166
    },
    "tamil": {
      "film": "பட்டாஸ்",
      "song": "Morattu Tamizhan",
      "composer": "Vivek-Mervin",
      "sourceRow": 166
    }
  },
  {
    "id": "master-song-125",
    "slug": "2020-pattas-jigidi-killadi-125",
    "year": 2020,
    "sequence": 125,
    "kind": "film",
    "movieId": "master-work-056",
    "english": {
      "film": "Pattas",
      "song": "Jigidi Killadi",
      "composer": "Vivek-Mervin",
      "sourceRow": 167
    },
    "tamil": {
      "film": "பட்டாஸ்",
      "song": "Jigidi Killadi",
      "composer": "Vivek-Mervin",
      "sourceRow": 167
    }
  },
  {
    "id": "master-song-126",
    "slug": "2020-soorarai-pottru-veyyon-silli-126",
    "year": 2020,
    "sequence": 126,
    "kind": "film",
    "movieId": "master-work-057",
    "english": {
      "film": "Soorarai Pottru",
      "song": "Veyyon Silli",
      "composer": "G.V. Prakash Kumar",
      "sourceRow": 169
    },
    "tamil": {
      "film": "Soorarai Pottru",
      "song": "Veyyon Silli",
      "composer": "ஜி. வி. ப்ரகாஷ் குமார்",
      "sourceRow": 169
    }
  },
  {
    "id": "master-song-127",
    "slug": "2020-ponmagal-vandhal-vaa-chellam-127",
    "year": 2020,
    "sequence": 127,
    "kind": "film",
    "movieId": "master-work-058",
    "english": {
      "film": "Ponmagal Vandhal",
      "song": "Vaa Chellam",
      "composer": "Govind Vasantha",
      "sourceRow": 171
    },
    "tamil": {
      "film": "பொன்மகள் வந்தாள்",
      "song": "Vaa Chellam",
      "composer": "Govind Vasantha",
      "sourceRow": 171
    }
  },
  {
    "id": "master-song-128",
    "slug": "2020-ponmagal-vandhal-pookalin-porvai-128",
    "year": 2020,
    "sequence": 128,
    "kind": "film",
    "movieId": "master-work-058",
    "english": {
      "film": "Ponmagal Vandhal",
      "song": "Pookalin Porvai",
      "composer": "Govind Vasantha",
      "sourceRow": 172
    },
    "tamil": {
      "film": "பொன்மகள் வந்தாள்",
      "song": "Pookalin Porvai",
      "composer": "Govind Vasantha",
      "sourceRow": 172
    }
  },
  {
    "id": "master-song-129",
    "slug": "2020-penguin-kolame-129",
    "year": 2020,
    "sequence": 129,
    "kind": "film",
    "movieId": "master-work-059",
    "english": {
      "film": "Penguin",
      "song": "Kolame",
      "composer": "Santhosh Narayanan",
      "sourceRow": 174
    },
    "tamil": {
      "film": "பெங்குயின்",
      "song": "Kolame",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 174
    }
  },
  {
    "id": "master-song-130",
    "slug": "2020-penguin-omale-malayalam-130",
    "year": 2020,
    "sequence": 130,
    "kind": "film",
    "movieId": "master-work-059",
    "english": {
      "film": "Penguin",
      "song": "Omale (Malayalam)",
      "composer": "Santhosh Narayanan",
      "sourceRow": 175
    },
    "tamil": {
      "film": "பெங்குயின்",
      "song": "Omale (Malayalam)",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 175
    }
  },
  {
    "id": "master-song-131",
    "slug": "2020-jagame-thandhiram-rakita-rakita-rakita-131",
    "year": 2020,
    "sequence": 131,
    "kind": "film",
    "movieId": "master-work-060",
    "english": {
      "film": "Jagame Thandhiram",
      "song": "Rakita Rakita Rakita",
      "sourceRow": 177
    },
    "tamil": {
      "film": "Jagame Thandhiram",
      "song": "Rakita Rakita Rakita",
      "sourceRow": 177
    }
  },
  {
    "id": "master-song-132",
    "slug": "2020-jagame-thandhiram-bujji-132",
    "year": 2020,
    "sequence": 132,
    "kind": "film",
    "movieId": "master-work-060",
    "english": {
      "film": "Jagame Thandhiram",
      "song": "Bujji",
      "sourceRow": 178
    },
    "tamil": {
      "film": "Jagame Thandhiram",
      "song": "Bujji",
      "sourceRow": 178
    }
  },
  {
    "id": "master-song-133",
    "slug": "2020-jagame-thandhiram-aala-ola-133",
    "year": 2020,
    "sequence": 133,
    "kind": "film",
    "movieId": "master-work-060",
    "english": {
      "film": "Jagame Thandhiram",
      "song": "Aala Ola",
      "sourceRow": 179
    },
    "tamil": {
      "film": "Jagame Thandhiram",
      "song": "Aala Ola",
      "sourceRow": 179
    }
  },
  {
    "id": "master-song-134",
    "slug": "2020-99-songs-oor-aayiram-vaanavil-134",
    "year": 2020,
    "sequence": 134,
    "kind": "film",
    "movieId": "master-work-061",
    "english": {
      "film": "99 Songs",
      "song": "Oor Aayiram Vaanavil",
      "composer": "A. R. Rahman",
      "sourceRow": 181
    },
    "tamil": {
      "film": "99 Songs",
      "song": "Oor Aayiram Vaanavil",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 181
    }
  },
  {
    "id": "master-song-135",
    "slug": "2020-99-songs-naalai-naalai-135",
    "year": 2020,
    "sequence": 135,
    "kind": "film",
    "movieId": "master-work-061",
    "english": {
      "film": "99 Songs",
      "song": "Naalai Naalai",
      "composer": "A. R. Rahman",
      "sourceRow": 182
    },
    "tamil": {
      "film": "99 Songs",
      "song": "Naalai Naalai",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 182
    }
  },
  {
    "id": "master-song-136",
    "slug": "2020-vasantha-mullai-avalo-avalo-136",
    "year": 2020,
    "sequence": 136,
    "kind": "film",
    "movieId": "master-work-062",
    "english": {
      "film": "Vasantha Mullai",
      "song": "Avalo Avalo",
      "composer": "Rajesh Murugesan",
      "sourceRow": 184
    },
    "tamil": {
      "film": "Vasantha Mullai",
      "song": "Avalo Avalo",
      "composer": "Rajesh Murugesan",
      "sourceRow": 184
    }
  },
  {
    "id": "master-song-137",
    "slug": "2020-sabhaapathy-mayakkathe-maya-kanna-137",
    "year": 2020,
    "sequence": 137,
    "kind": "film",
    "movieId": "master-work-063",
    "english": {
      "film": "Sabhaapathy",
      "song": "Mayakkathe Maya Kanna",
      "composer": "Sam C.S.",
      "sourceRow": 185
    },
    "tamil": {
      "film": "Sabhaapathy",
      "song": "Mayakkathe Maya Kanna",
      "composer": "சாம் சி.எஸ்.",
      "sourceRow": 185
    }
  },
  {
    "id": "master-song-138",
    "slug": "2021-annabelle-sethupathi-anange-138",
    "year": 2021,
    "sequence": 138,
    "kind": "film",
    "movieId": "master-work-064",
    "english": {
      "film": "Annabelle Sethupathi",
      "song": "Anange",
      "composer": "Krishna Kishore",
      "sourceRow": 187
    },
    "tamil": {
      "film": "Annabelle Sethupathi",
      "song": "Anange",
      "composer": "Krishna Kishore",
      "sourceRow": 187
    }
  },
  {
    "id": "master-song-139",
    "slug": "2021-annabelle-sethupathi-anange-reprise-139",
    "year": 2021,
    "sequence": 139,
    "kind": "film",
    "movieId": "master-work-064",
    "english": {
      "film": "Annabelle Sethupathi",
      "song": "Anange(Reprise)",
      "composer": "Krishna Kishore",
      "sourceRow": 188
    },
    "tamil": {
      "film": "Annabelle Sethupathi",
      "song": "Anange(Reprise)",
      "composer": "Krishna Kishore",
      "sourceRow": 188
    }
  },
  {
    "id": "master-song-140",
    "slug": "2021-oh-manapenne-bodhai-kaname-140",
    "year": 2021,
    "sequence": 140,
    "kind": "film",
    "movieId": "master-work-065",
    "english": {
      "film": "Oh Manapenne!",
      "song": "Bodhai Kaname",
      "composer": "Vishal Chandrashekhar",
      "sourceRow": 190
    },
    "tamil": {
      "film": "Oh Manapenne!",
      "song": "Bodhai Kaname",
      "composer": "விஷால் சந்திரசேகர்",
      "sourceRow": 190
    }
  },
  {
    "id": "master-song-141",
    "slug": "2021-enemy-tum-tum-141",
    "year": 2021,
    "sequence": 141,
    "kind": "film",
    "movieId": "master-work-066",
    "english": {
      "film": "Enemy",
      "song": "Tum Tum",
      "composer": "Thaman S",
      "sourceRow": 191
    },
    "tamil": {
      "film": "Enemy",
      "song": "Tum Tum",
      "composer": "தமன் எஸ்",
      "sourceRow": 191
    }
  },
  {
    "id": "master-song-142",
    "slug": "2021-galatta-kalyanam-sooraavali-ponnu-142",
    "year": 2021,
    "sequence": 142,
    "kind": "film",
    "movieId": "master-work-067",
    "english": {
      "film": "Galatta Kalyanam",
      "song": "Sooraavali Ponnu",
      "composer": "A. R. Rahman",
      "sourceRow": 192
    },
    "tamil": {
      "film": "Galatta Kalyanam",
      "song": "Sooraavali Ponnu",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 192
    }
  },
  {
    "id": "master-song-143",
    "slug": "2021-anbarivu-arakkiyae-143",
    "year": 2021,
    "sequence": 143,
    "kind": "film",
    "movieId": "master-work-068",
    "english": {
      "film": "Anbarivu",
      "song": "Arakkiyae",
      "composer": "Hiphop Tamizha",
      "sourceRow": 193
    },
    "tamil": {
      "film": "Anbarivu",
      "song": "Arakkiyae",
      "composer": "ஹிப்ஹாப் தமிழா",
      "sourceRow": 193
    }
  },
  {
    "id": "master-song-144",
    "slug": "2022-naai-sekar-lol-lol-arasan-144",
    "year": 2022,
    "sequence": 144,
    "kind": "film",
    "movieId": "master-work-069",
    "english": {
      "film": "Naai Sekar",
      "song": "Lol Lol Arasan",
      "composer": "Ajesh",
      "sourceRow": 195
    },
    "tamil": {
      "film": "Naai Sekar",
      "song": "Lol Lol Arasan",
      "composer": "Ajesh",
      "sourceRow": 195
    }
  },
  {
    "id": "master-song-145",
    "slug": "2022-maaran-polladha-ulagam-145",
    "year": 2022,
    "sequence": 145,
    "kind": "film",
    "movieId": "master-work-070",
    "english": {
      "film": "Maaran",
      "song": "Polladha Ulagam",
      "composer": "G.V. Prakash Kumar",
      "note": "Also Screenplay writer",
      "sourceRow": 197
    },
    "tamil": {
      "film": "மாறன்",
      "song": "Polladha Ulagam",
      "composer": "ஜி. வி. ப்ரகாஷ் குமார்",
      "note": "Also Screenplay writer",
      "sourceRow": 197
    }
  },
  {
    "id": "master-song-146",
    "slug": "2022-maaran-annana-thaalaattum-146",
    "year": 2022,
    "sequence": 146,
    "kind": "film",
    "movieId": "master-work-070",
    "english": {
      "film": "Maaran",
      "song": "Annana Thaalaattum",
      "composer": "G.V. Prakash Kumar",
      "sourceRow": 198
    },
    "tamil": {
      "film": "மாறன்",
      "song": "Annana Thaalaattum",
      "composer": "ஜி. வி. ப்ரகாஷ் குமார்",
      "sourceRow": 198
    }
  },
  {
    "id": "master-song-147",
    "slug": "2022-mahaan-evanda-enakku-custody-147",
    "year": 2022,
    "sequence": 147,
    "kind": "film",
    "movieId": "master-work-071",
    "english": {
      "film": "Mahaan",
      "song": "Evanda Enakku Custody",
      "composer": "Santhosh Narayanan",
      "sourceRow": 200
    },
    "tamil": {
      "film": "மகான்",
      "song": "Evanda Enakku Custody",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 200
    }
  },
  {
    "id": "master-song-148",
    "slug": "2022-mahaan-missing-me-148",
    "year": 2022,
    "sequence": 148,
    "kind": "film",
    "movieId": "master-work-071",
    "english": {
      "film": "Mahaan",
      "song": "Missing Me",
      "composer": "Santhosh Narayanan",
      "sourceRow": 201
    },
    "tamil": {
      "film": "மகான்",
      "song": "Missing Me",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 201
    }
  },
  {
    "id": "master-song-149",
    "slug": "2022-mahaan-naan-naan-149",
    "year": 2022,
    "sequence": 149,
    "kind": "film",
    "movieId": "master-work-071",
    "english": {
      "film": "Mahaan",
      "song": "Naan Naan",
      "composer": "Santhosh Narayanan",
      "sourceRow": 202
    },
    "tamil": {
      "film": "மகான்",
      "song": "Naan Naan",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 202
    }
  },
  {
    "id": "master-song-150",
    "slug": "2022-mahaan-umm-song-150",
    "year": 2022,
    "sequence": 150,
    "kind": "film",
    "movieId": "master-work-071",
    "english": {
      "film": "Mahaan",
      "song": "Umm Song",
      "composer": "Santhosh Narayanan",
      "sourceRow": 203
    },
    "tamil": {
      "film": "மகான்",
      "song": "Umm Song",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 203
    }
  },
  {
    "id": "master-song-151",
    "slug": "2022-veeramae-vaagai-soodum-thithikkirathe-kangal-151",
    "year": 2022,
    "sequence": 151,
    "kind": "film",
    "movieId": "master-work-072",
    "english": {
      "film": "Veeramae Vaagai Soodum",
      "song": "Thithikkirathe Kangal",
      "composer": "Yuvan Shankar Raja",
      "sourceRow": 205
    },
    "tamil": {
      "film": "வீரமே வாகை சூடும்",
      "song": "Thithikkirathe Kangal",
      "composer": "யுவன் சங்கர் ராஜா",
      "sourceRow": 205
    }
  },
  {
    "id": "master-song-152",
    "slug": "2022-beast-beast-mode-152",
    "year": 2022,
    "sequence": 152,
    "kind": "film",
    "movieId": "master-work-073",
    "english": {
      "film": "Beast",
      "song": "Beast Mode",
      "composer": "Anirudh Ravichander",
      "sourceRow": 206
    },
    "tamil": {
      "film": "பீஸ்ட்",
      "song": "Beast Mode",
      "composer": "Anirudh Ravichander",
      "sourceRow": 206
    }
  },
  {
    "id": "master-song-153",
    "slug": "2022-ranga-mathapoo-153",
    "year": 2022,
    "sequence": 153,
    "kind": "film",
    "movieId": "master-work-074",
    "english": {
      "film": "Ranga",
      "song": "Mathapoo",
      "composer": "Ramjeevan",
      "sourceRow": 207
    },
    "tamil": {
      "film": "Ranga",
      "song": "Mathapoo",
      "composer": "Ramjeevan",
      "sourceRow": 207
    }
  },
  {
    "id": "master-song-154",
    "slug": "2022-ayngaran-thithipa-154",
    "year": 2022,
    "sequence": 154,
    "kind": "film",
    "movieId": "master-work-075",
    "english": {
      "film": "Ayngaran",
      "song": "Thithipa",
      "composer": "G. Vignesh",
      "sourceRow": 208
    },
    "tamil": {
      "film": "Ayngaran",
      "song": "Thithipa",
      "composer": "G. Vignesh",
      "sourceRow": 208
    }
  },
  {
    "id": "master-song-155",
    "slug": "2022-andhagan-en-kadhal-155",
    "year": 2022,
    "sequence": 155,
    "kind": "film",
    "movieId": "master-work-076",
    "english": {
      "film": "Andhagan",
      "song": "En Kadhal",
      "composer": "Santhosh Narayanan",
      "sourceRow": 210
    },
    "tamil": {
      "film": "Andhagan",
      "song": "En Kadhal",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 210
    }
  },
  {
    "id": "master-song-156",
    "slug": "2022-andhagan-yosichi-yosichi-156",
    "year": 2022,
    "sequence": 156,
    "kind": "film",
    "movieId": "master-work-076",
    "english": {
      "film": "Andhagan",
      "song": "Yosichi Yosichi",
      "composer": "Santhosh Narayanan",
      "sourceRow": 211
    },
    "tamil": {
      "film": "Andhagan",
      "song": "Yosichi Yosichi",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 211
    }
  },
  {
    "id": "master-song-157",
    "slug": "2022-don-unnai-vidaadhe-157",
    "year": 2022,
    "sequence": 157,
    "kind": "film",
    "movieId": "master-work-077",
    "english": {
      "film": "Don",
      "song": "Unnai Vidaadhe",
      "composer": "Anirudh Ravichander",
      "sourceRow": 213
    },
    "tamil": {
      "film": "டான்",
      "song": "Unnai Vidaadhe",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 213
    }
  },
  {
    "id": "master-song-158",
    "slug": "2022-don-mudhal-naayagan-158",
    "year": 2022,
    "sequence": 158,
    "kind": "film",
    "movieId": "master-work-077",
    "english": {
      "film": "Don",
      "song": "Mudhal Naayagan",
      "composer": "Anirudh Ravichander",
      "sourceRow": 214
    },
    "tamil": {
      "film": "டான்",
      "song": "Mudhal Naayagan",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 214
    }
  },
  {
    "id": "master-song-159",
    "slug": "2022-bestie-unnai-pola-159",
    "year": 2022,
    "sequence": 159,
    "kind": "film",
    "movieId": "master-work-078",
    "english": {
      "film": "Bestie",
      "song": "Unnai Pola",
      "composer": "J. V.",
      "sourceRow": 216
    },
    "tamil": {
      "film": "பெஸ்டி",
      "song": "Unnai Pola",
      "composer": "J. V.",
      "sourceRow": 216
    }
  },
  {
    "id": "master-song-160",
    "slug": "2022-anel-meley-pani-thuli-mittai-mittai-160",
    "year": 2022,
    "sequence": 160,
    "kind": "film",
    "movieId": "master-work-079",
    "english": {
      "film": "Anel Meley Pani Thuli",
      "song": "Mittai Mittai",
      "composer": "Santhosh Narayanan",
      "sourceRow": 217
    },
    "tamil": {
      "film": "Anel Meley Pani Thuli",
      "song": "Mittai Mittai",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 217
    }
  },
  {
    "id": "master-song-161",
    "slug": "2022-paper-rocket-kaalai-maalai-161",
    "year": 2022,
    "sequence": 161,
    "kind": "film",
    "movieId": "master-work-080",
    "english": {
      "film": "Paper Rocket",
      "song": "Kaalai Maalai",
      "composer": "Dharan Kumar",
      "sourceRow": 218
    },
    "tamil": {
      "film": "Paper Rocket",
      "song": "Kaalai Maalai",
      "composer": "Dharan Kumar",
      "sourceRow": 218
    }
  },
  {
    "id": "master-song-162",
    "slug": "2022-gulu-gulu-anbarey-162",
    "year": 2022,
    "sequence": 162,
    "kind": "film",
    "movieId": "master-work-081",
    "english": {
      "film": "Gulu Gulu",
      "song": "Anbarey",
      "composer": "Santhosh Narayanan",
      "sourceRow": 219
    },
    "tamil": {
      "film": "Gulu Gulu",
      "song": "Anbarey",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 219
    }
  },
  {
    "id": "master-song-163",
    "slug": "2022-thiruchitrambalam-life-of-pazham-163",
    "year": 2022,
    "sequence": 163,
    "kind": "film",
    "movieId": "master-work-082",
    "english": {
      "film": "Thiruchitrambalam",
      "song": "Life of Pazham",
      "composer": "Anirudh Ravichander",
      "sourceRow": 220
    },
    "tamil": {
      "film": "திருச்சிற்றம்பலம்",
      "song": "Life of Pazham",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 220
    }
  },
  {
    "id": "master-song-164",
    "slug": "2022-paramporul-sippara-rippara-164",
    "year": 2022,
    "sequence": 164,
    "kind": "film",
    "movieId": "master-work-083",
    "english": {
      "film": "Paramporul",
      "song": "Sippara Rippara",
      "composer": "Yuvan Shankar Raja",
      "sourceRow": 221
    },
    "tamil": {
      "film": "Paramporul",
      "song": "Sippara Rippara",
      "composer": "யுவன் சங்கர் ராஜா",
      "sourceRow": 221
    }
  },
  {
    "id": "master-song-165",
    "slug": "2022-cobra-thumbi-thullal-165",
    "year": 2022,
    "sequence": 165,
    "kind": "film",
    "movieId": "master-work-084",
    "english": {
      "film": "Cobra",
      "song": "Thumbi Thullal",
      "composer": "A. R. Rahman",
      "sourceRow": 222
    },
    "tamil": {
      "film": "Cobra",
      "song": "Thumbi Thullal",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 222
    }
  },
  {
    "id": "master-song-166",
    "slug": "2022-prince-bimbiliki-pilaapi-166",
    "year": 2022,
    "sequence": 166,
    "kind": "film",
    "movieId": "master-work-085",
    "english": {
      "film": "Prince",
      "song": "Bimbiliki Pilaapi",
      "composer": "Thaman S",
      "sourceRow": 223
    },
    "tamil": {
      "film": "Prince",
      "song": "Bimbiliki Pilaapi",
      "composer": "தமன் எஸ்",
      "sourceRow": 223
    }
  },
  {
    "id": "master-song-167",
    "slug": "2022-singappenney-ezhundhu-vaa-167",
    "year": 2022,
    "sequence": 167,
    "kind": "film",
    "movieId": "master-work-086",
    "english": {
      "film": "Singappenney",
      "song": "Ezhundhu Vaa",
      "composer": "Kumaran Sivamani",
      "sourceRow": 224
    },
    "tamil": {
      "film": "Singappenney",
      "song": "Ezhundhu Vaa",
      "composer": "Kumaran Sivamani",
      "sourceRow": 224
    }
  },
  {
    "id": "master-song-168",
    "slug": "2022-naane-varuvean-yaarum-illa-168",
    "year": 2022,
    "sequence": 168,
    "kind": "film",
    "movieId": "master-work-087",
    "english": {
      "film": "Naane Varuvean",
      "song": "Yaarum Illa",
      "composer": "Yuvan Shankar Raja",
      "sourceRow": 225
    },
    "tamil": {
      "film": "Naane Varuvean",
      "song": "Yaarum Illa",
      "composer": "யுவன் சங்கர் ராஜா",
      "sourceRow": 225
    }
  },
  {
    "id": "master-song-169",
    "slug": "2022-naai-sekar-returns-panakkaran-169",
    "year": 2022,
    "sequence": 169,
    "kind": "film",
    "movieId": "master-work-088",
    "english": {
      "film": "Naai Sekar Returns",
      "song": "Panakkaran",
      "composer": "Santhosh Narayanan",
      "sourceRow": 226
    },
    "tamil": {
      "film": "Naai Sekar Returns",
      "song": "Panakkaran",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 226
    }
  },
  {
    "id": "master-song-170",
    "slug": "2022-gatta-kusthi-chal-chakka-170",
    "year": 2022,
    "sequence": 170,
    "kind": "film",
    "movieId": "master-work-089",
    "english": {
      "film": "Gatta Kusthi",
      "song": "Chal Chakka",
      "composer": "Justin Prabhakaran",
      "sourceRow": 227
    },
    "tamil": {
      "film": "Gatta Kusthi",
      "song": "Chal Chakka",
      "composer": "Justin Prabhakaran",
      "sourceRow": 227
    }
  },
  {
    "id": "master-song-171",
    "slug": "2022-sanda-veerachi-medha-medhappa-171",
    "year": 2022,
    "sequence": 171,
    "kind": "film",
    "movieId": "master-work-090",
    "english": {
      "film": "Sanda Veerachi",
      "song": "Medha Medhappa",
      "composer": "Yuvan Shankar Raja",
      "note": "Best Lyricist - 14th Ananda Vikatan Cinema Awards 2022",
      "sourceRow": 228
    },
    "tamil": {
      "film": "Sanda Veerachi",
      "song": "Medha Medhappa",
      "composer": "யுவன் சங்கர் ராஜா",
      "note": "Best Lyricist - 14th Ananda Vikatan Cinema Awards 2022",
      "sourceRow": 228
    }
  },
  {
    "id": "master-song-172",
    "slug": "2022-varisu-ranjithame-172",
    "year": 2022,
    "sequence": 172,
    "kind": "film",
    "movieId": "master-work-091",
    "english": {
      "film": "Varisu",
      "song": "Ranjithame",
      "composer": "Thaman S",
      "note": "Also Dialogues, Additional Screenplay",
      "sourceRow": 230
    },
    "tamil": {
      "film": "வாரிசு",
      "song": "Ranjithame",
      "composer": "தமன் எஸ்",
      "note": "Also Dialogues, Additional Screenplay",
      "sourceRow": 230
    }
  },
  {
    "id": "master-song-173",
    "slug": "2022-varisu-thee-thalapathy-173",
    "year": 2022,
    "sequence": 173,
    "kind": "film",
    "movieId": "master-work-091",
    "english": {
      "film": "Varisu",
      "song": "Thee Thalapathy",
      "composer": "Thaman S",
      "sourceRow": 231
    },
    "tamil": {
      "film": "வாரிசு",
      "song": "Thee Thalapathy",
      "composer": "தமன் எஸ்",
      "sourceRow": 231
    }
  },
  {
    "id": "master-song-174",
    "slug": "2022-varisu-soul-of-varisu-174",
    "year": 2022,
    "sequence": 174,
    "kind": "film",
    "movieId": "master-work-091",
    "english": {
      "film": "Varisu",
      "song": "Soul Of Varisu",
      "composer": "Thaman S",
      "sourceRow": 232
    },
    "tamil": {
      "film": "வாரிசு",
      "song": "Soul Of Varisu",
      "composer": "தமன் எஸ்",
      "sourceRow": 232
    }
  },
  {
    "id": "master-song-175",
    "slug": "2022-varisu-jimikki-ponnu-175",
    "year": 2022,
    "sequence": 175,
    "kind": "film",
    "movieId": "master-work-091",
    "english": {
      "film": "Varisu",
      "song": "Jimikki Ponnu",
      "composer": "Thaman S",
      "sourceRow": 233
    },
    "tamil": {
      "film": "வாரிசு",
      "song": "Jimikki Ponnu",
      "composer": "தமன் எஸ்",
      "sourceRow": 233
    }
  },
  {
    "id": "master-song-176",
    "slug": "2022-varisu-vaa-thalaivaa-176",
    "year": 2022,
    "sequence": 176,
    "kind": "film",
    "movieId": "master-work-091",
    "english": {
      "film": "Varisu",
      "song": "Vaa Thalaivaa",
      "composer": "Thaman S",
      "sourceRow": 234
    },
    "tamil": {
      "film": "வாரிசு",
      "song": "Vaa Thalaivaa",
      "composer": "தமன் எஸ்",
      "sourceRow": 234
    }
  },
  {
    "id": "master-song-177",
    "slug": "2023-kick-pathu-murai-177",
    "year": 2023,
    "sequence": 177,
    "kind": "film",
    "movieId": "master-work-092",
    "english": {
      "film": "Kick",
      "song": "Pathu Murai",
      "composer": "Arjun Janya",
      "sourceRow": 236
    },
    "tamil": {
      "film": "Kick",
      "song": "Pathu Murai",
      "composer": "Arjun Janya",
      "sourceRow": 236
    }
  },
  {
    "id": "master-song-178",
    "slug": "2023-dasara-dhoom-dhaam-dhosthu-178",
    "year": 2023,
    "sequence": 178,
    "kind": "film",
    "movieId": "master-work-093",
    "english": {
      "film": "Dasara",
      "song": "Dhoom Dhaam Dhosthu",
      "composer": "Santhosh Narayanan",
      "sourceRow": 238
    },
    "tamil": {
      "film": "Dasara",
      "song": "Dhoom Dhaam Dhosthu",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 238
    }
  },
  {
    "id": "master-song-179",
    "slug": "2023-dasara-theekari-179",
    "year": 2023,
    "sequence": 179,
    "kind": "film",
    "movieId": "master-work-093",
    "english": {
      "film": "Dasara",
      "song": "Theekari",
      "composer": "Santhosh Narayanan",
      "sourceRow": 239
    },
    "tamil": {
      "film": "Dasara",
      "song": "Theekari",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 239
    }
  },
  {
    "id": "master-song-180",
    "slug": "2023-theerkadarishi-miss-you-180",
    "year": 2023,
    "sequence": 180,
    "kind": "film",
    "movieId": "master-work-094",
    "english": {
      "film": "Theerkadarishi",
      "song": "Miss You",
      "composer": "G. Balasubramanian",
      "sourceRow": 241
    },
    "tamil": {
      "film": "Theerkadarishi",
      "song": "Miss You",
      "composer": "G. Balasubramanian",
      "sourceRow": 241
    }
  },
  {
    "id": "master-song-181",
    "slug": "2023-agilan-dhrogam-181",
    "year": 2023,
    "sequence": 181,
    "kind": "film",
    "movieId": "master-work-095",
    "english": {
      "film": "Agilan",
      "song": "Dhrogam",
      "composer": "Sam CS",
      "sourceRow": 242
    },
    "tamil": {
      "film": "Agilan",
      "song": "Dhrogam",
      "composer": "சாம் சி.எஸ்.",
      "sourceRow": 242
    }
  },
  {
    "id": "master-song-182",
    "slug": "2023-pathu-thala-namma-satham-182",
    "year": 2023,
    "sequence": 182,
    "kind": "film",
    "movieId": "master-work-096",
    "english": {
      "film": "Pathu Thala",
      "song": "Namma Satham",
      "composer": "A. R. Rahman",
      "sourceRow": 244
    },
    "tamil": {
      "film": "Pathu Thala",
      "song": "Namma Satham",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 244
    }
  },
  {
    "id": "master-song-183",
    "slug": "2023-pathu-thala-nee-singamdhan-183",
    "year": 2023,
    "sequence": 183,
    "kind": "film",
    "movieId": "master-work-096",
    "english": {
      "film": "Pathu Thala",
      "song": "Nee Singamdhan",
      "composer": "A. R. Rahman",
      "sourceRow": 245
    },
    "tamil": {
      "film": "Pathu Thala",
      "song": "Nee Singamdhan",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 245
    }
  },
  {
    "id": "master-song-184",
    "slug": "2023-veeran-thunderkaaran-184",
    "year": 2023,
    "sequence": 184,
    "kind": "film",
    "movieId": "master-work-097",
    "english": {
      "film": "Veeran",
      "song": "Thunderkaaran",
      "composer": "Hiphop Tamizha",
      "sourceRow": 247
    },
    "tamil": {
      "film": "Veeran",
      "song": "Thunderkaaran",
      "composer": "ஹிப்ஹாப் தமிழா",
      "sourceRow": 247
    }
  },
  {
    "id": "master-song-185",
    "slug": "2023-regina-naam-ulaavum-oadai-185",
    "year": 2023,
    "sequence": 185,
    "kind": "film",
    "movieId": "master-work-098",
    "english": {
      "film": "Regina",
      "song": "Naam Ulaavum Oadai",
      "composer": "Sathish Nair",
      "sourceRow": 248
    },
    "tamil": {
      "film": "Regina",
      "song": "Naam Ulaavum Oadai",
      "composer": "Sathish Nair",
      "sourceRow": 248
    }
  },
  {
    "id": "master-song-186",
    "slug": "2023-jawan-tamil-vandha-edam-186",
    "year": 2023,
    "sequence": 186,
    "kind": "film",
    "movieId": "master-work-099",
    "english": {
      "film": "Jawan (Tamil)",
      "song": "Vandha Edam",
      "composer": "Anirudh Ravichander",
      "sourceRow": 250
    },
    "tamil": {
      "film": "ஜவான்",
      "song": "Vandha Edam",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 250
    }
  },
  {
    "id": "master-song-187",
    "slug": "2023-jawan-tamil-hayyoda-187",
    "year": 2023,
    "sequence": 187,
    "kind": "film",
    "movieId": "master-work-099",
    "english": {
      "film": "Jawan (Tamil)",
      "song": "Hayyoda",
      "composer": "Anirudh Ravichander",
      "sourceRow": 251
    },
    "tamil": {
      "film": "ஜவான்",
      "song": "Hayyoda",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 251
    }
  },
  {
    "id": "master-song-188",
    "slug": "2023-jawan-tamil-not-ramaiya-vastavaiya-188",
    "year": 2023,
    "sequence": 188,
    "kind": "film",
    "movieId": "master-work-099",
    "english": {
      "film": "Jawan (Tamil)",
      "song": "Not Ramaiya Vastavaiya",
      "composer": "Anirudh Ravichander",
      "sourceRow": 252
    },
    "tamil": {
      "film": "ஜவான்",
      "song": "Not Ramaiya Vastavaiya",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 252
    }
  },
  {
    "id": "master-song-189",
    "slug": "2023-jawan-tamil-aararaari-raaro-189",
    "year": 2023,
    "sequence": 189,
    "kind": "film",
    "movieId": "master-work-099",
    "english": {
      "film": "Jawan (Tamil)",
      "song": "Aararaari Raaro",
      "composer": "Anirudh Ravichander",
      "sourceRow": 253
    },
    "tamil": {
      "film": "ஜவான்",
      "song": "Aararaari Raaro",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 253
    }
  },
  {
    "id": "master-song-190",
    "slug": "2023-jawan-tamil-pattasa-190",
    "year": 2023,
    "sequence": 190,
    "kind": "film",
    "movieId": "master-work-099",
    "english": {
      "film": "Jawan (Tamil)",
      "song": "Pattasa",
      "composer": "Anirudh Ravichander",
      "sourceRow": 254
    },
    "tamil": {
      "film": "ஜவான்",
      "song": "Pattasa",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 254
    }
  },
  {
    "id": "master-song-191",
    "slug": "2023-iraivan-azhagai-191",
    "year": 2023,
    "sequence": 191,
    "kind": "film",
    "movieId": "master-work-100",
    "english": {
      "film": "Iraivan",
      "song": "Azhagai",
      "composer": "Yuvan Shankar Raja",
      "sourceRow": 256
    },
    "tamil": {
      "film": "Iraivan",
      "song": "Azhagai",
      "composer": "யுவன் சங்கர் ராஜா",
      "sourceRow": 256
    }
  },
  {
    "id": "master-song-192",
    "slug": "2023-iraivan-idhu-pola-192",
    "year": 2023,
    "sequence": 192,
    "kind": "film",
    "movieId": "master-work-100",
    "english": {
      "film": "Iraivan",
      "song": "Idhu Pola",
      "composer": "Yuvan Shankar Raja",
      "sourceRow": 257
    },
    "tamil": {
      "film": "Iraivan",
      "song": "Idhu Pola",
      "composer": "யுவன் சங்கர் ராஜா",
      "sourceRow": 257
    }
  },
  {
    "id": "master-song-193",
    "slug": "2023-iraivan-shades-of-love-193",
    "year": 2023,
    "sequence": 193,
    "kind": "film",
    "movieId": "master-work-100",
    "english": {
      "film": "Iraivan",
      "song": "Shades of Love",
      "composer": "Yuvan Shankar Raja",
      "sourceRow": 258
    },
    "tamil": {
      "film": "Iraivan",
      "song": "Shades of Love",
      "composer": "யுவன் சங்கர் ராஜா",
      "sourceRow": 258
    }
  },
  {
    "id": "master-song-194",
    "slug": "2023-iraivan-nanbha-194",
    "year": 2023,
    "sequence": 194,
    "kind": "film",
    "movieId": "master-work-100",
    "english": {
      "film": "Iraivan",
      "song": "Nanbha",
      "composer": "Yuvan Shankar Raja",
      "sourceRow": 259
    },
    "tamil": {
      "film": "Iraivan",
      "song": "Nanbha",
      "composer": "யுவன் சங்கர் ராஜா",
      "sourceRow": 259
    }
  },
  {
    "id": "master-song-195",
    "slug": "2023-iraivan-fear-beat-195",
    "year": 2023,
    "sequence": 195,
    "kind": "film",
    "movieId": "master-work-100",
    "english": {
      "film": "Iraivan",
      "song": "Fear Beat",
      "composer": "Yuvan Shankar Raja",
      "sourceRow": 260
    },
    "tamil": {
      "film": "Iraivan",
      "song": "Fear Beat",
      "composer": "யுவன் சங்கர் ராஜா",
      "sourceRow": 260
    }
  },
  {
    "id": "master-song-196",
    "slug": "2023-chithha-unakku-thaan-196",
    "year": 2023,
    "sequence": 196,
    "kind": "film",
    "movieId": "master-work-101",
    "english": {
      "film": "Chithha",
      "song": "Unakku Thaan",
      "composer": "Santhosh Narayanan",
      "sourceRow": 262
    },
    "tamil": {
      "film": "Chithha",
      "song": "Unakku Thaan",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 262
    }
  },
  {
    "id": "master-song-197",
    "slug": "2023-chandramukhi-2-moruniye-197",
    "year": 2023,
    "sequence": 197,
    "kind": "film",
    "movieId": "master-work-102",
    "english": {
      "film": "Chandramukhi 2",
      "song": "Moruniye",
      "composer": "M. M. Keeravani",
      "sourceRow": 263
    },
    "tamil": {
      "film": "சந்திரமுகி 2",
      "song": "Moruniye",
      "composer": "M. M. Keeravani",
      "sourceRow": 263
    }
  },
  {
    "id": "master-song-198",
    "slug": "2023-miss-shetty-mr-polishetty-tamil-no-no-no-198",
    "year": 2023,
    "sequence": 198,
    "kind": "film",
    "movieId": "master-work-103",
    "english": {
      "film": "Miss Shetty Mr Polishetty (Tamil)",
      "song": "No No No",
      "composer": "Radhan",
      "sourceRow": 265
    },
    "tamil": {
      "film": "Miss Shetty Mr Polishetty (Tamil)",
      "song": "No No No",
      "composer": "Radhan",
      "sourceRow": 265
    }
  },
  {
    "id": "master-song-199",
    "slug": "2023-miss-shetty-mr-polishetty-tamil-lady-luck-199",
    "year": 2023,
    "sequence": 199,
    "kind": "film",
    "movieId": "master-work-103",
    "english": {
      "film": "Miss Shetty Mr Polishetty (Tamil)",
      "song": "Lady Luck",
      "composer": "Radhan",
      "sourceRow": 266
    },
    "tamil": {
      "film": "Miss Shetty Mr Polishetty (Tamil)",
      "song": "Lady Luck",
      "composer": "Radhan",
      "sourceRow": 266
    }
  },
  {
    "id": "master-song-200",
    "slug": "2023-miss-shetty-mr-polishetty-tamil-aaradho-200",
    "year": 2023,
    "sequence": 200,
    "kind": "film",
    "movieId": "master-work-103",
    "english": {
      "film": "Miss Shetty Mr Polishetty (Tamil)",
      "song": "Aaradho",
      "composer": "Radhan",
      "sourceRow": 267
    },
    "tamil": {
      "film": "Miss Shetty Mr Polishetty (Tamil)",
      "song": "Aaradho",
      "composer": "Radhan",
      "sourceRow": 267
    }
  },
  {
    "id": "master-song-201",
    "slug": "2023-miss-shetty-mr-polishetty-tamil-yaadho-dhisai-201",
    "year": 2023,
    "sequence": 201,
    "kind": "film",
    "movieId": "master-work-103",
    "english": {
      "film": "Miss Shetty Mr Polishetty (Tamil)",
      "song": "Yaadho Dhisai",
      "composer": "Radhan",
      "sourceRow": 268
    },
    "tamil": {
      "film": "Miss Shetty Mr Polishetty (Tamil)",
      "song": "Yaadho Dhisai",
      "composer": "Radhan",
      "sourceRow": 268
    }
  },
  {
    "id": "master-song-202",
    "slug": "2023-jigarthanda-doublex-maamadura-202",
    "year": 2023,
    "sequence": 202,
    "kind": "film",
    "movieId": "master-work-104",
    "english": {
      "film": "Jigarthanda DoubleX",
      "song": "Maamadura",
      "composer": "Santhosh Narayanan",
      "sourceRow": 270
    },
    "tamil": {
      "film": "Jigarthanda DoubleX",
      "song": "Maamadura",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 270
    }
  },
  {
    "id": "master-song-203",
    "slug": "2023-jigarthanda-doublex-oyyaram-203",
    "year": 2023,
    "sequence": 203,
    "kind": "film",
    "movieId": "master-work-104",
    "english": {
      "film": "Jigarthanda DoubleX",
      "song": "Oyyaram",
      "composer": "Santhosh Narayanan",
      "sourceRow": 271
    },
    "tamil": {
      "film": "Jigarthanda DoubleX",
      "song": "Oyyaram",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 271
    }
  },
  {
    "id": "master-song-204",
    "slug": "2023-annapoorani-the-goddess-of-food-ulagai-vella-pogiraal-204",
    "year": 2023,
    "sequence": 204,
    "kind": "film",
    "movieId": "master-work-105",
    "english": {
      "film": "Annapoorani: The Goddess of Food",
      "song": "Ulagai Vella Pogiraal",
      "composer": "Thaman S",
      "sourceRow": 273
    },
    "tamil": {
      "film": "Annapoorani: The Goddess of Food",
      "song": "Ulagai Vella Pogiraal",
      "composer": "தமன் எஸ்",
      "sourceRow": 273
    }
  },
  {
    "id": "master-song-205",
    "slug": "2023-annapoorani-the-goddess-of-food-life-is-on-version-1-veg-205",
    "year": 2023,
    "sequence": 205,
    "kind": "film",
    "movieId": "master-work-105",
    "english": {
      "film": "Annapoorani: The Goddess of Food",
      "song": "Life Is On (Version 1 - Veg)",
      "composer": "Thaman S",
      "sourceRow": 274
    },
    "tamil": {
      "film": "Annapoorani: The Goddess of Food",
      "song": "Life Is On (Version 1 - Veg)",
      "composer": "தமன் எஸ்",
      "sourceRow": 274
    }
  },
  {
    "id": "master-song-206",
    "slug": "2023-annapoorani-the-goddess-of-food-life-is-on-version-2-non-veg-206",
    "year": 2023,
    "sequence": 206,
    "kind": "film",
    "movieId": "master-work-105",
    "english": {
      "film": "Annapoorani: The Goddess of Food",
      "song": "Life Is On (Version 2 - Non-Veg)",
      "composer": "Thaman S",
      "sourceRow": 275
    },
    "tamil": {
      "film": "Annapoorani: The Goddess of Food",
      "song": "Life Is On (Version 2 - Non-Veg)",
      "composer": "தமன் எஸ்",
      "sourceRow": 275
    }
  },
  {
    "id": "master-song-207",
    "slug": "2023-annapoorani-the-goddess-of-food-ivalo-ivalo-207",
    "year": 2023,
    "sequence": 207,
    "kind": "film",
    "movieId": "master-work-105",
    "english": {
      "film": "Annapoorani: The Goddess of Food",
      "song": "Ivalo Ivalo",
      "composer": "Thaman S",
      "sourceRow": 276
    },
    "tamil": {
      "film": "Annapoorani: The Goddess of Food",
      "song": "Ivalo Ivalo",
      "composer": "தமன் எஸ்",
      "sourceRow": 276
    }
  },
  {
    "id": "master-song-208",
    "slug": "2023-annapoorani-the-goddess-of-food-aduppil-pogai-aagum-208",
    "year": 2023,
    "sequence": 208,
    "kind": "film",
    "movieId": "master-work-105",
    "english": {
      "film": "Annapoorani: The Goddess of Food",
      "song": "Aduppil Pogai Aagum",
      "composer": "Thaman S",
      "sourceRow": 277
    },
    "tamil": {
      "film": "Annapoorani: The Goddess of Food",
      "song": "Aduppil Pogai Aagum",
      "composer": "தமன் எஸ்",
      "sourceRow": 277
    }
  },
  {
    "id": "master-song-209",
    "slug": "2023-lal-salaam-ther-thiruvizha-209",
    "year": 2023,
    "sequence": 209,
    "kind": "film",
    "movieId": "master-work-106",
    "english": {
      "film": "Lal Salaam",
      "song": "Ther Thiruvizha",
      "composer": "A. R. Rahman",
      "sourceRow": 279
    },
    "tamil": {
      "film": "Lal Salaam",
      "song": "Ther Thiruvizha",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 279
    }
  },
  {
    "id": "master-song-210",
    "slug": "2023-saindhav-tamil-vennaa-penne-210",
    "year": 2023,
    "sequence": 210,
    "kind": "film",
    "movieId": "master-work-107",
    "english": {
      "film": "Saindhav (Tamil)",
      "song": "Vennaa Penne",
      "composer": "Santhosh Narayanan",
      "sourceRow": 281
    },
    "tamil": {
      "film": "Saindhav (Tamil)",
      "song": "Vennaa Penne",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 281
    }
  },
  {
    "id": "master-song-211",
    "slug": "2023-saindhav-tamil-poraname-211",
    "year": 2023,
    "sequence": 211,
    "kind": "film",
    "movieId": "master-work-107",
    "english": {
      "film": "Saindhav (Tamil)",
      "song": "Poraname",
      "composer": "Santhosh Narayanan",
      "sourceRow": 282
    },
    "tamil": {
      "film": "Saindhav (Tamil)",
      "song": "Poraname",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 282
    }
  },
  {
    "id": "master-song-212",
    "slug": "2023-hi-nanna-tamil-amizhdhe-nee-212",
    "year": 2023,
    "sequence": 212,
    "kind": "film",
    "movieId": "master-work-108",
    "english": {
      "film": "Hi Nanna (Tamil)",
      "song": "Amizhdhe Nee",
      "composer": "Hesham Abdul Wahab",
      "sourceRow": 284
    },
    "tamil": {
      "film": "Hi Nanna (Tamil)",
      "song": "Amizhdhe Nee",
      "composer": "ஹெஷாம் அப்துல் வஹாப்",
      "sourceRow": 284
    }
  },
  {
    "id": "master-song-213",
    "slug": "2023-hi-nanna-tamil-odiyamma-213",
    "year": 2023,
    "sequence": 213,
    "kind": "film",
    "movieId": "master-work-108",
    "english": {
      "film": "Hi Nanna (Tamil)",
      "song": "Odiyamma",
      "composer": "Hesham Abdul Wahab",
      "sourceRow": 285
    },
    "tamil": {
      "film": "Hi Nanna (Tamil)",
      "song": "Odiyamma",
      "composer": "ஹெஷாம் அப்துல் வஹாப்",
      "sourceRow": 285
    }
  },
  {
    "id": "master-song-214",
    "slug": "2023-hi-nanna-tamil-nee-maaya-nizhal-214",
    "year": 2023,
    "sequence": 214,
    "kind": "film",
    "movieId": "master-work-108",
    "english": {
      "film": "Hi Nanna (Tamil)",
      "song": "Nee Maaya Nizhal",
      "composer": "Hesham Abdul Wahab",
      "sourceRow": 286
    },
    "tamil": {
      "film": "Hi Nanna (Tamil)",
      "song": "Nee Maaya Nizhal",
      "composer": "ஹெஷாம் அப்துல் வஹாப்",
      "sourceRow": 286
    }
  },
  {
    "id": "master-song-215",
    "slug": "2023-hi-nanna-tamil-vaazhvin-doorame-215",
    "year": 2023,
    "sequence": 215,
    "kind": "film",
    "movieId": "master-work-108",
    "english": {
      "film": "Hi Nanna (Tamil)",
      "song": "Vaazhvin Doorame",
      "composer": "Hesham Abdul Wahab",
      "sourceRow": 287
    },
    "tamil": {
      "film": "Hi Nanna (Tamil)",
      "song": "Vaazhvin Doorame",
      "composer": "ஹெஷாம் அப்துல் வஹாப்",
      "sourceRow": 287
    }
  },
  {
    "id": "master-song-216",
    "slug": "2024-captain-miller-kombari-vettapuli-216",
    "year": 2024,
    "sequence": 216,
    "kind": "film",
    "movieId": "master-work-109",
    "english": {
      "film": "Captain Miller",
      "song": "Kombari Vettapuli",
      "composer": "G.V. Prakash Kumar",
      "sourceRow": 289
    },
    "tamil": {
      "film": "Captain Miller",
      "song": "Kombari Vettapuli",
      "composer": "ஜி. வி. ப்ரகாஷ் குமார்",
      "sourceRow": 289
    }
  },
  {
    "id": "master-song-217",
    "slug": "2024-ayalaan-vera-level-sago-217",
    "year": 2024,
    "sequence": 217,
    "kind": "film",
    "movieId": "master-work-110",
    "english": {
      "film": "Ayalaan",
      "song": "Vera Level Sago",
      "composer": "A. R. Rahman",
      "sourceRow": 291
    },
    "tamil": {
      "film": "அயலான்",
      "song": "Vera Level Sago",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 291
    }
  },
  {
    "id": "master-song-218",
    "slug": "2024-ayalaan-ayalaa-ayalaa-218",
    "year": 2024,
    "sequence": 218,
    "kind": "film",
    "movieId": "master-work-110",
    "english": {
      "film": "Ayalaan",
      "song": "Ayalaa Ayalaa",
      "composer": "A. R. Rahman",
      "sourceRow": 292
    },
    "tamil": {
      "film": "அயலான்",
      "song": "Ayalaa Ayalaa",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 292
    }
  },
  {
    "id": "master-song-219",
    "slug": "2024-joshua-imai-pol-kaakha-tappasu-neram-219",
    "year": 2024,
    "sequence": 219,
    "kind": "film",
    "movieId": "master-work-111",
    "english": {
      "film": "Joshua",
      "song": "Imai Pol Kaakha: Tappasu Neram",
      "composer": "Karthik",
      "sourceRow": 294
    },
    "tamil": {
      "film": "ஜோஷுவா",
      "song": "Imai Pol Kaakha: Tappasu Neram",
      "composer": "Karthik",
      "sourceRow": 294
    }
  },
  {
    "id": "master-song-220",
    "slug": "2024-ranam-aram-thavarel-achu-pennae-220",
    "year": 2024,
    "sequence": 220,
    "kind": "film",
    "movieId": "master-work-112",
    "english": {
      "film": "Ranam Aram Thavarel",
      "song": "Achu Pennae",
      "composer": "Arroll Corelli",
      "sourceRow": 295
    },
    "tamil": {
      "film": "Ranam Aram Thavarel",
      "song": "Achu Pennae",
      "composer": "Arroll Corelli",
      "sourceRow": 295
    }
  },
  {
    "id": "master-song-221",
    "slug": "2024-the-family-star-tamil-nandanadana-221",
    "year": 2024,
    "sequence": 221,
    "kind": "film",
    "movieId": "master-work-113",
    "english": {
      "film": "The Family star (Tamil)",
      "song": "Nandanadana",
      "composer": "Gopi Sundar",
      "sourceRow": 297
    },
    "tamil": {
      "film": "The Family star (Tamil)",
      "song": "Nandanadana",
      "composer": "Gopi Sundar",
      "sourceRow": 297
    }
  },
  {
    "id": "master-song-222",
    "slug": "2024-the-family-star-tamil-kalyaanam-satham-satham-222",
    "year": 2024,
    "sequence": 222,
    "kind": "film",
    "movieId": "master-work-113",
    "english": {
      "film": "The Family star (Tamil)",
      "song": "Kalyaanam Satham Satham",
      "composer": "Gopi Sundar",
      "sourceRow": 298
    },
    "tamil": {
      "film": "The Family star (Tamil)",
      "song": "Kalyaanam Satham Satham",
      "composer": "Gopi Sundar",
      "sourceRow": 298
    }
  },
  {
    "id": "master-song-223",
    "slug": "2024-j-baby-idha-thane-ethir-paathen-223",
    "year": 2024,
    "sequence": 223,
    "kind": "film",
    "movieId": "master-work-114",
    "english": {
      "film": "J Baby",
      "song": "Idha Thane Ethir Paathen",
      "composer": "Santhosh Narayanan",
      "sourceRow": 300
    },
    "tamil": {
      "film": "J Baby",
      "song": "Idha Thane Ethir Paathen",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 300
    }
  },
  {
    "id": "master-song-224",
    "slug": "2024-j-baby-yaar-padalai-224",
    "year": 2024,
    "sequence": 224,
    "kind": "film",
    "movieId": "master-work-114",
    "english": {
      "film": "J Baby",
      "song": "Yaar Padalai",
      "composer": "Santhosh Narayanan",
      "sourceRow": 301
    },
    "tamil": {
      "film": "J Baby",
      "song": "Yaar Padalai",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 301
    }
  },
  {
    "id": "master-song-225",
    "slug": "2024-j-baby-idha-thane-reprise-225",
    "year": 2024,
    "sequence": 225,
    "kind": "film",
    "movieId": "master-work-114",
    "english": {
      "film": "J Baby",
      "song": "Idha Thane (Reprise)",
      "composer": "Santhosh Narayanan",
      "sourceRow": 302
    },
    "tamil": {
      "film": "J Baby",
      "song": "Idha Thane (Reprise)",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 302
    }
  },
  {
    "id": "master-song-226",
    "slug": "2024-kalki-2898-ad-tamil-bhairava-anthem-226",
    "year": 2024,
    "sequence": 226,
    "kind": "film",
    "movieId": "master-work-115",
    "english": {
      "film": "Kalki 2898 AD (Tamil)",
      "song": "Bhairava Anthem",
      "composer": "Santhosh Narayanan",
      "sourceRow": 304
    },
    "tamil": {
      "film": "கல்கி 2898 AD",
      "song": "Bhairava Anthem",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 304
    }
  },
  {
    "id": "master-song-227",
    "slug": "2024-kalki-2898-ad-tamil-theme-of-kalki-227",
    "year": 2024,
    "sequence": 227,
    "kind": "film",
    "movieId": "master-work-115",
    "english": {
      "film": "Kalki 2898 AD (Tamil)",
      "song": "Theme of Kalki",
      "composer": "Santhosh Narayanan",
      "sourceRow": 305
    },
    "tamil": {
      "film": "கல்கி 2898 AD",
      "song": "Theme of Kalki",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 305
    }
  },
  {
    "id": "master-song-228",
    "slug": "2024-kalki-2898-ad-tamil-hope-of-shambala-228",
    "year": 2024,
    "sequence": 228,
    "kind": "film",
    "movieId": "master-work-115",
    "english": {
      "film": "Kalki 2898 AD (Tamil)",
      "song": "Hope of Shambala",
      "composer": "Santhosh Narayanan",
      "sourceRow": 306
    },
    "tamil": {
      "film": "கல்கி 2898 AD",
      "song": "Hope of Shambala",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 306
    }
  },
  {
    "id": "master-song-229",
    "slug": "2024-kalki-2898-ad-tamil-ta-takkara-complex-song-229",
    "year": 2024,
    "sequence": 229,
    "kind": "film",
    "movieId": "master-work-115",
    "english": {
      "film": "Kalki 2898 AD (Tamil)",
      "song": "Ta Takkara (Complex Song)",
      "composer": "Santhosh Narayanan",
      "sourceRow": 307
    },
    "tamil": {
      "film": "கல்கி 2898 AD",
      "song": "Ta Takkara (Complex Song)",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 307
    }
  },
  {
    "id": "master-song-230",
    "slug": "2024-kalki-2898-ad-tamil-keshava-madhava-wait-of-ashwatthama-230",
    "year": 2024,
    "sequence": 230,
    "kind": "film",
    "movieId": "master-work-115",
    "english": {
      "film": "Kalki 2898 AD (Tamil)",
      "song": "Keshava Madhava (Wait of Ashwatthama)",
      "composer": "Santhosh Narayanan",
      "sourceRow": 308
    },
    "tamil": {
      "film": "கல்கி 2898 AD",
      "song": "Keshava Madhava (Wait of Ashwatthama)",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 308
    }
  },
  {
    "id": "master-song-231",
    "slug": "2024-emi-poonaikku-231",
    "year": 2024,
    "sequence": 231,
    "kind": "film",
    "movieId": "master-work-116",
    "english": {
      "film": "EMI",
      "song": "Poonaikku",
      "composer": "Srinath Pitchai",
      "sourceRow": 310
    },
    "tamil": {
      "film": "ஈ.எம்.ஐ.",
      "song": "Poonaikku",
      "composer": "Srinath Pitchai",
      "sourceRow": 310
    }
  },
  {
    "id": "master-song-232",
    "slug": "2024-vaazhai-otha-satti-soru-232",
    "year": 2024,
    "sequence": 232,
    "kind": "film",
    "movieId": "master-work-117",
    "english": {
      "film": "Vaazhai",
      "song": "Otha Satti Soru",
      "composer": "Santhosh Narayanan",
      "sourceRow": 311
    },
    "tamil": {
      "film": "வாழை",
      "song": "Otha Satti Soru",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 311
    }
  },
  {
    "id": "master-song-233",
    "slug": "2024-the-greatest-of-all-time-matta-233",
    "year": 2024,
    "sequence": 233,
    "kind": "film",
    "movieId": "master-work-118",
    "english": {
      "film": "The Greatest of All Time",
      "song": "Matta",
      "composer": "Yuvan Shankar Raja",
      "sourceRow": 312
    },
    "tamil": {
      "film": "தி கிரேடெஸ்ட் ஆப் ஆல் டைம்",
      "song": "Matta",
      "composer": "யுவன் சங்கர் ராஜா",
      "sourceRow": 312
    }
  },
  {
    "id": "master-song-234",
    "slug": "2024-game-changer-tamil-jaragandi-234",
    "year": 2024,
    "sequence": 234,
    "kind": "film",
    "movieId": "master-work-119",
    "english": {
      "film": "Game Changer (Tamil)",
      "song": "Jaragandi",
      "composer": "Thaman S",
      "note": "Also Tamil dialogues and screenplay along with S. Shankar",
      "sourceRow": 314
    },
    "tamil": {
      "film": "கேம் சேஞ்சர்",
      "song": "Jaragandi",
      "composer": "தமன் எஸ்",
      "note": "Also Tamil dialogues and screenplay along with S. Shankar",
      "sourceRow": 314
    }
  },
  {
    "id": "master-song-235",
    "slug": "2024-game-changer-tamil-raa-macha-macha-235",
    "year": 2024,
    "sequence": 235,
    "kind": "film",
    "movieId": "master-work-119",
    "english": {
      "film": "Game Changer (Tamil)",
      "song": "Raa Macha Macha",
      "composer": "Thaman S",
      "sourceRow": 315
    },
    "tamil": {
      "film": "கேம் சேஞ்சர்",
      "song": "Raa Macha Macha",
      "composer": "தமன் எஸ்",
      "sourceRow": 315
    }
  },
  {
    "id": "master-song-236",
    "slug": "2024-amaran-uyirey-236",
    "year": 2024,
    "sequence": 236,
    "kind": "film",
    "movieId": "master-work-120",
    "english": {
      "film": "Amaran",
      "song": "Uyirey",
      "composer": "G.V. Prakash Kumar",
      "sourceRow": 317
    },
    "tamil": {
      "film": "அமரன்",
      "song": "Uyirey",
      "composer": "ஜி. வி. ப்ரகாஷ் குமார்",
      "sourceRow": 317
    }
  },
  {
    "id": "master-song-237",
    "slug": "2024-bloody-beggar-ponmayame-237",
    "year": 2024,
    "sequence": 237,
    "kind": "film",
    "movieId": "master-work-121",
    "english": {
      "film": "Bloody Beggar",
      "song": "Ponmayame",
      "composer": "Jen Martin",
      "note": "Co-wrote lyrics with Vishnu Edavan",
      "sourceRow": 318
    },
    "tamil": {
      "film": "Bloody Beggar",
      "song": "Ponmayame",
      "composer": "Jen Martin",
      "note": "Co-wrote lyrics with Vishnu Edavan",
      "sourceRow": 318
    }
  },
  {
    "id": "master-song-238",
    "slug": "2024-kadhalikka-neramillai-yennai-izhukkuthadi-238",
    "year": 2024,
    "sequence": 238,
    "kind": "film",
    "movieId": "master-work-122",
    "english": {
      "film": "Kadhalikka Neramillai",
      "song": "Yennai Izhukkuthadi",
      "composer": "A. R. Rahman",
      "sourceRow": 319
    },
    "tamil": {
      "film": "Kadhalikka Neramillai",
      "song": "Yennai Izhukkuthadi",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 319
    }
  },
  {
    "id": "master-song-239",
    "slug": "2025-nilavuku-en-mel-ennadi-kobam-yedi-239",
    "year": 2025,
    "sequence": 239,
    "kind": "film",
    "movieId": "master-work-123",
    "english": {
      "film": "Nilavuku En Mel Ennadi Kobam",
      "song": "Yedi",
      "composer": "G.V. Prakash Kumar",
      "sourceRow": 321
    },
    "tamil": {
      "film": "நிலவுக்கு என் மேல் என்னடி கோபம்",
      "song": "Yedi",
      "composer": "ஜி. வி. ப்ரகாஷ் குமார்",
      "sourceRow": 321
    }
  },
  {
    "id": "master-song-240",
    "slug": "2025-nilavuku-en-mel-ennadi-kobam-veera-dheera-sooran-240",
    "year": 2025,
    "sequence": 240,
    "kind": "film",
    "movieId": "master-work-123",
    "english": {
      "film": "Nilavuku En Mel Ennadi Kobam",
      "song": "Veera Dheera Sooran",
      "composer": "G.V. Prakash Kumar",
      "sourceRow": 322
    },
    "tamil": {
      "film": "நிலவுக்கு என் மேல் என்னடி கோபம்",
      "song": "Veera Dheera Sooran",
      "composer": "ஜி. வி. ப்ரகாஷ் குமார்",
      "sourceRow": 322
    }
  },
  {
    "id": "master-song-241",
    "slug": "2025-nilavuku-en-mel-ennadi-kobam-kalloorum-241",
    "year": 2025,
    "sequence": 241,
    "kind": "film",
    "movieId": "master-work-123",
    "english": {
      "film": "Nilavuku En Mel Ennadi Kobam",
      "song": "Kalloorum",
      "composer": "G.V. Prakash Kumar",
      "sourceRow": 323
    },
    "tamil": {
      "film": "நிலவுக்கு என் மேல் என்னடி கோபம்",
      "song": "Kalloorum",
      "composer": "ஜி. வி. ப்ரகாஷ் குமார்",
      "sourceRow": 323
    }
  },
  {
    "id": "master-song-242",
    "slug": "2025-nilavuku-en-mel-ennadi-kobam-aaathi-adi-aaathi-242",
    "year": 2025,
    "sequence": 242,
    "kind": "film",
    "movieId": "master-work-123",
    "english": {
      "film": "Nilavuku En Mel Ennadi Kobam",
      "song": "Aaathi Adi Aaathi",
      "composer": "G.V. Prakash Kumar",
      "sourceRow": 324
    },
    "tamil": {
      "film": "நிலவுக்கு என் மேல் என்னடி கோபம்",
      "song": "Aaathi Adi Aaathi",
      "composer": "ஜி. வி. ப்ரகாஷ் குமார்",
      "sourceRow": 324
    }
  },
  {
    "id": "master-song-243",
    "slug": "2025-nilavuku-en-mel-ennadi-kobam-ayla-allela-243",
    "year": 2025,
    "sequence": 243,
    "kind": "film",
    "movieId": "master-work-123",
    "english": {
      "film": "Nilavuku En Mel Ennadi Kobam",
      "song": "Ayla Allela",
      "composer": "G.V. Prakash Kumar",
      "sourceRow": 325
    },
    "tamil": {
      "film": "நிலவுக்கு என் மேல் என்னடி கோபம்",
      "song": "Ayla Allela",
      "composer": "ஜி. வி. ப்ரகாஷ் குமார்",
      "sourceRow": 325
    }
  },
  {
    "id": "master-song-244",
    "slug": "2025-retro-kannadi-poove-244",
    "year": 2025,
    "sequence": 244,
    "kind": "film",
    "movieId": "master-work-124",
    "english": {
      "film": "Retro",
      "song": "Kannadi Poove",
      "composer": "Santhosh Narayanan",
      "sourceRow": 327
    },
    "tamil": {
      "film": "ரெட்ரோ",
      "song": "கண்ணாடி பூவே",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 327
    }
  },
  {
    "id": "master-song-245",
    "slug": "2025-retro-kanimaa-245",
    "year": 2025,
    "sequence": 245,
    "kind": "film",
    "movieId": "master-work-124",
    "english": {
      "film": "Retro",
      "song": "Kanimaa",
      "composer": "Santhosh Narayanan",
      "sourceRow": 328
    },
    "tamil": {
      "film": "ரெட்ரோ",
      "song": "கணிமா",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 328
    }
  },
  {
    "id": "master-song-246",
    "slug": "2025-retro-the-one-246",
    "year": 2025,
    "sequence": 246,
    "kind": "film",
    "movieId": "master-work-124",
    "english": {
      "film": "Retro",
      "song": "The One",
      "composer": "Santhosh Narayanan",
      "sourceRow": 329
    },
    "tamil": {
      "film": "ரெட்ரோ",
      "song": "தி வன்",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 329
    }
  },
  {
    "id": "master-song-247",
    "slug": "2025-retro-edharkaga-marubadi-247",
    "year": 2025,
    "sequence": 247,
    "kind": "film",
    "movieId": "master-work-124",
    "english": {
      "film": "Retro",
      "song": "Edharkaga Marubadi",
      "composer": "Santhosh Narayanan",
      "sourceRow": 330
    },
    "tamil": {
      "film": "ரெட்ரோ",
      "song": "Edharkaga Marubadi",
      "composer": "சந்தோஷ் நாராயணன்",
      "sourceRow": 330
    }
  },
  {
    "id": "master-song-248",
    "slug": "2025-maaman-all-songs-except-vizhuthe-thalavizhuthe-248",
    "year": 2025,
    "sequence": 248,
    "kind": "film",
    "movieId": "master-work-125",
    "english": {
      "film": "Maaman",
      "song": "All songs except \"Vizhuthe Thalavizhuthe\"",
      "composer": "Hesham Abdul Wahab",
      "sourceRow": 332
    },
    "tamil": {
      "film": "மாமன்",
      "song": "All songs except \"Vizhuthe Thalavizhuthe\"",
      "composer": "ஹெஷாம் அப்துல் வஹாப்",
      "sourceRow": 332
    }
  },
  {
    "id": "master-song-249",
    "slug": "2025-3bhk-kaanalin-mele-249",
    "year": 2025,
    "sequence": 249,
    "kind": "film",
    "movieId": "master-work-126",
    "english": {
      "film": "3BHK",
      "song": "Kaanalin Mele",
      "composer": "Amrit Ramnath",
      "sourceRow": 333
    },
    "tamil": {
      "film": "3 பி.எச்.கே",
      "song": "Kaanalin Mele",
      "composer": "Amrit Ramnath",
      "sourceRow": 333
    }
  },
  {
    "id": "master-song-250",
    "slug": "2025-thanal-kitta-nerungadha-250",
    "year": 2025,
    "sequence": 250,
    "kind": "film",
    "movieId": "master-work-127",
    "english": {
      "film": "Thanal",
      "song": "Kitta Nerungadha",
      "composer": "Justin Prabhakaran",
      "sourceRow": 334
    },
    "tamil": {
      "film": "தனல்",
      "song": "Kitta Nerungadha",
      "composer": "ஜஸ்டின் ப்ரபாகரன்",
      "sourceRow": 334
    }
  },
  {
    "id": "master-song-251",
    "slug": "2025-dude-nallaru-po-251",
    "year": 2025,
    "sequence": 251,
    "kind": "film",
    "movieId": "master-work-128",
    "english": {
      "film": "Dude",
      "song": "Nallaru Po",
      "composer": "Sai Abhyankkar",
      "sourceRow": 335
    },
    "tamil": {
      "film": "டியூட்",
      "song": "Nallaru Po",
      "composer": "சாய் அப்யங்கர்",
      "sourceRow": 335
    }
  },
  {
    "id": "master-song-252",
    "slug": "2025-mark-masth-malaika-252",
    "year": 2025,
    "sequence": 252,
    "kind": "film",
    "movieId": "master-work-129",
    "english": {
      "film": "Mark",
      "song": "Masth Malaika",
      "composer": "B. Ajaneesh Loknath",
      "note": "Tamil version",
      "sourceRow": 336
    },
    "tamil": {
      "film": "மார்க்",
      "song": "Masth Malaika",
      "composer": "B. Ajaneesh Loknath",
      "note": "Tamil version",
      "sourceRow": 336
    }
  },
  {
    "id": "master-song-253",
    "slug": "2026-karuppu-raathu-raasan-253",
    "year": 2026,
    "sequence": 253,
    "kind": "film",
    "movieId": "master-work-130",
    "english": {
      "film": "Karuppu",
      "song": "Raathu Raasan",
      "composer": "Sai Abhyankkar",
      "sourceRow": 338
    },
    "tamil": {
      "film": "கருப்பு",
      "song": "Raathu Raasan",
      "composer": "சாய் அப்யங்கர்",
      "sourceRow": 338
    }
  },
  {
    "id": "master-song-254",
    "slug": "2026-jana-nayagan-oru-pere-varalaaru-254",
    "year": 2026,
    "sequence": 254,
    "kind": "film",
    "movieId": "master-work-131",
    "english": {
      "film": "Jana Nayagan",
      "song": "Oru Pere Varalaaru",
      "composer": "Anirudh Ravichander",
      "sourceRow": 340
    },
    "tamil": {
      "film": "ஜன நாயகன்",
      "song": "Oru Pere Varalaaru",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 340
    }
  },
  {
    "id": "master-song-255",
    "slug": "2026-jana-nayagan-chella-magale-255",
    "year": 2026,
    "sequence": 255,
    "kind": "film",
    "movieId": "master-work-131",
    "english": {
      "film": "Jana Nayagan",
      "song": "Chella Magale",
      "composer": "Anirudh Ravichander",
      "sourceRow": 341
    },
    "tamil": {
      "film": "ஜன நாயகன்",
      "song": "Chella Magale",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 341
    }
  },
  {
    "id": "master-song-256",
    "slug": "2026-jana-nayagan-raavana-mavandaa-256",
    "year": 2026,
    "sequence": 256,
    "kind": "film",
    "movieId": "master-work-131",
    "english": {
      "film": "Jana Nayagan",
      "song": "Raavana Mavandaa",
      "composer": "Anirudh Ravichander",
      "sourceRow": 342
    },
    "tamil": {
      "film": "ஜன நாயகன்",
      "song": "Raavana Mavandaa",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 342
    }
  },
  {
    "id": "master-song-257",
    "slug": "2026-jana-nayagan-uravu-257",
    "year": 2026,
    "sequence": 257,
    "kind": "film",
    "movieId": "master-work-131",
    "english": {
      "film": "Jana Nayagan",
      "song": "Uravu",
      "composer": "Anirudh Ravichander",
      "sourceRow": 343
    },
    "tamil": {
      "film": "ஜன நாயகன்",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 343
    }
  },
  {
    "id": "master-song-258",
    "slug": "2026-jana-nayagan-ulla-olicha-uyire-258",
    "year": 2026,
    "sequence": 258,
    "kind": "film",
    "movieId": "master-work-131",
    "english": {
      "film": "Jana Nayagan",
      "song": "Ulla Olicha Uyire",
      "composer": "Anirudh Ravichander",
      "sourceRow": 344
    },
    "tamil": {
      "film": "ஜன நாயகன்",
      "composer": "அனிருத் ரவிச்சந்தர்",
      "sourceRow": 344
    }
  },
  {
    "id": "master-song-259",
    "slug": "2026-peddi-chikiri-chikiri-259",
    "year": 2026,
    "sequence": 259,
    "kind": "film",
    "movieId": "master-work-132",
    "english": {
      "film": "Peddi",
      "song": "Chikiri Chikiri",
      "composer": "A. R. Rahman",
      "note": "Tamil version",
      "sourceRow": 346
    },
    "tamil": {
      "film": "பெட்டி",
      "song": "Chikiri Chikiri",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "note": "Tamil version",
      "sourceRow": 346
    }
  },
  {
    "id": "master-song-260",
    "slug": "2026-peddi-rai-rai-raa-raa-260",
    "year": 2026,
    "sequence": 260,
    "kind": "film",
    "movieId": "master-work-132",
    "english": {
      "film": "Peddi",
      "song": "Rai Rai Raa Raa",
      "composer": "A. R. Rahman",
      "sourceRow": 347
    },
    "tamil": {
      "film": "பெட்டி",
      "song": "Rai Rai Raa Raa",
      "composer": "ஏ. ஆர். ரஹ்மான்",
      "sourceRow": 347
    }
  },
  {
    "id": "master-song-261",
    "slug": "2024-tvk-flag-anthem-arivu-261",
    "year": 2024,
    "sequence": 261,
    "kind": "music-video",
    "movieId": "master-work-133",
    "english": {
      "film": "TVK FLAG ANTHEM",
      "song": "Arivu",
      "artist": "Arivu",
      "sourceRow": 351
    },
    "tamil": {
      "film": "TVK FLAG ANTHEM",
      "composer": "Arivu",
      "artist": "Arivu",
      "sourceRow": 351
    }
  },
  {
    "id": "master-song-262",
    "slug": "2025-sithira-puthiri-sai-abhyankkar-262",
    "year": 2025,
    "sequence": 262,
    "kind": "music-video",
    "movieId": "master-work-134",
    "english": {
      "film": "Sithira Puthiri",
      "song": "Sai Abhyankkar",
      "artist": "Sai Abhyankkar",
      "sourceRow": 352
    },
    "tamil": {
      "film": "Sithira Puthiri",
      "composer": "Sai Abhyankkar",
      "artist": "Sai Abhyankkar",
      "sourceRow": 352
    }
  },
  {
    "id": "master-song-263",
    "slug": "2026-pavazha-malli-sai-abhyankkar-263",
    "year": 2026,
    "sequence": 263,
    "kind": "music-video",
    "movieId": "master-work-135",
    "english": {
      "film": "Pavazha Malli",
      "song": "Sai Abhyankkar",
      "artist": "Sai Abhyankkar",
      "sourceRow": 353
    },
    "tamil": {
      "film": "Pavazha Malli",
      "composer": "Sai Abhyankkar",
      "artist": "Sai Abhyankkar",
      "sourceRow": 353
    }
  },
  {
    "id": "master-song-264",
    "slug": "2026-tvk-unga-vijay-song-tvk-unga-vijay-song-264",
    "year": 2026,
    "sequence": 264,
    "kind": "music-video",
    "movieId": "master-work-133",
    "english": {
      "film": "TVK Unga Vijay Song",
      "sourceRow": 354
    }
  },
  {
    "id": "master-song-265",
    "slug": "2026-tvk-election-song-kadaisi-nambikkai-thaman-265",
    "year": 2026,
    "sequence": 265,
    "kind": "music-video",
    "movieId": "master-work-133",
    "english": {
      "film": "TVK Election Song - Kadaisi Nambikkai",
      "song": "Thaman",
      "artist": "Thaman",
      "sourceRow": 355
    },
    "tamil": {
      "film": "TVK Election Song - Kadaisi Nambikkai",
      "composer": "Thaman",
      "artist": "Thaman",
      "sourceRow": 354
    }
  }
];
