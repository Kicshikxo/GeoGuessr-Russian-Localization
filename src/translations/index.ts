import en from './en'
import ru from './ru'

export { en, ru }

export const getNamespacedTranslations = (translations: typeof en | typeof ru, namespaces: string[]) => {
  return namespaces.reduce((acc, namespace) => {
    if (namespace in translations) {
      return { ...acc, ...(translations as Record<string, Record<string, string>>)[namespace] }
    }
    return acc
  }, {} as Record<string, string>)
}
