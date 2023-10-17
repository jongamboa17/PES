'use client'
import 'flowbite';
import Tabla_docentes from '../tablas/tabla_docentes';
export default function Accordion_docentes() {
    
  return (
    <>     
        
        <div id="accordion-collapse" data-accordion="collapse" className='bg-white'>
            
            
        <h2 id="accordion-collapse-heading-20" className='bg-white'>
            <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-20" aria-expanded="true" aria-controls="accordion-collapse-body-20">
            <span className='px-7'>Docentes</span>
            {/*<svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>* */}
            <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">12 Docentes</span>
            </button>
        </h2>
            <div id="accordion-collapse-body-20" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <Tabla_docentes></Tabla_docentes>
                </div>
            </div>
        </div>
   

    </>
  )
}