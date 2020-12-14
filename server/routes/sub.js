const express = require('express');

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require('../middlewares/auth');

// controller
const { create, read, update, remove, list } = require('../controllers/sub');

router.post('/sub', authCheck, adminCheck, create);
router.get('/sub/:slug', read);
router.get('/subs', list);
router.put('/sub/:slug', authCheck, adminCheck, update);
router.delete('/sub/:slug', authCheck, adminCheck, remove);

module.exports = router;