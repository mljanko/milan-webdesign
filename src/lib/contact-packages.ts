export const PACKAGE_BUDGET_OPTIONS = {
  starter: {
    packageLabel: "Starter Website",
    budget: "ab CHF 1'200 (Starter)",
  },
  business: {
    packageLabel: "Business Website",
    budget: "ab CHF 2'500 (Business)",
  },
  premium: {
    packageLabel: "Premium Website",
    budget: "ab CHF 4'500 (Premium)",
  },
} as const;

export type PackageParam = keyof typeof PACKAGE_BUDGET_OPTIONS;

export const INDIVIDUAL_PACKAGE_LABEL = "Individuelle Anfrage";
export const DEFAULT_BUDGET_OPTION = "Noch nicht sicher";
export const OPEN_BUDGET_OPTION = "Noch offen";

export const PACKAGE_BUDGET_OPTION_LIST = Object.entries(
  PACKAGE_BUDGET_OPTIONS
).map(([key, option]) => ({
  key: key as PackageParam,
  ...option,
}));

export const PACKAGE_SELECT_OPTIONS = [
  ...PACKAGE_BUDGET_OPTION_LIST.map((option) => option.packageLabel),
  INDIVIDUAL_PACKAGE_LABEL,
];

export const BUDGET_SELECT_OPTIONS = [
  DEFAULT_BUDGET_OPTION,
  OPEN_BUDGET_OPTION,
  ...PACKAGE_BUDGET_OPTION_LIST.map((option) => option.budget),
];

export function getPackageOptionByParam(param?: string) {
  if (!param) {
    return null;
  }

  if (!Object.prototype.hasOwnProperty.call(PACKAGE_BUDGET_OPTIONS, param)) {
    return null;
  }

  return PACKAGE_BUDGET_OPTIONS[param as PackageParam] ?? null;
}

export function getPackageOptionByLabel(label: string) {
  return (
    PACKAGE_BUDGET_OPTION_LIST.find(
      (option) => option.packageLabel === label
    ) ?? null
  );
}

export function getPackageContactHref(param: PackageParam) {
  return `/kontakt?paket=${param}`;
}
