const router = require('express').Router();
const userRoutes = require('./userRoutes');
const memberRoutes = require('./memberRoutes');


router.use('/users', userRoutes);
router.use('/member', memberRoutes);

module.exports = router;
