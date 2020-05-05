export const changeRole =(role)=> {
    if (role === 'driver') return 'Водитель';
    else if (role ==='porter') return 'Работник склада';
    else if (role === 'manager') return 'Менеджер';
    else {
      console.error('Ошибка в поле должность {role}');
    }
};

export const updateCountNewEmployee =(array)=> {
   return array.map(({isNewEmployee}) => isNewEmployee === true)
};

export const updateActionEmployee =(array, id, bool)=> {
   return array.map(employee => 
    employee.id === id ? {...employee, active: bool} : employee)
};

