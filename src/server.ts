interface IUser {
  birthYear: number
}

function calculateAgeOfUser(user: IUser) {
  return new Date().getFullYear() - user.birthYear
}

calculateAgeOfUser({
  birthYear: 1994
})