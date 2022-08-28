import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import AdvertiseCard from "../../components/AdvertiseCard";
import Button from "../../components/Button";
import HeroSection from "./HeroSection";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="max-w-screen-xl mx-auto px-5 mb-[98.97px]">
        <div className="text-center pt-[100px]">
          <h2 className="text-heading text-sapphire mb-5">
            Featured Self Storages
          </h2>
          <p className="max-w-[769px] text-body mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare
          </p>
        </div>
        <div className="mt-[60px]">
          <Slider dotsClass="slider_dots" arrows={false} {...settings}>
            {[1, 2, 3, 4, 5, 6].map((adv) => {
              return (
                <div key={adv}>
                  <AdvertiseCard
                    location="Jersy City, NJ"
                    occupancy={50}
                    unitCount={89}
                    size="40,233 Sq Ft"
                    image="https://images.unsplash.com/photo-1661435805196-81136edfa297?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <div
        className="
        bg-[url('../assets/section_2_bg.jpg')]
        bg-cover
        x-5  pb-[88px]
        "
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center pt-[100px]">
            <h2 className="text-heading text-white mb-5">
              Featured Self Storages
            </h2>
            <p className="max-w-[769px] text-body text-white mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tortor sapien sagittis maecenas tincidunt. Quis pretium ornare
            </p>
          </div>
          <div className="mt-[60px] flex flex-wrap gap-5 w-full">
            {[1, 2, 3, 4, 5, 6].map((adv) => {
              return (
                <div className="w-4/12" key={adv}>
                  <AdvertiseCard
                    location="Jersy City, NJ"
                    occupancy={50}
                    unitCount={89}
                    size="40,233 Sq Ft"
                    image="https://images.unsplash.com/photo-1661435805196-81136edfa297?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  />
                </div>
              );
            })}
          </div>
          <Button className="mt-[80px] mx-auto block" variant="secondary">
            View More Listings
          </Button>
        </div>
      </div>

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
