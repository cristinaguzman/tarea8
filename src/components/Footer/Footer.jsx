import React from 'react'
import RandomPerson from '../../api/RandomPerson'
import '../../styles/Footer/Footer.scss';

export function Footer() {
  return (
 <div className='container container--C'>
  <p className='mt-5 texto'> Vergvoktre usa tinta y pintura para crear imágenes fantasmales del infierno, o de algún lugar cercano a él. Y eso es todo lo que sé de él, todo lo saqué de su blog. Pero quería saber más, así que le envié un correo electrónico solicitando una entrevista. Y Vergvoktre me contestó que "una entrevista es innecesaria y no produciría nada informativo". <br></br><br></br>
  No fue una buena respuesta… pero también fue la respuesta perfecta. Una ilustración suya había aparecido en mis actualizaciones y de inmediato quedé cautivada por su espeluznante ambigüedad, y el hecho de que no había casi nada en Internet acerca del hombre que la había elaborado. <br></br><br></br>
  Era el tipo de interpretación obscena que la chica de la película The Ring podría hacer en su pozo, sólo que esto era la vida real. Así que lo presioné para que me diera una entrevista y Vergvoktre finalmente me envió algunas respuestas increíblemente vagas por correo electrónico. Tan vagas, de hecho, que ahora sé menos de él que antes.</p>
     <div className='d-flex flex-lg-row flex-column w-100 justify-content-center align-items-center gap-3'>
      <RandomPerson/>
      <RandomPerson/>
      <RandomPerson/>
      <RandomPerson/>
    </div>
    <p>vergovoktre 2022</p>
 </div>
  )
}
