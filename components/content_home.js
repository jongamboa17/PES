import { Fragment, useState } from "react"
import Modal from "../components/modal_usuario"
import Nuevo_usuario from "../components/forms/nuevo_usuario"
import Nueva_asignatura from "../components/forms/nueva_asignatura"
export default function Content_home (){
    const[showModal, setShowModal]=useState(false);
    const[showModal2, setShowModal2]=useState(false);
    return (
        <>
        <div className="p-10 text-center">
            <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
                    className=" text-white bg-blue-700 hover:bg-blue-800 
                                focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5 " 
                                onClick={()=>setShowModal(true)}>
                Nuevo Usuario
            </button>
            <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
                    className=" text-white bg-blue-700 hover:bg-blue-800 
                                focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5 " 
                                onClick={()=>setShowModal2(true)}>
                Nueva Asignatura
            </button>
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
