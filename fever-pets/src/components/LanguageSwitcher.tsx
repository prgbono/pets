import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()

  return (
    <div>
      <button
        className="btn btn-sm btn-outline-primary"
        onClick={() => i18n.changeLanguage('en')}
      >
        English
      </button>
      <button
        className="btn btn-sm btn-outline-primary"
        onClick={() => i18n.changeLanguage('es')}
      >
        Español
      </button>
    </div>
  )
}

export default LanguageSwitcher
