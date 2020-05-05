import React, { Fragment } from 'react';
import EmployeeTableContainer from '../employee-table';

const HomePage = () => {
 
  return (
    <Fragment>
      <EmployeeTableContainer 
       isAdmin={true}
        headerText={"Новые заявки"}
        isNew={true}
        tableText={'Новых сотрудников нет...'} />
      <EmployeeTableContainer 
        isAdmin={true}
        headerText={"Список сотрудников"}
        isNew={false}
        tableText={'Сотрудников нет...'} />
    </Fragment>
  );
};

export default HomePage;