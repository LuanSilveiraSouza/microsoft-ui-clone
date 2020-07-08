window.onload = () => {
  const slider = document.querySelector('#slider')
  const sliderBtn = document.querySelectorAll('.slider-btn')
  const slide1 = document.querySelector('#slide1')
  const slide2 = document.querySelector('#slide2')
  
  sliderBtn[0].classList.add('hide')
  sliderBtn[1].classList.add('hide')

  slide1.classList.add('slide-active')
  slide2.classList.add('hide')
  
  slider.addEventListener("mouseover", () => {
    sliderBtn[0].classList.remove('hide')
    sliderBtn[1].classList.remove('hide')

    sliderBtn[0].classList.add('show')
    sliderBtn[1].classList.add('show')
  })
  
  slider.addEventListener('mouseout', () => {
    sliderBtn[0].classList.remove('show')
    sliderBtn[1].classList.remove('show')

    sliderBtn[0].classList.add('hide')
    sliderBtn[1].classList.add('hide')
  })

  sliderBtn[0].addEventListener('click', () => switchSlide())
  sliderBtn[1].addEventListener('click', () => switchSlide())

  function switchSlide () {
    if (slide1.classList.contains('slide-active')) {
      slide1.classList.remove('slide-active')
      slide1.classList.add('hide')
      slide2.classList.remove('hide')
      slide2.classList.add('slide-active')
    } else if (slide2.classList.contains('slide-active')) {
      slide2.classList.remove('slide-active')
      slide2.classList.add('hide')
      slide1.classList.remove('hide')
      slide1.classList.add('slide-active')
    }
  }
}
