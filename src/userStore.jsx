class UserStore {
  users = [];

  addUser = (name) => {
    const newUser = {
      id: +Math.random().toFixed(4),
      name
    };
    this.users.push(newUser);
  };
}

export const userStore = new UserStore();
