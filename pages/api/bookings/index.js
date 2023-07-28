import dbConnect from "../../../db/connect";
import Booking from "../../../db/models/bookings";

export default async function bookingHandler(request, response) {
  await dbConnect();
console.log(request)
  if (request.method === "GET") {
    const bookings = await Booking.find();

    console.log(Booking)
    return response.status(200).json(bookings);
  } else {
    return response.status(404).json({ status: "Not Found" });
  }
}
