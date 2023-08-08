import mongoose from "mongoose";
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  createTime: {
    type: Number,
    default: Date.now,
  },
  updateTime: {
    type: Number,
    default: Date.now,
  },
  title: String,
  topics: {
    type: Array,
    ref: "Topic",
  },
  type: {
    type: String,
    default: "article"
  },//article/moment/photo
  cover: String,
  htmlContent: String,
  textContent: String,
  desc: String,
  imgs: {
    type: Array,
    default: []
  }
});
articleSchema.index({ "$**": "text" });
export default mongoose.model("Article", articleSchema);
