import { valueToNode } from "@babel/types";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

function ToDoList () {
  const [ToDo, setToDo] = useState("");
  const [toDoError,setToDoError] = useState("");
  const onChange =(event:React.FormEvent<HTMLInputElement>) =>{
    const{
      currentTarget: {value},
    } = event;
    setToDoError("");
    setToDo(value);
  };
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(ToDo.length < 10) {
      return setToDoError("최소10글자를 쓰시오");
    }
    console.log("submit")
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={ToDo} placeholder="리스트 작성하기" />
        <button>추가하기</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
}

// const Cantiner = styled.div`
//   max-width: 468px;
//   margin: 0 auto;
//   text-align: center;
// `;
// interface IForm{
//   name:string;
//   email:string;
//   password:string;
//   password1:string;
//   extraError?:string;
// }

// function ToDoList() {
//   const {
//     register,
//     watch,
//     handleSubmit,
//     formState: { errors },
//     setError
//   } = useForm<IForm>({
//     defaultValues: {
//       email:"@naver.com",
//     },
//   });
//   const onValid = (data: IForm) => {
//     if(data.password !== data.password1){
//       setError("password1", {message:"비밀번호가 일치하지 않습니다."}, {shouldFocus:true})
//     }
//     setError("extraError", {message:"서버가 연결되지 않았습니다."});
//   };

//   return (
//    <Cantiner>
//       <div>
//       <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
//       <input
//           {...register("name", 
//           {
//             required: "이름을 적어주세요",
//             minLength: {value: 3, message: "최소 3글자 이상쓰시오",},
//             validate: {
//               noNico: (vlaue) => vlaue.includes("nico") ? "nico는 사용 불가" : true,
//               noNick: (vlaue) => vlaue.includes("nick") ? "nick는 사용 불가" : true,
//             }
//           })}
//           placeholder="이름"
//         />
//          <div>{errors?.name?.message}</div>
//         <input
//           {...register("email", {required: "이메일을 적어주세요",
//             pattern: {value: /^[A-Za-z0-9._%+-]+@naver.com$/, message: "@naver.com 만 사용가능합니다.",},
//             maxLength:{value:30, message:"최대 30글자 사용 가능"}
//           })}
//           placeholder="Email"
//         />
//         <div>{errors?.email?.message}</div>
//         <input type="password"
//           {...register("password", { required: "필수 입력란입니다.", minLength: {value:8, message:"최소8글자 이상적어주세요"} })}
//           placeholder="비밀번호"
//         />
//         <div>{errors?.password?.message}</div>
//         <input type="password"
//           {...register("password1", {required: "필수 입력란입니다.", minLength: {value:8, message:"최소8글자 이상적어주세요"} })}
//           placeholder="비밀번호 확인"
//         />
//         <div>{errors?.password1?.message}</div>
//         <button>추가하기</button>
//         <div>{errors?.extraError?.message}</div>
        
        
//       </form>
//     </div>
//    </Cantiner>
//   );
// }
export default ToDoList;
