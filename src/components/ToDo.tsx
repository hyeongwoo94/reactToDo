import { IToDo } from "../atoms";

function ToDo({text}:IToDo){
  return(
    <>
    <li>
      <span>{text}</span>
      <button>신규</button>
      <button>진행중</button>
      <button>완료</button>
    </li>
    </>
  )
};

export default ToDo;
