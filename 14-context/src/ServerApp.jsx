import { renderToPipeableStream } from "react-dom/server"; // to run the app in Node, in a Node stream to allow progressive output
import { StaticRouter } from "react-dom/server"; // basically a React router to be used inside Node.js
import App from "./App";

export default function render(url, opts) {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
    opts
  );
  return stream;
}
