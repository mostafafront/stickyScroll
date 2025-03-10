const section = document.querySelector("section")
const slider2 = document.querySelector("#slider2")
const sliders = [...document.querySelectorAll(".slider")];

const animateArr = ["slider2 .7s ease-in-out", "blurTxt .7s ease-in-out"]

section.onscroll = (e) => {
    sliders.forEach((item, index) => {
        if (item.getBoundingClientRect().top == 0) {
                item.firstElementChild.style.animation = animateArr[index];
        } else {
            item.firstElementChild.style.animation = '';
        }
    })
}