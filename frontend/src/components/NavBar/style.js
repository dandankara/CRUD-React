import styled from 'styled-components'

const ContainerNavBar = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 150px;
position: fixed;
z-index: 1;
padding: 1rem;
border: solid 1px;

a {
  display: block;
  text-decoration: none;
  padding:1rem;
}
`;

export {ContainerNavBar}