
  export const employeesRequested = () => {
    return {
      type: 'FETCH_EMPLOYEES_REQUESTED'
    };
  };

  export const employeesLoaded = (newEmployees) => {
    return {
      type: 'FETCH_EMPLOYEES_SUCCESS',
      payload: newEmployees
    };
  };

  export const employeesError = (error) => {
    return {
      type: 'FETCH_EMPLOYEES_FAILURE',
      payload: error
    };
  };
  
  export const fetchEmployees = (salaryService, dispatch) => () => {
    dispatch(employeesRequested());
    salaryService.getEmployees()
      .then((data) => dispatch(employeesLoaded(data)))
      .catch((err) => dispatch(employeesError(err)));
  };

  export const fetchEmployeeId = (salaryService, dispatch) => () => {
    dispatch(employeesRequested());
    salaryService.getById()
      .then((data) => dispatch(employeesLoaded(data)))
      .catch((err) => dispatch(employeesError(err)));
  };

  export const onDelete =()=> {
    return {
      type: 'DELETE_EMPLOYEE'
    };
  };

  export const onBlock =( id, textAlert, colorTextAlert )=> {
    return {
      type: 'BLOCK_EMPLOYEE',
      payload: { 
        id,
        textAlert,
        colorTextAlert
      }
    }
  }

  export const onActive =( id, textAlert, colorTextAlert )=> {
    return {
      type: 'ACTIVE_EMPLOYEE',
      payload: { 
        id,
        textAlert,
        colorTextAlert
      }
    }
  }
  
  export const onActiveNew =( id, textAlert, colorTextAlert )=> {
    console.log(colorTextAlert)
    return {
      type: 'ACTIVE_NEW_EMPLOYEE',
      payload: { 
        id,
        textAlert,
        colorTextAlert
      }
    }
  }

  export const onChangeRoleStore =( {id}, role, salaryHour )=> {
    return {
      type: 'CHANGE_ROLE_EMPLOYEE',
      payload: {
        id,
        role,
        salaryHour
      }
    }
  }

  export const openModalConfirm =( id )=> {
    return {
      type: 'OPEN_MODAL',
      payload: id
    }
  }

  export const closeModal =()=> {
    return {
      type: 'CLOSE_MODAL'
    }
  }