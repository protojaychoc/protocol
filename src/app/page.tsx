import homeDesktop from "../../public/home-desktop.png";
import allInclusive from "../../public/all-inclusive.jpg";
import bannerShowcaseImage from "../../public/bannerShowcase.jpg";
import { data } from "../../data";
import { InterTitle } from "../components/InterTitle";
import { HeroHome } from "../components/HeroHome";
import { Banner } from "../components/Banner";
import { BannerShowcase } from "../components/BannerShowcase";
import { TextShowcaseRow } from "../components/TextShowcaseRow";
import { TextShowcaseCol } from "../components/TextShowcaseCol";
import { FeatureShowcase } from "../components/FeatureShowcase";
import { CardContact } from "../components/CardContact";
import Head from "next/head";
import { getHomePage } from "@/lib/pagesRequest";
import { BlockRenderer } from "@/components/BlockRenderer/BlockRenderer";

export default async function Home() {
  const props = await getHomePage();

  return (
    <>
      {/* <Head>
        <title>Protocol</title>
      </Head> */}
      {/* <section>
        <BlockRenderer blocks={props} />
      </section> */}
      {/* <HeroHome hero={data.pages.support.hero} img={homeDesktop} /> */}
      <div className="px-3 lg:px-0">
        <BlockRenderer blocks={props} />
        {/* <InterTitle
          interTitle={data.pages.home.interTitle}
          hLvh={false}
          mt={true}
        /> */}
        {/* <BannerShowcase
          bannerShowcase={data.pages.home.bannerShowcase}
          img={bannerShowcaseImage}
        /> */}
        {/* <TextShowcaseRow textShowcaseRow={data.pages.home.textShowcaseRow} /> */}
        {/* <InterTitle
          interTitle={data.pages.home.featureShowcaseTitle}
          hLvh={false}
          mt={false}
        /> */}
        {/* <FeatureShowcase featureShowcase={data.pages.home.featureShowcase} /> */}
        {/* <InterTitle
          interTitle={data.pages.home.bannerTitle}
          hLvh={false}
          mt={true}
        /> */}
        {/* <Banner banner={data.pages.home.banner} img={allInclusive} /> */}
        {/* <TextShowcaseCol textShowcaseCol={data.pages.home.textShowcaseCol} /> */}
        {/* <CardContact cardContact={data.pages.home.cardContact} /> */}
      </div>
    </>
  );
}
