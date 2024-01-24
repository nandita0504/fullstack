//----for loop-----
sum1=0;
for(var i=0;i<10;i++)
{
    sum1+=i
}
console.log("Sum1 : ",sum1)
console.log("-------------")
//-----while-----

var k=0
sum2=0
while(k<10)
{
    sum2+=k
    k++
}
console.log("Sum2 : ",sum2)
console.log("-------------")
//----do...while-----

i=0
sum3=0
do{
    sum3+=i
    i++
}while(i<10);
console.log("Sum3 : ",sum3)
console.log("-------------")
//--------valid array---------
//eg1
arr1=[10,20,30]
console.log("Array1:")
for(i=0;i<arr1.length;i++)
{
    console.log(arr1[i])
}
console.log("-------------")
//eg2
arr1=[10,20.5,30]
console.log("Array2:")
for(i=0;i<arr1.length;i++)
{
    console.log(arr1[i])
}
console.log("-------------")
//eg3
arr1=[10,true,false]
console.log("Array3:")
for(i=0;i<arr1.length;i++)
{
    console.log(arr1[i])
}
console.log("-------------")
//eg4
arr1=[10,true,false,"KEC",20.5]
console.log("Array3:")
for(i=0;i<arr1.length;i++)
{
    console.log(arr1[i])
}
console.log("-------------")

//----for of loop------
for(const index in arr1){
    console.log("The value present in ",index,"is",arr1[index])
}
console.log("-------------")

//----for each loop-----

arr1.forEach((key,element) => {
    console.log(key,element)
});
console.log("-------------")

//------for in--------
for(key in arr1)
{
    console.log(key,arr1[key])
}
console.log("-------------")
