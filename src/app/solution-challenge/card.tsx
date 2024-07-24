import Link from "next/link";
import Image from "next/image";
import { SolutionChallenge } from "@/interfaces/solution-challenge";
import SolutionChallengeBackCard from "./back-card";

type Params = {
  solutionChallengeData: SolutionChallenge;
};

export default function SolutionChallengeCard({
  solutionChallengeData,
}: Params) {
  const cardCss = () => {
    if (solutionChallengeData.color == "red") {
      return "w-[260px] h-[380px] rounded-xl shadow-[inset_0_-1px_4px_rgba(0,0,0,0.6)] bg-red -z-10 relative";
    } else if (solutionChallengeData.color == "green") {
      return "w-[260px] h-[380px] rounded-xl shadow-[inset_0_-1px_4px_rgba(0,0,0,0.6)] bg-green -z-10 relative";
    } else if (solutionChallengeData.color == "blue") {
      return "w-[260px] h-[380px] rounded-xl shadow-[inset_0_-1px_4px_rgba(0,0,0,0.6)] bg-blue -z-10 relative";
    } else if (solutionChallengeData.color == "yellow") {
      return "w-[260px] h-[380px] rounded-xl shadow-[inset_0_-1px_4px_rgba(0,0,0,0.6)] bg-yellow -z-10 relative";
    } else if (solutionChallengeData.color == "gray") {
      return "w-[260px] h-[380px] rounded-xl shadow-[inset_0_1px_4px_rgba(0,0,0,0.6)] bg-gray -z-10 relative";
    }
  };

  return (
    <div
      className="group [perspective:1000px] mx-4 mb-4"
      key={solutionChallengeData.title}
    >
      <div className="relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className={cardCss()}>
          <div className="w-[260px] h-[200px] rounded-t-xl shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]">
            <Image
              className="-z-10 relative rounded-t-xl"
              src={solutionChallengeData.src}
              width={260}
              height={200}
              alt={solutionChallengeData.title}
            />
          </div>
          <div className="px-8 py-4">
            <p className="text-[#ffffff] text-lg font-bold mb-2">
              {solutionChallengeData.title}
            </p>
            <table className="w-[100%]">
              <tbody>
                <tr className="text-[#ffffff] h-[28px] border-b border-[#ffffff]">
                  <td className="text-left">Front</td>
                  <td className="text-right">{solutionChallengeData.front}</td>
                </tr>
                <tr className="text-[#ffffff] h-[28px] border-b border-[#ffffff]">
                  <td className="text-left">Back</td>
                  <td className="text-right">{solutionChallengeData.back}</td>
                </tr>
                <tr className="text-[#ffffff] h-[28px] border-b border-[#ffffff]">
                  <td className="text-left">AI</td>
                  <td className="text-right">{solutionChallengeData.ai}</td>
                </tr>
                <tr className="text-[#ffffff] h-[28px]">
                  <td className="text-left">Design</td>
                  <td className="text-right">{solutionChallengeData.design}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <SolutionChallengeBackCard link={solutionChallengeData.link} />
      </div>
    </div>
  );
}
