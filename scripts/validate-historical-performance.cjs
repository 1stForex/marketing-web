const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

const sourcePath = path.join(
  __dirname,
  "..",
  "src",
  "const",
  "historicalPerformance.ts"
);
const source = fs.readFileSync(sourcePath, "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2020,
  },
}).outputText;
const moduleRef = { exports: {} };

vm.runInNewContext(compiled, {
  module: moduleRef,
  exports: moduleRef.exports,
  require,
});

const {
  historicalPerformanceRange,
  historicalPerformanceTotals,
  historicalPerformanceYears,
} = moduleRef.exports;

const aggregateFields = [
  "signals",
  "trades",
  "wins",
  "losses",
  "breakeven",
  "notEntered",
  "netPips",
  "profitUsd",
];

const assertClose = (actual, expected, label) => {
  if (Math.abs(Number(actual) - Number(expected)) > 0.01) {
    throw new Error(`${label}: expected ${expected}, received ${actual}`);
  }
};

for (const year of historicalPerformanceYears) {
  for (const month of year.months) {
    const monthIndex = Number(month.monthKey.split("-")[1]) - 1;
    const expectedMonthName = new Intl.DateTimeFormat("en-US", {
      month: "long",
      timeZone: "UTC",
    }).format(new Date(Date.UTC(2020, monthIndex, 15, 12)));

    if (month.month !== expectedMonthName) {
      throw new Error(
        `${month.monthKey}: expected ${expectedMonthName}, received ${month.month}`
      );
    }
  }

  for (const field of aggregateFields) {
    const monthTotal = year.months.reduce(
      (sum, month) => sum + Number(month[field] || 0),
      0
    );
    assertClose(year[field], monthTotal, `${year.year}.${field}`);
  }

  const expectedWinRate = year.trades
    ? Number(((year.wins / year.trades) * 100).toFixed(2))
    : 0;
  assertClose(year.winRate, expectedWinRate, `${year.year}.winRate`);
}

for (const field of aggregateFields) {
  const yearTotal = historicalPerformanceYears.reduce(
    (sum, year) => sum + Number(year[field] || 0),
    0
  );
  assertClose(historicalPerformanceTotals[field], yearTotal, `totals.${field}`);
}

const expectedTotalWinRate = historicalPerformanceTotals.trades
  ? Number(
      (
        (historicalPerformanceTotals.wins /
          historicalPerformanceTotals.trades) *
        100
      ).toFixed(2)
    )
  : 0;
assertClose(
  historicalPerformanceTotals.winRate,
  expectedTotalWinRate,
  "totals.winRate"
);

if (historicalPerformanceRange.endMonth !== "2026-07") {
  throw new Error("Historical range must end at 2026-07.");
}

const july = historicalPerformanceYears
  .find((year) => year.year === 2026)
  ?.months.find((month) => month.monthKey === "2026-07");

if (!july || july.trades !== 13 || july.netPips !== 681) {
  throw new Error("Verified July 2026 performance is missing or incorrect.");
}

console.log("Historical performance aggregates are valid through July 2026.");
