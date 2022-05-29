import { Console } from "console";

export function codepenEmbedder() {
  const name = "codepen";

  const check = ({ properties }) => {
    return String(properties.href).includes(name) ? true : false;
  };

  {
    /* <iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/possiblyBen/embed/PoQYYZQ?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/possiblyBen/pen/PoQYYZQ">
  Untitled</a> by EB (<a href="https://codepen.io/possiblyBen">@possiblyBen</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe> */
  }

  const transform = (node) => {
    node.tagName = "iframe";
    node.properties = {
      src: (() => {
        let arr = node.properties.href.split("");

        let index = node.properties.href.lastIndexOf("pen");

        arr.splice(index, 3, "e", "m", "b", "e", "d");

        const joinedArray = arr.join("");

        const result = `${joinedArray}?editable=true`;

        return result;
      })(),
      style: "width: 100%",
      height: 300,
      scrolling: "no",
      frameborder: "no",
      loading: "lazy",
      allowtransparency: "true",
      allowfullscreen: "true",
      editable: true,
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
