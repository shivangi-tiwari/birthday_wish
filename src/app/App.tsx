import { useState } from 'react';
import { BirthdayIntro } from './components/BirthdayIntro';
import { PuzzleGame } from './components/PuzzleGame/PuzzleGame';
import { WishMessage } from './components/WishMessage';
import '../styles/styles.css';
import '../styles/intro.css';

export default function App() {
  const [currentView, setCurrentView] = useState('intro');

  return (
    <div className="size-full flex items-center justify-center">
      {currentView === 'intro' && (
        <BirthdayIntro onStart={() => setCurrentView('puzzle')} />
      )}
      {currentView === 'puzzle' && (
        <PuzzleGame onHeartClick={() => setCurrentView('typewriter')} />
      )}
      {currentView === 'typewriter' && <WishMessage />}
    </div>
  );
}
