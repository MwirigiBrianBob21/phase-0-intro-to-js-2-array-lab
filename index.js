// Write your solution here!


const cats = ["Milo","Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;  
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
function appendCat(name){
    var moreCats=[...cats, name];
    return moreCats;
}
function prependCat(name){
    var moreCats1=[name, ...cats];
    return moreCats1;
}
function removeLastCat(){
    var lessCats=cats.slice(0, cats.length-1)
    return lessCats;
}
function removeFirstCat(){
    var lessCats1=cats.slice(1);
    return lessCats1;
}