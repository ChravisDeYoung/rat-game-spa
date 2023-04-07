import { useOutletContext } from "react-router-dom";
import { SoundContext } from "../types/SoundContext";

export function useSoundContext() {
  return useOutletContext<SoundContext>();
}
