import styled from "styled-components";

const Container = styled.div`
  background-color: red;
  margin: 1rem;
  display: flex;
  flex-direction: column;

  float: left;

  a{
    padding: 1rem;
    text-decoration: none;
    font-size: 2rem;
  }

  a:hover{
    background-color: #f1f1f1;
  }
`;
export { Container}