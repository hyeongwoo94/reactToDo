import { atom, selector } from "recoil";

export enum Categories{
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE"
}
export const USERTODOLIST_KEY = "todos";
const userGetTodo = localStorage.getItem(USERTODOLIST_KEY);
const parseTodo = JSON.parse(userGetTodo as string);

export interface IToDo {
  text:string;
  category: Categories;
  id:number;
}
export const cartagoryState = atom<Categories>({
  key:"category",
  default: Categories.TO_DO
})

export const toDoState = atom<IToDo[]>({
  key:"toDo",
  default:  userGetTodo !== null ? parseTodo : [],
})
export const toDoSelector = selector({
  key: "toDoSelector",
  get:({get}) => {
    const toDos = get(toDoState);
    const category = get(cartagoryState)
    return toDos.filter((toDo) => toDo.category === category)
  }
})