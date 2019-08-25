const express = require("express");
const router = express.Router();
const body_parser = require("body-parser");
//v1
router.post('/parse1', body_parser.json());
router.post('/parse1',  (req, res, next,) => {
    let args = req.body;
        info = req.body;
        console.log('data from front end', info);
          if (info !== undefined) {
            let info = {
               "statusCode":"200",
               "data":[
                  { "firstName":"JOHN0000", 
                    "lastName":"MICHAEL000", 
                    "clientId":"9994567"
                  }
                ]
            }
            console.log('data after mutation for v1', info);
            return res.status(200).json(info);
        }
});
//v2
router.post('/parse2', body_parser.json());
router.post('/parse2',  (req, res, next,) => {
    let args = req.body;
        info = req.body;
        console.log('data from front end', info);
          if (info !== undefined) {
            let info = {
               "statusCode":"200",
               "data":[
                  { "firstName":"JOHN", 
                    "lastName":"MICHAEL", 
                    "clientId":"999-4567"
                  }
                ]
            }
            console.log('data after mutation for v2', info);
            return res.status(200).json(info);
        }
});

module.exports = router;



