import axios from "axios";

export default async function activeResource(req, res) {
  const axiosRes = await axios.get(`${process.env.API_URL}/activeresource`);

  return res.send(axiosRes.data);
}