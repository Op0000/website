---
title: '$getAuditLogs'
description: '$getAuditLogs извлекает журналы аудита гильдии в соответствии с заданными аргументами.'
id: getAuditLogs
---

`$getAuditLogs` получает журналы аудита гильдии по заданному аргументу.

## Использование

```php
$getAuditLogs[guildID;userID?;limit?;action?;format?]
```

## Параметры

| Название         | Nbg    | Описание                                                         | Нужно |
| ---------------- | ------ | ---------------------------------------------------------------- |:-----:|
| ID гильдии       | целое  | Идентификатор конкретной гильдии.                                |  да   |
| ID пользователя? | целое  | Пользователь, выполнивший действие, указанное в журналах аудита. | ложь  |
| лимит?           | число  | Максимальное количество журналов аудита, которые он вернётся.    | ложь  |
| действие?        | целое  | Действие, которое было выполнено.                                | ложь  |
| формат?          | строка | Формат для возврата логинов аудита.                              | ложь  |

| Формат              |                                                                 |
| ------------------- | --------------------------------------------------------------- |
| {executor.username} | вернет имя пользователя пользователя, который завершил действие |
| {executor.mention}  | Упоминает пользователя, который выполнил действие               |
| {executor.id}       | вернет ID пользователя, выполнившего действие                   |
| {executor.tag}      | Вернет дискриминатор пользователя, который выполнил действие    |
| {target.id}         | вернет ID пользователя, который был целью действия              |
| {action}            | Возврат действия                                                |
| {id}                | Возврат идентификатора действия/auditlog                        |

## AuditLogEvents

| СОБЫТИЕ                            | ЗНАЧЕНИЕ | ОПИСАНИЕ                                                                   |          ОБЪЕКТЫ ИЗМЕНЕНЫ          |
| ---------------------------------- |:--------:| -------------------------------------------------------------------------- |:----------------------------------:|
| GuildUpdate                        |    1     | Настройки сервера были обновлены                                           |              Гильдия               |
| ChannelCreate                      |    10    | Канал создан                                                               |               Канал                |
| ChannelUpdate                      |    11    | Настройки канала были обновлены                                            |               Канал                |
| Удалить канал                      |    12    | Канал был удален                                                           |               Канал                |
| ПерезаписатьСоздать канал          |    13    | Перезапись прав была добавлена в канал                                     |         Перезаписать канал         |
| Перезапись канала                  |    14    | Перезапись прав для канала была обновлена                                  |         Перезаписать канал         |
| Удалить перезапись канала          |    15    | Перезапись прав удалена из канала                                          |         Перезаписать канал         |
| MemberKick                         |    20    | Участник был удален с сервера                                              |                                    |
| MemberPrune                        |    21    | Участники были обрезаны с сервера                                          |                                    |
| MemberBanAdd                       |    22    | Участник был заблокирован на сервере                                       |                                    |
| MemberBanRemove                    |    23    | Запрет на сервер был отменен для участника                                 |                                    |
| MemberUpdate                       |    24    | Участник был обновлен на сервере                                           |              Участник              |
| MemberRoleUpdate                   |    25    | Участник был добавлен или удален из роли                                   |           Частичная роль           |
| MemberMove                         |    26    | Участник был перемещен в другой голосовой канал                            |                                    |
| MemberDisconnect                   |    27    | Участник был отключен от голосового канала                                 |                                    |
| Добавить бот                       |    28    | Пользователь бота добавлен на сервер                                       |                                    |
| Создать роль                       |    30    | Роль была создана                                                          |                Роль                |
| RoleUpdate                         |    31    | Роль была отредактирована                                                  |                Роль                |
| RoleDelete                         |    32    | Роль была удалена                                                          |                Роль                |
| Создать приглашение                |    40    | Приглашение на сервер создано                                              | Пригласить и пригласить метаданные |
| Пригласить обновить                |    41    | Приглашение на сервер было обновлено                                       | Пригласить и пригласить метаданные |
| Пригласить удалить                 |    42    | Приглашение на сервер было удалено                                         | Пригласить и пригласить метаданные |
| ВебхукСоздать                      |    50    | Webhook создан                                                             |               Вебхук               |
| WebhookUpdate                      |    51    | Свойства или канал вебхука были обновлены                                  |               Вебхук               |
| Удалить WebhookDelete              |    52    | Webhook был удален                                                         |               Вебхук               |
| EmojiCreate                        |    60    | Emoji создан                                                               |               Emoji                |
| EmojiUpdate                        |    61    | Имя эмодзи обновлено                                                       |               Emoji                |
| EmojiDelete                        |    62    | Emoji был удален                                                           |               Emoji                |
| Удаление сообщения                 |    72    | Одно сообщение было удалено                                                |                                    |
| Удалить сообщение                  |    73    | Несколько сообщений удалено                                                |                                    |
| Пин                                |    74    | Сообщение прикреплено к каналу                                             |                                    |
| Сообщение                          |    75    | Сообщение было откреплено от канала                                        |                                    |
| Создать интеграцию                 |    80    | Приложение было добавлено на сервер                                        |             Интеграция             |
| Обновление интеграции              |    81    | Приложение было обновлено (в качестве примера, его область была обновлена) |             Интеграция             |
| ИнтеграцияУдалить                  |    82    | Приложение было удалено с сервера                                          |             Интеграция             |
| Создание StageInstanceCreate       |    83    | Этап был создан (стадия становится живой)                                  |          Этап экземпляра           |
| StageInstanceUpdate                |    84    | Этап подробности подробности были обновлены                                |          Этап экземпляра           |
| StageInstanceУдалить               |    85    | Этап был удалён (стадия канал больше не работает)                          |          Этап экземпляра           |
| Создать наклейку                   |    90    | Стикер создан                                                              |               Стикер               |
| Обновление наклейки                |    91    | Детали наклейки были обновлены                                             |               Стикер               |
| Удалить                            |    92    | Стикер был удален                                                          |               Стикер               |
| Создание запланированного события  |   100    | Событие было создано                                                       |  Запланированное событие Гильдии   |
| Обновление расписания гильдии      |   101    | Событие было обновлено                                                     |  Запланированное событие Гильдии   |
| Событие по расписанию удалено      |   102    | Событие было отменено                                                      |  Запланированное событие Гильдии   |
| Создать тему                       |   110    | Тема была создана в канале                                                 |               Поток                |
| Обновление темы                    |   111    | Тема была обновлена                                                        |               Поток                |
| Удалить тему                       |   112    | Тема удалена                                                               |               Поток                |
| Обновление прав доступа приложения |   121    | Права доступа были обновлены для команды                                   |         Разрешение команды         |
| Создать Автомодерацию              |   140    | Создано автоматическое правило модерации                                   |  Автоматическое правило модерации  |
| Обновление Автомодератора          |   141    | Правило автомодерации обновлено                                            |  Автоматическое правило модерации  |
| АвтомодерацияУдалить               |   142    | Правило автомодерации было удалено                                         |  Автоматическое правило модерации  |
| АвтомодераBlockMessage             |   143    | Сообщение было заблокировано автомодератором                               |                                    |
| Автомодерация канала               |   144    | Сообщение было помечено автомодератором                                    |                                    |
| Автомодерация отключена            |   145    | Участник был просрочен автомодерацией                                      |                                    |


## Пример(ы)

Это вернет ваши последние баны (которые вошли в журнал аудита):

```javascript
bot.command({
    name: 'getAuditLogs',
    code: `
  $getAuditLogs[$guildID;$authorID;5;$authorID;12;{executor.username}: {target.id} - {action}]
  `
});
```