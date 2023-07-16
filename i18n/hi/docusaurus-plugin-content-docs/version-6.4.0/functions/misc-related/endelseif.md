---
title: '$endelseif'
description: '$endelseif is used to end an elseif statement.'
id: endelseif
---

`$endelseif` is used to end an elseif statement.

## प्रोयोग

```php
$endelseif
```

:::warning Deprecation


`$if: "old"` is deprecated and should no longer be used as it will be removed in the future.

:::


## उदाहरण

Example usage of `$if: old` (will return "Hello" when the condition is true):

```javascript
bot.command({
    name: "if",
    $if: "old",
    code: `
  $if[1==2]
  Hello!
  $elseif[2==4]
  $endelseif
  $endif
  `
});
```