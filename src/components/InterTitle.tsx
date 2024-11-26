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
        <section className={`block mx-auto max-w-theme-wide px-52 ${mt ? "mt-96" : "mt-32"}`}>
            <div className={`flex flex-col ${hLvh ? 'h-lvh' : ""} items-center justify-center`}>
                <div className="text-center max-w-[900px] m-auto block">
                    <h2 className="text-5xl font-medium">{interTitleParts[0]} <span className="text-primary">{highlight}</span> {interTitleParts[1]}</h2>
                    { interTitle.subtitle && <h3 className="text-2xl my-10">{interTitle.subtitle}</h3> }
                </div>
            </div>
        </section>
    );
};