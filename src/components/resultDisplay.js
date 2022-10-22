import './resultDisplay.css';
import Resizer from 'react-image-file-resizer'

const getImgDimensions = (imageSrc) => new Promise((res, rej) => {
    let dummyImage = new Image()
    dummyImage.onload = () => res([dummyImage.width, dummyImage.height])
    dummyImage.onerror = rej
    dummyImage.src = imageSrc
})

const resizeImg = (fileObj, fileExt, oriWidth, oriHeight, newWidth, newHeight) => new Promise((res, rej) => {
    Resizer.imageFileResizer(
        fileObj,
        newWidth,
        newHeight,
        fileExt,
        50,
        0,
        (file) => {
            Resizer.imageFileResizer(
                file,
                oriWidth,
                oriHeight,
                fileExt,
                50,
                0,
                (uri) => res(uri),
                'base64'
            )
        },
        'file'
    )
})

async function ResultDisplay(imageData, filterMode) {
    const imgInfo = imageData
    const resizeRatio = {1: 16.0, 2: 64.0, 3: 256.0}[filterMode]  // Key: Selection passed from buttons; Value: How many pixels in a "pixel"
    var imgUri = null
    const [imgWidth, imgHeight] = await getImgDimensions(imgInfo.data)
    await resizeImg(imgInfo.originalFile, imgInfo.ext, imgWidth, imgHeight, imgWidth / resizeRatio, imgHeight / resizeRatio)
        .then((uri) => {
            imgUri = uri
        })
    return (
        <img src={imgUri} alt="Filtered File"/>
    )
}

export default ResultDisplay;
