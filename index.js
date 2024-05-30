const task1 = (arr) => {
    return arr.reverse();
}


const task2 = (arr1,arr2) => {
    const combo = arr1.concat(arr2);
    const uniqueValues = new Set(combo);
    return Array.from(uniqueValues)
}


const task3 = (students) => {
    const totalGrade = students.reduce((total, student) => total + student.grade, 0);
    const averageGrade = totalGrade / students.length;
    return Number(averageGrade.toFixed(2));
};

const studentsArr = [
    { name: "Alice", age: 20, grade: 4.5 },
    { name: "Bob", age: 21, grade: 3.9 },
    { name: "Charlie", age: 19, grade: 4.8 },
];

console.log(task1([1,2,3,4,5]));
console.log(task2([1, 1, 2, 3], [2, 3, 4, 4]));
console.log(task3(studentsArr)); 