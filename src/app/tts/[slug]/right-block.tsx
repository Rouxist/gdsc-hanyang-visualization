import { NotionAPI } from "notion-client";
import NotionPage from "./notion-page";

type Params = {
  postId: string;
};

export default async function RightBlock({ postId }: Params) {
  if (postId) {
    const notion = new NotionAPI();

    const recordMap = await notion.getPage(postId);
    return <NotionPage recordMap={recordMap} />;
  } else {
    return <></>;
  }
}
