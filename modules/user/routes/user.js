const router = require('express').Router()
const organism = require('./../organisms/user')

router.get('/', organism.find)
router.get('/:id', organism.findOne)
router.put('/:id', organism.update)
router.delete('/:id', organism.remove)
router.post('/', organism.create)

module.exports = router