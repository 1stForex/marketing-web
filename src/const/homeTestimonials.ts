export type TestimonialLanguage = "English" | "Español";

export type HomeTestimonial = {
  name: string;
  quote: string;
  language: TestimonialLanguage;
  languageCode: "en" | "es";
  layout: {
    desktopColumn: string;
    desktopRow?: string;
  };
};

export const homeTestimonials: readonly HomeTestimonial[] = [
  {
    name: "Jermian Roman",
    language: "English",
    languageCode: "en",
    quote:
      "I’ve been using 1stForex since July 12, 2026 and over these first four weeks, I’ve been impressed with the overall directional accuracy of the signals. Trading them myself has also shown me that signal performance and actual net profit can be different once broker spread, commissions, swap, slippage, and execution are taken into consideration. Overall, my experience with 1stForex has been positive. I’m still exploring parts of the academy and other tools, but so far the Forex signals have been the strongest and most useful part of the service for me.",
    layout: {
      desktopColumn: "1 / span 7",
      desktopRow: "span 2",
    },
  },
  {
    name: "Yeiliz Mendoza",
    language: "Español",
    languageCode: "es",
    quote:
      "Para ser principiante en el mundo de Forex, resulta súper sencillo entender todo con la información y material que ofrece la academia. Aún no he hecho mis propios trades, pero sí veo a los demás usuarios disfrutando de sus ganancias. Ahora que tengo un mejor conocimiento, este mes comenzaré con una cuenta pequeña para ir ganando mientras sigo aprendiendo más de Forex.",
    layout: {
      desktopColumn: "8 / span 5",
    },
  },
  {
    name: "Aizer Gamalier",
    language: "English",
    languageCode: "en",
    quote:
      "I started with the Academy a week ago and It is going great! I started with $100 and already made 10% from my first trade. Funny how I purchased a CD from a bank and they will only give me $30 by the end of the year… This is awesome that I can learn while I make Money at the same time!",
    layout: {
      desktopColumn: "8 / span 5",
    },
  },
  {
    name: "Joel Rodriguez",
    language: "Español",
    languageCode: "es",
    quote:
      "Comencé mi primer mes solido! No pasé mucho trabajo y con las señales me da tiempo de acomodarme para hacer el trade mientras todo fluye me siento a estudiar en la academia y seguir aprendiendo todos los día.",
    layout: {
      desktopColumn: "1 / span 4",
    },
  },
  {
    name: "Darryl Shannon",
    language: "English",
    languageCode: "en",
    quote:
      "I've just completed my first month of trading with 1stForex, and the results have been incredible! Thanks to the trading Academy, I feel completely confident entering the market. Relying on the signals has taken all the stress out of the process and made trading genuinely enjoyable. Our results from my first month had 12 wins and only one loss... I can't wait to see what month two brings!",
    layout: {
      desktopColumn: "5 / span 8",
    },
  },
] as const;
