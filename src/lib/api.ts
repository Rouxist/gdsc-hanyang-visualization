import { type Map } from "@/interfaces/map";
import { type Tts } from "@/interfaces/tts";
import fs from "fs";
import { get } from "http";
import { join } from "path";

// _map

export function getMap() {
  const fullPath = "public/_map/map.json";
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const threadData = JSON.parse(fileContents);
  return threadData;
}

// tts

export function getTtsBySlug(slug: string) {
  // No validity check for slug
  const mapData = getMap();
  const fullTtsData = mapData.elements;
  const ttsData = fullTtsData.filter((tts: Tts) => tts.slug == slug);

  return ttsData[0];
}
