let SHEET_ID = '1WKaF7t5WaK90OXiEDrJng8y3HuBJKhbDV71ruJ-3NMc';
let SHEET_TITLE = 'Residents';
let SHEET_RANGE = 'A1:I35';

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&reange=' + SHEET_RANGE);
 
fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    // data is the array of values
    let data = JSON.parse(rep.substr(47).slice(0,-2));

    let grid = document.getElementById('res_grid');
    let tables = document.getElementById('tables');

    let grid2 = document.getElementById('res_grid2');
    let len = data.table.rows.length-1

    console.log(data.table.rows.length);

    // the name
    console.log(data.table.rows[0].c[0].v);
    
    // res_name.innerHTML = data.table.rows[0].c[0].v;
    // res_appetizer.innerHTML = data.table.rows[0].c[1].v;

    let residents = [];
    let cold = [];
    let half = [];
    let noIce = [];
    let TPresent = [];
    
    class Resident {
        constructor(name, appetizer, water, carafe, cup, mug, small_milk, milk, cran_juice, present, tableR){
            this.name = name;
            this.appetizer = appetizer;
            this.water = water;
            this.carafe = carafe
            this.cup = cup;
            this.mug = mug;
            this.small_milk = small_milk;
            this.milk = milk;
            this.cran_juice = cran_juice;
            this.present = present;
            this.tableR = tableR;
        };
    }

    for (let i=0; i<len;i++){
        for (let j=0; j<=10;j++){
            let name = data.table.rows[i].c[j].v;
            j++;
            let appetizer = data.table.rows[i].c[j].v;
            j++;
            let water = data.table.rows[i].c[j].v;
            j++;
            let carafe = data.table.rows[i].c[j].v;
            j++
            let cup = data.table.rows[i].c[j].v;
            j++;
            let mug = data.table.rows[i].c[j].v;
            j++;
            let small_milk = data.table.rows[i].c[j].v;
            j++;
            let milk = data.table.rows[i].c[j].v;
            j++;
            let cran_juice = data.table.rows[i].c[j].v;
            j++
            let present = data.table.rows[i].c[j].v;
            j++;
            let tableR = data.table.rows[i].c[j].v;
            j++
            let person = new Resident(name, appetizer, water, carafe, cup, mug, small_milk, milk, cran_juice, present, tableR);
            residents.push(person);
            if (person.water == "cold" && person.present == 'P'){
                cold.push(person.name);
            }
            else if (person.water == "half" && person.present == 'P'){
                half.push(person.name)
            }
            else if (person.water == "no ice" && person.present == 'P'){
                noIce.push(person.name)
            }

            if (person.present == 'P'){
                TPresent.push(person.name)
            }
            // figute that out
            //if (person.tableR == m){
                
                //let table_ = document.createElement('div');
                //table_.id = 'table';
                //tables.append(table_);
                //table_.innerHTML = ("Table "+ j + ": " + person.name);
            //}
            //m++;
        };
        
        
    };

    
    console.log(residents);
    console.log("cold: " + cold.length);
    console.log("half: " + half.length);
    console.log("no ice: " + noIce.length);
    console.log("present: " + TPresent.length);
    console.log(data.length)




    
    let coldWater = document.createElement('div');
    coldWater.id = "cold";
    coldWater.class = "quantity";
    grid.append(coldWater);
    coldWater.innerHTML = ("Water with ice: "+cold.length);

    let halfCold = document.createElement('div');
    halfCold.id = "cold";
    halfCold.class = "quantity";
    grid.append(halfCold);
    halfCold.innerHTML = ("Half cold half hot water: "+half.length);

    let NoIce = document.createElement('div');
    NoIce.id = "cold";
    NoIce.class = "quantity";
    grid.append(NoIce);
    NoIce.innerHTML = ("water with no ice: "+noIce.length);   
    
    

})

