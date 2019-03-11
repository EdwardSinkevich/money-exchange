module.exports = function makeExchange(currency) {
  let moneyObj = {};
  if (currency === 0) {
    return moneyObj;
  }
  if (currency >= 10000) {
    moneyObj.error = "You are rich, my friend! We don't have so much coins for exchange";
    return moneyObj;
  }
  if (parseInt(currency / 50) > 0) {
    moneyObj.H = parseInt(currency / 50);
    currency = currency % 50;
  }
  if (parseInt(currency / 25) > 0) {
    moneyObj.Q = parseInt(currency / 25);
    currency = currency % 25;
  }
  if (parseInt(currency / 10) > 0) {
    moneyObj.D = parseInt(currency / 10);
    currency = currency % 10;
  }
  if (parseInt(currency / 5) > 0) {
    moneyObj.N = parseInt(currency / 5);
    currency = currency % 5;
  }
  if (parseInt(currency / 1) > 0) {
    moneyObj.P = parseInt(currency / 1);
  }
  return moneyObj;
}
