//Задание 2
// Перед вами массив characters, состоящий из объектов. Каждый объект описывает одного персонажа.
// Создайте на его основе массив charactersShortInfo, состоящий из объектов,
// в которых есть только 3 поля - name, lastName и age.
const characters = [
  {
    name: "Елена",
    lastName: "Гилберт",
    age: 17,
    gender: "woman",
    status: "human"
  },
  {
    name: "Кэролайн",
    lastName: "Форбс",
    age: 17,
    gender: "woman",
    status: "human"
  },
  {
    name: "Аларик",
    lastName: "Зальцман",
    age: 31,
    gender: "man",
    status: "human"
  },
  {
    name: "Дэймон",
    lastName: "Сальваторе",
    age: 156,
    gender: "man",
    status: "vampire"
  },
  {
    name: "Ребекка",
    lastName: "Майклсон",
    age: 1089,
    gender: "woman",
    status: "vempire"
  },
  {
    name: "Клаус",
    lastName: "Майклсон",
    age: 1093,
    gender: "man",
    status: "vampire"
  }
];

//Вариант 1

const resultArr = characters.map(({name, lastName, age}) => ({name, lastName, age}));
console.log(resultArr);

//Вариант 2
function trimArray(arr,property1, property2,property3) {
  const result=arr.map(item=>{
    const obj={
      [property1]:item[property1],
      [property2]:item[property2],
      [property3]:item[property3]
    };
    return obj;
  });
  return result;
}

const  CharactersShortInfo=trimArray(characters,"name","lastName","age");
console.log(CharactersShortInfo);
