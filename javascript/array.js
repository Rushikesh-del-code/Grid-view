stud1 = "rohan"
stud1 = "amar"
stud1 = "sahil"

fruit1 = ["apple"]
fruit2 = ["banana"]


//array to store multiple values 

students = []
console.log(typeof (students))
fruits=new Array()
console.log(typeof (fruits))    

numbersarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

students.push("rohan")
console.log(students)
students.push("amar")
console.log(students)
students.push("sahil")
console.log(students)

students.unshift("rohan")
console.log(students)

console.log(students.length)
length = students.length

for(i = 0; i < length; i++) {
    console.log(students[i])
}