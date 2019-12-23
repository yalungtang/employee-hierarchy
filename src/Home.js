import React from 'react';
import { connect } from 'react-redux';
import { Layout, Spin } from 'antd';
import { dispatchGetEmployeesByManager } from './actions';
import CompanyHierarchy from './CompanyHierarchy';
const { Header, Footer, Content } = Layout;

class Home extends React.Component {
  componentDidMount() {
    this.props.getEmployeesByManager(0);
  }

  render() {
    const { employees, getEmployeesByManager, isLoading } = this.props;

    return (
      <Layout className="layout">
        <Header theme="dark">
          <h2 style={{ color: '#fff' }}>The Company</h2>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="main-content">
            {!isLoading && <CompanyHierarchy
              getEmployeesByManager={getEmployeesByManager}
              employees={employees}
            />}
            {isLoading && <Spin />}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>The Company ©2019 Created by Yalung Tang</Footer>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  employees: state.init.employees,
  isLoading: state.init.isLoading,
  startError: state.init.error
});

const mapDispatchToProps = dispatch => ({
  getEmployeesByManager: (id) => dispatch(dispatchGetEmployeesByManager(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
