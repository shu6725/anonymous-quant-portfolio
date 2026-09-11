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

export const projectsJa: Project[] = [
  {
    slug: 'market-making-simulator',
    title: 'マーケットメイキング・シミュレーター',
    category: 'インタラクティブ・リサーチの基盤',
    summary: '在庫リスク、提示スプレッド、リザベーション・プライスの直感を検討するための、明快なリサーチ画面です。',
    status: 'プレースホルダーの構成です。モデルと操作系はまだ実装していません。',
    topics: ['在庫リスク', 'ビッド・アスク・スプレッド', 'リザベーション・プライス', 'PnLダイナミクス'],
    demoLabel: 'インタラクティブな操作項目をここに追加予定です',
    sections: [
      { title: '課題', body: '在庫、ボラティリティ、リスク許容度は、マーケットメイカーのクオートの直感をどう変えるか。' },
      { title: '方法論', body: '将来の実装では、プロプライエタリなロジックではなく、仮定を明示した教育的で透明なモデルを使います。' },
      { title: '実装', body: 'クライアントサイドの操作と可視化出力は、将来のMDXまたはAstro islandコンポーネントに委ねます。' },
      { title: '結果', body: 'この初期構成ではパフォーマンス結果を提示しません。' },
      { title: '限界', body: 'トイモデルは実際のマーケットメイク、約定ダイナミクス、手数料、リスク管理を表現するものではありません。' },
    ],
  },
  {
    slug: 'order-flow-analyzer',
    title: 'オーダーフロー・アナライザー',
    category: 'リサーチ / 可視化の基盤',
    summary: 'オーダーフロー不均衡、流動性、短期の価格変動を検討する将来のリサーチプロジェクトです。',
    status: 'プレースホルダーの構成です。合成データまたは公開データのみを使用します。',
    topics: ['オーダーフロー不均衡', 'リミットオーダーブック', '流動性', '執行'],
    demoLabel: 'オーダーフローの可視化を追加予定です',
    sections: [
      { title: '課題', body: '表示流動性と約定フローのどの変化が、短期の分析対象として有用か。' },
      { title: '方法論', body: '公開または合成の入力と実務経験を区別し、データの限界をすべて記述します。' },
      { title: '実装', body: 'リサーチ範囲が定まった時点で、チャート、データノート、再現可能な前処理をここに置きます。' },
      { title: '結果', body: 'このプレースホルダーでは実証的な主張を行いません。' },
      { title: '限界', body: 'オーダーブックデータはvenueごとに異なり、不完全で、サンプリング方法に敏感です。' },
    ],
  },
  {
    slug: 'volatility-lab',
    title: 'ボラティリティ・ラボ',
    category: 'インタラクティブ・リサーチの基盤',
    summary: 'オプション価格形成、インプライド・ボラティリティ、グリークス、スキュー、ペイオフの直感を扱う将来のラボです。',
    status: 'プレースホルダーの構成です。価格モデルは未選定・未実装です。',
    topics: ['オプション価格形成', 'インプライド・ボラティリティ', 'グリークス', 'ボラティリティ・スマイル'],
    demoLabel: 'ボラティリティ・サーフェスとペイオフチャートを追加予定です',
    sections: [
      { title: '課題', body: 'オプションの概念を、簡潔な視覚的リサーチ画面を通じてどう説明できるか。' },
      { title: '方法論', body: '将来のモデル仮定、慣行、数値的な限界はすべて明示します。' },
      { title: '実装', body: '教育目的のユースケースを選んだ後、小規模なクライアントサイド・コンポーネントを追加する可能性があります。' },
      { title: '結果', body: '市場データ、予測、投資判断は含めません。' },
      { title: '限界', body: '簡略化したオプションモデルは説明のためのものであり、すべての市場ダイナミクスを捉えません。' },
    ],
  },
];
