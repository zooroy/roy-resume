import Image from 'next/image';

const skillItems = [
  {
    label: 'Next.js',
    level: '8/10',
    icons: [{ src: '/skills/nextjs-icon.svg', alt: 'Next.js' }],
  },
  {
    label: 'React.js',
    level: '8/10',
    icons: [{ src: '/skills/react-icon.svg', alt: 'React' }],
  },
  {
    label: 'Vue.js',
    level: '5/10',
    icons: [{ src: '/skills/vue-icon.svg', alt: 'Vue' }],
  },
  {
    label: 'TypeScript',
    level: '7/10',
    icons: [{ src: '/skills/typescript-icon.svg', alt: 'TypeScript' }],
  },
  {
    label: 'JavaScript',
    level: '8/10',
    icons: [{ src: '/skills/javascript-icon.svg', alt: 'JavaScript' }],
  },
  {
    label: 'HTML/CSS',
    level: '8/10',
    icons: [
      { src: '/skills/html-5-icon.svg', alt: 'HTML5' },
      { src: '/skills/css-3-icon.svg', alt: 'CSS3' },
    ],
  },
];

interface Props {
  title: string;
}

export default function SkillsSection({ title }: Props) {
  return (
    <div>
      <h2 className="display-serif text-4xl">{title}</h2>
      <div className="paper-card rotate-1 mt-8 relative px-4 py-5">
        <span className="tape-strip -top-4 left-20 -rotate-[5deg]" />
        <div className="space-y-6">
          <div>
            <div className="mt-4 flex flex-wrap gap-6">
              {skillItems.map((skill) => (
                <div
                  key={`${skill.label}-${skill.level}`}
                  className="flex flex-col items-center"
                >
                  <span className="inline-flex items-center gap-2">
                    {skill.icons.map((icon) => (
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
                  <div className="handwriting text-3xl">{skill.level}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
