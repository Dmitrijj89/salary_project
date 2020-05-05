import React from 'react';
import EmployeeTableContainer from '../../employee-table';

const AccountantPage = () => {
 
  return <EmployeeTableContainer 
            isAdmin={false}
            headerText={"Список сотрудников"}
            isNew={false}
            tableText={'Сотрудников нет...'}  />
};

export default AccountantPage;