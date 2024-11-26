import Image from 'next/image'
import Link from 'next/link';
import callCenter from '../../../../public/call-center.jpg'
import ticketingTool from '../../../../public/ticketing-tool.jpg'
import { data } from '../../../../data';
import {Hero} from '../../../components/Hero';
import {Banner} from '../../../components/Banner'
import {InterTitle} from '../../../components/InterTitle';
import {Contract} from '../../../components/Contract';


export default function Page() {

  return (
    <main>
      <Hero hero={data.pages.support.hero} img={callCenter} />
      <InterTitle interTitle={data.pages.support.interTitle} />
      <Contract contract={data.pages.support.contract} />
      <Banner banner={data.pages.home.banner} img={ticketingTool} />
    </main>
  );
}
