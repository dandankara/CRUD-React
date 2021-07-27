import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vw;

  a{
    padding: 1rem;
    text-decoration: none;
    font-size: 2rem;
  }

  a:hover{
    background-color: #f1f1f1;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  border: solid 1px;
  margin: 1rem;
  padding: 1rem;
  width: 100%;
`;


export { Container, Links, Content}