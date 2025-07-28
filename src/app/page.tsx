import React from 'react'
import Main from '@/components/main/main'
import Nav from '@/components/nav/nav'

const Home = () => {
  return (
    <section className="grid-cols-[200px_1fr] grid pt-2 px-2 gap-x-2.5">
      <Nav />
      <Main />
    </section>
  );
}

export default Home
