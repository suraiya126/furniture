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
            'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618038133/Local/bedbase_6ft_6i_39_jc6tky.png'
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
            endDoor: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618045262/Local/reference_drawer_jumbo_200_drawer_jumbo_front_14i34_ycsiig.png',
            same2Side: [
                'https://www.youtube.com/watch?v=UuLiaIdDkqU',
                'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618054725/Local/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i34_c9ozc3.webp'
            ]
        }
    },
    mustard: {
        double4t6: {
            endDoor: 'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618047420/Local/reference_drawer_jumbo_200_drawer_jumbo_front_14i39_kr9htt.png',
            same2Side: [
                'https://www.youtube.com/watch?v=UuLiaIdDkqU',
                'https://res.cloudinary.com/dltd4gs4a/image/upload/v1618054725/Local/reference_drawer_normal_back_200_6ft_drawer_normal_front_14i34_c9ozc3.webp'
            ]
        }
    }

}


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
const sameToSide1 = document.getElementById('side-1')
const sameToSide2 = document.getElementById('side-2')
/* End Door selector */


const back = document.getElementById('back')
const header = document.getElementById('header')
const body = document.getElementById('body')

/* START FUNCTION */

const getClickedSize = (e) => {
    const att = e.path[0].dataset.size;

    currentSelectedSize = att
    if (currentSelectedSize === 'small2Ft6') {
        door.src = ''
        door.style.visibility = 'hidden'
    }
    const getImage = colorBedModal[currentSelectedColor][currentSelectedSize]
    back.src = getImage[0]
    header.src = getImage[1]
    body.src = getImage[2]
}

const getCLickedColor = (e) => {
    const att = e.path[0].dataset.color;
    currentSelectedColor = att
    const getImage = colorBedModal[att][currentSelectedSize]
    if (currentSelectedDoor) {
        const getDoor = boxImageModal[currentSelectedColor][currentSelectedSize][currentSelectedDoor]
        door.src = getDoor
        door.style.visibility = 'visible'
    }
    if (currentSelectDepth) {
        const getHeader = depth[att][currentSelectedSize][currentSelectDepth]
        back.src = getImage[0]
        header.src = getImage[1]
        body.src = getHeader
    }

}

const changedDepth = (e) => {
    const att = e.path[0].dataset.depth;
    currentSelectDepth = att
    const getImage = depth[currentSelectedColor][currentSelectedSize][att]
    currentSelectedImage = getImage
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
    currentSelectedDoor = att
    const getImage = boxImageModal[currentSelectedColor][currentSelectedSize][att]
    door.src = getImage
    door.style.visibility = 'visible'


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
sameToSide1.addEventListener('click', changedDoor)
sameToSide2.addEventListener('click', changedDoor)
/* End Door */
