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
            <div className="flex lg:flex-row flex-col-reverse justify-stretch items-stretch lg:justify-center lg:items-center gap-10 lg:gap-5 lg:min-h-[calc(100vh-96px)]">
                {/* Première colonne */}
                <div className="flex-1 relative">
                <div className="
                absolute lg:static bg-card lg:bg-background -top-24 right-3 left-3 lg:top-0 lg:right-0 lg:left-0 flex justify-start flex-col pt-1 pr-1 pl-1 pb-3 rounded-xl lg:rounded-none 
                lg:justify-center lg:pr-10
                ">
                    <h1 className="py-5 text-4xl lg:text-5xl desktop:text-6xl font-medium text-center lg:text-left">
                    {interTitleParts[0]} <span className="text-primary">{highlight}</span> {interTitleParts[1]}
                    </h1>
                    <p className="text-md lg:text-xl text-center lg:text-left">{hero.subtitle}</p>
                </div>
                </div>

                {/* Deuxième colonne */}
                <div className="flex-1 m-0-auto">
                <picture className="flex justify-start lg:justify-center flex-col desktop:relative justify-self-start lg:justify-self-auto">
                    <div className="lg:h-[calc(100vh-96px)] desktop:w-[calc(100%+13rem)] lg:py-5">
                        <div className="flex items-center justify-center h-full bg-foreground lg:rounded-xl overflow-hidden">
                            <Image
                            src={img}
                            alt="Call-center support 24/7"
                            className="mx-auto h-[75vh] max-h-full lg:h-auto object-cover"
                            />
                        </div>
                    </div>
                </picture>
                </div>
            </div>
        </section>
    );
};