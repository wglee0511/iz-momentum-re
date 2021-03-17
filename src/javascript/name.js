import LOCALSTORAGEKEY from "./localstorageKey.js";

const nameForm = document.querySelector(".js-name-form");
const nameinput = document.querySelector(".js-name-input");
const greetingDiv = document.querySelector(".js-greeting");

const saveNameToLocalStorage = (name) => {
  localStorage.setItem(LOCALSTORAGEKEY.name, name);
};

const displayName = (name) => {
  const greatingHead = document.createElement("h4");
  const nameHead = document.createElement("h5");
  if (name) {
    greetingDiv.classList.remove("none");
    greatingHead.innerText = "Hello!";
    nameHead.innerText = `${name}`;
    greetingDiv.appendChild(greatingHead);
    greetingDiv.appendChild(nameHead);
    nameForm.classList.add("none");
    saveNameToLocalStorage(name);
  }
};

const handleNameAccept = (e) => {
  e.preventDefault();
  const getName = nameinput.value;
  displayName(getName);
};

const loadName = () => {
  const loadedName = localStorage.getItem(LOCALSTORAGEKEY.name);
  displayName(loadedName);
};

const nameInit = () => {
  loadName();
  nameForm.addEventListener("submit", handleNameAccept);
};

export default nameInit;
