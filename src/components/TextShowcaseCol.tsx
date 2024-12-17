import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import {InterTitle} from '../components/InterTitle';
import { data } from '../../data';

interface TextShowcaseColProps {
  textShowcaseCol: {
      title: string;
      highlight?: string;
      link?: string;
      showcase: {
        title?: string | undefined;
        description?: string | undefined;
      }
    };
}

export const TextShowcaseCol = ({ textShowcaseCol }: TextShowcaseColProps) => {

    const highlight = textShowcaseCol.highlight || "";
    const textShowcaseColParts = textShowcaseCol?.title.split(highlight);

  return (
    <section className="block mx-auto max-w-theme-wide px-4 desktop:px-52 my-40">
      <div className="desktop:grid desktop:grid-cols-[35%_65%] desktop:gap-x-12 lg:h-lvh mt-24 lg:mt-0 flex flex-col items-center justify-center">
        <div className="flex justify-center flex-col my-16 desktop:my-0">
            <h3 className="text-4xl desktop:text-5xl font-medium">{textShowcaseColParts[0]} <span className="text-primary">{highlight}</span> {textShowcaseColParts[1]}</h3>
            { textShowcaseCol.link &&  <Link href="" className="inline mt-8 text-primary transition group cursor-pointer">
                    <span className="relative inline-block ml-3">
                        <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] block bg-primary rounded-full w-6 h-6 group-hover:bg-foreground"></span>
                        <ArrowRightIcon className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-4 w-4 text-primary-foreground transition group-hover:card-foreground" />
                    </span>
                    <span className="relative top-1 ml-6 group-hover:text-foreground transition">{textShowcaseCol.link}</span>
                </Link>
          }
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 desktop:gap-4 mt-12">
            {textShowcaseCol.showcase.map((showcase, index) => (
              <div
                key={index}
                className="desktop:p-8"
              >
                <div>
                  <h4 className="text-2xl">{showcase.title}</h4>
                  <p className="mt-4">{showcase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
