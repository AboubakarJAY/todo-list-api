import mongoose, { Document, Schema } from "mongoose";

interface ITask extends Document {
  description: string;
  state: 0 | 1;
}

const taskSchema = new Schema<ITask>({
  description: { type: String, require: true },
  state: { type: Number, enum: [0, 1], require: true },
});

const Task = mongoose.model<ITask>("Task", taskSchema);
export default Task;
