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

expiredproducts(): void{

    let expiredMed = false;

    for(let i =0; i< this.medicines.length;i++){
         const medicine = this.medicines[i];

         if(medicine.expierd === true){
            expiredMed = true;
            console.log(`${medicine.name} --${medicine.price} iqd : ${medicine.quantity} is expired`);
         }
    }
    if(expiredMed === false){
        console.log("no expired medicine")
    }
}
}


const store = new pharmacy();
store.add(new Medicine("dogalaz", 2000, 15, true));
store.add(new Medicine("Paracetamol", 1000, 20, false));
store.add(new Medicine("Ibuprofen", 1500, 8, true));
store.expiredproducts();
