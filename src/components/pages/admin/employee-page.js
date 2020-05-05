import React from 'react';
import EmployeeTableContainer from '../../employee-table';

const EmployeePage = () => {
 
  return <EmployeeTableContainer
            isAdmin={true} 
            headerText={"Список сотрудников"}
            isNew={false}
            tableText={'Сотрудников нет...'}  />
};

export default EmployeePage;