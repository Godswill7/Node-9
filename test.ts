// import fs from "fs"

// const fileName: string = "set09.tx";

// fs.writeFile(`${fileName}`, "utf8"  ,(err:any) => {
//     if (err) {
//       return(err.message);
//     } else {
//       console.log(`File "${fileName}" has been created.`);
//     }
//   });

// To write to a file
// fs.writeFile("data", "utf8", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Done writing.");
// });

// to read a file
// fs.readFile('data.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File content:', data);
// });

// Delete a File

// fs.unlink("data.txt", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File has been deleted.");
// });

// import os from "os"

// const getOs = os.hostname()

// const getVersion = os.version()

// const getPlatform    = os.platform()

// const getRelease = os.release()

// console.log(getRelease);
// console.log()
// const ubuf = Buffer.alloc(30,"aABCDEFGH");

// // console.log(ubuf)

// const getOctets = ubuf.length

// console.log(getOctets)

// console.log(Buf)

// const cbuf =  Buffer.alloc(256);
// const bufferlen = cbuf.write("Learn Programming with GeeksforGeeks!!!");
// console.log("No. of Octets in which string is written : " + bufferlen);

// const rbuf = new Buffer.alloc(26);
// var j;

// for (var i = 65, j = 0; i < 90, j < 26; i++, j++) {
//   rbuf[j] = i;
// }

// console.log(rbuf.toString("ascii"));
