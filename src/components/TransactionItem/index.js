import './index.css'

const TransactionItem = props => {
  const {details, daleteTransaction} = props
  const {id, title, amount, type} = details
  const deleteClicked = () => {
    daleteTransaction(id)
  }
  return (
    <li className="history">
      <p className="top">{title}</p>
      <p className="top">Rs {amount}</p>
      <p className="top">{type}</p>
      <button type="button" className="delete-button" onClick={deleteClicked}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
