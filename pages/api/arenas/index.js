import dbConnect from "../../../db/connect";
import Arena from "../../../db/models/arenas";

export default async function arenaHandler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const arenas = await Arena.find();

    return response.status(200).json(arenas);
  } else {
    return response.status(404).json({ status: "Not Found" });
  }
}
