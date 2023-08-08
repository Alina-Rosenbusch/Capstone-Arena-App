import mongoose from "mongoose";

const { Schema } = mongoose;

const bookingSchema = new Schema({
  title: { type: String, required: true },
  bookedArena: { type: String, required: true },
  bookedPerson: { type: String, required: true },
  sTime: { type: String, required: true },
  eTime: { type: String, required: true },
  date: { type: Date, required: true },
  singleRider: { type: Boolean, required: true },
});

const Booking =
  mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

export default Booking;
