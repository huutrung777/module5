// bai1
const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const primeNumbers = numbers.filter(number => isPrime(number));
console.log("Các số nguyên tố:");
console.log(primeNumbers);

//bai2
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  gender: 'male',
  occupation: 'developer',
  nationality: 'American',
  city: 'New York',
  hobbies: ['reading', 'traveling', 'photography'],
  languages: ['English', 'Spanish'],
  education: {
    degree: 'Bachelor',
    major: 'Computer Science',
    university: 'Harvard University'
  }
};

const {
  firstName,
  gender,
  languages,
  education: { degree }
} = person;

const student = {
  firstName,
  gender,
  degree,
  english: languages[0]
};

console.log(student);
 

//bai3
 function getInfo({ firstName = 'Quân', degree = 'NA' }) {
  console.log(`firsName: ${firstName}`);
  console.log(`degree: ${degree}`);
}

const sv1 = {
  firstName: 'John',
  gender: 'male',
  degree: 'Bachelor',
  english: 'English'
};

const sv2 = {
  name: 'John',
  gender: 'male',
  degree: 'Bachelor',
  english: 'English'
};

getInfo(sv1); // firsName: John | degree: Bachelor
getInfo(sv2); // firsName: Quân | degree: Bachelor

//bai4
let courses = [
  { id: 1, title: "ReactJS Tutorial", rating: 4.2 },
  { id: 2, title: "Angular Tutorial", rating: 2.5 },
  { id: 3, title: "VueJS Tutorial", rating: 3.8 },
  { id: 4, title: "Java Tutorial", rating: 4 },
  { id: 5, title: "JavaScript Tutorial", rating: 3.5 },
];

const result4 = courses.filter(({ rating }) => rating >= 4);
console.log(result4);

//bai5

const result5 = courses
  .filter(({ rating }) => rating < 4)
  .map(({ id, title, rating }) => `${id} - ${title} - ${rating}`);

console.log(result5);
