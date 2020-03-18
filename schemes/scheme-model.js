const db = require('../data/db-config.js')

module.exports = {

  find,
  findById, 
  findSteps,
  add,
  update,
  remove
}

function find() {
  return db('schemes')

}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();


}

function findSteps(id){
  return db('steps')
  .join('schemes as s', 'steps.scheme_id', 's.id' )
  .select('steps.id','s.scheme_name','steps.step_number', 'steps.instructions' )
    .where({ scheme_id : id })
    .orderBy('step_number')
}

function add(scheme) {

}

function update(changes, id) {


}

function remove(id){


}