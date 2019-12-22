import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { dispatchGetEmployeesByManager } from './actions';
import { Tree, TreeNode } from 'react-organizational-chart'

const CompanyHierarchy = (props) => {
  const buildChildren = (id) => {
    let internalChildrenTree = [];
    const childrenArray = props.employees.filter(employee => employee.manager === id);
    childrenArray.forEach((employee) => {
      const node = <TreeNode label={<div onClick={() => props.getEmployeesByManager(employee.id)}>{employee.first}</div>}>{buildChildren(employee.id)}</TreeNode>;
      internalChildrenTree.push(node);
    });
    return internalChildrenTree;
  };
  return (
    <Fragment>
      {props.employees[0] && <Tree label={<div>A great company name</div>}>
        {buildChildren(0)}
      </Tree>}
    </Fragment>
  )
};

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAppLoaded: false
    };
  }

  componentDidMount() {
    this.props.getEmployeesByManager(0);
  }

  render() {
    return (
      <div>
        <CompanyHierarchy getEmployeesByManager={this.props.getEmployeesByManager} employees={this.props.employees} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employees: state.init.employees,
  isAppLoaded: state.init.loadSuccess,
  startError: state.init.error
});

const mapDispatchToProps = dispatch => ({
  getEmployeesByManager: (id) => dispatch(dispatchGetEmployeesByManager(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
