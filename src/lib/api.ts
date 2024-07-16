import { type Tts } from "@/interfaces/tts";
import fs from "fs";
import { join } from "path";

// _map

export function getMap() {
  const fullPath = join(process.cwd(), "public/_map/map.json");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const threadData = JSON.parse(fileContents);
  return threadData;
}

// tts

export function getTtsBySlug(slug: string) {
  // No validity check for the argument
  const mapData = getMap();
  const fullTtsData = mapData.elements;
  const ttsData = fullTtsData.filter((tts: Tts) => tts.slug == slug);

  return ttsData[0];
}

export function getTtsArrayOfSameCategory(category: string) {
  // No validity check for the argument
  const mapData = getMap();
  const fullTtsData = mapData.elements;
  const ttsData = fullTtsData.filter((tts: Tts) => tts.category == category);
  const ttsTitleData = ttsData.map((tts: Tts) => ({
    title: tts.title,
    slug: tts.slug,
  }));

  return ttsTitleData;
}
