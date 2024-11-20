class User {
  #password;

  constructor(userID, userPW) {
    this.userID = userID;
    this.#password = userPW;
  }

  hashPassword(pw) {
    return this.#password === this.hashPassword;
  }
}

const user = new User("tiger", "hello123");
