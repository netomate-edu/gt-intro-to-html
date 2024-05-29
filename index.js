let fullName = "Jeff";

fullName = "Jeffrey Efosa"

console.log("Welcome back " + fullName)


/*
1. Camel case: radiusOfCircle, userId, studentName
2. Pascal case: SignUp, StudentRegister
3. Snake case: radius_of_circle, user_id
4. kebab case: radius-of-circle, user-id

In Javascript, variables and functions are named
using camel case. Classes are named using
Pascal case.
*/

// Arrays
const namesOfStudents = ['Doc Josh', 'Joy', 'Peter']
console.log("Length of student array:", namesOfStudents.length)

const integerNumbers = [456, 381, 211, 800, 145, 212];
console.log(integerNumbers.sort().reverse())

integerNumbers.push(100)
integerNumbers.push(20)
console.log(integerNumbers)
integerNumbers.pop()
console.log(integerNumbers)

const filteredNumbers = integerNumbers.filter((number) => number > 200 && number < 400);
console.log("Filtered numbers: ", filteredNumbers)

const userNames = ["Peejay", "XLee", "DocJosh"];
const formattedUserNames = userNames.map((username) => username.toLowerCase());

console.log("Previous userNames: ", userNames, "\nNew usernames: ", formattedUserNames)

const arrayOfItems = ["Jeff", 89, true, false, 1.5]

console.log(arrayOfItems)


// Objects
const student = {
    name: "Jeffrey",
    isMale: true,
    hobbies: ["coding", "playing music", "gaming"],
    course: {
        name: "Computer Engineering",
        level: 800,
    }
}

console.log(
    student.name + " studies " + student.course.name + " and is presently in " + student.course.level + " level. \nHis hobbies are: " + student.hobbies.join(' + ')
)


// if, else, else if

const isRaining = false;
const isVerySunny = true;

if (isRaining) {
    console.log("Take an umbrella")
} else if (isVerySunny) {
    console.log("Take an umbrella or wear a sunglass")
} else {
    console.log("Have a cool day")
}