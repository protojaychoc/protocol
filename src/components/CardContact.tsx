import Link from "next/link";

interface CardContactProps {
  title?: string | undefined;
  description?: string | undefined;
  card: {
    title?: string | undefined;
    description?: string | undefined;
    link?: string | undefined;
  };
}

export const CardContact = ({ cardContact }: CardContactProps) => {
  return (
    <section className="bg-card text-card-foreground px-6 desktop:px-10 mt-52 desktop:mt-10 rounded-xl">
      <div className="block mx-auto max-w-theme-wide desktop:px-6 desktop:px-52 py-16">
        <div className="grid grid-cols-1 desktop:grid-cols-[40%_auto] gap-12 desktop:gap-48">
          <div className="flex justify-center flex-col text-center desktop:text-left">
            <h3 className="text-3xl font-medium">{cardContact.title}</h3>
            <p className="mt-6 text-lg">{cardContact.description}</p>
          </div>
          <div className="flex flex-col gap-y-4 desktop:gap-y-20">
            {cardContact.cards.map((card, index) => (
              <div key={index} className="bg-background p-8 rounded-xl">
                <h4 className="text-2xl font-medium">{card.title}</h4>
                <p className="text-lg mt-2">{card.description}</p>
                <Link
                  href=""
                  className="flex flex-center text-lg mt-6 text-primary"
                >
                  <span>{card.link}</span>
                  <svg
                    className="relative top-[2px] ml-2 size-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
