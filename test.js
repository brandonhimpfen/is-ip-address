const isIPAddress = require('./index');

console.log(isIPAddress('192.168.0.1')); // true
console.log(isIPAddress('2001:0db8:85a3:0000:0000:8a2e:0370:7334')); // true
console.log(isIPAddress('2001:0db8:85a3:0000:0000:8a2e:0370')); // false
console.log(isIPAddress('example')); // false