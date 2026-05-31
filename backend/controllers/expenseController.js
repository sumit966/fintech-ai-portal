const Expense = require('../models/Expense');

// Get all expenses
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new expense
exports.addExpense = async (req, res) => {
  try {
    const expense = new Expense(req.body);
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get expense summary with budget
exports.getExpenseSummary = async (req, res) => {
  try {
    const expenses = await Expense.find();
    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    const yearlyBudget = 5000000;
    const remainingBudget = yearlyBudget - totalExpenses;
    
    const categoryWise = expenses.reduce((acc, exp) => {
      acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
      return acc;
    }, {});
    
    res.json({
      totalExpenses,
      yearlyBudget,
      remainingBudget,
      categoryWise,
      expenses
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
