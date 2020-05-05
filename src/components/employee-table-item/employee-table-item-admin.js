import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import ReactTooltip from "react-tooltip";

import { changeRole } from '../../utils';
import './employee-table-item-admin.css';

import { openModalConfirm, onBlock, onActive, onActiveNew, onChangeRoleStore } from '../../actions';

const EmployeeTableItemAdmin =({filtredEmployee, openModalConfirm, onBlock, onActive, onActiveNew, onChangeRoleStore})=>{

  const [editRole, setEditRole] = useState(true);

  const { id,
          name, 
          lastName, 
          role, 
          active,
          isNewEmployee,
         } = filtredEmployee;

  const Select =(id)=> {

    const onChangeRole =(e)=> {
      const role = e.target.value
      const salaryHour = e.target.options[e.target.selectedIndex].dataset.salary_hour;

      onChangeRoleStore(id, role, salaryHour);
      setEditRole(true)
    }

    return(
      <select className="form-control form-control-sm col-md-6" 
              onChange={(e)=> onChangeRole(e)}
              defaultValue={role}>
        <option value="driver" data-salary_hour="200" >Водитель</option>
        <option value="porter" data-salary_hour="200" >Работник склада</option>
        <option value="manager" data-salary_hour="250" >Менеджер</option>
      </select>
    )
  }


  const activeButton =( id, isNewEmployee )=> {

    const textAlertActiv = 'Профиль разблокирован...';
    const textAlertBlock = 'Профиль заблокирован...';
    const textAlertNewActiv = 'Профиль активирован...';
    const colorSuccess = '#28a745';
    const colorWarning = '#ffc107';

    if(isNewEmployee) {
      return(
        <Fragment>
          <button data-tip="Удалить профиль" 
                  onClick={() => {
                    openModalConfirm(id)
                    ReactTooltip.hide()
                  }}
                  className="btn btn-outline-danger btn-sm float-right">
              <i className="fa fa-trash-o" />
          </button>
          <button data-tip="Активировать профиль" 
                  onClick={() => {
                    onActiveNew(id, textAlertNewActiv, colorSuccess)
                    ReactTooltip.hide()
                  }}
                  className="btn btn-outline-success btn-sm float-right">
              <i className="fa fa-plus-circle" />
          </button>
        </Fragment>
      );
    }
    return(
      <Fragment>
        <button data-tip="Удалить профиль" 
                onClick={() => {
                  openModalConfirm(id)
                  ReactTooltip.hide()
                }}
                className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
        </button>
        <button data-tip="Заблокирова профиль" 
                onClick={() => {
                  onBlock(id, textAlertBlock, colorWarning)
                  ReactTooltip.hide()
                }}
                className="btn btn-outline-warning btn-sm float-right"
                disabled={!active}>
            <i className="fa fa-eye-slash" />
        </button>
        <button data-tip="Разблокировать профиль" 
                onClick={() => {
                  onActive(id, textAlertActiv, colorSuccess)
                  ReactTooltip.hide()
                }}
                className="btn btn-outline-success btn-sm float-right"
                disabled={active}>
            <i className="fa fa-eye" />
        </button>
      </Fragment>
    );
  }

    return (
      <Fragment>
        <td>{ name }</td>
        <td>{ lastName }</td>
        <td>
            <span
                onMouseEnter={() => setEditRole(false)}
                onMouseLeave={() => setEditRole(true)}
                 data-tip="Изменить должность"
                 style={{cursor: "pointer"}}>
              {
               editRole ? 
                changeRole(role)
                :
                <Select id={id} /> 
              }
                <ReactTooltip place="top" effect="solid"/>
            </span>
        </td>
        <td>
          { activeButton( id, isNewEmployee )}
        </td>
      </Fragment>
    );
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModalConfirm: (id) => dispatch(openModalConfirm(id)),

    onActive: (id, textAlert, color) => dispatch(onActive(id, textAlert, color)),

    onBlock: (id, textAlert, color) => dispatch(onBlock(id, textAlert, color)),

    onActiveNew: (id, textAlert, color) => dispatch(onActiveNew(id, textAlert, color)),

    onChangeRoleStore: (id, role, salaryHour) => dispatch(onChangeRoleStore(id, role, salaryHour)),
  }
};

export default connect('', mapDispatchToProps)(EmployeeTableItemAdmin);
