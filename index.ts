/*************************************************
Full Name: Syed Abu Owais Bin Nasar
Discord Username: owaisnasarubit#7433
Roll No.: PIAIC83125
Email: owatheowais@gmail.com
Twitter: @owatheowais
GitHub Profile URL: https://github.com/owatheowais
Linkedin: https://www.linkedin.com/in/abuowais/
WhatsApp Number: 03442124471
**************************************************/
import { question } from "readline-sync";

var numberofguess = 0, guessNum2: number, HighNum: number;
function main():void{

    const HighNumber:string = question("Please enter Maximum ranger to start a game: ");
    const isvalid:boolean = isNumber(HighNumber);
     if(isvalid)
    {
    HighNum = parseInt(HighNumber);
    const randomNumber = Math.floor(Math.random() * (HighNum -1 + 1)) + 1;
    guessNumber(HighNum,randomNumber);
    }
    else
    {
        console.log("Please enter valid input (number)");
        main();
    }

}

function guessNumber(HighNum:number,randomNumber:number){

do{
if(numberofguess>=HighNum)
{
    console.log("Maximum attempt reached, You loose...!")
    break;
}

const guessNum:string = question("Please guess a number between 1 to "+HighNum+": ");
const isvalid:boolean = isNumber(guessNum);
 if(isvalid)
{
guessNum2 = parseInt(guessNum);

if(guessNum2>randomNumber){
    console.log("Please, Lower number:");
    numberofguess++;
    console.log("Attempt used: "+numberofguess);
}
else if(randomNumber>guessNum2){
    console.log("Please, Higher number:")
    numberofguess++;
    console.log("Attempt used: "+numberofguess);
}
else {console.log("You guessed the number in " + numberofguess +" attempts!" + "\nGuessed Number: "+guessNum2 +"\nCongrats....! You won ");}
}
else
{
    console.log("Please enter valid input (number)");
    guessNumber(HighNum,randomNumber);
}
}while(guessNum2!=randomNumber);
}
function isNumber(str:string): boolean
{
    const mayBenumber = parseInt(str);
    const isNum: boolean=!isNaN(mayBenumber);
    return isNum;
}

main();