import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #999;
  height: 100vh;
 `;
 
 export const Menu = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: #136713;
 width: 80px; 
 flex-direction: column;
`
 
 export const PageBody = styled.div`
 display:flex;
 background-color: #00980d;
 background-image: url('/assets/bg.png');
 flex: 1;
 overflow-y: auto;
 `
 /* esse auto se adapta ao background do body 
  
*/