// a function is embedded inside called by another function through parameters.
function ramu(welcomemessage,callBack){
    setTimeout(function(){
        console.log(welcomemessage)
        callBack();
    },2000)

}
function mini(){
    console.log("odi poiru")
}
ramu("helo ramu,welcome to kec",mini)


//Form submission example

function submitForm(buttonClick,db){
    setTimeout(function(){
        console.log(buttonClick)
        db();
    },2000)

}

function database(){
    console.log("form submitted sucessfully")
}

submitForm("Form Submit button clicked",database)