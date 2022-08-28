import ActiveSelfStorage from "./ActiveSelfStorage";
import BlogSection from "./BlogSection";
import BuyStorageCard from "./BuyStorageCard";
import FeatureStorage from "./FeatureStorage";
import HeroSection from "./HeroSection";
import ReachOutSection from "./ReachOutSection";
import SellStorageCard from "./SellStorageCard";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureStorage />
      <ActiveSelfStorage />
      <SellStorageCard />
      <BuyStorageCard />
      <BlogSection />
      <ReachOutSection />
    </div>
  );
}
