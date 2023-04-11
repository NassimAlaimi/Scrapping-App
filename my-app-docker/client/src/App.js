import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    };

    const response = await fetch('http://localhost:4000/', requestOptions);
    const data = await response.json();
    setResponse(data.message);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          URL:
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {response && <div>Server response: {response}</div>}
    </div>
  );
}

export default App;