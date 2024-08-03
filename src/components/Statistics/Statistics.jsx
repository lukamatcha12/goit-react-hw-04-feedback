import './Statistics.css';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p className="review-stats">
        Good: <span>{good}</span>
      </p>
      <p className="review-stats">
        Neutral: <span>{neutral}</span>
      </p>
      <p className="review-stats">
        Bad: <span>{bad}</span>
      </p>
      <p className="review-stats">
        Total: <span>{total}</span>
      </p>
      <p className="review-stats">
        Percentage: <span>{positivePercentage}%</span>
      </p>
    </div>
  );
};
