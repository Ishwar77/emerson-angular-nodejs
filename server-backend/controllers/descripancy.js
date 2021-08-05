const descripancylist = require('../models/descripancy');

exports.getItemlist = (req, res, next) => {
  descripancylist.find()
    .then((ilistdata) => {
      res.status(200).json({
        message: 'Data Fetched',
        ilist: ilistdata
      })
    });
}

exports.getsingleItem = (req, res, next) => {
  // var query = { '_id': req.params.item };
  descripancylist.findById(req.params.id)
    .then((idata) => {
      if (idata) {
        res.status(200).json({
          message: 'Data Fetched',
          idata: idata
        });
      } else {
        res.status(404).json({
          message: 'Error Fetching Category'

        });
      }

    });
}
