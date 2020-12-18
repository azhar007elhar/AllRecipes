import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  recipesCategory: any ; 

  constructor() {

    this.recipesCategory = {
      isBeginningSlide: true,
      isEndSlide: false,
      items: [
        {
          name : 'Cakes & Pancakes' ,
          image: 'assets/img/C1.jpg'
        },
        {
          name : 'Sweets & Halwa',
          image: 'assets/img/C1.jpg'
        },
        {
          name : 'Chinese & Italian',
          image: 'assets/img/C3.jpg'
        },
        {
          name : 'Kebab & Parathas',
          image: 'assets/img/C1.jpg'
        },
        {
          name : 'Sea food',
          image: 'assets/img/C1.jpg'
        },
        {
          name : 'Drinks',
          image: 'assets/img/C1.jpg'
        }
      ]
     }


  }

}
