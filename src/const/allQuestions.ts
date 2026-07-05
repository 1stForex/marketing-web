import { FAQQuestionProps } from "@/src/types/FAQQuestion.interface";

export const allQuestions: FAQQuestionProps[] = [
  {
    question: "Where do I begin?",
    answer:
      "Start by creating your free account. Once your account is active, open the Getting Started section in your dashboard and choose one of the recommended broker partners.",
    points: [
      "Create both a demo account and a live trading account with your broker.",
      "Use the demo account to practice and get comfortable with the trading platform.",
      "Use the live account only when you are ready to trade with real funds.",
      "Complete the free education course, then start your signal subscription trial when you are ready.",
    ],
  },
  {
    question: "What is the difference between a demo account and a live account?",
    answer:
      "A demo account uses virtual funds, so you can practice in a simulated market environment without risking real money. A live account uses real funds deposited with your broker, so profits and losses directly affect your account balance.",
    subDescription:
      "We strongly recommend becoming comfortable with the platform and the signals on a demo account before trading with real funds.",
  },
  {
    question: "Where do I download MetaTrader 5 (MT5)?",
    answer:
      "MT5 can be downloaded directly from your broker's website, usually under a section called Downloads, Platforms, or Trading Platforms.",
    points: [
      "Account number or login ID",
      "Password",
      "Server name",
    ],
    subDescription:
      "Once MT5 is installed, log in with the account credentials provided by your broker. If you need help connecting your account, our support team can guide you.",
  },
  {
    question: "How do I know which broker is best for me?",
    answer:
      "The best broker depends on your country of residence, funding preferences, and trading needs. We list selected brokers that offer competitive spreads, reliable execution, and user-friendly platforms.",
    subDescription:
      "TMGM is commonly recommended because of its ease of use, funding options, and client feedback. Every broker listed on the platform has been selected because it meets our standards for quality and reliability.",
  },
  {
    question: "What if I am located in the United States?",
    answer:
      "Forex and CFD trading regulations in the United States differ from many other countries, and several international brokers do not accept U.S. residents.",
    subDescription:
      "For U.S.-based traders, brokers such as OANDA and Forex.com may be more suitable because they operate within U.S. regulatory requirements.",
  },
  {
    question: "Where can I find the broker links?",
    answer:
      "Recommended broker links are available in the Getting Started section of your dashboard.",
    points: [
      "Broker registration links",
      "Platform download information",
      "Broker-specific setup details",
      "Additional resources to help you get started",
    ],
  },
  {
    question: "What are trading signals?",
    answer:
      "Trading signals are trade ideas generated through proprietary analysis and market research.",
    points: [
      "Entry price",
      "Stop loss",
      "Take profit target",
      "Trade direction, such as buy or sell",
    ],
    subDescription:
      "Members can choose whether or not to take any signal. All trading decisions remain the responsibility of the individual trader.",
  },
  {
    question: "Are trading signals guaranteed to be profitable?",
    answer:
      "No. Financial markets involve risk, and no trading strategy or signal service can guarantee profits.",
    subDescription:
      "We aim to provide high-quality analysis and trade opportunities, but all trading carries the possibility of loss.",
  },
  {
    question: "How do I fund my trading account?",
    answer:
      "Funding options vary depending on the broker you choose. Most recommended brokers offer several deposit methods.",
    points: [
      "Bank wire transfer",
      "Credit or debit card",
      "Cryptocurrency, such as USDT, where available",
      "Local payment methods, depending on your country",
    ],
    subDescription:
      "To view the funding methods available to you, log in to your broker's client portal after opening your account. Available options differ by broker and region.",
  },
  {
    question: "How much money do I need to start?",
    answer:
      "The minimum deposit varies by broker. Many recommended brokers allow accounts to be opened with relatively small deposits.",
    subDescription:
      "We recommend starting with an amount you are comfortable risking and focusing on proper risk management rather than account size.",
  },
  {
    question: "Can I copy trades automatically?",
    answer:
      "No. When you receive a signal, you must manually enter the trade information into MT5, including the entry price, stop loss, and take profit.",
  },
  {
    question: "What markets do your signals cover?",
    answer:
      "Our signals primarily focus on major forex pairs. Market coverage may expand based on available opportunities and market conditions.",
  },
  {
    question: "What time are signals sent?",
    answer:
      "Signals are sent whenever qualifying opportunities are identified by the analysis team. There is no fixed schedule because market conditions determine when trades are taken.",
    subDescription:
      "Signals are available from market open on Sunday at 5 PM EST through Friday at 5 PM EST. Notifications are delivered through the platform and connected communication channels.",
  },
  {
    question: "Do I need prior trading experience?",
    answer:
      "No. The platform is designed for both beginners and experienced traders.",
    subDescription:
      "New traders can start with the education resources and demo accounts, while experienced traders can use the signals and market analysis right away.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can manage or cancel your subscription at any time through your account dashboard.",
    subDescription:
      "Access to premium services remains active until the end of your current billing period.",
  },
  {
    question: "Can I use my phone to trade?",
    answer:
      "Yes. MT5 is available for both iOS and Android devices. You can monitor trades, receive signals, and manage positions directly from your smartphone or tablet.",
  },
  {
    question: "Do you manage client funds?",
    answer:
      "No. 1stForex does not accept deposits or manage client funds.",
    subDescription:
      "All trading accounts are held directly with the broker you choose. You remain in full control of your account and trading decisions at all times.",
  },
];
