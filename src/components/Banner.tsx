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
        <section className="mt-48">
            <div className="relative m-10">
            <Link
                href=""
                className="absolute -top-24 left-[50%] translate-x-[-50%] bg-card text-card-foreground min-w-[370px] min-h-36 flex justify-center items-center flex-col gap-4 px-6 rounded-xl group"
            >
                <h3 className="text-2xl">{banner.title}</h3>
                <span className="text-primary">
                <span className="relative inline-block ml-3">
                    <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] block bg-primary rounded-full w-6 h-6"></span>
                    <ArrowRightIcon className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-4 w-4 text-primary-foreground transition group-hover:text-foreground" />
                </span>
                <span className="relative top-1 ml-6">{banner.link}</span>
                </span>
            </Link>
            <picture className='block w-full bg-black rounded-xl overflow-hidden'>
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