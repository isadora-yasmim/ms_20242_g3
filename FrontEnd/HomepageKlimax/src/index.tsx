import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./elements/header/header";
import Footer from "./elements/footer/footer";
import Main from "./elements/maincontent/main";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

document.body.style.backgroundColor = "#000000  ";
document.head.innerHTML +=
  '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">';

root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);
