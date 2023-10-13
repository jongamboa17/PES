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
            <div className="py-5 px-5 grid grid-cols-2 gap-x-2 gap-y-3 grid-flow-row-dense ">
                <div className=" rounded-lg shadow-xl min-h-[50px] row-span-5">                    
                    

    
                </div> 
                <div className=" rounded-lg shadow-xl min-h-[50px] row-span-5"></div>
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
