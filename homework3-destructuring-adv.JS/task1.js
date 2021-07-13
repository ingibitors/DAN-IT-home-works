//Задание 1
// Две компании решили объединиться, и для этого им нужно объединить базу данных своих клиентов.
// У вас есть 2 массива строк, в каждом из них - фамилии клиентов. Создайте на их основе один массив,
// который будет представлять собой объединение двух массив без повторяющихся фамилий клиентов.
const clients1 = ["Гилберт", "Сальваторе", "Пирс", "Соммерс", "Форбс", "Донован", "Беннет"];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];

// обединение 2 масивов без повторов
//способ 1:
let data = {};
clients1.concat(clients2).forEach(function(item) {
  data[item] = true;
});
let clientsVariant1 = Object.keys(data);
console.log(Array.isArray(clientsVariant1) === true);
console.log(clientsVariant1);
//Способ 2
//объединение через spread оператор ...
/*const clients=[...clients1,...clients2];*/

const clientsVariant2 = [...new Set([...clients1, ...clients2])];
console.log(clientsVariant2);
console.log(Array.isArray(clientsVariant1) === true);

//Способ 3

const arr = [...clients1, ...clients2].filter((el, idx, arr) => arr.indexOf(el) === idx);
console.log(arr);







