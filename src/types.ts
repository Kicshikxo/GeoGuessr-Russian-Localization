export interface NextRouter {
  pathname: string
  asPath: string
  components: Record<string, { props: { translationProps: { namespaces: string[]; translations: Record<string, string> } } }>
  events: { on: (event: string, callback: () => void) => void }
  replace: (url: string, as?: string, options?: { shallow?: boolean }) => void
}

export interface NextInstance {
  router: NextRouter
}
