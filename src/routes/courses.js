const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// [GET] /courses/create
router.get('/create', courseController.create);

router.post('/store', courseController.store);

router.post('/handle-form-actions', courseController.handleFormActions);

router.post('/handle-trash-form-actions', courseController.handleTrashFormActions);

// [GET] /courses/:slug (khoa' hoc)
router.get('/:slug', courseController.show);

// [GET] /courses/ID/edit
router.get('/:id/edit', courseController.edit);

// [PUT] EDIT COURSES
router.put('/:id', courseController.update);

// [RESTORE] DELETED COURSES
router.patch('/:id/restore', courseController.restore);

// SOFT DELETE COURSE
router.delete('/:id', courseController.delete);

// DELETE COURSE FOREVER
router.delete('/:id/force', courseController.forceDelete);


module.exports = router;
