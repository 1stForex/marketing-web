import type { Metadata } from "next";
import LegalDocument from "@/src/container/LegalDocument";
import { acceptableUsePolicy } from "@/src/const/legalDocuments";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | 1st Forex",
};

export default function AcceptableUsePolicyPage() {
  return <LegalDocument document={acceptableUsePolicy} />;
}
