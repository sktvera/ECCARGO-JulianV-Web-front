import React, { useEffect, useState, useRef } from "react";
//Assets____________
import amazons3 from "./Assets/Img-icon/amazons3.png";
import gateway from "./Assets/Img-icon/gateway.png";
import mediaPreview from "./Assets/Img-icon/mediaPreview.svg";

import uploadImg from "./Assets/Img-icon/uploadImg.svg";
import Button from "@material-ui/core/Button";
import Delete from "@mui/icons-material/DeleteOutline";
import { IconButton, Tooltip } from "@material-ui/core";

import "./Assets/styles.css";

//services__________
import {
  sendImageS3,
  getImagesS3,
  deleteImage,
} from "../../services/AwsS3/AwsS3";

//componentes _____
import ModalDelete from "../ModalDelete/ModalDelete";

const UploadImageS3 = ({ dataitems }) => {
  const inputFileRef = useRef(null);
  // Estado para almacenar la imagen seleccionada
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageS3, setIsImageS3] = useState(); //Respuesta imagen s3
  const [allImagesS3, setAllImagesS3] = useState(); //guarda todas las imagenes subidas a s3
  const [open, setOpen] = useState(false); //habre y cierra la modal de eliminar IMG S3
  const [matchUrl, setmatchUrl] = useState();

  const [isDeleteImgS3, setIsDeleteImgS3] = useState(); //estado de elimicacion img s3

  //get api aws s3 ______
  useEffect(() => {
    const getAllImagesS3 = async () => {
      try {
        const response = await getImagesS3();
        const imagesArray = JSON.parse(response.data.body); // Convertir el string a un array
        setAllImagesS3(imagesArray);

        imagesArray.forEach((item) => {
          let keyNumber = parseInt(item.Key.split("-")[0]);
          if (dataitems.id === keyNumber) {
            setmatchUrl(item);
          } else {
          }
        });
      } catch (error) {
        console.error(error);
      }
    };
    getAllImagesS3();
  }, [isImageS3, isDeleteImgS3]); //

  console.log(matchUrl);

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

  //habre la modal de verificacion para eliminar la IMG S3
  const handleClickOpenDelete = () => {
    setOpen(true);
  };
  //cierra la modal que verifica la eliminacion de la IMG S3
  const handleClickCloseDelete = () => {
    setOpen(false);
  };

  const sendDataApiImageS3 = async (dataitems, selectedImage) => {
    //formatea la imagen en base 64 ______
    const image64 = new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(selectedImage);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
    console.log(image64);
    const image = await image64;

    //desestructurando el objeto para enviarlo al bucket de s3 aws______
    const newObj = {
      ...dataitems,
      id: dataitems.id + "-" + selectedImage.name,
      lastModified: selectedImage.lastModified,
      lastModifiedDate: selectedImage.lastModifiedDate,
      size: selectedImage.size,
      type: selectedImage.type,
      webkitRelativePath: selectedImage.webkitRelativePath,
      image: image.split(",")[1],
    };
    console.log("Nuevo objeto", newObj);

    //realiza la peticion a amazon envia la imagen al bucket de s3_____
    try {
      const response = await sendImageS3({ body: newObj });
      setIsImageS3(response.data);
    } catch (error) {
      console.error(error);
      setIsImageS3();
    }
  };

  //permite lasubida de imagenes para el api gateway aws ___
  const handleDivClick = () => {
    // Dispara el evento de clic en el input de archivo
    inputFileRef.current.click();
  };

  //realiza la peticion al backend para eliminar la cotizacion
  const handleDelete = (matchUrl) => {
    deleteImage(matchUrl) //servico de s3
      .then((response) => {
        setIsDeleteImgS3(response.data);
        console.log("Elemento eliminado con éxito");
        handleClickCloseDelete();
        setmatchUrl();
        selectedImage();
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  const clearImg = () => {
    setSelectedImage();
  };

  return (
    <>
      {selectedImage || matchUrl ? (
        <div className="previewLoadImage">
          <div className="imageContainerLoad">
            <div
              style={matchUrl ? { width: "300px", borderRadius: "8px" } : null}
              className="containerLoadImageAws"
            >
              {/* si tiene una imagen en s3 lo remplaza por el preview ______ */}

              <img
                src={
                  matchUrl ? matchUrl.url : URL.createObjectURL(selectedImage)
                }
                alt="Selected"
                className="previewImage"
              />

              {/*  imagen amazon s3 _______ api gateway*/}
              {matchUrl ? (
                <img
                  style={{ width: "120px" }}
                  src={amazons3}
                  alt=""
                  class="icon"
                />
              ) : (
                <img
                  style={{ width: "120px" }}
                  src={gateway}
                  alt=""
                  class="icon"
                />
              )}

              {/*  eliminar imagen del s3 _______ */}
              <Tooltip title="Eliminar IMG Aws">
                <IconButton
                  className="iconDelete"
                  onClick={handleClickOpenDelete}
                >
                  <Delete />
                </IconButton>
              </Tooltip>

              <Tooltip title="Preview IMG">
                <IconButton className="iconPreview">
                  <img src={mediaPreview} alt="" />
                </IconButton>
              </Tooltip>

              <ModalDelete
                open={open}
                descriptionModal={
                  "¿Estás seguro de que quieres la IMG de la carga aws s3?"
                }
                handleClose={handleClickCloseDelete}
                handleDelete={handleDelete} //funcion que ejecuta la eliminacion
                dataitems={matchUrl?.Key} //id de eliminacion o /query de eliminacion
              />
            </div>
            {/* si tiene una imagen en s3 y quita el menu de subir imagen a s3*/}
            {matchUrl ? null : (
              <div className="containerSendIMageS3">
                <Button
                  style={{ backgroundColor: "#004274", color: "white" }}
                  onClick={() => {
                    sendDataApiImageS3(dataitems, selectedImage);
                  }}
                >
                  Agregar [IMG]carga
                </Button>
                <Button
                  onClick={() => {
                    clearImg();
                  }}
                  style={{ border: "1px solid #00000033", borderRadius: "8px" }}
                >
                  Cancelar
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="previewLoadImage" onClick={handleDivClick}>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageClick}
            ref={inputFileRef}
            id="upload-input"
          />
          <div className="imageContainer">
            <img src={uploadImg} alt="" />
            <span>Añadir imagen de la carga</span>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadImageS3;
