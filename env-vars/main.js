console.log(import.meta.env)

console.log(`Server is runnning in ${import.meta.env.MODE} mode`)

if (import.meta.env.DEV) {
  console.log('This is DEV server')
}