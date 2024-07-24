import { getSolutionChallenge } from "@/lib/api";
import { SolutionChallenge } from "@/interfaces/solution-challenge";
import SolutionChallengeCard from "./card";
import Header from "@/app/header";

export default function SolutionChallengeList() {
  const solutionChallengeData = getSolutionChallenge();

  return (
    <main>
      <header>
        <Header category={"solution-challenge"} />
      </header>
      <section>
        <div className="max-w-[1600px] h-[88vh] overflow-scroll mx-auto">
          <div className="w-[1600px] h-[850px] px-20 pt-8 grid grid-rows-2 grid-cols-5 gap-x-8 -gap-y-40 mx-auto">
            {solutionChallengeData.map(
              (data: SolutionChallenge, idx: number) => (
                <SolutionChallengeCard solutionChallengeData={data} key={idx} />
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
