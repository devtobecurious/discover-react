import './ChartBar.css';

const ChartBar = props => {
    let fillHeight = '0%';

    if (props.maxValue && props.maxValue > 0) {
        fillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    const fillStyle = {
        height: fillHeight
    };

    return (
        <div className="progress progress-bar-vertical">
            <div className="progress-bar" role="progressbar" style={fillStyle}>
            </div>
            <div className='label'>
                {props.label}
            </div>
        </div>
    );
};

export default ChartBar;