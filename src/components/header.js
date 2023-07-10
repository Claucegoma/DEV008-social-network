import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase.js";

export function Header(onNavigate) {
  // Template String
  const logoHeader = `<div>LOGO</div>`;
  const menuProfile = `<div>
        <ul>
          <li><a id="myPosts">Mis publicaciones</a></li>
          <li><a id="feeds">Feeds</a></li>
          <li><a id="configuration">Configuración</a></li>
          <li><a id="logOut">Cerrar Sesión</a></li>
        </ul>
  </div>`;
  const menuTopics = "";

  const headerTemplate = `<div>${menuTopics}</div>
  <div>${logoHeader}</div>
  <div>${menuProfile}</div>`;

  // DOM
  const headerHtml = document.createElement("div");
  headerHtml.classList.add("header");
  headerHtml.innerHTML = headerTemplate;

  const myPosts = headerHtml.querySelector("#myPosts");
  const feeds = headerHtml.querySelector("#feeds");
  const logOut = headerHtml.querySelector("#logOut");

  myPosts.addEventListener("click", () => {
    onNavigate("/myPosts");
  });

  feeds.addEventListener("click", () => {
    onNavigate("/feed");
  });
  logOut.addEventListener("click", async () => {
    await signOut(auth);
    console.log(signOut(auth));
    console.log("user signed out");
  });

  return headerHtml;
}
