import mod from './__index__.module.scss';

const BarChart = ({ data = [], max = 100 }) => {
  return (
    <div className={mod.chart}>
      {data.map((item, index) => {
        const height = (item.value / max) * 100;

        return (
          <div key={index} className={mod.barWrapper}>
            <div className={mod.barContainer}>
              <div
                className={mod.bar}
                style={{ height: `${height}%` }}
                title={item.value}
              />
            </div>
            <span className={mod.label}>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default BarChart;
