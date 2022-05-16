import { render } from "react-dom";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoice from "./routes/Invoice";
import Invoices from "./routes/invoices";
import Expense from "./routes/Expense";
// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot( document.getElementById('root'))
root.render(
<BrowserRouter>
<Routes>
      <Route path="/" element={<App />} >
      <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <h2>Select Invoices or Expenses</h2>
          </main>
        }
      />
      <Route path="invoices" element={<Invoices />}  >
      <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
          </main>
        }
      />
      <Route path=":invoiceId" element={<Invoice/>} />
   </Route>
      <Route path="expenses" element={<Expenses />} >
      <Route path=":expenseAmount" element={<Expense/>} />
      </Route>
      <Route path="*" 
      element={
      <main style={{ padding: "10rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
       />
    </Route>
    </Routes>
</BrowserRouter>, 
);