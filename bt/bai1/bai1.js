let courses = [
  {
    id: 1,
    title: "ReactJS Tutorial",
    rating: 4.2,
  },
  {
    id: 2,
    title: "Angular Tutorial",
    rating: 2.5,
  },
  {
    id: 3,
    title: "VueJS Tutorial",
    rating: 3.8,
  },
  {
    id: 4,
    title: "Java Tutorial",
    rating: 4,
  },
  {
    id: 5,
    title: "JavaScript Tutorial",
    rating: 3.5,
  },
];
let addedCourses = [
  {
    id: 6,
    title: "PHP Tutorial",
    rating: 3,
  },
  {
    id: 7,
    title: "C# Tutorial",
    rating: 2,
  },
  {
    id: 8,
    title: "Docker Tutorial",
    rating: 3.8,
  }
];

const newCourses = [...courses, ...addedCourses];

console.log("Yêu cầu 3:");
console.log(newCourses);

const result = courses.filter(course => course.rating >= 4);

console.log("Yêu cầu 1:");
console.log(result);

const result2 = courses
  .filter(course => course.rating < 4)
  .map(course => `${course.id} - ${course.title} - ${course.rating}`);

console.log("Yêu cầu 2:");
console.log(result2);