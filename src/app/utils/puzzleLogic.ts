// Check if item can be dropped in target section
// Play sound effect when pieces connect

export const canDrop = (draggedItem, targetSection) => {
  if (!draggedItem || targetSection !== "InProgress") return false;
  
  const { item, sourceSection } = draggedItem;
  return (
    (item.side === "left" && sourceSection === "leftCol") ||
    (item.side === "right" && sourceSection === "rightCol")
  );
};

// Get paired and unpaired items
export const getPairedItems = (items) => {
  const pairs = {};
  const unpaired = [];

  items.forEach((item) => {
    if (!pairs[item.sliceId]) pairs[item.sliceId] = {};
    pairs[item.sliceId][item.side] = item;
  });

  Object.entries(pairs).forEach(([sliceId, sides]) => {
    if (!sides.left || !sides.right) {
      if (sides.left) unpaired.push(sides.left);
      if (sides.right) unpaired.push(sides.right);
      delete pairs[sliceId];
    }
  });

  return { pairs: Object.values(pairs), unpaired };
};

// Play sound effect when pieces connect
import glassSound from './GlassSound.wav';

export const playGlassSlideSound = () => {
  const audio = new Audio(glassSound);
  audio.volume = 0.5;
  audio.play().catch(e => console.error('Audio play failed:', e));
};
