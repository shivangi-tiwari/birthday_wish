# 💕 Happy Bday Wishes - Installation Guide

## Prerequisites
Before you begin, make sure you have installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **Visual Studio Code** - [Download here](https://code.visualstudio.com/)

## Installation Steps

### 1. Open VS Code
- Launch Visual Studio Code on your computer

### 2. Open the Project Folder
- Click `File` → `Open Folder`
- Navigate to this project folder and select it
- Click `Open`

### 3. Open Terminal in VS Code
- Click `Terminal` → `New Terminal` (or press `` Ctrl+` ``)
- A terminal window will appear at the bottom of VS Code

### 4. Install Dependencies
In the terminal, type this command and press Enter:
```bash
npm install
```
This will install all the required packages. It may take 1-2 minutes.

### 5. Start the Development Server
After installation completes, type this command and press Enter:
```bash
npm run dev
```

### 6. Open in Browser
- The terminal will show a message like: `Local: http://localhost:5173/`
- Hold `Ctrl` (or `Cmd` on Mac) and click on the URL
- OR manually open your browser and go to `http://localhost:5173/`

##  You're Ready!
The romantic heart puzzle should now be running in your browser!

## Project Structure (All JSX Files)
```
.
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── BirthdayIntro/
│   │   │   │   └── index.tsx
│   │   │   ├── PuzzleGame/
│   │   │   │   ├── DraggableItem.tsx
│   │   │   │   └── PuzzleColumn.tsx
│   │   │   ├── SuccesssScreen/
│   │   │   │   └── index.tsx
│   │   │   └── WishMessage/
│   │   │       ├── AnimatedText.tsx
│   │   │       └── index.tsx
│   │   ├── data/
│   │   │   └── messages.tsx
│   │   ├── utils/
│   │   │   ├── audioUtils.ts
│   │   │   ├── GlassSound.wav
│   │   │   ├── hbd.mp3
│   │   │   └── puzzleLogic.ts
│   │   └── App.tsx                               #file with all the main functions 
│   ├── images/
│   │   ├── celebrate.gif
│   │   ├── heart.png
│   │   ├── hrt1.png
│   │   └── hrt2.png
│   ├── styles/
│   │   ├── fonts.css
│   │   ├── index.css
│   │   ├── intro.css
│   │   ├── styles.css
│   │   ├── tailwind.css
│   │   └── theme.css
│   └── main.tsx                                  #main file exporting all changes to html
└── index.html                                    #html file

```

## How to Customize

### Change Romantic Messages
Edit `/src/app/data/messages.js` and modify the messages array.

### Change Colors
Edit `/src/app/styles/puzzle.css` and update the color values:
- Background: Look for `#ffeef8`, `#ffe4f1`
- Heart colors: Look for `#ff69b4`, `#ff1493`, `#c9184a`

### Change Heart Design
Edit `/src/app/components/HeartShape.jsx` to customize the SVG heart shape and gradient.

## Troubleshooting

**Problem: "npm is not recognized"**
- Solution: Install Node.js from nodejs.org and restart VS Code

**Problem: Port already in use**
- Solution: The terminal will suggest a different port. Press 'y' to use it.

**Problem: Changes not showing**
- Solution: Save your files (Ctrl+S) and the page will auto-refresh

## Stop the Development Server
- Click in the terminal
- Press `Ctrl+C`
- Type `y` if asked to confirm

## Useful VS Code Extensions
- **ES7+ React/Redux/React-Native snippets** - For faster coding
- **Prettier** - For code formatting
- **Live Server** - Alternative way to run projects

Enjoy your romantic interactive experience! 💕
