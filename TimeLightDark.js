const timeEl = document.querySelector(".time");
const btnToggle = document.querySelector(".toggle");

const setTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    timeEl.innerHTML = `${hours}:
    ${minutes<10 ? `0${minutes}` : minutes}
    :${seconds<10 ? `0${seconds}` : seconds}`;
}

btnToggle.addEventListener('click', (e) =>{
    const html = document.querySelector('html')

    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        e.target.innerHTML = "DarkMode"
    }else{
        html.classList.add("dark")
        e.target.innerHTML = "LightMode"
    }
})

setTime();

setInterval(setTime, 1000);