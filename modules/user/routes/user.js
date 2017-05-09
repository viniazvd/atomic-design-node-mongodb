const router = require('express').Router()
const Organism = require('./../organisms/user')

router.get('/', Organism.find )
<<<<<<< HEAD
router.get('/:id', Organism.findById)
=======
router.get('/:id', Organism.findOne)
>>>>>>> 320ce4a582e7977be5740bb463e039cb98f929b8
router.put('/:id', Organism.update)
router.delete('/:id', Organism.remove)
router.post('/', Organism.create)

module.exports = router