const express = require("express");

const app = express();


/*app.get("/", (request, response) => {
   response.json({ message : 'Server response yei ho' } );
}); 
essai add garna lako 
*/
app.use(express.static('public'))
module.exports = app; 