let myObject = {
  firstName: "First name",
  emailAddress: " Mail ",
  lastName: " Last name",
  fullName: function () {
    return this.firstName + this.lastName + this.emailAddress;
  },
};
console.log(myObject.fullName());

