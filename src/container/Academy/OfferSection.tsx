"use client";

import React from "react";
import Offer from "@/src/components/Offer";
import { useRouter } from "next/navigation";
import Signal from "@/src/assets/images/signal-mobile.png";
import { RedirectUrls } from "@/src/const/Enum";

const OfferSection = () => {
  const router = useRouter();
  return (
    <Offer
      title="Join the"
      specialTitle="1st Forex Family"
      description="At 1st Forex Trading Academy, we are more than just an educational platform. We are a lifelong partner in your trading journey, committed to helping you succeed every step of the way."
      secondaryDescription="Whether you’re taking your first steps in trading or sharpening advanced strategies, we’re here to guide, support, and celebrate your achievements."
      descriptionWidth={663}
      subDescription="Sign up today and start your journey to financial freedom. Together, we’ll make your trading goals a reality."
      buttonText="Sign Up"
      imageUrl={Signal.src}
      onClick={() => router.push(RedirectUrls.REGISTER_URL)}
    />
  );
};

export default OfferSection;
