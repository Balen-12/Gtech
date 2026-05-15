/*
import * as readline from "readline";

type studentd ={name:string ,score:number,city:string}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });
}

async function main(): Promise<void> {
    const name: string =await ask(`Name: `);
    const score: number =  parseInt(await ask(`score:`));
    const city: string = await ask(`city: `);

    console.log(`name:${name}`,   `score:${score}`, `city:${city}`);
    rl.close();
}

main();

*/
/*

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });
}

type student ={ name:string ,score:number,}

async function main(): Promise<void> {
   
const students: student[] =[];

 const stuNum: number = parseInt(await ask(`how many students?`));
for (let i =1;i<=stuNum;i++){

const name: string =await ask(`student ${i} Name: `);
    const score: number =  parseInt(await ask(`score:`));
  students.push({   name: name, score: score});

}

console.log("Roster:");
for(let i=0;i<students.length;i++){
    console.log(` ${students[i].name}: ${students[i].score}`)
}

    rl.close();
}


main();
*/

/*
import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });
}

type student ={ name:string ,score:number,}

async function main(): Promise<void> {
   
const students: student[] =[];

 const stuNum: number = parseInt(await ask(`how many students?`));
for (let i =1;i<=stuNum;i++){

const name: string =await ask(`student ${i} Name: `);
    const score: number =  parseInt(await ask(`score:`));
  students.push({   name: name, score: score});


}


  function highest(){
 
    if(students.length >0){

        let maxscore = students[0].score;
        for(let i =0;i<students.length;i++){
            if(students[i].score > maxscore){
                maxscore =students[i].score
            }
        }
        console.log(`highestscore: ${maxscore}`) ;
    }

}

console.log("Roster:");
for(let i=0;i<students.length;i++){
    console.log(` ${students[i].name}: ${students[i].score}`)

}

highest();

rl.close();
}





main();


 */

/*
import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });
}



async function main(): Promise<void> {

    type medicine = {name:string, price:number,quantity:number}
     const medic: medicine[]=[];
    console.log("enter 3 medicine")
    for(let i = 0;i<3;i++){

    const name:string = await ask("name:")
    const price: number = parseInt(await ask("price:"))
    const quantity: number = parseInt(await ask("quantity:"))
            medic.push({name:name,price:price, quantity:quantity});
    
        calculater()

    }
    
    function calculater(m:medicine){
        console.log(`name: ${m.name} = ${m.price} * ${m.quantity}`)
    
    };
    
    
    rl.close();
}

main();
*/


import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });
}

async function main(): Promise<void> {
    type contact = {name:string,phone:string};
         const people:contact[]= [
            {name:"ali brwa" , phone:"750 322-1146"},
            {name:"ahmad abdwlla" , phone:"750 714-9932"},
            {name:"sara Ahmad" , phone:"750 567-1243"},
            {name:"kani ali" , phone:"750 860-9021"},
            {name:"osman ahmad" , phone:"750 251-2345"},

         ]
const search: string=await ask("search for thr name:");

const lower = search.toLowerCase();
         for(let i =0;i<people.length;i++){
            
if(people[i].name.toLowerCase().includes(lower)){
    console.log(`${people[i].name}: ${people[i].phone}`)
}

         }
         

    rl.close();
}

main();

//final submistion