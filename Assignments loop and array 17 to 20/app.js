

//====================Q1==================
//Declare and initialize an empty multidimensional array.
//Array of arrays ?

// let array = [
//     [ ],
//     [ ],
//     [ ],
// ];



//=======Q2==============================
//Declare and initialize a multidimensional array
//representing the following matrix:


// let numbers = [
//   [ 0 , 1 , 2 , 3],
//   [ 1, 0, 1 , 2],
//   [ 2, 1 ,0, 1]
// ]
// document.write(numbers);



//===========Q3===========================
//Write a program to print numeric counting from 1 to 10.?

//   for(let i = 1; i <= 10; i++) {
//  document.write(i + "<br>");
//  }



//===============Q4=========================

/* program to generate a multiplication table
and a lenght */

// const number = parseInt(prompt('Enter an integer: '));
// const range = parseInt(prompt('Enter a lenght: '));

// creating a multiplication table
// for(let i = 1; i <= range; i++) {
//     const result = i * number;
//     console.log(`${number} * ${i} = ${result}`);
// }



//===========Q5=========================================
// var list = [ "apple" , "banana" , "mango" ,"orange" ,"strawberry"];
// for(let i =0; i<=4; i++){
//   document.write(list [i] + "<br>")
// }



//=============Q6==================
 
//   for (let i=1; i<=15; i++){
//     document.write(i + "  ")             
// }
// document.write("<br> <br>")

// function PrintReverseOrder(N){
//         for (let i = N; i > 0; i--)
//             document.write(i + " ");
//     }
//      let N = 15;
//     PrintReverseOrder(N);

//     document.write("<br> <br>") 
// for(let i =1; i<=15; i++){
//     if(i % 2 ===0)
//     document.write(i + " ")
// }

// document.write("<br> <br>") 
// for(let i =1; i<=15; i++){
//     if(i % 2 !==0)
//     document.write(i + " ")
// }
// document.write("<br> <br>") 
// for(let i =1; i<=20000; i++){
//     if(i % 2000 ===0)
//     document.write(i + " ")
// }




//=================Q7=================

// var items = ["cake", "apple" ,"pie" , "cookie", "chips", "patties"];
// function searchItem(){
//     var usreInput = prompt("Welcom to ABC Bakery. what do you want to order sir/ma'ma?");

//     const isTrue = items.findIndex((item) => item.toLowerCase() === usreInput.toLowerCase());

//     if(isTrue !== -1){
//         document.write("Cookie available at " + isTrue);
//     }else{
//         document.write("Cookie is not available");
//     }
// }

// searchItem();


//=================Q8======================
//  function findLargNum(arr){
//   return Math.max(...arr);
//  }
//  const numbers =[24, 53, 78, 91, 12]
//  const largNum = findLargNum (numbers);

// document.write("Array items : 24, 53, 78, 91, 12");
//  document.write("<br>");
//  document.write("the largest number is  : " + largNum);
 //        console.log(largNum)



 //===================Q9====================
// function findSmallNum(arr){
//   return Math.min(...arr);
//  }
//  const numbers2 =[24, 53, 78, 91, 12]
//  const smallNum = findSmallNum (numbers2);
//       console.log(smallNum)
//  document.write("Array items : 24, 53, 78, 91, 12");
//  document.write("<br>");
//  document.write("the smallest number is " + smallNum);



 //====================Q10========================= 
//  for (let i=0; i<=100; i++){
//     if(i%5 ===0)
//      document.write(i +" ")
//  }
 
