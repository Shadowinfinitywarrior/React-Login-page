const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
const readUsers = async () => {
  try {
    const data = await fs.readFile('users.json', 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};
const writeUsers = async (users) => {
  await fs.writeFile('users.json', JSON.stringify(users, null, 2));
};

app.post('/api/signup', async (req, res) => {
  const user = req.body;
  const users = await readUsers();

  if (users.find(u => u.email === user.email)) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  users.push(user);
  await writeUsers(users);
  res.status(201).json({ message: 'Signup successful', user });
});
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const users = await readUsers();

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.status(200).json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/home.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'home.html'));
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});