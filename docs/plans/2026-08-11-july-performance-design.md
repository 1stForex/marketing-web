# July 2026 Historical Performance

## Source of truth

July 2026 is derived from the live `Signal` lifecycle records. Closed signals
count as trades, cancelled signals that were never entered count as not entered,
and only closed win/loss/breakeven rows contribute to the win rate and points.

## Marketing data

Add July to the 2026 monthly list and extend the displayed range through July
2026. Recalculate the 2026 and all-time aggregates by adding the verified July
values to the existing calibrated dataset. Existing historical years remain
unchanged.

## Dashboard data

Synchronize the same lifecycle rows into the backend historical month, day, and
pair-result models. Recompute the stored 2026 and dataset totals from their
child periods so the dashboard overview, month list, day list, and trade detail
views remain consistent.

## Verified July values

- Signals: 17
- Entered trades: 13
- Wins: 12
- Losses: 1
- Breakeven: 0
- Not entered: 4
- Net points: 681
- Win rate: 92.31%

## Verification

Validate that yearly values equal their month sums and all-time values equal
their year sums. Test the backend command idempotently, then check the live
marketing page at desktop and mobile widths.
