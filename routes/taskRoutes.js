import {
  getTask,
  createTask,
  editTask,
  deleteTask,
} from '../controllers/taskController.js'

import express from 'express'
const router = express.Router()

router.route('/tasks').get(getTask).post(createTask)
router.route('/:id').patch(editTask).delete(deleteTask)

export default router
