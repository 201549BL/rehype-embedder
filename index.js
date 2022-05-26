import fs from "fs";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";

import { embedder } from "./rehype-embedder/attacher.js";
import { youtubeEmbedder } from "./rehype-embedder/options/youtubeEmbedder.js ";

function logger() {
  return (tree) => {
    visit(tree, (node) => {
      console.log(node);
    });
  };
}

const markdown = fs.readFileSync("./markdown.md", { encoding: "utf-8" });

const processMarkdown = (input) => {
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(embedder, [youtubeEmbedder()])
    .use(logger)
    .use(rehypeStringify)
    .process(input);
};

const { value } = await processMarkdown(markdown);

fs.writeFile("./index.html", value, { encoding: "utf-8" }, () => {
  console.log("all done");
});
