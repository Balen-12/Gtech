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

inventionaryValue(): void{
let total: number = 0;
for(let i = 0; i < this.medicines.length;i++){
    const m = this.medicines[i];
    const totalvalue = m.price * m.quantity;
    total = totalvalue + total;
    console.log(`${m.name} ---total value ${totalvalue} iqd`);
}
console.log(` total:  ${total} IQD`);

}
}