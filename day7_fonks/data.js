let a = 5
console.log(a)

function sayhello(){
    console.log("Merhaba Fonksiyon")
}
sayhello();

function tamİsim (){
    let firstName = 'Hasan Hüseyin'
    let lastName = 'Salik'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}
tamİsim()

function printFullName (){
      let firstName = 'Asabeneh'
      let lastName = 'Yetayeh'
      let space = ' '
      let fullName = firstName + space + lastName
      return fullName
}
console.log(printFullName())

  function addTwoNumbers() {
      let numOne = 2
      let numTwo = 3
      let total = numOne + numTwo
      return total
  }
console.log(addTwoNumbers())

function multiply(num1,num2){
    let total = num1+num2
    return total
}
let total = multiply(5,2)
console.log('Toplam', total)

function daireAlani (r){
    let alan = Math.PI * r * r
    return alan
}
console.log(daireAlani(10))

function kare(sayi){
    return sayi * sayi
}
console.log(kare(5))

function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
    //calling a function
console.log(sumArrayValues(numbers));

