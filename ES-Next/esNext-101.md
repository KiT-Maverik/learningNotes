# РАБОТА С ПЕРЕМЕННЫМИ
### let
`let` - переменная с блочной зоной видимости
Нельзя использовать переменную типа `let` до ее объявления
### const
`const` - постоянная переменная (нельзя изменить в ходе выполнения программы)
1. Название пишется большими буквами
2. Постоянная может быть объявлена только один раз
3. Значение должно быть присвоено сразу
4. Постоянные не “поднимаются”

> Константа, значением которой указан объект содержит ссылку на этот объект. Это значит, что свойства этого объекта можно менять

### Использование let и const
* `let` следует использовать если планируешь изменять значение
* `const` если не планируешь

# ПАРАМЕТРЫ ФУНКЦИЙ ПО УМОЛЧАНИЮ
```js
function logger(arg = `Default value`) {
    console.log(arg);
}

logger(); // prints 'Default value' to console.
```

# ШАБЛОННЫЕ СТРОКИ
Обрамлены в обратные кавычки
```js
let name = `Bill`;
```
Можно напрямую обращаться к переменным
```js
console.log(`Hello ${name}!`);
```
Поддерживают многострочность
```js
console.log(`Hello ${name}!
Have a good day!`);
```
С ними можно использовать методы строк
```js
console.log(`Big ${name} in da house!`.toUpperCase());
```
В подстановках можно использовать методы и выражения
```js
console.log(`Hello ${name.toUpperCase()}!
2 plus 2 equals ${2 * 2}, right?`);
```
Тегирование позволяет изменить вывод строк при помощи функций
```js
console.log(changer`Hello ${name}!`);
function changer(literals, values) {
    return `This is literals: ${literals}
 This is values: ${values}`
}
```
# ОПЕРАТОР SPREAD/REST
Оператор `...` трактуется в зависимости от контекста использования.
### Объединение массивов
```js
let arr = [1, 2, 3],
    arr2 = [...arr, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]
```
В данном случае `...` трактуется как оператор `SPREAD`, поскольку разбирает массив `arr` на составные части и включает их в массив `arr2`.
Важно понимать, что в данном случае происходит копирование всех свойств массива, а не ссылки на него.

### Передача элементов массива в функцию
```js
function tribute(...rest) {
    console.log(`${rest}`);
}
tribute('We', 'will', `rock`, 'you!'); // Output: We,will,rock,you!
```
В данном случае `...` трактуется как оператор `REST`, поскольку собирает множество значений в один массив.

# ДЕСТРУКТУРИРУЮЩЕЕ ПРИСВАИВАНИЕ
```js
let names = ['Adam', 'Bobby', 'Janette']; // Массив, над которым мы будем издеваться
```
Упрошает извлечение данных из массивов и объектов - массив просто "разбирается" на составные части
В левой части выражения мы объявляем переменные, которым хотим присвоить значения из массива, а в правой указываем целевой массив.
```js
let [user1, user2, user3] = names;
console.log(`1st user: ${user1}; 2nd user: ${user2}; 3rd user: ${user3};`);
```
Можно задать значения по умолчанию для переменных
```js
let [visitor1, visitor2, visitor3, visitor4 = `Administrator`] = names;
console.log(visitor4);
```
Деструктурирующее присваивание позволяет использовать оператор разворота
```js
let [firstRecord, ...others] = names;
console.log(`This is first name in the list: ${firstRecord}; and this is all others: ${others}.`);
```

> Use case: обмен значений переменных
```js
console.log(`Check this out! First user is ${user1}, and second user is ${user2}.`);
[user1, user2] = [user2, user1];
console.log(`HOBA! First user is ${user1}, and second user is ${user2}.`);
```
### ДЕСТРУКТУРИРУЮЩЕЕ ПРИСВАИВАНИЕ ОБЪЕКТОВ
Объект, над которым мы будем издеваться
```js
let zhaba = {
    fuselage: `фюзеляж`,
    chassis: `шассі`
};
```
Имена переменных и свойств объекта должны совпадать, иначе переменным будет назначено значение undefined
```js
{
    let {fuselage, chassis} = zhaba;
    console.log(`З першого погляду жаба схожа на самольота - в неї є ${fuselage} та ${chassis}.`);
}
```
Имена переменных можно переопределить
```js
{
    let {fuselage: var1, chassis: var2} = zhaba;
    console.log(`З першого погляду жаба схожа на самольота - в неї є ${var1} та ${var2}.`);
}
```
Переменным можно назначать значения по умолчанию
```js
{
    let {fuselage, chassis, author = `Лесь Подерв'янський`} = zhaba;
    console.log(`Маестро ${author}.`);
}
```