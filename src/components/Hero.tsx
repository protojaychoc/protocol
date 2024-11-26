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
        <section className="block mx-auto max-w-theme-wide desktop:px-52">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 min-h-[calc(100vh-96px)]">
                <div className="flex justify-end lg:justify-center flex-col lg:pr-10">
                    <h1 className="py-5 text-5xl desktop:text-6xl font-medium text-center lg:text-left">{interTitleParts[0]} <span className="text-primary">{highlight}</span> {interTitleParts[1]}</h1>
                    <p className="text-xl text-center lg:text-left">{hero.subtitle}</p>
                </div>
                <picture className="flex justify-start lg:justify-center flex-col desktop:relative justify-self-start lg:justify-self-auto">
                    <div className="desktop:absolute desktop:top-0 desktop:bottom-0 lg:h-[calc(100vh-96px)] desktop:w-[calc(100%+13rem)] py-5">
                        <div className="flex items-center justify-center w-full lg:h-full bg-foreground overflow-hidden rounded-xl">
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