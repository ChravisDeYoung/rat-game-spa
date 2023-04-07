export type SoundContext = {
  musicRef: React.MutableRefObject<HTMLAudioElement>;

  soundEffectRef: React.MutableRefObject<HTMLAudioElement>;
  soundEffectEnabled: boolean;
  setSoundEffectEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};
