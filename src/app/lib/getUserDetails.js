export default async function getUserDetail(id) {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users')
    // https://dog.ceo/api/breeds/image/random
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    // console.log(id);
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
   
  }