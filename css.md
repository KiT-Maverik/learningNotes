DRY - dont repeat yourself
эжэщх86039окзщушге60935гезцщклец0к7е69ое42зщушй=-уъ=	ц-=з0314з0-=31з0-=-2134-=0щ9-=1398-4й38н79й3478е634й	к5554534321]1]]12345567гш9щ0з0089г5г98ц5ншгнц2-е5ш3=34=]-1=0-0-ш9ц35н09-509-н53х]ъз2ъ

selectors weight
important dominates everything
class > ID > element > style tag


Несколько курсоров

Переместите курсор и, удерживая Ctrl, кликните в нужном участке для добавления курсора. Отменить действие можно с помощью Ctrl + U. Лично мне ни разу не пригодилось.

Выделение столбцом

Как проверить:

Перейдите в панель «Sources».
Выберите какой-нибудь файл.
Выделяйте текст, удерживая Alt.
Выделение столбцом работает также и при редактироавнии HTML в панели «Elements».

Скриншот всей страницы
Сделать снимок всей страницы очень просто. Нужно просто…

Открыть инспектор.
Перейти в консоль.
Нажать Ctrl + Shift + P
Набрать "screenshot"
Выбрать пункт "Capture full size screenshot"

Эмуляция сенсорных устройств

Также можно симулировать некоторые датчики:

Сенсорный экран
Координаты для геолокации
Акселерометр
Как попробовать:

Выберите панель «Elements».
Нажмите «Esc» и выберите «Emulation > Sensors».



===============
Как строить структуру CSS и называть классы
1. универсальные классы для селекторов
2. ищбегать наследования свойств.
Не использовать вложенные селекторы вида .class-name .class-name2 .class-name3, потому что из-за этого:

Нельзя использовать компоненты повторно.
Очень сложно редактировать код, чтобы что-то не сломать / что-то точно заработало.
Для изменения свойств нескольких в общем-то похожих элементов нужно исправлять CSS свойства в разных местах сайта.
Использовать говорящие названия классов - они обеспечивают более быстрое вхождение в проект нового человека, и с их помощью проще создавать независимые компоненты, которые не перекрывают стили друг друга.

повторяюзиеся классы
Например, чаще всего это заголовки смысловых блоков, кнопки и декоративные (подчеркивания, кавычки, выделения одного-двух слов в предложении другим цветом) элементы

Поэтому перед тем, как назвать какой-то элемент с привязкой к месту его позиционирования, пролистайте макет и посмотрите – есть ли в макете еще элементы с таким же внешним видом?

title название

модификаторы - используются если вы видите два очень похожих элемента, например - у кнопок одинаковый шрифт, радиус закругления, и padding. Если две кнопки отличаются в дизайне только характеристиками одного свойства (например, цвета или padding), то логично не создавать два разных класса с повторяющимися наборами свойств, а сделать один класс btn и класс-модификатор, который добавляет кнопке дополнительные свойства или изменяет их (например btn-primary или btn-red).

Правило: название модификатора должно отвечать на на вопрос "Какое свойство он меняет?" или "Какая смысловая нагрузка элемента с этим модификатором?". Например, btn-large - большая кнопка, font-medium - средний шрифт, btn-success - кнопка успешного выполнения действия.


при создании стилей нужно думать о следующих вещах 
1. что случится если в элемент добавить еще немного текста (лоаклизация)
2. Что случится, если в данный проект будет добавлена еще одна страница? часто для многиз страниц прописывают одну таблицу стилей. если в боди специфические параметры, то это может поломать дабавочную страницу
3. Понятны ли названия классов другому человеку? Быстро ли другой человек разберется в структуре проекта и поймет что за что отвечает и как тут что работает?
4. Не много ли я дублировал кода, можно ли его оптимизировать?
5. Надо ли создавать класс на этом элементе? Буду ли я для него применять CSS свойства?

====================

› &rsaquo and ;    \203A	-css

css selectors

* all elements
https://code.tutsplus.com/ru/tutorials/the-30-css-selectors-you-must-memorize--net-16048

https://habr.com/ru/post/137588/

«Да, вы все верно поняли. Css селектор плевать хотел на все эти ваши изыски типа пробелов или «>».»

У меня было много раз, когда это:
.test > .a {
style: foo;
}
.test .a {
style: foo2;
}
не работало (пока во втором не добавляешь >). Вы уверены, что селекторы знак ">" не учитывают?

унаследованные стили и комбинаторы нет веса
составить табличку весов селекторов.

селекторы по классу, атрибутам псевдоклассам и псевдоэлементам весят одинаково
=========
Советы по написанию хорошего CSS

КОмментарии надо писать
сложные селекторы Если использовать слишком много селекторов, вы чрезмерно усложните CSS, тесно связав все это с HTML-структурой своего сайта или сервиса. Если впоследствии изменится разметка, придется менять и CSS. И снова мы теряем время, деньги и любовь коллег.

пролизводительность. браузер читает селеткоры справа налево
наименование цсс селекторов
соднаие классов для индивидуельных при-наков. Всегда сздавай класс для часто используемых групп признаков


13 15 licenses
journey
asset position in list


    await assert.equals(
      await searchBar.getSearchSuggestionsQty(),
      1,
        'Extra items exist in the search suggestions list'
    );


DSM page header bug
set as primary data source 
