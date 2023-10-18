import { Fragment, useState } from "react"
import 'flowbite';
import Modal from "../components/modal_usuario"
import Nuevo_usuario from "../components/forms/nuevo_usuario"
import Nueva_asignatura from "../components/forms/nueva_asignatura"
import Image from 'next/image'
export default function Content_home (){
    const[showModal, setShowModal]=useState(false);
    const[showModal2, setShowModal2]=useState(false);
    return (
        <>
        

        <div className="py-5 px-5 grid grid-cols-1 gap-x-2 gap-y-3 grid-flow-row-dense ">
            {/*div de los botones*/}
            <div className="rounded-lg min-h-[50px] row-span-2">
                <div className="p-1 text-center">
                    <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
                            className=" px-5 sm:p-5 text-white bg-blue-700 hover:bg-blue-800 
                                        focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5 " 
                                        onClick={()=>setShowModal(true)}>
                        Nuevo Usuario
                    </button>
                    <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
                            className=" px-5 sm:p-5 text-white bg-blue-700 hover:bg-blue-800 
                                        focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5 " 
                                        onClick={()=>setShowModal2(true)}>
                        Nueva Asignatura
                    </button>
                </div>    
            </div> 
            {/*div del centro*/}
            <div className="py-5 px-5 grid grid-cols-2 gap-x-2 gap-y-3 grid-flow-row-dense ">
                <div className="bg-slate-100 rounded-lg shadow-xl min-h-[400px] row-span-5">                    
                    {/*tabla alumnos activos no asignados*/}
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <center><h2 className="font-bold py-3">Alumnos Por Asignar</h2></center>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            
                                            <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Nombre
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Contacto
                                    </th>
                                    
                                    <th scope="col" className="px-6 py-3">
                                        
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            
                                            <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                        <Image fill={true} className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image "></Image>
                                        <div className="pl-3">
                                            <div className="text-base font-semibold">Neil Sims</div>
                                            <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                        </div>  
                                    </th>
                                    <td className="px-6 py-4">
                                        88888888
                                    </td>
                                    
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Asignar Alumno</a>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div> 
                <div className="bg-slate-100 rounded-lg shadow-xl min-h-[400px] row-span-5">
                    
                </div>
            </div>
            {/*div de las estadisticas de abajo*/}
            <div class="sm:hidden">
                
            </div>
            <div className="py-5 px-5 grid grid-cols-4 gap-x-2 gap-y-3 grid-flow-row-dense">
                
                    <div class="bg-blue-700 rounded-md flex flex-col items-center justify-center py-2">
                        <dt class="mb-2 text-3xl text-white font-extrabold ">73</dt>
                        <dd class="text-white dark:text-gray-400">Usuarios Activos</dd>
                    </div>
                    <div class="bg-blue-700 rounded-md flex flex-col items-center justify-center py-2">
                        <dt class="mb-2 text-3xl text-white font-extrabold ">73</dt>
                        <dd class="text-white dark:text-gray-400">Usuarios Inactivos</dd>
                    </div>
                    <div class="bg-blue-700 rounded-md flex flex-col items-center justify-center py-2">
                        <dt class="mb-2 text-3xl text-white font-extrabold ">73</dt>
                        <dd class="text-white dark:text-gray-400">Docentes</dd>
                    </div>
                    <div class="bg-blue-700 rounded-md flex flex-col items-center justify-center py-2">
                        <dt class="mb-2 text-3xl text-white font-extrabold ">73</dt>
                        <dd class="text-white dark:text-gray-400">Asignaturas</dd>
                    </div>
            </div>
        </div>
        
        


        <Modal isVisible={showModal} onClose={()=>setShowModal(false)}>
            <Nuevo_usuario></Nuevo_usuario>
        </Modal>
        <Modal isVisible={showModal2} onClose={()=>setShowModal2(false)}>
            <Nueva_asignatura></Nueva_asignatura>
        </Modal>
        </>
    )
}




//
