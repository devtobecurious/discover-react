import ChartBar from "./ChartBar/ChartBar";
import './Chart.css';

const Chart = props => {
    const values = props.dataPoints.map(item => item.value);
    const max = Math.max(...values);

    const chartBars = props.dataPoints.map(item => <ChartBar key={item.label} value={item.value} maxValue={max} label={item.label} />);

    return (
        <div className="chart">
            {chartBars}
        </div>
    );
}

export default Chart;