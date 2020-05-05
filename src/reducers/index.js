import { updateCountNewEmployee, updateActionEmployee } from '../utils';

const initialState = {
    employees: [],
    loading: true,
    error: null,
    modalIsOpen: false,
    alertIsOpen: false,
    textAlert: '',
    colorTextAlert: '#9EC2F4',
    idEmployeeForModal: '',
    countNewEmployee: 0
  };
  
  const reducer = (state = initialState, action) => {
    console.log(action.type)
    console.log(state.employees)
  
    switch (action.type) {
      case 'FETCH_EMPLOYEES_REQUESTED':
        return {
          ...state,
          employees: [],
          loading: true,
          error: null
        };
        
      case 'FETCH_EMPLOYEES_SUCCESS':
        return {
          ...state,
          employees: action.payload,
          countNewEmployee: updateCountNewEmployee(action.payload),
          loading: false,
          error: null
        };

        case 'FETCH_EMPLOYEES_FAILURE':
        return {
          ...state,
          employees: [],
          loading: false,
          error: action.payload
        };

        case 'DELETE_EMPLOYEE':
          //const employee = state.employees.find(({id}) => id === action.payload);
          const idx = state.employees.findIndex((item) => item.id === state.idEmployeeForModal);
          
          const employees = [
            ...state.employees.slice(0, idx),
            ...state.employees.slice(idx + 1)
          ];

          return {
            ...state,
            employees,
            countNewEmployee: employees.map((e) => e.isNewEmployee === true),
            idEmployeeForModal: ''
          };

        case 'BLOCK_EMPLOYEE':
          return{
            ...state,
            employees: updateActionEmployee(state.employees, action.payload.id, false),
            modalIsOpen: true,
            alertIsOpen: true,
            textAlert: action.payload.textAlert,
            colorTextAlert: action.payload.colorTextAlert
          };

        case 'ACTIVE_EMPLOYEE':
          return{
            ...state,
            employees: updateActionEmployee(state.employees, action.payload.id, true),
            textAlert: action.payload.textAlert,
            colorTextAlert: action.payload.colorTextAlert,
            modalIsOpen: true,
            alertIsOpen: true
          };

        case 'ACTIVE_NEW_EMPLOYEE':
          const employee =  state.employees.map(employee => 
            employee.id === action.payload.id ? {...employee, isNewEmployee: false} : employee);
          return{
            ...state,
            employees:employee,
            countNewEmployee: updateCountNewEmployee(employee),
            textAlert: action.payload.textAlert,
            colorTextAlert: action.payload.colorTextAlert,
            modalIsOpen: true,
            alertIsOpen: true
          };

        case 'CHANGE_ROLE_EMPLOYEE':
          return{
            ...state,
            employees: state.employees.map(employee => 
              employee.id === action.payload.id ? 
                 {...employee, 
                  role: action.payload.role, 
                  salaryHour: action.payload.salaryHour } 
                : 
                employee)
          }

        case 'OPEN_MODAL':
          return{
            ...state,
            modalIsOpen: true,
            alertIsOpen: false,
            idEmployeeForModal: action.payload
          }

          case 'CLOSE_MODAL':
            return{
              ...state,
              modalIsOpen: false,
              idEmployeeForModal: '',
              colorTextAlert: '#9EC2F4'
            }
  
          default:
            return state;
    }
  };
  
  export default reducer;