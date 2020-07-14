# Переменные

```scss
$variableName: black;

body {
  background-color: $variableName;
}
```

**Результат**: `black` установлен как `background-color` тега `body`.

# Вложенные стили

```scss
body {
  h1 {
    color: green;
  }
}
```

**Результат**: цвет всех заголовков `h1` внутри тега `body` установлен `green`.

# Mixin
Mixin это переиспользуемый блок CSS-кода.
Сначала нужно объявить, а затем включить миксин в существующий класс.

```scss
// Объявление
@mixin bgColor {
  background-color: red;
}

// Использование
body {
  @include bgColor;
}
```

**Результат**: `red` установлен как `background-color` тега `body`.

### Mixin: базовая работа с параметрами
```scss
// Объявление
@mixin bgColor($color) {
  background-color: $color;
}

// Вызов
body {
  @include bgColor(blue);
}
```

**Результат**: `blue` установлен как `background-color` тега `body`.  

SCSS позволяет устанавливать значения по умолчанию для параметров миксинов
```scss
// Объявление
@mixin bgColor($color: red) {
  background-color: $color;
}
```

### Mixin: работа с множеством параметров
SCSS позволяет передавать множество параметров в миксин.
```scss
// Объявление
@mixin bgColor($color, $padding) {
  background-color: $color;
  padding: $padding;
}

// Вызов
body {
  @include bgColor(brown, 20px);
}
```
* Если если вы передаете только значения параметров (без названий) нужно соблюдать очередность.
* Очередность можно нарушать только если вы передаете название и значение параметров.
```scss
// Объявление
@mixin bgColor($color, $padding) {
  background-color: $color;
  padding: $padding;
}

// Вызов
body {
  @include bgColor($padding: 20px, $color: brown);
}
```

### Mixin: передача нескольких значений в один параметр
Вы можете передавать несколько значений в один параметр. Для этого к его имени нужно добавить три точки. Все переданные значения будут объединены в  строку и подставлены.
```scss
// Объявление
@mixin padding($padding...) {
  padding: $padding;
}

// Вызов
body {
  @include padding(20px 50px);
}
```

**Результат**: для тега `body` установлены следующие паддинги: `padding-top` и `padding-bottom` по 20px, `padding-right` и `padding-left` по 50px.

### Mixin: расширение
```scss
@mixin bgColor {
  background-color: yellow;
  @content; // Сюда будет подставлено расширение
}
body {
  @include bgColor {
    padding: 50px; // Расширение
  }
}
```
**Результат**: для тега `body` установлены следующие параметры: `background-color: yellow;` и `padding: 50px;`.  

# Псевдоклассы
 ```scss
body {
  background-color: yellow;
  &:hover{
    background-color: red;
  }
}
 ```
**Результат**: `yellow` установлен как `background-color` тега `body`; при наведении цвет меняется на `red`.  
По такой же схеме можно управлять псевдоэлементами.

# Импорт файлов
SCSS позволяет импортировать модули из других файлов.
 ```scss
@import "./path/to/file";
 ```
# Встроенные модули
В SASS есть встроенные модули, с множеством полезных функций. 
> [Built-In Modules](https://sass-lang.com/documentation/modules)

# Математические операции
 ```scss
body {
  padding: (20px + 30px);
}
 ```
**Результат**: `padding: 50px` установлен для тега `body`.  
* Используемые в выражении единицы измерения должны быть одинаковыми.

# Условные операторы
 ```scss
@mixin bgColor ($colorize) {
  @if ($colorize == true) {
    background-color: green;
  }
  @else {
    background-color: red;
  }
}
body {
@include bgColor(true); // background-color: green;
@include bgColor(false); // background-color: red;
}
 ```
