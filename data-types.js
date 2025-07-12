/* let numOne = 3
let numTwo = 3

console.log( numOne == numTwo)

let js = 'Javacript'
let py = 'Python'

console.log(js == py)

let lightOn = true
let lightOff = false
console.log( lightOn == lightOff)

let nums = [1, "HHSS", 3]
let tums = [1, "HHS", true, null]

nums[0] // 1
nums[2] // 3
nums[1] // HHHS

nums[2] = 777

console.log(nums)
console.log(tums)

let name = 'Hasan'
let surName = 'Salik'
// let fullName = name + '   ' + surName

  
let a = 5
let b = 6
let fullName = `${name}
test
deneme
${a} + ${b} = ${a+b}
${surName}`

console.log(fullName)



let paragraph = 'hello\
test\
deneme'
console.log(paragraph)



let parag = "benim\nadım\nhasan\nsalik"
console.log(parag)
*/
let challenge = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length) //Stringin uzunluğunu tarayıcı konsolunda yazdırma:
console.log(challenge.toLocaleUpperCase()) // Stringdeki tüm karakterleri büyük harfe çevirme:
console.log(challenge.toLocaleLowerCase()) //Stringdeki tüm karakterleri küçük harfe çevirme:
console.log(challenge.substr(0, challenge.indexOf(' '))); //Stringin ilk kelimesini kesme:
console.log(challenge.substr(challenge.indexOf(' ') + 1)); //'30 Days Of JavaScript' stringinden 'Days Of JavaScript' ifadesini kesme:
console.log(challenge.includes('Script')); //Stringin 'Script' kelimesini içerip içermediğini kontrol etme:
console.log(challenge.split()); //Stringi bir diziye dönüştürme:
console.log(challenge.split(' ')); //'30 Days Of JavaScript' stringini boşluktan bölme:

let techCompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(techCompanies.split(', ')); //'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' stringini virgülden bölüp diziye dönüştürme:

console.log(challenge.replace('JavaScript', 'Python')); //'30 Days Of JavaScript' ifadesini '30 Days Of Python' ile değiştirme:
console.log(challenge.charAt(15)); //'30 Days Of JavaScript' stringinde 15. indexdeki karakter:
console.log(challenge.charCodeAt(challenge.indexOf('J'))); //'30 Days Of JavaScript' stringindeki 'J' karakterinin karakter kodu:
console.log(challenge.indexOf('a')); //'30 Days Of JavaScript' stringinde 'a' harfinin ilk geçtiği konum:
console.log(challenge.lastIndexOf('a')); //'30 Days Of JavaScript' stringinde 'a' harfinin son geçtiği konum:

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because')); //'You cannot end a sentence with because because because is a conjunction' cümlesinde 'because' kelimesinin ilk geçtiği konum:

console.log(sentence.lastIndexOf('because')); //'You cannot end a sentence with because because because is a conjunction' cümlesinde 'because' kelimesinin son geçtiği konum:

console.log(sentence.search('because')); //console.log(sentence.search('because'));

let challengeWithSpaces = ' 30 Days Of JavaScript ';
console.log(challengeWithSpaces.trim()); //Bir stringin başındaki ve sonundaki boşlukları kaldırma:

console.log(challenge.startsWith('30')); //'30 Days Of JavaScript' stringinin belirli bir stringle başlayıp başlamadığını kontrol etme:

console.log(challenge.endsWith('JavaScript')); //'30 Days Of JavaScript' stringinin belirli bir stringle bitip bitmediğini kontrol etme:

console.log(challenge.match(/a/g)); //'30 Days Of JavaScript' stringindeki tüm 'a' harflerini bulma:

let part1 = '30 Days of';
let part2 = 'JavaScript';
console.log(part1.concat(' ', part2)); //let part1 = '30 Days of';

let part3 = 'JavaScript';
console.log(part1.concat(' ', part3));

console.log(challenge.repeat(2)); //'30 Days Of JavaScript' stringini 2 kere yazdırma:

let num = '10';
if (typeof num !== typeof 10) {
    num = Number(num);
}
console.log(num, typeof num); // '10' tipinin tam olarak 10'a eşit olup olmadığını kontrol edin. Eşit değilse, tam olarak eşitleyin:

let floatNum = parseFloat('9.8');
if (floatNum !== 10) {
    floatNum = Math.ceil(floatNum);
}
console.log(floatNum); //parseFloat('9.8')'in 10'a eşit olup olmadığını kontrol edin, eşit değilse 10'a eşitleyin:

console.log('python'.includes('on') && 'jargon'.includes('on')); // 'on' kelimesinin hem python hem de jargon kelimesinde geçip geçmediğini kontrol edin:

let sentencee = "I hope this course is not full of jargon.";
console.log(sentencee.includes('jargon')); //"I hope this course is not full of jargon." cümlesinde 'jargon' kelimesinin geçip geçmediğini kontrol edin:

console.log(Math.floor(Math.random() * 101)); //0 ile 100 arasında rastgele bir sayı oluşturun:
 
console.log(Math.floor(Math.random() * 51) + 50); //console.log(Math.floor(Math.random() * 51) + 50);

console.log(Math.floor(Math.random() * 256)); // 0 ile 255 arasında rastgele bir sayı oluşturun:

let js = "JavaScript";
let randIndex = Math.floor(Math.random() * js.length);
console.log(js[randIndex]); // 'JavaScript' stringindeki karakterlere rastgele bir sayı kullanarak erişin:

//Aşağıdaki deseni yazdırmak için console.log() ve kaçış karakterlerini kullanın:
/* 1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 */
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");



