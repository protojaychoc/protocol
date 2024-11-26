import Link from 'next/link';
import Image from 'next/image';

interface FeatureShowcaseProps {
    featureShowcase: {
        title?: string | undefined;
        link?: string | undefined;
    }
}

export const FeatureShowcase = ({ featureShowcase }:FeatureShowcaseProps) => {
    return (
        <section className="mt-28 mb-40 lg:mt-36 lg:mb-0 block mx-auto max-w-theme-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 desktop:grid-cols-3 gap-x-4 gap-y-20 desktop:gap-y-36">
                {featureShowcase.map((feature: FeatureShowcaseProps, index: number) => (
                    <Link key={index} href="" className='relative max-w-[549px] block group mx-auto'>
                        <picture className='block mx-auto'>
                            <Image src={feature.image} width={549} height={381} alt={feature.title} className='rounded-lg group-hover:shadow-md object-cover w-auto h-full'></Image>
                        </picture>
                        <div className="bg-card text-card-foreground absolute -top-12 left-3 right-3 lg:right-auto lg:left-[50%] lg:translate-x-[-50%] lg:w-[calc(100%-200px)] p-4 group-hover:text-primary transition rounded-xl text-center">
                            <h3 className="text-2xl font-medium">{feature.title}</h3>
                            <h4 className='mt-4'>{feature.link}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
