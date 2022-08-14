alert("مرحبا بك في موقعي الذي سيحسب درجاتك")
let grade =prompt("ادخل درجتك")
console.log(grade)

if (grade>=90){
    console.log("%c لقد حصلت على امتياز 🥳" , "color: green")
}
else if (grade>=80){
    console.log("%c لقد حصلت على جيد جداً🤩", "color: lightgreen")
}
else if (grade>=70){
    console.log("%c لقد حصلت على جيد🙂", "color: yellow")
}
else if (grade>=60){
    console.log( "%c لقد حصلت على مقبول😕", "color: orange" )
}
else if (grade>=50){
    console.log ("%c لقد حصلت على ضعيف☹️" , "color: orangered")
}
else if (grade<50){
    console.log("%c راسب💔", "color: red" )
}
// javascript is not javaaa
// thank you