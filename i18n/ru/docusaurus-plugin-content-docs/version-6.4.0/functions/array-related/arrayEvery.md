---
title: $arrayEvery
description: '$arrayEvery проверит соответствие условию всех элементов массива.'
id: arrayEvery
---

`$arrayEvery` проверит соответствие условию всех элементов массива.

## Использование

```php
$arrayEvery[name;query;queryType?]
```

## Параметры

| Название  | Тип    | Описание                                                                    | Нужно |
| --------- | ------ | --------------------------------------------------------------------------- |:-----:|
| название  | строка | Имя массива.                                                                |  да   |
| query     | строка | Элемент, который мы будем использовать для каждого элемента внутри массива. |  да   |
| queryType | строка | Оператор для сравнения.                                                     | false |

## Операторы сравнения

* `включает в себя` — в том числе
* `начинается с` — начинается с
* `endsWith` — заканчивается
* `==` — Равно
* `!=` — Не равно
* `>` — больше, чем
* `<` — больше, чем
* `>=` — больше, чем или равно
* `<=` — меньше или равно

## Пример(ы)

```javascript
bot.command({
    name: "array-every",
    code: `
  $arrayEvery[array;30;==]
  $createArray[array;1;2;3;0;30]
  `
    // Будет возвращено "false". Cause 1 ≠ 30. Вы можете считать это логическим оператором "и (&&)".
});
```