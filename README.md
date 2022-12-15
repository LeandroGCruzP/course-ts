# TypeScript Course

<details>
<summary><b>Expand Table of Contents</b></summary>

- [Class 270: Type annotation](#class-270-type-annotation)
- [Class 271: Type any](#class-271-type-any)
- [Class 272: Type void](#class-272-type-void)
- [Class 273: Type object](#class-273-type-object)
- [Class 274: Type array](#class-274-type-array)
- [Class 275: Type tuple](#class-275-type-tuple)
- [Class 276: Type null and undefined](#class-276-type-null-and-undefined)
- [Class 277: Type never](#class-277-type-never)
- [Class 278: Type enum](#class-278-type-enum)
- [Class 279: Type unknown](#class-279-type-unknown)
- [Class 280: Union types](#class-280-union-types)
- [Class 281: Literal types](#class-281-literal-types)
- [Class 282: Type alias](#class-282-type-alias)
- [Class 283: Intersection types](#class-283-intersection-types)
- [Class 284: Function as type](#class-284-function-as-type)
- [Class 285: Structural type system](#class-285-structural-type-system)
- [Class 286: Type assertions](#class-286-type-assertions)
- [Class 311: Type guard](#class-311-type-guard)
- [Class 312: Typeof and Keyof](#class-312-typeof-and-keyof)
- [Class 313: Keys like type](#class-313-keys-like-type)
- [Class 315: Overload function](#class-315-overload-function)
- [Class 316: Optional chaining and Null coalescence operator](#class-316-optional-chaining-and-null-coalescence-operator)
- [Class 317: Generics](#class-317-generics)
- [Class 318: Array and promises is generic](#class-318-array-and-promises-is-generic)
- [Class 319: Generics with interface and type alias](#class-319-generics-with-interface-and-type-alias)
- [Class 320: Restriction generic](#class-320-restriction-generic)
- [Class 322: Generics with intersection](#class-322-generics-with-intersection)
- [Class 323: Type predicate](#class-323-type-predicate)
- [Class 324: Default generics](#class-324-default-generics)
</details>

---

## Class 270: Type annotation
### *Basic types*
| Type     | Value
|:---------|:------
|***string***  | '' "" ``
|***number***  | 10, 1.57, -5.55, 0xf00d (hexadecimal), 0b1010 (binary), 0o7744 (octal)
|***boolean*** | true or false
|***symbol***  | symbol
|***bigint***  | bigint

> ℹ️ Type inference occurs here
```ts
let name: string = 'Leandro'
let age: number = 25
let adult: boolean = true
let symbol: symbol = Symbol('any-symbol')
let big: bigint = 10n
```

### *Array*
```ts
let arrayOfNumbers: Array<number> = [1, 2, 3]
let arrayOfNumbers2: number[] = [1, 2, 3]
let arrayOfStrings: Array<string> = ['a', 'b']
let arrayOfStrings2: string[] = ['a', 'b']
```

### *Object*
```ts
let person: {name: string, age: number, adult?: boolean} = {
    name: 'Alexandra',
    age: 23
}
```

### *Function*
```ts
function sum(x: number, y: number): number {
    return x + y
}

const sum2: (x:number, y:number) => number = (x, y) => x + y
```

---

## Class 271: Type any
> ⚠️ Use any as a last resort

| Type  | Value
|:------|:------
|***any***  | accept any values

```ts
function showMessage(msg: any) {
    return msg
}

console.log(showMessage([1, 2, 3]))
console.log(showMessage('Hi'))
console.log(showMessage(1))
```

---

## Class 272: Type void
| Type  | Return
|:------|:------
|***void***  | without return

```ts
function withoutReturn(...args: string[]): void {
    console.log(args.join(' '))
}

withoutReturn('Leandro', 'Cruz')
```

> *Other example*
```ts
const person = {
    name: 'Alexandra',
    lastName: 'Laroca',

    displayName(): void {
        console.log(this.name + ' ' + this.lastName)
    }
}

person.displayName()
```

---

## Class 273: Type object
> ℹ️ Object does not have autocomplete
```ts
const ObjectA: Record<string, unknown> = {
  keyA: 'value A',
  keyB: 'value B',
}

ObjectA.keyA = 'other value A'
ObjectA.keyC = 'new value'

console.log('ObjectA', ObjectA)
```

> ℹ️ Object with autocomplete
```ts
const ObjectB: {
  readonly keyA: string
  keyB: string
  [key: string]: unknown
} = {
  keyA: 'value A',
  keyB: 'value B',
}

// ObjectB.keyA = 'other value' // ! ERROR: readonly
ObjectB.keyB = 'other value B'
ObjectB.keyC = 'new value'

console.log('ObjectB', ObjectB)
```

| Prefix    | Description
|:----------|:-----------
|***readonly*** | Does not allow changing the value of an object or array

---

## Class 274: Type array
```ts
function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1)
}

console.log(multiplyArgs(1, 2, 3))
```

> *Other example*
```ts
function concatenateStrings(...args: string[]): string {
  return args.reduce((acc, value) => acc + ' ' + value)
}

console.log(concatenateStrings('Leandro', 'Cruz'))
```

> *Other example*
```ts
function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase())
}

console.log(toUpperCase('a', 'b', 'c'))
```

### *Array with readonly*
```ts
const fullName1: readonly string[] = ['Alexandra', 'Laroca']
const fullName2: ReadonlyArray<string> = ['Alexandra', 'Laroca']

// fullName1[0] = 'Leandro' // ! ERROR: readonly
// fullName2[1] = 'Cruz' // ! ERROR: readonly

console.log(fullName1)
console.log(fullName2)
```

---

## Class 275: Type tuple
```ts
const clientData1: [number, string] = [1, 'Alexandra'] 👈

clientData1[0] = 100

console.log(clientData1)
```
> *Other example*: Immutable tuple
```ts
const clientData2: readonly [number, string, string] = [2, 'Alexandra', 'Laroca'] 👈

// clientData1[0] = 100 // ! ERROR: readonly
// clientData1.pop() // ! ERROR: readonly
// clientData1.push('Laroca') // ! ERROR: readonly

console.log(clientData2)
```

> *Other example*: Conditional argument
```ts
const clientData3: [number, string, string?] = [3, 'Alexandra']

console.log(clientData3)
```

> *Other example*: Array
```ts
const clientData4: [number, ...string[]] = [3, 'Alexandra', 'Laroca']

console.log(clientData4)
```

---

## Class 276: Type null and undefined
| Type       | Return
|:-----------|:------
|***undefined*** | value not defined
|***null*** | intentional absence of any object value

### *Undefined*
```ts
let x
if (typeof x === 'undefined') x = 10 // Validation

console.log(x * 2)
```

> *Other example*: Function with parameter string or undefined
```ts
function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string
  lastName?: string
} {
  return {
    firstName,
    lastName,
  }
}

console.log(createPerson('Leandro'))
console.log(createPerson('Leandro', 'Cruz'))
```

### *Null*
```ts
function squareOf(x: any) {
  if (typeof x === 'number') return x * x // Validation

  return null
}

const squareOfTwoNumber = squareOf(2)

if (squareOfTwoNumber === null) {
  console.log('Invalid calculation')
} else {
  console.log(squareOfTwoNumber)
}
```

---

## Class 277: Type never
| Type       | Return
|:-----------|:------
|***never*** | never return anything

```ts
function createError(): never {
  throw new Error('Error loading function')
}

createError()
```

---

## Class 278: Type enum
```ts
enum Colors {
  RED,
  BLUE,
  YELLOW,
}

enum Colors {
  GREEN = 'GREEN',
  BROWN = 100,
  GRAY = 200,
}

console.log(Colors)
console.log(Colors.BLUE)
console.log(Colors[0])

function choiceColor(color: Colors): void {
  console.log(Colors[color])
}

choiceColor(Colors.BROWN)
```

---

## Class 279: Type unknown
| Type       | Return
|:-----------|:------
|***unknown*** | accept any values but need verification to use

```ts
let x: unknown

x = 100
x = 'Leandro'
x = 200
const y = 300

// console.log(x + y) // ! Error: verification

if (typeof x === 'number') console.log(x + y)
```

---

## Class 280: Union types
```ts
function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b

  return `${a}${b}`
}

console.log(addOrConcat(10, 20))
console.log(addOrConcat('Leandro', 'Cruz'))
console.log(addOrConcat(10, 'Cruz'))
```

---

## Class 281: Literal types
> *Normal type*: Changing value of let
```ts
let x = 10
x = 0b1010
```

### *Literal types*
```ts
const y = 10
let a: 10 = 10
let b = 10 as const

const person = {
  name: 'Leandro' as const,
  lastName: 'Cruz',
}

// person.name = 'Alexandra' // ! Error: type Alexandra not assignable to type Leandro
```

> *Other example*: Literal type on function
```ts
function selectColor(color: 'Red' | 'Yellow' | 'Blue'): string {
  return color
}

console.log(selectColor('Blue'))
```

---

## Class 282: Type alias
```ts
type Age = number
type ColorRGB = 'Red' | 'Green' | 'Blue'
type ColorCMYK = 'Ciano' | 'Magenta' | 'Yellow' | 'Black'
type FavoriteColor = ColorRGB | ColorCMYK
type Person = {
  name: string
  age: Age
  salary: number
  favoriteColor?: string
}

const person: Person = {
  name: 'Leandro',
  age: 25,
  salary: 10_000, // 10000
}

function setFavoriteColor(person: Person, color: FavoriteColor): Person {
  return { ...person, favoriteColor: color }
}

console.log(setFavoriteColor(person, 'Ciano'))
console.log(person)
```

---

## Class 283: Intersection types
```ts
type WithName = { name: string }
type WithLastName = { lastName: string }
type WithAge = { age: number }
type Person = WithName & WithLastName & WithAge 👈

const person: Person = {
  name: 'Leandro',
  lastName: 'Cruz',
  age: 25,
}

console.log(person)
```

> *Other example*: Result is 'A'
```ts
type AB = 'A' | 'B'
type AC = 'A' | 'C'
type AD = 'A' | 'D'
type Intersection = AB & AC & AD 👈
```

> *Other example*: Using extends of interface
```ts
// Extends with interface

interface Person extends WithName, WithLastName, WithAge {}

const person: Person = {
  name: 'Alexandra',
  lastName: 'Laroca',
  age: 23,
}

console.log(person)

export { person, person2 }
```

---

## Class 284: Function as type
```ts
type MapStringsCallback = (item: string) => string

function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArray: string[] = []

  for (let i = 0; i < array.length; i++) {
    const item = array[i]

    newArray.push(callbackfn(item))
  }

  return newArray
}

const abc = ['a', 'b', 'c']
const abcMapped = mapStrings(abc, (item) => item.toUpperCase())

console.log(abc)
console.log(abcMapped)
```

---

## Class 285: Structural type system
> ⚠️ Inferred type (dbUser, sentUser) must respect the content of the type identity (type User)
```ts
type VerifyUserFn = (user: User, sentValue: User) => boolean
type User = {
  username: string
  password: string
}

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  )
}

const dbUser = { username: 'Leandro', password: '123456' }
const sentUser = { username: 'Leandro', password: '123456', permissions: '' }
const loggedIn = verifyUser(dbUser, sentUser)

console.log('Logged In:', loggedIn)

```

---

## Class 286: Type assertions
> ⚠️ Recommended

> Conditional
```ts
const body1 = document.querySelector('body')
if (body1) body1.style.background = 'red'
```

> Type assertion
```ts
const body3 = document.querySelector('body') as HTMLBodyElement 👈
body3.style.background = 'red'
```

> HTMLElement
```ts
const input = document.querySelector('.input') as HTMLInputElement 👈
input.value = 'Create'
input.focus()
```

> ⚠️ Not Recommended

> Non-null assertion (!)
```ts
const body2 = document.querySelector('body')!
body2.style.background = 'red'
```

> Type assertion
```ts
const body4 = document.querySelector('body') as unknown as number
```

---

## Class 311: Type guard
```ts
export function add(a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b 👈

  return `${a}${b}`
}

console.log(add(1, 2))
console.log(add('a', 'b'))
```

> *Other example*
```ts
type Person = { name: string }
type Animal = { color: string }
type PersonOrAnimal = Person | Animal

function showName(obj: PersonOrAnimal) {
  if ('name' in obj) console.log(obj.name) 👈
}

showName({ name: 'Leandro' })
```

---

## Class 312: Typeof and Keyof
```ts
type ColorsObj = typeof colorsObj
type ColorKeys = keyof ColorsObj

const colorsObj = {
  red: 'vermelho',
  green: 'verde',
  blue: 'azul',
}

function translateColors(color: ColorKeys, colors: ColorsObj): string {
  return colors[color]
}

console.log(translateColors('red', colorsObj))
console.log(translateColors('green', colorsObj))
console.log(translateColors('blue', colorsObj))
```

---

## Class 313: Keys like type
```ts
type Vehicle = {
  brand: string
  year: number
}

type Car = {
  brand: Vehicle['brand'] 👈
  year: Vehicle['year'] 👈
  name: string
}

const car: Car = {
  brand: 'Ford',
  year: 2022,
  name: 'Ford K',
}
```

---

## Class 315: Overload function
> Overload: Function can receive different parameters
```ts
type Adder = {
  (x: number): number
  (x: number, y: number): number
  (...args: number[]): number
}

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0)
  return x + (y || 0)
}

console.log(adder(1))
console.log(adder(1, 2))
console.log(adder(1, 2, 3))
```

---

## Class 316: Optional chaining and Null coalescence operator
```ts
type Doc = {
  title: string
  text: string
  date?: Date
}

const doc: Doc = {
  title: 'My title',
  text: 'My text',
}

// console.log(doc.date.toString()) // ! Throw Error
console.log(doc.date?.toString()) // Optional chaining 👈
console.log(doc.date?.toString() ?? 'No date to show') // Null coalescence operator 👈
console.log(undefined ?? 'No date to show') // Null coalescence operator
console.log(null ?? 'No date to show') // Null coalescence operator

```

## Class 317: Generics
> Using filter of javascript
```ts
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const originalFilterArray = numbers.filter((value) => value < 5)

console.log(originalFilterArray)
```

> Creating custom filter with generics
```ts
type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean

function myFilter<T>(array: T[], callbackFn: FilterCallback<T>): T[] {
  const newArray = []

  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i])) {
      newArray.push(array[i])
    }
  }

  return newArray
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const customFilterArray = myFilter(numbers, (value) => value < 5)

console.log(customFilterArray)
```

## Class 318: Array and promises is generic
> Using inference type on Promise
```ts
const arrayNumbers: Array<number> = [1, 2, 3, 4, 5, 6]

async function promiseAsync() {
  return 1
}

promiseAsync().then((result) => console.log(result + 1))
```

> Creating custom type with generic
```ts
const arrayNumbers: Array<number> = [1, 2, 3, 4, 5, 6]

function customPromise(): Promise<CustomPromise> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}

customPromise().then((result) => console.log(result + 1))
```

## Class 319: Generics with interface and type alias
```ts
interface ProtocolPerson<T, U> { 👈
  name: T
  lastName: T
  age: U
}

// type ProtocolPerson<T, U> = {
//   name: T
//   lastName: T
//   age: U
// }

const student: ProtocolPerson<string, number> = {
  name: 'Leandro',
  lastName: 'Cruz',
  age: 25,
}

console.log(student)
```

```ts
interface ProtocolPerson<T = string, U = number> { 👈
  name: T
  lastName: T
  age: U
}

const student1: ProtocolPerson = {
  name: 'Leandro',
  lastName: 'Cruz',
  age: 25,
}

const student2: ProtocolPerson<string, string> = {
  name: 'Leandro',
  lastName: 'Cruz',
  age: '25',
}

console.log(student1)
console.log(student2)
```

## Class 320: Restriction generic
```ts
type GetKeysFn = <O, K extends keyof O>(obj: O, key: K) => O[K] 👈

const getKeys: GetKeysFn = (obj, key) => obj[key]

const animal = {
  color: 'Black',
  vaccine: ['vaccine 1', 'vaccine 2'],
  age: 8,
}

const vaccines = getKeys(animal, 'vaccine')
const color = getKeys(animal, 'color')
const age = getKeys(animal, 'age')

console.log(vaccines, color, age)

```

## Class 322: Generics with intersection
```ts
export function joinObjects<O, P>(obj1: O, obj2: P): O & P {
  // return { ...obj1, ...obj2 }
  return Object.assign({}, obj1, obj2)
}

const obj1 = { key1: 'value1' }
const obj2 = { key2: 'value2' }
const join = joinObjects(obj1, obj2)

console.log(join)

```

## Class 323: Type predicate
```ts
export function isNumber(value: unknown): value is number { 👈
  return typeof value === 'number'
}

export function sum<T>(...args: T[]): number {
  const functionReturn = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value
    }

    return sum
  }, 0)

  return functionReturn
}

console.log(isNumber(123))
console.log(isNumber('asd'))
console.log(sum(1, 2, 3))
console.log(sum(...[1, 2, 3, 'a', 'b', 'c', 1]))
```

## Class 324: Default generics

Types with generic |
:------------------
Record
Required
Partial
Readonly
Pick
Omit
Exclude
Extract


```ts
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

export type {
  PersonPartial,
  PersonReadOnly,
  PersonPick,
  PersonOmit,
  TypeExclude,
  TypeExtract,
}
```

> Example converting data received by API Mongo to custom type
```ts
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

// type AccountAPI = Pick<AccountMongo, 'name' | 'lastName' | 'age'> & {
//   id: string
// }

// type AccountAPI = Omit<AccountMongo, '_id'> & {
//   id: string
// }

function mapAccount(accountMongo: AccountMongo): AccountAPI {
  const { _id, ...accountData } = accountMongo

  return { ...accountData, id: _id }
}

const accountApi = mapAccount(accountMongo)
console.log(accountApi)
```
