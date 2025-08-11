const express = require('express');
const router = express.Router();
const { createPreOrder, getPreOrders } = require('../controllers/preorderController');

router.post('/', createPreOrder);
router.get('/getpreorders', getPreOrders); // optional admin route

module.exports = router;
