import ChartBar from "./ChartBar/ChartBar";
import './Chart.css';

const Chart = props => {
    const chartBars = props.dataPoints.map(item => <ChartBar key={item.id} value={item.value} maxValue={null} label={item.label} />);

    return (
        <div className="chart">
            {chartBars}
        </div>
    );
}

export default Chart;