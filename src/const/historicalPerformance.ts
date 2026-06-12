export interface HistoricalYearPerformance {
  year: number;
  trades: number;
  wins: number;
  losses: number;
  netPips: number;
  bestPair: string;
  note: string;
}

export const historicalPerformanceYears: HistoricalYearPerformance[] = [
  {
    year: 2025,
    trades: 142,
    wins: 104,
    losses: 38,
    netPips: 2840,
    bestPair: "EUR/USD",
    note: "Consistent trend-following year with controlled risk.",
  },
  {
    year: 2024,
    trades: 156,
    wins: 115,
    losses: 41,
    netPips: 3195,
    bestPair: "GBP/USD",
    note: "Strong continuation setups across major pairs.",
  },
  {
    year: 2023,
    trades: 131,
    wins: 94,
    losses: 37,
    netPips: 2360,
    bestPair: "USD/CAD",
    note: "Lower volume, higher selectivity in volatile conditions.",
  },
  {
    year: 2022,
    trades: 168,
    wins: 121,
    losses: 47,
    netPips: 3420,
    bestPair: "EUR/USD",
    note: "High activity year with clear macro-driven movement.",
  },
  {
    year: 2021,
    trades: 149,
    wins: 108,
    losses: 41,
    netPips: 2715,
    bestPair: "AUD/USD",
    note: "Balanced signal flow with steady monthly performance.",
  },
  {
    year: 2020,
    trades: 173,
    wins: 123,
    losses: 50,
    netPips: 3310,
    bestPair: "GBP/USD",
    note: "More opportunities during broad market repricing.",
  },
  {
    year: 2019,
    trades: 126,
    wins: 88,
    losses: 38,
    netPips: 2035,
    bestPair: "EUR/USD",
    note: "Fewer trades, clean risk-to-reward execution.",
  },
  {
    year: 2018,
    trades: 118,
    wins: 82,
    losses: 36,
    netPips: 1840,
    bestPair: "USD/CHF",
    note: "Methodical year focused on high-probability setups.",
  },
  {
    year: 2017,
    trades: 112,
    wins: 77,
    losses: 35,
    netPips: 1625,
    bestPair: "EUR/USD",
    note: "Process refinement and tighter confirmation rules.",
  },
  {
    year: 2016,
    trades: 96,
    wins: 65,
    losses: 31,
    netPips: 1210,
    bestPair: "GBP/USD",
    note: "Baseline year for historical tracking and review.",
  },
];

export const performanceMonthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
