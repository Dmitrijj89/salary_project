import React from 'react';
import EmployeeTableContainer from '../../employee-table';

const NewEmployeePage = () => {
 
  return <EmployeeTableContainer 
            isAdmin={true}
            headerText={"Новые заявки"}
            isNew={true}
            tableText={'Новых сотрудников нет...'} />
};

export default NewEmployeePage;