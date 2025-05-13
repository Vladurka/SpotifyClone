import { useEffect, useRef } from "react";
import { usePlayerStore } from "@/stores/usePlayerStore";

export const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const prevSongUrlRef = useRef<string | null>(null);

  const { currentSong, isPlaying, playNext } = usePlayerStore();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((err) => console.error("Failed to play audio:", err));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      playNext();
    };

    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [playNext]);

  useEffect(() => {
    const audio = audioRef.current;
    const audioUrl = currentSong?.audioUrl;

    if (!audio || !audioUrl) return;

    const isNewTrack = prevSongUrlRef.current !== audioUrl;

    if (isNewTrack) {
      prevSongUrlRef.current = audioUrl;
      audio.src = audioUrl;
      audio.load();

      if (isPlaying) {
        audio
          .play()
          .catch((err) => console.error("Error playing new track:", err));
      }
    }
  }, [currentSong, isPlaying]);

  return <audio ref={audioRef} style={{ display: "none" }} />;
};
