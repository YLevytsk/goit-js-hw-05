const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender) // фильтруем пользователей по полу
    .map(user => user.balance) // получаем массив балансов пользователей
    .reduce((total, balance) => total + balance, 0); // суммируем балансы
};

console.log(getTotalBalanceByGender(clients, "male"));  // 12053
console.log(getTotalBalanceByGender(clients, "female"));  // 8863
