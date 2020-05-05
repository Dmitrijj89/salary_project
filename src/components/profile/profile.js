import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withSalaryService } from '../hoc';
import { compose } from '../../utils';
import { fetchEmployeeId } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { changeRole } from '../../utils';

class Profile extends Component {

    componentDidMount() {
        this.props.fetchEmployeeId();
      }

    tableSalary =(array)=> {

         let header = [];
         let value = '';
        
        for(let key1 in array) {
            header.push(<th scope="col" key={key1}>{key1}</th>);
                for(let key2 in array[key1]) {
                    value += key2 + ': '+ array[key1][key2]+ ' ';
                }
            }

        const reg =(value, regex)=> {
        
            let m;
            let res =[];
            while ((m = regex.exec(value)) !== null) {
        
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                
            m.forEach((match) => {
                    return ` ${match}`
                }); 
            
        console.log('1', m[0])
       
            res.push(<td key={m['index']}>{m[0]}$</td>)
            }
            return res;
        };    
    
       return(<table className="table table-sm table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                         {header}
                     </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        {reg(value, /([hour]){3}\w+[:]{1} [0-9]{1,3}\b/gm)}
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        {reg(value, /([prize]){4}\w+[:]{1} [0-9]{1,3}\b/gm)}
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        {reg(value, /([salary]){5}\w+[:]{1} [0-9]{3,6}\b/gm)}
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        {reg(value, /([totalSalary]){10}\w+[:]{1} [0-9]{3,6}\b/gm)}
                    </tr>
                </tbody>
            </table>)
    }
    
    render() {
        const { employees, loading, error } = this.props;

        if(loading) {
            return <Spinner />
          }
      
          if(error) {
            return <ErrorIndicator />
          }
          
        return (
            <div className="container">
                <div className="profile">
                    {
                        employees.map(e=>{
                            return (
                                <div key={e.id}>
                                    <h2>{e.name} {e.lastName}</h2>
                                    <p><strong>Должность: </strong>{changeRole(e.role)}</p>
                                    <p><strong>Дата рождения: </strong>{e.birthday}</p>

                                    <h3>Заработная плата</h3>
                                    {this.tableSalary(e.monthsWorked)}
                                            
                                </div>
                            )
                            
                        }) 
                    }
                </div>      
            </div>
        )
    }
};

const mapStateToProps = ({employees, loading, error}) => {
    return {
        employees, loading, error
    };
  };
  
  const mapDispatchToProps = (dispatch, {salaryService}) => {
    return {
      fetchEmployeeId: fetchEmployeeId(salaryService, dispatch)
    }
};
  
export default  compose(
    withSalaryService(),
  connect(mapStateToProps, mapDispatchToProps)
)(Profile);