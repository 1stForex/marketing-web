import type { Metadata } from "next";
import LegalDocument from "@/src/container/LegalDocument";
import { riskDisclaimerTerms } from "@/src/const/legalDocuments";

export const metadata: Metadata = {
  title: "Risk Disclaimer & Terms and Conditions | 1st Forex",
};

export default function RiskDisclaimerTermsPage() {
  return <LegalDocument document={riskDisclaimerTerms} />;
}
