const students=[{nama:"Faiq",age:20}]
students.forEach((student)=>{
    console.log(`umur saya${student?.naruto?.data}`)
})

console.log(students[0]?.age)

function student(acc,{age}){
    return acc+age;
};

function averageAge(students){
    const total=students.reduce(student,0)
    return total/students.length
}
const studen=[
    {name:"faiq",age:20},
    {name:"fifi",age:30},
]
const name="Fai"
const age=13
const newStudent={name,age}
const totalSudent=[...studen,newStudent]
console.log(averageAge(totalSudent))