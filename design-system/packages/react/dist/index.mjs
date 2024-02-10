// ../tokens/dist/index.mjs
var colors = {
  white: "#fff",
  black: "#000",
  gray100: "#e1e1e6",
  gray200: "#a9a9b2",
  gray400: "#7c7c81",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292e",
  gray800: "#202024",
  gray900: "#121214",
  ignite300: "#00b37e",
  ignite500: "#00875f",
  ignite700: "#015f43",
  ignite900: "#00291d"
};

// src/index.tsx
import { jsx } from "react/jsx-runtime";
function App() {
  return /* @__PURE__ */ jsx("h1", { style: { color: colors.ignite300 }, children: "Hello World" });
}
export {
  App
};
