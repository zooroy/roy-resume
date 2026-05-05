import Image from 'next/image';
import DraggableCard from './DraggableCard';

const toolItems = [
  {
    label: 'Npm/Pnpm',
    icons: [
      { src: '/skills/npm-icon.svg', alt: 'Npm' },
      { src: '/skills/pnpm-icon.svg', alt: 'Pnpm' },
    ],
    level: '8/10',
  },
  {
    label: 'Git',
    icons: [{ src: '/skills/git-icon.svg', alt: 'Git' }],
    level: '8/10',
  },
];

interface Props {
  dragBoundsRef: React.RefObject<HTMLDivElement | null>;
  zIndexCounterRef: React.RefObject<number>;
  title: string;
}

export default function ToolsSection({ dragBoundsRef, zIndexCounterRef, title }: Props) {
  return (
    <div className="mt-10">
      <h2 className="display-serif text-4xl">{title}</h2>
      <DraggableCard
        dragBoundsRef={dragBoundsRef}
        zIndexCounterRef={zIndexCounterRef}
        className="paper-card -rotate-2 mt-8 relative px-4 py-5 cursor-grab active:cursor-grabbing"
      >
        <span className="tape-strip -top-4 left-28 rotate-[5deg]" />
        <div className="mt-4 flex flex-wrap gap-6">
          {toolItems.map((tool) => (
            <span
              key={tool.label}
              className="flex flex-col items-center text-sm"
            >
              <span className="inline-flex items-center gap-2">
                {tool.icons.map((icon) => (
                  <div
                    className="flex flex-col items-center"
                    key={icon.src}
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={48}
                      height={48}
                      className="object-contain pointer-events-none"
                      draggable={false}
                    />
                    <div className="text-sm">{icon.alt}</div>
                  </div>
                ))}
              </span>
              <div className="handwriting text-3xl">{tool.level}</div>
            </span>
          ))}
        </div>
      </DraggableCard>
    </div>
  );
}
