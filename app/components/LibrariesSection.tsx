import Image from 'next/image';

const libraryItems = [
  {
    label: 'MUI',
    level: '8/10',
    icons: [{ src: '/skills/mui-icon.png', alt: 'MUI' }],
  },
  {
    label: 'Tailwind',
    level: '6/10',
    icons: [{ src: '/skills/tailwind-icon.svg', alt: 'Tailwind' }],
  },
  {
    label: 'shadcn/ui',
    level: '8/10',
    icons: [{ src: '/skills/shadcn:ui.png', alt: 'shadcn/ui' }],
  },
  {
  label: 'Zustand',
  level: '8/10',
  icons: [{ src: '/skills/zustand.webp', alt: 'Zustand' }],
  },
  {
    label: 'Redux toolkit',
    level: '8/10',
    icons: [{ src: '/skills/redux-logo.svg', alt: 'Redux' }],
  },
  {
    label: 'Axios',
    level: '8/10',
    icons: [{ src: '/skills/axios-icon.svg', alt: 'Axios' }],
  },
  {
    label: 'React Hook Form',
    level: '8/10',
    icons: [{ src: '/skills/react-hook-form-icon.png', alt: 'React Hook Form' }],
  },
  // {
  //   label: 'Formik',
  //   level: '8/10',
  //   icons: [{ src: '/skills/formik-icon.png', alt: 'Formik' }],
  // },
];

interface Props {
  title: string;
}

export default function LibrariesSection({ title }: Props) {
  return (
    <div className="mt-10">
      <h2 className="display-serif text-4xl">{title}</h2>
      <div className="paper-card rotate-1.3 mt-8 relative px-4 py-5">
        <span className="tape-strip -top-4 left-28 rotate-[5deg]" />
        <div className="mt-4 flex flex-wrap gap-6">
          {libraryItems.map((skill) => (
            <div
              key={`${skill.label}-${skill.level}`}
              className="flex flex-col items-center"
            >
              <span className="inline-flex items-center gap-2">
                {skill.icons.map((icon) => (
                  <Image
                    key={icon.src}
                    src={icon.src}
                    alt={icon.alt}
                    width={48}
                    height={48}
                    className="object-contain aspect-square pointer-events-none"
                    draggable={false}
                  />
                ))}
              </span>
              <div className="text-sm">{skill.label}</div>
              <div className="handwriting text-3xl">{skill.level}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
