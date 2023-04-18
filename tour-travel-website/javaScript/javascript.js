// //let---------
// let myName='aditya';
// console.log(myName);


// //var--------
// var hi = "hello";
// console.log(hi);



// //const-------
// const vinod='jai';
// console.log(vinod);
// let mass=15;
// let height=2;
// let BMI= mass/height**3;
// console.log(BMI);

//.......VAR,,,,,,,,//
// var b=10;
// var add=a+b;
// console.log(add);

// function printMark(p,c,m,b,com){
//     let totalMark=p+c+m+b+com;
//     let percentage=(totalMark/500)*100;
//     if(percentage>=90){
//         console.log("grade A")
//     }else if (percentage>=80){
//        console.log("grade")
//     }else if (percentage>=70){
//         console.log("grade C")
//      }else if (percentage>=60){
//         console.log("grade D")
//      }else if (percentage>=50){
//         console.log("grade E")
//      }else {
//         console.log("grade F")
//      }
// }
// 80;
// 40;
// 50;
// 8;
// 222;
//--------celsius to fahrenheit--------------//
// function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+ '\n'  + cToFahr ;
//     console.log(message);
// }

// function fToC(fahrenheit) 
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+ '\n' + fToCel;
//     console.log(message);
// } 
// cToF(60);
// fToC(45);

//..........area of reactangle...............//
// function areaRectangle(width, length) {
//     let area = width * length;
//     return area;
// }
// let width = 5;
// let length = 6;
// console.log( areaRectangle(width, length));


//..........TWO no Equal.........//
// var num=2;
// var num1=8;
// if( num!= num1){
//     console.log("Equal");
// }else {
//     console.log("Not equal");
// }
// console.log(equal(20,20))




// //------function expression------//
// let areaRectangle=function(width,length){
//      let area=width*length;
//      return area;     
// }


// let findLrge = (a,b,c) => {
//     if(a<b){
//         console.log(b+ " is greatre");
//     }
//     else if(a>c){
//         console.log(a+"is grater");
//     }else{
//         console.log(c+"is grater");
//     }
// }
// findLrge(12,5,18)


// let oddEven = (num) =>{
//     if(num %2 == 0){
//         console.log("even number");
//     }else {
//         console.log("odd number");
//     }
// };


// const calcAverage = (one, two, three) => {
//     const average = (one + two + three) / 3;
//     return average;
// };
// let dolphinAver = calcAverage(85, 54, 41);
// let koalaAver = calcAverage(23, 34, 27)


// console.log(dolphinAver);
// console.log(koalaAver);

// let checkWinner = (dolphinAver, koalaAver) => {
//     if (dolphinAver >= 2 * koalaAver) {
//         console.log("Dolphine is the winner");
//     } else if (koalaAver >= 2 * dolphinAver) {
//         console.log("koalaAver is the winner");
//     } else {
//         console.log("Draw!");
//     }
// }
// checkWinner(dolphinAver, koalaAver);
// let greet = function(){
//     console.log("i am aditya");
// }
// console.log(greet());


// let counterFunc = (counter){
//     if(counter> 100){
//         counter = 0;
//     }else {
//         counter ++;
//     }
//     return counter;
// }



// let counterFuncExpression = function(counter){
//         if(counter> 100){
//             counter = 0;
//         }else {
//             counter ++;
//         }
//         return counter;
//     }
    

    // let greet=(firstName,lastName)=> console.log(`hello,${firstName} ${firstName}`)

    // greet("aditya","kumar")



    // let isEven =(num)=>(num%2==0);

    // console.log(isEven(20));



    // let kgToLbs =(kg)=>{
    //     let lbs = kg*2.2;
    //     if(lbs > 150){
    //         console.log("obese");

    //     }else if(lbs>=100&&lbs<=150){
    //         console.log("ok condition")
    //     }else{
    //         console.log("overwight")
    //     }

    // }
    // kgToLbs(50);



    //..........ARRAY............//
  // array of strings
    // const words=["hi","j","kk","ll"];
    // console.log(typeof words);


 //

//  const data=[
//   {'hello':'javascript'},
//   [1,5,5,7,8],
//   function helloWorld(){
//     console.log("hello world");
//     return 2;
//   }
//  ];

//  console.log(data);
//  console.log(data[2]());


//  const myArray=[1,5,5,8,6,'hwllo','i', true];
 
//  console.log(myArray[0]);
 
// let myArray=['hwllo','i','am'];

// myArray.push('javascript');// it got add at the last.

// console.log(myArray);

// myArray.unshift('programming language'); //got added at the front.

// console.log(myArray);

// myArray[0] = 'Hey';




// // let data =[1,5,8,'hello'];
// // let remove = data.pop();
// // console.log(remove);
// // console.log(data);

// let remove =data.shift();
// console.log(remove);
// console.log(data);

// console.log(data.length);

// var a=['aditya','surj','nityanand'];
// var b=['manishankar','piyush'];
// var c= a.concat(b);
// document.write(c);


//....TASK CHALLENGE#4......//

// var billVlue = 275;
// var tip = 50<= bill <300? bill*(15/100) : bill*(20/100);
// console.log(billVlue,tip);
// console.log(`The bill was ${billVlue}, the tip was ${tip},and the total value was ${billVlue+tip}`);



//....challenge task#2.......//

let calcTip =(billValue)=>{
  var tip = 50<= billValue <300? billValue*(15/100) : billValue*(20/100);
  return tip;
  }
  else {
    per = (bill * 20)/100;
    return bill ;
  }
}
let bills=[125,555,44];
