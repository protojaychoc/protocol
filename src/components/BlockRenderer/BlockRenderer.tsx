import { Banner } from "@/components/Banner";
import { InterTitle } from "@/components/InterTitle";
import { TextShowcaseRow } from "@/components/TextShowcaseRow";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { TextShowcaseCol } from "@/components/TextShowcaseCol";
import { BannerShowcase } from "@/components/BannerShowcase";
import { CardContact } from "@/components/CardContact";
import { Footer } from "@/components/Footer";

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
          case "blocks-plugin/intertitle":
            return <InterTitle key={block.id} interTitle={attributes} />;
          case "blocks-plugin/textshowcaserow":
            return (
              <TextShowcaseRow key={block.id} textShowcaseRow={attributes} />
            );
          case "blocks-plugin/featureshowcase":
            return (
              <FeatureShowcase key={block.id} featureShowcase={attributes} />
            );
          case "blocks-plugin/textshowcasecol":
            return (
              <TextShowcaseCol key={block.id} textShowcaseCol={attributes} />
            );
          case "blocks-plugin/bannershowcase":
            return (
              <BannerShowcase key={block.id} bannerShowcase={attributes} />
            );
          case "blocks-plugin/cardcontact":
            return <CardContact key={block.id} cardContact={attributes} />;
          case "blocks-plugin/footer":
            return <Footer key={block.id} footer={attributes} />;
          default:
            return null;
        }
      })}
    </>
  );
};
