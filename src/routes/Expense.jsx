import { useParams } from "react-router-dom"


export default function Expense() {
  let params=useParams();
   console.log(params);
  return (
    <h2>Expense Amount:{params.expenseAmount} </h2>
  )
}

