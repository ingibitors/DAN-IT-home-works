//Задание 4
// Детективное агентство несколько лет собирает информацию о возможной личности Сатоши Накамото. Вся информация, собранная в конкретном году, хранится в отдельном объекте. Всего таких объектов три - satoshi2018, satoshi2019, satoshi2020.
// Чтобы составить полную картину и профиль, вам необходимо объединить данные из этих трех объектов в один объект - fullProfile.
// Учтите, что некоторые поля в объектах могут повторяться. В таком случае в результирующем объекте должно сохраниться значение, которое было получено позже (например, значение из 2020 более приоритетное по сравнению с 2019).
// Напишите код, который составит полное досье о возможной личности Сатоши Накамото. Изменять объекты satoshi2018, satoshi2019, satoshi2020 нельзя.
const satoshi2020 = {
  name: 'Nick',
  surname: 'Sabo',
  age: 51,
  country: 'Japan',
  birth: '1979-08-21',
  location: {
    lat: 38.869422,
    lng: 139.876632
  }
}
const satoshi2019 = {
  name: 'Dorian',
  surname: 'Nakamoto',
  age: 44,
  hidden: true,
  country: 'USA',
  wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
  browser: 'Chrome'
}
const satoshi2018 = {
  name: 'Satoshi',
  surname: 'Nakamoto',
  technology: 'Bitcoin',
  country: 'Japan',
  browser: 'Tor',
  birth: '1975-04-05'
}
const fullProfile={...satoshi2018,...satoshi2019,...satoshi2020};
console.log(fullProfile);
