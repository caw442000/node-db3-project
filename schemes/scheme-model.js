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
  return db('schemes')
  .insert(scheme, 'id')
  .then(([id]) => findById(id));

}

function update(changes, id) {
  return db('schemes')
  .where({ id })
  .update(changes, '*')
  .then(() => {
    return findById(id) //this returns the user back
  })
}

function remove(id){
  return db('schemes')
  .where({ id })
  .del()

}