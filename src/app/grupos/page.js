'use client'
import 'flowbite';
import Accordion from '../../../components/accordion/accordion';
import Home_admin from '../../../components/home_admin';

export default function Grupos() {
    
  return (
    <>  
        <Home_admin></Home_admin>
        <div className="py-5 px-5 grid grid-cols-2 gap-x-2 gap-y-3 grid-flow-row-dense">
            <div className="bg-white rounded-lg shadow-xl min-h-[400px] row-span-5"><Accordion></Accordion></div>
            <div className="bg-white rounded-lg shadow-xl min-h-[400px] row-span-5">
                <div className="py-5 px-5 grid grid-cols-2 gap-x-2 gap-y-3 grid-flow-row-dense">
                    <div className="bg-white shadow-xl rounded-lg  min-h-[400px] row-span-5">
                        <center><h2 className='font-bold py-3'>Alumnos Pendientes</h2></center>
                    </div>
                    <div className="bg-white shadow-xl rounded-lg  min-h-[400px] row-span-5">
                        <center><h2 className='font-bold py-3'>Alumnos Inactivos</h2></center>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}