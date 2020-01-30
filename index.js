const secondsHand = document.getElementById("second");
const minutesHand = document.getElementById("minute");
const hoursHand = document.getElementById("hour");

function countTime() {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  console.log(hours + ":" + minutes + ":" + seconds);
}
const t = setInterval(countTime, 1000);
