const users = [
  { id: 1, info: { fn: "Jan1", ln: "Doe1" } }, // user
  { id: 2, info: { fn: "Jon2", ln: "Doe2" } }, // user
  { id: 3, info: { fn: "Jon3", ln: "Doe3" } }, // user
  { id: 4, info: { fn: "Jun4", ln: "Doe4" } }, // user
  { id: 5, info: { fn: "Jan5", ln: "Doe5" } }, // user
];
// const updated
// const filteredUsers = users.filter((user) => user[key].includes(value));
let id = 1;
let formData = { key: "fn", value: "Rakhmatullo" };
function update(id, formData) {
  //! 1
  const updatedUsers1 = users.map((user) =>
    user.id === id
      ? { id: id, info: { ...user.info, [formData.key]: formData.value } }
      : user
  );
  return updatedUsers1;
  //! 2
  // const updatedUsers2 = []
  // users.forEach((user) =>
  //   user.id === id
  //     ? updatedUsers.push({ id: id, info: { ...user.info, [formData.key]: formData.value } })
  //     : updatedUsers.push(user)
  // );
  // return updatedUsers2
  //! 3
  // const selectedUser = users.filter((user) => user.id === id);
  // const nextUsers = users.filter((user) => user.id !== id);
  // const updatedUsers3 = [
  //   ...nextUsers,
  //   {
  //     id: id,
  //     info: { ...selectedUser[0].info, [formData.key]: formData.value },
  //   },
  // ];
  // return updatedUsers3;
}
console.log(update(id, formData));
