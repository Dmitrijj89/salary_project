import React from 'react';
import { SalaryServiceConsumer } from '../salary-service-context';

const withSalaryService = () => (Wrapped) => {

  return (props) => {
    return (
      <SalaryServiceConsumer>
        {
          (salaryService) => {
            return (<Wrapped {...props}
                salaryService={salaryService}/>);
          }
        }
      </SalaryServiceConsumer>
    );
  }
};

export default withSalaryService;