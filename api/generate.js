export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  const response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.r8_RmAm3mz46A3RmxplBfo0HMFhSyeotae4JCMfd}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      version: "db21e45baddb3cfe52c2fa4ee7ec1c87793fc44d13c641002e902c37c04c9e5c",
      input: { prompt }
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
