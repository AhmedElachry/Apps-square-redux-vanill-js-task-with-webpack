import { store } from "../redux/store/store";
import { expandWidthOne, expandWidthTwo } from "../redux/store/actions";

const container = document.createElement("div");
const divOne = document.createElement("div");
const divTwo = document.createElement("div");
const br = document.createElement("br");
const btnOne = document.createElement("button");
const btnTwo = document.createElement("button");

btnOne.addEventListener("click", () => {
  store.dispatch(expandWidthOne("100%"));
});
btnTwo.addEventListener("click", () => {
  store.dispatch(expandWidthTwo("100%"));
});

function createPage() {
  container.classList.add("container");
  divOne.classList.add("child-one");
  divTwo.classList.add("child-two");
  divOne.style.width = store.getState().divOne;
  divTwo.style.width = store.getState().divTwo;
  divOne.innerText = "Div One";
  divTwo.innerText = "Div Two";
  btnOne.innerText = "Expand Div One";
  btnTwo.innerText = "Expand Div Two";
  container.appendChild(divOne);
  container.appendChild(divTwo);
  container.appendChild(br);
  container.appendChild(btnOne);
  container.appendChild(btnTwo);
  document.body.appendChild(container);
}
createPage();
export { createPage };
