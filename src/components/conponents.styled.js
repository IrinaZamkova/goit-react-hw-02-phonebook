import styled from "styled-components";

const Container = styled.form`
  width: 350px;
  height: auto;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
`;
const Input = styled.input`
  margin-bottom: 10px;
  margin-top: 7px;
  background-color: white;
  padding: 5px;
  width: 300px;
  border: 1px solid gray;
  border-radius: 5px;
  outline:none;
`;
const Button = styled.button`
  margin-top: 10px;
  background-color:lightblue;
  padding: 5px;
  width: 100px;
  border-radius: 5px;
  border: 1px solid gray;
  outline:none;
`;
const List = styled.ul`
  display: block;
  width: 350px;
  height: auto;
  padding-left: 20px;
`;
const FilterBox = styled.div`
  width: 350px;
  height: auto;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const FilterInput = styled.input`
  margin-top: 10px;
  background-color: white;
  padding: 5px;
  width: 100px;
  border-radius: 5px;
  border: 1px solid gray;
  outline:none;
`;

const ContactItem = styled.li`
  align-items: center;
  justify-content: space-between;
  margin: 0;
  display: flex;
  width: 370px;
  height: auto;
  flex-direction: row;
  flex-wrap: nowrap;
`;
const ItemParag = styled.p`
width: 300px;
  height:auto;
  margin-bottom:10px;
`;
const ContactBtn = styled.button`
  background-color: whitesmoke;
  font-size: 12px;
  width: 60px;
  height: 18px;
  border-radius: 5px;
  border: 1px solid gray;
  margin-right:0;
`;
export {
  Container,
  Input,
  Button,
  List,
  ItemParag,
  ContactItem,
  ContactBtn,
  FilterBox,
  FilterInput,
};
