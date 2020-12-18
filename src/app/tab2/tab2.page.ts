import { Component } from '@angular/core';
import { AdmobService } from '../services/admob.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  recipes: any;
  constructor(
    private AdmobService: AdmobService
  ) {

    this.AdmobService.showBottomBanner();

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
