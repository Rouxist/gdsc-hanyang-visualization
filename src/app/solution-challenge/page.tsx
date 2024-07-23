import { getSolutionChallenge } from "@/lib/api";
import { SolutionChallenge } from "@/interfaces/solution-challenge";
import SolutionChallengeCard from "./card";
import Header from "@/app/header";
import Link from "next/link";

type Params = {
  params: {
    slug: string;
  };
};

export default function SolutionChallengeList({ params }: Params) {
  const solutionChallengeData = getSolutionChallenge();

  //   const gridElementCSS = () => {
  //     if (ttsData.category == "CS/DTS") {
  //       return "py-[9px] -mb-3 text-lg";
  //     } else {
  //       return "py-[10px] text-lg";
  //     }
  //   };

  return (
    <main>
      <header>
        <Header category={"solution-challenge"} />
      </header>
      <section>
        <div className="max-w-[1600px] h-[90vh] py-12 grid grid-rows-2 grid-cols-5 px-20 mx-auto overflow-hidden">
          {solutionChallengeData.map((data: SolutionChallenge) =>
            SolutionChallengeCard(data)
          )}
        </div>
      </section>
    </main>
  );
}
