'use strict';

const knex = require('../knex');

let searchTerm = 'Steve Jobs';
// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
//   .modify(queryBuilder => {
//     if (searchTerm) {
//       queryBuilder.where('title', 'like', `%${searchTerm}%`);
//     }
//   })
//   .orderBy('notes.id')
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });

let searchId = 1;

// knex
//   .first('notes.id', 'title', 'content')
//   .from('notes')
//   .modify(queryBuilder => {
//     if (searchId) {
//       queryBuilder.where('id', `${searchId}`);
//     }
//   })
//   .then((results) => {
//     res.json(results);
//   })
//   .catch(err => {
//     next(err);
//   });

// knex('notes')
//   .where('id', 1)
//   .update({title: 'How to Win Friends and Influence People2018'})
//   .returning(['id', 'title', 'content'])
//   .then(results => {
//     console.log(results);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// knex('notes')
//   .insert({title: 'THIS IS A TITLE', content: 'THIS IS CONTENT'})
//   .returning(['id', 'title', 'content'])
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// knex('notes')
//   .where({id: 6})
//   .del()
//   .then(result => {
//     console.log('worked');
//   })
//   .catch(err => {
//     console.log(err);
//   });
  