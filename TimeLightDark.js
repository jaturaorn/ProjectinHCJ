const timeEl = document.querySelector(".time");

const setTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    timeEl.innerHTML = `${hours}:
    ${minutes<10 ? `0${minutes}` : minutes}
    :${seconds<10 ? `0${seconds}` : seconds}`;
}

setTime();

setInterval(setTime, 1000);