const mainContainerCard = document.querySelector('.main-container-card');

const footerObjServer = {
    'Otradnoye': {
        name: this,
        img: ['../img/skatePark/Otradnoye/Otradnoye-1.webp', '../img/skatePark/Otradnoye/Otradnoye-2.webp', '../img/skatePark/Otradnoye/Otradnoye-3.webp', '',],
        description: [],
        comment: [],
        locationPark: ['55.868976, 37.623802'],
    }, 
    'Ostankino': {
        name: this,
        img: ['../img/skatePark/Ostankino/Ostankino-1.webp', '../img/skatePark/Ostankino/Ostankino-2.webp', '../img/skatePark/Ostankino/Ostankino-3.webp', '',],
        description: [],
        comment: [],
        locationPark: ['55.826565, 37.607927'],
    },
    'Baltic': {
        name: this,
        img: ['../img/skatePark/Baltic/Baltic-1.webp', '../img/skatePark/Baltic/Baltic-2.webp', '../img/skatePark/Baltic/Baltic-3.webp','../img/skatePark/Baltic/Baltic-4.webp', '',],   
        description: [],
        comment: [
            ['Pave', '2 September 2015 in 10:41', 'Hello world!', 0, 0, [],],
            ['Sasha', '2 September 2015 in 10:30', 'Hello world!', 0, 0, [],],
            ['Dima', '2 September 2015 in 10:01', 'Hello world!', 0, 0, [],],
        ],
        locationPark: ['55.826248, 37.487222'],
    }, 
    'School': {
        name: this,
        img: ['', '',],   
        description: [],
        comment: [
            ['Pave', '2 September 2015 in 10:41', 'Hello world!', 0, 0, [],],
            ['Sasha', '2 September 2015 in 10:30', 'Hello world!', 0, 0, [],],
            ['Dima', '2 September 2015 in 10:01', 'Hello world!', 0, 0, [],],
        ],
        locationPark: ['55.787142, 37.731080'],
    },
    'South': {
        name: this,
        img: ['../img/skatePark/South/South-1.webp', '../img/skatePark/South/South-2.webp', '../img/skatePark/South/South-3.webp','../img/skatePark/South/South-4.webp', '',],   
        description: [],
        comment: [
            ['Pave', '2 September 2015 in 10:41', 'Hello world!', 0, 0, [],],
            ['Sasha', '2 September 2015 in 10:30', 'Hello world!', 0, 0, [],],
            ['Dima', '2 September 2015 in 10:01', 'Hello world!', 0, 0, [],],
        ],
        locationPark: ['55.625714, 37.588028'],
    },
    'Locomotive': {
        name: this,
        img: ['../img/skatePark/Locomotive/Locomotive-1.webp', '../img/skatePark/Locomotive/Locomotive-2.webp',  '',],   
        description: [],
        comment: [
            ['Pave', '2 September 2015 in 10:41', 'Hello world!', 0, 0, [],],
            ['Sasha', '2 September 2015 in 10:30', 'Hello world!', 0, 0, [],],
            ['Dima', '2 September 2015 in 10:01', 'Hello world!', 0, 0, [],],
        ],
        locationPark: ['55.804895, 37.735147'],
    },
    'Ziggurat': {
        name: this,
        img: ['../img/skatePark/Ziggurat/Ziggurat-1.webp', '../img/skatePark/Ziggurat/Ziggurat-2.webp', '../img/skatePark/Ziggurat/Ziggurat-3.webp', '',],   
        description: [],
        comment: [
            ['Pave', '2 September 2015 in 10:41', 'Hello world!', 0, 0, [],],
            ['Sasha', '2 September 2015 in 10:30', 'Hello world!', 0, 0, [],],
            ['Dima', '2 September 2015 in 10:01', 'Hello world!', 0, 0, [],],
        ],
        locationPark: ['55.773236, 37.604858'],
    },
    'Dynamo': {
        name: this,
        img: ['../img/skatePark/Dynamo/Dynamo-1.webp', '',],   
        description: [],
        comment: [
            ['Pave', '2 September 2015 in 10:41', 'Hello world!', 0, 0, [],],
            ['Sasha', '2 September 2015 in 10:30', 'Hello world!', 0, 0, [],],
            ['Dima', '2 September 2015 in 10:01', 'Hello world!', 0, 0, [],],
        ],
        locationPark: ['55.790807, 37.561873'],
    },
    'Lianozovo': {
        name: this,
        img: ['../img/skatePark/Lianozovo/Lianozovo-1.webp', '../img/skatePark/Lianozovo/Lianozovo-2.webp', '../img/skatePark/Lianozovo/Lianozovo-3.webp', '',],   
        description: [],
        comment: [
            ['Pave', '2 September 2015 in 10:41', 'Hello world!', 0, 0, [],],
            ['Sasha', '2 September 2015 in 10:30', 'Hello world!', 0, 0, [],],
            ['Dima', '2 September 2015 in 10:01', 'Hello world!', 0, 0, [],],
        ],
        locationPark: ['55.899133, 37.572450'],
    },
    'Medvedkovo': {
        name: this,
        img: ['../img/skatePark/Medvedkovo/Medvedkovo-1.webp', '../img/skatePark/Medvedkovo/Medvedkovo-2.webp', '../img/skatePark/Medvedkovo/Medvedkovo-3.webp', '',],   
        description: [],
        comment: [
            ['Pave', '2 September 2015 in 10:41', 'Hello world!', 0, 0, [],],
            ['Sasha', '2 September 2015 in 10:30', 'Hello world!', 0, 0, [],],
            ['Dima', '2 September 2015 in 10:01', 'Hello world!', 0, 0, [],],
        ],
        locationPark: ['55.881908, 37.672987'],
    },
};

// 'School': ['55.787142, 37.731080', '', '', '',''],
// 'South': ['55.625714, 37.588028', '../img/skatePark/South/South-1.webp', '../img/skatePark/South/South-2.webp', '../img/skatePark/South/South-3.webp','../img/skatePark/South/South-4.webp', '',],

const mainObjServer = {
    'Ns Capital 2015': {
        name: this,     
        img: ['../img/cap2015/WP_20160831_18_56_31_Pro.jpg', '../img/cap2015/WP_20160831_18_56_38_Pro.jpg', '../img/cap2015/WP_20160831_18_57_06_Pro.jpg'],
        description: ['Vasya',  '2', 'September', '2015 in',' 10:48', 'great', 'Kirill', '15 ','march',' 2007 in 15:03', 'look'],
        comment: [
            ['Igor', '2 September 2015 in 10:41', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:30', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:01', 'Hello world!', 0, 0, [],],
        ],
        atributeDate: '20 05 2001',
        atributeLikes: 5,
        atributeCommentFunc() {
            return this.comment.length;
        },   
    },
    'Ns Capital 2024': {    
        name: this,
        img: ['../img/cap24/IMAG0087.jpg', '../img/cap24/IMAG0088.jpg', '../img/cap24/IMG_0464.JPG', '../img/cap24/IMG_0465.JPG'],
        description: ['Vasya',  '2', 'September', '2015 in',' 10:48', 'great', 'Kirill', '15 ','march',' 2007 in 15:03', 'look'],
        comment: [
            ['Igor', '2 September 2015 in 10:33', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:55', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:47', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:49', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:04', 'Hello world!', 0, 0, [],],
            ['Igor', '2 September 2015 in 10:31', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:07', 'Hello world!', 0, 0, [],],
        ],
        atributeDate: '15 03 1999',
        atributeLikes: 15,
        atributeCommentFunc() {
            return this.comment.length;
        },   
    },
    'TSB 2019': {
        name: this,     
        img: ['../img/tsb/IMG_4581.jpg', '../img/tsb/IMG_4584.jpg', '../img/tsb/IMG_4588.jpg'],
        description: ['Vasya',  '2', 'September', '2015 in',' 10:48', 'great', 'Kirill', '15 ','march',' 2007 in 15:03', 'look'],
        comment: [
            ['Igor', '2 September 2015 in 10:12', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:15', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:25', 'Hello world!', 0, 0, [],],
        ],
        atributeDate: '20 05 2007',
        atributeLikes: 5,
        atributeCommentFunc() {
            return this.comment.length;
        },   
    },
    'Ns Capital 2013': {    
        name: this,
        img: ['../img/cap2013/WP_20160325_004.jpg', '../img/cap2013/WP_20160325_005.jpg', '../img/cap2013/WP_20160325_007.jpg'],
        description: ['Vasya',  '2', 'September', '2015 in',' 10:48', 'great', 'Kirill', '15 ','march',' 2007 in 15:03', 'look'],
        comment: [
            ['Igor', '2 September 2015 in 10:03', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:34', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:22', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:28', 'Hello world!', 0, 0, [],],
        ],
        atributeDate: '15 03 1990',
        atributeLikes: 15,
        atributeCommentFunc() {
            return this.comment.length;
        },   
    },
    'Diffrent img': {
        name: this,     
        img: ['../img/gorVert/bodyFon.jpeg', '../img/gorVert/dark-theme.jpg', '../img/gorVert/IMG_6437.jpeg', '../img/gorVert/IMG_6784.jpeg'],
        description: ['Vasya',  '2', 'September', '2015 in',' 10:48', 'great', 'Kirill', '15 ','march',' 2007 in 15:03', 'look'],
        comment: [
            ['Igor', '2 September 2015 in 10:48', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:48', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:48', 'Hello world!', 0, 0, [],],
            ['Igor', '2 September 2015 in 10:48', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:48', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:48', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:48', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:48', 'Hello world!', 0, 0, [],],
            ['Igor', '2 September 2015 in 10:48', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:48', 'Hello world!', 0, 0, [],],
        ],
        atributeDate: '20 05 1980',
        atributeLikes: 5,
        atributeCommentFunc() {
            return this.comment.length;
        },   
    },
    'All img': {    
        name: this,
        img: ['../img/all/garland.png', '../img/all/dark-theme.jpg', '../img/all/IMG_6437.jpeg', '../img/all/scale_1200.jpg', '../img/all/shark.png'],
        description: ['Vasya',  '2', 'September', '2015 in',' 10:48', 'great', 'Kirill', '15 ','march',' 2007 in 15:03', 'look'],
        comment: [
            ['Igor', '2 September 2015 in 10:48', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:48', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:48', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:48', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:48', 'Hello world!', 0, 0, [],],
            ['Igor', '2 September 2015 in 10:48', 'Hello world!', 0, 0, [],],
            ['Ivan', '2 September 2015 in 10:48', 'Hello world!', 0, 0, [],],
        ],
        atributeDate: '01 03 1899',
        atributeLikes: 15,
        atributeCommentFunc() {
            return this.comment.length;
        },   
    },
};

// create main //
function createBlockCardFunction() {
    
    for(let key in mainObjServer) {
        //console.log(mainObjServer[key].comment);
        const blockCard = document.createElement('div');
        blockCard.classList.add('block-card');
        mainContainerCard.append(blockCard);
        /// attribute
        blockCard.setAttribute('nameiscard', `${key}`);
        blockCard.setAttribute('date', mainObjServer[key].atributeDate);
        blockCard.setAttribute('likes', mainObjServer[key].atributeLikes);
        blockCard.setAttribute('comment', mainObjServer[key].atributeCommentFunc());
        // blockCard.setAttribute('index', i);

        const cardContent = document.createElement('div');
        const blockSlide = document.createElement('div');
        cardContent.classList.add('card-content');
        blockSlide.classList.add('block-slide');
        blockCard.append(cardContent);
        blockCard.append(blockSlide);

        const blockSlideMouse = document.createElement('div');
        const blockCardText = document.createElement('div');
        blockSlideMouse.classList.add('block-slide-mouse');
        blockCardText.classList.add('card-text');
        cardContent.append(blockSlideMouse);
        cardContent.append(blockCardText);

        const slideDotBlockMouse = document.createElement('div');
        slideDotBlockMouse.classList.add('slide-dot-block-mouse');
        
        for(let k of mainObjServer[key].img){
           
            const divImgMouse = document.createElement('div');
            const divImgMouseIMG = document.createElement('img');
            divImgMouse.classList.add('div-img-mouse');
         
            divImgMouseIMG.src = k;
            divImgMouse.style.cssText += `background: red`;

            blockSlideMouse.append(divImgMouse);
            divImgMouse.append(divImgMouseIMG);
            
            blockSlideMouse.append(slideDotBlockMouse);

            const slideDotColumnsMouse = document.createElement('div');
            slideDotColumnsMouse.classList.add('slide-dot-columns-mouse');
            slideDotBlockMouse.append(slideDotColumnsMouse);

            const slideDotMouse = document.createElement('div');
            slideDotMouse.classList.add('slide-dot-mouse');
            slideDotColumnsMouse.append(slideDotMouse);
        };
        blockSlideMouse.firstChild.classList.add('div-img-activ-mouse');

        const blockNameComment = document.createElement('div');
        const blockHeartLR = document.createElement('div');
        const blockLikeDate = document.createElement('div');
        blockNameComment.classList.add('block-name-comment');
        blockHeartLR.classList.add('block-heart-lr')
        blockLikeDate.classList.add('block-like-date');
        blockCardText.append(blockNameComment);
        blockCardText.append(blockHeartLR);
        blockCardText.append(blockLikeDate);

        const nameCardH3 = document.createElement('h3');
        const pComment = document.createElement('p');
        const pSpanComment = document.createElement('span');
        nameCardH3.classList.add('name-card');
        pComment.classList.add('comment');
        nameCardH3.textContent = key;
        pComment.textContent = 'comment';
        blockNameComment.append(nameCardH3);
        blockNameComment.append(pComment);
        pComment.append(pSpanComment);

        const circleLHeart = document.createElement('div');
        const circleRHeart = document.createElement('div');
        const triangleHeart = document.createElement('div');
        circleLHeart.classList.add('circle-l-heart');
        circleRHeart.classList.add('circle-r-heart');
        triangleHeart.classList.add('triangle-heart');
        blockHeartLR.append(circleLHeart);
        blockHeartLR.append(circleRHeart);
        blockHeartLR.append(triangleHeart);

        const blockLikes = document.createElement('div');
        const cardDate = document.createElement('p');
        blockLikes.classList.add('block-likes');
        cardDate.classList.add('card-date');
        blockLikeDate.append(blockLikes);
        blockLikeDate.append(cardDate);

        // text 
        pSpanComment.textContent = ' ' + blockCard.getAttribute('comment');
        blockLikes.textContent = mainObjServer[key].atributeLikes;
        cardDate.textContent = mainObjServer[key].atributeDate;
    }; 

    // grid для mouse-slide
    for(let i = 0; i < [...document.querySelectorAll('.block-slide-mouse')].length; i++) {
        document.querySelectorAll('.slide-dot-block-mouse')[i].style = `grid-template-columns: repeat(${document.querySelectorAll('.slide-dot-block-mouse')[i].children.length}, 1fr);`;
    };
    // background для divImgMouse
    for(let i = 0; i < document.querySelectorAll('.div-img-mouse').length; i++) {
        document.querySelectorAll('.div-img-mouse')[i].style.cssText += `background-image: linear-gradient(180deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${document.querySelectorAll('.div-img-mouse img')[i].src});
            background-repeat: no-repeat;  background-position: center;  background-size: cover;`;
    };
};
createBlockCardFunction();


function mobile() {
    //console.log(document.body.clientWidth);
    if(document.body.clientWidth < '770') {
        document.querySelector('.heading-fixed-block').style.display = 'none';
}};
mobile();
if(window.getComputedStyle(document.querySelector('.mobile-btn')).display === 'block') {
    document.querySelector('.block-sort-card').style.marginTop = '50px';
 }  else {
    document.querySelector('.block-sort-card').style.marginTop = '0px';
}

const footerSlideBlock = document.querySelector('.footer-slide-block');
//const simpleBlockSlides = document.querySelectorAll('.simple-block-slide');
const btnSimpleSlideRight = document.querySelector('.btn-simple-slide-right');
const btnSimpleSlideLeft = document.querySelector('.btn-simple-slide-left');
const btnSimpleSlidePlay = document.querySelector('.btn-simple-slide-play');

// create footer
function createFooterSlide() {
    for(let key in footerObjServer) {
        const createBlockFooterSlide = document.createElement('div');
        createBlockFooterSlide.classList.add('simple-block-slide');
        createBlockFooterSlide.setAttribute('nameiscard', `${key}`);

        const imgParkBlock = document.createElement('div');
        imgParkBlock.classList.add('imgParkBlock');

        const blockNamePark = document.createElement('div');
        blockNamePark.classList.add('blockNamePark');

        footerObjServer[key].img.forEach(img => {
            const wrapImg = document.createElement('div');
            wrapImg.classList.add('wrapImg');

            const imgPark = document.createElement('img');
            imgPark.src = img;
            imgPark.classList.add('imgDivPark');

            wrapImg.append(imgPark);
            imgParkBlock.append(wrapImg);
        });
       imgParkBlock.firstChild.classList.add('wrapImgActive');

        const nameParkH4 = document.createElement('h4');
        nameParkH4.textContent = key + ' skate-park!';
        nameParkH4.classList.add('nameParkH4');

        const linkMap = document.createElement('a');
        linkMap.classList.add('linkMap');
        linkMap.setAttribute('target', 'blank');
        linkMap.textContent = 'Yandex map ' + key;
        
        footerObjServer[key].locationPark.forEach(e => {
            linkMap.href = `https://yandex.ru/maps/213/moscow/?ll=37.699728%2C55.738430&mode=search&sll=${e.split(',')[1].trim()}%2C${e.split(',')[0]}&text=${e.split(',')[0]}%2C${e.split(',')[1].trim()}&z=10.6`;
        });

        footerSlideBlock.append(createBlockFooterSlide);
        createBlockFooterSlide.append(imgParkBlock);
        createBlockFooterSlide.append(blockNamePark);

        blockNamePark.append(nameParkH4);
        blockNamePark.append(linkMap);

    };
};
createFooterSlide();

// block-card - grid style 
const blockCard = document.querySelectorAll('.block-card');
// сетка грид и фон для block-img-mouse
const blockSlideMouse = document.querySelectorAll('.block-slide-mouse');

// slider footer
function clickSlideRight() {
    const simpleBlockSlidesR = document.querySelectorAll('.simple-block-slide');
    footerSlideBlock.prepend(simpleBlockSlidesR[simpleBlockSlidesR.length -1]);
};   

function clickSlideleft() {
    const simpleBlockSlidesL = document.querySelectorAll('.simple-block-slide');
    footerSlideBlock.append(simpleBlockSlidesL[0]);
};

btnSimpleSlideLeft.addEventListener('click', clickSlideleft);
btnSimpleSlideRight.addEventListener('click', clickSlideRight);  

let setIntervalSlide;
    function playSlade() {
        const simpleBlockSlidesR = document.querySelectorAll('.simple-block-slide');
        footerSlideBlock.prepend(simpleBlockSlidesR[simpleBlockSlidesR.length -1]);
};

btnSimpleSlidePlay.addEventListener('click', () => {
    
    if(btnSimpleSlidePlay.classList.contains('btn-simple-slide-play')) {
        btnSimpleSlidePlay.classList.remove('btn-simple-slide-play');
        btnSimpleSlidePlay.classList.add('btn-simple-slide-stop');
        btnSimpleSlidePlay.textContent = 'stop';

        btnSimpleSlideLeft.removeEventListener('click', clickSlideleft);
        btnSimpleSlideRight.removeEventListener('click', clickSlideRight); 
        setIntervalSlide = setInterval(playSlade, 1000); 
    } 
     else {
        
        btnSimpleSlidePlay.classList.remove('btn-simple-slide-stop');
        btnSimpleSlidePlay.classList.add('btn-simple-slide-play');
        btnSimpleSlidePlay.textContent = 'play';

        clearInterval(setIntervalSlide);
        btnSimpleSlideLeft.addEventListener('click', clickSlideleft);
        btnSimpleSlideRight.addEventListener('click', clickSlideRight);  
     }
});


// const для Sort ////
const btnSort = document.querySelector('.btn-sort');
const btnSortSpan = document.querySelector('.btn-sort span');
const sortUl = document.querySelector('.sort-ul');
const sortUlLi = document.querySelectorAll('.sort-ul li');

// block-card - grid style 
function gridBlockCard(bCard) {
 //console.log(bCard);
    // grid для первых двух и последнего
    if(bCard.length < 4) {
       // console.log('< 4');
        bCard.forEach(block => {
           // console.log('1, -1');
            block.style = 'grid-column: 1 / -1; ';
            // block.style = 'max-width: 1000px;';
        });
    } else {
        
        for(let i = 0; i < bCard.length; i++) {
            bCard[i].style = 'grid-column: ; ';
        };
        bCard[0].style = 'grid-column: 1 / -1; ';
        bCard[bCard.length - 1].style = 'grid-column: 1 / -1; ';
        // увеличить height divImgMouse для первого и последнего слайда 
    }
};
gridBlockCard(blockCard);

//  Sort ////
let btnFindClick = false;
function sortBlockCard () {
  
    sortUl.classList.toggle('sort-ul-activ');

    sortUlLi.forEach(li => {
        li.addEventListener('click',  () => {
            btnSortSpan.textContent = li.textContent;
            sortUl.classList.remove('sort-ul-activ');

            let newBlockCard;
                if(btnSortSpan.textContent === 'по лайкам') {
                    newBlockCard = [...blockCard].sort((a, b) => b.getAttribute('likes') - a.getAttribute('likes'));
                    sortNode();
                } 
                if(btnSortSpan.textContent === 'по комментариям') {
                    newBlockCard = [...blockCard].sort((a, b) => b.getAttribute('comment') - a.getAttribute('comment'));
                    sortNode();
                }
                if(btnSortSpan.textContent === 'по алфавиту') {
                newBlockCard = [...blockCard].sort((a, b) => a.getAttribute('nameiscard').localeCompare(b.getAttribute('nameiscard')));
                    sortNode();
                }
                if(btnSortSpan.textContent === 'по дате') {
                    newBlockCard = [...blockCard].sort((a, b) => new Date(a.getAttribute('date').split(' ').reverse().join('-')) - new Date(b.getAttribute('date').split(' ').reverse().join('-')));
                    sortNode();
                }
                if(btnSortSpan.textContent === 'по умолчанию') {
                    newBlockCard = [...blockCard].sort((a, b) => a.getAttribute('index') - b.getAttribute('index'));
                    sortNode();
                }
            
            function sortNode() {
                for(let i = 0 ; i < mainContainerCard.children.length; i++) {
                    let node = mainContainerCard.replaceChild(newBlockCard[i], mainContainerCard.children[i]);
                    mainContainerCard.insertBefore(node, mainContainerCard.children[i].nextSibling);
                };

                    const blockCardSort = document.querySelectorAll('.block-card');
                    gridBlockCard(blockCardSort);
               
            };
            
        });
    });


    // close ul li
    function documentClick(e) {
        
        if(e.target !== btnSort && e.target !== btnSortSpan && e.target !== sortUl) {
            sortUl.classList.remove('sort-ul-activ');
        } 
    }; 
    document.addEventListener('click', documentClick);
   
};

btnSort.addEventListener('click', sortBlockCard);


// блок поиска 
const searchInput = document.querySelector('.search-block input');
const btnFind = document.querySelector('.btn-find');
const showAllCard = document.querySelector('.show-all-card');

searchInput.addEventListener('click', function() {
    document.querySelector('body').addEventListener('click', function(e) {
        if(e.target !== searchInput) {
            btnFind.style.visibility = 'hidden';
            searchInput.value = '';
        }
    });

    btnFind.style.visibility = 'visible';
    btnFind.addEventListener('click', inputListener);
});

function inputListener() {
    btnFindClick = true;
    let blockCardS = [];
   
    blockCard.forEach(e => {
        if(e.getAttribute('nameIsCard').toLowerCase().includes(searchInput.value.toLowerCase())) {
            e.classList.add('searchShowBlockCard');
            e.style.display = 'block';
            [...e.children[0].children].slice(0, -1).forEach(e => [...e.children].forEach(m => m.classList.add('searchShowDivImgMouse')));
            [...e.children[0].children].slice(0, -1).forEach(e => [...e.children].slice(0, -1).forEach(m => [...m.children].forEach(i => i.classList.add('searchShowDImgMouseImg'))));

            blockCardS.push(document.querySelector('.searchShowBlockCard'));
               
        }  else {
            e.style.display = 'none';
        }  

        // сброс фильтра
        let newBlockCard = [...blockCard].sort((a, b) => a.getAttribute('index') - b.getAttribute('index'));
            
        function sortNode() {
            btnSortSpan.textContent = 'по умолчанию';
            for(let i = 0 ; i < mainContainerCard.children.length; i++) {
                let node = mainContainerCard.replaceChild(newBlockCard[i], mainContainerCard.children[i]);
                mainContainerCard.insertBefore(node, mainContainerCard.children[i].nextSibling);
            };
        };
        sortNode();
       document.querySelectorAll('.searchShowBlockCard').forEach(m => m.classList.remove('searchShowBlockCard'));
        document.querySelectorAll('.searchShowDivImgMouse').forEach(m => m.classList.remove('searchShowDivImgMouse'));
        document.querySelectorAll('.searchShowDImgMouseImg').forEach(i => i.classList.remove('searchShowDImgMouseImg'));
   
    });

    gridBlockCard(blockCardS);
   
    // поднятие на вверх при поиске
    window.scrollTo(0, 0); 
    btnFind.style.visibility = 'hidden';
    searchInput.value = '';
    // кнопка показать все карточки
    showAllCard.style.visibility = 'visible';
    showAllCard.addEventListener('click', funShowAllCard);
        
};

// function показать все карточки
function funShowAllCard() {
        gridBlockCard(document.querySelectorAll('.block-card'));
        showAllCard.style.visibility = 'hidden';
};

// main-mouse-slider
const slideDotColumns = document.querySelectorAll('.slide-dot-columns-mouse');
const divImgAllImg = document.querySelectorAll('.div-img-mouse');
const slideDot = document.querySelectorAll('.slide-dot-mouse'); 

function mouseSlide(mouseBlock) {

for(let i = 0; i < mouseBlock.length; i++) {
    let slideDotColumns = Array.from(mouseBlock[i].children[mouseBlock[i].children.length -1].children);
    let divImgAllImg = Array.from(mouseBlock[i].children).slice(0, -1);
    

    for(let i = 0; i < slideDotColumns.length; i++) {
        slideDotColumns[i].addEventListener('mouseover', () => {
          
            slideDotColumns.forEach(e => [...e.children].forEach(e => {
                e.style.display = 'block';
            }));
            [...slideDotColumns[i].children][0].style.background = 'bisque'; 
                    divImgAllImg.forEach(e => {
                        e.classList.remove('div-img-activ-mouse');
                    });
                    divImgAllImg[i].classList.add('div-img-activ-mouse');
                       
        });   
    };  

    mouseBlock[i].addEventListener('mouseout', (e) => {
                
            slideDotColumns.forEach(e => [...e.children].forEach(e => {
                e.style.display = 'none';
                e.style.background = 'rgb(27, 24, 24)';
            }));

            divImgAllImg.forEach(e => e.classList.remove('div-img-activ-mouse'));
           divImgAllImg[0].classList.add('div-img-activ-mouse');
            });  

}

};

mouseSlide(blockSlideMouse);


// favourites and likes
const blockHeartLR = document.querySelectorAll('.block-heart-lr');
const mainContainerFavourites = document.querySelector('.main-container-favourites');
let mainContainerFavouritesArr = {};
let countFav = 0;
const squareFav = document.querySelector('.square-fav');
squareFav.textContent = countFav;
// heart
blockHeartLR.forEach(heartLR => {
    heartLR.addEventListener('click', function(e){
       //
        const mainAnimate = document.createElement('div');
        const centreHeartBlock = document.createElement('div');
        const centreHeartL = document.createElement('div');
        const centreHeartR = document.createElement('div');
        const centreHeartTriangle = document.createElement('div');
    
        mainAnimate.classList.add('mainAnimate');
        mainAnimate.style.cssText = `position: absolute;`;
        centreHeartBlock.style.cssText = `display: flex;
                                    position: relative;
                                    width: 30px;
                                    height: 30px;
                                    transform: rotate(45deg);`;
        centreHeartL.style.cssText = `  width: 16px;
                                            height: 16px;
                                            border-radius: 50%;
                                            background-color: red;`;
        centreHeartR.style.cssText = `position: absolute;
                                left: 12px;
                                width: 16px;
                                height: 16px;
                                border-radius: 50%;
                                background-color: red;`;
        centreHeartTriangle.style.cssText = ` position: absolute;
                                        top: 6px;
                                        left: 6px;
                                        transform: rotate(45deg);
                                        width: 16px;
                                        height: 16px;
                                        background-color: red;`;
        
        e.currentTarget.parentNode.parentNode.style.position = 'relative';
        e.currentTarget.parentNode.parentNode.append(mainAnimate);
        mainAnimate.append(centreHeartBlock);
        centreHeartBlock.append(centreHeartL);
        centreHeartBlock.append(centreHeartR);
        centreHeartBlock.append(centreHeartTriangle);

        centreHeartBlock.style.cssText += `animation: heartAnimateDeg 0.8s alternate infinite;`;
        mainAnimate.style.cssText += `animation: heartAnimateTop 3s;`; 
    
        setTimeout(() => {
            heartLR.parentNode.nextSibling.remove();
        }, 2300);
       
        if(!heartLR.classList.contains('heartWasClick')) {
            heartLR.classList.add('heartWasClick');
            mainContainerFavouritesArr[e.currentTarget.parentNode.parentNode.parentNode.getAttribute('nameIsCard')] = e.currentTarget.parentNode.parentNode.parentNode.cloneNode(true);
            countFav++;
            squareFav.textContent = countFav;
        } 
            // classList toggle blockCrd
        for(let key in mainContainerFavouritesArr) {
            mainContainerFavouritesArr[key].classList.add('block-card-fav');
            mainContainerFavouritesArr[key].classList.remove('block-card');
            mainContainerFavouritesArr[key].style.cssText = 'position: relative;';
        };
    });
});

// favourites 
const btnFavourites = document.querySelector('.favourites');
const headingFixedBlock = document.querySelector('.heading-fixed-block');

btnFavourites.addEventListener('click', function() {

    for(let key in mainContainerFavouritesArr) {
        mainContainerFavourites.append(mainContainerFavouritesArr[key]);  
        /// кнопку удаления избранного
        if(document.querySelectorAll('.btnRemoveCardFav').length < Object.keys(mainContainerFavouritesArr).length) {
            const btnRemoveCardFav = document.createElement('button');
            btnRemoveCardFav.textContent = 'remove';
            btnRemoveCardFav.classList.add('btnRemoveCardFav');
           
            [...mainContainerFavourites.children].forEach(blockCard => blockCard.append(btnRemoveCardFav));
        };      
    };

    document.querySelectorAll('.mainAnimate').forEach(e => e.remove());

    [...document.querySelector('.footer-container').children].forEach(e => e.style.display = 'none');
    mainContainerCard.style.display = 'none';
    mainContainerFavourites.style.display = 'grid';
    document.querySelector('.footer-slider').style.display = 'none';
    document.querySelector('.mainH1A').style.display = 'none';
    document.querySelector('.search-block').style.display = 'none';
    document.querySelector('.block-sort-card').style.display = 'none';
    
    if( !document.querySelector('.btnBackInMainFav')) {
        const btnBackInMainFav = document.createElement('button');
        btnBackInMainFav.classList.add('btnBackInMainFav');
        btnBackInMainFav.textContent = 'btnBackInMainFav';

        const createNameBlockFav = document.createElement('h1');
        createNameBlockFav.classList.add('createNameBlockFav');
        createNameBlockFav.textContent = `Favourites ${Object.keys(mainContainerFavouritesArr).length}`;
       

        headingFixedBlock.prepend(createNameBlockFav);
        headingFixedBlock.prepend(btnBackInMainFav);

        btnBackInMainFav.addEventListener('click', () => {
            document.querySelector('.btnBackInMainFav').remove();
            document.querySelector('.createNameBlockFav').remove();
            document.querySelectorAll('.btnRemoveCardFav').forEach(e => e.remove());

            document.querySelector('.mainH1A').style.display = 'block';
            document.querySelector('.search-block').style.display = '';
            [...document.querySelector('.footer-container').children].forEach(e => e.style.display = '');

            [...containerHeaderBlock.children].forEach(children => {
                if(children !== headingFixedBlock) {
                    children.style.display = '';
                }
            });

            [...mainContainer.children].forEach(e => e.style.display = '');
            backMobileMenu();
        });
          
    }

    [...containerHeaderBlock.children].forEach(children => {
        if(children !== headingFixedBlock) {
            children.style.display = 'none';
        }
    });
    if( document.querySelector('.createBlockBikeWrapper')) {
        document.querySelector('.createBtnBackInMain').remove();
        document.querySelector('.createBlockBikeWrapper').remove();
        document.querySelector('.createBikeNameH1').remove();
    }



    const blockSlideMouseF = document.querySelectorAll('.block-slide-mouse');
    blockSlideMouseF.forEach(blockImg => {
        blockImg.addEventListener('click', openBlockCardComment);
    });
    mouseSlide(blockSlideMouseF);
    // remove fav
    document.querySelectorAll('.btnRemoveCardFav').forEach(blockCardF => {
        blockCardF.addEventListener('click', (e) => {
            for(let key in mainContainerFavouritesArr) {
                if(e.currentTarget.parentNode.getAttribute('nameIsCard') === key) {
                    delete mainContainerFavouritesArr[key];
                    countFav--;
                    squareFav.textContent = countFav;
                }
            };
            for(let i of document.querySelectorAll('.block-card')) {
               
                if(i.getAttribute('nameIsCard') === e.currentTarget.parentNode.getAttribute('nameIsCard')) {
                    i.firstChild.lastChild.children[1].classList.remove('heartWasClick');
                }
            };
            
            document.querySelector('.createNameBlockFav').textContent = `Favourites ${Object.keys(mainContainerFavouritesArr).length}`;
            e.currentTarget.parentNode.remove();
           
        });
    });
     // modile    
     containerHeaderBlock.style.cssText = `background-color: '';`;
     document.querySelector('.heading-fixed-block').style.backgroundColor = '';
});

////////// create Block bike and park
const containerHeaderBlock = document.querySelector('.container-header-block');
const mainContainer = document.querySelector('.main-container');

/// open block comment ///////
function openBlockCardComment(e) {

    let funcParam = e.currentTarget.myParam; 

    [...containerHeaderBlock.children].forEach(children => {
        if(children !== headingFixedBlock) {
            children.style.display = 'none';
        }
    });

    if(document.querySelector('.btnBackInMainFav')) {
        document.querySelector('.btnBackInMainFav').remove();
        document.querySelector('.createNameBlockFav').remove();
    }
   

    if(document.querySelector('.createBtnBackInMainFav')) {
        document.querySelector('.createBtnBackInMainFav').remove();
    }
    // header
    document.querySelector('.heading-fixed-block h1').style.display = 'none';
    document.querySelector('.search-block').style.display = 'none';

    const createBtnBackInMain = document.createElement('button');
    createBtnBackInMain.classList.add('createBtnBackInMain');
    createBtnBackInMain.textContent = 'backInMainFromBlockBike';

    const createBikeNameH1 = document.createElement('h1');
    createBikeNameH1.classList.add('createBikeNameH1');
    
    headingFixedBlock.prepend(createBikeNameH1);
    headingFixedBlock.prepend(createBtnBackInMain);

    // main
    [...mainContainer.children].slice(0, -1).forEach(e => e.style.display = 'none');

    const createBlockBikeWrapper = document.createElement('div');
    createBlockBikeWrapper.classList.add('createBlockBikeWrapper');
    const createBlockBike = document.createElement('div');
    createBlockBike.classList.add('createBlockBike');
    const divImg = [...e.currentTarget.children].slice(0, -1);
    
    divImg.forEach(img => {
        const createDivImg = document.createElement('div');
        const createDivImgImg = document.createElement('img');
        createDivImg.classList.add('createDivImg');

        [...img.children].forEach(e => createDivImgImg.src = e.src);
        createDivImg.style.cssText = `max-width: 750px; height: 300px;`;
        createDivImgImg.style.cssText = `max-width: 100%; max-height: 100%;`;

        

        createDivImg.append(createDivImgImg);
        createBlockBike.append(createDivImg);
    });

    const commentBlockContainer = document.createElement('div');
    commentBlockContainer.classList.add('commentBlockContainer');
 
    // main and footer
    if(e.currentTarget.classList.contains('block-slide-mouse')) {
        createBikeNameH1.textContent = e.currentTarget.nextSibling.children[0].children[0].textContent;
        commentBlockContainer.setAttribute('objNameCom' ,e.currentTarget.parentNode.parentNode.getAttribute('nameIsCard'));
    } else {
        createBikeNameH1.textContent = e.currentTarget.nextSibling.children[0].textContent;
        commentBlockContainer.setAttribute('objNameCom' ,e.currentTarget.parentNode.getAttribute('nameIsCard'));
    }

    const commentBlockWrapper = document.createElement('div');
    commentBlockWrapper.classList.add('commentBlockWrapper');

    const date = new Date();
    const getMonth = date.toLocaleString('en', { month: 'long' });
    const getDataNumber = date.getDate();
    const getYear = date.getFullYear();
    const getHours = date.getHours();
    const getMinutes = date.toTimeString().substring(3, 5);
    let dataRes = `${getDataNumber} ${getMonth} ${getYear} in ${getHours}:${getMinutes}`;
    let countComment = 0;
    for(let key in funcParam) {
       // console.log(mainObjServer[key].comment);
        if(commentBlockContainer.getAttribute('objNameCom') === key) {
            funcParam[key].comment.forEach(arr => {
                commentBlockWrapper.insertAdjacentHTML('beforeend', `
                    <div class="comment-text-new"> 
                        <div class="block-row"> 
                            <div class="time-and-name-user">
                                <p> ${arr[0]} </p>
                                <time> ${arr[1]} </time>
                            </div>
                            <p class="user-comment">${arr[2]}</p>
                            
                            <div class="containerLikeComment">
                                <div class="likeComment" nameUserComlike="${arr[0]}" dateUserCom="${arr[1]}">
                                    <div class="finger"></div>
                                    <div class="armComment">
                                        <div class="sleeveHand"></div>
                                        <div class="fist"></div>
                                    </div>
                                </div>
                                <div class="likeCountComm">${arr[3]}</div>
                        
                                <div class="disLikeComment" nameUserComDis="${arr[0]}" dateUserCom="${arr[1]}">
                                    <div class="disFinger"></div>
                                    <div class="disArmComment">
                                        <div class="disSleeveHand"></div>
                                        <div class="disFist"></div>
                                    </div>
                                </div>
                                <div class="disLikeCountComm">${arr[4]}</div>
                                <button type="button" class="btnAnswerComment">Answer</button>
                            </div>
                        </div>
                    </div>            
                `);
            });
            countComment = funcParam[key].comment.length;
        };
    };
    
    createBlockBikeWrapper.append(createBlockBike);

    // description bike
        const createBikeDescription = document.createElement('div');
        createBikeDescription.classList.add('createBikeDescription');

        const descriptionNameBike = document.createElement('h3');
            //  description 
        for(let key in funcParam) {
                
            if(funcParam[key].description.length > 0) {
                descriptionNameBike.textContent = key + ' descritpion';

                const moreBtnComment = document.createElement('button');
                moreBtnComment.classList.add('moreBtnComment');
                moreBtnComment.textContent = 'more';
                
        
                const descriptionUl = document.createElement('ul');
                descriptionUl.classList.add('descriptionUl');
                
                funcParam[key].description.forEach(e => {
                    const liDescriptionBike = document.createElement('li');
                    liDescriptionBike.textContent = e;
                    descriptionUl.append(liDescriptionBike);
                });
                
                createBikeDescription.append(descriptionNameBike);
                createBikeDescription.append(descriptionUl);  
                createBikeDescription.append(moreBtnComment);
                break;
            } else {
                descriptionNameBike.textContent = commentBlockContainer.getAttribute('objNameCom') + ' no descritpion';
                createBikeDescription.append(descriptionNameBike);
            }
        };

        
    createBlockBikeWrapper.append(createBikeDescription);

    
    
    //commentBlockContainer.append(commentAddWrapper);
    commentBlockContainer.insertAdjacentHTML('beforeend', `
        <div class="commentAddWrapper">

            <div class="commentSortCount">
                <h3 class="Comments-h3Count">Comments <span>${countComment}</span></h3>
                <div class="commentSort">Sort Comment
                    <ul>
                        <li>date new</li>
                        <li>popular</li>
                    </ul>
                </div>
            </div>

            <form class="comment-blog-form" method="post">
                <div class="comment-blok-name">
                    <label for="userNameComment" class="label-text">Comment as:</label>
                    <input type="text" id="userNameComment" placeholder="Your Name" class="input-field input-your-name">
                </div>

                <div class="comment-blok-send">
                    <label class="label-text" for="sendCommentText">Your comment</label>
                    <textarea name="comment" id="sendCommentText" placeholder="Your comment" rows="1" class="input-field textarea"></textarea>
                </div>


                <div class="comment-add-cancel-btn">
                    <button type="button" class="comment-cancel-btn">Cancel</button>
                    <button type="button" class="comment-add-btn">Post comment</button>
                </div>
            </form>

        </div>
    `);
    commentBlockContainer.append(commentBlockWrapper);
    createBlockBikeWrapper.append(commentBlockContainer);
    mainContainer.append(createBlockBikeWrapper);


    // // discription more
        if(document.querySelector('.moreBtnComment')) {
            const moreBtnCommentFound = document.querySelector('.moreBtnComment');

            moreBtnCommentFound.addEventListener('click', () => {
                document.querySelector('.descriptionUl').style.display = 'block';
                
                const lessBtnComment = document.createElement('button');
                lessBtnComment.classList.add('lessBtnComment');
                lessBtnComment.textContent = 'less';
        
                document.querySelector('.createBikeDescription').replaceChild(lessBtnComment, moreBtnCommentFound);
        
                document.querySelector('.lessBtnComment').addEventListener('click', () => {
                    document.querySelector('.descriptionUl').style.display = 'none';
                    
                    const moreBtnComment = document.createElement('button');
                    moreBtnComment.classList.add('moreBtnComment');
                    moreBtnComment.textContent = 'more';
            
                    document.querySelector('.createBikeDescription').replaceChild(moreBtnCommentFound, document.querySelector('.lessBtnComment'));
                });
            });
        }

    /////  slider
    document.querySelector('.close-slider').addEventListener('click', closeMainSlide);
    document.querySelectorAll('.createDivImg').forEach(blockImg => {
        blockImg.addEventListener('click', createDivImgClick);
    });

    //// input comment
    document.querySelectorAll('.input-field').forEach(input => {
        input.addEventListener('focusin', () => {
            input.style.borderBottom = '3px rgb(217,217,218) solid';
                document.querySelectorAll('.comment-add-cancel-btn button').forEach(btn => btn.style.display = 'inline');     
        });
        input.addEventListener('focusout', () => {
            input.style.borderBottom = '1px rgb(217,217,218) solid';   
        });
    });
    document.querySelector('.comment-cancel-btn').addEventListener('click', () => {
        document.querySelectorAll('.input-field').forEach(input => input.style.borderBottom = '1px rgb(217,217,218) solid');
            
        document.querySelector('#userNameComment').value = '';
        document.querySelector('#sendCommentText').value = '';
        document.querySelectorAll('.comment-add-cancel-btn button').forEach(btn => btn.style.display = 'none');
    });
    document.querySelector('.comment-add-btn').addEventListener('click', () => {
       
        const userNameValue = document.querySelector('#userNameComment');
        const sendCommentValue = document.querySelector('#sendCommentText');

        if(userNameValue.value === '') {
            userNameValue.value = 'anonymous';
        }
        if(sendCommentValue.value === '') {
            sendCommentValue.value = 'no comment';
        }

        commentBlockWrapper.insertAdjacentHTML('afterbegin', `
            <div class="comment-text-new"> 
                <div class="block-row"> 
                    <div class="time-and-name-user">
                        <p> ${userNameValue.value} </p>
                        <time> ${dataRes} </time>
                    </div>
                    <p class="user-comment">${sendCommentValue.value}</p>

                    <div class="containerLikeComment">
                        <div class="likeComment"  nameUserComlike="${userNameValue.value}" dateUserCom="${dataRes}">
                            <div class="finger"></div>
                            <div class="armComment">
                                <div class="sleeveHand"></div>
                                <div class="fist"></div>
                            </div>
                        </div>
                        <div class="likeCountComm">0</div>
                
                        <div class="disLikeComment" nameUserComDis="${userNameValue.value}" dateUserCom="${dataRes}">
                            <div class="disFinger"></div>
                            <div class="disArmComment">
                                <div class="disSleeveHand"></div>
                                <div class="disFist"></div>
                            </div>
                        </div>
                        <div class="disLikeCountComm">0</div>
                        <button type="button" class="btnAnswerComment">Answer</button>
                    </div>
                </div>
            </div>            
        `);

        for(let key in funcParam) {  
            if(commentBlockContainer.getAttribute('objNameCom') === key) {
                funcParam[key].comment.unshift([userNameValue.value, dataRes, sendCommentValue.value, 0, 0]); 
            }
        };
        
        if(document.querySelector('.userNameExit')) {
            userNameValue.value = document.querySelector('.userNameExit').getAttribute('usernameEmpty');
        } else {
            userNameValue.value = '';
        }
        // coutn comment
        countComment++;
        document.querySelector('.Comments-h3Count span').textContent = countComment;
        sendCommentValue.value = '';
        document.querySelectorAll('.comment-add-cancel-btn button').forEach(btn => btn.style.display = 'none');
        likeDisLikeComment();
    });

    if(document.querySelector('.userNameExit')) {
        document.querySelector('#userNameComment').value =  document.querySelector('.userNameExit').getAttribute('usernameEmpty');
        document.querySelector('#userNameComment').setAttribute('readonly', '');
    }

    //// like disLike comment 
    function likeDisLikeComment() {
        document.querySelectorAll('.likeComment').forEach(like => {
            like.addEventListener('click', (e) => {
                like.nextElementSibling.textContent ++;

                 for(let key in funcParam) {
                    if(document.querySelector('.commentBlockContainer').getAttribute('objNameCom') === key) {
                        funcParam[key].comment.forEach(arr => {

                            if(arr[0] === e.currentTarget.getAttribute('nameUserComLike') && arr[1] === e.currentTarget.getAttribute('dateUserCom')){
                                arr[3] += 1;
                            }
                        })
                        
                    }
                 }
            });
        });    
        document.querySelectorAll('.disLikeComment').forEach(disLike => {
            disLike.addEventListener('click', (e) => {
                disLike.nextElementSibling.textContent ++;

                for(let key in funcParam) {
                    if(document.querySelector('.commentBlockContainer').getAttribute('objNameCom') === key) {
                        funcParam[key].comment.forEach(arr => {

                            if(arr[0] === e.currentTarget.getAttribute('nameUserComDis') && arr[1] === e.currentTarget.getAttribute('dateUserCom')){
                                arr[4] += 1;
                            }
                        })
                        
                    }
                 }
            });
        });
    };
    likeDisLikeComment();
    
    // mobile menu
    if(document.body.clientWidth < '770') {
        document.querySelector('.heading-fixed-block').style.display = 'flex';
        document.querySelector('.heading-fixed-block').style.position = 'fixed';
    }
    document.querySelector('.mobile-btn').style.display = 'none';
    containerHeaderBlock.style.cssText = `background-color: '';`;
    document.querySelector('.heading-fixed-block').style.backgroundColor = '';
        
    if(document.body.clientWidth < '770') {
            document.querySelector('.createBlockBike').style.cssText = `display: grid; gap: 20px; grid-template-columns: repeat(1, 1fr); justify-items: center;`;
            document.querySelectorAll('.createDivImg').forEach(e => e.style.height = '');
    } else  {
        document.querySelector('.createBlockBike').style.cssText = `display: grid; gap: 20px; grid-template-columns: repeat(2, 1fr); justify-items: center;`;
        document.querySelectorAll('.createDivImg').forEach(e => e.style.height = '300px');
    }       
    let heightFixedBlock = document.querySelector('.heading-fixed-block').clientHeight;
    document.querySelector('.createBlockBike').style.marginTop = `${heightFixedBlock}px`;   
    // footer
    [...document.querySelector('.footer-container').children].forEach(e => e.style.display = 'none');

    /////  slider
    createBtnBackInMain.addEventListener('click', btnBackInMain);
    // поднятие на вверх при поиске
    window.scrollTo(0, 0); 

};



///// create slider
function clickMainSlide(counAbout = 0) {
    const BTN_RIGHT = document.querySelector('.right-btn');
    const SLIDE_MOVIE_IMG = document.querySelectorAll('.slide-movie');
    const BTN_LEFT = document.querySelector('.left-btn');
    const CURRENT_SLIDE = document.querySelector('.current-slide');
    const SLIDE_LENGTH = document.querySelector('.slide-length');

    CURRENT_SLIDE.innerHTML = counAbout + 1;
    SLIDE_LENGTH.textContent = `/${SLIDE_MOVIE_IMG.length}`;

    function removeActiveSlide() {
        SLIDE_MOVIE_IMG.forEach(item => {
            item.classList.remove('active-slide');
        });  
        SLIDE_MOVIE_IMG[counAbout].classList.add('active-slide');
    };

    BTN_RIGHT.addEventListener('click', function(){
        
        counAbout++;
        CURRENT_SLIDE.textContent =  counAbout + 1;
        if(counAbout === SLIDE_MOVIE_IMG.length) {
            counAbout = 0;
            CURRENT_SLIDE.textContent =  counAbout + 1;
        }
        removeActiveSlide();
    });

    BTN_LEFT.addEventListener('click', function(){
        if(counAbout === 0) {
            counAbout = SLIDE_MOVIE_IMG.length -1;
            CURRENT_SLIDE.textContent =  counAbout + 1;
        } else {
            counAbout--;
            CURRENT_SLIDE.textContent =  counAbout + 1;
        }
        removeActiveSlide();
    });
};

function createDivImgClick(e) {
    //убираем скролл 
    document.querySelector('body').style.overflow = 'hidden';
    let countSend = 0;
    document.querySelector('.main-slider').style.display = 'block';
    
    [...document.querySelectorAll('.createDivImg')].forEach(divImg => {
        [...divImg.children].forEach(img => {
            const slideMovie = document.createElement('div');
            const slideMovieIMG = document.createElement('img');
            slideMovie.classList.add('slide-movie');

            slideMovieIMG.src = img.src;
            slideMovie.append(slideMovieIMG);
            document.querySelector('.sliders').append(slideMovie);
        });
    });
        const slideMovie = document.querySelectorAll('.slide-movie');
        for(let i = 0; i < slideMovie.length; i++) {

            for(let j = 0; j < slideMovie[i].children.length; j++) {
                
                if([...e.currentTarget.children][j].src === slideMovie[i].children[j].src) {
                    slideMovie[i].classList.add('active-slide');
                    countSend = i;

                } else {
                    slideMovie[i].classList.add('hide');
                }     
            };
        };

    clickMainSlide(countSend);
};

function closeMainSlide() {

    document.querySelectorAll('.slide-movie').forEach(e => e.remove());
    document.querySelector('.main-slider').style.display = 'none';
    //убираем скролл 
    document.querySelector('body').style.overflow = '';
};


function btnBackInMain(h) {
   
    document.querySelector('.createBtnBackInMain').remove();
    document.querySelector('.createBikeNameH1').remove();
    document.querySelector('.createBlockBikeWrapper').remove();
    
    document.querySelector('.mainH1A').style.display = 'block';
    document.querySelector('.search-block').style.display = '';

    [...containerHeaderBlock.children].forEach(children => {
        if(children !== headingFixedBlock) {
            children.style.display = '';
        }
    });
    
    [...mainContainer.children].forEach(e => e.style.display = '');
    [...document.querySelector('.footer-container').children].forEach(e => e.style.display = '');
    backMobileMenu();
};

blockSlideMouse.forEach(blockImg => {
    blockImg.myParam = mainObjServer;
    blockImg.addEventListener('click', openBlockCardComment, false);
    
});

document.querySelectorAll('.imgParkBlock').forEach(blockImg => {
    blockImg.myParam = footerObjServer;
    blockImg.addEventListener('click', openBlockCardComment, false);
});

 // mobile menu
function backMobileMenu() {
    if(document.body.clientWidth < '770') {
        document.querySelector('.heading-fixed-block').style.display = 'none';
        document.querySelector('.heading-fixed-block').style.position = 'static';
    } else {
        containerHeaderBlock.style.cssText = `position: ''; z-index: ''; width: ''; `;
    }
    if(document.querySelector('.mobileBtnClose')) {
        document.querySelector('.mobileBtnClose').remove();
    }
};
