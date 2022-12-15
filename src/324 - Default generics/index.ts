// Record
export const objectA: Record<string, string | number> = {
  name: 'Leandro',
  lastName: 'Cruz',
  age: 25,
}

type PersonProtocol = {
  name?: string
  lastName?: string
  age?: number
}

// Required
type PersonRequired = Required<PersonProtocol>
// Partial
type PersonPartial = Partial<PersonRequired>
// Readonly
type PersonReadOnly = Readonly<PersonRequired>
// Pick
type PersonPick = Pick<PersonRequired, 'name' | 'lastName'>
// Omit
type PersonOmit = Omit<PersonRequired, 'age'>

type ABC = 'A' | 'B' | 'C'
type CDE = 'C' | 'D' | 'E'

// Exclude & Extract
type TypeExclude = Exclude<ABC, CDE>
type TypeExtract = Extract<ABC, CDE>

// ********** Example **********
type AccountMongo = {
  _id: string
  name: string
  lastName: string
  age: number
}

const accountMongo: AccountMongo = {
  _id: 'as76da67sd5as7d7',
  name: 'Leandro',
  lastName: 'Cruz',
  age: 25,
}

type AccountAPI = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string
}

// type AccountAPI2 = Pick<AccountMongo, 'name' | 'lastName' | 'age'> & {
//   id: string
// }

// type AccountAPI3 = Omit<AccountMongo, '_id'> & {
//   id: string
// }

function mapAccount(accountMongo: AccountMongo): AccountAPI {
  const { _id, ...accountData } = accountMongo

  return { ...accountData, id: _id }
}

const accountApi = mapAccount(accountMongo)
console.log(accountApi)

// Exports
export type {
  PersonPartial,
  PersonReadOnly,
  PersonPick,
  PersonOmit,
  TypeExclude,
  TypeExtract,
}
