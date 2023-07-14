// *** Degisken Tanimlama Kurallari *******

// Degisken Genel Tanimlama Kurallari 

// CamelCase Kullanimi:
 let fullname =""  // bu dogru kullanim degil :(
let kodluyoruzserverinfo = "" // bu dogru kullanim degil :(
let kodluyoruz_server_info ="" // bu dogru kullanim degil :(
let fullName ="" // dogru kullanim  :)
let kodluyoruzServerInfo = "" //bu dogru kullanim :)   
let kodluyoruzSERverInfo ="" // bu dogru kullanim degil :(

// let firstName =" Osman Can" , lastName =" Gundogdu" // Bu kullanim doğru degil daha okunakli acidan soyle yapilmalidir
firsName = " Osman Can"
lastName =" Gundogdu"
console.log(firsName , lastName)


//UPPER_CASE Kullanimi:
const password ="1234" // bu dogru kullanim degil:(
const PASSWORD ="1234" // bu dogru kullanim degil :(
const SERVER_PASSWORD ="1234" // bu dogru kullanim


// degiskenlerde turkce ve diger dillerin kullanimi:
let türkçeBilgi = "Türkçe Bilgi Yazdılırıyor."
//let turkceBilgi // olmaz :(  (Çünkü değişkeni atarken  türkçe yazılmaz ama içini doldururken yazılabilir)
let info = "Türkçe Bilgi Yazdırılıyor"
console.log(info)

//anlamsiz degisken adlari kullanmayiniz

let x = 1; //bu dogru kullanim degil :(
// x, y, z, k, i, e gibi anlamsiz degisken isimlerini kullanmayin !


// #Ek Bilgi
// 1:boolean tanimlarken is/has kullanimi:
let isActive = true
let hasPassword = false

// 2: Line Length <80
// example;
// sadlsakdşsakldaşskdşadakdaşldkljasdkjasdjaldkajdakldjaklsjdaljsdlajdalsdjal
//  col en fazla 78 79 olabilir daha uzun satir olmamalidir okunma acisindan daha iyidir.