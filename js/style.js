alert("Assalomu aleykum hurmatli mijoz");
firstName = prompt("Ismingizni kiriting:");
alert("'Enjoy!' sayohat agentligimizga Xush kelibsiz " + firstName);
alert("Sayohat uchun borib-kelish: 500$");
alert("Mehmonxona to’lovi to’liq safar uchun: $250");
alert("Muzey va ko’ngilochar joylar uchun: 120 €");
var planeUsd = 500;
var hotelUsd = 250;
var museumEuro = 120;
var usdToUzs = 9433.34;
var euroToUzs = 10354.03;
var planehoteltotal = planeUsd + hotelUsd;
var totalExpance = planehoteltotal * usdToUzs + museumEuro * euroToUzs;
alert("Minibal mablag': 8.317.500 soms");
var amountMoney = prompt("Mablag'ingizni kiriting:");
var textEl = document.querySelector(`.mytext`);
if (totalExpance <= amountMoney && amountMoney < 10000000000000) {
  textEl.textContent = `Xurmatli mijoz sayohatingizga oq yo'l tilaymiz!`;
} else {
  textEl.textContent = `Xurmatli mijoz sizning mablag'ingiz sayohat uchun yetarli emas!`;
}
