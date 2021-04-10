let currentSelectedColor = 'blue'
let currentSelectedSize = 'small2Ft6'
let currentSelectDepth = 'depth12'
let currentSelectedImage = ''
let currentSelectedDoor;


const colorBedModal = {
    blue: {
        color: 'blue',
        small2Ft6: [
            'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618033024/Local/shadow_wrk_4ft6_lefv8a.webp',
            'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618035391/Local/cornell_lined_3ft_14i34_pcfjh3.webp',
            'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618035391/Local/bedbase_3ft_14i_34_xyfl8g.webp'
        ],
        double4t6: [
            'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618033024/Local/shadow_wrk_4ft6_lefv8a.webp',
            'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618035263/Local/cornell_lined_6ft_14i34_fywrjd.png',
            'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618035263/Local/bedbase_6ft_14i_34_qh6klq.png'
        ]
    },
    mustard: {
        color: 'mustard',
        small2Ft6: [
            'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618033024/Local/shadow_wrk_4ft6_lefv8a.webp',
            'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618053411/Local/cornell_lined_3ft_14i39_gluxfy.png',
            'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618038548/Local/bedbase_3ft_6i_39_we7grl.png'
        ],
        double4t6: [
            'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618033024/Local/shadow_wrk_4ft6_lefv8a.webp',
            'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618053283/Local/cornell_lined_6ft_14i39_hawkqm.webp',
            'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618041471/Local/bedbase_6ft_14i_39_pf4dvy.webp'
        ]
    }

}

const depth = {
    blue: {
        small2Ft6: {
            depth6: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618041766/Local/bedbase_3ft_6i_0_dlqqff.png',
            depth10: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618041768/Local/bedbase_3ft_10i_34_pcpsro.png',
            depth12: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618041765/Local/bedbase_3ft_14i_34_1_ngwezp.webp',
        },
        double4t6: {
            depth6: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618041652/Local/bedbase_6ft_6i_34_jffqpf.png',
            depth10: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618041653/Local/bedbase_6ft_10i_34_umzdsk.png',
            depth12: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618041650/Local/bedbase_6ft_14i_34_1_xglrwc.png',
        }
    },
    mustard: {
        small2Ft6: {
            depth6: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618041193/Local/bedbase_3ft_6i_39_siwuuq.png',
            depth10: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618041188/Local/bedbase_3ft_10i_39_osrxm7.webp',
            depth12: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618041190/Local/bedbase_3ft_14i_39_qflwh9.png',
        },
        double4t6: {
            depth6: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618041476/Local/bedbase_6ft_6i_39_1_aeyq6d.png',
            depth10: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618041474/Local/bedbase_6ft_10i_39_mq1ftk.png',
            depth12: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618041471/Local/bedbase_6ft_14i_39_pf4dvy.webp',
        }
    },

}


const boxImageModal = {
    blue: {
        double4t6: {
            depth12: {
                endDoor: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618045262/Local/reference_drawer_jumbo_200_drawer_jumbo_front_14i34_ycsiig.png',
                same2Side: [
                    'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618063938/Local/de_egyyub.webp',
                    'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618064075/Local/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i34_mc2szx.webp'
                ],
                drawerSide2End: [
                    'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618064075/Local/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i34_mc2szx.webp',
                    'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618045262/Local/reference_drawer_jumbo_200_drawer_jumbo_front_14i34_ycsiig.png',
                ]
            },
            depth10: {
                endDoor: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618045262/Local/reference_drawer_jumbo_200_drawer_jumbo_front_14i34_ycsiig.png',
                same2Side: [
                    'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618063938/Local/de_egyyub.webp',
                    'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618064075/Local/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i34_mc2szx.webp'
                ],
                drawerSide2End: [
                    'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618064075/Local/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i34_mc2szx.webp',
                    'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618045262/Local/reference_drawer_jumbo_200_drawer_jumbo_front_14i34_ycsiig.png',
                ]
            }

        }
    },
    mustard: {
        double4t6: {
            depth10: {
                endDoor: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618047420/Local/reference_drawer_jumbo_200_drawer_jumbo_front_14i39_kr9htt.png',
                same2Side: [
                    'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618054725/Local/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i39_iqkbf7.webp',
                    'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618054725/Local/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i39_n26aad.webp'
                ],
                drawerSide2End: [
                    'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618054725/Local/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i39_n26aad.webp',
                    'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618047420/Local/reference_drawer_jumbo_200_drawer_jumbo_front_14i39_kr9htt.png',
                ]
            },
            depth12: {
                endDoor: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618047420/Local/reference_drawer_jumbo_200_drawer_jumbo_front_14i39_kr9htt.png',
                same2Side: [
                    'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618054725/Local/reference_drawer_normal_front_200_6ft_drawer_normal_front_14i39_iqkbf7.webp',
                    'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618054725/Local/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i39_n26aad.webp'
                ],
                drawerSide2End: [
                    'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618054725/Local/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i39_n26aad.webp',
                    'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618047420/Local/reference_drawer_jumbo_200_drawer_jumbo_front_14i39_kr9htt.png',
                ]
            }

        }
    }

}

/* const headerBox = {
    blue
}
 */

/* Start Size selector */
const small6Feet = document.getElementById('size-button-small-6feet')
const kingSize6 = document.getElementById('size-button-king-6')
/* End color selector */


/* Start color selector */
const blue = document.getElementById('blue')
const mustard = document.getElementById('mustard')
/* End color selector */

/* StartDepth Selector */
const depth6 = document.getElementById('depth-6')
const depth10 = document.getElementById('depth-10')
const depth12 = document.getElementById('depth-12')

/* End Depth Selector */

/* Start Door selector */
const door = document.getElementById('door')
const endDoor = document.getElementById('endDoor')
const side = document.querySelector('.side')
const sameToSide1 = document.getElementById('side-1')
const sameToSide2 = document.getElementById('side-2')
const sameTwoButton = document.getElementById('sameToSide')
const drawerSide2End = document.getElementById('drawerSide2End')
/* End Door selector */


const back = document.getElementById('back')
const header = document.getElementById('header')
const body = document.getElementById('body')

/* START FUNCTION */

const getClickedSize = (e) => {
    const att = e.path[0].dataset.size;
    currentSelectedSize = att
    console.log(currentSelectedColor, currentSelectedSize)
    if (currentSelectedSize === 'small2Ft6') {

        door.src = ''
        door.style.visibility = 'hidden'
        sameToSide1.src = ''
        sameToSide1.style.visibility = 'hidden'
        sameToSide2.src = ''
        sameToSide2.style.visibility = 'hidden'
    }
    console.log(currentSelectedColor, currentSelectedSize)
    const getImage = colorBedModal[currentSelectedColor][currentSelectedSize]
    back.src = getImage[0]
    header.src = getImage[1]
    body.src = getImage[2]
    const getDepth = depth[currentSelectedColor][currentSelectedSize][currentSelectDepth]
    body.src = getDepth




}

/* somehow Have to modified the middle of the bed */

const getCLickedColor = (e) => {
    const att = e.path[0].dataset.color;
    currentSelectedColor = att
    const getImageAA = colorBedModal[att][currentSelectedSize]


    if (currentSelectedDoor === 'endDoor' && currentSelectDepth !== 'depth6') {
        console.log(currentSelectDepth, currentSelectedDoor, currentSelectedColor, currentSelectedSize,)
        const getDoor = boxImageModal[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedDoor]
        door.src = getDoor
        door.style.visibility = 'visible'
    }

    if (currentSelectDepth === 'depth6') {
        header.classList.add('mr-top')
    } else {
        header.classList.remove('mr-top')
    }

    if (currentSelectedDoor === 'same2Side') {
        back.src = getImageAA[0]
        header.src = getImageAA[1]
        body.src = getImageAA[2]
        const getImage = boxImageModal[att][currentSelectedSize][currentSelectDepth][currentSelectedDoor]
        console.log(currentSelectedColor, currentSelectedSize, currentSelectDepth, currentSelectedDoor)
        sameToSide1.src = getImage[0]
        sameToSide2.src = getImage[1]
        side.style.visibility = 'visible'
        sameToSide2.style.visibility = 'visible'

        return;

    }

    if (currentSelectedDoor === 'drawerSide2End') {
        back.src = getImageAA[0]
        header.src = getImageAA[1]
        body.src = getImageAA[2]
        const getImage = boxImageModal[att][currentSelectedSize][currentSelectDepth][currentSelectedDoor]
        door.src = getImage[1]
        door.style.visibility = 'visible'
        sameToSide1.src = getImage[0]
        sameToSide1.style.visibility = 'visible'
        return

    }
    if (currentSelectDepth) {
        const getHeader = depth[att][currentSelectedSize][currentSelectDepth]
        back.src = getImageAA[0]
        header.src = getImageAA[1]
        body.src = getHeader
        return
    }


}

const changedDepth = (e) => {
    const att = e.path[0].dataset.depth;
    currentSelectDepth = att
    const getImage = depth[currentSelectedColor][currentSelectedSize][att]
    currentSelectedImage = getImage

    if (currentSelectDepth === 'depth6') {
        sameToSide1.src = ''
        sameToSide2.src = ''
        door.src = ''
    }

    if (currentSelectDepth === 'depth6') {
        header.classList.add('mr-top')
    } else {
        header.classList.remove('mr-top')
    }
    body.src = getImage
}

const changedDoor = (e) => {
/*     console.log(e.target.dataset.door)
 */    const att = e.path[0].dataset.door;

    if (currentSelectedSize === 'small2Ft6') {

        door.src = ''
        door.style.visibility = 'hidden'
        return
    }

    if (e.target.dataset.door === 'same2Side' && currentSelectedSize !== 'small2Ft6') {
        currentSelectedDoor = att

        door.src = ''
        door.style.visibility = 'hidden'
        const getImage = boxImageModal[currentSelectedColor][currentSelectedSize][currentSelectDepth][att]
        sameToSide1.src = getImage[0]
        sameToSide2.src = getImage[1]
        side.style.visibility = 'visible'
        sameToSide2.style.visibility = 'visible'
        return;

    }
    if (e.target.dataset.door === 'endDoor' && currentSelectedSize !== 'small2Ft6') {
        sameToSide1.src = ''
        sameToSide2.src = ''
        currentSelectedDoor = att
        const getDoor = boxImageModal[currentSelectedColor][currentSelectedSize][currentSelectDepth][currentSelectedDoor]
        door.src = getDoor
        door.style.visibility = 'visible'
        return
    }

    if (e.target.dataset.door === 'drawerSide2End') {
        currentSelectedDoor = att
        const getImage = boxImageModal[currentSelectedColor][currentSelectedSize][currentSelectDepth][e.target.dataset.door]
        door.src = getImage[1]
        door.style.visibility = 'visible'
        sameToSide1.src = getImage[0]
        sameToSide1.style.visibility = 'visible'

        console.log(getImage, currentSelectedColor, currentSelectedSize, currentSelectDepth, e.target.dataset.door)
    }



}


/* END FUNCTION */



/* Size Start */
small6Feet.addEventListener('click', getClickedSize)
kingSize6.addEventListener('click', getClickedSize)
/* Size End */


/* Color Start */
blue.addEventListener('click', getCLickedColor)
mustard.addEventListener('click', getCLickedColor)

/* Shape Start End */


/* Shap End */

/* START Base Depth */
depth6.addEventListener('click', changedDepth)
depth10.addEventListener('click', changedDepth)
depth12.addEventListener('click', changedDepth)


/* END Base Depth */


/* Start Door */
endDoor.addEventListener('click', changedDoor)
sameTwoButton.addEventListener('click', changedDoor)
drawerSide2End.addEventListener('click', changedDoor)
/* End Door */