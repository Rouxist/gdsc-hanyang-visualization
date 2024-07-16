import { getTtsBySlug, getTtsArrayOfSameCategory } from "@/lib/api";
import Header from "@/app/header";
import Link from "next/link";
import RightBlock from "./right-block";

type Params = {
  params: {
    slug: string;
  };
};

type TitleAndSlug = {
  title: string;
  slug: string;
};

export default function TTS({ params }: Params) {
  const ttsData = getTtsBySlug(params.slug);
  const ttsTitleAndSlugArray = getTtsArrayOfSameCategory(ttsData.category);
  const ttsTitleArray = ttsTitleAndSlugArray.map(
    (data: TitleAndSlug) => data.title
  );

  const textHoverCSS = (idx: number) => {
    if (ttsTitleArray.indexOf(ttsData.title) == idx) {
      if (ttsData.category == "Front") {
        return "text-red";
      } else if (ttsData.category == "Back") {
        return "text-green";
      } else if (ttsData.category == "CS/DTS") {
        return "text-yellow";
      } else if (ttsData.category == "ML/DL") {
        return "text-blue";
      }
    } else {
      if (ttsData.category == "Front") {
        return "hover:text-red transition duration-150";
      } else if (ttsData.category == "Back") {
        return "hover:text-green transition duration-150";
      } else if (ttsData.category == "CS/DTS") {
        return "hover:text-yellow transition duration-150";
      } else if (ttsData.category == "ML/DL") {
        return "hover:text-blue transition duration-150";
      }
    }
  };

  const borderCSS = () => {
    if (ttsData.category == "Front") {
      return "h-[70px] px-[50px] border-b border-red";
    } else if (ttsData.category == "Back") {
      return "h-[70px] px-[50px] border-b border-green";
    } else if (ttsData.category == "CS/DTS") {
      return "h-[70px] px-[50px] border-b border-yellow";
    } else if (ttsData.category == "ML/DL") {
      return "h-[70px] px-[50px] border-b border-blue";
    }
  };

  const gridCSS = () => {
    if (ttsData.category == "CS/DTS") {
      return "grid grid-cols-3 grid-rows-8 grid-flow-col";
    } else {
      return "grid grid-cols-2 grid-rows-6 grid-flow-col";
    }
  };

  const gridElementCSS = () => {
    if (ttsData.category == "CS/DTS") {
      return "py-[8px] -mb-3 text-lg";
    } else {
      return "py-[8px] text-lg";
    }
  };

  return (
    <main>
      <header>
        <Header category={ttsData.category} />
      </header>
      <section>
        <div className="max-w-[1600px] mx-auto">
          <div className="flex pt-[30px] pb-[25px]">
            <div className="flex flex-col h-[840px] flex-auto items-center">
              <iframe
                className="w-[854px] h-[480px]"
                src={ttsData.src}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <div className="flex-auto">
                <div className={borderCSS()}>
                  <table className="w-[100%] h-[70px]">
                    <tbody>
                      <tr>
                        <td className="h-[70px] text-2xl font-bold text-left">
                          {ttsData.title}
                        </td>
                        <td className="h-[70px] text-xl text-right">
                          {ttsData.speaker}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="w-[854px] h-[290px] px-[15px] overflow-scroll scrollbar-hide">
                  <div className={gridCSS()}>
                    {ttsTitleAndSlugArray.map(
                      (data: TitleAndSlug, idx: number) => (
                        <Link
                          className={gridElementCSS()}
                          key={idx}
                          href={"/tts/" + data.slug}
                        >
                          <span className={textHoverCSS(idx)}>
                            {idx + 1}. {data.title}
                          </span>
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-[20px] xl:block hidden w-[726px] h-[840px] overflow-scroll border-l border-gray">
              <RightBlock postId={ttsData.postId} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
