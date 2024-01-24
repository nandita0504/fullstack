
//------OBJECTS------

//---how to declare objects ---
//1st way
var cust1={
    "name":"subha",
    "age":"20",
    "phnno":"6374053731"//for last keypair-value comma is optional
    
}
//console.log(cust1)

//adding details
cust1["id"]="20CDR028"
console.log("Customer 1 : ",cust1)

//2nd way
var cust2={} 
cust2["id"]="28"
cust2["name"]="harish"
cust2["age"]="19"
cust2["phn no"]="9095769701"
console.log("Customer 2 : ",cust2)

//3rd Way
var kongu = new Object()
kongu["fees"]="100000"
kongu["accomoation"]="Good"
kongu["food"]="Average"
kongu["Hostelcount"]="10"

console.log("KEC",kongu)

//Accessing specific keyvaluepair

console.log(kongu.food)
console.log(kongu["Hostelcount"])
