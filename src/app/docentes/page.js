'use client'
import 'flowbite';
import Home_admin from '../../../components/home_admin';
import Accordion2 from '../../../components/accordion/accordion2';
import Accordion_calificaciones from '../../../components/accordion/accordion_calificaciones';

export default function Home() {
  return (
    <>
      <Home_admin></Home_admin>
      <div className='py-5 px-2 grid grid-cols-1 border  gap-x-2 gap-y-3'>
        <Accordion_calificaciones></Accordion_calificaciones>
        
        
      </div>
    </>
  )
}