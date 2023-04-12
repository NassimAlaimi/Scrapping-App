import styled from "styled-components";

export const Formtitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: darkgray;
  transform: scale(1.2);
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  text-align: left;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  margin-bottom: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #222;
  }
`;

export const Logo = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  border: 2px solid #000;
  padding: 10px;
  box-sizing: border-box;
`;

export const ResponseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 2rem;
  margin-top: 1rem;
`;