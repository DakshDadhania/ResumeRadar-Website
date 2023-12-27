// app/api/predict.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const response = await axios.post('http://127.0.0.1:5000/predicturl', req.body);
        res.status(200).json(response.data);
      } catch (error) {
        res.status(500).json({ message: 'Error predicting URL', error });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  