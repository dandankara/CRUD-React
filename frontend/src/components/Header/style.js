import styled from 'styled-components';

const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  background: #00B4DB;
  background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);
  background: linear-gradient(to right, #0083B0, #00B4DB);


  h1{
    font-size: 2.5rem;
  }
  
  p{
    font-size: 2rem;
    margin-left: 16rem;
  }
`;

const Logo = styled.a`
display: flex;
flex-direction: column;
justify-content: center;

  img {
    width: 3.5rem;
    margin: 1rem;
    align-self: flex-start;
  }
`;
export {Logo, ContainerHeader}