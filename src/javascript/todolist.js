import LOCALSTORAGEKEY from "./localstorageKey.js";
import toDos from "./todos.js";

const toDoForm = document.querySelector(".js-todo-form");
const toDoInput = document.querySelector(".js-todo-input");
const planning = document.querySelector(".js-todolist-planning");
const finished = document.querySelector(".js-todolist-finished");

const icons = {
  del: `<i class="fas fa-minus-square"></i>`,
  check: `<i class="fas fa-check-square"></i>`,
  back: `<i class="fas fa-caret-square-left"></i>`,
};

const saveToDos = () => {
  localStorage.setItem(
    LOCALSTORAGEKEY.planning,
    JSON.stringify(toDos.planning)
  );
};
const saveFinishedToDos = () => {
  localStorage.setItem(
    LOCALSTORAGEKEY.finished,
    JSON.stringify(toDos.finished)
  );
};

const handleButtonDel = (e) => {
  const btn = e.target.parentNode;
  const li = btn.parentNode;
  const newPlanningToDos = toDos.planning.filter(
    (todo) => todo.id !== parseInt(li.id, 10)
  );
  toDos.planning = newPlanningToDos;
  planning.removeChild(li);
  saveToDos();
};

const handleFinishedButtonDel = (e) => {
  const btn = e.target.parentNode;
  const li = btn.parentNode;
  const newFinishedToDos = toDos.finished.filter(
    (todo) => parseInt(todo.id, 10) !== parseInt(li.id, 10)
  );
  toDos.finished = newFinishedToDos;
  finished.removeChild(li);
  saveFinishedToDos();
};

const handleToPlanning = (e) => {
  const btn = e.target.parentNode;
  const li = btn.parentNode;
  finished.removeChild(li);
  const newFinishedValue = toDos.finished.filter(
    (todo) => parseInt(todo.id) !== parseInt(li.id)
  );
  toDos.finished = newFinishedValue;
  saveFinishedToDos(toDos.finished);
  makePlanningList(li.innerText);
};

const makeFinishedList = (obj) => {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  const finishedId = obj.id;
  const text = obj.text;

  delBtn.innerHTML = icons.del;
  delBtn.classList.add("todo-button");
  delBtn.addEventListener("click", handleFinishedButtonDel);

  backBtn.innerHTML = icons.back;
  backBtn.classList.add("todo-button");
  backBtn.addEventListener("click", handleToPlanning);

  li.innerText = obj.text;
  li.appendChild(delBtn);
  li.appendChild(backBtn);
  li.id = finishedId;

  const newObj = {
    id: finishedId,
    text: text,
  };
  finished.appendChild(li);
  toDos.finished.push(newObj);
  saveFinishedToDos();
};

const handleChange = (e) => {
  const btn = e.target.parentNode;
  const li = btn.parentNode;
  const newPlanningToDos = toDos.planning.filter(
    (todo) => todo.id !== parseInt(li.id, 10)
  );

  toDos.planning = newPlanningToDos;
  planning.removeChild(li);
  saveToDos();

  const finishedObj = {
    id: li.id,
    text: li.innerText,
  };
  makeFinishedList(finishedObj);
};

const makePlanningList = (text) => {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const newID = new Date().getTime();

  delBtn.innerHTML = icons.del;
  delBtn.classList.add("todo-button");
  delBtn.addEventListener("click", handleButtonDel);

  checkBtn.innerHTML = icons.check;
  checkBtn.classList.add("todo-button");
  checkBtn.addEventListener("click", handleChange);

  li.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  li.id = newID;
  planning.appendChild(li);

  const toDoObj = {
    id: newID,
    text: text,
  };
  toDos.planning.push(toDoObj);
  saveToDos();
};

const handleSubmit = (e) => {
  e.preventDefault();
  const currentToDo = toDoInput.value;
  makePlanningList(currentToDo);
  toDoInput.value = "";
};

const loadToDos = () => {
  const currentPlanningValue = JSON.parse(
    localStorage.getItem(LOCALSTORAGEKEY.planning)
  );
  if (currentPlanningValue) {
    currentPlanningValue.forEach((toDo) => makePlanningList(toDo.text));
  }
};

const loadFinished = () => {
  const currentFinishedValue = JSON.parse(
    localStorage.getItem(LOCALSTORAGEKEY.finished)
  );
  if (currentFinishedValue) {
    currentFinishedValue.forEach((toDo) => makeFinishedList(toDo));
  }
};

const toDoInit = () => {
  loadToDos();
  loadFinished();
  toDoForm.addEventListener("submit", handleSubmit);
};

export default toDoInit;
