import React from "react";
import Slider from "react-slick";
import AdvertiseCard from "../../components/AdvertiseCard";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  initialSlide: 0,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1185,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 795,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function FeatureStorage() {
  return (
    <div className="max-w-screen-xl mx-auto px-5 mb-[98.97px]">
      <div className="text-center pt-[100px]">
        <h2 className="text-heading text-sapphire mb-5 ">
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
                <div className="pr-5">
                  <AdvertiseCard
                    location="Jersy City, NJ"
                    occupancy={50}
                    unitCount={89}
                    size="40,233 Sq Ft"
                    image="https://images.unsplash.com/photo-1661435805196-81136edfa297?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
