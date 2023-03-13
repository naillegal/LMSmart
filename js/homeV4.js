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




let clickall = document.querySelector('#tutorials .textbox ul .clickall')
let clickcooking = document.querySelector('#tutorials .textbox ul .clickcooking')
let clickfinance = document.querySelector('#tutorials .textbox ul .clickfinance')
let clicklifestyle = document.querySelector('#tutorials .textbox ul .clicklifestyle')
let box1 = document.querySelector('#tutorials .box1')
let box2 = document.querySelector('#tutorials .box2')
let box3 = document.querySelector('#tutorials .box3')
let box4 = document.querySelector('#tutorials .box4')
let box5 = document.querySelector('#tutorials .box5')
let box6 = document.querySelector('#tutorials .box6')
let box7 = document.querySelector('#tutorials .box7')
let box8 = document.querySelector('#tutorials .box8')


clickall.onclick = () => {
    box1.style.display = 'block';
    box2.style.display = 'block';
    box3.style.display = 'block';
    box4.style.display = 'block';
    box5.style.display = 'block';
    box6.style.display = 'block';
    box7.style.display = 'block';
    box8.style.display = 'block';
    clickall.style.color = '#3bbca7';
    clickcooking.style.color = clickfinance.style.color = clicklifestyle.style.color = '#141948';
};
clickcooking.onclick = () => {
    box1.style.display = 'block';
    box2.style.display = 'block';
    box3.style.display = 'block';
    box4.style.display = 'none';
    box5.style.display = 'none';
    box6.style.display = 'none';
    box7.style.display = 'block';
    box8.style.display = 'block';
    clickcooking.style.color = '#3bbca7';
    clickall.style.color = clickfinance.style.color = clicklifestyle.style.color = '#141948';
};
clickfinance.onclick = () => {
    box1.style.display = 'none';
    box2.style.display = 'none';
    box3.style.display = 'block';
    box4.style.display = 'none';
    box5.style.display = 'block';
    box6.style.display = 'block';
    box7.style.display = 'block';
    box8.style.display = 'block';
    clickfinance.style.color = '#3bbca7';
    clickall.style.color = clickcooking.style.color = clicklifestyle.style.color = '#141948';
};
clicklifestyle.onclick = () => {
    box1.style.display = 'none';
    box2.style.display = 'block';
    box3.style.display = 'block';
    box4.style.display = 'block';
    box5.style.display = 'block';
    box6.style.display = 'block';
    box7.style.display = 'block';
    box8.style.display = 'block';
    clicklifestyle.style.color = '#3bbca7';
    clickall.style.color = clickcooking.style.color = clickfinance.style.color = '#141948';
};