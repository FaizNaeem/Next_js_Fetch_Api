import Image from 'next/image'
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
export default async function Home() {
  const hello = await getData()
  console.log(hello);
  return (
<>
<h1 className='text-center text-3xl bg-sky-600 text-white p-3 underline'>
  Users
  </h1>
  {hello.map((data)=>{
return (
  <>
  <h1 className='text-center text-3xl bg-slate-950 text-white p-3'>
   Name: {data.name}
  </h1>
    <h1 className='text-center text-3xl border border-blue-900 p-2 rounded bg-slate-400'>
      Email:
    {data.email}
  </h1>
  </>
)
  })}

</>
  )
}