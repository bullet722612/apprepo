// let arr=[1,2,3];
// let arr2=[5,6];
// arr=[...arr, ...arr2];
// console.log(arr);

//DeclareVar in js
/*
**** console.log using for one var printing 
     console.table using for multiple variable 
    let name="shashank";
    let id=434
    let addrees="patna , 800025";
    cosnt homeTown='patna'
    let city;
    we can also use var but now in update version we suggest using const and let keyword for making a var
*/
let name1="shashank";
let city="patna";
const arePinCode=800025;
let addres="patna,800025";
let loginShashank=true;
console.log(`my name is ${name1}`);
console.log(`Details about me ${name1} ${city} ${arePinCode} ${addres} `);
console.log(name1);
console.table([name1,city,arePinCode,addres,loginShashank]);
/*
Here, we see type conversion in java :-
    basically we can change a datatype of a var by using type_conversion in any programing language we
    can change datatype 
    ex:-
    let score=33; now its number
    changeScore=(String(score)); now it will change => number to string 
    console.log(changeScore)
    1=> true; 0=> false;
    "" => false
    "shashank"=>true


*/
const score=33;
changeSt=(String(score));
console.log(typeof (changeSt));
const t="";
ch=(String(t));


//DataTypes in js 
 /*
 name="string"
 num=1
 bigint=bigint(101010)
 isLogged=true
 symbol
  */
 console.log(1+"2");
 console.log("1"+2+3);
 console.log(1+2+"3");
 console.log(2+"3"+"3")
 console.log(name1.toUpperCase());
 console.log(name1.lastIndexOf())
 console.log(name1.charAt(2));
 console.log(name1.length);
 console.log(name1.indexOf('h'))
 console.log(name1.substring(1,4));
console.log(name1.slice(-8,4));
const url='https://shashank.com/shashank%20kumar'
console.log(url.replace('%20','_'))
console.log(url.includes('shashank'))
console.log(url.includes('raj'))