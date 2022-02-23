import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toDoState, cartagoryState, USERTODOLIST_KEY } from "../atoms";

interface IForm{
  toDo:string;
}

function MakeToDo() {
  const toDosSave = useRecoilValue(toDoState);
  const setToDos = useSetRecoilState(toDoState);
  const category= useRecoilValue(cartagoryState);
  const{register,handleSubmit, setValue} = useForm<IForm>();
  const handleValid = ({toDo}:IForm) => {
    setToDos(oldToDos =>[{text:toDo,id:Date.now(),category}, ...oldToDos])
    setValue("toDo","")
  };
  localStorage.setItem(USERTODOLIST_KEY, JSON.stringify(toDosSave));
  return(
   <>
   <form onSubmit={handleSubmit(handleValid)}>
        <input {...register("toDo",{required:"작성해주세요"})} placeholder="리스트 작성하기" />
        <button>추가하기</button>
      </form>
   </>
  )
}

export default MakeToDo;