
export class general {
    constructor(
        public InTheBox: string,
        public ModelNumber: string,
        public ModelFullName: string,
        public Color?: string,
        public BrowseType?: string,
        public SimType?: string,
        public HybridSimSlot?: boolean,
        public Touchscreen?: boolean,
        public OTGcompatible?: boolean,

    ) { }
}


export class DisplayFeatures {
    constructor(
        public DisplaySize: number, // inch
        public ResolutionType?: string,
        public Resolution?: string,
    ) { }
}

export class OsProcessorFeatures {
    constructor(
        public OperatingSystem: string,
        public ProcessorBrand?: string,
        public ProcessorFullName?: string,
        public ProcessorCore?: string,
        public PrimaryClockSpeed?: string,
    ) { }
}

export class MemoryStorageFeatures {
    constructor(
        public InternalStorage: number,
        public RAM: number,
        public InternalStorageExpendable?: number,
        public RAMExpendable?: number,
    ) { }
}

export class CameraFeatures {
    constructor(
        public BackCamera: string, //splitWithPlus
        public FrontCamera: string, //splitWithPlus
        public AIfaceDetection?: boolean
    ) { }
}

export class ConnectivityFeatures {
    constructor(
        public NetworkType: number,
        public SupportedNetworks?: string,

    ) { }
}

export class BatteryPowerFeatures {
    constructor(
        public BatteryCapacity: number,
    ) { }
}

export class WarrantyDetail {
    constructor(
        public WarrantyDetail: string,
    ) { }
}

export class ManufacturingPackagingImportInfo {
    constructor(
        public CountryofOrigin: string,
        public ManufacturedBy?: string,
        public PackedBy?: string
    ) { }
}


export class Speciality {
    constructor(
        public BigStorage: boolean,
        public HigherPerfomance?: boolean,
        public LongLastingBattery?: boolean,
        public SelfieCamera?: boolean,
    ) { }
}
export class BasicFeatures {
    constructor(
        public WiFi: boolean,
        public HDRecording?: boolean,
        public FMPlayer?: boolean,
        public MusicPlayer?: boolean,
        public Bluetooth?: boolean,
        public USB?: boolean,
        public GPRS?: boolean,

    ) { }
}


export class MobileSpecification {
    ProductType: string = 'Mobile';
    brandName: string = 'Redmi';
    imgPath:string='https://rukminim2.flixcart.com/image/416/416/l19m93k0/mobile/o/l/f/note-11-pro-5g-21091116i-redmi-original-imagcvg4ghr3ykge.jpeg?q=70' ;
    price: number = 16499;
    customerRating: number = 4.2;
    GSTinvoiceAvailable: boolean = true;
    isSmartphone: boolean = true;
    isAvailable: boolean = true;
    discountPercent: number = 10;

    general!: general;
    DisplayFeatures!: DisplayFeatures;
    OsProcessorFeatures!: OsProcessorFeatures;
    MemoryStorageFeatures!: MemoryStorageFeatures;
    CameraFeatures!: CameraFeatures ;
    ConnectivityFeatures!: ConnectivityFeatures;
    BatteryPowerFeatures!: BatteryPowerFeatures;
    Warranty!: WarrantyDetail;
    ManufacturingPackagingImportInfo!: ManufacturingPackagingImportInfo;
    Speciality!: Speciality;
    BasicFeatures!: BasicFeatures;

    constructor(
        ProductType: string,
        brandName: string,
        imgPath:string,
        price: number,
        customerRating: number,
        GSTinvoiceAvailable: boolean,
        isSmartphone: boolean,
        isAvailable: boolean,
        discountPercent: number,

        //    Class parameters
        general: general,
        DisplayFeatures: DisplayFeatures,
        OsProcessorFeatures: OsProcessorFeatures,
        MemoryStorageFeatures: MemoryStorageFeatures,
        CameraFeatures: CameraFeatures,
        ConnectivityFeatures: ConnectivityFeatures,
        BatteryPowerFeatures: BatteryPowerFeatures,
        Warranty: WarrantyDetail,
        ManufacturingPackagingImportInfo: ManufacturingPackagingImportInfo,
        Speciality: Speciality,
        BasicFeatures: BasicFeatures

    ) {

        this.ProductType = ProductType;
        this.brandName = brandName;
        this.imgPath=imgPath;
        this.price = price;
        this.customerRating= customerRating
        this.GSTinvoiceAvailable = GSTinvoiceAvailable
        this.isSmartphone=isSmartphone
        this.isAvailable=isAvailable
        this.discountPercent=discountPercent

        //    Class parameters
        this.general=general
        this.DisplayFeatures=DisplayFeatures
        this.OsProcessorFeatures=OsProcessorFeatures
        this.MemoryStorageFeatures=MemoryStorageFeatures
        this.CameraFeatures=CameraFeatures
        this.ConnectivityFeatures=ConnectivityFeatures
        this.BatteryPowerFeatures=BatteryPowerFeatures
        this.Warranty=Warranty
        this.ManufacturingPackagingImportInfo=ManufacturingPackagingImportInfo
        this.Speciality=Speciality
        this.BasicFeatures=BasicFeatures

    }



}