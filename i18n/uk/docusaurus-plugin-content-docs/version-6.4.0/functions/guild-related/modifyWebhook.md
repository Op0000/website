---
title: '$modifyWebhook'
description: '$modifyWebhook змінить вказаний вебгак.'
id: modifyWebhook
---

`$modifyWebhook` змінить даний вебхук.

## Використання

```php
$modifyWebhook[webhookID;name;avatar;channelID?;reason?]
```

## Параметри

| Поле                    | Тип   | Опис                                                 | Обов'язковий |
| ----------------------- | ----- | ---------------------------------------------------- |:------------:|
| ідентифікатор webhookID | ціле  | ID вебхука (Webhook ID для зміни.                    |     так      |
| назва                   | рядок | Нове ім'я вебхука.                                   |     так      |
| аватар                  | рядок | Аватар нового вебгака.                               |     так      |
| ID каналу?              | ціле  | ID каналу, в якому розміщений вебхук.                |      ні      |
| причина?                | рядок | Причина відправлена в журналі розпізнавання гільдії. |      ні      |

## Приклад(и)

Це змінить вже існуючий вебхук і змінить його аватар на ваш аватар користувача:

```javascript
bot.command({
    name: 'modifyWebhook',
    код: `
  $modifyWebhook[webhookID;Hello!;$userAvatar[$authorID];$channelID;Тестування!]
  `
});
```