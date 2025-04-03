import {makeObservable, observable} from "mobx";

class UserStore {
  users = [];

    constructor(){
        makeObservable(this, {
            users: observable
        })
    }

  addUser = (name) => {
    const newUser = {
      id: +Math.random().toFixed(4),
      name
    };
    this.users.push(newUser);
  };
}

export const UserStore = new UserStore();
