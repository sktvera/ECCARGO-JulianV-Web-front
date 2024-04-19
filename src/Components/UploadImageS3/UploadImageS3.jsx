import React, { useEffect, useState } from "react";

//Assets____________
import uploadImg from "./Assets/Img-icon/uploadImg.svg";
//services__________
import { sendImageS3 } from "../../services/AwsS3/AwsS3";

const UploadImageS3 = ({ dataitems }) => {
  // Estado para almacenar la imagen seleccionada
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageS3, setIsImageS3] = useState();//Respuesta imagen s3

  const [formatImageS3, setFormatImageS3] = useState();//formatea la imagen de s3 para enviarla




  // Manejador de eventos para el clic en la imagen
  const handleImageClick = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validar si el archivo seleccionado es una imagen
      if (file.type.startsWith("image/")) {
        // Actualizar el estado con la imagen seleccionada
        setSelectedImage(file);
      } else {
        alert("Por favor, selecciona un archivo de imagen.");
      }
    }
  };

  const sendDataApiImageS3 = async (dataitems,selectedImage) => {


    const image64 =  new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(selectedImage);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });

      console.log(image64)

    const image = await image64

    
  console.log({ selectedImage });
  console.log({ dataitems });
  const newObj = {
      ...dataitems,
      id: dataitems.id + '-' + selectedImage.name,
      lastModified: selectedImage.lastModified,
      lastModifiedDate: selectedImage.lastModifiedDate,
      size: selectedImage.size,
      type: selectedImage.type,
      webkitRelativePath: selectedImage.webkitRelativePath,
      image: image.split(",")[1]
  }

  console.log('Nuevo objeto', newObj)



  

    try {
      const response = await sendImageS3({body: newObj});
      setIsImageS3(response.data);
    } catch (error) {
      console.error(error);
      setIsImageS3();
    }
  };


  return (
    <>
      {selectedImage ? (
        <div>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            style={{ maxWidth: "100px", marginTop: "10px" }}
          />

          <div>
            <button onClick={()=>{sendDataApiImageS3(dataitems,selectedImage)}}>
              agendar cotizacioncotizacion
            </button>
            <button>cancelar</button>
            
            {isImageS3 ?<p>se subio</p> :null }
          </div>
        </div>
      ) : (
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageClick}
            id="upload-input"
          />
          <label htmlFor="upload-input">
            <img style={{ width: "52px" }} src={uploadImg} alt="" />
            <span style={{ fontSize: "12px" }}>Añadir imagen de la carga</span>
          </label>
        </div>
      )}
    </>
  );
};

export default UploadImageS3;
