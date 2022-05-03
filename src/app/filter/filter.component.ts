import { HtmlParser } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { filterParameters } from '../SharedModel/FilterParameters.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})


export class FilterComponent implements OnInit {

  constructor(private elRef:ElementRef) {}

  FilterParameters!:filterParameters;

  CatagoryList:string[] =  ['Mobile','Laptop','Toys'] ;
  
  PriceList :number[] = [2000,4000,7000,10000,13000,16000,20000,25000,30000,50000] ;
  MaxPriceList:number[] = [2000,4000,7000,10000,13000,16000,20000,25000,30000,50000] ;
  
  BrandList:string[] = ['Apple','Mi','Samsung','OnePlus','Vivo','Oppo','Nokia'] ;
   
  CustomerRatingList:number[] = [4,3,2,1] ; // 4 and above

  //GST bill available

  RAMList:number[] = [2,3,4,6,8] ;

  InternalStorageList :number[]=[16,32,64,128,256];

  BattaryCapacityList:number[] = [1000,2000,3000,4000,5000,6000] ;

  ScreenSizeList:number[]=[3,3.5, 4,4.5, 5,5.5, 6,6.5] ;
  
  BackCameraList:number[] = [5,8,12,16,21,32,48,64] ;

  FrontCameraList:number[] = [5,8,12,16,21,32,48,64] ;

  ProcessorBrandList:string[] = ['Snapdragon','Mediatek','ARM','RDA','Unisoc','Spreadtrum'] ;

  SpecialityList:string[] = ['Big Storage','Higher Perfomance','Long-Lasting Battery','Selfie Camera'] ;

  ResolutionTypeList:string[] = ['Full HD','Full HD+','HD','HD+','Full HD+ AMOLED','Full HD+ E3 Super AMOLED','FWVGA','HQVGA','Quad HD'] ;

  OperatingSystemList:string[] = ['Android','iOS'] ;

  NetworkTypeList:number[] = [2,3,4,5] ;

  SimTypeList:string[] = ['Dual Sim','Single Sim'] ;

  OffersList:string[] = ['Special Price','Buy More, Save More'] ;

  BudgetList:number[]= [5000,10000,15000,20000,30000] ;
 
  FeaturesList:string[] = ['WiFi','HD Recording','FM Player','NFC','Music Player','Blutooth'] ;
 
  MobileTypeList:string[] = ['SmartPhone','Feature Phone'];

  NumberOfCoresList:string[]=['Dual Core','Hexa Core','Octa Core','Quad Core','Single Core'] ;

 // Availability

  DiscountList:number[] =[10,20,30,40,50] ;

  OperatingSystemVersionList:string[] = ['Andriod Q','Jelly Bean','KitKat','Lollipop','Marshmallow','Nougat','Oreo','Pie'] ;

  ClockSpeedList:number[] = [1.5,2,2.2,2.5] ;


  ngOnInit(): void {

    this.FilterParameters = new filterParameters();
    
  }

  
  // have the List of Attributes we want to F
  

  curMinPrice:any=0;
  OnChangeMinPrice(){
    this.MaxPriceList=[];
    if(this.curMinPrice=='Min') this.MaxPriceList=this.PriceList.slice() ;
    else{
      for(let i=0;i<this.PriceList.length;i++)
         {
       if(this.PriceList[i] > this.curMinPrice) this.MaxPriceList.push(this.PriceList[i]) ;
     
         }
    }}


    FilterNow(){
      const minPriceEle:string = this.elRef.nativeElement.querySelector('#minPrice').value ;
      const maxPriceEle:string = this.elRef.nativeElement.querySelector('#maxPrice').value   ;
    
      console.log(minPriceEle)

      const minPrice:number = minPriceEle != 'Min' ? +minPriceEle:-1 ;
      const maxPrice:number = maxPriceEle != 'Max' ? +maxPriceEle:Number.MAX_SAFE_INTEGER ; ;

      
      const brandNameCheckList = this.elRef.nativeElement.querySelectorAll('#inputBrandList');
      const brandNameLabelList = this.elRef.nativeElement.querySelectorAll('#labelBrandList') ;
   
       for(let i=0;i<brandNameCheckList.length;i++){
          if(brandNameCheckList[i].checked) this.FilterParameters.BrandList.push(brandNameLabelList[i].innerText) ;
       }

// ---------------------------------------
       const CustomerRatingListCheckList = this.elRef.nativeElement.querySelectorAll('#inputCustomerRatingList');
      const CustomerRatingListLabelList = this.elRef.nativeElement.querySelectorAll('#labelCustomerRatingList') ;

       for(let i=0;i<CustomerRatingListCheckList.length;i++){
          if(CustomerRatingListCheckList[i].checked) 
          this.FilterParameters.CustomerRatingList.push(CustomerRatingListLabelList[i].innerText) ;
       }

// -------------

   const isGstInvoiceAvailable = this.elRef.nativeElement.querySelector('#inputGSTInvoice');
   const isPhoneWalaAssured = this.elRef.nativeElement.querySelector('#inputAsssured');
   if(isGstInvoiceAvailable.checked) this.FilterParameters.isGstInvoiceAvailable=true;
   if(isPhoneWalaAssured.checked) this.FilterParameters.isPhoneWalaAssured=true;



       // ---------------------------------------
       const RAMListCheckList = this.elRef.nativeElement.querySelectorAll('#inputRAMList');
      const RAMListLabelList = this.elRef.nativeElement.querySelectorAll('#labelRAMList') ;

       for(let i=0;i<RAMListCheckList.length;i++){
          if(RAMListCheckList[i].checked) 
          this.FilterParameters.RAMList.push(RAMListLabelList[i].innerText) ;
       }

         // ---------------------------------------
         const InternalStorageCheckList = this.elRef.nativeElement.querySelectorAll('#inputInternalStorageList');
         const InternalStorageList = this.elRef.nativeElement.querySelectorAll('#labelInternalStorageList') ;
   
          for(let i=0;i<InternalStorageCheckList.length;i++){
             if(InternalStorageCheckList[i].checked) {
             let temp = InternalStorageList[i].innerText ;
             var re = /GB/gi; 
             
             temp = temp.replace(re,'').replace(/\s/g,'')
             this.FilterParameters.InternalStorageRange.push(temp) ;
          }}


           // ---------------------------------------
         const BattaryCapacityCheck = this.elRef.nativeElement.querySelectorAll('#inputBattaryCapacityList');
         const BattaryCapacityLabel = this.elRef.nativeElement.querySelectorAll('#labelBattaryCapacityList') ;
   
          for(let i=0;i<BattaryCapacityCheck.length;i++){
             if(BattaryCapacityCheck[i].checked) {
             let temp = BattaryCapacityLabel[i].innerText ;
             var re = /mAh/gi; 
             
             temp = temp.replace(re,'').replace(/\s/g,'')
             this.FilterParameters.InternalStorageRange.push(temp) ;
          }}
        
          
    
          console.log(this.FilterParameters)

}



}
