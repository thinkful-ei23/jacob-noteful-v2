'use strict';

const express = require('express');

// Create an router instance (aka "mini-app")
const router = express.Router();

const knex = require('../knex');

/* ========== GET ALL ITEMS ========== */
router.get('/', (req, res, next) => {
  
  knex
    .select('id', 'name')
    .from('tags')
    .then(results => {
      res.json(results);
    })
    .catch(err => next(err));
});
/* ========== GET ITEM BY ID ========== */
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  
  knex
    .first('id', 'name')
    .from('tags')
    .modify(queryBuilder => {
      if (id) {
        queryBuilder.where('id', `${id}`);
      } 
    })
    .then((results) => {
      if (results) {
        res.json(results);
      }
      else {
        next();
      }
    })
    .catch(err => {
      next(err);
    });  
});
/* ========== PUT/UPDATE ITEM ========== */

router.put('/:id', (req, res, next) => {
  const { name } = req.body;

  /***** Never trust users. Validate input *****/
  if (!name) {
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  }

  const updateItem = { name };

  knex('tags')
    .update(updateItem)
    .where('id', req.params.id)
    .returning(['id', 'name'])
    .then(([result]) => {
      if (result) {
        res.json(result);
      } else {
        next();
      }
    })
    .catch(err => {
      next(err);
    });
});

/* ========== POST/CREATE ITEM ========== */
router.post('/', (req, res, next) => {
  const { name } = req.body;

  /***** Never trust users. Validate input *****/
  if (!name) {
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  }

  const newItem = { name };

  knex.insert(newItem)
    .into('tags')
    .returning(['id', 'name'])
    .then((results) => {
      // Uses Array index solution to get first item in results array
      const result = results[0];
      res.location(`${req.originalUrl}/${result.id}`).status(201).json(result);
    })
    .catch(err => next(err));
});

/* ========== DELETE/REMOVE A SINGLE ITEM ========== */
router.delete('/:id', (req, res, next) => {
  knex.del()
    .where('id', req.params.id)
    .from('tags')
    .then(() => {
      res.status(204).end();
    })
    .catch(err => {
      next(err);
    });
});


module.exports = router;