console.log("---------SET----------")
setEg = new Set()
setEg= new Set(["admk","dmk","bjp"])
setEg.add("congress")
setEg.add("admk")
console.log(setEg)
console.log("-----for of------")
//for of
for (const i of setEg) {
    console.log(i)
    
}
console.log("-----for each------")
//for each

setEg.forEach(element => {
    console.log(element)
});

//for in
/*for(i in setEg)
{
    console.log(i)
}
no op for for in
*/

//----------------MAPS-------------

console.log("--------MAP-------")
mapeg = new Map([
    ["id","21cdr028"],
    ["name","subha"],
    ["phn","9080270637"]
])
console.log(mapeg)

console.log("-----for of------")
//for of
for (const i of mapeg) {
    console.log(i)
    
}
console.log("-----for each------")
//for each

mapeg.forEach(element => {
    console.log(element)
});

console.log("------------")
//console.log(mapeg.has(name1))

