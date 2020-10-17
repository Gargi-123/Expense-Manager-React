
import styled from "styled-components";



//Top Part
export const Layout = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
  justify-content:space-around;
  margin-bottom:40px;
`;

export const Balance=styled.div`
color:#008B02;
padding: 3rem;
font-size: 24px;
font-weight: 600;
border: 1px solid #008B02;
border-radius: 5px;
margin: 5px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
&:hover {
   cursor: pointer;
   filter: brightness(1.75);
 }
`;


export const Income =styled.div`
 color:#008B02;
 padding: 3rem;
 font-size: 24px;
 font-weight: 600;
 border: 1px solid #008B02;
 border-radius: 5px;
 margin: 5px;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
 &:hover {
    cursor: pointer;
    filter: brightness(1.75);
  }
`;
export const Transaction=styled.div`
 color:#008B02;
 padding: 3rem;
 font-size: 24px;
 font-weight: 600;
 border: 1px solid #008B02;
 border-radius: 5px;
 margin: 5px;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
 &:hover {
    cursor: pointer;
    filter: brightness(1.75);
  }
`;


export const Add=styled.div`
margin-top:20px;
display:flex;
padding: 14px;
border-bottom: 1px solid #e7e7e7;
justify-content:space-around;
`;
export const AddContainer=styled.div`
 margin: 0 auto;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
 padding:10px

`;


export const AddType=styled.select`
width: 55px;
border: 1px solid #e7e7e7;
height: 44px;
font-size: 18px;
color: inherit;
background-color: #fff;
margin-right: 10px;
font-weight: 300;
transition: border 0.3s;
`;


export const AddDescription=styled.input`
width: 400px;
border: 1px solid #e7e7e7;
background-color: #fff;
color: inherit;
font-family: inherit;
font-size: 14px;
padding: 12px 15px;
margin-right: 10px;
border-radius: 5px;
transition: border 0.3s;
`
export const AddDate=styled.input`
width: 200px;
border: 1px solid #e7e7e7;
background-color: #fff;
color: inherit;
font-family: inherit;
font-size: 14px;
padding: 12px 15px;
margin-right: 10px;
border-radius: 5px;
transition: border 0.3s;
`


export const AddValue=styled.input`
width: 100px;
border: 1px solid #e7e7e7;
background-color: #fff;
color: inherit;
font-family: inherit;
font-size: 14px;
padding: 12px 15px;
margin-right: 10px;
border-radius: 5px;
transition: border 0.3s;

`
export const AddButton =styled.button`
font-size: 25px;
background: none;
border: none;
color: #28B9B5;
cursor: pointer;
display: inline-block;
vertical-align: middle;
line-height: 1.1;
margin-left: 10px;
&:hover {
    cursor: pointer;
    filter: brightness(1.75);
  }
  padding: 0px 5px 0px 5px;
  border: none;
  border-radius: 4px;
  background: ${(props) => props.del ? "#b80000": "#008b02" };
  color: #fff;
  font-weight: 100
`

export const ListTransaction=styled.div`
width: 40%;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
 padding:10px
`