// функция работает для прямых треугольников
let button = document.getElementById("button");
// Массив длин сторон (пустой)
let MassOfData = [];
// Функция для опредиления большей (по длинне) стороны треугольника
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
// Функция для опредиления меньшей (по длинне) стороны треугольника
function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
  }
// Функция для опредиления средней (по длинне) стороны треугольника
function middle(a,b,c){
if ((a >= b && a <= c)||(a >= c && a <= b)){
    let middle = a
        return middle;
    }
    else if ((b >= a && b <= c)||(b >= c && b <= a)){
        let middle = b
        return middle;
    }
    else if ((c >= a && c <= b)||(c >= b && c <= a)){
        let middle = c
        return middle;
    }
}



// Выполняет подсчёт длин сторон треугольника
 button.onclick = function (){
     let c = Number(document.getElementById("length").value);
     let b = Number(document.getElementById("base").value);
     let a = Number(document.getElementById("length2").value);
     
    // Наполнение массива
        MassOfData.push(c,b,a)
        console.log(MassOfData)
        let max = getMaxOfArray(MassOfData)
        let min = getMinOfArray(MassOfData)
        let median = middle(a,b,c)
    // Выводит в консоль значения самой длинной, короткой и средней стороны треугольника
        console.log(max)
        console.log(min)
        console.log(median + " is a median")
    // Сумма двух меньших сторон
        let If = min + median
        console.log(If + 'if')
// Если большая стороная равна или больше суммы двух меньших, то треугольник востроить нельзя
     if (max < If ) {
        console.log(min + median)
        div.innerHTML = "с такими сторонами -- МОЖНО построить треугольник"  
    }
    //  else if ((a == b || a==c || c==b) && (a <= b, a<=c, c<=b)) {
    //     div.innerHTML = "с такими сторонами -- МОЖНО построить треугольник"
    //  }
     else {
        div.innerHTML = "с такими сторонами -- НЕДЬЗЯ построить треугольник"
     }
     return MassOfData = []
     
}