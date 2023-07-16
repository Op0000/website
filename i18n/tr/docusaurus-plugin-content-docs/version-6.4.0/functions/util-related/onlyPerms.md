---
title: '$onlyPerms'
description: '$onlyPerms will check if the user has the listed permission and return a error message if not.'
id: onlyPerms
---

`$onlyPerms` will check if the user has the listed permission and return a error message if not.

## Usage

```php
$onlyPerms[...perms;error]
```

## Parameters

| Field    | Type   | Description                                                   | Required |
| -------- | ------ | ------------------------------------------------------------- |:--------:|
| ...perms | string | Permission the user requires.                                 |   true   |
| error    | string | Error to return when the user has not the listed permissions. |   true   |

You can find all permissions __[here](../../guides/client/2permissionsintents.md)__.

## Example(s)

This will limit the command to work only when the user has administrator permissions:

```javascript
bot.command({
    name: "onlyPerms",
    code: `
    Ok.
    $onlyPerms[administrator;You don't have administrator permissions!]
    `
});
```