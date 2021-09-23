const check = require('os')


//info about current user
const user = check.userInfo();
console.log(user)

//method returns the system uptime in secs

console.log(`The system uptime is ${check.uptime()} seconds`)

const currentOS = {
    name:check.type(),
    release:check.release(),
    totalMem:check.totalmem(),
    freeMem:check.freemem()
}

console.log(currentOS)
