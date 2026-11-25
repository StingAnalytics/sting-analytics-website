// Single source of truth for services, case studies and FAQs.
// Homepage summaries and detail pages both render from these arrays,
// so a copy change lands in exactly one place.
export type Service = {
  id: string;
  title: string;
  problem: string;
  analysis: string;
  decision: string;
  challenges: string[];
  questions: string[];
  deliverables: string;
  data: string;
  value: string;
};

export const services: Service[] = [
  {
    id: "sales-performance",
    title: "Sales Performance Analysis",
    problem: "Targets missed or revenue slipping without a clear driver.",
    analysis:
      "Trend, target and variance analysis by branch, product, customer and salesperson; decline diagnostics; mix, price and volume effects.",
    decision: "Where to focus sales effort, pricing and follow-up by branch and customer.",
    challenges: ["Missed targets", "Unexplained revenue dips", "Uneven branch, product or salesperson results"],
    questions: ["Which branches, products or customers drive the variance?", "Is the gap price, volume or mix?", "Where should sales effort focus next?"],
    deliverables: "Analytical report with branch / product / customer breakdowns; Excel analysis and optional Power BI view.",
    data: "Sales transactions with date, branch, product, customer, quantity, price and target figures where available.",
    value: "Focus limited sales effort where recovery is largest.",
  },
  {
    id: "profitability",
    title: "Profitability Analysis",
    problem: "Margins compress even when sales look healthy.",
    analysis:
      "Gross profit and margin decomposition across products and branches; price, cost, mix and volume effects; ranked improvement opportunities.",
    decision: "Which products, prices and volumes to protect, fix or exit.",
    challenges: ["Sales steady but margins falling", "Unclear product or branch profitability", "Ad-hoc discounting"],
    questions: ["What moved gross profit — price, cost, mix or volume?", "Which lines and branches earn or destroy margin?", "What should we fix first?"],
    deliverables: "Margin decomposition report with ranked profit-improvement opportunities; Excel model and optional Power BI pack.",
    data: "Sales with cost of goods, product costs, discounts and branch mapping.",
    value: "Protect pricing and prioritise the highest-impact margin fixes.",
  },
  {
    id: "financial-performance",
    title: "Financial Performance Analysis",
    problem: "Profit moves are hard to explain to management and the board.",
    analysis:
      "Revenue, cost, expense and profit trends; budget vs actual; concise management reviews with evidence-backed recommendations.",
    decision: "What to approve, cut, or invest in next quarter.",
    challenges: ["Hard-to-explain profit moves", "Budget vs actual gaps", "Long, unclear management packs"],
    questions: ["What drove revenue, cost and profit this period?", "How far off budget are we, and why?", "What should management approve next?"],
    deliverables: "Concise management performance review with evidence-backed recommendations; recurring pack available.",
    data: "Trial balance / P&L, budgets, prior periods and key expense schedules.",
    value: "Shorter meetings, clearer decisions, tracked follow-through.",
  },
  {
    id: "receivables",
    title: "Receivables & Cash Conversion",
    problem: "Cash is stuck in overdue customer balances.",
    analysis:
      "Ageing, overdue concentration, Days Sales Outstanding, collection effectiveness and recovery prioritisation.",
    decision: "Who to collect from first and where working-capital risk sits.",
    challenges: ["Growing overdue balances", "High Days Sales Outstanding", "Unclear collection priorities"],
    questions: ["Who owes what, for how long, and who pays late repeatedly?", "What is DSO and collection effectiveness?", "Which accounts unlock cash fastest?"],
    deliverables: "Ageing and DSO report with prioritised collection list and working-capital risks; Excel tracker and optional Power BI view.",
    data: "Receivables ledger with invoice, due date, customer, balance and receipts.",
    value: "Collect the right accounts first and reduce cash risk.",
  },
  {
    id: "reporting-automation",
    title: "Reporting Automation & BI",
    problem: "Reporting is slow, manual and hard to trust.",
    analysis:
      "Excel automation, SQL extraction, Power BI management packs, and Python cleaning and validation workflows.",
    decision: "A repeatable reporting routine management can rely on each month.",
    challenges: ["Slow manual Excel reporting", "Untrusted or inconsistent figures", "No single management view"],
    questions: ["Can this report run the same way every month?", "Is the data validated and traceable?", "Can management self-serve the key views?"],
    deliverables: "Automated Excel reporting, SQL extracts, Power BI management reports, Python cleaning and validation workflows — scoped per engagement.",
    data: "Source exports (accounting / sales system), current Excel packs and report definitions.",
    value: "Faster, trusted reporting with less manual work.",
  },
];

export type CaseStudy = {
  id: string;
  title: string;
  repoUrl: string;
  stat: string;
  homeStat: string;
  summary: string;
  question: string;
  findings: string[];
  approach: string[];
  actions: string[];
  limits: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "revenue-decline",
    title: "Revenue Decline Diagnostic",
    repoUrl: "https://github.com/BIAnalyst-Patrick/revenue-decline-diagnostic",
    stat: "Simulated revenue decline of 10.7%",
    homeStat: "-10.7% simulated revenue",
    summary:
      "Two of six stores account for 71% of the decline. Four contributing causes ranked so recovery starts where it matters most.",
    question: "Revenue fell 10.7% — which branches and causes explain it, and where should recovery start?",
    findings: [
      "Two of six stores account for 71% of the total decline.",
      "Four contributing causes identified and ranked by impact.",
      "Remaining stores broadly held performance, ruling out a uniform market drop.",
    ],
    approach: [
      "Branch-level variance decomposition against prior period.",
      "Cause testing: volume, price/mix and outlet-level effects checked against evidence.",
      "Prioritisation by quantified contribution to the decline.",
    ],
    actions: [
      "Start recovery in the two largest-drag stores.",
      "Assign owners per ranked cause with tracked measures.",
      "Re-run the diagnostic monthly until variance closes.",
    ],
    limits:
      "Simulated transactions; no seasonality, returns or external market controls modelled. Real engagements validate source data first.",
  },
  {
    id: "management-pack",
    title: "Monthly Management Performance Pack",
    repoUrl: "https://github.com/BIAnalyst-Patrick/monthly-management-pack",
    stat: "Simulated sales within 1% of budget · gross profit 19% behind",
    homeStat: "Sales within 1% of budget; gross profit 19% behind",
    summary:
      "Why sales alone misleads: price, cost, mix and volume across 120 product lines reveal the real margin story.",
    question: "Sales hit budget — so why is gross profit 19% behind, and what should management do?",
    findings: [
      "Sales performance alone masked the margin gap.",
      "Price, cost, product mix and volume examined across 120 product lines.",
      "Mix shift toward lower-margin lines plus cost pressure drove most of the shortfall.",
    ],
    approach: [
      "Budget-vs-actual decomposition by price, cost, mix and volume.",
      "Line-level margin ranking across all 120 products.",
      "Narrative pack linking each variance to a management action.",
    ],
    actions: [
      "Reprice or re-mix priority lines.",
      "Address cost lines with largest adverse variance.",
      "Track margin recovery by line each month, not sales alone.",
    ],
    limits:
      "Simulated budget and cost inputs; illustrative pack layout. Real packs depend on validated cost allocation.",
  },
  {
    id: "receivables",
    title: "Receivables Ageing & Cash Conversion",
    repoUrl: "https://github.com/BIAnalyst-Patrick/receivables-ageing-cash-conversion",
    stat: "Simulated KSh 16.8M receivables · 64% past due",
    homeStat: "KSh 16.8M simulated receivables; 64% past due",
    summary:
      "Three accounts hold 47% of the balance. A modelled scenario prioritises KSh 6.73M of potential recovery.",
    question: "Cash is tight — which receivables should we chase first to release cash fastest?",
    findings: [
      "KSh 16.8M outstanding; 64% past due.",
      "Three accounts hold 47% of the balance — high concentration risk.",
      "A modelled recovery scenario prioritises KSh 6.73M as potential recovery; this amount was not collected — it is a prioritisation estimate.",
    ],
    approach: [
      "Ageing buckets, overdue concentration and Days Sales Outstanding.",
      "Collection-effectiveness scoring by account age and balance.",
      "Prioritised recovery queue with working-capital risk flags.",
    ],
    actions: [
      "Contact the three concentration accounts first with agreed plans.",
      "Tighten terms or security on repeat late payers.",
      "Weekly ageing review until DSO stabilises.",
    ],
    limits:
      "Simulated ledger; no payments behaviour history or legal constraints modelled. Recovery depends on customer response and is never guaranteed.",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How much does an engagement cost?",
    a: "Every engagement is scoped first in a free initial discussion. Fixed prices are agreed after scoping, once we know your data, questions and deliverables — no prices are published until our pricing approach is finalised.",
  },
  {
    q: "What data do you need from us?",
    a: "It depends on the question: sales transactions, cost of goods, trial balance and budgets, or the receivables ledger. We confirm the exact extracts on a scoping call and validate the data before any analysis begins.",
  },
  {
    q: "How long does the analysis take?",
    a: "A focused diagnostic typically takes one to three weeks after the data is validated. Recurring monthly performance packs are agreed per engagement.",
  },
  {
    q: "Which tools do you use — and do we need licences?",
    a: "Excel, SQL, Power BI and Python are our working methods, not products we sell you. You receive reports, models and views you can use with the tools you already have.",
  },
  {
    q: "Are the case studies real client work?",
    a: "No. The figures on this site are illustrative analytical results from simulated data, clearly labelled as such. Actual client work will only appear here with written approval.",
  },
];
