//******** let ve const ile Değişken Tanimlama */

// var  ile değişken tanimlama //

// var serverName = "osman.org"
// console.log(serverName)


// let ile değişkeni boş tanimlamak
 let serverName;
console.log (serverName)


// let ile değişkene bilgi atamak 
serverName = "https://kodluyoruz.org"
console.log(serverName)
// let ile değişkene bilgi atarayarak tanimlamak
let Password = "12345"
console.log(Password)

// değişken atamasi yapmadan once kullanmaya çalişmak
//  * HATALI KULLANIM
// console.log (fullName)
// let fullName="Osmancan Gündogdu"


let fullName="Osmancan Gündogdu"
// Let ile tanimlanan degiskenin icindeki bilgiyi degistirme
fullName = "Lorem Ipsum Dolor"
console.log (fullName)

// birleştirme  veya ekleme islemi
fullName + "Yeni eklenen Bilgi"    // acaba eklendimi 
console.log (fullName + " Test Bilgisi ")  // Ekle ve Goster hala degiskene eklemedik ????
fullName = fullName +" Yeni Bilgi"
fullName = " 2.Bilgi " +fullName

fullName = "sifirlandi"
fullName+= " ve yeni Bilgi eklendi "
console.log(fullName)
// const ile değişkeni boş tanimlamaya calişmak
// const serverPassword; sadece degisken tanımlandı ama ici bos ??

// const ile değişken tanimlama
const SERVER_PASSWORD = " oguz " 
console.log(SERVER_PASSWORD)

// SERVER_PASSWORD = "1234"
// console.log(SERVER_PASSWORD)

// const a bir degisken eklediginizde asla degistiremezsiniz örnegin TC KİMLİK GİBİ   cünkü bir kere tanımlanır
// LET e bir degisken eklediginiz de degistirebilirsiniz örnegin telefon gibi  bir cok kez degistirilip tanimlanabilir.



 let color= "blue";
console.log (color)

color = "kirmizi"
console.log(color)

const Büşra = "osman"
console.log(Büşra)

color+=" eklendi "
console.log(color)

color="sifirlandi"
color+=" mavi eklendi"
console.log(color)

color="kirmizi"
console.log(color)

fullName + "Yeni eklenen Bilgi"    // acaba eklendimi 
console.log (fullName + " Test Bilgisi ")

color = "sari"
console.log( color+" mavi")