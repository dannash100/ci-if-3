import { Observed, Trigger } from '../decorators/Observed'
import { NonCaptureGroup, anyOfWords } from '../utils/regexGenerators'
import 'reflect-metadata'

export enum MatchType {
  Misfit = 'misfit', // Get red key given a room with blue key
  Partial = 'partial', // Get rusty key given a room with blue rusty key
  Exact = 'exact', // Get rusty red key given a room with rusty red key
}

enum MatcherTriggerId {
  AdjectiveChange = 'adjectiveChange',
  NounChange = 'nounChange',
}
export class Matcher {
  @Observed(MatcherTriggerId.NounChange)
  public declare noun: string[]

  @Observed(MatcherTriggerId.AdjectiveChange)
  public declare adjectives: string[]

  #regex: RegExp
  #groups: {
    adjectives?: NonCaptureGroup
    noun?: NonCaptureGroup
    exact?: string
  } = {}

  constructor({ noun, adjectives = [] }) {
    this.noun = Array.isArray(noun) ? noun : [noun]
    this.adjectives = adjectives
  }

  @Trigger(MatcherTriggerId.AdjectiveChange)
  onAdjectiveChange() {
    this.#groups.adjectives = anyOfWords(this.adjectives)
    this.#groups.exact = this.adjectives.reduce(
      (group, adj) => `${group}(?=.*?\\b${adj}\\b)`,
      ''
    )
    this.#generateRegex()
  }

  @Trigger(MatcherTriggerId.NounChange)
  onNounChange() {
    this.#groups.noun = anyOfWords(this.noun)
    this.#generateRegex()
  }

  #generateRegex() {
    const { adjectives, noun, exact } = this.#groups
    this.#regex = new RegExp(
      this.adjectives?.length
        ? `^(?:(?<${MatchType.Exact}>${exact}(?!.*?\\b(?!(?:${adjectives}|${noun}))\\w+).+${noun})|(?<${MatchType.Partial}>(?!.*?\\b(?!(?:${adjectives}|${noun}))\\w+)(?:.*?\\s${noun}|${noun}))|(?<${MatchType.Misfit}>.*?(?!${adjectives}).*\\s${noun}$))`
        : `^(?<${MatchType.Exact}>${noun})$`
    )
  }

  addAdjective(adjective: string) {
    this.adjectives.push(adjective)
  }

  removeAdjective(adjective: string) {
    this.adjectives = this.adjectives.filter((a) => a !== adjective)
  }

  addNoun(noun: string) {
    this.noun.push(noun)
  }

  removeNoun(noun: string) {
    this.noun = this.noun.filter((n) => n !== noun)
  }

  setAdjectives(adjectives: string[]) {
    this.adjectives = adjectives
  }

  setNoun(noun: string[] | string) {
    this.noun = Array.isArray(noun) ? noun : [noun]
  }

  match(str: string): false | MatchType {
    const matches = str.match(this.#regex)
    if (!matches?.groups) return false
    const { exact, partial, misfit } = matches.groups
    if (misfit) return MatchType.Misfit
    if (exact) return MatchType.Exact
    if (partial) return MatchType.Partial
  }
}
