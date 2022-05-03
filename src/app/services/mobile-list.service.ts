import { BasicFeatures, BatteryPowerFeatures, CameraFeatures, ConnectivityFeatures, DisplayFeatures, 
    general, ManufacturingPackagingImportInfo, MemoryStorageFeatures, MobileSpecification, 
    OsProcessorFeatures, Speciality, WarrantyDetail } from "../SharedModel/Mobile-Details.model";




export class mobileListService
{
   private mobileList:MobileSpecification[] = [
     new MobileSpecification
    ('Mobile','Redmi','https://rukminim2.flixcart.com/image/416/416/ku5ufm80/mobile/s/i/q/sport-9a-redmi-original-imag7chxqqu7h5hs.jpeg?q=70' , 7945,4.3,true,true,true,15,
    new general('Handset, Power Adapter, Micro USB Cable, SIM Insertion Tool, Warranty Card, User Guide','M2006C3LI','Redmi 9A Sport','Coral Green'),
    new DisplayFeatures(6.53,'HD+','1600x720'),
    new OsProcessorFeatures('Android Andriod 11','MediaTek','MediaTek Helio G25','Octa Core','2 Ghz'),
    new MemoryStorageFeatures(32 ,3,512),
    new CameraFeatures('13','5',true),
    new ConnectivityFeatures(4,'4GVoLTE,3G'),
    new BatteryPowerFeatures(5000),
    new WarrantyDetail('1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase'),
    new ManufacturingPackagingImportInfo('India','DBG Technology Pvt. Ltd,plot no-2, secor-8, Bawal District, Rewari, Haryana-123501','DBG Technology Pvt. Ltd,plot no-2, secor-8, Bawal District, Rewari, Haryana-123501'),
    new Speciality(false,true,true,false),
    new BasicFeatures(true,true,true,true,true,true,true)
    ),

    new MobileSpecification
    ('Mobile','Apple','https://rukminim2.flixcart.com/image/416/416/l0igvww0/mobile/y/j/1/-original-imagca5ge9yrbrzq.jpeg?q=70' , 67720,4.2,true,true,true,16,
    new general('Handset, Adapter, USB Type-C Cable, SIM Eject Tool, Protective Case, Quick Start Guide, Warranty Card','M2006C3LI','Apple iPhone 12 Mini','Black Carbon'),
    new DisplayFeatures(6.43,'Full HD+','2400x1080'),
    new OsProcessorFeatures('Android Andriod 11','Snapgragon','Qualcom Snapgragon 720','Octa Core','2.4 Ghz'),
    new MemoryStorageFeatures(128 ,8,512),
    new CameraFeatures('32+8+2+2','16+8',true),
    new ConnectivityFeatures(4,'5G,4GVoLTE,3G'),
    new BatteryPowerFeatures(6000),
    new WarrantyDetail('1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase'),
    new ManufacturingPackagingImportInfo('India','DBG Technology Pvt. Ltd,plot no-2, secor-8, Bawal District, Rewari, Haryana-123501','DBG Technology Pvt. Ltd,plot no-2, secor-8, Bawal District, Rewari, Haryana-123501'),
    new Speciality(false,true,true,false),
    new BasicFeatures(true,true,true,true,true,true,true)
    ),

    new MobileSpecification
    ('Mobile','Vivo','https://rukminim2.flixcart.com/image/416/416/ksj9dow0/mobile/u/f/h/y21-v2111-vivo-original-imag627udzvz3qwt.jpeg?q=70' , 18530,4.2,true,true,true,16,
    new general('Handset, Adapter, USB Type-C Cable, SIM Eject Tool, Protective Case, Quick Start Guide, Warranty Card','M2006C3LI','Vivo Y21','Persian Blue'),
    new DisplayFeatures(6.43,'Full HD+','2400x1080'),
    new OsProcessorFeatures('Android Andriod 11','Snapgragon','Qualcom Snapgragon 720','Octa Core','2.4 Ghz'),
    new MemoryStorageFeatures(128 ,8,512),
    new CameraFeatures('32+8+2+2','16+8',true),
    new ConnectivityFeatures(4,'5G,4GVoLTE,3G'),
    new BatteryPowerFeatures(6000),
    new WarrantyDetail('1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase'),
    new ManufacturingPackagingImportInfo('India','DBG Technology Pvt. Ltd,plot no-2, secor-8, Bawal District, Rewari, Haryana-123501','DBG Technology Pvt. Ltd,plot no-2, secor-8, Bawal District, Rewari, Haryana-123501'),
    new Speciality(false,true,true,false),
    new BasicFeatures(true,true,true,true,true,true,true)
    ),

    new MobileSpecification
    ('Mobile','Redmi','https://rukminim2.flixcart.com/image/416/416/kzhbfrk0/mobile/k/d/j/note-11-2201117ti-redmi-original-imagbh8dmpjfzrjw.jpeg?q=70' , 13530,3.9,true,true,true,5,
    new general('Handset, Adapter, USB Type-C Cable, SIM Eject Tool, Protective Case, Quick Start Guide, Warranty Card','M2006C3LI','Redmi Note 11','Space Black'),
    new DisplayFeatures(6.43,'Full HD+','2400x1080'),
    new OsProcessorFeatures('Android Andriod 11','Snapgragon','Qualcom Snapgragon 720','Octa Core','2.4 Ghz'),
    new MemoryStorageFeatures(64 ,6,512),
    new CameraFeatures('50+8+2+2','16',true),
    new ConnectivityFeatures(4,'4GVoLTE,3G'),
    new BatteryPowerFeatures(5000),
    new WarrantyDetail('1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase'),
    new ManufacturingPackagingImportInfo('India','DBG Technology Pvt. Ltd,plot no-2, secor-8, Bawal District, Rewari, Haryana-123501','DBG Technology Pvt. Ltd,plot no-2, secor-8, Bawal District, Rewari, Haryana-123501'),
    new Speciality(false,true,true,false),
    new BasicFeatures(true,true,true,true,true,true,true)
    ),
    
    new MobileSpecification
    ('Mobile','Oppo','https://rukminim2.flixcart.com/image/416/416/l12h1u80/mobile/w/s/e/-original-imagcpehdhqyzqpz.jpeg?q=70' , 18530,4.1,true,true,true,16,
    new general('Handset, Adapter, USB Type-C Cable, SIM Eject Tool, Protective Case, Quick Start Guide, Warranty Card','M2006C3LI','Oppo K10','Black Carbon'),
    new DisplayFeatures(6.43,'Full HD+','2400x1080'),
    new OsProcessorFeatures('Android Andriod 11','Snapgragon','Qualcom Snapgragon 720','Octa Core','2.4 Ghz'),
    new MemoryStorageFeatures(128 ,8,512),
    new CameraFeatures('32+8+2+2','16+8',true),
    new ConnectivityFeatures(4,'5G,4GVoLTE,3G'),
    new BatteryPowerFeatures(6000),
    new WarrantyDetail('1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase'),
    new ManufacturingPackagingImportInfo('India','DBG Technology Pvt. Ltd,plot no-2, secor-8, Bawal District, Rewari, Haryana-123501','DBG Technology Pvt. Ltd,plot no-2, secor-8, Bawal District, Rewari, Haryana-123501'),
    new Speciality(false,true,true,false),
    new BasicFeatures(true,true,true,true,true,true,true)
    ),

  

    new MobileSpecification
    ('Mobile','Vivo','https://rukminim2.flixcart.com/image/416/416/ksm49e80/mobile/i/c/v/y33s-v2109-vivo-original-imag65dvghpvnuzz.jpeg?q=70' , 28530,4.6,true,true,true,16,
    new general('Handset, Adapter, USB Type-C Cable, SIM Eject Tool, Protective Case, Quick Start Guide, Warranty Card','M2006C3LI','Vivo Y33','Black Carbon'),
    new DisplayFeatures(6.43,'Full HD+','2400x1080'),
    new OsProcessorFeatures('Android Andriod 11','Snapgragon','Qualcom Snapgragon 720','Octa Core','2.4 Ghz'),
    new MemoryStorageFeatures(128 ,8,512),
    new CameraFeatures('40+8+2+2','16+8',true),
    new ConnectivityFeatures(5,'5G,4GVoLTE,3G'),
    new BatteryPowerFeatures(6000),
    new WarrantyDetail('1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase'),
    new ManufacturingPackagingImportInfo('India','DBG Technology Pvt. Ltd,plot no-2, secor-8, Bawal District, Rewari, Haryana-123501','DBG Technology Pvt. Ltd,plot no-2, secor-8, Bawal District, Rewari, Haryana-123501'),
    new Speciality(false,true,true,false),
    new BasicFeatures(true,true,true,true,true,true,true)
    ),

    new MobileSpecification
    ('Mobile','Apple','https://rukminim2.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/y/k/z/iphone-11-64-a-mwlx2hn-a-apple-0-original-imafkg24ymsjav9h.jpeg?q=70' , 88530,4.5,true,true,true,7,
    new general('Handset, Adapter, USB Type-C Cable, SIM Eject Tool, Protective Case, Quick Start Guide, Warranty Card','M2006C3LI','Apple iPhone 11','Scream White'),
    new DisplayFeatures(5.43,'Full HD+','2400x1080'),
    new OsProcessorFeatures('Android Andriod 11','Snapgragon','Qualcom Snapgragon 720','Octa Core','2.4 Ghz'),
    new MemoryStorageFeatures(256 ,8,512),
    new CameraFeatures('12+12+12','12',true),
    new ConnectivityFeatures(4,'5G,4GVoLTE,3G'),
    new BatteryPowerFeatures(6000),
    new WarrantyDetail('1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase'),
    new ManufacturingPackagingImportInfo('India','DBG Technology Pvt. Ltd,plot no-2, secor-8, Bawal District, Rewari, Haryana-123501','DBG Technology Pvt. Ltd,plot no-2, secor-8, Bawal District, Rewari, Haryana-123501'),
    new Speciality(false,true,true,false),
    new BasicFeatures(true,true,true,true,true,true,true)
    ),

 
    new MobileSpecification
    ('Mobile','Samsung','https://rukminim2.flixcart.com/image/416/416/l1dwknk0/mobile/4/j/u/-original-imagcyr24p6hvqgq.jpeg?q=70' , 41530,4.6,true,true,true,18,
    new general('Handset, Adapter, USB Type-C Cable, SIM Eject Tool, Protective Case, Quick Start Guide, Warranty Card','M2006C3LI','Samsung Galaxy A37 5G','Awesome White'),
    new DisplayFeatures(6.43,'Full HD+','2400x1080'),
    new OsProcessorFeatures('Android Andriod 11','Snapgragon','Qualcom Snapgragon 720','Octa Core','2.4 Ghz'),
    new MemoryStorageFeatures(128 ,8,512),
    new CameraFeatures('48+8+2+2','16+8',true),
    new ConnectivityFeatures(5,'5G,4GVoLTE,3G'),
    new BatteryPowerFeatures(6000),
    new WarrantyDetail('1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase'),
    new ManufacturingPackagingImportInfo('India','DBG Technology Pvt. Ltd,plot no-2, secor-8, Bawal District, Rewari, Haryana-123501','DBG Technology Pvt. Ltd,plot no-2, secor-8, Bawal District, Rewari, Haryana-123501'),
    new Speciality(false,true,true,false),
    new BasicFeatures(true,true,true,true,true,true,true)
    ),
    

]


getMobileList()
{
    return this.mobileList.slice() ;
}

    AddNewMobile()
    {

    }
}