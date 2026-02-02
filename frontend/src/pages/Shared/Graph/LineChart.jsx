import mod from './__index__.module.scss';

const LineChart = ({
  data = [],
  max = 100,
  height = 200,
  width = 500,
}) => {
  if (!data.length) return null;

  const stepX = width / (data.length - 1);

  const points = data
    .map((item, index) => {
      const x = index * stepX;
      const y = height - (item.value / max) * height;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className={mod.linechart}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
      >
        {/* line */}
        <polyline
          points={points}
          className={mod.line}
        />

        {/* dots */}
        {data.map((item, index) => {
          const x = index * stepX;
          const y = height - (item.value / max) * height;

          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="4"
              className={mod.dot}
            >
              <title>{item.value}</title>
            </circle>
          );
        })}
      </svg>

      {/* labels */}
      <div className={mod.labels}>
        {data.map((item, index) => (
          <span key={index}>{item.label}</span>
        ))}
      </div>
    </div>
  );
};

export default LineChart;
