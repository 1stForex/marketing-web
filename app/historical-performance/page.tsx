import type { Metadata } from "next";
import HistoricalPerformance from "@/src/container/HistoricalPerformance";

export const metadata: Metadata = {
  title: "Historical Performance | 1st Forex",
  description:
    "Review yearly and monthly sample trade performance history from 2016 through 2025.",
};

export default function HistoricalPerformancePage() {
  return <HistoricalPerformance />;
}
