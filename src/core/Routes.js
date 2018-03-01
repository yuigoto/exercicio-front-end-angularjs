import Home from "views/Home";
import Edition from "views/Edition";
import EditionItem from "views/EditionItem";

export default [
  {
    path: "/",
    exact: true,
    component: Home
  }, 
  {
    path: "/edition/:id/item/:item",
    exact: true,
    component: EditionItem
  }, 
  {
    path: "/edition/:id/item",
    exact: true,
    component: EditionItem
  }, 
  {
    path: "/edition/:id",
    exact: true,
    component: Edition
  }, 
  {
    path: "/edition",
    exact: true,
    component: Edition
  }
];
