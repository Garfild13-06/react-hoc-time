// src/withPrettyDate.tsx
import React from "react";
import moment from "moment";

// Типизация пропсов для компонента DateTime
interface DateTimeProps {
  date: string;
}

function withPrettyDate<T extends DateTimeProps>(
  WrappedComponent: React.ComponentType<T>
): React.FC<T> {
  return function PrettyDateComponent(props: T) {
    const { date } = props;

    // Преобразование даты
    const formatRelativeTime = (date: string): string => {
      const now = moment();
      const videoDate = moment(date);

      const diffInSeconds = now.diff(videoDate, "seconds");
      const diffInMinutes = now.diff(videoDate, "minutes");
      const diffInHours = now.diff(videoDate, "hours");
      const diffInDays = now.diff(videoDate, "days");
      const diffInMonths = now.diff(videoDate, "months");
      const diffInYears = now.diff(videoDate, "years");

      if (diffInYears > 0) {
        return `${diffInYears} ${getPluralForm(diffInYears, "год", "года", "лет")} назад`;
      } else if (diffInMonths > 0) {
        return `${diffInMonths} ${getPluralForm(diffInMonths, "месяц", "месяца", "месяцев")} назад`;
      } else if (diffInDays > 0) {
        return `${diffInDays} ${getPluralForm(diffInDays, "день", "дня", "дней")} назад`;
      } else if (diffInHours > 0) {
        return `${diffInHours} ${getPluralForm(diffInHours, "час", "часа", "часов")} назад`;
      } else if (diffInMinutes > 0) {
        return `${diffInMinutes} ${getPluralForm(diffInMinutes, "минута", "минуты", "минут")} назад`;
      } else if (diffInSeconds > 0) {
        return `${diffInSeconds} ${getPluralForm(diffInSeconds, "секунда", "секунды", "секунд")} назад`;
      } else {
        return "только что";
      }
    };

    // Функция для правильного склонения слов
    const getPluralForm = (
      count: number,
      one: string,
      few: string,
      many: string
    ): string => {
      if (count % 10 === 1 && count % 100 !== 11) {
        return one;
      } else if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
        return few;
      } else {
        return many;
      }
    };

    const prettyDate = formatRelativeTime(date);

    // Передаем новое значение даты в обёрнутый компонент
    return <WrappedComponent {...props} date={prettyDate} />;
  };
}

export default withPrettyDate;