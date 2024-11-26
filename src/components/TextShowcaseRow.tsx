import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import {InterTitle} from '../components/InterTitle';
import { data } from '../../data';

interface TextShowcaseRowProps {
  textShowcaseRow: {
      title: string;
      description?: string;
      link?: string;
    };
}

export const TextShowcaseRow = ({ textShowcaseRow }: TextShowcaseRowProps) => {

  return (
    <section className="block mx-auto max-w-theme-wide desktop:px-52">
      <div className="flex flex-col lg:h-lvh items-center justify-center">
      <InterTitle interTitle={data.pages.home.textShowcaseRowTitle} hLvh={false} mt={false} />
        <div className="relative flex flex-wrap justify-center items-start gap-14 mt-12 mb-24 lg:mb-0">
          {textShowcaseRow.map((showcase, index) => (
            <Link
              key={index}
              href=""
              className="w-full md:w-1/3 lg:w-1/4 group"
            >
              <div className="md:flex md:flex-col md:justify-between md:h-full md:min-h-[250px]">
                <div>
                  <h3 className="text-2xl mt-6">{showcase.title}</h3>
                  <h4 className="mt-4">{showcase.description}</h4>
                </div>
                <span className="flex items-center text-primary mt-6">
                  <span className="relative inline-block ml-3">
                    <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] block bg-primary group-hover:bg-foreground transition rounded-full w-6 h-6 "></span>
                    <ArrowRightIcon className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-4 w-4 text-primary-foreground transition group-hover:card-foreground" />
                  </span>
                  <span className="relative top-[1px] ml-6 group-hover:text-foreground transition">{showcase.link}</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
