import React from "react";
import "slick-carousel/slick/slick.css";

import AdvertiseCard from "../../components/AdvertiseCard";
import Button from "../../components/Button";
import ActiveSelfStorage from "./ActiveSelfStorage";
import FeatureStorage from "./FeatureStorage";
import HeroSection from "./HeroSection";
import SellStorageCard from "./SellStorageCard";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureStorage />
      <ActiveSelfStorage />
      <SellStorageCard />
    </div>
  );
}
