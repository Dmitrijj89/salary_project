import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withSalaryService } from '../hoc';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { EmployeeTableItemAdmin, EmployeeTableItemAccountant} from '../employee-table-item';
import { fetchEmployees } from '../../actions';
import { compose } from '../../utils';

import './employee-table-container.css';

const EmployeeTable =({employees, isAdmin, headerText, tableText, isNew})=> {

  const filterArray =(array, bool)=> {

    const empl = array.filter(employee => employee.isNewEmployee === bool)

    const employees = isAdmin ? 
        empl.map(filtredEmployee =>(
          <tr key={filtredEmployee.id}><EmployeeTableItemAdmin filtredEmployee={filtredEmployee}/></tr>
        )) 
        :
        empl.map(filtredEmployee =>(
          <tr key={filtredEmployee.id}><EmployeeTableItemAccountant filtredEmployee={filtredEmployee}/></tr>
        ))

    if (employees.length === 0 || '') {
      return <tr><td>{tableText}</td></tr>
    }
    
    return employees
  };

  return(
    <div className="employee-table">
        <h2>{ headerText }</h2>
        <table className="table">
            <thead>
              <tr>
                  <th>Имя</th>
                  <th>Фамилия</th>
                  <th>Должность</th>
                  <th>Действия</th>
              </tr>
          </thead>
          <tbody>
                {
                  isNew ? (
                    filterArray(employees, true)
                  ) : (
                    filterArray(employees, false)
                  )
                }
          </tbody>
        </table>
      </div>
  );
}

class EmployeeTableContainer extends Component {

  componentDidMount() {
    this.props.fetchEmployees();
  }

  

  render() {
    const { employees, loading, error, headerText, tableText, isNew, isAdmin } = this.props;

    if(loading) {
      return <Spinner />
    }

    if(error) {
      return <ErrorIndicator />
    }
    return (
      <EmployeeTable 
          employees={employees}
          isAdmin={isAdmin}
          headerText={headerText}
          isNew={isNew}
          tableText={tableText}/>
    );
  }
}


const mapStateToProps = ({ employees, loading, error }) => {
  return { employees, loading, error };
};

const mapDispatchToProps = (dispatch, {salaryService}) => {
    return {
      fetchEmployees: fetchEmployees(salaryService, dispatch)
    }
};

export default compose(
    withSalaryService(),
  connect(mapStateToProps, mapDispatchToProps)
)(EmployeeTableContainer);