import Link from "next/link";
import { ArrowRightIcon } from '@heroicons/react/24/solid'


interface CardContactProps {
    title?: string | undefined;
    description?: string | undefined;
    card: {
        title?: string | undefined;
        description?: string | undefined;
        link?: string | undefined;
    }
}

export const CardContact = ({cardContact}: CardContactProps) => {
  return (
    <section className="bg-card text-card-foreground px-10 m-10 rounded-xl">
      <div className="block mx-auto max-w-theme-wide px-52 py-16">
        <div className="grid grid-cols-[40%_auto] gap-48">
            <div className="flex justify-center flex-col">
                <h3 className="text-3xl font-medium">{cardContact.title}</h3>
                <p className="mt-6 text-lg">{cardContact.description}</p>
            </div>
            <div className="flex flex-col gap-y-20">
                {cardContact.card.map((card, index) => (
                    <div key={index} className="bg-background p-8 rounded-xl">
                        <h4 className="text-2xl font-medium">{card.title}</h4>
                        <p className="text-lg mt-2">{card.description}</p>
                        <Link href="" className="inline-block text-lg mt-6 text-primary">{card.link}</Link>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};