# is-ip-address

Check if a string is an IP address (IPv6 or IPv4).

## Installation

You can install the package using npm:

```
npm install is-ip-address
```

## Usage

The package exports a single function isIPAddress() that can be used to check if a string is a valid IPv4 or IPv6 address.

```
const isIPAddress = require('is-ip-address');

console.log(isIPAddress('192.168.0.1')); // true
console.log(isIPAddress('2001:0db8:85a3:0000:0000:8a2e:0370:7334')); // true
console.log(isIPAddress('example')); // false
```