import * as assert from 'assert';
// import fs from "fs"
import { Buffer } from "buffer"
import { IncomingMessage, ServerResponse } from 'http';

import https from "https"

import OS from "os";



// const content = "Welcome to fs in node"

// fs.writeFile("fsFile.tx", content, (err) => {
//     if (err) {
//         console.log(err.message)
//     } else {
//         console.log("done writing")
//     }
// })
// fs.readFile("fsFile.tx", (err:any,result:any) :string | any=> {
//     if (err) {
//         console.log(err.message)
//     } else {
//         console.log("done writing", result)
//     }
// })

// fs.watchFile("fs.File.tx", (err:any,watch:any) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log(watch)
//     }
// })

// watchFile : it is used to watch for changes to the file provided and if
// there is changes to the file name it will return a message in which you provide

// fs.watchFile("fsFile.tx", (curr, prev) => {
//     console.log(`is it a Directory : ${curr.isDirectory()}`)
//     console.log(`is it a file : ${prev.isFile()}`);
// })

// UNLINK : It is used to delete a file and it doesn't work on folders
// fs.unlink("fsFile.tx", (err: any) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log("File was successfully Deleted");
//   }
// });


// if (fs.existsSync("fsFile.txt")) {
//      console.log(true)
// } else {
//     console.log(false);
//  }

// if (checkFile) {
//     console.log(`file exist: ${checkFile}`)
// } else {
//     console.log(`file exist: ${checkFile}`);
// }




// fs.readdirSync("node_modules")
 

// Creating a buffer of 10 Octets

// const createBuffer = Buffer.alloc(10);

// const createBuffer = Buffer.allocUnsafe(10);

// creates a buffer based on the second parameter


// const createBuffer = Buffer.alloc(36, "My name is Udida Godswill");


// console.log(createBuffer);

// converts a buffer to a string or plain text

// const text = createBuffer.toString();
// console.log(text)


// const a: string = "GeeksforGeeks";
// const b: string = "GeeksforGeeks";

// try {
//     assert.strictEqual(a,b);
//     console.log(true)
// } catch (error:any) {
//     console.error(false);
// }

// let data = "i can and i will";

// console.log(Buffer.from(data));

// process.stdin.on("data", (message: any) => {
//     console.log("Message", message);
//     console.log(message.toString());
// });
   
// const server: https.Server<typeof IncomingMessage, typeof ServerResponse> =
//     https.createServer((req:IncomingMessage, res:ServerResponse) => {
        
//     });
  
// const port: number | any = 3000;
// const port2: number | any = 3000;

// server.listen(port, () => {
//     console.log(`someone connected!`);
//     // server.close(() => {
//     //     process.exit(1);
//     // })
// })
// server.listen(port2, () => {
//     console.log(`someone connected!`);
// })
// server.on(port, (req: IncomingMessage, res: ServerResponse) => {
//         console.log("Yes")
// });



// server.on("error", (e:Error | any) => {
//   if (e === "EADDRINUSE") {
//     console.error("Address in use, retrying...");
//     setTimeout(() => {
//       server.close();   
//       server.listen(port);
//     }, 1000);
//   }
// });

const name = OS.hostname()


const a: string = OS.arch(); 
const b: any = OS.userInfo(); 
const c: string = OS.endianness(); 
const d: number = OS.totalmem(); 
const e: NodeJS.Dict<OS.NetworkInterfaceInfo[]> = OS.networkInterfaces(); 
const f: number = OS.freemem(); 
const g: number = OS.uptime(); 
const h: string = OS.version(); 


const i: any = OS.cpus();

i.forEach((cpu :any, index :any) => {
  console.log(`CPU ${index + 1}:`);
  console.log(`Model: ${cpu.model}`);
  console.log(`Speed: ${cpu.speed} MHz`);
  console.log(`Times:`);
  console.log(cpu.times);
  console.log("\n");
});

console.log(); 


// console.log(`The Name of Your Pc is ${name} and it have a total memory of ${d}  bytes and a free memory of ${f} bytes and it has been awake for ${g} seconds and it is running on ${h} version`)