import moment from 'moment';

//Get visible expenses
export default (expenses, {text, sortBy, startDate, endDate}) => {

    return expenses.filter((expense)=>{
        // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        // const endDateMatch = typeof endDate !== 'number' || expense.createdAt >= endDate;
        // const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()); //Case insesitive search
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()); //Case insesitive search

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b)=>{ //like filter return a new array
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    });
}