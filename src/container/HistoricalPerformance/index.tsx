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
import { useFormatter, useTranslations } from "next-intl";

function formatPercent(value: number) {
  return `${Number(value.toFixed(2)).toLocaleString("en-US")}%`;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function getMonthDisplayDate(monthKey: string) {
  const monthIndex = Number(monthKey.split("-")[1]) - 1;

  // Mid-month UTC prevents locale formatters from crossing a month boundary.
  return new Date(Date.UTC(2020, monthIndex, 15, 12));
}

const bestYear = historicalPerformanceYears.reduce((best, year) =>
  year.netPips > best.netPips ? year : best
);

const allowedHistoricalPairs = new Set([
  "GBP/USD",
  "USD/CHF",
  "EUR/USD",
  "AUD/USD",
  "USD/CAD",
]);

function formatPair(pair: string) {
  if (pair.includes("/")) return pair;

  return pair.length === 6 ? `${pair.slice(0, 3)}/${pair.slice(3)}` : pair;
}

function formatAllowedPair(pair: string) {
  const formattedPair = formatPair(pair);

  return allowedHistoricalPairs.has(formattedPair) ? formattedPair : "N/A";
}

interface PinnedHeaderState {
  visible: boolean;
  left: number;
  width: number;
  scrollLeft: number;
  tableWidth: number;
  columns: number[];
}

export default function HistoricalPerformance() {
  const t = useTranslations("HistoricalPerformance");
  const metricCards = [
    { label: t("metrics.trades"), value: formatNumber(historicalPerformanceTotals.trades) },
    { label: t("metrics.wins"), value: formatNumber(historicalPerformanceTotals.wins) },
    { label: t("metrics.losses"), value: formatNumber(historicalPerformanceTotals.losses) },
    { label: t("metrics.winRate"), value: formatPercent(historicalPerformanceTotals.winRate) },
  ];
  const tableHeadings = [t("columns.year"), t("columns.trades"), t("columns.wins"), t("columns.losses"), t("columns.winRate"), t("columns.netPips"), t("columns.bestPair"), ""];
  const mobileTableLabels = tableHeadings.slice(0, -1);
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
            badgeTitle={t("badge")}
            title={t("title")}
            description={t("description")}
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
                    background: "#F30",
                    border: "1px solid rgba(255,255,255,.34)",
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
              [t("summary.bestYear"), `${bestYear.year}`, t("netPips", { value: formatNumber(bestYear.netPips) })],
              [
                t("summary.bestPair"),
                formatAllowedPair(bestYear.bestPair),
                t("summary.bestPairDetail"),
              ],
              [
                t("summary.range"),
                historicalPerformanceRange.label,
                t("summary.rangeDetail", { count: historicalPerformanceYears.length }),
              ],
            ].map(([label, value, detail]) => (
              <Box
                key={label}
                sx={{
                  p: "24px",
                  border: "1px solid #F30",
                  borderRadius: "32px",
                  background: "#F30",
                  boxShadow: "0px 16px 32px -24px rgba(255, 51, 0, 0.7)",
                }}
              >
                <Typography sx={{ color: "rgba(255,255,255,.82)", fontWeight: 600 }}>
                  {label}
                </Typography>
                <Typography sx={{ color: "#FFF", fontSize: "32px", fontWeight: 800 }}>
                  {value}
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,.82)", mt: "4px" }}>
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
              {t("annualStart")} <span style={{ color: "#F30" }}>{t("annualHighlight")}</span>
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
              {t("annualDescription")}
            </Typography>

            <Box
              sx={{
                width: "100%",
                border: "1px solid #EAECF0",
                borderRadius: "32px",
                overflow: "visible",
                background: "#FFF",
                boxShadow: "0px 1.5px 4px -1px rgba(16, 25, 40, 0.07)",
                "@media (max-width: 700px)": {
                  border: "0",
                  borderRadius: 0,
                  background: "transparent",
                  boxShadow: "none",
                },
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
                  "@media (max-width: 700px)": {
                    overflowX: "visible",
                  },
                }}
              >
                <Box
                  component="table"
                  dir="ltr"
                  data-direction="ltr"
                  sx={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "860px",
                    "@media (max-width: 700px)": {
                      minWidth: 0,
                      display: "block",
                    },
                  }}
                >
                  <Box
                    component="thead"
                    sx={{
                      background: "#F9FAFB",
                      "@media (max-width: 700px)": {
                        display: "none",
                      },
                    }}
                  >
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
                  <Box
                    component="tbody"
                    sx={{
                      "@media (max-width: 700px)": {
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                      },
                    }}
                  >
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
                              "@media (max-width: 700px)": {
                                display: "grid",
                                gridTemplateColumns: "1fr",
                                gap: "10px",
                                p: "18px",
                                border: "1px solid #EAECF0",
                                borderRadius: "24px",
                                background: isExpanded ? "#FFF4EF" : "#FFF",
                                boxShadow: "0px 12px 26px -20px rgba(16, 25, 40, 0.32)",
                              },
                            }}
                          >
                            <TableCell label={mobileTableLabels[0]} strong>
                              {year.year}
                            </TableCell>
                            <TableCell label={mobileTableLabels[1]}>
                              {year.trades}
                            </TableCell>
                            <TableCell label={mobileTableLabels[2]} color="#0F9F6E">
                              {year.wins}
                            </TableCell>
                            <TableCell label={mobileTableLabels[3]} color="#D92D20">
                              {year.losses}
                            </TableCell>
                            <TableCell label={mobileTableLabels[4]} strong>
                              {formatPercent(year.winRate)}
                            </TableCell>
                            <TableCell label={mobileTableLabels[5]}>
                              {formatNumber(year.netPips)}
                            </TableCell>
                            <TableCell label={mobileTableLabels[6]}>
                              {formatAllowedPair(year.bestPair)}
                            </TableCell>
                            <TableCell isAction>
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
                                  "@media (max-width: 700px)": {
                                    display: "block",
                                    border: "1px solid #EAECF0",
                                    borderRadius: "24px",
                                    background: "#FCFCFD",
                                    overflow: "hidden",
                                    boxShadow: "0px 12px 26px -20px rgba(16, 25, 40, 0.26)",
                                  },
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
          dir="ltr"
          data-direction="ltr"
          style={{
            left: `${pinnedHeader.left}px`,
            width: `${pinnedHeader.width}px`,
          }}
          sx={{
            position: "fixed",
            top: 0,
            zIndex: 1200,
            overflow: "hidden",
            border: "1px solid #EAECF0",
            borderTop: 0,
            borderRadius: "0 0 20px 20px",
            background: "#F9FAFB",
            boxShadow: "0px 12px 26px -18px rgba(16, 25, 40, 0.45)",
            pointerEvents: "none",
            "@media (max-width: 700px)": {
              display: "none",
            },
          }}
        >
          <Box
            component="table"
            style={{
              transform: `translateX(-${pinnedHeader.scrollLeft}px)`,
            }}
            sx={{
              width: `${pinnedHeader.tableWidth}px`,
              borderCollapse: "collapse",
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
              aria-label={t("modal.close")}
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
            {t("modal.title")}
          </Typography>
          <Typography sx={{ mt: "12px", color: "#667185", lineHeight: "150%" }}>
            {t("modal.description", { month: selectedMonth?.month ?? "", year: selectedMonth?.year ?? "" })}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: "24px", pb: "24px", gap: "10px" }}>
          <Button
            component={Link}
            href={RedirectUrls.HISTORICAL_RESULTS_URL}
            sx={{
              color: "#333",
              border: "1px solid #D0D5DD",
              borderRadius: "32px",
              px: "22px",
              textTransform: "none",
              fontWeight: 700,
            }}
          >
            {t("modal.login")}
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
            {t("modal.signup")}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

function TableCell({
  children,
  label,
  strong = false,
  color = "#333",
  isAction = false,
}: {
  children: React.ReactNode;
  label?: string;
  strong?: boolean;
  color?: string;
  isAction?: boolean;
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
        "@media (max-width: 700px)": {
          display: "flex",
          alignItems: "center",
          justifyContent: isAction ? "center" : "space-between",
          gap: "14px",
          p: isAction ? "2px 0 0" : "0",
          borderBottom: isAction ? "0" : "1px solid #F0F2F5",
          minHeight: isAction ? "36px" : "30px",
          whiteSpace: "normal",
          textAlign: "right",
          fontSize: strong ? "16px" : "15px",
          "&:last-of-type": {
            borderBottom: 0,
          },
        },
      }}
    >
      {!isAction && (
        <Box
          component="span"
          sx={{
            display: "none",
            "@media (max-width: 700px)": {
              display: "inline-flex",
              flex: "0 0 auto",
              color: "#667185",
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            },
          }}
        >
          {label}
        </Box>
      )}
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
  const t = useTranslations("HistoricalPerformance");
  const format = useFormatter();
  return (
    <Box
      sx={{
        p: "24px",
        "@media (max-width: 700px)": {
          p: "18px",
        },
      }}
    >
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
          "@media (max-width: 700px)": {
            gap: "8px",
            mb: "14px",
          },
        }}
      >
        <Typography
          sx={{
            color: "#333",
            fontSize: "20px",
            fontWeight: 800,
            "@media (max-width: 700px)": {
              fontSize: "18px",
            },
          }}
        >
          {t("monthlySummary", { year: year.year })}
        </Typography>
        <Typography
          sx={{
            color: "#667185",
            fontSize: "14px",
            "@media (max-width: 700px)": {
              fontSize: "13px",
              lineHeight: "145%",
            },
          }}
        >
          {t("monthlyNote")}
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
            gap: "10px",
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
              "@media (max-width: 700px)": {
                minHeight: "86px",
                borderRadius: "20px",
                p: "14px",
              },
            }}
          >
            <Box
              dir="ltr"
              data-direction="ltr"
              sx={{ textAlign: "left" }}
            >
              <Typography sx={{ fontWeight: 800, lineHeight: "145%" }}>
                {format.dateTime(getMonthDisplayDate(month.monthKey), {
                  month: "long",
                })}
              </Typography>
              <Typography sx={{ color: "#667185", fontSize: "13px" }}>
                {t("tradeCount", { count: month.trades })} • {formatPercent(month.winRate)}
              </Typography>
              <Typography sx={{ color: "#98A2B3", fontSize: "12px", mt: "2px" }}>
                {t("netPips", { value: formatNumber(month.netPips) })}
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
