import { useState } from 'react';
import { Button, Card, Col, Container, FormControl, InputGroup, ListGroupItem, Row } from 'react-bootstrap';

const App = () => { 

  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  
  function addClick(){
    setTodoList([
      ...todoList,
      todo
    ]);
    setTodo('');
  }

  function editTodoList(e){
    if(e.keyCode === 13){
      addClick();
    }
    return;
  }

  function deleteClick(delKey){
    // console.log("지울 할일의 id=", key)
    setTodoList(
      todoList.filter((one, key, all)=>(key!==delKey))
    )
  }
  
  // console.log(todoList);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Todo List</h2>
          <InputGroup>
            <FormControl
              value = {todo} 
              onChange = {(e)=>{setTodo(e.target.value)}}
              onKeyDown = {(e)=>{editTodoList(e)}}
            />
            <InputGroup.Append>
              <Button 
                onClick = {()=>{addClick()}}
                variant="outline-secondary">추가</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          {
            todoList.length > 0 ?
            todoList.map((one, key, all)=>{
              return <ListGroupItem onClick = {()=>{deleteClick(key)}} action key = {key}>{one}</ListGroupItem>
            })
            :
            'No List'
          }
        </Col>
      </Row>
    </Container>
  );
}

export default App;
