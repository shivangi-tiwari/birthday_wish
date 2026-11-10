import hbdSound from './hbd.mp3';

let currentAudio: HTMLAudioElement | null = null;

export const playHBD = () => {
  // Stop any existing audio
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Create new audio instance
  currentAudio = new Audio(hbdSound);
  currentAudio.volume = 0.5;
  currentAudio.loop = true; // This makes it repeat infinitely
  
  currentAudio.play().catch(e => console.error('Audio play failed:', e));
};

export const stopHBD = () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
};
