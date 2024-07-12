import Image from "next/image";
import { getMap } from "@/lib/api";
import { Tts } from "@/interfaces/tts";

export default function Home() {
  const mapData = getMap();
  const mapElements = mapData.elements;

  return (
    <main className="flex min-h-screen flex-col justify-center items-center">
      <div className="w-[90vw]">
        <Image
          useMap="#gdsc-map"
          src="/assets/map.jpg"
          width={3840}
          height={2160}
          alt="map"
        ></Image>
      </div>
      <map name="gdsc-map">
        {mapElements.map((tts: Tts, idx: number) => (
          <area
            shape="circle"
            coords={tts.coordinate}
            href={"/tts/" + tts.slug}
            key={idx}
          ></area>
        ))}
      </map>
    </main>
  );
}
