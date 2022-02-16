import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
const Cantiner = styled.div`
  max-width: 468px;
  margin: 0 auto;
  text-align: center;
`;
interface IForm{
  name:string;
  email:string;
  password:string;
}
// function ToDoList () {
//   const [ToDo, setToDo] = useState("");
//   const [toDoError,setToDoError] = useState("");
//   const onChange =(event:React.FormEvent<HTMLInputElement>) =>{
//     const{
//       currentTarget: {value},
//     } = event;
//     setToDoError("");
//     setToDo(value);
//   };
//   const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if(ToDo.length < 10) {
//       return setToDoError("최소10글자를 쓰시오");
//     }
//     console.log("submit")
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={ToDo} placeholder="리스트 작성하기" />
//         <button>추가하기</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      password:"숫자만 입력해주세요",
      name:"한글로 입력해주세요",
      email:"@naver.com",
    },
  });
  const onValid = (data: any) => {
    console.log(data);
  };

  return (
   <Cantiner>
      <div>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
      <input
          {...register("name", {required: "이름을 적어주세요",
            minLength: {value: 3, message: "최소 3글자 이상쓰시오",},
          })}
          placeholder="Name"
        />
         <div>{errors?.name?.message}</div>
        <input
          {...register("email", {required: "이메일을 적어주세요",
            pattern: {value: /^[A-Za-z0-9._%+-]+@naver.com$/, message: "@naver.com 만 사용가능합니다.",},
          })}
          placeholder="Email"
        />
        <div>{errors?.email?.message}</div>
        <input
          {...register("password", { required: "필수 입력란입니다.", minLength: {value:8, message:"최소8글자 이상적어주세요"} })}
          placeholder="Password"
        />
        <div>{errors?.password?.message}</div>
        <button>추가하기</button>
       
        
        
      </form>
    </div>
   </Cantiner>
  );
}
export default ToDoList;
