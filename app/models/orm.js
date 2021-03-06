// /* ORM FOLDER ========================================
// We abstract our database and information-modelling code
// into this section
// ====================================================== */

const db = require( '../config/connection.js' )



// function getList( criteria={} ){
//     return db.query( 'SELECT * FROM tasks '+( criteria ? 'WHERE ? ' : '' ), criteria )
// }
function getData(){
    return db.query( 'SELECT * FROM chatlogs');
}

function insertMsg(msg){
    return db.query('INSERT INTO chatlogs (message) VALUES (?)',[msg])
}

function getMsg(){
    return db.query('SELECT (message) FROM chatlogs')
}

function getUsers(){
    return db.query('SELECT (username) FROM users')
}
// function insertTask( priority, info, due ){
//     if( priority === '' ) {
//         priority = 'primary'
//     }
//     // no due? set to 7 days from now
//     if( due === '' ) {
//         due = moment().add(7, 'days').format('YYYY-MM-DD' )
//     }
//     console.log( ' inserting task data: ', { priority, info, due } )
//     return db.query( 'INSERT INTO tasks SET ? ',
//         { priority, info, due } )
// }

// function updateTask( id, priority, info, due ){
//     return db.query( 'UPDATE tasks SET ? WHERE id=?',
//         [ { priority, info, due }, id ] )
// }

// function deleteTask( id ){
//     return db.query( 'DELETE FROM tasks WHERE id=?', [ id ] )
// }

module.exports = {
    getData, insertMsg, getMsg
}