'use client'
import 'flowbite';
import Home_admin from '../../../components/home_admin';
import Accordion2 from '../../../components/accordion/accordion2';
import Accordion_calificaciones_alumno from '../../../components/accordion/accordion_calificaciones_alumno';

export default function Home() {
  return (
    <>
      <Home_admin></Home_admin>
      <div className='py-5 px-2 grid grid-cols-1 border  gap-x-2 gap-y-3'>
        <Accordion_calificaciones_alumno></Accordion_calificaciones_alumno>
        
        
      </div>
    </>
  )
}