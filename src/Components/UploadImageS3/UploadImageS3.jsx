import React, { useState } from 'react';
import uploadImg from './Assets/Img-icon/uploadImg.svg';

const UploadImageS3 = ({dataitems}) => {
  // Estado para almacenar la imagen seleccionada
  const [selectedImage, setSelectedImage] = useState(null);

  // Manejador de eventos para el clic en la imagen
  const handleImageClick = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validar si el archivo seleccionado es una imagen
      if (file.type.startsWith('image/')) {
        // Actualizar el estado con la imagen seleccionada
        setSelectedImage(file);
      } else {
        alert('Por favor, selecciona un archivo de imagen.');
      }
    }
  };

  console.log({selectedImage})
  console.log({dataitems})

  return (
    <>
    {selectedImage?

    <div>
<img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ maxWidth: '100px', marginTop: '10px' }} />

<div>
<button>agendar cotizacioncotizacion</button>
<button>cancelar</button>
</div>

    </div>
    
    
    
    
    :
     <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
     <input
       type="file"
       accept="image/*"
       style={{ display: 'none' }}
       onChange={handleImageClick}
       id="upload-input"
     />
     <label htmlFor="upload-input">
       <img style={{ width: '52px' }} src={uploadImg} alt="" />
       <span style={{ fontSize: '12px' }}>Añadir imagen de la carga</span>
     </label>
    
   </div>
}
    
    
    </>
   
  );
};

export default UploadImageS3;
