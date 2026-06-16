import type { Metadata } from "next";
import HistoricalPerformance from "@/src/container/HistoricalPerformance";

export const metadata: Metadata = {
  title: "Historical Performance | 1st Forex",
  description:
    "Review yearly and monthly historical trade performance from 2016 through May 2026.",
};

export default function HistoricalPerformancePage() {
  return <HistoricalPerformance />;
}
