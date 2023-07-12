import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase.js";

export function Header(onNavigate) {
  // Template String
  const logoHeader = `<div class="logoHeader">
                        <img class="logoHeader__img" src="./assets/images/catsSociety--logo.png" alt="" />
                      </div>`;
  const menuProfile = `<nav>
        <ul class="menuProfile">
          <li class="menuItemProfile"><img class="menuProfile__img"src="./assets/icons/userIcon.png" alt="userIcon" /></li>
          <li class="menuItemProfile"><a id="userName">Nombre de usuario</a></li>
          <li class="menuItemProfile"><a id="userNickName">@username</a></li>
          <hr />
          <li class="menuItemProfile">
            <a id="myPosts"><img class="menuIconProfile"src="./assets/icons/userIcon.png" alt="userIcon" />Mis publicaciones</a>
          </li>
          <li class="menuItemProfile">
            <a id="feeds"><img class="menuIconProfile"src="./assets/icons/postCat.png" alt="postCat" />Feeds</a>
          </li>
          <li class="menuItemProfile">
            <a id="configuration"> <img class="menuIconProfile"src="./assets/icons/blueGear.png" alt="gearIcon" />Configuración</a>
          </li>
          <hr />
          <li class="menuItemProfile"><a id="logOut">Cerrar Sesión</a></li>
        </ul>
        <button class="hamburger">
        <img class="profileIcon" src="./assets/icons/account-icon.svg"/>
        <img class="closeIcon" src="./assets/icons/close-icon.png"/>
      </button>
  </nav>`;
  const menuTopics = `<nav>
                        <ul class="menuTopics">
                          <li class="menuItemTopics">
                            <a id="understandCat"><img class="menuIcon" src="./assets/icons/Heart.png" alt="heart-icon" />¿Cómo entender a un gato?</a></li>
                          <li class="menuItemTopics">
                            <a id="memes"><img class="menuIcon" src="./assets/icons/Happy.png" alt="happy-icon"/>Memes</a></li>
                          <li class="menuItemTopics">
                            <a id="tips"><img class="menuIcon" src="./assets/icons/AskQuestion.png" alt="tip-icon" />Tips</a></li>
                          <li class="menuItemTopics">
                            <a id="curiosities"><img class="menuIcon" src="./assets/icons/LightOn.png" alt="curiosities icon" />Curiosidades</a></li>
                          <hr />
                          <li class="menuItemTopics">
                            <a id="tipDay"><img class="menuIcon" src="./assets/icons/Detective.png" alt="tipDay-icon" />Tip/dato del día</a></li>
                          <li class="menuItemTopics"><a id="vet">
                            <img class="menuIcon" src="./assets/icons/DoctorsBag.png" alt="vet-icon" />Veterinarios</a></li>
                          <li class="menuItemTopics"><a id="help">
                            <img class="menuIcon" src="./assets/icons/Help.png" alt="help-icon" />Ayuda</a></li>
                        </ul>
                        <button class="hamburgerTopic">
                                <img class="profileIconTopic" src="./assets/icons/hamburger-icon.svg"/>
                                <img class="closeIconTopic" src="./assets/icons/close-icon.png"/>
                        </button>
                      </nav>`;

  const headerTemplate = `<div class="header">
  <div>${menuTopics}</div>
  <div>${logoHeader}</div>
  <div>${menuProfile}</div>
  </div>`;

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

  // Menu CSS - Profile

  const menuItemsProfile = headerHtml.querySelectorAll(".menuItemProfile");
  const hamburgerButton = headerHtml.querySelector(".hamburger");
  const menuProfileHtml = headerHtml.querySelector(".menuProfile");
  const closeIcon = headerHtml.querySelector(".closeIcon");

  hamburgerButton.addEventListener("click", () => {
    if (menuProfileHtml.classList.contains("showMenu")) {
      menuProfileHtml.classList.remove("showMenu");
      closeIcon.style.display = "none";
    } else {
      menuProfileHtml.classList.add("showMenu");
      closeIcon.style.display = "block";
    }
  });

  menuItemsProfile.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      console.log("hiciste click");
    });
  });

  // Menu CSS - Topics
  const menuItemsTopics = headerHtml.querySelectorAll(".menuItemTopics");
  const hamburgerButtonTopic = headerHtml.querySelector(".hamburgerTopic");
  const menuTopicsHtml = headerHtml.querySelector(".menuTopics");
  const closeIconTopic = headerHtml.querySelector(".closeIconTopic");

  hamburgerButtonTopic.addEventListener("click", () => {
    if (menuTopicsHtml.classList.contains("showMenuTopic")) {
      menuTopicsHtml.classList.remove("showMenuTopic");
      closeIconTopic.style.display = "none";
    } else {
      menuTopicsHtml.classList.add("showMenuTopic");
      closeIconTopic.style.display = "block";
    }
  });

  menuItemsTopics.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      console.log("hiciste click");
    });
  });

  return headerHtml;
}
