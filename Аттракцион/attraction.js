// функция работает для прямых треугольников
let button = document.getElementById("button");
 button.onclick = function (){
     let c = document.getElementById("length").value;
     let b = document.getElementById("base").value;
     let a = document.getElementById("angle").value;
     // переводит грудусы в радианы
     let rad = 3.14159265359/180 
     a = a*rad;
     console.log(a)
     let sina = Math.sin(a);
     console.log(sina);
     let beta = (90-(a/rad))*rad;
     let sinb = Math.sin(beta)
     let rb = Math.round(c*sinb);
     if (b == rb) {
        let h = c*sina;
        // округляет высону горки до целых
        console.log(h)
        h = Math.round(h)
        let div = document.getElementById("div");
        div.innerHTML = "высота горки: " + h
    }
     else {
        alert("чтобы вычисления прошли корректно нужно изменить значение основания на: " + rb)
     }
     
 }