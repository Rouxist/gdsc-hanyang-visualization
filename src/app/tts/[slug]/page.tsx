import { getTtsBySlug } from "@/lib/api";

type Params = {
  params: {
    slug: string;
  };
};

export default function TTS({ params }: Params) {
  const ttsData = getTtsBySlug(params.slug);

  return (
    <main>
      <section>
        <div className="flex h-[100vh] p-8">
          <div className="w-[50vw] h-[100%] flex flex-col border-2 border-r-0 border-black">
            <iframe
              className="w-[100%] h-[50%] p-4 border-b-2 border-black"
              src={ttsData.src}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <div className="flex-auto p-4">
              <p className="text-3xl font-bold p-2">{ttsData.title}</p>
              <p className="text-2xl text-lg p-2 mb-4">{ttsData.speaker}</p>
              <p className="text-2xl p-2">{ttsData.desc}</p>
            </div>
          </div>
          <div className="w-[50%] h-[100%] border-2 border-black">
            <p className="md:text-2xl text-lg my-2 px-4 text-center">
              팀블로그 글 내용
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
