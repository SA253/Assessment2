export class Details {
    id: number;
    name:string;
   dob:number;
    address:string;
    phone:number;
    
    constructor( id:number,name:string, dob:number, address:string, phone:number){
        this.id=id;
        this.name=name;
        this.dob=dob;
        this.address=address;
        this.phone=phone;
        
    }
}
