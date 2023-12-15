import slide1 from '../images/slide1.png';
import slide2 from '../images/slide2.png';
import slide3 from '../images/slide3.png';
import slide4 from '../images/slide4.png';
import slide5 from '../images/slide5.png';

export default function renderSlider(width) {
    const sliderElement = document.getElementById("slider")

    sliderElement.innerHTML =
        `<div class="sliderContainer">
    <div class="slider_heading">
        <h2>Корпоративная жизнь</h2>
        <div class="arrows">
            <svg data-dir="left" xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"
                 fill="none">
                <rect width="56" height="56" rx="28" transform="matrix(-1 0 0 1 56 0)" fill="#F0F0F0"/>
                <path d="M33 18L23 28L33 38" stroke="#A30C33" stroke-width="2"/>
            </svg>
            <svg data-dir="right" xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"
                 fill="none">
                <rect width="56" height="56" rx="28" fill="#F0F0F0"/>
                <path d="M23 18L33 28L23 38" stroke="#A30C33" stroke-width="2"/>
            </svg>
        </div>
    </div>
    <div class="slider">
        <div class="wrapper">
            <img src="${slide1}" alt="Image 1">
            <img src="${slide2}" alt="Image 2">
            <img src="${slide3}" alt="Image 3">
            <img src="${slide4}" alt="Image 4">
            <img src="${slide5}" alt="Image 5">
        </div>
    </div>
    <div class="dots">
        <div class="dot" data-id="1"></div>
        <div class="dot" data-id="2"></div>
        <div class="dot" data-id="3"></div>
        <div class="dot" data-id="4"></div>
        <div class="dot" data-id="5"></div>
    </div>
</div>`


    const slider = sliderElement.querySelector(".slider")
    const wrapper = slider.getElementsByClassName("wrapper")[0]
    const arrows = sliderElement.querySelectorAll(".arrows svg")
    const dots = sliderElement.querySelectorAll(".dot")
    const images = wrapper.querySelectorAll("img")

    const sliderLength = 5
    let INDEX = 0
    let sliderWidth = width

    dots[0].style.backgroundColor = "#A30C33"
    setSlider()

    window.addEventListener("resize", () => {
        switch (true) {
            case window.innerWidth < 640:
                sliderWidth = 360;
                wrapper.style.transform = ""
                break;
            case window.innerWidth < 768:
                sliderWidth = 600;
                wrapper.style.transform = ""
                break;
            case window.innerWidth < 1024:
                sliderWidth = 750;
                wrapper.style.transform = `translateX(${-sliderWidth * INDEX}px)`
                break;
            default:
                sliderWidth = 960;
                wrapper.style.transform = `translateX(${-sliderWidth * INDEX}px)`
                break;
        }
        setSlider()
    })

    function setSlider() {
        slider.style.width = sliderWidth + "px"
        images.forEach(image => {
            image.style.width = sliderWidth + "px"
        })
    }

    function moveSlider(dir) {
        switch (dir) {
            case "left":
                INDEX = Math.max(0, INDEX - 1)
                break
            case "right":
                INDEX = Math.min(sliderLength - 1, INDEX + 1)
                break
        }
        wrapper.style.transform = `translateX(${-sliderWidth * INDEX}px)`
        dots.forEach(dot => {
            if (+dot.dataset.id === INDEX + 1) {
                dot.style.backgroundColor = "#A30C33"
            } else {
                dot.style.backgroundColor = "rgba(0, 0, 0, 0.1)"
            }
        })
    }

    arrows.forEach(arrow => {
        arrow.addEventListener("click", (e) => {
            const dir = e.currentTarget.dataset.dir
            moveSlider(dir)
        })
    })

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            INDEX = dot.dataset.id - 1
            wrapper.style.transform = `translateX(${-sliderWidth * INDEX}px)`
            dots.forEach(dot => {
                dot.style.backgroundColor = "rgba(0, 0, 0, 0.1)"
            })
            dot.style.backgroundColor = "#A30C33"
        })
    })
}
