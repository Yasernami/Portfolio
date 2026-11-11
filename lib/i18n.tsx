"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";

export type Lang = "fa" | "en";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  isFa: boolean;
};

const LangContext = createContext<LangContextValue | null>(null);

const TITLES: Record<Lang, string> = {
  fa: "یاسر نامی | طراح رابط کاربری، گرافیک و موشن",
  en: "Yaser Nami | UI/UX, Graphic & Motion Designer",
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fa");

  const apply = useCallback((next: Lang) => {
    const isFa = next === "fa";
    document.documentElement.lang = isFa ? "fa" : "en";
    document.documentElement.dir = isFa ? "rtl" : "ltr";
    document.title = TITLES[next];
    try {
      localStorage.setItem("yn-lang", next);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("yn-lang");
    } catch {
      /* ignore */
    }
    const initial: Lang = saved === "en" ? "en" : "fa";
    setLangState(initial);
    apply(initial);
  }, [apply]);

  const setLang = useCallback(
    (next: Lang) => {
      setLangState(next);
      apply(next);
    },
    [apply],
  );

  const toggle = useCallback(() => {
    setLang(lang === "fa" ? "en" : "fa");
  }, [lang, setLang]);

  const value = useMemo(
    () => ({ lang, setLang, toggle, isFa: lang === "fa" }),
    [lang, setLang, toggle],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

type TProps = HTMLAttributes<HTMLElement> & {
  fa: string;
  en: string;
  as?: ElementType;
  html?: boolean;
};

export function T({ fa, en, as: Tag = "span", html = false, ...props }: TProps) {
  const { lang } = useLang();
  const text = lang === "fa" ? fa : en;
  if (html) {
    return <Tag {...props} dangerouslySetInnerHTML={{ __html: text }} />;
  }
  return <Tag {...props}>{text}</Tag>;
}
