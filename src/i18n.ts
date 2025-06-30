import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/locales/en.json';
import ru from './assets/locales/ru.json';

// Функция для форматирования чисел
const numberFormatter = (value: any, format?: string, lng?: string) => {
  if (typeof value === 'number') {
    return value.toFixed(1); // Форматируем с одним знаком после запятой
  }
  return value;
    };

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    lng: 'ru', // Язык по умолчанию
    fallbackLng: 'en', // Резервный язык
    interpolation: {
      escapeValue: false, // React уже экранирует значения
      format: numberFormatter, // Добавляем кастомный форматтер
    },
    react: {
      useSuspense: false, // Отключаем Suspense для старых версий React
    },
    debug: true, // Включаем режим отладки для диагностики
  });

// Проверяем загрузку ресурсов
i18n.on('loaded', (loaded) => {
  console.log('i18next loaded resources:', i18n.getResourceBundle('en', 'translation'));
});

export default i18n;