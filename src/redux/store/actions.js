import { divOneExpand, divTwoExpand } from "./actionsConstants";
function expandWidthOne(value) {
  return {
    type: divOneExpand,
    payload: value,
  };
}
function expandWidthTwo(value) {
  return {
    type: divTwoExpand,
    payload: value,
  };
}
export { expandWidthOne, expandWidthTwo };
