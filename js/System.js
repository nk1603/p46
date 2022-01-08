class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        console.log(actualCode)
        console.log(enteredCode.toUpperCase())
        textSize(50);
        fill("black");
        text(code,300,300)
        if(actualCode === enteredCode.toUpperCase()) 
            return true
        else {
         
            return false}
    }

}
