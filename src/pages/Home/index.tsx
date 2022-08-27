import React from "react";
import AdvertiseCard from "../../components/AdvertiseCard";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AdvertiseCard image="https://images.unsplash.com/photo-1661435805196-81136edfa297?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
    </div>
  );
}