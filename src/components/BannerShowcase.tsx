import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { StaticImageData } from 'next/image';
import DOMPurify from "isomorphic-dompurify";

interface BannerShowcaseProps {
    bannerShowcase: {
        icon?: string;
        title: string;
        description?: string;
        link?: string;
    };
    img?: string | StaticImageData;
  }
  

export const BannerShowcase = ({ bannerShowcase, img }: BannerShowcaseProps) => {
    

    return (
        <section className="relative desktop:mt-36 block mx-auto max-w-theme-wide">
                <div className="desktop:absolute desktop:-top-24 desktop:left-[calc(13rem)] desktop:right-[calc(13rem)] min-h-36 flex flex-col desktop:flex-row desktop:justify-start desktop:items-center items-start desktop:bg-card text-card-foreground gap-4 px-2 sm:px-6 desktop:px-0 rounded-xl">
                    {Object.entries(bannerShowcase).map(([key, showcase]) => (
                        
                            <Link key={key}
                                href=""
                                className="flex-1 p-8 desktop:mx-0 group bg-card rounded-xl w-full"
                            >   
                                <div className="desktop:flex desktop:flex-col desktop:justify-between h-full desktop:min-h-[300px]">
                                    <div>
                                        <span className="block mx-auto w-[40px]"
                                            dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(showcase.icon || ""),
                                            }}
                                        />
                                        <h3 className="text-2xl mt-6">{showcase.title}</h3>
                                        <h4 className="mt-4">{showcase.description}</h4>
                                    </div>
                                    <span className="block text-primary mt-6 group">
                                        <span className="relative inline-block ml-3">
                                            <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] block bg-primary group-hover:bg-foreground transition rounded-full w-6 h-6"></span>
                                            <ArrowRightIcon className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-4 w-4 text-primary-foreground transition group-hover:card-foreground" />
                                        </span>
                                        <span className="relative top-1 ml-6 group-hover:text-foreground transition">{showcase.link}</span>
                                    </span>
                                </div>
                            </Link>
                        
                    ))}
            </div>
            <picture className='relative w-full min-h-[300px] -top-24 desktop:mb-0 desktop:static desktop:top-0 desktop:z-0 -z-10 block w-full bg-black rounded-xl overflow-hidden'>
                    <Image
                    src={img}
                    alt="Outil de ticketing"
                    className="mx-auto object-cover"
                    ></Image>
                </picture>
        </section>
    );
};