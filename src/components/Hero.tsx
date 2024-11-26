import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface HeroProps {
    hero: {
      title: string;
      subtitle?: string;
      highlight?: string;
    };
    img: string | StaticImageData;
  }
  

export const Hero = ({hero, img}: HeroProps) => {

    const highlight = hero.highlight || "";
    const interTitleParts = hero?.title.split(highlight);

    return (
        <section className="block mx-auto max-w-theme-wide px-52">
            <div className="grid grid-cols-2 gap-5 h-[calc(100vh-96px)]">
                <div className="flex justify-center flex-col pr-10">
                    <h1 className="py-5 text-6xl font-medium">{interTitleParts[0]} <span className="text-primary">{highlight}</span> {interTitleParts[1]}</h1>
                    <p className="text-xl">{hero.subtitle}</p>
                </div>
                <picture className="flex justify-center flex-col relative">
                    <div className="absolute top-0 bottom-0 h-[calc(100vh-96px)] w-[calc(100%+13rem)] py-5">
                        <div className="flex items-center justify-center w-full h-full bg-foreground overflow-hidden rounded-xl">
                            <Image
                            src={img}
                            alt="Call-center support 24/7"
                            className="mx-auto object-cover"
                            />
                        </div>
                    </div>
                </picture>
            </div>
        </section>
    );
};