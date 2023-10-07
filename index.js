"use strict";

console.log("SCRIPT LOADED IN STRICT MODE");

const user = {
  name: "Chetan",
  age: 26,
  gender: "Male",
};

const proxiedUser = new Proxy(user, {
  get(user, prop) {
    // return user[prop];
    return Reflect.get(user, prop);
  },
  set(user, prop, val) {
    if (prop === "gender" && typeof val !== "string") {
      console.error(`The value for ${prop} must be a string`);
      // return false;
    } else {
      // user[prop] = val;
      Reflect.set(user, prop, val);
    }

    return true;
  },
});

proxiedUser.gender = "3";

console.log(proxiedUser);
