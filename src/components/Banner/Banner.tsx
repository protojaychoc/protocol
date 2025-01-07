import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { StaticImageData } from 'next/image';

interface BannerProps {
    banner: {
      title: string;
      link?: string;
      path?: string;
    };
    img: string | StaticImageData;
  }
  

export const Banner = ({ banner, img }: BannerProps) => {
    

    return (
        <section className="block mx-auto max-w-theme-wide mt-40 mb:20 lg:mt-40 lg:mb-40">
            <div className="relative my-10">
            <Link
                href=""
                className="absolute -top-24 left-3 right-3 lg:left-[50%] lg:translate-x-[-50%] bg-card text-card-foreground lg:min-w-[370px] min-h-36 flex justify-center items-center flex-col gap-4 px-6 rounded-xl group"
            >
                <h3 className="text-2xl text-center">{banner.title}</h3>
                <span className="text-primary group">
                    <span className="relative inline-block ml-3">
                        <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] block bg-primary group-hover:bg-foreground transition rounded-full w-6 h-6"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-4 w-4 text-primary-foreground group-hover:card-foreground transition size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </span>
                    <span className="relative top-1 ml-6 group-hover:text-foreground transition">{banner.link}</span>
                </span>
            </Link>
            <picture className='block w-full min-h-[300px] bg-black rounded-xl overflow-hidden'>
                <Image
                src={img}
                alt="Outil de ticketing"
                className="mx-auto object-cover"
                ></Image>
            </picture>
            </div>
        </section>
    );
};