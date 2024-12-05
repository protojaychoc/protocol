interface InterTitleProps {
    interTitle: {
      title: string;
      subtitle?: string;
      highlight?: string;
    };
    hLvh?: boolean;
    mt?: boolean;
  }
  

export const InterTitle = ({ interTitle, hLvh, mt }: InterTitleProps) => {
    
    const highlight = interTitle.highlight || "";
    const interTitleParts = interTitle?.title.split(highlight);

    return (
        <section className={`block mx-auto max-w-theme-wide desktop:px-52 ${mt ? "lg:mt-96 mt-24" : "lg:mt-72 mt-24"}`}>
            <div className={`flex flex-col ${hLvh ? 'h-lvh' : ""} items-center justify-center`}>
                <div className="text-left lg:text-center max-w-[900px] m-auto block">
                    <h2 className="text-3xl desktop:text-5xl font-medium">{interTitleParts[0]} <span className="text-primary">{highlight}</span> {interTitleParts[1]}</h2>
                    { interTitle.subtitle && <h3 className="text-md lg:text-2xl mt-5 my-10">{interTitle.subtitle}</h3> }
                </div>
            </div>
        </section>
    );
};