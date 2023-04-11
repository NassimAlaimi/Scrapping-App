import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState('');
  const [logo, setLogo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    };

    try {
      const response = await fetch('http://localhost:4000/', requestOptions);
      const data = await response.json();
      setResponse(data.message);
      setLogo(data.logo);
    } catch (error) {
      console.error(error);
      setResponse('An error occurred');
    }
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
      <br/>
      {response && <div>Server response: {response}</div>}
      {logo && <img src={logo} alt="Logo" />}
    </div>
  );
}

export default App;
