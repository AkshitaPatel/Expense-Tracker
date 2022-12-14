import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExepensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const onDropDownChangeFunc = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onDropDownChange={onDropDownChangeFunc}
        />
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExepensesList items={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
