import { getNamespacedTranslations, ru } from './translations'
import { NextInstance } from './types'

class GeoguessrTranslator {
  private shallowRouteUpdate: boolean = false
  constructor(private next: NextInstance) {}

  private getCurrentComponent() {
    return this.next.router.components[this.next.router.pathname]
  }

  public subscribeToRouteChange() {
    this.next.router.events.on('routeChangeComplete', this.updateTranslationProps.bind(this))
  }
  public updateTranslationProps() {
    if (this.shallowRouteUpdate) {
      this.shallowRouteUpdate = false
      return
    }

    const component = this.getCurrentComponent()
    if (!component) return

    const { translationProps } = component.props
    const translations = getNamespacedTranslations(ru, translationProps.namespaces)

    Object.assign(translationProps.translations, translations)

    this.next.router.replace(this.next.router.asPath, undefined, { shallow: true })
    this.shallowRouteUpdate = true
  }
}

window.addEventListener('load', () => {
  const geoguessrEnvironment: string | undefined = (window as any)?.__GEOGUESSR_ENVIRONMENT__
  if (!geoguessrEnvironment) {
    console.error('GeoGuessr Russian Localization: GeoGuessr environment not found')
    return
  }

  const next: NextInstance | undefined = (window as any)?.next
  if (!next) {
    console.error('GeoGuessr Russian Localization: Next instance not found')
    return
  }

  const geoguessrTranslator = new GeoguessrTranslator(next)

  geoguessrTranslator.updateTranslationProps()
  geoguessrTranslator.subscribeToRouteChange()

  console.log('GeoGuessr Russian Localization: Loaded')
})
