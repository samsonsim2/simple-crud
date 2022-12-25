import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
})

export default mongoose.model('Task', TaskSchema)
