import button from 'react'
import './style/main.css'
import logoImage from './assets/logo.svg'
import {MagnifyingGlassPlus} from 'phosphor-react'

interface Buttonprops {
  title?: string;
}

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImage} alt=''></img>
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... bg-clip-text'>duo</span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/lol.png'></img>
          <div className='w-full pt-16 pb-4 px-4'>

          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/apx.png'></img>
          <div className='w-full pt-16 pb-4 px-4 bg-gradient-to-r from-indigo-400 via-black-500 to-black-500 ... absolute bottom-20 left-0 right-0'>
            <strong className='font-bold text-zinc-300 block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block' >4 anúncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/cs.png'></img>
          <div className='w-full pt-16 pb-4 px-4 bg-gradient-to-r from-indigo-400 via-black-500 to-black-500 ... absolute bottom-20 left-0 right-0'>
            <strong className='font-bold text-zinc-300 block'>Cs:go</strong>
            <span className='text-zinc-300 text-sm block' >4 anúncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/fortnite.png'></img>
          <div className='w-full pt-16 pb-4 px-4 bg-gradient-to-r from-indigo-400 via-black-500 to-black-500 ... absolute bottom-20 left-0 right-0'>
            <strong className='font-bold text-zinc-300 block'>ForNite</strong>
            <span className='text-zinc-300 text-sm block' >4 anúncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/wow.png'></img>
          <div className='w-full pt-16 pb-4 px-4 bg-gradient-to-r from-indigo-400 via-black-500 to-black-500 ... absolute bottom-20 left-0 right-0'>
            <strong className='font-bold text-zinc-300 block'>Wow</strong>
            <span className='text-zinc-300 text-sm block' >4 anúncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/dota.png'></img>
          <div className='w-full pt-16 pb-4 px-4 bg-gradient-to-r from-indigo-400 via-black-500 to-black-500 ... absolute bottom-20 left-0 right-0'>
            <strong className='font-bold text-zinc-300 block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block' >4 anúncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... self-stretch rounded-lg overflow-hidden mt-4'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='block text-2xl text-white font-black'>Não encontrou seu duo?</strong>
            <span className='block text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-red-600 flex items-center gap-3'><MagnifyingGlassPlus size={24} />Pulicar anúncio</button>
        </div>
      </div>

    </div>

  );
}

function Button(props: Buttonprops) {
  return (<button>{props.title}</button>);
}

export default App;