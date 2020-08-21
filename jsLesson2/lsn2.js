// age

let age = prompt('How old are you? ');

if (age < 2 ) {
    alert('You are so young' )}    
    
    else if (age >=12 && age <= 17) {
        alert('You are teenager' )}

    else if (age >= 18 && age <= 59 ) {
        alert('You are adult' )}

    else if (age >= 60) {    
        alert('You are retiree')} ;


alert('next');

// numbers

let num = prompt('Put any number ');


if (num == 0 ) {
    alert(')' )}    
    
    else if ( num == 1 ) {
        alert('!' )}

    else if ( num == 2 ) {
        alert('@' )}

    else if ( num == 3 ) {    
        alert('#')} 

    else if ( num == 4 ) {    
        alert('$')} 

    else if ( num == 5 ) {    
        alert('%')}
        
    else if ( num == 6 ) {    
        alert('^')}

    else if ( num == 7 ) {    
        alert('&')}

    else if ( num == 8 ) {    
        alert('*')}

    else if ( num == 9 ) {    
        alert('(')}


alert('next')

// years go by

let year = prompt('Write any year')


if (year % 400 && 400 % 400){
    alert('This year is leap' )
}
else;{alert('This year is not leap');}

 alert('next')


                            ////////////////////

// \\

// let pal = prompt('Write any number ')

// function reverseInt(pal) {
//     var result = '';
    
//     while(number>0){
//      result = result + (pal%10);
//      pal = parseInt(pal/10);
//     }
    
    
  
  
  
// if (pal == result) {
//     alert('pal')
// }
// else{
//     alert('not')
// }
// return result;}

// \\
                            ////////////////////


// деняжки

let mny = prompt('exchange usd in: AZN / UAN / EUR');

let azn = 1.7;

let uan = 27.47;

let eur = 0.85;


if (mny == 'AZN' || mny == 'azn'){
 let ex = prompt('How many?');
    alert( ex * azn )}
    else if (mny == 'EUR' || mny == 'eur') {
        let ex = prompt('How many?');
            alert( ex * eur )}
    else if (mny == 'UAN' || mny == 'uan') {
        let ex = prompt('How many?');
            alert( ex * uan )}   
            

alert('next')


// скидочки

let p = prompt('put a purchase amount');

let  pa = p/1

if (pa >= 200 && pa <= 300) {
    let pawp = pa / 100 * 3

    let uts = pa - pawp

    alert('You must pay: '+ uts);
}
else if (pa > 300 && pa <= 500) {
    let pawp = pa / 100 * 5

    let uts = pa - pawp

    alert('You must pay: '+ uts);
}
else (pa > 500 && pa < 1000000000000000); {
    let pawp = pa / 100 * 7

    let uts = pa - pawp

    alert('You must pay: '+ uts);
}

 
alert('next')

//  круг и квадрат

let c = prompt('введи любую длинну окружности');

let pr = prompt('введи любуй периметр');

// r == c / (2 * 3.14) 

let sied = pr / 4

let r = c / (2 * 3.14)

if (sied == 2 * r){
    alert('круг поместится в квадрат')
}
else (sied < 2 * r || sied > 2 * r);{
    alert('круг не поместится в квадрат')
}

