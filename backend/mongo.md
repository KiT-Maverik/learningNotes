
noSQL БД где данные хранятся как объекты

CLI 
mongod || mongo - запускает БД
mongo --host localhost:#####

use %DB_NAME% использвоать БД
коллекция это типа таблицы в стандартных бд
db.createCollection("%COLLECTION_NAME%")
db.COLLECTION.drop()
при методе дроп может удалиться бд если в ней нет ни одной коллекции

Добавление данных в коллекцию
Любая запись в коллекции это js объект
id обязательное хначение в  записи. добавляется автоматом.

db.collectionName.InsertOne({object})
Если создается запись без значения в  существуюзем поле, то в  это поле засовывается "No field" Это для табличного отображения. По фатку же этого поля просто нет в объекте

Записывая обхект модно писатьв  него типы данных и конструкторы из js например new Date()

выборка данных
db.collectionName.find()
db.collectionName.find().limit(2) - вывести первые две записи
> db.sampleCollection.find({},{"age": 0}) - не выводить свойство age
.sort({pkeyName: Number})
Number = 1 for asc || -1 for desc
можно сортировать по нескольким значениям
вывод данных ИЛИ один ключ или другой
db.collectionName.find({$or:[{age:21}, {pewpew::true}]})
db.collectionName.find({age: {$lt: 38}}) меньше чем 38
$gt greater then
$eq
$ne
$lte
$gte

$in:{[''pew', "pew"]}  выборка по нескольким занечниям ключа

keyName: {$exists: true} вывести объекты что есть с таким ключом
db.collectionName.find({key: {#size: 2}}) выбрать те поля где в массиве лежит 2 элементов
db.collectionName.find({"key.1":"pew"}) only those where pew is first element

обновление и удаление данных
db.collectionName.updateOne()
db.collectionName.updateMany() 

db.collectionName.updateOne({age:22}, {$set: {age:22}}) изменить значения 22 в  поле age на 25 . Изза функции будет изменен только первый объект?
db.collection.replaceOne({key:value})

deleteOne
deleteMany


объединение запросов
db.collectionName.bulkWrite()

поиск совпадений в тексте
db.collectionName. createIndex({keyName:"data type"}) индексировать данные где будет поиск проводиться
db.collectionName.find(
	{$text: {$search: "text to seacrh"}}, \\ текст который ищем
	{score: {$meta: textScore}} //Отображать очкит совпадения объекта запросу
).sort({score: {$meta:"textScore"}}) сортировать выдачу по очкам совпадения

мгновенная обработка данных
.countпосчитать объекты по определенному фильтру
.distinct показать только уникальные значения