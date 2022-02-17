import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm{
  toDo:string;
}

function MakeToDo() {
  const setToDos = useSetRecoilState(toDoState)
  const{register,handleSubmit, setValue} = useForm<IForm>();
  const handleValid = ({toDo}:IForm) => {
    setToDos(oldToDos =>[{text:toDo,id:Date.now(),category:"To_DO"}, ...oldToDos])
    setValue("toDo","")
  };
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