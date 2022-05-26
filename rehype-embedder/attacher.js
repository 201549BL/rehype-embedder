import { visit } from "unist-util-visit";

export function embedder(options = []) {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.tagName === "a" &&
        node.children.some((e) => String(e.value).includes("embed"))
      ) {
        options.forEach((embedder) => {
          embedder.run(node);
        });
      }
    });
  };
}
