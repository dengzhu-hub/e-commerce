import styled from 'styled-components';
export const FormContainer = styled.form`
  border: #f6f9fc solid 1px;
  border-radius: var(--radius);
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 30px 50px -20px rgb(50 50 93 / 25%),
    0 30px 60px -30px rgb(0 0 0 / 30%);
`;

export const Button = styled.button`
background: var(--accent-color);
border-radius: var(--radius);
color: white;
border: 0;
padding: 12px 16px;
margin-top: 16px;
font-weight: 600;
cursor: pointer;
transition: all 0.2s ease;
display: block;
}
button:hover {
filter: contrast(115%);
}
button:active {
transform: translateY(0px) scale(0.98);
filter: brightness(0.9);
}
button:disabled {
opacity: 0.5;
cursor: none;`;

export const Message = styled.div`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New';
  display: none; /* hide initially, then show once the first message arrives */
  background-color: #0a253c;
  color: #00d924;
  padding: 20px;
  margin: 20px 0;
  border-radius: var(--radius);
  font-size: 0.7em;
`;
