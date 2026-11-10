
  import React from "react";
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  const rootEl = document.getElementById("root")!;
  const root = createRoot(rootEl);
  root.render(<App />);

  function applyScale() {
    const appEl = rootEl.firstElementChild as HTMLElement | null;
    if (!appEl) return;
    appEl.style.transformOrigin = "top left";
    appEl.style.willChange = "transform";

    // Measure the rendered app size and compute a scale so it fits the viewport
    const contentW = Math.max(appEl.scrollWidth, appEl.offsetWidth, appEl.clientWidth);
    const contentH = Math.max(appEl.scrollHeight, appEl.offsetHeight, appEl.clientHeight);

    const scaleX = window.innerWidth / (contentW || 1);
    const scaleY = window.innerHeight / (contentH || 1);
    const scale = Math.min(scaleX, scaleY, 1);

    appEl.style.transform = `scale(${scale})`;

    // Center the scaled content within the viewport
    const left = (window.innerWidth - contentW * scale) / 2;
    const top = (window.innerHeight - contentH * scale) / 2;
    appEl.style.position = "relative";
    appEl.style.left = `${Math.max(0, left)}px`;
    appEl.style.top = `${Math.max(0, top)}px`;
  }

  // To allow initial layout to settle
  setTimeout(applyScale, 50);
  window.addEventListener("resize", () => requestAnimationFrame(applyScale));
  