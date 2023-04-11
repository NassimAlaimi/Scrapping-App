import React, { useState } from 'react'
import { Wrapper, Title, FormWrapper, Label, Input, Button, Message, Logo } from './homeElements.js';

const Home = () => {
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState('');
  const [logo, setLogo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
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
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit}>
      <Title>My Scraping App</Title>
        <Label>
          URL:
          <Input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        </Label>
        <Button type="submit">Submit</Button>
      </FormWrapper>
      {response && <Message success={response === 'Success'}>Server response: {response}</Message>}
      {logo && <Logo src={logo} alt="Logo" />}
    </Wrapper>
  );
};

export default Home;
