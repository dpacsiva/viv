import { permanentRedirect } from "next/navigation";

export default function JourneyRedirect() {
  permanentRedirect("/profile");
}
