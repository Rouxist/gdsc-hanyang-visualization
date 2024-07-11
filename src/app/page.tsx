import Image from "next/image";
import { getMap } from "@/lib/api";
import { Tts } from "@/interfaces/tts";

export default function Home() {
  const mapData = getMap();
  const mapElements = mapData.elements;

  return (
    <main className="flex min-h-screen flex-col justify-center items-center">
      <div className="w-[1600px]">
        <Image
          useMap="#gdsc-map"
          src="/assets/map.jpg"
          width={1600}
          height={900}
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
        {/* <area shape="rect" coords="20,50,70,100" alt="" href="/tts/wow" />
        <area shape="rect" coords="1210,600,1260,650" alt="" href="/tts/wow" /> */}
      </map>
      {/* <div className="absolute left-[1384px] top-[425px] w-[50px] h-[40px] border border-black"></div> */}
    </main>
  );
}
