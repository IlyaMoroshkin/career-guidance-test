# Career Guidance Test

Веб-приложение для профориентационного тестирования, построенное на React + Vite. Приложение упаковано в Docker-образ для простого развертывания.

## 🚀 Быстрый старт с Docker

### Предварительные требования
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows/macOS) или Docker Engine (Linux)
- Для Windows: WSL 2 (рекомендуется)

### Запуск приложения

#### 1. Собрать образ

docker build -t career-guidance-test .

#### 2. Запустить контейнер
bash
docker run -d -p 8080:80 --name career-guidance-app career-guidance-test
#### 3. Открыть в браузере
text
http://localhost:8080
Другие варианты запуска
На другом порту
bash
# На порту 3000
docker run -d -p 3000:80 --name career-app career-guidance-test

# На порту 80 (требует права администратора)
docker run -d -p 80:80 --name career-app career-guidance-test
С автоматическим удалением (для тестирования)
bash
docker run --rm -p 8080:80 career-guidance-test
📦 Работа с образом
Сохранить образ в файл
bash
docker save -o career-guidance-test.tar career-guidance-test:latest
Загрузить образ из файла
bash
docker load -i career-guidance-test.tar
Просмотр образов
bash
docker images | findstr career  # Windows
docker images | grep career      # Linux/macOS
🛠 Управление контейнером
bash
# Просмотр запущенных контейнеров
docker ps

# Просмотр всех контейнеров (включая остановленные)
docker ps -a

# Просмотр логов
docker logs career-guidance-app

# Просмотр логов в реальном времени
docker logs -f career-guidance-app

# Остановка контейнера
docker stop career-guidance-app

# Запуск остановленного контейнера
docker start career-guidance-app

# Перезапуск контейнера
docker restart career-guidance-app

# Удаление контейнера
docker rm career-guidance-app

# Удаление контейнера принудительно (если запущен)
docker rm -f career-guidance-app

# Удаление образа
docker rmi career-guidance-test:latest
🔧 Локальная разработка (без Docker)
Установка зависимостей
bash
npm install
Запуск dev сервера
bash
npm run dev
Приложение будет доступно: http://localhost:5173

Сборка для продакшена
bash
npm run build
Собранные файлы появятся в папке dist/

Просмотр собранной версии
bash
npm run preview
🐳 Структура Dockerfile
dockerfile
# Этап 1: Сборка приложения
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Этап 2: Запуск с nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
Особенности Dockerfile:
Multi-stage build — уменьшает размер образа

Node.js 20 — современная LTS версия

nginx:alpine — легкий и быстрый веб-сервер

Только статические файлы — в финальном образе нет Node.js

📁 Структура проекта
text
career-guidance-test/
├── .dockerignore          # Файлы, исключаемые из Docker-образа
├── .gitignore             # Файлы, исключаемые из Git
├── Dockerfile             # Инструкция для сборки образа
├── README.md              # Документация
├── index.html             # Главная страница
├── package.json           # Зависимости и скрипты
├── package-lock.json      # Точные версии зависимостей
├── vite.config.js         # Конфигурация Vite
├── eslint.config.js       # Конфигурация ESLint
├── public/                # Статические файлы
├── src/                   # Исходный код React-приложения
└── node_modules/          # Зависимости (игнорируется Git)
🔍 Диагностика проблем
Контейнер не запускается
bash
# Посмотреть логи
docker logs career-guidance-app

# Проверить статус
docker ps -a
Порт уже занят
text
Error: port is already allocated
Решение: используйте другой порт

bash
docker run -d -p 8081:80 --name career-app career-guidance-test
Приложение недоступно
bash
# Проверить, что контейнер работает
docker ps

# Проверить проброс порта
docker port career-guidance-app
# Должно показать: 80/tcp -> 0.0.0.0:8080

# Проверить, что nginx отдает файлы
docker exec career-guidance-app ls -la /usr/share/nginx/html/
# Должны увидеть index.html и папку assets/
Контейнер останавливается сразу
bash
# Запустить в интерактивном режиме для просмотра ошибки
docker run --rm -it career-guidance-test
📊 Размеры образа
bash
# Просмотр размера образа
docker images | findstr career  # Windows
docker images | grep career      # Linux/macOS
Ожидаемый размер: ~50-100 МБ (зависит от приложения)

🔄 Обновление приложения
После изменений в коде:

bash
# 1. Остановить и удалить старый контейнер
docker stop career-guidance-app
docker rm career-guidance-app

# 2. Пересобрать образ
docker build -t career-guidance-test .

# 3. Запустить новый контейнер
docker run -d -p 8080:80 --name career-guidance-app career-guidance-test
📝 Полезные команды
bash
# Очистка неиспользуемых образов и контейнеров
docker system prune

# Очистка всего неиспользуемого (образы, контейнеры, сети, кэш)
docker system prune -a

# Просмотр использованного места
docker system df

# Просмотр детальной информации об образе
docker inspect career-guidance-test

# Просмотр истории сборки
docker history career-guidance-test

# Зайти внутрь работающего контейнера
docker exec -it career-guidance-app sh
🚢 Деплой на сервер
На удаленном Linux сервере
bash
# 1. Скопировать файлы на сервер
scp -r . user@server:/opt/career-guidance-test/

# 2. Подключиться по SSH
ssh user@server

# 3. Перейти в папку и собрать образ
cd /opt/career-guidance-test
docker build -t career-guidance-test .

# 4. Запустить контейнер
docker run -d -p 80:80 --restart unless-stopped --name career-app career-guidance-test
Использование Docker Hub
bash
# Авторизация
docker login

# Создать тег
docker tag career-guidance-test username/career-guidance-test:latest

# Загрузить на Docker Hub
docker push username/career-guidance-test:latest

# На сервере скачать и запустить
docker pull username/career-guidance-test:latest
docker run -d -p 80:80 --restart unless-stopped username/career-guidance-test:latest
📄 Лицензия
MIT License

🤝 Поддержка
При возникновении проблем проверьте:

Docker Desktop запущен

Порт не занят другим приложением

Контейнер успешно собрался (docker images)

Логи контейнера (docker logs)

Приложение работает в продакшен-режиме через nginx. Для разработки используйте npm run dev.
