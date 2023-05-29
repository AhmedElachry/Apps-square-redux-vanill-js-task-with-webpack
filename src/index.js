import "./style/main.css";
import { store } from "./redux/store/store";
import { createPage } from "./components/createPage";

store.subscribe(createPage);
