import React from "react";
import "slick-carousel/slick/slick.css";

import AdvertiseCard from "../../components/AdvertiseCard";
import Button from "../../components/Button";
import ActiveSelfStorage from "./ActiveSelfStorage";
import FeatureStorage from "./FeatureStorage";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureStorage />
      <ActiveSelfStorage />

      <div>
        <div>
          <h3>Do you have a Self Storage for Sale?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
            proin scelerisque nunc.
          </p>
          <Button>Sell Your Self Storage</Button>
        </div>
      </div>
    </div>
  );
}
