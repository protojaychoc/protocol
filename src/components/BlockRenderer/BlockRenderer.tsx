import { Banner } from "@/components/Banner";

interface Block {
  block?: Block[];
}

interface BlockRendererProps {
  blocks?: Block[];
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks }) => {
  return (
    <>
      {blocks?.map((block) => {
        const attributes = JSON.parse(block.attributesJSON);

        switch (block.name) {
          case "blocks-plugin/banner":
            return <Banner key={block.id} banner={attributes} />;
          default:
            return null;
        }
      })}
    </>
  );
};
