import Image from "next/image";

type Params = {
  link: string;
};

export default function SolutionChallengeBackCard({ link }: Params) {
  if (link == "") {
    return (
      <div className="w-[260px] h-[380px] rounded-xl shadow-[inset_0_-1px_4px_rgba(0,0,0,0.6)] bg-[#ffffff] z-10 absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <Image
          src="/assets/solution_challenge/github-mark-gray.png"
          className="mx-auto pt-20"
          width={120}
          height={120}
          alt="github-logo"
        />
        <p className="text-xl text-center text-gray pt-8">Not available</p>
      </div>
    );
  } else {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[260px] h-[380px] rounded-xl shadow-[inset_0_-1px_4px_rgba(0,0,0,0.6)] bg-[#ffffff] z-10 absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]"
      >
        <Image
          src="/assets/solution_challenge/github-mark.png"
          className="mx-auto pt-20"
          width={120}
          height={120}
          alt="github-logo"
        />
        <p className="text-xl text-center pt-8">{"Github >>"}</p>
      </a>
    );
  }
}
