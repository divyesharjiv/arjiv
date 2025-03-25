import Banner from "Components/Banner";
import RJCBanner from "Components/RJCBanner";
import OurDiamondCuts from "Components/OurDiamondCuts";
import LayoutAndMatchPair from "Components/LayoutAndMatchPair";
import Quote from "Components/Quote";
import Customization from "Components/Customization";
import OriginAlliance from "Components/OriginAlliances";
import Appbanner from "Components/Appbanner";
import LiveShows from "Pages/LiveShows";

const Home = () => {
  return (
    <>
      <Banner />
      <RJCBanner />
      <OurDiamondCuts />
      <LayoutAndMatchPair />
      <Quote />
      <Customization />
      <OriginAlliance />
      <LiveShows />
      <Appbanner />
    </>
  );
};

export default Home;
