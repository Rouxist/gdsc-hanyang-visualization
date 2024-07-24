import { getSolutionChallenge } from "@/lib/api";
import { SolutionChallenge } from "@/interfaces/solution-challenge";
import SolutionChallengeCard from "./card";
import Header from "@/app/header";
import Link from "next/link";

export default function SolutionChallengeList() {
  const solutionChallengeData = getSolutionChallenge();

  return (
    <main>
      <header>
        <Header category={"solution-challenge"} />
      </header>
      <section>
        <div className="max-w-[1600px] h-[90vh] py-12 grid grid-rows-2 grid-cols-5 gap-y-8 px-20 mx-auto overflow-hidden">
          {solutionChallengeData.map((data: SolutionChallenge, idx: number) => (
            <SolutionChallengeCard solutionChallengeData={data} key={idx} />
          ))}
        </div>
      </section>
    </main>
  );
}
