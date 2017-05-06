const router = require('express').Router()
//const controller = require('./../controllers/user-controller')
const organisms = require('./../organisms/user')

router.get('/', organisms.find)
router.get('/:id', organisms.findOne)
router.put('/:id', organisms.update)
router.delete('/:id', organisms.remove)
router.post('/', organisms.create)

module.exports = router