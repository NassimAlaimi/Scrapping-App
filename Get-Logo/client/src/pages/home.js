import React, { useState } from 'react'
import { Wrapper, Title, FormWrapper, Label, Input, Button, ResponseWrapper, Logo } from './homeElements.js';

const Home = () => {
  const [url, setUrl] = useState('');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
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
      setLogo(data.logo);
      setTitle(data.title);
      setDescription(data.description);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <Title>My Scraping App</Title>
        <Label>
          URL :
          <Input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        </Label>
        <Button type="submit">Submit</Button>
      </FormWrapper>
      <ResponseWrapper>
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
        {logo && <Logo src={logo} alt="Logo" />}
      </ResponseWrapper>
    </Wrapper>
  );
};

export default Home;
