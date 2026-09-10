export type ProjectSection = {
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  status: string;
  topics: string[];
  demoLabel: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: 'market-making-simulator',
    title: 'Market Making Simulator',
    category: 'Interactive research scaffold',
    summary: 'A clean research surface for exploring inventory risk, quoted spread and reservation-price intuition.',
    status: 'Placeholder architecture — model and controls intentionally not implemented yet.',
    topics: ['Inventory risk', 'Bid / ask spread', 'Reservation price', 'PnL dynamics'],
    demoLabel: 'Interactive controls will be added here',
    sections: [
      { title: 'Problem', body: 'How do inventory, volatility and risk tolerance change a market maker’s quoting intuition?' },
      { title: 'Methodology', body: 'The eventual implementation will use a transparent, educational model with clearly labelled assumptions rather than proprietary logic.' },
      { title: 'Implementation', body: 'Client-side controls and visual outputs are reserved for a future MDX or Astro island component.' },
      { title: 'Results', body: 'No performance results are presented in this initial scaffold.' },
      { title: 'Limitations', body: 'Toy models do not represent real-world market making, fill dynamics, fees or risk controls.' },
    ],
  },
  {
    slug: 'order-flow-analyzer',
    title: 'Order Flow Analyzer',
    category: 'Research / visualization scaffold',
    summary: 'A future research project for examining order-flow imbalance, liquidity and short-horizon price movement.',
    status: 'Placeholder architecture — use synthetic or public data only.',
    topics: ['Order-flow imbalance', 'Limit order book', 'Liquidity', 'Execution'],
    demoLabel: 'Order-flow visualization reserved',
    sections: [
      { title: 'Problem', body: 'Which observable changes in displayed liquidity and traded flow are useful to investigate over short horizons?' },
      { title: 'Methodology', body: 'The project will distinguish public or synthetic inputs from any professional experience and document all data limitations.' },
      { title: 'Implementation', body: 'Charts, data notes and reproducible preprocessing will live here when the research scope is defined.' },
      { title: 'Results', body: 'No empirical claims are made in this placeholder.' },
      { title: 'Limitations', body: 'Order-book data can be venue-specific, incomplete and sensitive to sampling choices.' },
    ],
  },
  {
    slug: 'volatility-lab',
    title: 'Volatility Lab',
    category: 'Interactive research scaffold',
    summary: 'A future lab for option-pricing intuition, implied volatility, Greeks, skews and payoff visualization.',
    status: 'Placeholder architecture — no pricing model has been selected or implemented.',
    topics: ['Option pricing', 'Implied volatility', 'Greeks', 'Volatility smile'],
    demoLabel: 'Volatility surface and payoff chart reserved',
    sections: [
      { title: 'Problem', body: 'How can option concepts be explained through a compact visual research interface?' },
      { title: 'Methodology', body: 'Any future model assumptions, conventions and numerical limitations will be made explicit.' },
      { title: 'Implementation', body: 'A small client-side component may be added once an educational use case is selected.' },
      { title: 'Results', body: 'No market data, forecasts or investment conclusions are included.' },
      { title: 'Limitations', body: 'Simplified option models are illustrations and do not capture all market dynamics.' },
    ],
  },
];
