import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({ name: '', description: '' });

  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/items/', form);
      alert(`Item created: ${res.data.name} - ${res.data.description}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{message}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <br />
        <button type="submit">Submit Item</button>
      </form>
    </div>
  );
}

export default App;

