import React, {useCallback, useEffect, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import '../style/login.css';
import '../style/dropzone.css'
import { Link } from 'react-router-dom';

export default function Dropzone({selectFile, currentFile, progress, previewImage, message}){
    
    const onDrop = useCallback(acceptedFiles => {
        selectFile(acceptedFiles[0]);
    }, [])

    const {
      getRootProps,
      getInputProps,
      isDragActive,
      isDragAccept,
      isDragReject,
    } = useDropzone({
      onDrop,
      accept: [
        'image/JPG',
        'image/jpeg', 
        'image/png', 
        'video/mp4'
      ]
    });

    return(
      <>
        <div id='inputName' className="col-auto">
          <div className="dropzone rounded-3 form-control">
            <div  {...getRootProps()}>
              <input {...getInputProps()} onChange={selectFile} />
              <p className='mb-0'>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </div>
        </div>

        {currentFile && (
          <div className="progress my-3">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )}

        {previewImage && (
          <div>
            <img className="preview" src={previewImage} alt="" />
          </div>
        )}

        {message && (
          <div className="alert alert-secondary mt-3" role="alert">
            {message}
          </div>
        )}
      </>
    )
}