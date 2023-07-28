import dbConnect from "../../../db/connect";
import Booking from "../../../db/models/bookings";

export default async function bookingHandler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const bookings = await Booking.find();

    return response.status(200).json(bookings);
  } else {
    return response.status(404).json({ status: "Not Found" });
  }
}
