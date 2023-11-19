

// let Employee = function (date, name, salary, department) {
//   this.date = date;
//   this.name = name;
//   this.salary = salary;
//   this.department = department;

//   this.show = function () {
//     console.log(`${this.date}, ${this.name}, ${this.salary}, ${this.department}`);
//     document.write(`${this.date}, ${this.name}, ${this.salary}, ${this.department} <hr>`);
//   }
// }

// let Salaries = function () {
//   this.data = [];
//   this.add = function (salary) {
//     this.data.push(salary);
//   }


//   this.show = function (filterName, filterDepartment, top3Salaries, allSalary, all) {
//     let filteredData = this.data.slice()
//     if (filterName) {
//       filteredData = filteredData.filter(function (item) {
//         return item.name === filterName;
//       });
//     }

//     if (filterDepartment) {
//       filteredData = filteredData.filter(function (item) {
//         return item.department === filterDepartment;
//       })
//     }

//     if (top3Salaries) {
//       // Сортируем массив по убыванию зарплат
//       filteredData.sort(function (a, b) {
//         return b.salary - a.salary;
//       });
//       // Выводим ТОП-3 записей
//       for (let i = 0; i < Math.min(3, filteredData.length); i++) {
//         filteredData[i].show();
//       }
//     }
//     if(allSalary){
//       let e = 0;
//       for(let q = 0;q<filteredData.length; q++){
//         e += filteredData[q].salary;
//       }
//       console.log(`Общая зарплата: ${e}`);
//       document.write(`Общая зарплата: ${e} <hr>`)
//     }
//     if(all){
//       filteredData.forEach(function(item){
//         item.show()
//       })
//     }
//     // console.log(this.data)
//   }
// }

// let employee = new Salaries();

// employee.add(new Employee('20.10.2022', 'Alex', 50000, 'HR'));
// employee.add(new Employee('21.07.2020', 'Diana', 38000, 'PTD'));
// employee.add(new Employee('01.02.2018', 'Dasha', 24000, 'STAFF'));
// employee.add(new Employee('13.02.2015', 'Mariia', 13000, 'HEAD'));
// employee.add(new Employee('21.07.2020', 'Sergey', 13400, 'STAFF'));
// employee.add(new Employee('21.07.2020', 'Nicolay', 36400, 'STAFF'));


// //поиск по имени
// employee.show('Alex');


let Employee = function (date, name, salary, department) {
  this.date = date;
  this.name = name;
  this.salary = salary;
  this.department = department;

  this.show = function () {
    console.log(`${this.date}, ${this.name}, ${this.salary}, ${this.department}`);
    document.write(`${this.date}, ${this.name}, ${this.salary}, ${this.department} <hr>`);
  }
}

let Salaries = function () {
  this.data = [];
  this.add = function (salary) {
    this.data.push(salary);
  }

  this.show = function (filterName, filterDepartment, top3Salaries, allSalary, all) {
    let filteredData = this.data.slice();

    if (filterName) {
      filteredData = filteredData.filter(function (item) {
        return item.name === filterName;
      });
    }

    if (filterDepartment) {
      filteredData = filteredData.filter(function (item) {
        return item.department === filterDepartment;
      });
    }

    if (top3Salaries) {
      // Сортируем массив по убыванию зарплат
      filteredData.sort(function (a, b) {
        return b.salary - a.salary;
      });
      // Выводим ТОП-3 записей
      for (let i = 0; i < Math.min(3, filteredData.length); i++) {
        filteredData[i].show();
      }
    }

    if (allSalary) {
      let e = 0;
      for (let q = 0; q < filteredData.length; q++) {
        e += filteredData[q].salary;
      }
      console.log(`Общая зарплата: ${e}`);
      document.write(`Общая зарплата: ${e} <hr>`);
    }

    if (all) {
      filteredData.forEach(function (item) {
        item.show();
      });
    }
  }
}

let employee = new Salaries();

employee.add(new Employee('20.10.2022', 'Alex', 50000, 'HR'));
employee.add(new Employee('21.07.2020', 'Diana', 38000, 'PTD'));
employee.add(new Employee('01.02.2018', 'Dasha', 24000, 'STAFF'));
employee.add(new Employee('13.02.2015', 'Mariia', 13000, 'HEAD'));
employee.add(new Employee('21.07.2020', 'Sergey', 13400, 'STAFF'));
employee.add(new Employee('21.07.2020', 'Nicolay', 36400, 'STAFF'));

// Поиск по имени
employee.show('Alex');
