import { getNamespacedTranslations, ru } from './translations'
import { NextInstance } from './types'

export class GeoguessrTranslator {
  constructor(private next: NextInstance) {}

  private getCurrentComponent() {
    return this.next.router.components[this.next.router.pathname]
  }

  public subscribeToRouteChange() {
    this.next.router.events.on('routeChangeComplete', this.updateTranslationProps.bind(this))
  }
  public updateTranslationProps() {
    if (this.next.router._shallow) {
      return
    }

    const component = this.getCurrentComponent()
    if (!component) return

    const { translationProps } = component.props
    const translations = getNamespacedTranslations(ru, translationProps.namespaces)

    Object.assign(translationProps.translations, translations)

    this.next.router.replace(this.next.router.asPath, undefined, { shallow: true })
  }
}

const initializeGeoguessrTranslator = () => {
  const geoguessrEnvironment = window.__GEOGUESSR_ENVIRONMENT__
  if (!geoguessrEnvironment) {
    console.error('GeoGuessr Russian Localization: GeoGuessr environment not found')
    return
  }

  const { next } = window
  if (!next) {
    console.error('GeoGuessr Russian Localization: Next instance not found')
    return
  }

  const geoguessrTranslator = new GeoguessrTranslator(next)

  geoguessrTranslator.updateTranslationProps()
  geoguessrTranslator.subscribeToRouteChange()

  window.__GEOGUESSR_TRANSLATOR__ = geoguessrTranslator

  console.log('GeoGuessr Russian Localization: Initialized')
}

if (document.readyState === 'complete') {
  initializeGeoguessrTranslator()
} else {
  window.addEventListener('load', initializeGeoguessrTranslator)
}
