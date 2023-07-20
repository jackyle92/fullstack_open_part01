import StatisticLine from "../statisticLine.component/statisticLine.component";

const Statistics = (props) => {
  const { total, good, bad, neutral } = props;
  if (total > 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <StatisticLine text="Good" value={good}></StatisticLine>
        <StatisticLine text="Neutral" value={neutral}></StatisticLine>
        <StatisticLine text="Bad" value={bad}></StatisticLine>
        <StatisticLine text="Total" value={total}></StatisticLine>

        <StatisticLine
          text="Average"
          value={(good - bad) / total}
        ></StatisticLine>
        <StatisticLine
          text="Positive"
          value={Math.round((good / total) * 100, 1) + "%"}
        ></StatisticLine>
      </div>
    );
  } else {
    return (
      <div>
        <h2>No feedback given</h2>
      </div>
    );
  }
};

export default Statistics;
