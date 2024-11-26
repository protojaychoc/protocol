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
    <section className="block mx-auto max-w-theme-wide px-52">
      <div className="grid grid-cols-[500px_auto] gap-x-12 h-lvh items-center justify-center">
        <div>
            <h3 className="text-5xl font-medium">{textShowcaseColParts[0]} <span className="text-primary">{highlight}</span> {textShowcaseColParts[1]}</h3>
            { textShowcaseCol.link &&  <span className="inline-block mt-8 text-primary hover:text-foreground transition group cursor-pointer">
                    <span className="relative inline-block ml-3">
                        <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] block bg-primary rounded-full w-6 h-6 group-hover:bg-foreground"></span>
                        <ArrowRightIcon className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-4 w-4 text-primary-foreground transition group-hover:card-foreground" />
                    </span>
                    <span className="relative top-1 ml-6">{textShowcaseCol.link}</span>
                </span>
          }
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 mt-12">
            {textShowcaseCol.showcase.map((showcase, index) => (
              <Link
                key={index}
                href=""
                className="relative p-8"
              >
                <div className="">
                  <h4 className="text-2xl">{showcase.title}</h4>
                  <p className="mt-4">{showcase.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
