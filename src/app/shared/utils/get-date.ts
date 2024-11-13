export const getDate = (date: string) => {
  const currentDate = new Date();
  const resDate = new Date(date);

  const hour = resDate.getHours();
  const minute = resDate.getMinutes();
  const second = resDate.getSeconds();

  const day = resDate.getDate();
  const month = resDate.getMonth() + 1;
  const year = resDate.getFullYear();

  const diffInMilliseconds = currentDate.getTime() - resDate.getTime();
  const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);

  if (diffInMinutes < 1) {
    return "Только что"; // "Just now"
  }

  if (diffInMinutes < 60) {
    return `${diffInMinutes} минут назад`; // "X minutes ago"
  }

  if (diffInHours < 5) {
    return `${diffInHours} часа назад`; // "X hours ago"
  }

  // return `${Math.floor(diffInHours / 24)} дней назад`; // "X days ago"
  return `${day}.${month}.${year}`; // "X days ago"
};
