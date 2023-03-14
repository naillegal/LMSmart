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
    