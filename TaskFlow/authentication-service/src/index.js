const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/auth/login', (req, res) => {
  // Authentication logic
  res.send({ token: 'jwt-token' });
});

app.listen(3001, () => console.log('Authentication service running on port 3001'));
