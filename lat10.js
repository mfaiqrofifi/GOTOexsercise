// const student=[{name:"Faiq"}]
// try{
//     console.log(student[1]?.name)
// }catch(error){
//     console.log(error.message)
// }

const data=(detik)=>new Promise((resolve)=>setTimeout(resolve,detik))

data(100).then(()=>console.log("1"))
data(200).then(()=>console.log("2"))
data(10).then(()=>console.log("3"))
data(20).then(()=>console.log("4"))