const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new mongoose.Schema({ name: 'string', size: 'string' });
const Tank = mongoose.model('Tank', schema);
// Tank.create({ size: 'small' }, function (err, small) {
//   if (err) return handleError(err);
//   // saved!
// });


Tank.find().then(result => {
  console.log('AL: result', result)
}).catch(error => {
console.log('AL: error', error)
  
})

module.exports = Tank;
