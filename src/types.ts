interface Currency {
  code: string | null;
  name: string | null;
  symbol: string | null;
}

interface Language {
  iso639_1: string | null; // eslint-disable-line
  iso639_2: string | null; // eslint-disable-line
  name: string;
  nativeName: string;
}

interface Translations {
  de: string | null;
  es: string | null;
  fr: string | null;
  ja: string | null;
  it: string | null;
  br: string | null;
  pt: string | null;
  nl: string | null;
  hr: string | null;
  fa: string | null;
}

interface RegionalBlocs {
  acronym: string;
  name: string;
  otherAcronyms: string[];
  otherNames: string[];
}

interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number | null;
  gini: number | null;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string | null;
  currencies: Currency[];
  languages: Language[];
  translations: Translations;
  flag: string;
  regionalBlocs: RegionalBlocs[];
  cioc: string | null;
}

interface Answer {
  variant: string;
  text: string;
  correct: boolean;
}

interface Question {
  type: 'flag' | 'capital';
  name: string;
  text: string;
  asnwers: Answer[];
  flag: string;
}

type Questions = Question[];
type Answers = Answer[];
type Countries = Country[];

export type { Country, Countries, Question, Questions, Answer, Answers };
