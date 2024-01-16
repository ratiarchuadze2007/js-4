//1) დავწეროთ ფუნქცია რომელსაც გადეცემა რაიმე პარამეტრი და არგუმენტად
//მიიღებს ისეთ რიცხვებს რომლის დახმარებითაც უნდა გამოვითვალო
//მაგალითად რამდენი წელი გვაკლდება თითოეულს პენსიამდე და ეს
//ყველაფერი უნდა დავწეროთ ამ ფუნქციაში.

const before60 = (age) =>{
    let myAge = age;
    let pensia = 60;
    let darchenilia = (pensia - myAge);
    return (`pensiamde darcha ${darchenilia} weli`)
}

console.log(before60(16));

//2)შექმენით კალკულატორის ფუნქცია სახელად კალკულატორი,
// რომელიც ასრულებს ძირითად არითმეტიკულ ოპერაციებს.
// ამ ფუნქციამ უნდა მიიღოს სამი პარამეტრი: ორი რიცხვი და სტრიქონი,მაგალითად num1,num2, "+".
// რომელიც წარმოადგენს არითმეტიკულ ოპერატორს ('+', '-', '*', '/').
// მოწოდებული ოპერატორის მიხედვით, ფუნქციამ უნდა შეასრულოს შესაბამისი ოპერაცია ორ ნომერზე და დააბრუნოს შედეგი.

 const calculator =(num1,num2,string) => {
    if(string === "-"){
        let gamokleba = num1 - num2;
        return gamokleba;
    }else if(string === "+"){
        let mimateba = num1 + num2;
        return mimateba
    }else if(string === "/"){
        let gayopa = num1 / num2;
        return gayopa;
    }else if(string === "*"){
        let gamravleba = num1 * num2;
        return gamravleba;
    }else if (string === "%"){
        let nashti = num1 % num2;
        return nashti;
    }

 }

 console.log(calculator(10,3,"%"));

//3)შეიმუშავეთ ფუნქცია სახელწოდებით checkPasswordStrength, რომელიც აფასებს მოცემული პაროლის სიძლიერეს.
// პაროლის სიძლიერე განისაზღვრება რამდენიმე კრიტერიუმის საფუძველზე: ის უნდა იყოს მინიმუმ 8 სიმბოლო და მაქსიმუმ 16 სიმბოლო;
// ფუნქციამ უნდა დააბრუნოს სტრიქონი სადაც გვეწერება რომ თუ ნაკლებია 8 მაშინ შესაბამისი ერორით თუ მეტია 16 მაშინ შესაბამისი ერრორით და თუ ცარიელია input უნდა შევამოწმოთ ეგეც
//გამოიყენეთ if-else განცხადებები თითოეული კრიტერიუმის შესამოწმებლად და სიძლიერის შესაფასებლად.

let password = ""

    if(password.length <= 16 && password.length > 8){
        console.log("wellcome");
    }else if(password.length > 16){
        console.log("your password is to long")
    }else if(password.length < 8 && password.length === ""){
        console.log("your password is to short")
    }else if(password === ""){
        console.log("write your passwrd!!!!")
    }else{
        console.log( "eror")
    }



//4) დაწერეთ ფუქნცია სადაც პარამეტრად გავატანთ flowers და არგუმენტად გავატანთ ყვავილების სახეობებს.
//და გვჭირდება რომ switch case დავწეროთ ლოგიკა რომ თუ შესაბამისი სახელის ყვავილები გვაქვს მაშინ დავაბრუნოთ console-ში 
//ეს ყვავილი ნაპოვნია!!

const flowers = (flower)=> {
    switch (flower) {
        case "vardi":
            return ("vardi napovnia");
            break;
            case "gvirila":
                return ("gvirila napovnia");
            break;

            case "iasamani":
                return ("iasamani napovnia");
            break;

            case "yayacho":
                return ("yayacho napovnia");
            break;
        default:
            return ("yvavili  araris!!!!");
            
            break;
    }
}

console.log(flowers("va4rdi"));

//5)გვჭირდება სამი prompt.გვჭირდება რომ ამ სამ ინფუტში შემოყვანილი რიცხვებიდან რომელი არის უდიდესი ის დავიჭიროთ და დავლოგოთ უბრალოდ.
// მაგალითად.2,5,7 და აქედან უდიდესი არის 7.
//დაწერეთ ფუნქციაში ეს ყველაფერი და შემდეგ ამ ფუნქციაში შეამოწმეთ if else დახმარებით!!

const bigNumber = (NUM1, NUM2, NUM3 ) =>{
 if(NUM1 > NUM2 && NUM1 > NUM3){
    return NUM1;
 }  else if(NUM2 > NUM1 && NUM2 > NUM3){
    return NUM2;
 } else if(NUM3 > NUM1 && NUM3 > NUM2){
    return NUM3;
 }else{
    return("erorr");
 }
}

console.log(bigNumber(3,2,9));