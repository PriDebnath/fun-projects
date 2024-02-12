  document.getElementById('red').addEventListener('click', function() {

    document.body.style.transition = '10s';

    document.body.style.background = 'red';

    setTimeout(
      function() {
        document.body.style.background = 'white';
      }, 7000
    );

    setInterval(createHeart, 300);

  });


  let blueHeart = document.getElementById('blueHeart')


  function createHeart() {
    let heart = document.createElement('div');
    heart.classList.add('blueHeart')


    heart.innerText = '❤️' // '\u2665'

    heart.style.left = `${Math.random()*100}vw`;
    heart.style.animationDuration = `${Math.random()*10 +4}s`

    heart.style.fontSize = `${Math.random()*33+18}px`

    blueHeart.appendChild(heart);


  }









  /*
  
      //alert in JavaScript in webpage
  
      alert ("text in alert")
  
      //prompt in JavaScript
  
  let name = prompt("will ask for yes or no with a input box");
  console.log(name) ;
  
  
    //confirm in JavaScript
    
  let deletepost = confirm("do you really want to delete the post") ;
  if(deletepost){console.log("khatam gya post") }
  else{console.log("bach gya post");  }
  
  
  
  */






  /*
//we can use any value directly or store that value in a variable then use the variable in deferent places in   the code



    console.log(5);     //integer
    console.log('yo');  //string
    console.log(true);  //Boolean

    let obj = {
      key1: 'value1',
      key2: 'value2',
      key3: true,
      key4: undefined
    } ;


    console.log(obj);
    console.table(obj);


    console.warn('This is a created warning');
    console.error('This is a created error');

    //this is how to comment single line in js
    
    /*this is how to comment 
    multiline in js*/




  //########     variables in js

  //variables are like container we can store anything in JavaScript

  // they can start with letter 
  //variable names are case sensitive .means 'A' and 'a' is deferent 


  /*
   
    let name ='pritam';
    
    let channel ='Spoiler'
    
    console.log(name);
    console.log(channel);
    console.log(name,channel)
    
    
    let num1 = 5; //assigned a integer in variable
    let num2= 6;
    console.log(num1 + num2)
    
    
    let str1 ='5'; //assigned a string in variable
    let str2 ='6';
    console.log(str1 + str2);
    
    
    deferent case in programming
   1. camelCase  , 2.kebab-case , 
   3.snake_case   , 4.PascelCass 
   
    
    // <<<<  data type in js   >>>>>>>>>
    
    we have 2 type of data type in js
    
    1. primitive  data type and 
   
    2. reference data type .
    
    
    
    primitive data types are ===>>
    
    integer(number) = 1,2,3       .
    string (word) = "hi", "bye"   .
    Boolean  = true or false
    null
    undefined
    symbol
    
    
    reference data types are ===>>
    
    array  -we write array like this []
    
    object literal -we write obj  inside this {}

    function and dates are also object
    
    
    



 
    
    //primitive data type ==>>>>   number
    
    let num = 5 ;
    
   console.log(`data type of num is  ${typeof num}
             `);
    
      //primitive data type =====>>>>>  string


    let name = 'pri';
    console.log(`data type of name is  ${typeof name}
              `);
   
      //primitive data type ====>>>>  Boolean 
      
      let isPlaying = false ;
      
     console.log(`data type of isPlaying is  ${typeof isPlaying}`)
      
     
        
   //Reference data type  ====>>>> Array
   
   let arr = [
     35,'hi',null, unrefined
     ];
     
     
   // we can store literally anything in JavaScript array
   
   //we can store any primitive data type in an array
   
   console.log(` data type of arr is ${typeof arr}`);


    
     //Reference data type => Object literal

    let marks={
      pri: 67,
      piri: 56,
      piru: 65,
      'pi li' :56   
      //hold it in quotes to put  a space 
      func : ()=>{}
      
    };
    
    console.log(`Data type of marks is ${typeof marks}
    `);
    
    
    //object take the key as a string but value can be anything 

    
    //Reference data type  ====>>>> function

    
    //function:->
    
 

    
    function func(){
      
    }
    
    console.log(`Data type of func is ${typeof func}`);
    
    
    //--> More about function later
    
    
    
    
    
    //Reference data type  ====>>>> date
    
    let date = new Date();
    
    console.log(`Data type of date is ${  typeof date }
    `);
    
    console.log(date);
    
    
   */









  /*


    //<<(  Type conversation and coercion    )>>
    

    
   //Type conversation
   
  // we can convert anything into string so that we can apply string properties and method



    let booleanVar = true;

    console.log(typeof booleanVar);



    //converting Boolean into string

    booleanVar = String(true);


    console.log(typeof booleanVar);




    //date into string
    let date = new Date();


    console.log(date);

    date = String(new Date());

    console.log(date);
    
    
 
    
    //Array into string
    
    
    let arry = ['hi','bye','Tata'] ;
    
    
          console.log(`${arry}  and lenth of arry is  ${arry.length}`);

    arry = String(['hi','Tata','bye']);
    
      
        console.log(arry ,  arry.length);
        
        //string into number

  let num ='4587';

  console.log(`${num}  and typeof num is  ${typeof num}`)
  
  num = Number('4590');

  console.log(`now ${num}  and typeof num is  ${typeof num}`)

  num = Number('y')
  
  console.log(`${num}  means *not a number* and typeof num is  ${typeof num}`)

  num = Number(true);
  console.log(num);



  num =  parseInt(67.96);
  console.log({num});
  console.log(num.toFixed(4));

  //type coertion 

  let number = 56;
  let string ='65';
  console.log(number + string)//5665
  
    //when we need to add a number and a strings js make the number to string and concat it as a string
    
    
    
    */


  //  NUMBER   ====================================

  //  note:- JavaScript's  plus oporater use both for adding and concatenation . while using plus + oporater numbers get added and string got concatenated








  //-------(((<<  STRING >>)))-------



  //  let string = 'Hi';


  //String are used in JavaScript for storing multiple text

  //we can asssume strings as word

  //if we put something inside of quote ,double quoes and back ticks  it will be a string



  //to get the length of an element use( .length ) built-in JavaScript property



  /*
  
  //    string =>> method 
  
 //to add string into a string we use concat function
 
  let string = 'Hi';
  
  console.log(string); //Hi
  console.log(string[0]); //H

  //  .concat()  method to add something in string
  let strings = string.concat('  ',' Bye',' Tata');
  
  console.log(strings);
  
  //  .length  to get the length of the string 
    console.log(strings.length);

//  .toUpperCase to make the string's text uppercase
    console.log(strings.toUpperCase());

//  .toLowerCase to make the string's text lowerCase
    console.log(strings.toLowerCase());

//
//important
//
// slice method-> to extract a part of a string and return the extracted part in a new string


let myString = 'This is a string' ;

let newString = myString.slice(0,myString.length)

console.log(newString)  ;


console.log(newString.slice(0,4))  ;


//if a param is negative JavaScript start the count from last
console.log(newString.slice(-12,-9))  ;

// substring() is same but it doesn't accept negative value
console.log(newString.slice(0,4))  ;
console.log(newString.substring(-12,-9))  ;

// subStr 's second param specify the length og the extracted part 
console.log(myString.substr(9,4) );

  //replacing string parts

  //replace function replace first occurrence only


console.log(myString.replace('string','object')) ;

// trim method -> to trim space/ padding from starting and ends
let space = '   s p a c e   ' ;

console.log(space.trim())

//padstart and padend to add padding.

console.log(space.padStart(4,9))
console.log(space.padEnd(8,0))





*/




  /*
      




  //  extracting string from string 


    
    let heading = '<h1> This is a headline again is </h1>';
    

  //carAt return the carecter of the specified index character

  console.log(heading.charAt(0));  // <
  
  //carCodeat return the uni code carecter of the specified index

     console.log(heading.startsWith('<'));  //true

    console.log(heading.endsWith('>'));  //true

    console.log(heading.includes('is')); //true
     //endswith, includes  return Boolean value
   
    console.log(heading.substring(1,3))//from 1 to 5



     //  converting string into array
     
      console.log(heading.split(' '));
      
     //split make the  string to array and print in like an array 
    
     //the fist argument of the split method will be the separater
    
    
    
    
    
     // searching in a string

     //index of return the first accurancw
      
     console.log(heading.indexOf('is'));//  7
    
    //  it returns -1 if not Found
    
    //  last index of return the last accurancw

      console.log(heading.lastIndexOf('is'));//  30

    //   search method search for a specific vallue in a string and return the position of the value..it can take regular expression
    
    
    //  . match method shearchs a string for a macth against a regular expression  return an array
    
    // if we don't put a global g or gi carecter
     //  it will return the first accurance
      let str =' its a strinG with another String '
    
    console.log(str.match(/string/gi))
    
    
    
   
    
    
         
          //Template literal in js
    
    let variable= 'kuch bhi' ;
    let html =` <h1>This is headline</h1>
    ${variable} 
    <p> This is paragraph </p>` ;
    
    //in template literal we write variable like this ${variable inside}
    document.body.innerHTML= html;
    
    
    
      //note :- in string litral actually we r doing string concatenation and inside  if we access variables with ${} it will make the variable values to string
  //we can get the actual value of those variables
   by just putting commas..
   //just separate with comas
   
   
   
   
    
    



















  // ((((((    Array in js   )))))))))


  /*
  
  let number = [5,9,58,85];
  let string=['str1','str2','str3','str4'];
  
  
  //we can store any   type  of data in an array in js
  
  let mixed= [5,'str5',[4,'str6'] ,true
  , function(){alert('hi')}  ] ;
  
  console.log(mixed);
  
  
  //another way to create array
  let myArry=new Array(6,'hi',[7,'bye'],'tata');
  
  console.log(myArry);
  
  
  
  //  .isAaray to identify an array
  
    console.log(Array.isArray(myArry));
    console.log(Array.isArray("myArry"));
      
      //accessing array element
      console.log(myArry[1]);
      
      //accessing full array
      console.log(myArry);


      //changing array element
      myArry[1]='hello';
      console.log(myArry[1]);
      
      
      
      //Array properties 
      
   // .length to get the total length of array , 
     it is always 1 less then the last index
     console.log(myArry.length);

    //accessing the last element with  . length
      

  
  // .indexOf 
  console.log(myArry.indexOf('tata'));
  
  console.log(myArry.indexOf('found'));
  //it will return -1 as is not found
  
  //==>> mutating or modifying array element
  
    console.log(myArry);
    
       //  toString() method converts an array to a string of (comma separated) array values.


let myArry = ['Pri','piri','priu']  ;

console.log(myArry.toString())  ;


//join() method do same as toString() but we can spicify the seperater like below 

console.log(myArry.join())  ;

console.log(myArry)  ;
console.log(myArry.join('😎'))  ;

   
   //join() don't change the actual array

 console.log( name.join());
  console.log(name)


    
    */





  //    ARRAY METHODS

  /*


    let myArry = ['pri','piri','priu'] ;
      
      
    //push method add element at the last of an array
      
     myArry.push('at last'); 
      
     console.log('After push ');

     console.log(myArry);

      
      
      //unshift method add element at the first of an array
       console.log('After unshift ');

       myArry.unshift('at first');
       console.log(myArry);



    //array pop method remove one element from last  
      console.log('After pop ');

      myArry.pop();
      console.log(myArry)
     
      


    //array shift method remove one element from first
      console.log('After  shift ');

      myArry.shift();
      console.log(myArry);


    //array splice method remove  element from the given index  to given delete count
   
     given index like (2,4)
    
    
   
    //splice method - to extract a part from an array and return the extracted path
    
    //splice is like slice in string method

      console.log('After slice ');

      console.log( myArry.slice(1,2) );

      console.log(myArry);

    //array reverse will reverse all array elements
    
     console.log('After reverse ');

      myArry.reverse();
      
      
      console.log(myArry);
     
     //  concat it add two array 

    let Arry= ['yo','ho'];

    let newArry =  myArry.concat(Arry);

    console.log('After concat ');

    console.log(newArry)

    //another way


    console.log( myArry.concat('go') 



     )
     
      //flating 2d 3d array
     
     
    let myArry2 =['one','two',['one of three','two of three',['one of three of three']]] ;
     
     console.log(myArry2)  
     
     
    console.log(myArry2.flat(Infinity))  
     
     
  */


  //understand higher order and callbacks
  //   array  iterater  
  //it doesn't change real array   so we need to store it in an another variable      ------------>


  /*
  
 
//map( )  method

//it will iterate throw the array and we can access those array element ,index of the array element and even access the whole array 



  let name = ['Pri', 'Pili', 'Priu'];

  name.map(function(value,index,arry) {
    
  //  alert(value + ' welcome');
    
     console.log(value) ;
         

  //   console.log(index) ;
    

    //  console.log(arry)  ;

  }) ;
  
  
  //map method is all-rounder
  //is take a call back function as an argument
  //can use it as forEach method
  
  
  //we have forEach too
  
  
  name.forEach(function(value,index,arry) {
    
    //  alert(value + ' welcome');
    
    
   //    console.log(value) ;
         

      console.log(index) ;
    

  //    console.log(arry)  ;

  }) ;
  
  
  
  
  let num = [2,8,4,3, 6,1 ,5,7,9] ;
  
 // The filter() method creates a new array with array elements that passes a test. it can change  array size because it return items based on condition
  
  
   let newNum = num.filter(function(value){
    return value <5;
  })
  
  console.log(newNum);
  console.log('here 2, 4,3,1 pass the test')
  
  
    console.log(newNum.sort());

  
  
  //in one one function
  //  console.log(num.filter(function(value){return value < 5 ;}) .sort()) ;
  
  
//find method do the same but return only one instance
  
  console.log(num );
  
  
  //reduce method
  
  
 //  The reduce() method runs a function on each array element to produce (reduce it to) a single value...The reduce() method works from left-to-right ...The reduce() method does not change the original array.
 
 let sum = num.reduce(function(preValue,curValue,index,arr){

 return preValue = preValue + curValue ;


 })
 
 
 console.log(sum );




let arr = ['hi','fi','hi','ji'] ;

let newarr =  arr.reduce((acu,curVal,index)=>{
  let total = 1 
  return  { ...acu ,[index] : curVal} ;
},{})

console.log(newarr) ;



*/


  /*
  
  
  
  let myArry = ['pri','priu','piri' ,'priu']  ;
  
  //indexOf() return the ele's position -the first accurence  ... return - 1 if not found
 
   console.log(  myArry.indexOf('priu')  );

  //lastIndexOf() return the ele's position -the last accurence

  
  console.log(  myArry.lastIndexOf('priu')  );
  
  //includes check wather the ary present or not return true 

console.log(  myArry.includes('priu')  );

// find () return first elm who pases the text

let mynum=[2,3,7,5,8,1,9];
   console.log(  mynum.find(function(val,index,ar){
     return val < 5;
   }  ));

 


  
  
  
  
  
  
  
  
  
  
  
  
 
 
 
 
 
 
 
 
 
 
 
 */








  ///-------((((  OBJECT ))))-------



  //js object are key value pair where key is a string value can be any data typpe
  //most of the things in JavaScript is object


  /*
 
 let myObj = {
   key      : 'value ',
   name     : 'pri',
   channel  : 'spoiler op',
   isActive :  true ,
   marks    :  [57,47,68], 
   'spa ce' :  '  s  p  a  c  e  ',
   fullName : function(){
     return ` ${this.name} ${this.channel} `
   }
   
 }
 
 note:-when we use "this" keyword in inside of an object that this refer to the surrounding object 
 
 
 
 
 //accessing object key and value
 
 console.log(myObj.name);//1st way with dot 
 console.log(myObj['spa ce'])//2nd way with square brackets
 
 
  console.log(myObj.fullName());
  
  //   for..in  loop
  
  for(let key in myObj){
    console.log(` The key of myObj is ->${key} and the key value is ->${myObj[key]}`)

  }

//You can add new properties to an existing object by simply giving it a value.

myObj.age='21';

console.log(myObj)

//can delete too
delete myObj.key ;
 
 console.log(myObj)

 
 let nested = { 
   key1: 'value1',
    key2: {
        NsKey1 : 'NsVal1',
        NsKey2 : 'NsVal2'
   }

 }
 
 //accessing nested
 
 console.log(nested.key2.NsKey1)
 
  console.log(nested['key2']['NsKey2'])

 
 
 */

  //  object method
  /*
  
  
  let person = { 
    fName : 'pri' ,
    lName :'deb' ,
    age:21
  }
  
  //Object.values convert an object to array
  console.log(Object.values(person))
  
   //JSON stringify convert an object to string

   console.log(JSON.stringify(person)) 
   
   
   
   
   
   

  
  
  
  
  
  //adding dynamic properties in object
  
  let anotherName = 'dusraNam';
  let myObj = {
    name :'pritam',
    age :21,
    [anotherName] :'pri'
  }
  
  console.log(myObj);
   console.log(myObj[anotherName])
   
*/


  /*
  
  
  //   MATH OBJECT -------------------------------
  
  //syntax for math pro..  Math.proparties
  
  //like :- Math.PI
  
   //syntax for math met..Math.methos(number)
   
   //methods
   
   //Math.round return the closest integer
   let math = Math.round(5.6);
   console.log(math)  ;
   
   //Math.ceil rounded up to the closest integer
   
   
   console.log(Math.ceil(4.1));
   
     //Math.floor rounded down to the closest integer

     console.log(Math.floor(4.9));
     
     //Math.power return x to the power of y
     
       console.log(Math.pow(4,2));
       
       //Math. sqrt sware rout of the number
       
         console.log(Math.sqrt(81));
         
         //Math.abs return positive value
         
           console.log(Math.abs(-4.1));
           
   //Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments
   
   console.log( Math.min(6,8,9) )
   console.log( Math.max(6,8,9) )
   
   //  Math.random return ans random number between 0 to 1
   
   console.log(Math.random()) ;
   
   //using math.ceil and and random 
   
   console.log( Math.ceil( Math.random() *100 )  );
   
   //it will return number between 0 to 100
   
     console.log( Math.ceil( Math.random() *100 )  );



     


   
   
   
  
  
  
  
  
  
  */









  //conditional statement


  //  ((((((  IF  ELSE  statement))))))


  /*  
  
  one equal to ( = ) is to assign a value to variable 
  
  double equal to ( == ) check value only
      
  triple equal to ( === ) check value and data type both
      
      and oporater ( && ) both conditions have to be true
      
      or oporater ( || ) just need to one condition true
      
      
      
    
    
    
    
  
  let age = 4;
  
  if(age==20){
    console.log('Age is 20');
  } 
  else if(age==40){
       console.log('Age is 40');

  }
  else{
       console.log('Age is not 20  or 40');
  }
  //checking a variable defined or not
  
  
  if(age){console.log('yes age is defined')};
  
  
  
  let isDrive = true ;
  
  if( (isDrive) && (age>18) ){
    console.log('yes drive because you are adult now') ;
    
  }
  
  else{
    console.log('no driving')  ;
    
  }
  
  //ternary oporater - one liner
  
  
  console.log( age < 5 ? 'bacha h tu' : ' big bro') ;
  
  
  
  //switch case statement
  
  let year = 2015;
  
  switch (year){
    
    case  2015 : console.log('saal 2015') ;
    
       break ; 

    case 2010 : console.log('saal 2010')
    
    break ;
    
    default : console.log('saal match nhi huya')
    
    
    
    
    
  } 
  
  
  
  
  
  */









  /*
 
 
 
 
 
 
 
 
 //------(((((    LOOPS    )))))-------



// for loop (initialisation ; condition ; itaration ).

//syntex of for loop for (let index = 0 ; index <6 ; index++){console.log(index);}





//   for  loop to iterate over array

//  ways  to iterate array with for loop

let myArry = ['hi','bye','tata']  ;



// 1st way to itrate array with for loop

for(let i=0 ; i<myArry.length ; i++){
 console.log( myArry[i] );
}


// 2nd way to itrate array with for loop

myArry.forEach(function(element){
  console.log(element) ;
})







// 3rd way to itrate array with for loop

for(let some of myArry){
  console.log(some)
}








*/




  /*


    //myArry.forEach(function(element,index,array){console.log(`elementis ${element}`  ,`index is ${index}`  ,  `array is ${array}` ) ;})









    /*





    //  for loop to iterate over object

    let myObj = {
      
      name : 'pri'  ,
      kam : 'sona'  ,
      khana : 'mango'
      
    } 


    for(let key in myObj ){
      console.log(` key is  ${key} .  value is 
      ${myObj[key]} . `);
    }


    //for in loop for string


     let myString = 'This is a string'

      for (let c in myString) {
        console.log(myString[c])
      }





    */









  /*

//important
//-------((((  Function   )))))-------



  let name = 'pri' ;
  let thank = 'Thank you'  ;


  function greet1(){
    console.log(` hi ${name} good work ${thank}`);
  }
//defining a function doesn't execute it
//we have to invoke it..


  greet1(); //invoking the function

  //with parameter and argument

  function greet2(param1,param2){
    console.log(` hi ${param1} good work ${param2}`)
    
  }


  greet2('piri', 'thanks') ;

  //giving default value to parameters

  function greet3(name = 'guest', thank= 'thanks'){
    console.log(`hi ${name} good work ${thank}`)
  }

  greet3();//here argument is empty so default value will print


  //Returning  in function  



  function greet4(param){
   
    let greeting = `This is a return value ${param}` ;
   
   return greeting; 
  }

  let value = greet4("kuch") ;

  console.log(value);

  //function in object called method

  let myObject = {
    name : 'pri' ,
    
    game : function (){
      return 'GTA' ;
    }
  }

  console.log(myObject.game() )

   // game
   
  */

  //note:-first class function - the ability to use a function as a value . we can use the value(function) as a argument  to pass it to an other function . or we can return the value(function)  from an other function of


  /*


//  callback function and higher order function

let students = [
{  name:'pri'  , subject : 'math' } ,
{  name:'pili' , subject : 'geo' }  ,
{  name:'priu' , subject : 'history' }
  ] ;
 console.log(students)  ;

  
  
//  HIGHER ORDER FUNCTION:-  a function which takes another function as an argument or return another function calls higher order function

//here enrolStudent is a higher order function
  
  
  
  
  //closure:-  function along with its lexcical scope forms a closure
  
  
  //scpoe :-scope is where we can access a specific variable or function in our code
  
  //lexcical environment is the local memory along with the lexical environment of its parent 
  //when we try to access something it will find it in the current scope(a inner function) then moves to its parent's scope
  and search..this searching in scope is call scope chaining
  
  
  
  
  
  
  //CALLBACK FUNCTION:- a function which get passed to  another function  (higher order function ) calls callback function here getstudent is a callback function
  
  //note :- while passing a callback function we don't invoke the function we just pass the reference (name) to a higher order function
  
  
  function enrolStudent(student,callback){
    setTimeout(function(){
      students.push(student) ;
      console.log(students) ;
      console.log('newStudent enrolled🤓',student.name) ;
     callback() ;
    },2000)
  }
  
  
let newStudent = {name:'tom', subject:  'lifeS.'}
//   enrolStudent(student) ;

function getStudent(){
  setTimeout(function(){
    let str ='';
    students.forEach(function(student){
      str +=`<li>${student.name}</li>` ;
      
  
document.getElementById('student').innerHTML = str;
      
    })
  },1000)
  
}
// getStudent()

enrolStudent(newStudent,getStudent)


//another example of callback

let greetMorning = ()=>{
  return 'Good morning'
}


let robot = (name,cb) => {
  console.log(`hi ${name} ${cb()}🤖 `)
}


robot('pri',greetMorning)  ;

//here greetMorning is callback function and robot is a higher order function





*/









  /*




    //   Timing based event


    //setTimeout method execute the function after waiting for the specified milliseconds

    function greet1 (){
      console.log('hi')  ; 
         } ;
         
    setTimeout(greet1,2000) ;

    
    let greeting = setTimeout(function greet2(){
         console.log('hello') ;
           },1000)  ; 
    
    

    //we have to store the set time's hendeler to stop

    document.addEventListener('click',function(){
      clearTimeout(greeting);
      //now hello will not print
      
    })







    //setinterval keep executing the function  after specified time  again and again

      let num = 0;

    let count = setInterval(function greet3(){
      
        num++;
          console.log('   Hï  ' + num);

        },1000)

    let div = document.getElementById('div')  ;

      
    div.textContent= ('Tap anywhere to stop the count')

    document.addEventListener('click',function(e){
      clearTimeout(count) ;
      div.textContent=('count stoped') ;

    })

  //we have to store the setinterval in a variable to use cleartimeOut on it
  */







  /*





    //  DATE object in JavaScript  -----======---->

    // creating data object new Date() ;


  // new Date is the date object it has everything about time we have to just access it's properties and methods


  let date = new Date ;

  let hours = date.getHours() ;

  let minutes = date.getMinutes() ;

  let seconds = date.getSeconds() ;

  console.log(hours+':'+minutes+':'+seconds)



  */


  /*


      
      
      setInterval( function(){
        
     let date = new Date()  ;l

     let time = date.toLocaleTimeString() ;
        
   document.getElementById('div').textContent=`
       The time is :-> ${time}`;
        
      },1000
      )
      
      
    */







  //   DESTRUCTION ------------

  // array destruction===>

  //    let myName = ['pri','deb',21] ;

  /*
    

  //   normal way
     let firstName = myName[0] ;
     let lastName = myName[1] ;
     let age = myName[2] ;
    
     console.log( lastName )

  */
  /*

  //using array destruction

  //  let [firstName,lastName,age] = myName 

  //  console.log(firstName)

  //  we can add value too
  
  let [firstName,lastName,age,nickName='spoiler'] = myName ;

       console.log(nickName)  ;


    // destructuring Object

    //normal way

     let myBiodata = {myName:'pri',lastName:'deb',age :21}

    console.log(myBiodata['age']) ;

  */





  /*


  //using object destructing

   let myBiodata = {
     myName:'pri',
     lastName:'deb',
     age :21,
     'nickName':'spoiler'
    } ;


   
   let { myName,lastName,age,nickName} = myBiodata ;
   
   console.log(nickName) ;
   
      console.log(myBiodata['nickName'])

  */


  /*

  //   Spread oporater --->>>>>>====


  // spread oporater on array


  let favColor = ['blue', 'white'] ;

  console.log(favColor );

  let allColor = [ ...favColor ,'pink','red']

  console.log(allColor) ;



  // spread oporater on object

  let color = {
    color1:'red',
    color2:'blue',
    color3:'green'
    
  }
  console.log(color)

  let moreColor ={ 
    ...color,
    color4:'pink',
    color5:'orange'
  }

  console.log(moreColor)

//Rest parameters

//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, 






  */
  let acceptAllArgs = (...args) => {

    let total = 0
    for (let i = 0; i < args.length; i++) {
      total = total + args[i]
    }
    console.log({ total })
  }

  acceptAllArgs(1, 2, 3, 4, 5)






  //object.value and object.entrues

  let myObj = {
    name: 'pri',
    age: 21,
    pro: { pro: "value" }
  }

  console.log(Object.values(myObj));

  let newObj = Object.entries(myObj);
  //object.entries converting object to array


  console.log(newObj);

  let newArry = Object.fromEntries(newObj);

  //object.fromEntries converting  the array back to object

  console.log(newArry);


  //note:-let is block scoped and var is function bassed . means variable defined as let is valid in that  block of scope only  and variable defined as var is valid in that function only 

  //note:-use includes method to find a array element is present in an  array elements  or not . includes() -return boolean values

  // note:- use contains method to find a dom element is present in an parent dom elements or not . contains() -return boolean values



  //
