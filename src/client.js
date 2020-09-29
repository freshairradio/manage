import * as sapper from "@sapper/app";
import { api } from "./api";
if (window)
  api("members").then((app) => {
    window.api = app;
    sapper.start({
      target: document.querySelector("#sapper")
    });
  });
