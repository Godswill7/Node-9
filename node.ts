import * as assert from 'assert';
import fs from "fs"

const content = "Welcome to fs in node"

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



fs.readdirSync("node_modules")




// const a: string = "GeeksforGeeks";
// const b: string = "GeeksforGeeks";

// try {
//     assert.strictEqual(a,b);
//     console.log(true)
// } catch (error:any) {
//     console.error(false);
// }