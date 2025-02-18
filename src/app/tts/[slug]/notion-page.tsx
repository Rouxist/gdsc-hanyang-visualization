"use client";
import * as React from "react";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";
import dynamic from "next/dynamic";

type Params = {
  recordMap: any;
};

export default function NotionPage({ recordMap }: Params) {
  const Code = dynamic(() =>
    import("react-notion-x/build/third-party/code").then((m) => m.Code)
  );
  const Equation = dynamic(() =>
    import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
  );
  const Pdf = dynamic(
    () => import("react-notion-x/build/third-party/pdf").then((m) => m.Pdf),
    {
      ssr: false,
    }
  );
  const Modal = dynamic(
    () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
    {
      ssr: false,
    }
  );

  return (
    <NotionRenderer
      disableHeader={true}
      recordMap={recordMap}
      darkMode={false}
      fullPage={true}
      components={{
        Code,
        Equation,
        Modal,
        Pdf,
      }}
    />
  );
}
