import React, { Fragment, useState } from 'react';
import { changeRole } from '../../utils';
import ReactTooltip from "react-tooltip";

const EmployeeTableItemAccountant =({filtredEmployee})=> {
    const { name, lastName, role, } = filtredEmployee;
    
  const [openForm, setOpenForm] = useState(false);

    const payroll =()=> {
        return (
            <form>
                <div className="form-row float-right">
                        <select className="custom-select col-md-2">
                            <option defaultValue>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    <div className="col col-md-2">
                        <input type="text" data-tip="Введите отработанные часы"  className="form-control" placeholder="Часы"/>
                    </div>
                    <div className="col col-md-2">
                        <input type="text" data-tip="Введите премию сотрудника"  className="form-control" placeholder="Премия"/>
                    </div>
                    <button type="button" className="btn btn-primary btn-sm ml-2">Отправить</button>
                </div>
                <ReactTooltip place="top" effect="solid"/>
            </form>
        )
    }

    return (
        <Fragment>
            <td>{ name }</td>
            <td>{ lastName }</td>
            <td>{ changeRole(role) }</td>
            <td>
                { 
                   openForm ? 
                    payroll() 
                    :
                    <button type="button" 
                            className="btn btn-primary"
                            onClick={()=>setOpenForm(true)}
                            >
                            Начислить
                    </button>
                }
            </td>
      </Fragment>
    )
};


export default EmployeeTableItemAccountant