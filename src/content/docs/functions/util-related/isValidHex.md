---
title: $isValidHex
description: $isValidHex will check if the given hex / decimal color is valid.
id: isValidHex
---

`$isValidHex` will check if the given hex / decimal color is valid.

## Usage

```php
$isValidHex[colorResolver]
```

## Parameters

| Field         | Type            | Description                 | Required |
| ------------- | --------------- | --------------------------- | :------: |
| colorResolver | string, integer | Hex / decimal color string. |   true   |

## Example(s)

This will return `true` as `#30dbd8` is an valid hex color:

```javascript
client.command({
  name: "isValidHex",
  code: `
  $isValidHex[#30dbd8]
  `,
});
```

This will return `true` as well as `80` is an valid hexadecimal color:

```javascript
client.command({
  name: "isValidHex",
  code: `
  $isValidHex[80]
  `,
});
```
