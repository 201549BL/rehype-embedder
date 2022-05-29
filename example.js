import fs from "fs";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

import { embedder } from "./rehype-embedder/attacher.js";
import { youtubeEmbedder } from "./rehype-embedder/extensions/youtubeEmbedder.js ";
import { codepenEmbedder } from "./rehype-embedder/extensions/codepenEmbedder.js";

const markdown = fs.readFileSync("./markdownExample.md", { encoding: "utf-8" });

const processMarkdown = (input) => {
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(embedder, [youtubeEmbedder(), codepenEmbedder()])
    .use(rehypeStringify)
    .process(input);
};

const { value } = await processMarkdown(markdown);

fs.writeFile("./example.html", value, { encoding: "utf-8" }, () => {
  console.log("all done");
});
