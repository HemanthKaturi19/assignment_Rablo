import express from 'express'; // Use import instead of require
import fetch from 'node-fetch'; // If using Node.js <18, otherwise built-in fetch can be used
import cors from 'cors'; // Import cors

const app = express();

// Enable CORS if needed
app.use(cors());

app.get('/api/employees', async (req, res) => {
  try {
    const response = await fetch('https://dummy.restapiexample.com/api/v1/employees');

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const data = await response.json();
    res.json(data); // Send the fetched data to the client
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
});

// Start the server
app.listen(5174, () => {
  console.log('Proxy server running on http://localhost:5174');
});
