export function strengthPassword(value: string) {
  const numbers = /([0-9])/
  const letters = /([a-zA-Z])/
  const specialCharacters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/

  const validationKeys = [
    value.match(numbers),
    value.match(letters),
    value.match(specialCharacters)
  ]

  const validationValue = validationKeys.every(Boolean)

  if (value.length < 6) return 'WEAK'
  else return validationValue ? 'STRONG' : 'MIDDLE'
}

export function isEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export function isPassword(pass: string) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/
  return re.test(String(pass))
}
