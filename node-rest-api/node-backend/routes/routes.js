const express = require('express');
const app = express();

const adsRoute = express.Router();
let Ads = require('../model/ads');
let Category = require('../model/category');
let Tag = require('../model/tag');

// Add ads
adsRoute.route('/add-ads').post((req, res, next) => {
    Ads.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all ads
adsRoute.route('/').get((req, res) => {
    Ads.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Ads
adsRoute.route('/read-ads/:id').get((req, res) => {
    Ads.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Ads
adsRoute.route('/update-ads/:id').put((req, res, next) => {
    Ads.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Ads updated successfully!')
    }
  })
})

// Delete Ads
adsRoute.route('/delete-ads/:id').delete((req, res, next) => {
    Ads.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

//Add Tag Name 
adsRoute.route('/add-tag').post((req, res, next) => {
  console.log(req.body)
  Tag.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});

// Get all tags
adsRoute.route('/all-tags').get((req, res) => {
  Tag.find((error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});

// Get all category
adsRoute.route('/all-category').get((req, res) => {
  Category.find((error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})


//Add Category Name 
adsRoute.route('/add-category').post((req, res, next) => {
  Category.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});

// get ads with tags

adsRoute.route('/get-adsWithTags').post((req, res, next) => {
Ads.find({
  'tag': { $in: req.body}
}, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})

module.exports = adsRoute;