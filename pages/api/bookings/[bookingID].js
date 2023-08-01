import dbConnect from "../../../db/connect";
import Booking from "../../../db/models/bookings";

export default async function handler(request, response) {
  await dbConnect();

  const { bookingID } = request.query;

  if (request.method === "GET") {
    const booking = await Booking.findById(bookingID);
    if (!booking) {
      return response.status(404).json({ message: "Booking not found" });
    }
    return response.status(200).json(booking);
  }

  if (request.method === "DELETE") {
    await Booking.findByIdAndDelete(bookingID);

    response.status(200).json({ status: "Deleted" });
    return;
  }
}
