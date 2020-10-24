export const getPeopleFromAPI = async (amount) => {
  const response = await fetch(`https://api.randomuser.me/?results=${amount || '10'}`)
    const data = await response.json()
    return data.results.map(person => {
      const { picture: { thumbnail }, name: { first, last } } = person
      const { dob: { age }, location: { city } } = person
      return { photoURL: thumbnail, firstName: first, lastName: last, age, city }
  })
}