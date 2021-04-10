const express = require('express');
const app = express();

const advertisorRoute = express.Router();
let Advertisor = require('../model/advertisor');

// Add new user
advertisorRoute.route('/signUp').post((req, res, next) => {
    Advertisor.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all users
advertisorRoute.route('/allUsers').get((req, res) => {
    Advertisor.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// login 
advertisorRoute.route('/login').post((req, res) => {
    Advertisor.find({'username': req.body.username}, (error, data) => {
    if (error) {
      return next(error);
    } else {
      if(data.length==0){
        res.json({"Error":"This User Name Not found !"});
      }
      else{
        if(data[0].password != req.body.password){
          res.json({"Error":"Please Enter Valid Password !"});
          
        }else{
          res.json({"status":"login","data":data});
        }

      }
      
    }
  })
})


// Update Advertisor
advertisorRoute.route('/update/:id').put((req, res, next) => {
    Advertisor.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Advertisor updated successfully!')
    }
  })
})

// Delete Advertisor
advertisorRoute.route('/delete/:id').delete((req, res, next) => { 
  // console.log("Id :"req.params.id)
  Advertisor.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      console.log(error)
      return next(error);
    } else {
      console.log(data)
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = advertisorRoute;