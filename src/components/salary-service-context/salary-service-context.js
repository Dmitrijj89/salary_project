import React, { createContext } from 'react';

const {
  Provider: SalaryServiceProvider,
  Consumer: SalaryServiceConsumer
} = createContext(null);

export {
    SalaryServiceProvider,
    SalaryServiceConsumer
};
