import dbConnect from "../../../db/connect";
import Booking from "../../../db/models/bookings";

export default async function bookingHandler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const bookings = await Booking.find();

    return response.status(200).json(bookings);
  } else if (request.method === "POST") {
    const newBooking = JSON.parse(request.body);
    await Booking.create(newBooking);

    response.status(200).json({ message: "Booking saved successfully" });
  } else {
    response.status(405).json({ error: "Method not allowed" });
  }
}
