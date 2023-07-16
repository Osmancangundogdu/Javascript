// ******* Boolean Veri Turu ile calismak*******//


// 0 ve 1'i anlamak ->
let isActive = false
isActive=true
console.log(isActive)

let userName;
let isuserName = Boolean(userName)
console.log(isuserName)


Boolean("11") // true
Boolean("0")  // true
Boolean ("")  // false


userName="user" 

console.log (" User Name",Boolean(userName))

// NOT: YUKARIDA Kİ ÖRNEKLER GİBİ İÇİNDE VERİ VAR İSE TRUE YOK İSE FALSE OLUR.

// 0,-0,Null,false,NaN,underfined, ("")->
Boolean (0) // false
Boolean (-0) // false
Boolean  (-0.1) //true
Boolean  (0 ===0) // true

// Not: Karar yapilari kisminda,tekrar yapilicaktir.

Boolean (userName.length>0) // true



