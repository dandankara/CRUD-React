import styled from 'styled-components';

const LogoWelcome = styled.aside`
  display: flex;
  justify-content:center;
  margin-right: 15rem;
  
  h1{
    font-size: 2.5rem;
  }

  a{
    align-self: center;
  }

  img {
    width: 80px;
    height: 80px;
    align-self: center;
    margin-right: 1rem;
  }  
`;

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  background: #E6DADA;
  background: -webkit-linear-gradient(to top, #274046, #E6DADA); 
  background: linear-gradient(to top, #274046, #E6DADA);
  /* border: 1px solid; */

  p{
    font-size: 2rem;
    align-self: center;
  }
`;

export { ContainerHeader, LogoWelcome }