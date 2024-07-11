import { Map } from "@/interfaces/map";
import fs from "fs";
import { join } from "path";

// _map

export function getMap() {
  const fullPath = "public/_map/map.json";
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const threadData = JSON.parse(fileContents);
  return threadData;
}
