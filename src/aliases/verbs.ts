import { Verbs } from '../types/words/Verbs'
import { flattenAliases } from './utils'

export const verbs: Aliases<Verbs> = flattenAliases([
  [Verbs.Look, /look(?:\sat)?|examine|inspect|view/],
  [Verbs.Get, /get|take|pick\s?up/],
  [Verbs.Drop, /drop|leave|discard|throw\saway/],
  [Verbs.Go, /(go|move)(?:\sto)?/],
  [Verbs.Put, /put|place/],
  Verbs.Open,
  Verbs.Throw,
  [Verbs.Attack, /attack|hit|fight/],
  [Verbs.Close, /close|shut/],
  [Verbs.Talk, /(?:talk|speak)\sto/],
  Verbs.Steal,
  Verbs.Use,
  Verbs.Combine,
  Verbs.Drink,
  Verbs.Eat,
  Verbs.Climb,
  Verbs.Give,
  [Verbs.Ask, /ask|question/],
  [Verbs.Buy, /buy|purchase/],
  [Verbs.Break, /break|destroy|smash/],
  [Verbs.Cut, /cut|slice|chop/],
  [Verbs.Dig, /dig(?:\sup)?|excavate/],
  [Verbs.Pour, /pour(?:\sout)?|empty/],
  Verbs.Pull,
  Verbs.Push,
  Verbs.Read,
  Verbs.Hide,
  Verbs.Unlock,
  Verbs.Lock,
])
