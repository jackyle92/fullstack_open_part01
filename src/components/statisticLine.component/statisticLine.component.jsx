import "./statisticLine.component.css";

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default StatisticLine;
