/* 
ให้เขียน Function ที่ชื่อว่า findNLowestNumber ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 2 ตัวคือ arrOfNumbers และ n
        1. numbers เป็น Array ที่บรรจุตัวเลข
        2. n เป็น Number ที่ระบุจำนวนที่เราต้องการค้นหา
    - Function นี้จะนำ numbers มาตรวจสอบว่าตัวเลขที่มีค่าน้อยที่สุด n ตัวแรกคือตัวเลขไหนบ้าง แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here
const findNLowestNumber = (arrOfNumbers, n) => {
    return arrOfNumbers.sort((a, b) => a - b).slice(0, n);
}

const arrOfNumbers1 = [10, 3, 55, 0, 18];
let result1 = findNLowestNumber(arrOfNumbers1, 3);
console.log(result1); // [ 0, 3, 10 ]

const arrOfNumbers2 = [0, 3, -1, -2, 11];
let result2 = findNLowestNumber(arrOfNumbers2, 2);
console.log(result2); // [ -2, -1 ]
