import { GeoguessrTranslator } from './inject'

declare global {
  interface Window {
    __GEOGUESSR_ENVIRONMENT__?: string
    __GEOGUESSR_TRANSLATOR__?: GeoguessrTranslator
    next?: NextInstance
  }
}

export interface NextInstance {
  version: string
  router: NextRouter
}

export interface NextRouter {
  pathname: string
  asPath: string
  components: Record<string, { props: { translationProps: { namespaces: string[]; translations: Record<string, string> } } }>
  events: { on: (event: string, callback: () => void) => void }
  replace: (url: string, as?: string, options?: { shallow?: boolean }) => void
  _shallow?: boolean
}
