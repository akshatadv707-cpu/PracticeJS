const userId = Symbol("userId");

const user = {
  name: "Ravi",
  [userId]: 101
};

console.log(user);
console.log(userId);