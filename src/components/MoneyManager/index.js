import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: '',
    income: '0',
    expenses: '0',
    transactionList: [],
  }

  onSubmitForm = event => {
    event.preventDefault()
  }

  updateTitle = event => {
    this.setState({title: event.target.value})
  }

  updateAmount = event => {
    this.setState({amount: event.target.value})
  }

  updateType = event => {
    this.setState({type: event.target.value})
  }

  addTransactionItem = () => {
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    if (type === 'Income') {
      this.setState(prevState => ({
        income: parseInt(prevState.income) + parseInt(amount),
      }))
    } else if (type === 'Expenses') {
      this.setState(prevState => ({
        expenses: parseInt(prevState.expenses) + parseInt(amount),
      }))
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
      type: '',
    }))
  }

  daleteTransaction = id => {
    const {transactionList} = this.state
    const filteredList = transactionList.filter(eachItem => eachItem.id !== id)
    this.setState({transactionList: filteredList})
    const item = transactionList.find(eachItem => eachItem.id === id)
    const {type, amount} = item
    if (type === 'Income') {
      this.setState(prevState => ({
        income: parseInt(prevState.income) - parseInt(amount),
      }))
    } else if (type === 'Expenses') {
      this.setState(prevState => ({
        expenses: parseInt(prevState.expenses) - parseInt(amount),
      }))
    }
  }

  render() {
    const {title, amount, transactionList, income, expenses} = this.state
    const balance = income - expenses
    return (
      <div className="container">
        <div className="cont">
          <div className="top-card">
            <h1 className="name">Hi, Richard</h1>
            <p className="welcome">
              Welcome back to your{' '}
              <span className="special">Money Manager</span>
            </p>
          </div>
          <ul className="money-details">
            <MoneyDetails
              balance={balance}
              expenses={expenses}
              income={income}
            />
          </ul>
          <div className="bottom-container">
            <form className="form-container" onSubmit={this.onSubmitForm}>
              <h1 className="form-heading">Add Transaction</h1>
              <label className="title" htmlFor="titleElement">
                TITLE
              </label>
              <input
                type="text"
                placeholder="TITLE"
                className="input"
                id="titleElement"
                onChange={this.updateTitle}
                value={title}
              />
              <label className="title" htmlFor="amountElement">
                AMOUNT
              </label>
              <input
                type="text"
                placeholder="AMOUNT"
                className="input"
                id="amountElement"
                onChange={this.updateAmount}
                value={amount}
              />
              <label className="title" htmlFor="typeELement">
                TYPE
              </label>
              <select
                htmlFor="typeELement"
                className="select-option"
                onBlur={this.updateType}
              >
                <option id={transactionTypeOptions[0].optionId} value="Income">
                  Income
                </option>
                <option
                  id={transactionTypeOptions[1].optionId}
                  value="Expenses"
                >
                  Expenses
                </option>
              </select>
              <button
                type="submit"
                className="add-button"
                onClick={this.addTransactionItem}
              >
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="history-heading">History</h1>
              <ul className="history-list-container">
                <li className="history-top">
                  <p className="top-para">Title</p>
                  <p className="top-para">Amount</p>
                  <p className="top-para">Type</p>
                </li>
                {transactionList.map(eachTran => (
                  <TransactionItem
                    details={eachTran}
                    key={eachTran.id}
                    daleteTransaction={this.daleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
