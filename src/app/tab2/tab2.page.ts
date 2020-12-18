import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  recipes: any;
  constructor() {

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
          favorite: '0'
        }
        ,
        {
          name: 'Barbeque Sandwiches',
          time: 25,
          image: 'assets/img/R1.jpg',
          category: 'Food',
          favorite: '0'
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
        },
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
        },
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


}
