varoiables

$variableName: black;

div
	background-color: $variableName

вложенные стили

body
	color: red;
	div
		margim: 0 auto

mix in
переиспользуемые блоки в css
@mixin font {
	font-size: 10px;
	font-weight: bold;
}

миксин нужно объявлять и подключать

p {
	@include font;
}

в миксины можно передавать параметры
@mixin font ($color)
@mixin font ($color: red) // значение по умолчанию

@include font (blue) // если анесколько параметров, нужно соблюдать очередность. Если не хочешь можно передавать данные с названиями ($color: blue)

@mixin font ($color...)
полезно для установки паддингов и марждинов
все переданные параметры объединяюбтся в  строку и подставляются


псевдоклассы и псевдоэлементы

псевдокласс
div {
	&hover{

	}
	}

@mixinn mName() {
	div {

	}
}

импорт файлов

@import "./path/to/file";

математические операции
width: (100% +30%)
единицы измерения должны быть одинаковые

встроенные функции  в сас


условия
@if($cols >=) {
	width: 100%
}
@else {
	width: 50%
}


=== content

расширение миксинов

@content ключевое слово. где размещено, там и будет подставлен доп контент.

.page {
	@include mixinName() {
	// additional content goes here
	}
}