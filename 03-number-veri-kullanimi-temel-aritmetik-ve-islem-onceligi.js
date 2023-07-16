// **** number ****
// number veri turu tanimlamak
let price = 100
let tax = 0.18
let priceTax = price * tax
let  total = price +priceTax
console.log ( " Fiyat:",price,
"KDV Orani:", tax ,
"KDV tutari:",priceTax , total
  )
  
  let stringNumber= "11"
  console.log (stringNumber) //"Yazi ile ifade edildigini anlayiniz"
  let newNumber= Number (stringNumber)
  console.log(newNumber) // string bir ifadeden  rakam olarak değiştiğini görebilirsiniz
  console.log("Number Constructor icine bilgi gonderildi:", Number("111")) // simdi de tekrardan string bir ifade oldu.

// arttirma ve azaltma islemleri
let counter = 320
counter = counter +1 //Uzun Yöntem 
counter+= 1
counter ++;
console.log (counter)


counter -- ;
counter -= 1;
console.log (counter)

counter *= 10;
console.log (counter)

counter /= 2;
console.log (counter)

// islem onceligi
console.log ( 2 + 3 *10) // acaba 50 mi ???
console.log ( (2+3) * 10 ) // 50 ???
// mod (kalan) alma %:
// sayı tek mi cift mi ???
console.log ( 17 % 2 ) // 0 ise cift  1 ise tek (bu örnekte cift bir sayidir)

// 8 urun alan  koliye  tum urunler sigiyor mu ?
console.log ( "Koli kalan urun ornegi:" ,18 % 8)

// us alma **:
console.log ( 2*2*2*2)
console.log (2 **4)
// asagi yuvarlama islemi -> Math-floor :
console.log ( "Asagi yuvarlama", Math.floor(1.9) )
// yukari yuvarlama islemi -> Math-ceil :
console.log ( "Yukari Yuvarlama", Math.ceil(1.9)  )
// yakina yuvarlama islemi -> math-round :
console.log ( "Yakina Yuvarlama",Math.round (1.5 ) ) // 1.4 ->1   //1.5 ->2









let pricee = 15000
let taxx = 0.18
let priceeTaxx = pricee * taxx
let totall = pricee * priceeTaxx
console.log("Fiyat:",pricee,
" KDV:", taxx ,
" KDV tutari:", priceeTaxx ,
" Toplam:", totall)




counter +=1
counter =counter+1
counter-=1
counter=-1;
counter=+1;
counter /=2
counter*=4
counter+=2


console.log (counter)


 Math.floor= (1.5)
Math.ceil= (1.8)
Math.round = (1.4)


console.log(21%3)
console.log (25%9)
console.log (15%8)

console.log(2*2*2*2)
console.log(2**4)

let oldNumber=Number(stringNumber)
console.log(oldNumber)