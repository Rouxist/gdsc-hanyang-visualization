// import { NotionRenderer } from "react-notion-x";
// import { NotionAPI } from "notion-client";
// import "react-notion-x/src/styles.css";
// import "prismjs/themes/prism-tomorrow.css";
// import "katex/dist/katex.min.css";

// type Params = {
//   postId: string;
// };

// export default async function NotionPage({ postId }: Params) {
//   const notion = new NotionAPI();
//   const recordMap = await notion.getPage("5365c89962f547608eebd2076afc2a7b");
//   console.log(recordMap);

//   return (
//     <div>
//       <NotionRenderer
//         disableHeader
//         recordMap={recordMap}
//         fullPage={true}
//       ></NotionRenderer>
//     </div>
//   );
// }

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
  // const Collection = dynamic(() =>
  //   import("react-notion-x/build/third-party/collection").then(
  //     (m) => m.Collection
  //   )
  // );
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
        // Collection,
        Equation,
        Modal,
        Pdf,
      }}
    />
  );
}
