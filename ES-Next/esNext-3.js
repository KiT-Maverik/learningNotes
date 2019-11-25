// =================
// РАБОТА С КЛАССАМИ
// =================

// Синтаксис классов это синтаксический сахар
// Классы объявляются через ключевое слово class

class Class1 {
}

console.log(new Class1());

// Конструктор вызывается в момент создания объекта (в момент использования ключевого слова "new")
// В каждом классе есть функция, которая инициализирует класс и устанавливает его свойства (конструктор).
// Если конструктор не задан явно, создается пустой коструктор.

class Class2 {
    constructor() {
        this.key = `value`;
    }
}

console.log(new Class2());

// Cвойства объекта задаются только в конструкторе.
// Конструктор может принимать аргументы, которые мы можем указать при создании объекта

class Class3 {
    constructor(argument) {
        this.key = argument;
    }
}

console.log(new Class3(`value`));

// Статические свойства и методы принадлежат самому классу, а не объектам созданным на его основе.
// Чаще всего они используются для хранения вспомогательной информации.
// Объявляются с помощью ключевого слова "static"

class Class4 {
    static key = `value`;
}

// Вызывать статические свойства или методы можно только через имя класса.
Class4.key();

// =================================
// РАБОТА С КЛАССАМИ: НАСЛЕДОВАНИЕ
// =================================

// Для того, чтобы определить наследование между классами используется ключевое слово "extends"

class SuperClass {
}

class SubClass extends SuperClass {
}

// Если мы указываем для подкласса конструктор, он должен первой строчкой вызывать родительский конструктор с помощью метода super();
// Если у подкласса нет конструктора он будет использовать родительский

// Родительские методы и свойства можно перезаписать создав методы или свойства с таким же названием
// Через ключевое слово "super" можно адресовываться к методам родительского класса

// ====================
// РАБОТА С ОБЪЕКТАМИ
// ====================

// если название свойства совпадает с названием переменной, то мы можем указать только свойство
// Имена свойств объекта можно определять динамически
{
    let key = "key",
        object = {
            [key]: `value`
        }
    console.log(object)
}
// Сложное формирование имени свойства
{
    let key = "key",
        object = {
            [key.toUpperCase()]: `value`
        }
    console.log(object)
}
// Если название переменной и свойства совпадают, можно указать только имя переменной
{
    let key = "value",
        object1 = {
            key
        }
    console.log(object1)
}

// =============================
// РАБОТА С ОБЪЕКТАМИ: GET и SET
// =============================

// Геттеры и сеттеры это методы объекта, которые во внешнем коде выглядят как его свойства
let fortuneteller = {
    propertyName: 'You will never get this value',
    get propertyName() {
        return `Magic number is: ${Math.random()}`
    },
    set propertyName(value) {
        console.log(`Instead of ${value} take ${Math.random()}`)
    }
};

// геттер, срабатывает при чтении fortuneteller.propName
// Cвойство объекта связывается геттером. Поэтому, при обращении к нему вызывается геттер, а не свойство "propertyName"
console.log(fortuneteller.propertyName);

// сеттер, срабатывает при записи fortuneteller.propName = value
fortuneteller.propertyName = 20;


// =============================
// РАБОТА С ОБЕЩАНИЯМИ
// =============================
/*
Объект Promise (промис) используется для отложенных и асинхронных вычислений.

Promise может находиться в трёх состояниях:
1. ожидание (pending): начальное состояние, не исполнен и не отклонен.
2. исполнено (fulfilled): операция завершена успешно.
3. отклонено (rejected): операция завершена с ошибкой.

состояние обещания можно изменить лишь один раз. все последующие попытки игнорируются
*/
// Создание обещаний
let promise = new Promise(executor);
// Executor это функция, которая принимает два аргумента: resolve и reject.
// Обычно executor описывает выполнение какой-то асинхронной работы, по завершении которой необходимо вызвать функцию resolve или reject.

// then
// Метод then принимает два аргумента resolve и reject. Это функции которые выполняются выполнении/отклонении промиса.
// Можно вызывать then несколько раз подряд
// Не обязательно передавать оба аргумента.
//
// catch
// Метод catch принимает один аргумент - функцию, которая выполнится если обещание будет отклонено.
// Метод catch срабатывает в случае отклонения обещания в любом шаге,
// Поэтому его чаще всего используют, когда есть несколько шагов
