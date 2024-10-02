import HttpBackend from 'i18next-http-backend'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
