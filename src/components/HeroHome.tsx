import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface HeroHomeProps {
    hero: {
      title: string;
      subtitle?: string;
      highlight?: string;
    };
    img: string | StaticImageData;
  }
  

export const HeroHome = ({hero, img}: HeroHomeProps) => {

    const highlight = hero.highlight || "";
    const interTitleParts = hero?.title.split(highlight);

    return (
        <section className="block mx-auto max-w-theme-wide desktop:px-52 h-[calc(100vh-96px)] mt-24 lg:mt-0">
            <div className="flex lg:flex-row flex-col-reverse justify-stretch items-stretch lg:justify-center lg:items-center gap-10 lg:gap-5 h-full">
                <div className="flex-1">
                    <div className="flex justify-center flex-col lg:pr-10 px-4">
                        <h1 className="py-5 text-4xl lg:text-5xl desktop:text-6xl font-medium text-center lg:text-left">{interTitleParts[0]} <span className="text-primary">{highlight}</span> {interTitleParts[1]}</h1>
                        <p className="text-md lg:text-xl text-center lg:text-left">{hero.subtitle}</p>
                    </div>
                </div>
                <div className="flex-1">
                    <picture className="flex justify-end items-center lg:justify-center flex-col w-full desktop:relative h-full">
                        <div className="block mx-auto w-full lg:h-[calc(100vh-96px)] desktop:w-[calc(100%+13rem)] lg:py-5">
                            <div className="flex items-center justify-center w-full lg:h-full bg-foreground overflow-hidden lg:rounded-xl">
                                <Image
                                src={img}
                                alt="Call-center support 24/7"
                                className="mx-auto object-cover"
                                />
                            </div>
                        </div>
                    </picture>
                </div>
            </div>
        </section>
    );
};