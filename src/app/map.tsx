"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { Tts } from "@/interfaces/tts";

type Params = {
  ttsData: Tts[];
};

export default function Map({ ttsData }: Params) {
  const getWidth = () => {
    return window.innerWidth;
  };

  const [windowWidth, setWindowWidth] = useState(getWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWidth());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mapElements = ttsData;

  function adjustCoord(coords: string) {
    const defaultWidth = 1710;
    const defaultHeight = 962;

    const currentWidth = windowWidth;
    const currentHeight = (currentWidth * defaultHeight) / defaultWidth;

    const nums = coords.split(",");
    const x = Number(nums[0]);
    const y = Number(nums[1]);
    const r = Number(nums[2]);

    const adjX = (x * currentWidth) / defaultWidth;
    const adjY = (y * currentHeight) / defaultHeight;
    const adjRadius = (r * currentWidth) / defaultWidth;

    return (
      adjX.toString() + ", " + adjY.toString() + ", " + adjRadius.toString()
    );
  }

  return (
    <div>
      <div className="w-[100vw]">
        <Image
          useMap="#gdsc-map"
          src="/assets/map.jpeg"
          width={17100}
          height={962}
          alt="map"
        ></Image>
      </div>
      <map name="gdsc-map">
        {mapElements.map((tts: Tts, idx: number) => (
          <area
            shape="circle"
            coords={adjustCoord(tts.coordinate)}
            href={"/tts/" + tts.slug}
            key={idx}
          ></area>
        ))}
      </map>
      윈도우 폭: {windowWidth} px
    </div>
  );
}
