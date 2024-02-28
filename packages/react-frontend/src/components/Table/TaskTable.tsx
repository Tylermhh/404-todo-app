import React from 'react';
import styles from "./Table.module.css";
import { Button, Col, Form, Row, Table} from 'react-bootstrap';
import {Task} from "./../../types/types";

const TableTitle: React.FC<{}> = () => {
    return (
      <div>
        <Row>
          <Col sm={11}>
            <h2>
              Todo List (Coming Up)
            </h2>
          </Col>
          <Col sm={1}>
            <Button variant="outline-primary">
              +
            </Button>
          </Col>
        </Row>
      </div>
    )
  }

const TableHeader: React.FC<{}> = () => {
    return (
      <div>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Category</th>
            <th>Completed</th>
            <th>Deadline</th>
            <th>Remove</th>
          </tr>
        </thead>
      </div>
    )
  }

  
const TableBody: React.FC<{taskData : Task[]}> = ({taskData}) => {
    const rows = taskData.map((row: any, index: any) => {
        return (
          <tr>
            <td>{row.item_name}</td>
            <td>{row.description}</td>
            <td>{row.priority}</td>
            <td>{row.category}</td>
            <td>
              <Form>
                <Form.Check
                  type={'checkbox'}
                  id={'compelted'}
                />
              </Form>
            </td>
            <td>{row.deadline}</td>
            <td>
            <Button>
              Delete
            </Button>
            </td>
          </tr>
        );
    });

    return (
        <div className = {styles['table-responsive']}>
          <Table striped hover>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Category</th>
                <th>Completed</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              { rows }
            </tbody>
          </Table>
        </div>
      );
}

  const TaskTable: React.FC<{taskData : Task[]}> = (input) => {
    return (
      <div>
        <TableTitle />
        <TableBody
          taskData = {input.taskData}
        />
      </div>
    )
  }
  
  export default TaskTable