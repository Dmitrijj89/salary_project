export default class SalaryService {

  data =  [
    { 
      id: '0',
      name: 'Alex',
      lastName: 'Petrov',
      birthday: '12.01.1998',
      role: 'manager',
      salaryHour: '250',
      active: true,
      isNewEmployee: true,
      monthsWorked: {
        January: {
          hour: 180,
          prize: 10,
          salary: 45000,
          totalSalary: 49500
        },
        February: {
          hour: 140,
          prize: 5,
          salary: 35000,
          totalSalary: 36750
        },
        March: {
          hour: 160,
          prize: 15,
          salary: 40000,
          totalSalary: 46000
        }
      }
    },
    { 
      id: '1',
      name: 'Ivan',
      lastName: 'Sidorov',
      birthday: '15.10.1995',
      role: 'porter',
      salaryHour: '200',
      active: true,
      isNewEmployee: true,
      monthsWorked: {
        January: {
          hour: 180,
          prize: 10,
          salary: 36000,
          totalSalary: 39600
        },
        February: {
          hour: 140,
          prize: 5,
          salary: 28000,
          totalSalary: 29400
        },
        March: {
          hour: 160,
          prize: 15,
          salary: 32000,
          totalSalary: 36800
        }
      }
    },
    { 
      id: '2',
      name: 'Dmitrii',
      lastName: 'Stepanov',
      birthday: '1.05.1989',
      role: 'manager',
      salaryHour: '250',
      active: true,
      isNewEmployee: false,
      monthsWorked: {
        January: {
          hour: 180,
          prize: 10,
          salary: 45000,
          totalSalary: 49500
        },
        February: {
          hour: 140,
          prize: 5,
          salary: 35000,
          totalSalary: 36750
        },
        March: {
          hour: 160,
          prize: 15,
          salary: 40000,
          totalSalary: 46000
        }
      }
    }
  ];

  _id = [
    { 
      id: '0',
      name: 'Alex',
      lastName: 'Petrov',
      birthday: '12.01.1998',
      role: 'manager',
      salaryHour: '250',
      active: true,
      isNewEmployee: true,
      monthsWorked: {
        January: {
          hour: 180,
          prize: 10,
          salary: 45000,
          totalSalary: 49500
        },
        February: {
          hour: 140,
          prize: 5,
          salary: 35000,
          totalSalary: 36750
        },
        March: {
          hour: 160,
          prize: 15,
          salary: 40000,
          totalSalary: 46000
        }
      }
    },
  ]

    getEmployees() {
      return new Promise((res, rej) =>{
        setTimeout(()=>{
          if (Math.random() > 1) {
            rej(new Error('Something bad happened'));
          } else {
            res(this.data);
          }
        }, 500)
      })
    }

    getById() {
      return new Promise((res, rej) =>{
        setTimeout(()=>{
          if (Math.random() > 1) {
            rej(new Error('Something bad happened'));
          } else {
            res(this._id);
          }
        }, 500)
      })
    }
  
}