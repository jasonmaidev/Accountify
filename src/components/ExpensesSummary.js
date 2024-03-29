import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import total from '../selectors/expenses-total';
import numeral from 'numeral';


const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount >= 2 ? 'expenses' : 'expense';
  const formattedTotal = numeral(expensesTotal).format('$0,0.00')
  return (
    <div>
      {expenseCount ?
        <h1>
          Viewing {expenseCount} {expenseWord} totalling {formattedTotal}
        </h1>
        :
        <h1>
          Please add an expense.
        </h1>}
    </div>
  )
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: total(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);