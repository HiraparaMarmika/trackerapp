import "../styles/ExpenseList.css";

export default function ExpenseList({ expenses }) {
  return (
    <div className="ExpenseList">
      <div className="list-search">
        <div>
          <h1>Expense List</h1>
        </div>

        <div>
          <select defaultValue="all">
            <option value="all">All</option>
            <option value="food">Food</option>
            <option value="shopping">Shopping</option>
            <option value="travel">Travel</option>
            <option value="entertainment">Entertainment</option>
          </select>

          <input
            type="search"
            placeholder="Search expense..."
          />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
            <th>Category</th>
            <th>Delete</th>
            <th>Edit</th>
            <th>Read More</th>
          </tr>
        </thead>

        <tbody>
          {expenses.length > 0 ? expenses.map((expense, index) => (
            <tr key={expense.id ?? `${expense.date}-${index}`}>
              <td>{expense.amount}</td>
              <td>{expense.description ?? expense.shopping}</td>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td><button type="button" className="btn-delete">Delete</button></td>
              <td><button type="button" className="btn-edit">Edit</button></td>
              <td><button type="button" className="btn-readmore">Read More</button></td>
            </tr>
          )) : (
            <tr>
              <td colSpan="7" className="no-data">No results found</td>
            </tr>
          )}

          <tr className="expense-total">
            <td colSpan="7">Total Amount: ₹2,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
