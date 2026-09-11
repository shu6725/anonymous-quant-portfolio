import { internalPath } from './utils/paths';

export const locales = ['en', 'ja'] as const;
export type Locale = (typeof locales)[number];

export const ui = {
  en: {
    navigation: [
      { path: '', label: 'Home' },
      { path: 'about/', label: 'About' },
      { path: 'research/', label: 'Research' },
      { path: 'projects/', label: 'Projects' },
      { path: 'contact/', label: 'Contact' },
    ],
    primaryNavigation: 'Primary navigation',
    homeLabel: 'Quantitative Trader home',
    skipToContent: 'Skip to content',
    allResearch: 'All research',
    onThisPage: 'On this page',
    independentResearch: 'Independent research note',
    articleTags: 'Article tags',
    projectTopics: 'Project topics',
    readNote: 'Read note',
    viewProject: 'View project',
    footerPortfolio: 'Independent research and professional portfolio. Views expressed here are personal and do not represent any current or former employer.',
    footerDisclaimer: 'Content is provided for research and educational purposes and does not constitute investment advice.',
  },
  ja: {
    navigation: [
      { path: '', label: 'ホーム' },
      { path: 'about/', label: '概要' },
      { path: 'research/', label: 'リサーチ' },
      { path: 'projects/', label: 'プロジェクト' },
      { path: 'contact/', label: '連絡先' },
    ],
    primaryNavigation: '主要ナビゲーション',
    homeLabel: 'Quantitative Trader ホーム',
    skipToContent: '本文へ移動',
    allResearch: 'リサーチ一覧',
    onThisPage: '目次',
    independentResearch: '独立リサーチノート',
    articleTags: '記事タグ',
    projectTopics: 'プロジェクトのトピック',
    readNote: '記事を読む',
    viewProject: 'プロジェクトを見る',
    footerPortfolio: '独立したリサーチとプロフェッショナル・ポートフォリオ。ここに示す見解は個人のものであり、現在または過去の雇用主を代表するものではありません。',
    footerDisclaimer: '掲載内容はリサーチおよび教育目的のものであり、投資助言ではありません。',
  },
} as const;

export function localizedPath(locale: Locale, path = '') {
  const cleanPath = path.replace(/^\//, '');
  return internalPath(locale === 'ja' ? 'jp/' + cleanPath : cleanPath);
}
