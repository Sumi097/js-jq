
// JavaScript part start
// ex 
function type1(){
    var data=" hello world  ";
    document.getElementById('typeText1').innerHTML=data;
}
// ex 
function type2(){
    var data="hello world";
    document.getElementById('typeText2').innerHTML=data.repeat(3);
}
// ex 
function type3(){
 document.getElementsByClassName('p_text')[0].innerHTML="Hello";
}
// ex 
function type4(){
    let info=document.getElementsByTagName('p');
    alert(info.length);
}




// ex 
let text1=16+"vivo";
function datatype1(){
    document.getElementById('data1').innerHTML=text1;
}
// ex 
let text2=16+50+"vivo";
function datatype2(){
    document.getElementById('data2').innerHTML=text2;
}
// ex 
let text3,text4;
text3=123e5;
text4=123e-5;
function datatype3(){
    document.getElementById('data3').innerHTML=text3+"<br>"+text4;
}
// ex 
let text5=BigInt("12345678900987654321");
function datatype4(){
    document.getElementById('data4').innerHTML=text5;
}
// ex 
let textx,texty,textz;
textx=123e5;
texty=123e-5;
textz=123e5;
function datatype5(){
    document.getElementById('data5').innerHTML=(textx==texty)+"<br>"+(textx==textz);
}
// ex 

const names=["facebook", "instagram","whatsApp"];
function datatype6(){
    document.getElementById('data6').innerHTML=names[0];
}
// ex 

const person={
    firstName:"Vinicius",
    lastName:"Junior",
     age:"23",
};
function datatype7(){
    document.getElementById('data7').innerHTML=
    person.firstName +person.lastName+ " is " + person.age + " years old.";
}
// JavaScript part end 


// jquery part start 
// ex 1
// $("Document").ready(function(){
// $('button').click(function(){
// alert("wellcome");
// })
// });
$("Document").ready(function(){
    $('button').click(function(){
     $('#buttom1').hide();
 })
 });
 
