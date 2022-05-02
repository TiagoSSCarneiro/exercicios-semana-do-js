// const randomNumbers = [36, 99, 37, 63]

// const numeroMaioresQue37 =  randomNumbers.filter(item => item > 37)

// console.log(numeroMaioresQue37)

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
  ]

  const premiumUser = users.filter(user => user.premium )
  console.log (premiumUser)