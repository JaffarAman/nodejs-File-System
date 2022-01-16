const fs = require("fs");

//Blocking , Synchronous

// const readfile = fs.readFileSync("./txt/html.txt", "utf-8");
// console.log(readfile);
// console.log("Blocking");

// const writeData = `This is me Jaffar Aman`;
// fs.writeFileSync("./txt/introduction.txt", writeData, "utf-8");
// console.log("your file has been written");

//Non-Blocking, Asynchronous
// fs.readFile("./txt/html.txt", "utf-8", (err, data) => {
//   console.log("Data", data);
// });
///
// console.log("Will read file")

const jsDef = "JavaScript is a scripting language";
// fs.writeFile("./txt/front-end.txt", jsDef, "utf-8", (err, data) => {
//   console.log("File has been written");
// });

fs.readFile("./txt/html.txt", "utf-8", (err, data1) => {
  fs.readFile("./txt/css.txt", "utf-8", (err, data2) => {
    fs.writeFile(
      "./txt/front-end.txt",
      `HTML \n ${data1} \n Css \n ${data2} \n JavaScript \n ${jsDef}`,
      "utf-8",
      (err) => {
        console.log("File has been writtend");
      }
    );
  });
});
