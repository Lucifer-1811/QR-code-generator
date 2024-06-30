// /* 
// 1. Use the inquirer npm package to get user input.

// 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
// 3. Create a txt file to save the user input using the native fs node module.
// */
// import inquirer from 'inquirer';
// import qr from 'qr-image';
// import fs from 'fs';


// inquirer
//   .prompt([
//     {
//     message: "Type in your URL: ",
//     name: "URL",
//     }
//     /* Pass your questions in here */

//   ])
//   .then((answers) => {
//     const url=answers.URL;
//     var qr_img=qr.image(url, {type:'png'});
//     qr_img.pipe(require('fs').createWriteStream('qrim.png'))

//     fs.writeFile("URL.txt",url,(err)=>{
//         if(err) throw err;
//         console.log("Saved!")
//     })
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_img = qr.image(url, { type: 'png' });
    qr_img.pipe(fs.createWriteStream('qrim.png'));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) {
        console.error(`Error writing to file: ${err}`);
      } else {
        console.log("Saved!");
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      console.error("Something else went wrong: ", error);
    }
  });