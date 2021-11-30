

export default async function handler(req, res) {
  const data = await fetch('https://api.unsplash.com/photos/?client_id=rL_5c3JZU0epYcJVGrn1HHWpmFd_Uor1zirS2ZfHG9c')


  res.status(200).json(await data.json())
}
