
// function reverseNum(num) {
//   return Math.floor(
//     num.toString().split("").reverse().join("") / 100000000000
//   ).toString();
// }

const users = [
  { id: 1, fn: "Jan1", ln: "Doe1" }, // user
  { id: 2, fn: "Jon2", ln: "Doe2" }, // user
  { id: 3, fn: "Jon3", ln: "Doe3" }, // user
  { id: 4, fn: "Jun4", ln: "Doe4" }, // user
  { id: 5, fn: "Jan5", ln: "Doe5" }, // user
];

const newUser = { id: 6, fn: "Jon6", ln: "Doe6" }; // create onChange -> onClick
const inputText = "on"; const selectValue = "fn"; // read   onChange -> onClick
const editedUser = { id: 2, fn: "Jon22", ln: "Doe22" }; // update onClick -> onChange
const deletedUser = { id: 2 }; // delete onClick


//& ============ CRUD_1 =============
//* +++++ Create
// const increasedUsers = [...users, newUser];
// console.log(increasedUsers);

//* +++++ Read
// const foundUsers = users.filter((user) => user[selectValue].includes(inputText)); // toString() trim() toLowerCase()
// // keyin foundUsers ni map qilib chiqariladi.
// console.log(foundUsers);

// //* +++++ Delete
// const leftUsers = users.filter((user) => user.id !== deletedUser.id);
// // console.log(leftUsers);

// //* +++++ Update
// const editedUsers = users.map((user) =>
//   user.id === editedUser.id ? editedUser : user
// );
// console.log(editedUsers);

// //& ============ CRUD_2 =============

// //* +++++ Create
// // users.push(newUser);
// // console.log(users); // or
// const increasedUsers2 = users.concat([newUser])
// // console.log(increasedUsers2);

// //* +++++ Read
// const foundUsers2 = [];
// users.forEach((user) => {
//   if (user[selectValue].includes(inputText)) {
//     foundUsers2.push(user);
//   }
// });
// // console.log(foundUsers2);

// //* +++++ Delete
// const leftUsers2 = [];
// users.forEach((user) => {
//   if (user.id !== deletedUser.id) {
//     leftUsers2.push(user);
//   }
// });
// // console.log(leftUsers2);

// //* +++++ Update
// const editedUsers2 = [];
const editedUsers2 = users.map((user) => {
  if (user.id === editedUser.id) {
    return editedUser;
  } else {
    return user;
  }
});
console.log(editedUsers2);
