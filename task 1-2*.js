let age_1

const checkAge = function(age_1)
{ 
    let age_2 = 18  
    let age_3 = 60
    if (typeof(age_1) == "number" ) {
        if ( age_1 < age_2) {
                console.log("It's less then")
            } else if (age_1 >= age_2 && age_1 < age_3) {
                console.log("Welcome")
            } else if (age_1 > age_3) {
                console.log("Keep calm and look Culture channel")
            } 
        else {
        console.log("Technical work")
    }  
} else {console.log("not integer value")}   
}
checkAge(Number("2a"))
checkAge(17)
checkAge(18)
checkAge(61)
checkAge("hi")
checkAge(Number("2"))
