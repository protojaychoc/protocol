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
      <div className="block mx-auto max-w-theme-wide px-52">
        {Object.entries(contract).map(([key, contractDetail]) => (
          <article
            key={key}
            className="mt-10 p-10 border bg-card text-card-foreground rounded-xl min-h-[420px]"
          >
            <h2 className="text-4xl max-w-[38%] mb-14">{contractDetail.title}</h2>
            <div className="flex gap-10">
              <div className="flex-1">
                <div className="bg-background max-w-[80%] rounded-xl p-6">
                  <h4 className="mb-9 text-lg">{contractDetail.subtitle}</h4>
                  <div>
                    <span className="text-2xl">{contractDetail.price}</span>
                    <span className="ml-4 text-sm">{contractDetail.priceTitle}</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <p className="mb-9">{contractDetail.description}</p>
                <a href="#" className="text-primary"></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};