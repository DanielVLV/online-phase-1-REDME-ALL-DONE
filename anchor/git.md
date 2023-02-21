# [Содержание](../README.md)
# Работа с гитом
[Про git flow](https://docs.google.com/document/d/1-3uqgKUOGAC5OYvIRQ37CcJ1yepnSWdJysfUZ5aQN58/edit)
## Базовые принципы

### Создание коммитов
- Один коммит - одна фича
- Имя коммита должно отображать изменения в коде
- Имя коммита должно быть лаконичным
- Для более подробного описания можно использовать блок описания коммита

### Работа с ветками
- Одна ветка - одна задача
- Не меняем главную ветку напрямую, все изменения через пулл реквесты
- Имя ветки отражает суть задачи
- Прежде чем пушить изменения надо обновить маин и влить в свою ветку

## Работа с гитом в процессе решения задачи
1. `git checkout -b yourBranchName`
2. Пишем код, который решает задачу
3. Коммитим все свои изменения
4. `git checkout main`
5. `git pull`
6. Возвращаемся в свою ветку `git checkout yourBranchName`
7. `git merge main`
8. Решаем конфликты, если они есть
9. Пушим в репозиторий `git push --set-upstream origin yourBranchName`

## Базовые команды

### Работа с коммитами и удаленным репозиторием

- `git add fileNames` - добавляет файлы для коммита
- `git comit -m 'message'` - коммит добавленные файлы с сообщением
- `git fetch` - запрашивает информацию о ветках с удаленного репозитория
- `git push` - отправляет данные на удаленный репозиторий
- `git pull` - получает данные с удаленного репозитория

### Работа с ветками

- `git checkout name` - переключамся на существующую ветку
- `git checkout -b name` - создаем новую ветку и переключаемся на нее
- `git branch` - получаем список доступных веток
- `git merge name` - запускает процесс слияния двух веток
- `git merge --continue` - продолжает процесс слияния после разрешения мердж конфликтов
- `git merge --abort` - сбрасывает прогресс слияния веток

