import Image from "next/image";
import { getMap } from "@/lib/api";
import { Tts } from "@/interfaces/tts";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./map"), { ssr: false });

export default function Home() {
  const mapData = getMap();
  const mapElements = mapData.elements;

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Map ttsData={mapElements} />
    </main>
  );
}
