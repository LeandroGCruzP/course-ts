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
// Inferred type (dbUser, sentUser) must respect the content of the type identity (type User)
const dbUser = { username: 'Leandro', password: '123456' }
const sentUser = { username: 'Leandro', password: '123456', permissions: '' }
const loggedIn = verifyUser(dbUser, sentUser)

console.log('Logged In:', loggedIn)
