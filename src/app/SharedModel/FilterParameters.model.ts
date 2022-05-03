


export class filterParameters{

 PriceRange:string = '' ;
 BrandList:string[]=[] ;
 CustomerRatingList:number[] = [];
 isPhoneWalaAssured:boolean=false;
 isGstInvoiceAvailable:boolean=false;
 RAMList:number[] = [ ] ;
 InternalStorageRange:string[]=[] ;
 BattaryCapacityRange:string[]=[] ;
 ScreenSizeRange:string[]=[] ;
BackCameraRange:string[]=[] ;
FrontCameraRange:string[]=[] ;
ProcessorBrandList:string[]=[] ; 
SpecialityList:string[]=[] ;
ResolutionTypeList :string[]=[] ;
OperatingSystemList :string[]=[] ;
NetworkTypeList :number[]=[] ;
SIMTypeList :string[]=[] ;
BudgetTypeRange :string[]=[] ;
FeaturesList :string[]=[] ;
MobileTypeList :string[]=[] ;
NumberOfCoresList :string[]=[] ;
isAvailable :boolean = true;
DiscountList :number[]=[] ;
OperatingSystemVersionList:string[]=[] ;
ClockSpeedRange:string[]=[] ;

constructor(BriceRange:string = '' ,
BrandList:string[]=[] ,
CustomerRatingList:number[] = [],
isPhoneWalaAssured:boolean=false,
isGstInvoiceAvailable:boolean=false,
RAMList:number[] = [ ] ,
InternalStorageRange:string[]=[] ,
BattaryCapacityRange:string[]=[] ,
ScreenSizeRange:string[]=[] ,
BackCameraRange:string[]=[] ,
FrontCameraRange:string[]=[] ,
ProcessorBrandList:string[]=[] ,
SpecialityList:string[]=[] ,
ResolutionTypeList :string[]=[] ,
OperatingSystemList :string[]=[] ,
NetworkTypeList :number[]=[] ,
SIMTypeList :string[]=[] ,
BudgetTypeRange :string[]=[] ,
FeaturesList :string[]=[] ,
MobileTypeList :string[]=[] ,
NumberOfCoresList :string[]=[] ,
isAvailable :boolean = true,
DiscountList :number[]=[] ,
OperatingSystemVersionList:string[]=[] ,
ClockSpeedRange:string[]=[] ){

    this.PriceRange= BriceRange
    this.BrandList=BrandList
    this.CustomerRatingList=CustomerRatingList
    this.isPhoneWalaAssured=isPhoneWalaAssured
    this.isGstInvoiceAvailable=isGstInvoiceAvailable
    this.RAMList=RAMList
    this.InternalStorageRange=InternalStorageRange
    this.BattaryCapacityRange=BattaryCapacityRange
    this.ScreenSizeRange=ScreenSizeRange
   this.BackCameraRange=BackCameraRange
   this.FrontCameraRange=FrontCameraRange
   this.ProcessorBrandList=ProcessorBrandList
   this.SpecialityList=SpecialityList
   this.ResolutionTypeList =ResolutionTypeList
   this.OperatingSystemList=OperatingSystemList 
   this.NetworkTypeList =NetworkTypeList
   this.SIMTypeList =SIMTypeList
   this.BudgetTypeRange =BudgetTypeRange
   this.FeaturesList= FeaturesList
   this.MobileTypeList =MobileTypeList
   this.NumberOfCoresList= NumberOfCoresList
   this.isAvailable =isAvailable
   this.DiscountList =DiscountList
   this.OperatingSystemVersionList=OperatingSystemVersionList
   this.ClockSpeedRange=ClockSpeedRange

}


}