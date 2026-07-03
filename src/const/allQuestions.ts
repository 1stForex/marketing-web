export const allQuestions = [
  {
    question: "What is a Limit Order?",
    answer:
      "A limit order is an order with restrictions on the maximum price to be paid or the minimum price to be received. For example, if the current price of USD/JPY is 117.00/05, a limit order to buy USD would be set at a price below 117.00 (e.g., 116.50).",
  },
  {
    question: "What is a Stop Loss Order?",
    answer:
      "A stop loss order is a type of order where an open position is automatically liquidated at a specified price. It is often used to minimize exposure to losses if the market moves against the investor's position. For example, if an investor is long on USD at 156.27, they might place a stop loss order at 155.49 to limit losses should the dollar depreciate below this level.",
  },
  {
    question: "What is a Position Order?",
    answer:
      "Position orders are directly tied to individual positions and remain active only as long as the position is open. These orders can include stop loss or limit orders to manage risk and secure profits.",
  },
  {
    question: "What is Foreign Exchange?",
    answer:
      'The Foreign Exchange market, commonly referred to as the "Forex" market, is the largest financial market in the world, with a daily average turnover exceeding US$7.5 trillion as of recent estimates. Forex involves the simultaneous buying of one currency and selling of another. Currencies are traded in pairs, such as EUR/USD or USD/JPY.',
  },
  {
    question: "Where is the Central Location of the FX Market?",
    answer:
      'The FX market is decentralized and operates as an Over-the-Counter (OTC) or "Interbank" market. Transactions occur directly between two parties over the phone or via electronic networks, rather than on a centralized exchange like the stock market.',
  },
  {
    question: "Who are the Participants in the FX Market?",
    answer:
      "Initially dominated by central banks, commercial banks, and investment banks, the Forex market now includes a wide range of participants such as:",
    points: [
      "Large multinational corporations.",
      "Global money managers.",
      "Registered dealers.",
      "International money brokers.",
      "Futures and options traders.",
      "Private speculators.",
    ],
  },
  {
    question: "How Do I Manage Risk?",
    answer: "The most common risk management tools in Forex trading are:",
    points: [
      "Limit Orders: Restrict the maximum price to be paid or the minimum price to be received.",
      "Stop Loss Orders: Automatically liquidate a position at a predetermined price to limit potential losses if the market moves against you.",
    ],
    subDescription:
      "The high liquidity of the Forex market ensures the ease of executing these orders.",
  },
  {
    question: "What Kind of Trading Strategy Should I Use?",
    answer:
      "At 1st Forex, we recommend using our proprietary and copyrighted Breakout System, which has been designed to identify profitable opportunities in trending markets. This system combines:",
    points: [
      "Advanced technical indicators.",
      "Key breakout patterns.",
      "Proven risk management techniques.",
    ],
    extra: {
      description: "Additionally, traders may complement this system with:",
      points: [
        "Technical Analysis: Studying charts, trend lines, support/resistance levels, and mathematical indicators.",
        "Fundamental Analysis: Interpreting economic indicators, news, and events.",
      ],
    },
    subDescription:
      "The most significant market movements often occur due to unexpected events, but preparation and strategy are key to success.",
  },
  {
    question: "What are the Trading Hours for the Forex Market?",
    answer:
      "The Forex market operates 24 hours a day, five days a week. Major trading sessions include:",
    points: [
      "Sydney: 10 PM – 7 AM GMT.",
      "Tokyo: 12 AM – 9 AM GMT.",
      "London: 8 AM – 5 PM GMT.",
      "New York: 1 PM – 10 PM GMT.",
    ],
  },
  {
    question: "What is Leverage in Forex Trading?",
    answer:
      "Leverage allows traders to control a larger position with a smaller amount of capital. For example, a 100:1 leverage ratio means that $1,000 in margin can control a $100,000 position. While leverage amplifies potential profits, it also increases potential losses.",
  },
  {
    question: "What are Pips in Forex Trading?",
    answer:
      "A pip is the smallest price movement in a currency pair. For most pairs, one pip equals 0.0001. For example, if EUR/USD moves from 1.1050 to 1.1051, it has increased by one pip.",
  },
  {
    question: "How Much Money Do I Need to Start Trading Forex?",
    answer:
      "The capital required to start trading Forex depends on your broker and trading goals. Some brokers allow accounts to start with as little as $100. However, 1st Forex recommends starting with sufficient capital to manage risk effectively.",
  },
  {
    question: "What Fees or Costs Are Associated with Forex Trading?",
    answer: "Common costs include:",
    points: [
      "Spreads: The difference between the bid and ask price.",
      "Commissions: Charged by some brokers per trade.",
      "Rollover Fees: Charged for holding positions overnight.",
    ],
  },
  {
    question: "Is Forex Trading Risky?",
    answer:
      "Forex trading involves significant risk. While the market's high liquidity allows for rapid execution of trades, improper use of leverage or lack of strategy can lead to losses. Risk management tools, such as stop loss orders and our Breakout System, help mitigate these risks.",
  },
  {
    question: "What Platforms or Tools Are Used for Forex Trading?",
    answer:
      "Popular platforms include MetaTrader 4 (MT4) and MetaTrader 5 (MT5). These platforms provide advanced charting tools, order management, and access to a range of financial instruments. 1st Forex also offers a proprietary trading signal service backed by historical performance and structured market review.",
  },
  {
    question: "How Do I Choose a Forex Broker?",
    answer: "When selecting a broker, consider:",
    points: [
      "Regulation by trusted authorities (e.g., FCA, ASIC, CFTC).",
      "Transparent fee structures.",
      "Reliable customer support.",
      "Robust trading platforms.",
    ],
  },
  {
    question: "What is Margin in Forex Trading?",
    answer:
      "Margin is the amount of money required to open a leveraged position. For example, a 1% margin requirement means you need $1,000 to control a $100,000 position. Be cautious, an insufficient margin can lead to a margin call, where positions are liquidated to cover losses.",
  },
  {
    question: "What is Slippage, and How Does It Affect Trades?",
    answer:
      "Slippage occurs when an order is executed at a price different from the expected price due to market volatility. To minimize slippage, trade during high-liquidity hours and use limit orders instead of market orders.",
  },
  {
    question: "Are There Trading Tools for Forex Traders?",
    answer:
      "Yes. Traders commonly use charting tools, alerts, calculators, and signal services to support their workflow. 1st Forex focuses on actionable signals, education, and risk-aware trade planning.",
  },
  {
    question: "Can I Lose More Money Than I Invest?",
    answer:
      "While uncommon with most brokers, trading on margin can lead to losses exceeding the initial investment. Always use risk management tools and trade responsibly.",
  },
  {
    question: "How Often Are Trades Made?",
    answer:
      "Market conditions dictate trading activity on any given day. On average, a small to medium trader might execute up to 10 trades per day.",
  },
  {
    question: "How Long Are Positions Maintained?",
    answer:
      "Approximately 80% of all Forex trades last seven days or less, while more than 40% last fewer than two days. As a general rule, a position is kept open until one of the following occurs:",
    ordered: true,
    points: [
      "Realization of sufficient profits from a position.",
      "The specified stop-loss is triggered.",
      "Another position with better potential appears and requires these funds.",
    ],
  },
  {
    question: "What Are Forex Signals?",
    answer:
      "Forex signals are recommendations or alerts provided to traders, indicating potential trading opportunities in the market. These signals are based on technical analysis, market trends, and trade planning rules. At 1st Forex, our signal service gives traders clear entry, stop loss, and take profit levels.",
  },
  {
    question: "How Does the 1st Forex Signal System Work?",
    answer:
      "Our signal process reviews market structure, breakout conditions, historical behavior, and risk levels. It is designed for both novice and experienced traders who want a clearer, more disciplined way to follow opportunities.",
  },
  {
    question: "Do Signals Place Trades Automatically?",
    answer:
      "No. Signals are informational trade alerts. Users remain responsible for reviewing each setup and deciding whether to place, manage, or skip a trade.",
  },
  {
    question: "What Are the Benefits of Using Trading Signals?",
    answer: "Trading signals can support a trader by providing:",
    points: [
      "Clear entry, stop loss, and take profit levels.",
      "A more structured way to review opportunities.",
      "Time savings when monitoring multiple markets.",
      "A consistent framework for reviewing trade history.",
    ],
  },
  {
    question: "Can I Customize How I Use Signals?",
    answer:
      "Yes. You can choose how signals fit your personal risk tolerance, trading schedule, and account management rules. You should always apply your own judgment before placing a trade.",
  },
  {
    question: "Are Forex Signals Suitable for Beginners?",
    answer:
      "Yes, when used responsibly. Signals can give beginners a clearer framework, but they should be paired with education, risk management, and practice.",
  },
  {
    question: "Do I Need a License to Trade Forex?",
    answer:
      "Retail forex trading does not require a license, but trading as a professional or managing funds for others may have legal and regulatory requirements.",
  },
  {
    question: "What Happens If My Broker Goes Out of Business?",
    answer:
      "Reputable brokers are typically regulated and segregate client funds from company assets. This ensures that client funds are protected even if the broker faces financial issues.",
  },
  {
    question: "How Do Forex Brokers Make Money?",
    answer:
      "Forex brokers typically make money through spreads, commissions, or a combination of both. Some brokers also earn through swap fees on overnight positions or by acting as market makers.",
  },
  {
    question: "What Is the Difference Between Demo and Live Trading Accounts?",
    answer:
      "A demo account allows traders to practice using virtual money, simulating real market conditions without financial risk. A live account involves actual trading with real money and real market risks.",
  },
];
