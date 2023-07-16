---
title: '$nodeVersion'
description: '$nodeVersion will return your current node.js version.'
id: nodeVersion
---

`$nodeVersion` will return your current node.js version.

## प्रोयोग

```php
$nodeVersion
```

## उदाहरण

This will return the current node.js version your bot is running on:

```javascript
bot.command({
    name: "nodeVersion",
    code: `
    $nodeVersion
    `
});
```