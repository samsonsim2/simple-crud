import Task from '../models/Task.js'
const getTask = async (req, res) => {
  const task = await Task.find({})
  res.status(200).json(task)
}

const createTask = async (req, res) => {
  const task = await Task.create(req.body)
  res.status(200).json(task)
}

const deleteTask = async (req, res) => {
  const { id: taskId } = req.params
  console.log(taskId)

  const task = await Task.findOneAndDelete({ _id: taskId })

  res.status(200).json('successfuly deleted item')
}

const editTask = async (req, res) => {
  const { id: taskId } = req.params
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  })
  res.status(200).json('successfuly edited item')
}

export { getTask, createTask, editTask, deleteTask }
