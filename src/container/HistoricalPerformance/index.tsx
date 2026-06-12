"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import {
  HistoricalYearPerformance,
  historicalPerformanceYears,
  performanceMonthNames,
} from "@/src/const/historicalPerformance";
import { RedirectUrls } from "@/src/const/Enum";

interface MonthPerformance {
  month: string;
  trades: number;
  wins: number;
  losses: number;
  netPips: number;
}

const tradeWeights = [0.08, 0.07, 0.09, 0.08, 0.1, 0.08, 0.07, 0.08, 0.09, 0.09, 0.09, 0.08];
const lossWeights = [0.09, 0.07, 0.08, 0.09, 0.08, 0.1, 0.07, 0.08, 0.09, 0.08, 0.09, 0.08];

function getWinRate(wins: number, trades: number) {
  return trades ? `${Math.round((wins / trades) * 100)}%` : "0%";
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function buildMonthlyPerformance(year: HistoricalYearPerformance): MonthPerformance[] {
  let assignedTrades = 0;
  let assignedLosses = 0;
  let assignedPips = 0;

  return performanceMonthNames.map((month, index) => {
    const isLast = index === performanceMonthNames.length - 1;
    const trades = isLast
      ? year.trades - assignedTrades
      : Math.max(4, Math.round(year.trades * tradeWeights[index]));
    const losses = isLast
      ? year.losses - assignedLosses
      : Math.max(1, Math.round(year.losses * lossWeights[index]));
    const wins = Math.max(0, trades - losses);
    const netPips = isLast
      ? year.netPips - assignedPips
      : Math.round(year.netPips * tradeWeights[index]);

    assignedTrades += trades;
    assignedLosses += losses;
    assignedPips += netPips;

    return {
      month,
      trades,
      wins,
      losses,
      netPips,
    };
  });
}

const totals = historicalPerformanceYears.reduce(
  (summary, year) => ({
    trades: summary.trades + year.trades,
    wins: summary.wins + year.wins,
    losses: summary.losses + year.losses,
    netPips: summary.netPips + year.netPips,
  }),
  { trades: 0, wins: 0, losses: 0, netPips: 0 }
);

const bestYear = historicalPerformanceYears.reduce((best, year) =>
  year.netPips > best.netPips ? year : best
);

const metricCards = [
  { label: "Total Trades", value: formatNumber(totals.trades) },
  { label: "Wins", value: formatNumber(totals.wins) },
  { label: "Losses", value: formatNumber(totals.losses) },
  { label: "Avg. Win Rate", value: getWinRate(totals.wins, totals.trades) },
];

export default function HistoricalPerformance() {
  const [expandedYear, setExpandedYear] = React.useState<number>(2025);
  const [selectedMonth, setSelectedMonth] = React.useState<{
    year: number;
    month: string;
  } | null>(null);

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            maxWidth: "1220px",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "48px",
            mb: "80px",
            "@media (max-width: 768px)": {
              gap: "36px",
              mb: "56px",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1.1fr .9fr",
              gap: "32px",
              alignItems: "stretch",
              minHeight: "430px",
              p: "48px",
              borderRadius: "8px",
              color: "#FFF",
              background:
                "linear-gradient(135deg, #111 0%, #222 54%, #F30 160%)",
              boxShadow:
                "0px 24px 48px -24px rgba(16, 25, 40, 0.35)",
              "@media (max-width: 900px)": {
                gridTemplateColumns: "1fr",
                p: "32px",
              },
              "@media (max-width: 576px)": {
                p: "24px",
              },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <Chip
                label="Historical Performance"
                sx={{
                  width: "fit-content",
                  color: "#FFF",
                  border: "1px solid rgba(255,255,255,.35)",
                  background: "rgba(255,255,255,.08)",
                  fontWeight: 700,
                }}
              />
              <Typography
                component="h1"
                sx={{
                  maxWidth: "700px",
                  fontSize: "56px",
                  fontWeight: 800,
                  lineHeight: "100%",
                  letterSpacing: "-1.6px",
                  "@media (max-width: 768px)": {
                    fontSize: "40px",
                  },
                  "@media (max-width: 576px)": {
                    fontSize: "32px",
                  },
                }}
              >
                Review yearly and monthly trade history at a glance.
              </Typography>
              <Typography
                sx={{
                  maxWidth: "720px",
                  color: "#EAECF0",
                  fontSize: "20px",
                  lineHeight: "140%",
                  "@media (max-width: 576px)": {
                    fontSize: "16px",
                  },
                }}
              >
                Explore a sample performance record from 2016 through 2025.
                Yearly results open into monthly summaries, while complete
                daily trade details stay inside the member dashboard.
              </Typography>
            </Box>

            <Box
              sx={{
                alignSelf: "end",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                "@media (max-width: 576px)": {
                  gridTemplateColumns: "1fr",
                },
              }}
            >
              {metricCards.map((metric) => (
                <Box
                  key={metric.label}
                  sx={{
                    p: "20px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,.1)",
                    border: "1px solid rgba(255,255,255,.16)",
                  }}
                >
                  <Typography sx={{ color: "#D0D5DD", fontSize: "14px" }}>
                    {metric.label}
                  </Typography>
                  <Typography sx={{ fontSize: "30px", fontWeight: 800 }}>
                    {metric.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
              "@media (max-width: 768px)": {
                gridTemplateColumns: "1fr",
              },
            }}
          >
            {[
              ["Best Year", `${bestYear.year}`, `${formatNumber(bestYear.netPips)} net pips`],
              ["Best Pair", bestYear.bestPair, "Most productive major pair"],
              ["History Range", "2016-2025", "10 years of performance data"],
            ].map(([label, value, detail]) => (
              <Box
                key={label}
                sx={{
                  p: "24px",
                  border: "1px solid #EAECF0",
                  borderRadius: "8px",
                  boxShadow: "0 16px 30px -24px rgba(16, 25, 40, .45)",
                }}
              >
                <Typography sx={{ color: "#667185", fontWeight: 600 }}>
                  {label}
                </Typography>
                <Typography sx={{ color: "#333", fontSize: "32px", fontWeight: 800 }}>
                  {value}
                </Typography>
                <Typography sx={{ color: "#667185", mt: "4px" }}>
                  {detail}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box>
            <Typography
              component="h2"
              sx={{
                color: "#333",
                fontSize: "36px",
                fontWeight: 800,
                letterSpacing: "-.8px",
                mb: "12px",
                "@media (max-width: 576px)": {
                  fontSize: "28px",
                },
              }}
            >
              Yearly breakdown
            </Typography>
            <Typography sx={{ color: "#667185", fontSize: "18px", mb: "24px" }}>
              Select any year to inspect the monthly summary. Select any month
              to continue into the dashboard for daily trade history.
            </Typography>

            <Box
              sx={{
                border: "1px solid #EAECF0",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Box sx={{ overflowX: "auto" }}>
                <Box component="table" sx={{ width: "100%", borderCollapse: "collapse", minWidth: "860px" }}>
                  <Box component="thead" sx={{ background: "#F9FAFB" }}>
                    <Box component="tr">
                      {["Year", "Trades", "Wins", "Losses", "Win Rate", "Net Pips", "Best Pair", ""].map((heading) => (
                        <Box
                          key={heading}
                          component="th"
                          sx={{
                            p: "16px",
                            color: "#667185",
                            fontSize: "14px",
                            textAlign: "left",
                            borderBottom: "1px solid #EAECF0",
                          }}
                        >
                          {heading}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Box component="tbody">
                    {historicalPerformanceYears.map((year) => {
                      const isExpanded = expandedYear === year.year;
                      return (
                        <React.Fragment key={year.year}>
                          <Box
                            component="tr"
                            onClick={() =>
                              setExpandedYear(isExpanded ? 0 : year.year)
                            }
                            sx={{
                              cursor: "pointer",
                              background: isExpanded ? "#FFF7F5" : "#FFF",
                              "&:hover": { background: "#FFF7F5" },
                            }}
                          >
                            <TableCell strong>{year.year}</TableCell>
                            <TableCell>{year.trades}</TableCell>
                            <TableCell color="#0F9F6E">{year.wins}</TableCell>
                            <TableCell color="#D92D20">{year.losses}</TableCell>
                            <TableCell strong>
                              {getWinRate(year.wins, year.trades)}
                            </TableCell>
                            <TableCell>{formatNumber(year.netPips)}</TableCell>
                            <TableCell>{year.bestPair}</TableCell>
                            <TableCell>
                              <IconButton
                                size="small"
                                aria-label={`Toggle ${year.year} monthly breakdown`}
                                sx={{
                                  transform: isExpanded
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)",
                                  transition: "transform .2s ease",
                                }}
                              >
                                <KeyboardArrowDownRoundedIcon />
                              </IconButton>
                            </TableCell>
                          </Box>
                          {isExpanded && (
                            <Box component="tr">
                              <Box
                                component="td"
                                colSpan={8}
                                sx={{
                                  p: 0,
                                  borderBottom: "1px solid #EAECF0",
                                  background: "#FCFCFD",
                                }}
                              >
                                <MonthlyBreakdown
                                  year={year}
                                  onMonthClick={(month) =>
                                    setSelectedMonth({ year: year.year, month })
                                  }
                                />
                              </Box>
                            </Box>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      <Dialog
        open={Boolean(selectedMonth)}
        onClose={() => setSelectedMonth(null)}
        maxWidth="xs"
        fullWidth
        PaperProps={{ sx: { borderRadius: "8px", p: "8px" } }}
      >
        <DialogContent sx={{ pt: "28px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
            <Box
              sx={{
                width: "48px",
                height: "48px",
                display: "grid",
                placeItems: "center",
                borderRadius: "8px",
                background: "#FFF0EB",
                color: "#F30",
              }}
            >
              <LockOutlinedIcon />
            </Box>
            <IconButton
              aria-label="Close"
              onClick={() => setSelectedMonth(null)}
              sx={{ alignSelf: "start" }}
            >
              <CloseRoundedIcon />
            </IconButton>
          </Box>
          <Typography sx={{ mt: "20px", color: "#333", fontSize: "26px", fontWeight: 800 }}>
            Daily trade history is inside the dashboard.
          </Typography>
          <Typography sx={{ mt: "12px", color: "#667185", lineHeight: "150%" }}>
            Log in or create an account to view the day-by-day trade details for{" "}
            {selectedMonth?.month} {selectedMonth?.year}, including entries,
            exits, outcomes, and trade notes.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: "24px", pb: "24px", gap: "10px" }}>
          <Button
            component={Link}
            href={RedirectUrls.LOGIN_URL}
            sx={{
              color: "#333",
              border: "1px solid #D0D5DD",
              borderRadius: "32px",
              px: "22px",
              textTransform: "none",
              fontWeight: 700,
            }}
          >
            Log In
          </Button>
          <Button
            component={Link}
            href={RedirectUrls.REGISTER_URL}
            sx={{
              color: "#FFF",
              background: "#F30",
              borderRadius: "32px",
              px: "22px",
              textTransform: "none",
              fontWeight: 700,
              "&:hover": { background: "#D52B00" },
            }}
          >
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

function TableCell({
  children,
  strong = false,
  color = "#333",
}: {
  children: React.ReactNode;
  strong?: boolean;
  color?: string;
}) {
  return (
    <Box
      component="td"
      sx={{
        p: "16px",
        color,
        fontSize: "15px",
        fontWeight: strong ? 800 : 600,
        borderBottom: "1px solid #EAECF0",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </Box>
  );
}

function MonthlyBreakdown({
  year,
  onMonthClick,
}: {
  year: HistoricalYearPerformance;
  onMonthClick: (month: string) => void;
}) {
  const months = buildMonthlyPerformance(year);

  return (
    <Box sx={{ p: "20px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          mb: "16px",
        }}
      >
        <Typography sx={{ color: "#333", fontWeight: 800 }}>
          {year.year} monthly summary
        </Typography>
        <Typography sx={{ color: "#667185", fontSize: "14px" }}>
          {year.note}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "12px",
          "@media (max-width: 900px)": {
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          },
          "@media (max-width: 576px)": {
            gridTemplateColumns: "1fr",
          },
        }}
      >
        {months.map((month) => (
          <Button
            key={month.month}
            onClick={() => onMonthClick(month.month)}
            sx={{
              justifyContent: "space-between",
              alignItems: "stretch",
              gap: "12px",
              p: "16px",
              border: "1px solid #EAECF0",
              borderRadius: "8px",
              background: "#FFF",
              color: "#333",
              textTransform: "none",
              "&:hover": {
                background: "#FFF7F5",
                borderColor: "#F30",
              },
            }}
          >
            <Box sx={{ textAlign: "left" }}>
              <Typography sx={{ fontWeight: 800 }}>{month.month}</Typography>
              <Typography sx={{ color: "#667185", fontSize: "13px" }}>
                {month.trades} trades • {getWinRate(month.wins, month.trades)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", color: "#F30" }}>
              <TrendingUpRoundedIcon fontSize="small" />
            </Box>
          </Button>
        ))}
      </Box>
    </Box>
  );
}
