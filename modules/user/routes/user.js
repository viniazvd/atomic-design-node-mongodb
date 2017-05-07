const router = require('express').Router()
const Organism = require('./../organisms/user')

router.get('/', Organism.find )
router.get('/:id', Organism.findOne)
router.put('/:id', Organism.update)
router.delete('/:id', Organism.remove)
router.post('/', Organism.create)

module.exports = router