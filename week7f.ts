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

salesStaffHist():void {
    if(this.salesProductsHistory.length === 0){
        console.log(`no products sales `)
    }
   let proSalesHistory = 0;
    for(let i = 0; i < this.salesProductsHistory.length; i++){
        const productsale = this.salesProductsHistory[i];
        console.log(`${productsale.name} -- ${productsale.amount} units -- total ${productsale.total}`)
        proSalesHistory += productsale.total;
    }
    console.log(`total sales ${proSalesHistory}`);
}

}

const store = new pharmacy();
store.add(new Medicine("dogalaz", 2000, 15, true));
store.add(new Medicine("Paracetamol", 1000, 20, false));
store.add(new Medicine("Ibuprofen", 1500, 8, true));
store.salesStaffHist();
