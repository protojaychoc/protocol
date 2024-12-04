import callCenter from '../../../../public/call-center.jpg'
import ticketingTool from '../../../../public/ticketing-tool.jpg'
import { data } from '../../../../data';
import {Hero} from '../../../components/Hero';
import {Banner} from '../../../components/Banner'
import {InterTitle} from '../../../components/InterTitle';
import {Contract} from '../../../components/Contract';


export default function SupportPage() {

  return (
    <>
      <Hero hero={data.pages.support.hero} img={callCenter} />
      <div className='px-3 lg:px-0'>
        <InterTitle interTitle={data.pages.support.interTitle} />
        <Contract contract={data.pages.support.contract} />
        <Banner banner={data.pages.home.banner} img={ticketingTool} />
      </div>
    </>
  );
}
