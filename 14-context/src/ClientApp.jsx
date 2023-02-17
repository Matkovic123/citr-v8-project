// can't do DOM stuff in node
// here you would run e.g. Google analytics, or anything that happens in the browser
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
