# Мультимедиа

### Сборка проекта

- Выполнить `npm i`.
- Выполнить `gulp` для сборки проекта.
- Проект будет собран в папку `docs`. 
- Откройте файл `docs/video.html` в браузере.

Предварительно запустить тестовые потоки:

```
git clone https://github.com/mad-gooze/shri-2018-2-multimedia-homework.git
cd shri-2018-2-multimedia-homework
npm i
npm start
```

### Что сделано

Страница в интерфейсе умного дома "Видеонаблюдение": 
- На странице находится сетка из 4-ёх видео-превью. Клик по превью разворачивает соответствующее видео на всю страницу.
- Анимация разворачивания видео сделана по аналогии с маковским приложением Photo Booth.
- Когда видео раскрыто на всю страницу, в интерфейсе предусмотрена кнопка "Все камеры", которая позволяет вернуться назад.

Фильтры для видео:
- На экран просмотра видео добавлена возможность регулировать его яркость и контрастность.

Анализатор звука:
- Реализован анализатор громкости звука в потоке из открытой камеры (в виде столбчатой диаграммы).

Отлаживались на десктопе в Chrome и на Android.
