import { Footer } from "@/components/Footer";

interface Block {
  block?: Block[];
}

interface BlockFooterRendererProps {
  blocks?: Block[];
}

export const BlockFooterRenderer: React.FC<BlockFooterRendererProps> = ({
  blocks,
}) => {
  return (
    <>
      {blocks?.map((block) => {
        const attributes = JSON.parse(block.attributesJSON);
        console.log(attributes);
        switch (block.name) {
          case "blocks-plugin/footer":
            return <Footer key={block.id} footer={attributes} />;
          default:
            return null;
        }
      })}
    </>
  );
};
