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

type TRandomDigits = 4 | 5 | 6 | 7 | 8 | 9 | 10
type RandomIdProps = (digit: TRandomDigits) => number

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomId: RandomIdProps = (digit) => {
  if (digit === 4) return randomIntFromInterval(1000, 9999)
  else if (digit === 5) return randomIntFromInterval(10000, 99999)
  else if (digit === 6) return randomIntFromInterval(100000, 999999)
  else if (digit === 7) return randomIntFromInterval(1000000, 9999999)
  else if (digit === 8) return randomIntFromInterval(10000000, 99999999)
  else if (digit === 9) return randomIntFromInterval(100000000, 999999999)
  else if (digit === 10) return randomIntFromInterval(1000000000, 9999999999)
  else return randomIntFromInterval(10000000, 99999999)
}
