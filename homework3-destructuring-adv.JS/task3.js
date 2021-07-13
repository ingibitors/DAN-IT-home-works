//Задание 3

//У нас есть объект user:
//Напишите деструктурирующее присваивание, которое:
//
// свойство name присвоит в переменную name
// свойство years присвоит в переменную age
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
//
// Выведите переменные на экран.

const user1={
  name:"John",
  years:30,
};
({name,years:age,isAdmin=false}= user1);
console.log(age, isAdmin);
