import React from 'react';
import { Avatar, Icon, Popover, Descriptions } from 'antd';

const SingleEmployee = (props) => {
  return (
    <Descriptions title="Employee info">
      <Descriptions.Item label="Full name">{props.first} {props.last}</Descriptions.Item>
      <Descriptions.Item label="Department">{props.department}</Descriptions.Item>
      <Descriptions.Item label="ID">{props.id}</Descriptions.Item>
    </Descriptions>
  )
};

const Employee = (props) => {
  const { employee, onClick } = props;
  return (
    <div onClick={onClick}>
      <Popover content={<SingleEmployee {...employee} />}>
        <Avatar icon="user" />
        <br />
        <a href="#">
          {employee.first}
          <br />
          {employee.last}
          <br />
          <Icon type="down" />
        </a>
      </Popover>
    </div>
  );
};

export default Employee;
