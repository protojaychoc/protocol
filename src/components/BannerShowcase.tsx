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
        <section className="relative mt-36 block mx-auto max-w-theme-wide">
                <div className="absolute -top-24 left-[calc(13rem)] right-[calc(13rem)] bg-card text-card-foreground min-h-36 flex justify-center items-center gap-4 rounded-xl">
                    {Object.entries(bannerShowcase).map(([key, showcase]) => (
                        
                            <Link key={key}
                                href=""
                                className="relative min-w-[400px] p-8 group"
                            >   
                                <span
                                    dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(showcase.icon || ""),
                                    }}
                                />
                                <h3 className="text-2xl mt-6">{showcase.title}</h3>
                                <h4 className="mt-4">{showcase.description}</h4>
                                <span className="block text-primary mt-6">
                                    <span className="relative inline-block ml-3">
                                        <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] block bg-primary rounded-full w-6 h-6"></span>
                                        <ArrowRightIcon className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-4 w-4 text-primary-foreground transition group-hover:text-foreground" />
                                    </span>
                                    <span className="relative top-1 ml-6">{showcase.link}</span>
                                </span>
                            </Link>
                        
                    ))}
            </div>
            <picture className='block w-full bg-black rounded-xl overflow-hidden'>
                    <Image
                    src={img}
                    alt="Outil de ticketing"
                    className="mx-auto object-cover"
                    ></Image>
                </picture>
        </section>
    );
};