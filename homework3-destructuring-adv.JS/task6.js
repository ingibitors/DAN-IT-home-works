//Задание 6
//Дан обьект employee. Добавьте в него свойства age и salary,
// не изменяя изначальный объект (должен быть создан новый объект, который будет включать все необходимые свойства).
// Выведите новосозданный объект в консоль.

 const employee = {
        name: 'Vitalii',
        surname: 'Klichko'
    }
    const NewEmployee={};
    ({name:NewEmployee.name,surname:NewEmployee.surname,salary:NewEmployee.salary,age:NewEmployee.age}=employee);
    console.log(NewEmployee);
    NewEmployee.salary=100;
    NewEmployee.age=100;
