//document.write("Hello World!!");
//alert("これから、よろしくお願いいたします。");

// console.log("Hello World" + "黒田翔仁さん");
// console.log(10 + 10);
// console.log("10" + "10");

// let x =1;
// let y=1;
// x++;
// console.log(x);
// y--;
// console.log(y);

//  x=7;
//  y=x++;

//  console.log(x);
//  console.log(y);
'use strict';

// let age = 30;
// const name = "田中太郎";

// age = age + 2;

// console.log(`${name}さんの年齢は${age}です`);

// function scoreCheck(){
//     let testScore = document.getElementById('score').value
// if(testScore >=80){
//     document.write("合格です、おめでとうございます。");
// }else if (testScore >=70){
//     document.write("惜しい、あと少し");
// }else {
//     document.write("不合格です頑張りましょう");
// }
// }

// const nameList = ["田中","山田","林","佐藤"]
// const namenumber = ["1.","2.","3.","4."]

// for(let i = 0; i < 4; i++) {console.log(namenumber[i]+nameList[i]);} 

// const addTwoNum= (x,y) => {return x + y ;}

// console.log(addTwoNum(3,4));

// class cluculator {
//     constructor(x,y,z) {
//         this.x = x;
//         this.y = y;
//         this.z = z;
//     }
//     addTwoNum() {
//         return (this.x + this.y) * this.z;
//     }
// }

// const calcA = new cluculator(3,4,5); //インスタンス生成
// const calcB = new cluculator(6,5,10); //インスタンス生成

// console.log(calcA.addTwoNum());
// console.log(calcB.addTwoNum());

// class SuperNamingMazic {
//     constructor(){
//         this.name = "魔法帝";
//     }
//  MazicClass() {
//      return this.name;
//  }
// }

// class SubMazicClass extends SuperNamingMazic {
//     MazicClass(){
//         return super.MazicClass() + "黒田翔仁";
//     }
//     Mazicbonber(){
//         return "エクスプロージョン";
//     }
// }

// const Mazic = new SubMazicClass;

// console.log(Mazic.Mazicbonber() + Mazic.MazicClass());

//練習問題
class Naming {
    constructor(name) {
        this.name = ["山田","田中","林",name ];
    }
result(i) {
    return this.name[i]
}
}

const outputname =new Naming("佐藤");
for(let i = 0; i< outputname.name.length; i++) {
    console.log(outputname.result(i));
}