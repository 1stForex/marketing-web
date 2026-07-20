"use client";

import React from "react";
import Offer from "@/src/components/Offer";
import { useRouter } from "next/navigation";
import Signal from "@/src/assets/images/signal-mobile.png";
import { RedirectUrls } from "@/src/const/Enum";
import { useTranslations } from "next-intl";

const OfferSection = () => {
  const t = useTranslations("Academy");
  const router = useRouter();
  return (
    <Offer
      title={t("offer.title")}
      specialTitle={t("offer.specialTitle")}
      description={t("offer.description")}
      secondaryDescription={t("offer.secondaryDescription")}
      descriptionWidth={663}
      subDescription={t("offer.subDescription")}
      buttonText={t("signup")}
      imageUrl={Signal.src}
      onClick={() => router.push(RedirectUrls.REGISTER_URL)}
    />
  );
};

export default OfferSection;
