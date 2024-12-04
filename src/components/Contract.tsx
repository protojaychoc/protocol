import Link from "next/link";
import { ArrowRightIcon } from '@heroicons/react/24/solid'

interface ContractDetail {
  title: string;
  subtitle?: string;
  price: string;
  priceTitle?: string;
  description: string;
  link?: string;
}

interface ContractProps {
  contract: {
    [key: string]: ContractDetail;
  };
}

export const Contract = ({ contract }: ContractProps) => {
  return (
    <section>
      <div className="block mx-auto max-w-theme-wide lg:px-52">
        {Object.entries(contract).map(([key, contractDetail]) => (
          <article
            key={key}
            className="mt-10 p-2 lg:p-10 border bg-card text-card-foreground rounded-xl min-h-[420px]"
          >
            <h2 className="text-2xl lg:text-4xl lg:max-w-[38%] mt-6 lg:mt-0 mb-8 lg:mb-14">{contractDetail.title}</h2>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-10">
              <div className="flex-1">
                <div className="bg-background lg:max-w-[80%] rounded-xl p-2 lg:p-6">
                  <h4 className="mb-9 text-lg">{contractDetail.subtitle}</h4>
                  <div>
                    <span className="text-2xl">{contractDetail.price}</span>
                    <span className="ml-2 lg:ml-4 text-xs lg:text-sm">{contractDetail.priceTitle}</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <p className="mb-9 mt-6 lg:mt-0">{contractDetail.description}</p>
                <a href="#" className="block text-primary mb-5">
                  <span className="text-primary group">
                    <span className="relative inline-block ml-3">
                        <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] block bg-primary group-hover:bg-foreground transition rounded-full w-6 h-6"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-4 w-4 text-primary-foreground group-hover:card-foreground transition size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </span>
                    <span className="relative top-1 ml-6 group-hover:text-foreground transition">Discuter avec notre technicien</span>
                </span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};