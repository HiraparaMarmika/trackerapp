import "../styles/ExpenseForm.css";
import { useState } from "react";

export default function ExpenseForm() {
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const expense = {
      amount: formData.get("amount").trim(),
      description: formData.get("description").trim(),
      date: formData.get("date"),
      category: formData.get("category"),
    };

    const validationErrors = {};

    if (!expense.amount || Number(expense.amount) <= 0) {
      validationErrors.amount = "Enter an amount greater than 0.";
    }

    if (!expense.description) {
      validationErrors.description = "Enter a description.";
    }

    if (!expense.date) {
      validationErrors.date = "Select a date.";
    }

    if (!expense.category) {
      validationErrors.category = "Select a category.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log("Expense added:", {
      ...expense,
      amount: Number(expense.amount),
    });
    event.currentTarget.reset();
  }

  return (
    <div className="expenseform">
      <form onSubmit={handleSubmit} noValidate>
        <h1>Expense Form</h1>

        <input
          type="number"
          name="amount"
          placeholder="Enter amount.."
          min="0.01"
          step="0.01"
          aria-invalid={Boolean(errors.amount)}
        />
        {errors.amount && <p role="alert">{errors.amount}</p>}

        <input
          type="text"
          name="description"
          placeholder="Enter Description.."
          aria-invalid={Boolean(errors.description)}
        />
        {errors.description && <p role="alert">{errors.description}</p>}

        <input
          type="date"
          name="date"
          placeholder="Enter Date.."
          aria-invalid={Boolean(errors.date)}
        />
        {errors.date && <p role="alert">{errors.date}</p>}

        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          defaultValue=""
          aria-invalid={Boolean(errors.category)}
        >
          <option value="">Select Category</option>
          <option value="food">Food</option>
          <option value="shopping">Shopping</option>
          <option value="Transportation">Transportation</option>
          <option value="education">Education</option>
          <option value="phoneBill">Phone Bill</option>
          <option value="entertainment">Entertainment</option>
        </select>
        {errors.category && <p role="alert">{errors.category}</p>}

        <div className="btn">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}
