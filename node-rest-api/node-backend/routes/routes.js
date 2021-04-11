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
  const tagNames = req.body; 
  const tags =[]
  tagNames.forEach((value,index)=>{
    tags.push(value.tagName)
  })
  console.log(tags)
Ads.find({
  'tag': { $in: tags}
}, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})
// get ads with category
adsRoute.route('/get-adsWithCompnents').post((req, res, next) => {
  const CategoryNames = req.body; 
  const categorys =[]
  CategoryNames.forEach((value,index)=>{
    categorys.push(value.categoryName)
  })
  console.log(categorys)
Ads.find({
  'category': { $in: categorys}
}, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})
//delete Category
adsRoute.route('/delete-category/:id').delete((req, res, next) => {
  Category.findByIdAndRemove(req.params.id, (error, data) => {
  if (error) {
    return next(error);
  } else {
    res.status(200).json({
      msg: data
    })
  }
})
})
//delte Tag
adsRoute.route('/delete-tag/:id').delete((req, res, next) => {
  Tag.findByIdAndRemove(req.params.id, (error, data) => {
  if (error) {
    return next(error);
  } else {
    res.status(200).json({
      msg: data
    })
  }
})
})

module.exports = adsRoute;