import mongoose from "mongoose";

const { Schema } = mongoose;

const arenaSchema = new Schema({
  arenaName: { type: String, required: true },
});

const Arena = mongoose.models.Arena || mongoose.model("Arena", arenaSchema);

export default Arena;
