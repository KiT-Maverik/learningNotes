// Преимущества TS
// 1. Решает множество проблем с типами
// 2. Отличный способ документирования кода
// 3. Повышает чистоту кода
// 4. Повышает производительность кода

// JS компилируется чистый. Без добавочного синтаксиса или реализации проверок из тайпскрипта.
// Так просиходит потому, что строгость нужна только на этапе разработки.

// ===========
// ТИПЫ ДАННЫХ
// ===========

// TS позволяет указывать типы данных для переменных

let value1: number = 101;
// Здесь и далее, переменной value1 можно присваивать только значения типа number
// Выражение value1 = true; вызовет ошибку

// Пример назначения других типов
let value2: string = `Some text here...`;
let value3: boolean = true;

// Если тип данных переменной не указан, то ей неявно назначается тип `any`
// Переменная value4 имеет именно такой тип данных
let value4 = `Some text here...`;
// Тип данных `any` использовать не рекомендуется, поскольку он сводит на нет преимущества TS

// Переменным можно назначать несколько типов данных
let value5: string | number;

// Значение можно приводить к определенному типу
let value6: any = '42';
(value6 as number).toExponential();

// Назначить тип данных массиву можно двумя способами
let array1: boolean[] = [true, false];
let array11: Array<boolean> = [true, false];

// Типы данных в объектах регулируются следующим образом:
let user: { name: string, age: number } = {
    name: 'sd',
    age: 20
};

// ================
// ПРОДВИНУТЫЕ ТИПЫ
// ================

// ===== // Кортеж (tuple) — упорядоченный набор фиксированной длины.
// Кортеж, как структура данных, примечателен тем, что в него нельзя добавлять элементы, а так же нельзя нарушать порядок следования (менять местами элементы).
let tuple1: [number, string] = [1, "Some text"];
let tuple2: [number, string] = ["Some text", 1]; // Эта инструкция вызовет ошибку

// ===== // enum

// ==================
// РАБОТА С ФУНКЦИЯМИ
// ==================

// Аргументам функций можно присваивать типы данных
function function1(arg1: string) {
    console.log(arg1);
}

// Также можно определять какой тип данных вернет функция
function function2(): number {
    return 2
}

// Если функция ничего не возвращает, ей нужно присвоить тип данных void
function function3(): void {
}

// Если функция никогда не вернет значение, ей следует присвоить тип never
function function4(): never {
    throw 'error'
}

// В TS все объявленные параметры функции по умолчанию являются обязательными
function function5(arg1, arg2) {
    console.log(arg1)
}

function5(2);    // Эта инструкция вызовет ошибку
function5(2, 55, 22); // Лишние аргументы также запрещены

// Можно сделать аргумент необязательным, но это нужно явно указать
function function6(arg1, arg2?) {
    console.log(arg1)
}

function6(2);    // Эта инструкция работает

// Перегрузка функций
// Перегрузка функций это способ задать функции несколько вариантов принимаемых аргументов.
// Это позволяет запускать одну и ту же функцию с разным набором входящих данных.
// Логика обработки этих наборов прописывается внутри функции

function typeLogger(arg1: string): string;
function typeLogger(arg1: number): string;
function typeLogger(arg1) {
    if (typeof arg1 === `string`) {
        console.log(`It's a string!`);
        return typeof arg1;
    }
    if (typeof arg1 === `number`) {
        console.log(`It's a number!`);
        return typeof arg1;
    }
}
