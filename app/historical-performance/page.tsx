import type { Metadata } from "next";
import HistoricalPerformance from "@/src/container/HistoricalPerformance";

export const metadata: Metadata = {
  title: "Performance History | 1st Forex",
  description:
    "View yearly results broken down into monthly summaries, with complete daily trade history available in the member dashboard.",
};

export default function HistoricalPerformancePage() {
  return <HistoricalPerformance />;
}
