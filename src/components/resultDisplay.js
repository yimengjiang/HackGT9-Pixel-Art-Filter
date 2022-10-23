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

async function ResultDisplay(imageData, filterMode, callBack) {
    const imgInfo = imageData
    const resizeRatio = {0: 16.0, 1: 32.0, 2: 64.0}[filterMode]  // Key: Selection passed from buttons; Value: How many pixels in a "pixel"
    const [imgWidth, imgHeight] = await getImgDimensions(imgInfo.data)
    resizeImg(imgInfo.originalFile, imgInfo.ext, imgWidth, imgHeight, imgWidth / resizeRatio, imgHeight / resizeRatio)
        .then((uri) => {
            callBack(
                    <img src={uri} alt="Filtered File" id="result-image"/>
            )
        }
    )
}

export default ResultDisplay;
