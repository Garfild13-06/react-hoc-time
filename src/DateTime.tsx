import withPrettyDate from "./withPrettyDate";

// Компонент DateTime
function DateTime({ date }: { date: string }) {
  return <p className="date">{date}</p>;
}

// Оборачиваем DateTime в HOC
const DateTimePretty = withPrettyDate(DateTime);

export default DateTimePretty;