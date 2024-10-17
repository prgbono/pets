import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()

  return (
    <div>
      {/* TODO: Componetise these buttons  */}
      <button
        className="px-4 py-2 text-sm text-blue-500 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white focus:outline-none"
        onClick={() => i18n.changeLanguage('en')}
      >
        English
      </button>
      <button
        className="px-4 py-2 text-sm text-blue-500 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white focus:outline-none"
        onClick={() => i18n.changeLanguage('es')}
      >
        Español
      </button>
    </div>
  )
}

export default LanguageSwitcher
