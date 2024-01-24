//function with argument without return type
function fun(a,b){
    console.log("Function eg")
    for(i=0;i<b;i++){
        if(i%2==0){
            console.log("the number",i,"is even")
        }
        else{
            console.log("the number",i,"is odd")
        }
    }
}
fun(5,5)
console.log("--------------------")

//function without argument without return type
function fun1(){
    console.log("heloo")   
}
fun1()
console.log("--------------------")

//function without argument with return type

function fun2(){
    a=10
    b=20
    return a+b
}
ans=fun2()
console.log(ans)
console.log("--------------------")

//function with argument with return type

function fun3(a,b){
    return a-b
}
p=fun3(10,5)
console.log(p)
console.log("--------------------")

