import styled from "styled-components";

const Container = styled.div`
  display: block;
  position: fixed;
  width: 15%;
  height: 100vh;
  font-size: 0.65em;
  border: 1px solid;
`;

const DivLinks = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  padding: 1rem;
  width: 100%;

  a {
    text-decoration: none;
    display: block;
    padding: 1rem;
  }
`;
export { Container, DivLinks}