"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Button,
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
  historicalPerformanceRange,
  historicalPerformanceTotals,
  historicalPerformanceYears,
} from "@/src/const/historicalPerformance";
import { RedirectUrls } from "@/src/const/Enum";
import Hero from "@/src/components/Hero";

function formatPercent(value: number) {
  return `${Number(value.toFixed(2)).toLocaleString("en-US")}%`;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

const bestYear = historicalPerformanceYears.reduce((best, year) =>
  year.netPips > best.netPips ? year : best
);

const metricCards = [
  { label: "Entered Trades", value: formatNumber(historicalPerformanceTotals.trades) },
  { label: "Wins", value: formatNumber(historicalPerformanceTotals.wins) },
  { label: "Losses", value: formatNumber(historicalPerformanceTotals.losses) },
  {
    label: "Avg. Win Rate",
    value: formatPercent(historicalPerformanceTotals.winRate),
  },
];

const tableHeadings = [
  "Year",
  "Trades",
  "Wins",
  "Losses",
  "Win Rate",
  "Net Pips",
  "Best Pair",
  "",
];

interface PinnedHeaderState {
  visible: boolean;
  left: number;
  width: number;
  scrollLeft: number;
  tableWidth: number;
  columns: number[];
}

export default function HistoricalPerformance() {
  const [expandedYear, setExpandedYear] = React.useState<number>(
    historicalPerformanceYears[0]?.year ?? 0
  );
  const [selectedMonth, setSelectedMonth] = React.useState<{
    year: number;
    month: string;
  } | null>(null);
  const tableViewportRef = React.useRef<HTMLDivElement | null>(null);
  const tableHeaderRowRef = React.useRef<HTMLTableRowElement | null>(null);
  const [pinnedHeader, setPinnedHeader] = React.useState<PinnedHeaderState>({
    visible: false,
    left: 0,
    width: 0,
    scrollLeft: 0,
    tableWidth: 0,
    columns: [],
  });

  React.useEffect(() => {
    const tableViewport = tableViewportRef.current;
    const tableHeaderRow = tableHeaderRowRef.current;

    if (!tableViewport || !tableHeaderRow) return;

    let animationFrame = 0;

    const updatePinnedHeader = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const viewportRect = tableViewport.getBoundingClientRect();
        const headerRect = tableHeaderRow.getBoundingClientRect();
        const columns = Array.from(tableHeaderRow.children).map(
          (cell) => cell.getBoundingClientRect().width
        );
        const visible =
          headerRect.top <= 0 && viewportRect.bottom > headerRect.height;

        setPinnedHeader((current) => {
          const next = {
            visible,
            left: viewportRect.left,
            width: viewportRect.width,
            scrollLeft: tableViewport.scrollLeft,
            tableWidth: tableViewport.scrollWidth,
            columns,
          };

          const sameColumns =
            current.columns.length === next.columns.length &&
            current.columns.every((width, index) => width === next.columns[index]);

          if (
            current.visible === next.visible &&
            current.left === next.left &&
            current.width === next.width &&
            current.scrollLeft === next.scrollLeft &&
            current.tableWidth === next.tableWidth &&
            sameColumns
          ) {
            return current;
          }

          return next;
        });
      });
    };

    updatePinnedHeader();
    window.addEventListener("scroll", updatePinnedHeader, { passive: true });
    window.addEventListener("resize", updatePinnedHeader);
    tableViewport.addEventListener("scroll", updatePinnedHeader, {
      passive: true,
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updatePinnedHeader);
      window.removeEventListener("resize", updatePinnedHeader);
      tableViewport.removeEventListener("scroll", updatePinnedHeader);
    };
  }, [expandedYear]);

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            maxWidth: "1220px",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "60px",
            mb: "80px",
            "@media (max-width: 768px)": {
              gap: "48px",
              mb: "56px",
            },
            "@media (max-width: 576px)": {
              gap: "40px",
            },
          }}
        >
          <Hero
            badgeTitle="Performance"
            title="Historical Trade Performance"
            description="Review historical performance from 2016 through May 2026. Yearly results open into monthly summaries, while complete daily trade history stays inside the member dashboard."
            bgImagePath="/HomeHeroBg.jpg"
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: "12px",
                maxWidth: "820px",
                width: "100%",
                mt: "8px",
                "@media (max-width: 900px)": {
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                },
                "@media (max-width: 576px)": {
                  gridTemplateColumns: "1fr",
                },
              }}
            >
              {metricCards.map((metric) => (
                <Box
                  key={metric.label}
                  sx={{
                    p: "18px",
                    borderRadius: "24px",
                    background: "rgba(255,255,255,.12)",
                    border: "1px solid rgba(255,255,255,.24)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#F0F2F5",
                      fontSize: "14px",
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    {metric.label}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontSize: "30px",
                      fontWeight: 800,
                      textAlign: "center",
                    }}
                  >
                    {metric.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Hero>

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
              [
                "Best Pair",
                bestYear.bestPair,
                "Most productive major pair",
              ],
              [
                "History Range",
                historicalPerformanceRange.label,
                `${historicalPerformanceYears.length} years of performance data`,
              ],
            ].map(([label, value, detail]) => (
              <Box
                key={label}
                sx={{
                  p: "24px",
                  border: "1px solid #EAECF0",
                  borderRadius: "32px",
                  background: "#FFF",
                  boxShadow: "0px 1.5px 4px -1px rgba(16, 25, 40, 0.07)",
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

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h2"
              sx={{
                color: "#333",
                fontSize: "48px",
                fontWeight: 700,
                lineHeight: "112%",
                letterSpacing: "0",
                mb: "12px",
                textAlign: "center",
                "@media (max-width: 768px)": {
                  fontSize: "40px",
                },
                "@media (max-width: 576px)": {
                  fontSize: "26px",
                },
              }}
            >
              Yearly <span style={{ color: "#F30" }}>breakdown</span>
            </Typography>
            <Typography
              sx={{
                color: "#667185",
                fontSize: "20px",
                lineHeight: "145%",
                mb: "24px",
                maxWidth: "780px",
                textAlign: "center",
                "@media (max-width: 576px)": {
                  fontSize: "16px",
                },
              }}
            >
              Select any year to inspect the monthly summary. Select any month
              to continue into the dashboard for daily trade history.
            </Typography>

            <Box
              sx={{
                width: "100%",
                border: "1px solid #EAECF0",
                borderRadius: "32px",
                overflow: "visible",
                background: "#FFF",
                boxShadow: "0px 1.5px 4px -1px rgba(16, 25, 40, 0.07)",
              }}
            >
              <Box
                ref={tableViewportRef}
                sx={{
                  overflowX: "visible",
                  WebkitOverflowScrolling: "touch",
                  "@media (max-width: 900px)": {
                    overflowX: "auto",
                  },
                }}
              >
                <Box component="table" sx={{ width: "100%", borderCollapse: "collapse", minWidth: "860px" }}>
                  <Box component="thead" sx={{ background: "#F9FAFB" }}>
                    <Box component="tr" ref={tableHeaderRowRef}>
                      {tableHeadings.map((heading) => (
                        <Box
                          key={heading}
                          component="th"
                          sx={{
                            p: "16px",
                            background: "#F9FAFB",
                            color: "#667185",
                            fontSize: "14px",
                            textAlign: "left",
                            borderBottom: "1px solid #EAECF0",
                            boxShadow: "0px 8px 14px -14px rgba(16, 25, 40, 0.45)",
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
                              background: isExpanded ? "#FFF4EF" : "#FFF",
                              "&:hover": { background: "#FFF7F5" },
                            }}
                          >
                            <TableCell strong>{year.year}</TableCell>
                            <TableCell>{year.trades}</TableCell>
                            <TableCell color="#0F9F6E">{year.wins}</TableCell>
                            <TableCell color="#D92D20">{year.losses}</TableCell>
                            <TableCell strong>
                              {formatPercent(year.winRate)}
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

      {pinnedHeader.visible && (
        <Box
          aria-hidden
          sx={{
            position: "fixed",
            top: 0,
            left: `${pinnedHeader.left}px`,
            width: `${pinnedHeader.width}px`,
            zIndex: 1200,
            overflow: "hidden",
            border: "1px solid #EAECF0",
            borderTop: 0,
            borderRadius: "0 0 20px 20px",
            background: "#F9FAFB",
            boxShadow: "0px 12px 26px -18px rgba(16, 25, 40, 0.45)",
            pointerEvents: "none",
          }}
        >
          <Box
            component="table"
            sx={{
              width: `${pinnedHeader.tableWidth}px`,
              borderCollapse: "collapse",
              transform: `translateX(-${pinnedHeader.scrollLeft}px)`,
            }}
          >
            <Box component="thead">
              <Box component="tr">
                {tableHeadings.map((heading, index) => (
                  <Box
                    key={heading || "actions"}
                    component="th"
                    sx={{
                      width: pinnedHeader.columns[index]
                        ? `${pinnedHeader.columns[index]}px`
                        : "auto",
                      p: "16px",
                      background: "#F9FAFB",
                      color: "#667185",
                      fontSize: "14px",
                      textAlign: "left",
                      borderBottom: "1px solid #EAECF0",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {heading}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      )}

      <Dialog
        open={Boolean(selectedMonth)}
        onClose={() => setSelectedMonth(null)}
        maxWidth="xs"
        fullWidth
        PaperProps={{ sx: { borderRadius: "32px", p: "8px" } }}
      >
        <DialogContent sx={{ pt: "28px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
            <Box
              sx={{
                width: "48px",
                height: "48px",
                display: "grid",
                placeItems: "center",
                borderRadius: "50%",
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
          <Typography
            sx={{
              mt: "20px",
              color: "#333",
              fontSize: "26px",
              fontWeight: 800,
              letterSpacing: "-0.52px",
            }}
          >
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
  return (
    <Box sx={{ p: "24px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          mb: "16px",
          "@media (max-width: 768px)": {
            alignItems: "flex-start",
            flexDirection: "column",
          },
        }}
      >
        <Typography sx={{ color: "#333", fontSize: "20px", fontWeight: 800 }}>
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
        {year.months.map((month) => (
          <Button
            key={month.monthKey}
            onClick={() => onMonthClick(month.month)}
            sx={{
              justifyContent: "space-between",
              alignItems: "stretch",
              gap: "12px",
              p: "16px",
              border: "1px solid #EAECF0",
              borderRadius: "24px",
              background: "#FFF",
              color: "#333",
              textTransform: "none",
              boxShadow: "0px 1.5px 4px -1px rgba(16, 25, 40, 0.07)",
              "&:hover": {
                background: "#FFF7F5",
                borderColor: "#F30",
              },
            }}
          >
            <Box sx={{ textAlign: "left" }}>
              <Typography sx={{ fontWeight: 800, lineHeight: "145%" }}>
                {month.month}
              </Typography>
              <Typography sx={{ color: "#667185", fontSize: "13px" }}>
                {month.trades} trades • {formatPercent(month.winRate)}
              </Typography>
              <Typography sx={{ color: "#98A2B3", fontSize: "12px", mt: "2px" }}>
                {formatNumber(month.netPips)} net pips
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
