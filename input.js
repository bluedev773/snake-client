const connect = require("./client");
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};
const greeting = ["My", "name", "is", "Matt", "nice", "to", "meet", "you"];
const angry = ["GET", "OUT", "THE", "WAY"];


const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log('exit');
    process.exit();
  }
  if (key === '\u0077') {
    connection.write('Move: up');
  }
  if (key === '\u0073') {
    connection.write('Move: down');
  }
  if (key === '\u0061') {
    connection.write('Move: left');
  }
  if (key === '\u0064') {
    connection.write('Move: right');
  }

  if (key === '\u0075') {
    
    angry.forEach((item, index) => {
      setTimeout(() => {
        connection.write(`Say: ${item}`);
      },index * 500)
    })
  }
  if (key === '\u0065') {
    connection.write(`Say: wow`);
  }
  if (key === '\u0069') {
    greeting.forEach((item, index) => {
      setTimeout(() => {
        connection.write(`Say: ${item}`);
      },index * 500)
    })
  }

}

module.exports = setupInput;