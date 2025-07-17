/*
let isRaining = true
if(isRaining){
    console.log("Şemsiye al")
} else{
    console.log("Hava güneşli, şemsiyeye gerek yok")
}

let num = 3;
if(num > 0){
    console.log(`${num} Pozitif sayıdır.`)
} else {
    console.log(`${num} Negatif sayıdır.`)
}

let numm = -4;
if(numm > 0){
    console.log(`${numm} Pozitif sayıdır.`)
} else {
    console.log(`${numm} Negatif sayıdır.`)
}

  
let result = prompt("5/0 kaç yapar?" , ":)")
if(result=="tanımsız"){
    console.log("Cevap doğru")
} else{
    console.log("Cevap yanlış, doğru cevap tanımzsız olacaktı.")

}

let sayı = prompt("Bir sayı giriniz:");
if(sayı>0){
    console.log(`${sayı} bu pozitif bir sayı`)
} else if(sayı<0){
    console.log(`${sayı} bu negatif bir sayı`)
} else if(sayı==0){
    console.log(`${sayı} sayınız sıfır`)2
} else{
    console.log(`${sayı} Bu bir sayı değildir.`)
}


 let a = prompt("Rastgele sayı gir")
switch (true){
    case a>0:
        console.log(a," Sayınız pozitif")
    break;
    case a<0:
        console.log(a," Sayınız negatif")
    break;
    case a==0:
        console.log(a," Sayınız sıfır")
    break;
    default:
        console.log("Girdiğiniz ifade sayı değilidir!!")
}
let yas = prompt("Yaşınızı giirniz:")
if (yas>=18){
    console.log("Ehliyet alabilirsiniz")
}else{
    console.log("Ehliyet alabilmeniz için " + (18 - yas) + " yıl beklemeniz gerekiyor.");
}

let bYaşım = 24
let sYaşın = prompt("Yaşınızı giriniz:")
if(bYaşım<sYaşın){
    console.log("Benim yaşım " + bYaşım + ". Siz benden " + (sYaşın - bYaşım) + " yaş büyüksünüz.");
} else {
    console.log("Benim yaşım " + bYaşım + ". Ben sizden " + (bYaşım - sYaşın) + " yaş büyüğüm.");
}


let puan = prompt("Puanınızı girin:");

if (puan >= 80 && puan <= 100) {
    console.log("Notunuz: A");
} else if (puan >= 70 && puan < 80) {
    console.log("Notunuz: B");
} else if (puan >= 60 && puan < 70) {
    console.log("Notunuz: C");
} else if (puan >= 50 && puan < 60) {
    console.log("Notunuz: D");
} else if (puan >= 0 && puan < 50) {
    console.log("Notunuz: F");
} else {
    console.log("Geçerli bir puan girin.");
}

*/

let ay =  prompt("Ayı girin:").toLowerCase()
switch(ay){
    case "eylül":
    case "ekim":
    case "kasım":
        console.log("Mevsim: Sonbahar")
        break;

    case 'aralık':
    case 'ocak':
    case 'şubat':
        console.log("Mevsim: Kış");
        break;
    case 'mart':
    case 'nisan':
    case 'mayıs':
        console.log("Mevsim: İlkbahar");
        break;
    case 'haziran':
    case 'temmuz':
    case 'ağustos':
        console.log("Mevsim: Yaz");
        break;
    default:
        console.log("Geçerli bir ay girin.");
}
