import './ChartBar.css';

const ChartBar = props => {
    let fillHeight = '0%';

    if (props.max && props.max > 0) {
        fillHeight = Math.round((props.value / props.max) * 100) + '%';
    }

    const fillStyle = {
        height: fillHeight,
        backgroundColor: 'grey'
    };

    return (
        <div className='chart-bar' > 
            <div className='inner'>
                <div className='fill' style={fillStyle}>

                </div>
            </div>
            <div className='label'>

            </div>
        </div>
    );
};

export default ChartBar;