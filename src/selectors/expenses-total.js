export default (expenses) => {
    if (expenses.length === 0) {
        return 0;
    } else { 
        return expenses
            .map((expense) => expense.amount)
            .reduce((sum, value) => sum + value, 0);
    }

};

// let total = 0;
        // expenses.map( (e, idx, arr) => {
        //     total = total + e.amount;
        //     return arr;
        // });
        // return total;