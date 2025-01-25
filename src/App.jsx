import React from 'react';
import Hero from './components/Hero';
import Nav from './components/Nav';
const App = ()=>{
return (
  <>
  <div className='relative h-full overflow-y-auto antialiased'>
    <div className='[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] fixed inset-0 bg-fixed bg-cover bg-center'></div>
    <div className='relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto'>
      <Hero />
      <Nav />
    </div>
  </div>
  </>
)
}

export default App;
