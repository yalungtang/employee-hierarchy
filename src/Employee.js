import React, { useState } from 'react';
import { Avatar, Menu, Dropdown, Icon, Modal, Spin, Button } from 'antd';

const Employee = (props) => {
  const [shouldShowDetails, showDetails] = useState(false);
  const { employee, onClick, manager, isLoading } = props;
  const menu = (
    <Menu>
      <Menu.Item>
        <Button type="link" onClick={onClick}>
          See {employee.first}'s team
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button type="link" onClick={() => showDetails(true)}>
          See {employee.first}'s details
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      {shouldShowDetails && (<Modal
          title={`${employee.first} ${employee.last}`}
          visible={shouldShowDetails}
          onOk={() => showDetails(false)}
          onCancel={() => showDetails(false)}
        >
          <p><Avatar size={100} icon="user" /></p>
          {manager && <p>
            <strong>Manager:</strong> {manager.first} {manager.last}
          </p>}
          <p>
            <strong>Department:</strong> {employee.department}
          </p>
          <p>
            <strong>Id:</strong> {employee.id}
          </p>
        </Modal>)}
      <Avatar icon="user" />
      <br />
      <Dropdown overlay={menu}>
        <Button type="link" style={{ marginBottom: '25px' }}>
          {employee.first}
          <br />
          {employee.last}
          <br />
          {isLoading ? <Spin /> : <Icon type="down" />}
        </Button>
      </Dropdown>
    </div>
  );
};

export default Employee;
