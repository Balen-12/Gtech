class Medicine {
    name: string;
    price:number;
    quantity:number;
    expierd:boolean;


    constructor(name: string, price: number, quantity: number, expierd:boolean){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.expierd = expierd;
    }
}

class Recipet {
    name: string;
    amount: number;
    total: number;


    constructor(name: string, amount: number, total: number){

        this.name = name;
        this.amount = amount;
        this.total = total; 

    }
}

class pharmacy {
    private medicines: Medicine [] = [];
    private salesProductsHistory: Recipet [] = [];


    add(medicine: Medicine):void{

        this.medicines.push(medicine);
        console.log(`added ${this.medicines[this.medicines.length-1].name}`)

    }

countMedicine(): void{
let allUnities = 0;
for(let i = 0;i < this.medicines.length; i++){
 allUnities = allUnities + this.medicines[i].quantity;
console.log(`${this.medicines[i].name}-- ${this.medicines[i].quantity}`)
}
 console.log(`total medicines : ${this.medicines.length}`)
 console.log(`all unites : ${allUnities}`);
}
}