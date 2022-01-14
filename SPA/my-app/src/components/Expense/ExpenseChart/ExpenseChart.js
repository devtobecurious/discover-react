import Chart from '../../shared/Components/Chart/Chart';
import './ExpenseChart.css'

const getMonths = () => {
    const months = [];

    for (let index = 0; index < 12; index++) {
        const newDate = new Date(new Date().getFullYear(), index);
        months.push(newDate.toLocaleString({}, { month: 'short'}));
    }

    return months;
}

const getDataPoints = (expenses) => {
    let dataPoints = null;

    dataPoints = getMonths().map(month => ({ label: month, value: 0}));

    expenses.forEach(expense => {
        const monthIndex = expense.date.getMonth();
        dataPoints[monthIndex].value += expense.amount;
    });

    return dataPoints;
};

const ExpenseChart = props => {    
    const points = getDataPoints(props.expenses);

    return <Chart dataPoints={points}></Chart>
};

export default ExpenseChart;