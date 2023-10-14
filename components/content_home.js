import { Fragment, useState } from "react"
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
                <div className="bg-slate-100 rounded-lg shadow-xl min-h-[50px] row-span-5">                    
                    

    
                </div> 
                <div className="bg-slate-100 rounded-lg shadow-xl min-h-[50px] row-span-5"></div>
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
                        <dd class="text-white dark:text-gray-400">Usuarios Activos</dd>
                    </div>
                    <div class="bg-blue-700 rounded-md flex flex-col items-center justify-center py-2">
                        <dt class="mb-2 text-3xl text-white font-extrabold ">73</dt>
                        <dd class="text-white dark:text-gray-400">Usuarios Activos</dd>
                    </div>
                    <div class="bg-blue-700 rounded-md flex flex-col items-center justify-center py-2">
                        <dt class="mb-2 text-3xl text-white font-extrabold ">73</dt>
                        <dd class="text-white dark:text-gray-400">Usuarios Activos</dd>
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
