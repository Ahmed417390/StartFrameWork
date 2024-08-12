import { Component } from '@angular/core';

@Component({
  selector: 'app-potfolio',
  standalone: true,
  imports: [],
  templateUrl: './potfolio.component.html',
  styleUrl: './potfolio.component.css'
})
export class PotfolioComponent {
   imgSrc:string=""
    isClick:boolean=false
    open(mainImg:string){
      this.isClick=true
      this.imgSrc=mainImg
    }
    close(){
      this.isClick=false

    }
}
