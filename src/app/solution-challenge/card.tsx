import Link from "next/link";
import Image from "next/image";
import { SolutionChallenge } from "@/interfaces/solution-challenge";

export default function SolutionChallengeCard(
  solutionChallengeData: SolutionChallenge
) {
  const cardCss = () => {
    if (solutionChallengeData.color == "red") {
      return "w-[260px] h-[380px] mx-4 rounded-xl shadow-[inset_0_-1px_4px_rgba(0,0,0,0.6)] bg-red";
    } else if (solutionChallengeData.color == "green") {
      return "w-[260px] h-[380px] mx-4 rounded-xl shadow-[inset_0_-1px_4px_rgba(0,0,0,0.6)] bg-green";
    } else if (solutionChallengeData.color == "blue") {
      return "w-[260px] h-[380px] mx-4 rounded-xl shadow-[inset_0_-1px_4px_rgba(0,0,0,0.6)] bg-blue";
    } else if (solutionChallengeData.color == "yellow") {
      return "w-[260px] h-[380px] mx-4 rounded-xl shadow-[inset_0_-1px_4px_rgba(0,0,0,0.6)] bg-yellow";
    } else if (solutionChallengeData.color == "gray") {
      return "w-[260px] h-[380px] mx-4 rounded-xl shadow-[inset_0_-1px_4px_rgba(0,0,0,0.6)] bg-gray";
    }
  };

  return (
    <div className={cardCss()} key={solutionChallengeData.title}>
      <div className="w-[260px] h-[200px] p-2">
        {solutionChallengeData.src != "" ? (
          <Image
            src={solutionChallengeData.src}
            width={260}
            height={10}
            alt={solutionChallengeData.title}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="px-8 py-2">
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
  );
}
