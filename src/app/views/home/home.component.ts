import { Component, OnInit } from '@angular/core';
// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import SwiperCore, { SwiperOptions } from 'swiper';
import { SwiperComponent } from "swiper/angular";
import * as AOS from 'aos'
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper';
SwiperCore.use([Autoplay])

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faStar = faStar
  list = ["Hello Everyone.!","I'm Mohamed Sabry","I'm Frontend Developer", "I'm Freelancer"]
  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 50,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    loop:true,
    autoplay:{
      delay:3000
    },
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
        // spaceBetween: 20
      },
      // when window width is >= 320px
      750: {
        slidesPerView: 2,
        // spaceBetween: 20
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3,
        // spaceBetween: 10
      }
    }
  };
  onSwiper(swiper:[]) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change');
  }

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }

}
