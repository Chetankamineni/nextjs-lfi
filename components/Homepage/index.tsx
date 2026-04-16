import HeroSection from './Landing/page';
import Smartrouter from './smartRouter/page';
import TelkomAbout from './about/telkomabout';
import SmartRouterFeatures from './smartRouter/features';


export default function HomeParent() {
  return (
    <>
      <HeroSection />
      <Smartrouter />
      <TelkomAbout />
      <SmartRouterFeatures />
    </>
  );
}