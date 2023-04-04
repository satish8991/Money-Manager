import './index.css'

const MoneyDetails = props => {
  const {income, expenses, balance} = props
  return (
    <>
      <li className="your-balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="image-icon"
          alt="balance"
        />
        <div className="text-container">
          <p id="balanceAmount" className="text">
            Your Balance
          </p>
          <h1 className="amount">RS {balance}</h1>
        </div>
      </li>
      <li className="your-income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="image-icon"
          alt="income"
        />
        <div className="text-container">
          <p id="incomeAmount" className="text">
            Your Income
          </p>
          <h1 className="amount">RS {income}</h1>
        </div>
      </li>
      <li className="your-expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="image-icon"
          alt="expenses"
        />
        <div className="text-container">
          <p id="expensesAmount" className="text">
            Your Expenses
          </p>
          <h1 className="amount">RS {expenses}</h1>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
