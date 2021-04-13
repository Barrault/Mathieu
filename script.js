/*tab = [0,2,4,6,8]
for (i = 0; i < tab.length; i++){
    console.log(tab[i]);
}

for (i in tab){
    console.log(i);
}

for (i of tab){
    console.log(i);
}*/


function division(a, b){
    try{
        res = a / b;
    }catch(e){
        console.log(e);
    }
}

console.log(division(5, a));