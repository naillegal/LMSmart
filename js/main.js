let menuicon = document.querySelector('#responsive-header .menuicon i')
let clickmenu = document.querySelector('.clickmenu')
let body = document.querySelector('body')
let dropicon1 = document.querySelector('.clickmenu .clickhome a .i1')
let dropicon2 = document.querySelector('.clickmenu .clickcourses a .i2')
let dropicon3 = document.querySelector('.clickmenu .clickblog a .i3')
let dropicon4 = document.querySelector('.clickmenu .clickpages a .i4')
let clickhome = document.querySelector('.clickmenu .clickhome .clickhome-dropped')
let clickcourses = document.querySelector('.clickmenu .clickcourses .clickcourses-dropped')
let clickblog = document.querySelector('.clickmenu .clickblog .clickblog-dropped')
let clickpages = document.querySelector('.clickmenu .clickpages .clickpages-dropped')

menuicon.addEventListener('click', function () {
    clickmenu.classList.toggle('active')
    this.classList.toggle('activerot')
})

dropicon1.addEventListener('click', function () {
    clickhome.classList.toggle('active2')
})

dropicon2.addEventListener('click', function () {
    clickcourses.classList.toggle('active3')
})

dropicon3.addEventListener('click', function () {
    clickblog.classList.toggle('active4')
})

dropicon4.addEventListener('click', function () {
    clickpages.classList.toggle('active5')
})



let valueDisplays = document.querySelectorAll('.num');
let interval = 2000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-val'));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});


let allclick = document.querySelector('.allclick')
let cookingclick = document.querySelector('.cookingclick')
let financeclick = document.querySelector('.financeclick')
let lifestyleclick = document.querySelector('.lifestyleclick')
let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let box4 = document.querySelector('.box4')


allclick.onclick = () => {
    box1.style.display = 'block';
    box2.style.display = 'block';
    box3.style.display = 'block';
    box4.style.display = 'block';
    allclick.style.color = '#3bbca7';
    cookingclick.style.color = financeclick.style.color = lifestyleclick.style.color = '#141948';
};

cookingclick.onclick = () => {
    box1.style.display = 'block';
    box2.style.display = 'block';
    box3.style.display = 'block';
    box4.style.display = 'none';
    cookingclick.style.color = '#3bbca7';
    allclick.style.color = financeclick.style.color = lifestyleclick.style.color = '#141948';
};

financeclick.onclick = () => {
    box1.style.display = box2.style.display = 'none';
    box3.style.display = 'block';
    box4.style.display = 'none';
    financeclick.style.color = '#3bbca7';
    allclick.style.color = cookingclick.style.color = lifestyleclick.style.color = '#141948';
};

lifestyleclick.onclick = () => {
    box1.style.display = 'none';
    box2.style.display = box3.style.display = box4.style.display = 'block';
    lifestyleclick.style.color = '#3bbca7';
    allclick.style.color = cookingclick.style.color = financeclick.style.color = '#141948';
};

//  slider start 
const carousel = document.querySelector("#slider .carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; 
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; 
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); 
    });
});
const autoSlide = () => {
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); 
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft) { 
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
// slider end 