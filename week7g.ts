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

Resotck(): void {
    console.log("restock")
    let lowstocks = false;
    for(let i = 0; i < this.medicines.length;i++){
        const m = this.medicines[i];
        if(m.quantity <10) {
            const medicinerestock = 50 - m.quantity;
            const costBying = medicinerestock * m.price;

            console.log(`${m.name} -- need${medicinerestock} to get 50 cost: ${costBying}`);
            let lowstocks = true;


        }
    }



    if (lowstocks = false){
        console.log(" no medicine under low stock")
    }
}

}