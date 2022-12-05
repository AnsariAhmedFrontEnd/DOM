// // /**
// //  * Question 1)
// //  * 1) We can use this in the global scope.
// //  * 2) We can use this keyword to point an object in global scope.
// //  * 3) this inside a method.
// //  * 4) this inside a function.
// //  * 5) It is used in call function as an argument.
// //  * 6) this is also used inside a constructor.
// //  * 7) this is used to point to the current object of the class.
// //  * 
// //  * Question 2)
// //  * 
// //  */

// // // global scope of window object
// // this.table = 'window table';
// // console.log(window.table)


// // this.garage = {
// //    table:'Garage Table'
// // }
// // console.log(this.garage.table);


// // //this inside an object and inside a method
// // let johnsRoom = {
// //    table:'Johns Table',
// //    CleanTable() {
// //       console.log(`Cleaning ${this.table}`)
// //    }
// // }

// // console.log(johnsRoom.table);
// // johnsRoom.CleanTable();

// // //this inside a function
// // const cleanTable = function(soap) {
// //    console.log(`Cleaning ${this.table} using ${soap}`);
// // }

// // cleanTable.call(this,'Glow')
// // cleanTable.call(johnsRoom,'MySoap')



// // //this inside a constructor

// // // let CreatRoom = function(name) {
// // //    this.table = `${name}s Room`,
// // // }

// // const jillRoom = new CreatRoom('Jill');

// // //This inside a class
// // class Room {
// //    constructor(name) {
// //       this.table = `${name}s Room`;
// //    }

// //    cleanTable(soap) {
// //       console.log(`Cleaning ${this.table} using ${soap}`);
// //    }
// // }

// class Student  {
//     static i = 0;
//    constructor(studentName,age,phoneNumber,BoardMarks) {
//       this.studentName = studentName;
//       this.age = age;
//       this.phoneNumber = phoneNumber;
//       this.BoardMarks = BoardMarks; 
//       Student.i += 1;

//    }

//    isElibleForCollege() {
//       if(this.BoardMarks > 40) {
//          console.log(`${this.studentName} is eligible for College`);
//       }
//       else{
//          console.log(`${this.studentName} is eligible NOT for College`);
//       }
//    }
//    static numberOfStudents() {
//       return Student.i;
//    }
// }

// const berlin = new Student('Berlin',40,1234,65);
// const tokyo = new Student('Tokyo',32,1234,30);
// const denver = new Student('Denver',28,1234,38);
// const nairobi = new Student('Nairobi', 30,1234,70);
// const ansari = new Student('Ansari',26,1234,85);

// berlin.isElibleForCollege();
// tokyo.isElibleForCollege();

// console.log(Student.numberOfStudents());


class Student  {
      constructor(studentName,age,phoneNumber,BoardMarks) {
         this.studentName = studentName;
         this.age = age;
         this.phoneNumber = phoneNumber;
         this.BoardMarks = BoardMarks; 
   
      }
   
      isElibleForPlacement(minMarks) {
         return (minage) => {
            if(this.BoardMarks > minMarks && this.age > minage ) {
               console.log(`${this.studentName} is eligible to sit for Placement`);
            }
            else{
               console.log(`${this.studentName} is eligible NOT to sit for Placement`);
            }
         }

         
   }
}
   
   let berlin = new Student('Berlin',40,1234,65);
   let tokyo = new Student('Tokyo',32,1234,30);
   let denver = new Student('Denver',28,1234,38);
   let nairobi = new Student('Nairobi', 30,1234,70);
   let ansari = new Student('Ansari',26,1234,85);

   berlin.isElibleForPlacement(60)(18) ;
   tokyo.isElibleForPlacement(60)(18);
   denver.isElibleForPlacement(60)(18);
   nairobi.isElibleForPlacement(80)(18);
   ansari.isElibleForPlacement(80)(18);

   


