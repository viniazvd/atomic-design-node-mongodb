const success = ( res ) => ( result ) => res.json( result )
const error = ( msg ) => ( err ) => console.log( msg, err )

<<<<<<< HEAD
const success = ( res ) => ( result ) => res.json( result )
const error = ( msg ) => ( err ) => console.log( msg, err )

module.exports = ( Organism ) => 
  ( req, res ) => Organism.find( {} )
                          .exec()
                          .then( success( res ) )
                          .catch( error( 'Erro no find' ) )
=======
module.exports = ( Organism ) => 
  ( req, res ) => Organism.find( {} )
                          .exec()
                          .then( success( res ) )
                          .catch( error( 'Erro no find' ) )

  // console.log('req: ', req)
>>>>>>> 320ce4a582e7977be5740bb463e039cb98f929b8
