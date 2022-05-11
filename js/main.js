

function fibo(n) {


    if (n == 0) {
        return 0;
    }

    if (n == 1) {
        return 1;
    }

    return n;
}

let wynik = fibo(0);
console.log(wynik);
console.log(fibo(1));
console.log(fibo(2));
console.log(fibo(3));
console.log(fibo(4));
console.log(fibo(5));

function dodawanie(a, b) {

    return a + b;

}

console.log(dodawanie(1,6));
console.log(dodawanie(108,120));

function odejmowanie(a, b) {
    let zmienna = a - b

    return zmienna


}

let liczba = 108;
console.log(odejmowanie(3,5));
let roznica = odejmowanie(liczba,wynik);
console.log(roznica);

function mnozenie(a,b) {
 let mnozenie = a * b;

    return mnozenie;
}
console.log(mnozenie(5,8));

function dzielenie(a,b) {
let dzielenie = a/b

return dzielenie

}
console.log(dzielenie(20,5));
console.log(dzielenie(605,8));







// function fibo(fibonacci) {

//     if (n == 0) {
//         return 0;
//     }

//     if (n == 1) {
//         return 1;
//     }
    
//     return fibo(n - 1) + fibo(n - 2);
// }