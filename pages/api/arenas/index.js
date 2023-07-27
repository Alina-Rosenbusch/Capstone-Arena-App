import dbConnect from "../../../db/connect";
import Arena from "../../../db/models/arenas";

export default async function arenaHandler(request, response) {
  await dbConnect();
console.log(request)
  if (request.method === "GET") {
    const arenas = await Arena.find();

    console.log(Arena)
    return response.status(200).json(arenas);
  } else {
    return response.status(404).json({ status: "Not Found" });
  }
}
