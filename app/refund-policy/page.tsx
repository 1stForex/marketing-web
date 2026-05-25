import type { Metadata } from "next";
import LegalDocument from "@/src/container/LegalDocument";
import { refundPolicy } from "@/src/const/legalDocuments";

export const metadata: Metadata = {
  title: "Refund Policy | 1st Forex",
};

export default function RefundPolicyPage() {
  return <LegalDocument document={refundPolicy} />;
}
