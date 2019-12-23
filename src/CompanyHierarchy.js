import React from 'react';
import { Empty } from 'antd';
import { Tree, TreeNode } from 'react-organizational-chart';
import Employee from './Employee';

const CompanyHierarchy = (props) => {
  const buildChildren = (managerId) => {
    let internalChildrenTree = [];
    const childrenArray = props.employees.filter(employee => employee.manager === managerId);
    childrenArray.forEach((employee) => {
      const node = (
        <TreeNode
          label={
            <Employee
              onClick={() => props.getEmployeesByManager(employee.id)}
              employee={employee}
              manager={props.employees.find(employee => employee.id === managerId)}
              isLoading={props.isLoading}
            />
          }
        >
          {buildChildren(employee.id)}
        </TreeNode>
      );
      internalChildrenTree.push(node);
    });
    return internalChildrenTree;
  };

  if (!props.employees[0]) {
    return <Empty />;
  }
  return (
    <Tree label={<div>It all starts with great leadership</div>}>
      {buildChildren(0)}
    </Tree>
  )
};

export default CompanyHierarchy;