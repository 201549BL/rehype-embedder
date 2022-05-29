export function youtubeEmbedder() {
  const name = "youtube";

  const check = ({ properties }) => {
    return String(properties.href).includes(name) ? true : false;
  };

  const transform = (node) => {
    node.tagName = "iframe";
    node.properties = {
      width: 560,
      height: 315,
      src: node.properties.href.replace("watch?v=", "embed/"),
      title: "YouTube video player",
      frameborder: "0",
      allow:
        "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: true,
    };
  };

  const run = (node) => {
    if (!check(node)) return;
    transform(node);
  };

  return {
    run,
  };
}
