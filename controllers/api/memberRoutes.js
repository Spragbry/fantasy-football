const router = require('express').Router();
const { Member } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newMember = await Member.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newMember);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const memberData = await Member.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!memberData) {
        res.status(404).json({ message: 'No member found with this id!' });
        return;
      }
  
      res.status(200).json(memberData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  