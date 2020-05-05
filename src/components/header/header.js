import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';


import './header.css';

const Header = ({countNewEmployee}) => {
  
  //console.log('count', countNewEmployee)
  const newEmployeeCounter =(countNewEmployee)=> {
    let counter = 0; 

    for (let i=0; i < countNewEmployee.length; i++) {
      if (countNewEmployee[i] === true) counter ++;
    }

    if (counter !== 0) return ` + ${counter}`;
    return '';
  }
 
  return (
    <header className="header row">
      <Link className="logo text-dark" to="/">Зарплата.ru</Link>
      <ul className="d-flex">
        <li>
          <NavLink to="/admin/employee/"
                activeClassName="active">
                  Сотрудники
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/newemployee/"
                activeClassName="active">
                  Новые сотрудники
                  <span className='header-count'>
                    {newEmployeeCounter(countNewEmployee)}
                  </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/accountant/"
                activeClassName="active">
                  Бухгалтер
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

const mapStateToProps = ({countNewEmployee}) => {
  return {
    countNewEmployee
  };
};

export default connect(mapStateToProps, '')(Header);
