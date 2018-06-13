import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe(0);
});

test('should addup a single expense', () => {
    const total = selectExpensesTotal([expenses[0]]);
    console.log(total);
    expect(total).toBe(195);
    //toBeGreaterThan(0);
});

test('should addup a multiple expense', () => {
    const total = selectExpensesTotal(expenses);
    console.log(total);
    expect(total).toBe(114195);
    //toBeGreaterThan(0);
});

