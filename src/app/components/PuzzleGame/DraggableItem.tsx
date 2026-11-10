import { useState } from "react";
import leftImg from "../../../images/hrt1.png";
import rightImg from "../../../images/hrt2.png";

export function DraggableItem({ item, section, index, onDragStart }) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
    onDragStart(section, index);
  };

  const handleDragEnd = () => setIsDragging(false);

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`w-12 sm:w-20 lg:w-[7.5rem] h-24 sm:h-40 lg:h-[15rem] my-2 sm:my-4 lg:my-6 mx-auto cursor-grab touch-none select-none transition-all duration-200 ${
        isDragging 
          ? 'scale-110 rotate-2 cursor-grabbing' 
          : ''
      }`}
      style={{ 
        filter: isDragging 
          ? 'drop-shadow(0 0.5rem 1.25rem rgba(255, 105, 180, 0.4))' 
          : 'drop-shadow(0 0.25rem 0.75rem rgba(255, 105, 180, 0.2))',
        WebkitUserSelect: 'none',
        WebkitTouchCallout: 'none'
      }}
    >
      <img
        src={item.side === 'left' ? leftImg : rightImg}
        alt={`heart-${item.side}`}
        className="w-full h-full block object-contain pointer-events-none"
        draggable={false}
      />
    </div>
  );
}

export function PairedItem() {
  return (
    <div className="flex gap-0 my-2 sm:my-4 lg:my-6 mx-auto w-24 sm:w-48 lg:w-[15rem] h-24 sm:h-48 lg:h-[15rem] relative z-10 before:content-[''] before:absolute before:-inset-2 sm:before:-inset-4 lg:before:-inset-6 before:rounded-full before:pointer-events-none" 
         style={{ 
           background: 'radial-gradient(circle, rgba(255, 105, 180, 0.3) 0%, transparent 70%)' 
         }}>
      <div className="w-12 sm:w-24 lg:w-[7.5rem] h-24 sm:h-48 lg:h-[15rem]">
        <img src={leftImg} alt="left-heart" draggable={false} className="w-full h-full object-contain" />
      </div>
      <div className="w-12 sm:w-24 lg:w-[7.5rem] h-24 sm:h-48 lg:h-[15rem]">
        <img src={rightImg} alt="right-heart" draggable={false} className="w-full h-full object-contain" />
      </div>
    </div>
  );
}