import React, {useRef} from 'react'

const FileUploader = ({onFileSelect}) => {
    const fileInput = useRef(null)

    const handleFileInput = (event) => {
        // handle validations
        onFileSelect(event.target.files[0])
    }

    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput} />
            <button onClick={event => fileInput.current && fileInput.current.click()} className="pretty-button">buttn</button>
        </div>
    )
}

export default FileUploader;