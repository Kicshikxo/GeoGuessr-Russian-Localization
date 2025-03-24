import en from './en'
import ru from './ru'

export { en, ru }

export const getNamespacedTranslations = (translation: typeof en | typeof ru, namespaces: string[]) => {
  return namespaces.reduce((acc, namespace) => {
    if (namespace in translation) {
      return { ...acc, ...(translation as Record<string, Record<string, string>>)[namespace] }
    }
    return acc
  }, {} as Record<string, string>)
}
