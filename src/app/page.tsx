'use client'
import homeDesktop from '../../public/home-desktop.png';
import allInclusive from '../../public/all-inclusive.jpg';
import { data } from '../../data';
import {InterTitle} from '../components/InterTitle';
import {Hero} from '../components/Hero';
import {Banner} from '../components/Banner'
import {BannerShowcase} from '../components/BannerShowcase';
import bannerShowcaseImage from '../../public/bannerShowcase.jpg';
import {TextShowcaseRow} from '../components/TextShowcaseRow';
import {TextShowcaseCol} from '../components/TextShowcaseCol';
import { FeatureShowcase } from '../components/FeatureShowcase';
import {CardContact} from '../components/CardContact';

export default function Home() {


  return (
    <main className='px-6 pt-[var(--header-height)]'>
      <Hero hero={data.pages.home.hero} img={homeDesktop} />      
      <InterTitle interTitle={data.pages.home.interTitle} hLvh={false} mt={true} />
      <BannerShowcase bannerShowcase={data.pages.home.bannerShowcase} img={bannerShowcaseImage} />
      <TextShowcaseRow textShowcaseRow={data.pages.home.textShowcaseRow} />
      <InterTitle interTitle={data.pages.home.featureShowcaseTitle} hLvh={false} mt={false} />
      <FeatureShowcase featureShowcase={data.pages.home.featureShowcase} />
      <InterTitle interTitle={data.pages.home.bannerTitle} hLvh={false} mt={true} />
      <Banner banner={data.pages.home.banner} img={allInclusive} />
      <TextShowcaseCol textShowcaseCol={data.pages.home.textShowcaseCol} />
      <CardContact cardContact={data.pages.home.cardContact} />
    </main>
  );
}
