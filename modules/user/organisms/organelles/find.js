'use strict';

const success = ( res ) => ( result ) => res.json( result )
const error = ( msg ) => ( err ) => console.log( msg, err )

module.exports = ( Organism ) => 
  ( req, res ) => Organism.find( {} )
                          .exec()
                          .then( success( res ) )
                          .catch( error( 'Erro no find' ) )