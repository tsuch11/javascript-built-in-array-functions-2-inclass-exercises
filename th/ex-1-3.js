/* 
ให้เขียน Function ที่ชื่อว่า availableSeat ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 2 ตัวคือ guestList และ number
        1. guestList เป็น Array ที่บรรจุรายชื่อแขก
        2. number เป็น Number ที่บรรจุจำนวนที่นั่งที่ยังว่างอยู่
    - Function นี้จะ Return ค่าออกมาเป็นรายชื่อแขกตามจำนวนที่นั่งที่ยังว่างอยู่
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here
const availableSeat = (guestList, number) => {
    return guestList.slice(0, number)
}
//ใช้ slice เพราะ Copy ตัว Value ใน Array เดิมให้ไปอยู่ใน Array ใหม่โดยไม่แก้ต้นฉบับ

const guestList = [
  "John",
  "Sarah",
  "Michael",
  "Emma",
  "David",
  "Sophia",
  "Daniel",
];

console.log(availableSeat(guestList, 2)); // [ 'John', 'Sarah' ]
console.log(availableSeat(guestList, 4)); // [ 'John', 'Sarah', 'Michael', 'Emma' ]
