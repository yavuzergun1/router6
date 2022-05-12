import { getExpenses } from "../data";
import {Link, Outlet} from "react-router-dom"


export default function Expenses() {
  let expenses= getExpenses()
    return (
      <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {expenses.map((expense) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/expenses/${expense.amount}`} /* adres kısmında http://localhost:3000/invoices/... buradaki uzantıda ne yazacağını belirledik. invoice içindeki number yazacak. Buraya id kısmı deniyor.  */
            key={expense.number}
          >
            {expense.name}
          </Link>
        ))}
      </nav>
      <Outlet/>
    </div>
  );
}