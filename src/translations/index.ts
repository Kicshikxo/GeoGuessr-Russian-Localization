import achievements from './achievements'
import avatar from './avatar'
import career from './career'
import components from './components'
import country from './country'
import duels from './duels'
import game from './game'
import landingPage from './landing-page'
import layout from './layout'
import lobby from './lobby'
import mapMaker from './map-maker'
import multiplayer from './multiplayer'
import party from './party'
import profile from './profile'
import quiz from './quiz'
import referralProgram from './referral-program'
import search from './search'
import shop from './shop'
import start from './start'
import startpage from './startpage'

export const translations: Record<string, Record<string, string>> = { achievements, avatar, career, components, country, duels, game, landingPage, layout, lobby, mapMaker, multiplayer, party, profile, quiz, referralProgram, search, shop, start, startpage }

export const getNamespacedTranslations = (namespaces: string[]) => {
  return namespaces.reduce((acc, namespace) => {
    if (translations[namespace]) {
      return { ...acc, ...translations[namespace] }
    }
    return acc
  }, {})
}
