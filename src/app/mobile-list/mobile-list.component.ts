import { Component, OnInit } from '@angular/core';
import { mobileListService } from '../services/mobile-list.service';
import { MobileSpecification } from '../SharedModel/Mobile-Details.model';


@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})
export class MobileListComponent implements OnInit {

  constructor(private mobileListService:mobileListService
    ){ }

  mobileList:MobileSpecification[] = [] ;
  
  ngOnInit(): void 
  {
    this.mobileList=this.mobileListService.getMobileList();
  }

  SortPopularity(){
    this.mobileList.sort((m1,m2)=> m1.customerRating > m2.customerRating ? -1: m1.customerRating < m2.customerRating ? 1:0) ;
  }

  SortPriceHighToLow(){
    this.mobileList.sort((m1,m2)=> m1.price < m2.price ? 1: m1.price > m2.price ? -1:0) ;
  }

  SortPriceLowtoHigh(){
    this.mobileList.sort((m1,m2)=> m1.price < m2.price ? -1: m1.price > m2.price ? 1:0) ;
  }

  

}
