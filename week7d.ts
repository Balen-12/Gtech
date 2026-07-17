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

    search(name: string): Medicine | null {
for(let i = 0; i < this.medicines.length; i++){
    if(this.medicines[i].name.toLowerCase().includes(name.toLowerCase())){
        return this.medicines[i];
    }

}
 return null;
    }


updagtePrice(name: string , newPrice:number): void{
    let found = this.search(name);
    if(found){
        found.price = newPrice;
        console.log(`price updated for ${name}: ${newPrice} IQD`)
    }else{

        console.log(`medicine not found`)
    }

}
}


const store = new pharmacy();
store.add(new Medicine("dogalaz", 2000, 15, true));
store.add(new Medicine("Paracetamol", 1000, 20, false));
store.add(new Medicine("Ibuprofen", 1500, 8, true));
store.updagtePrice("paracetamol", 5000);
