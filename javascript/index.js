console.log("Faiq")
let data=0
let r
if(r){
    console.log(data+3)
}else{
    console.log(r)
}

const ds=data>3?"Fawas":data?"fifi":`data:${data}`
console.log(ds)

let cf="hallo"
let ct=30
switch(cf){
    case "hallo":
        console.log(`data:${ct}`)
        break
    default:
        console.log("hus")
}

for(let i=0;i<5;i++){
    console.log(i+":data")
}
let myArr=[2,1,3,"Faiq"]

for(let k of myArr){
    console.log(k+":data")
}
let rd=0
while(rd<10){
    console.log(rd+":gag")
    rd+=2
}

const user={
    firstName:"Lake",
    lastName:"Faiq",
    age:12, 
}
user["data"]="siap"
console.log(`nama:${user.data}`)
user["data"]="susu"
console.log(`nama:${user.data}`)
delete user["data"]
console.log(`nama:${user.data}`)
let datas=[1,2,3,"hallo"]
console.log(datas[1])
datas.push("hallp")
console.log(datas)
datas.pop()
console.log(datas)
datas.splice(1,1)
console.log(datas)
console.log(...datas)
let cs=[2,"fifi",12]
let tot=[...cs,...datas]
console.log(tot)
let ff={
    nama:"FAIQ",
    alamat:"fifi",
}
let nm={
    ...ff,
    ka:"hallo",
}
console.log(nm)
const {nama,ka:fifi,isName:gas=false}=nm
console.log(nama,fifi,gas)
const[firstName,last]=datas
console.log(firstName,last)
function luas(a,t){
    return a*t
}
console.log(luas(1,2))
let dr=function(s){
    return s*s
}
console.log(dr(4))
function st({name,age}){
    console.log(`${name} umur ${age}`)
}
st(
    {
        name:"Faiq",
        age:12,
    }
)
function exp(nilai,pangkat=3){
    console.log(`${nilai} dengan ${pangkat}`)
}
exp(2)
function des(...name){
    for(let i of name){
        console.log(`${i}:data`)
    }
}
des(2,3,1,4)