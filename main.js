// Your code here.

function getFirstName(usr){
  return usr.firstName;
}

function getLastName(usr){
  return usr.lastName;
}

function getFullName(usr){
  return `${usr.firstName} ${usr.lastName}`;
}

function setFirstName(usr, str){
  usr.firstName = str;
}

function setAge(usr, num){
  usr.age = num;
}

function giveBirthday(usr){
  if (usr.age === undefined){
    usr.age = 1;
  } else {
    usr.age += 1;
  }
  usr;
}

function marry(usr1, usr2){
  usr1.married = true;
  usr2.married = true;
  usr1.spouseName = getFullName(usr2);
  usr2.spouseName = getFullName(usr1);
}

function divorce(usr1, usr2){
  usr1.married = false;
  delete usr1.spouseName;
  usr2.married = false;
  delete usr2.spouseName;
}

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
