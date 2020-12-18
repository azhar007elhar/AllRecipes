import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AdmobService } from '../services/admob.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {




  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;
  @ViewChild('slideWithNav4', { static: false }) slideWithNav4: IonSlides;

  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;
  recipes: any;
  recipesCategory: any;
  recipesLatest: any;

  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20
  };
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 3
  };

  constructor(
    private AdmobService: AdmobService
  ) {

    this.AdmobService.showBottomBanner();

    this.recipesLatest = {
      isBeginningSlide: true,
      isEndSlide: false,
      items: [
        {
          name: 'Chicken White Rice',
          image: 'assets/img/R1.jpg'
        },
        {
          name: 'Cocoa Sponge Cake',
          image: 'assets/img/C2.png'
        },
        {
          name: 'Cocoa Sponge Cake',
          image: 'assets/img/C2.png'
        },
        {
          name: 'Cocoa Sponge Cake',
          image: 'assets/img/C2.png'
        },
      ]
    }

    this.recipesCategory = {
      isBeginningSlide: true,
      isEndSlide: false,
      items: [
        {
          name: 'Cakes & Pancakes',
          image: 'assets/img/C1.jpg'
        },
        {
          name: 'Sweets & Halwa',
          image: 'assets/img/C1.jpg'
        },
        {
          name: 'Chinese & Italian',
          image: 'assets/img/C3.jpg'
        },
        {
          name: 'Kebab & Parathas',
          image: 'assets/img/C1.jpg'
        },
        {
          name: 'Sea food',
          image: 'assets/img/C1.jpg'
        },
        {
          name: 'Drinks',
          image: 'assets/img/C1.jpg'
        }
      ]
    }

    this.recipes = {
      isBeginningSlide: true,
      isEndSlide: false,
      items: [
        {
          name: 'Barbeque Sandwiches',
          time: 25,
          image: 'assets/img/R1.jpg',
          category: 'Food',
          favorite: '1'
        },
        {
          name: 'Barbeque Sandwiches',
          time: 25,
          image: 'assets/img/R1.jpg',
          category: 'Food',
          favorite: '1'
        }
        ,
        {
          name: 'Barbeque Sandwiches',
          time: 25,
          image: 'assets/img/R1.jpg',
          category: 'Food',
          favorite: '1'
        }
        ,
        {
          name: 'Barbeque Sandwiches',
          time: 25,
          image: 'assets/img/R1.jpg',
          category: 'Food',
          favorite: '1'
        }

      ]
    }

  }


  toggleDarkMode = () => {
    document.body.classList.toggle('dark');
  }


  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

}