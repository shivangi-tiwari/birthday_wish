import { Heart, Sparkles } from 'lucide-react';
import { INTRO_MESSAGES } from '../../data/messages';

// THIS FUNC SHOWS THE BIRTHDAY INTRO SCREEN WITH MESSAGES AND STYLING

export function BirthdayIntro({ onStart }) {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="intro-decoration intro-decoration-top">
          <Heart className="intro-icon intro-heart-1" />
          <Sparkles className="intro-icon intro-sparkle-1" />
          <Heart className="intro-icon intro-heart-2" />
        </div>

        <div className="intro-text-section">
          <h1 className="intro-title">{INTRO_MESSAGES.title}</h1>

          <p className="intro-subtitle">
            {INTRO_MESSAGES.subtitle}
          </p>

          <div className="intro-message">
            <p className="intro-paragraph intro-paragraph-1">
              {INTRO_MESSAGES.description1}
            </p>
            <p className="intro-paragraph intro-paragraph-2">
              {INTRO_MESSAGES.description2}
            </p>
          </div>
        </div>

        <div className="intro-decoration intro-decoration-bottom">
          <Sparkles className="intro-icon intro-sparkle-2" />
          <Heart className="intro-icon intro-heart-3" />
          <Sparkles className="intro-icon intro-sparkle-3" />
        </div>

        <button className="intro-button" onClick={onStart}>
          {INTRO_MESSAGES.button}
        </button>
      </div>
    </div>
  );
}
