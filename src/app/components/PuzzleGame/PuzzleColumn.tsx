import { DraggableItem, PairedItem } from "./DraggableItem";
import { getPairedItems } from "../../utils/puzzleLogic";
import leftImg from "../../../images/hrt1.png";
import rightImg from "../../../images/hrt2.png";

const SECTION_LABELS = {
  leftCol: "Left Piece",
  InProgress: " ",
  rightCol: "Right Piece"
};

export function PuzzleColumn({ section, items, onDrop, onDragOver, onDragStart }) {
  const isCenterColumn = section === "InProgress";

  if (isCenterColumn) {
    const { pairs, unpaired } = getPairedItems(items);
    const leftUnpaired = unpaired.find((u) => u.side === "left");
    const rightUnpaired = unpaired.find((u) => u.side === "right");

    return (
      <div 
        onDrop={() => onDrop(section)} 
        onDragOver={onDragOver} 
        className="w-full min-h-32 sm:min-h-80 lg:min-h-[25rem] flex flex-col items-center relative px-2 sm:px-4 lg:px-6 py-2 sm:py-4 lg:py-6"
      >
        {/* Heart Outline */}
        <div className="absolute w-32 sm:w-64 lg:w-[16.5rem] h-32 sm:h-64 lg:h-[16.5rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
          <img 
            src={leftImg} 
            alt="outline-left" 
            className="w-1/2 h-full object-contain opacity-[0.14] -mr-1" 
            draggable={false} 
          />
          <img 
            src={rightImg} 
            alt="outline-right" 
            className="w-1/2 h-full object-contain opacity-[0.14] -ml-1" 
            draggable={false} 
          />
        </div>

        <h3 className="text-sm sm:text-base lg:text-lg text-[#c9184a] font-semibold text-center tracking-wide mb-2 sm:mb-4 lg:mb-5">
          {SECTION_LABELS[section]}
        </h3>

        {pairs.map((pair, idx) => (
          <PairedItem key={idx} />
        ))}

        {/* Center Slots */}
        <div className="absolute w-32 sm:w-64 lg:w-[16.5rem] h-32 sm:h-64 lg:h-[16.5rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex z-[8] pointer-events-none">
          <div className="w-1/2 h-full flex items-center justify-end pr-1">
            {leftUnpaired && (
              <div className="pointer-events-auto">
                <DraggableItem
                  item={leftUnpaired}
                  section={section}
                  index={items.indexOf(leftUnpaired)}
                  onDragStart={onDragStart}
                />
              </div>
            )}
          </div>
          <div className="w-1/2 h-full flex items-center justify-start pl-1">
            {rightUnpaired && (
              <div className="pointer-events-auto">
                <DraggableItem
                  item={rightUnpaired}
                  section={section}
                  index={items.indexOf(rightUnpaired)}
                  onDragStart={onDragStart}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onDrop={() => onDrop(section)} 
      onDragOver={onDragOver} 
      className="w-full min-h-80 sm:min-h-80 lg:min-h-[25rem] flex flex-col items-center justify-center relative bg-transparent"
    >
      {items.map((item, idx) => (
        <DraggableItem
          key={idx}
          item={item}
          section={section}
          index={idx}
          onDragStart={onDragStart}
        />
      ))}
    </div>
  );
}