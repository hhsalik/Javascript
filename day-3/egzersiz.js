let firstName = "Hasan";
let lastName = "SALİK";
let country = "Turkey";
let city = "İstanbul";
let age = 24;
let isMarried = false;
let year = 2024;

console.log(typeof firstName);  // string
console.log(typeof lastName);   // string
console.log(typeof country);    // string
console.log(typeof city);       // string
console.log(typeof age);        // number
console.log(typeof isMarried);  // boolean
console.log(typeof year);       // number

console.log(typeof '10' === typeof 10);

let parseInt = 9.8;
console.log( parseInt === 10)

console.log(!!"Merhaba"); // true
console.log(!!1);       // true
console.log(!![]);      // true

console.log(!!"");  // false
console.log(!!0);   // false
console.log(!!null); // false

console.log(4 > 3);     // true
console.log(4 >= 3);    // true
console.log(4 < 3);     // false
console.log(4 <= 3);    // false
console.log(4 == 4);    // true
console.log(4 === 4);   // true
console.log(4 != 4);    // false
console.log(4 !== 4);   // false
console.log(4 != '4');  // false
console.log(4 == '4');  // true
console.log(4 === '4'); // false
console.log('python'.length != 'jargon'.length); // true

console.log(4 > 3 && 10 < 12);        // true
console.log(4 > 3 && 10 > 12);        // false
console.log(4 > 3 || 10 < 12);        // true
console.log(4 > 3 || 10 > 12);        // true
console.log(!(4 > 3));                // false
console.log(!(4 < 3));                // true
console.log(!false);                  // true
console.log(!(4 > 3 && 10 < 12));     // false
console.log(!(4 > 3 && 10 > 12));     // true
console.log(!(4 === '4'));            // true
console.log(!('dragon'.includes('on') && 'python'.includes('on'))); // false

let now = new Date();

console.log(now.getFullYear());               // Bugünün yılı
console.log(now.getMonth() + 1);              // Bugünün ay numarası (getMonth() 0 tabanlıdır)
console.log(now.getDate());                   // Bugünün tarihi
console.log(now.getDay());                    // Bugünün hafta numarası
console.log(now.getHours());                  // Şu anki saat
console.log(now.getMinutes());                // Şu anki dakika
console.log(Math.floor(now.getTime() / 1000)); // 1 Ocak 1970'ten şu ana kadar geçen saniye sayısı

let base = parseFloat(prompt("Tabanı uzunluğunu girin: "))
let height = parseFloat(prompt("Yüksekliiği girin: "))
let alan = (base * height)/2
console.log(`Üçgenin Alanı ${alan}`)
