const mitems = require('../models/item');

exports.addNewItem = (req, res, next) => {
  var new_item = new mitems({
    'item': req.body.item,
    'detail': req.body.detail,
    'quantity': req.body.quantity,
    'location': req.body.location,
    'item_status': req.body.item_status
            
  });         

  new_item.save()
            .then((result)=>{
              res.status(201).json({
                message :  'User Added Successfully',
                _id:result._id
              })
            })
}




exports.getItemlist = (req, res, next) => {
  mitems.find()
           .then((ilistdata)=>{
             res.status(200).json({
               message : 'Data Fetched',
               ilist : ilistdata
             })
           });
}

// exports.getItemlist = (req, res, next) => {

//   mitems.find({
    
//   })
//            .then((ilistdata)=>{
//              res.status(200).json({
//                message : 'Data Fetched',
//                ilist : ilistdata
//              })
//            });
// }

exports.getItemByStatus = (req, res, next) => {
  var query = { 'item_status': req.params.status };
  mitems.find(query)
           .then((ilistdata)=>{
             res.status(200).json({
               message : 'Data Fetched',
               ilist : ilistdata
             })
           });
}

exports.getsingleItem = (req,res,next) =>{
  var query = { '_id': req.params.id };
  mitems.findById(query)
           .then((idata)=>{
             if(idata) {
              res.status(200).json({
                message : 'Data Fetched',
                idata : idata
              });
             } else {
              res.status(404).json({
                message : 'Error Fetching Category'

              });
             }

           });
}

exports.getsearchedItem = (req,res,next) =>{
  var query = { 'item': req.params.item };
  mitems.find(query)
           .then((sdata)=>{
             if(sdata) {
              res.status(200).json({
                message : 'Data Fetched',
                sdata : sdata
              });
             } else {
              res.status(404).json({
                message : 'Error Fetching Category'

              });
             }

           });
}



 