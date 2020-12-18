import { Component } from '@angular/core';
import { AdmobService } from '../services/admob.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  recipes: any ; 


  
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

      ]
    }


    this.recipes.items = this.recipes.items.filter(rec => rec.favorite == 1 );
    console.log(this.recipes.items);
    

  }


  toggleDarkMode = () => {
    document.body.classList.toggle('dark');
  }



}
