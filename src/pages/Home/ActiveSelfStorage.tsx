import React from "react";
import AdvertiseCard from "../../components/AdvertiseCard";
import Button from "../../components/Button";

export default function ActiveSelfStorage() {
  return (
    <div
      className="
        bg-[url('../assets/section_2_bg.jpg')]
        bg-cover
        x-5  pb-[88px]
        "
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center pt-[89px]">
          <h2 className="text-heading text-white mb-5">
            Active Listing Self Storages
          </h2>
          <p className="max-w-[769px] text-body text-white mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare
          </p>
        </div>
        <div className="mx-5 mt-[89px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
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
        </div>
        <Button className="mt-[80px] mx-auto block" variant="secondary">
          View More Listings
        </Button>
      </div>
    </div>
  );
}
