////////////////// theme
const btnTopicWrap = document.querySelector('.btn-topic-wrap');
const btnTopicCircle = document.querySelector('.btn-topic-circle');
const linkTheme = document.querySelector('#linkTheme');

btnTopicWrap.addEventListener('click', function() {

    if(getComputedStyle(btnTopicCircle).left === '-8px') {
      
        linkTheme.href = '../готовый-проект/css/dark-theme.css';
    } else if(getComputedStyle(btnTopicCircle).left === '20px') {

        linkTheme.href = '../готовый-проект/css/light-theme.css';
    }
    saveTheme();
});

function saveTheme() {
   
    localStorage.setItem('saveThemeDL', linkTheme.href);
};

function showSaveTheme() {
    if(localStorage.getItem('saveThemeDL') === null) {
        linkTheme.href = '../готовый-проект/css/light-theme.css';
    } else {
        linkTheme.href = localStorage.getItem('saveThemeDL');
    }
};

showSaveTheme();


////////////////// блок выбора города
const choiseCityBtn = document.querySelector('.choise-city');
const choiseCityUl = document.querySelector('.choise-city ul');
const choiseCityLi = document.querySelectorAll('.choise-city li');
const cityLi = document.querySelector('.cityLi');

choiseCityBtn.addEventListener('click', choiseCity);
function choiseCity() {
    choiseCityUl.classList.toggle('choise-hide-ul');

    choiseCityLi.forEach(li => {
        li.addEventListener('click',  () => {
           cityLi.textContent = li.textContent;
                       //получаем погоду
           const answerWeather = async function() {
            const apiKey = '424138bd1df061d0694b6ebce42f3ff7';
            const apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityLi.textContent}&appid=${apiKey}&units=metric`;
            const answerWeather = await fetch(apiUrlWeather);
            const answerWeatherJSON = await answerWeather.json();

            return answerWeatherJSON.main.temp;


        };
        answerWeather().then((temp) => document.querySelector('.tempLi').textContent = temp);
        })
    })
};

// погода и локация
const geoPos = navigator.geolocation.getCurrentPosition(geoAvaliable, geoNotAvailable);

function geoAvaliable(position) {
    
    const latu = position.coords.latitude;
    const long = position.coords.longitude;
    const apiKey = '424138bd1df061d0694b6ebce42f3ff7';
    const geoApiUrlCity = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latu}&longitude=${long}&localityLanguage=en`;
    // map
    //const iframeMap = document.querySelector('iframe');
    //iframeMap.src = `https://www.openstreetmap.org/export/embed.html?bbox=${long}%2C${latu}&layer=mapnik`;
    const answerCity = async function () {
        // получаем город
        const answerCity = await fetch(geoApiUrlCity);
        const answerCityJSON = await answerCity.json();
        cityLi.textContent = answerCityJSON.city;
        return answerCityJSON.city;
    };
    answerCity().then((city) => {
        const answerWeather = async function() {
            //получаем погоду
            const apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            const answerWeather = await fetch(apiUrlWeather);
            const answerWeatherJSON = await answerWeather.json();
            return answerWeatherJSON.main.temp;

        };
        answerWeather().then((temp) => document.querySelector('.tempLi').textContent = temp);
    });
};
    

function geoNotAvailable() {
    //  console.log('false');
};

/////////// accaunt user
const containerHeaderBlockH = document.querySelector('.container-header-block');
const mainContainerH = document.querySelector('.main-container');

const btnEntryAcc = document.querySelector('.btn-entry-acc');
btnEntryAcc.addEventListener('click', () => {
   
    document.querySelector('html').style.cssText = `background: url(../img/backGround/dart-t2.jpg); background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;`;
    [...containerHeaderBlockH.children].forEach(e => e.style.display = 'none');
    [...mainContainerH.children].forEach(e => e.style.display = 'none');
    [...document.querySelector('.footer-container').children].forEach(e => e.style.display = 'none');

    const createBlockEntry = document.createElement('div');
    //createBlockEntry.style.cssText = `display: flex;   justify-content: center;  flex-direction: column; align-items: center;`;
    createBlockEntry.classList.add('createBlockEntry');

    createBlockEntry.insertAdjacentHTML('afterbegin', `
    <button type="button" class="btnBackInMain btnAccAll">btnBackInMain</button>

    <label for="inputLogin" class="label-inputLogin">inputLogin</label>
    <input type="text" id="inputLogin" placeholder="inputLogin" class="inputLogin inputAccaunt">

    <label for="inputPassword" class="label-inputPassword">inputPassword</label>
    <input type="text" id="inputPassword" placeholder="inputPassword" class="inputPassword inputAccaunt">

    <button type="button" class="btnEntry btnAccAll">btnEntry</button>
    <button type="button" class="btnAccRegistr btnAccAll">No accaunt</button>
    
    `);

    containerHeaderBlockH.append(createBlockEntry);

    document.querySelector('.btnEntry').addEventListener('click', () => {
        let inputLoginValue = document.querySelector('#inputLogin').value.toUpperCase();
        let inputPasswordValue = document.querySelector('#inputPassword').value.toUpperCase();
        let alertPassowordLogin = true;
        //console.log(localStorage.getItem('key') === null || localStorage.length === 0);
        if(inputLoginValue === '' || inputPasswordValue === '') {
            alertPassowordLogin = true;
            alert('empty acc or password');
        } else if(localStorage.length === 0) {
            alert('no accaunt');
        } else {
            for(let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
            
                if(key.toUpperCase().includes(inputLoginValue) && localStorage.getItem(key).includes(inputPasswordValue)) {
                    
                    [...createBlockEntry.children].forEach(e => e.remove());
                    const helloUser = document.createElement('div');
                    helloUser.textContent = `Hello ${inputLoginValue} !!!`;
                    helloUser.classList.add('inputAccaunt');
                    createBlockEntry.append(helloUser);

                    const greetingUser = document.querySelector('.greetingUser');
                    let greetingUserCut = greetingUser.textContent.split(' ').shift();
                    greetingUser.textContent = greetingUserCut  + ' ' + inputLoginValue + '!';
                    
                    setTimeout(() => {
                        setTimeInMain(inputLoginValue);
                    
                    }, 2000);

                    alertPassowordLogin = true;
                    break;
                } else {
                    alertPassowordLogin = false;
                }
            }
        }

        if(!alertPassowordLogin) {
            alert('passoword or login errow')
        } 
        
        
        
    });


    document.querySelector('.btnAccRegistr').addEventListener('click', () => {
        [...createBlockEntry.children].slice(1).forEach(e => e.remove());
        createBlockEntry.insertAdjacentHTML('beforeend', `
    
        <label for="inputLogin" class="label-inputLogin">inputLogin</label>
        <input type="text" id="inputLogin" placeholder="inputLogin" class="inputLogin inputAccaunt">

        <label for="inputMail" class="label-inputMail">inputMail</label>
        <input type="text" id="inputMail" placeholder="inputMail" class="inputMail inputAccaunt">
    
        <label for="inputPasswordCreateOne" class="label-inputPasswordCreateOne">inputPasswordCreateOne</label>
        <input type="text" id="inputPasswordCreateOne" placeholder="inputPasswordCreateOne" class="inputPasswordCreateOne inputAccaunt">
    
        <label for="inputPasswordCreateTwo" class="label-inputPasswordCreateTwo">inputPasswordCreateTwo</label>
        <input type="text" id="inputPasswordCreateTwo" placeholder="inputPasswordCreateTwo" class="inputPasswordCreateTwo inputAccaunt">

        <button type="button" class="btnCreateAccaunt btnAccAll">btnCreateAccaunt</button>
        
        `);

        document.querySelector('.btnCreateAccaunt').addEventListener('click', () => {
            const inputLoginValueReg = document.querySelector('.inputLogin').value;
            const inputPassOne = document.querySelector('.inputPasswordCreateOne').value;
            const inputpassTwo = document.querySelector('.inputPasswordCreateTwo').value;
         
            if(inputLoginValueReg === '' || inputpassTwo === '') {
                alert('empty pass or login');
            }
            else if(inputPassOne === inputpassTwo) {
                localStorage.setItem(inputLoginValueReg, inputPassOne);

                setInterval(() => {
                    [...createBlockEntry.children].forEach(e => e.remove());
                    const helloUserReg = document.createElement('div');
                    helloUserReg.textContent = `Hello new user ${inputLoginValueReg} !!!`;
                    helloUserReg.classList.add('inputAccaunt');
                    createBlockEntry.append(helloUserReg);
                }, 0);
               
                setTimeout(() => {

                    setTimeInMain(inputLoginValueReg);
                }, 2000);

            } else {
                alert('password mistake');
            }
        });
    });

    function setTimeInMain(inputLoginValueOrReg) {
        createBlockEntry.remove();
                    [...containerHeaderBlockH.children].forEach(e => e.style.display = '');
                    [...mainContainerH.children].forEach(e => e.style.display = '');
                    const userNameExit = document.createElement('button');
                    userNameExit.classList.add('userNameExit');
                    userNameExit.textContent = 'Exit';
                    userNameExit.setAttribute('usernameEmpty', inputLoginValueOrReg);
                    document.querySelector('.block-btn-topik-new-year').replaceChild(userNameExit, btnEntryAcc);

                    backInmain();
                    document.querySelector('.userNameExit').addEventListener('click', () => {
                        document.querySelector('html').style.cssText = `background: url(../img/backGround/dart-t1.jpg); background-repeat: no-repeat;
                        background-position: center;
                        background-attachment: fixed;
                        background-size: cover;`;
                        [...containerHeaderBlockH.children].forEach(e => e.style.display = 'none');
                        [...mainContainerH.children].forEach(e => e.style.display = 'none');

                        containerHeaderBlockH.insertAdjacentHTML('afterbegin', `
                       <div class="exit-user-acc">
                            <button type="button" class="btnBackInMain btnAccAll">btnBackInMain</button>
                            <button type="button" class="btnExitAcc btnAccAll">Exit</button>
                       </div>
                        `);

                        document.querySelector('.exit-user-acc').style.cssText = `display: flex; justify-content: center; padding-top: 80px;`;

                        document.querySelector('.btnBackInMain').addEventListener('click', backInmain);

                        document.querySelector('.btnExitAcc').addEventListener('click', () => {
                            document.querySelector('.greetingUser').textContent = 'Hello user no name!';
                            document.querySelector('.block-btn-topik-new-year').replaceChild(btnEntryAcc, userNameExit);
                            backInmain();
                        });
                        [...document.querySelector('.footer-container').children].forEach(e => e.style.display = 'none');
                         // modile    
                        containerHeaderBlockH.style.cssText = `background-color: '';`;
                        document.querySelector('.heading-fixed-block').style.backgroundColor = '';
                    });
    }

    function backInmain() {
        document.querySelector('html').style.background = '';
        /// если мы в blockCreateBike
        if(document.querySelector('.createBtnBackInMain')) {
            document.querySelector('.createBikeNameH1').remove();
            document.querySelector('.createBtnBackInMain').remove();
            document.querySelector('.createBlockBikeWrapper').remove();
        }  
          // если мы в  fav
        if(document.querySelector('.btnBackInMainFav')) {
            
            document.querySelector('.btnBackInMainFav').remove();
            document.querySelector('.createNameBlockFav').remove();
        }

        if(document.querySelector('.exit-user-acc')) {
            document.querySelector('.exit-user-acc').remove();
        }

        //document.querySelector('.main-container-favourites').style.display = 'none';
        [...document.querySelector('.heading-fixed-block').children].forEach(children => {
            children.style.display = '';
        });
        [...containerHeaderBlockH.children].forEach(e => e.style.display = '');
        [...mainContainerH.children].forEach(e => e.style.display = '');
        [...document.querySelector('.footer-container').children].forEach(e => e.style.display = '');
        createBlockEntry.remove();

        // modile
        if(document.querySelector('.mobileBtnClose')) {

            document.querySelector('.mobileBtnClose').remove();
        }   
    };
     // modile    
    containerHeaderBlockH.style.cssText = `background-color: '';`;
    document.querySelector('.heading-fixed-block').style.backgroundColor = '';

    document.querySelector('.btnBackInMain').addEventListener('click', backInmain);
});

/// mobile menu
const mobileBtn = document.querySelector('.mobile-btn');

mobileBtn.addEventListener('click', () => {
    const mobileBtnClose = document.createElement('button');
    mobileBtnClose.textContent = 'X';
    mobileBtnClose.classList.add('mobileBtnClose');
    containerHeaderBlockH.prepend(mobileBtnClose);
    containerHeaderBlockH.style.cssText = `position: fixed; z-index: 15; width: 100%; background-color: rgb(38, 9, 66); top: 0;`;
    mobileBtn.style.display = 'none';

    document.querySelector('.heading-fixed-block').style.backgroundColor = 'rgb(38, 9, 66)';

    mobileOn();

    mobileBtnClose.addEventListener('click', () => {
        mobileBtnClose.remove();
        containerHeaderBlockH.style.cssText = `position: ''; z-index: ''; width: '';`;
        mobileBtn.style.display = 'block';

            containerHeaderBlockH.style.cssText = `background-color: '';`;
            document.querySelector('.heading-fixed-block').style.backgroundColor = '';
        
        mobileOff();
    });
});



window.addEventListener('resize', () => {
    if(window.getComputedStyle(document.querySelector('.main-container-card')).display !== 'none') {
        if(document.body.clientWidth < '770') {
            mobileOff();
            
            if(document.querySelector('.createBlockBike')) {
                document.querySelector('.createBlockBike').style.cssText = `grid-template-columns: '';`;
            }
           
            if(window.getComputedStyle(mobileBtn).display === 'none') {
                containerHeaderBlockH.style.cssText = `position: ''; z-index: ''; width: ''; `;
                mobileBtn.style.display = 'block';
            } 
            if(document.querySelector('.mobileBtnClose')) {
                document.querySelector('.mobileBtnClose').remove();
            }
           
        } else {
            mobileOn();
            if(window.getComputedStyle(mobileBtn).display === 'block') {
                containerHeaderBlockH.style.cssText = `position: ''; z-index: ''; width: ''; `;
                mobileBtn.style.display = 'none';
            }
            if(document.querySelector('.mobileBtnClose')) {
                document.querySelector('.mobileBtnClose').remove();
                
            }
            document.querySelector('.heading-fixed-block').style.backgroundColor = '';
        }
    } 
    // createBike menu

        if(document.body.clientWidth < '770' && document.querySelector('.createBlockBike')) {
            document.querySelector('.createBlockBike').style.cssText = `display: grid; gap: 20px; grid-template-columns: repeat(1, 1fr); justify-items: center;`;
            document.querySelectorAll('.createDivImg').forEach(e => e.style.height = '');
        
        } else if(document.querySelector('.createBlockBike')) {
            document.querySelector('.createBlockBike').style.cssText = `display: grid; gap: 20px; grid-template-columns: repeat(2, 1fr); justify-items: center;`;
            document.querySelectorAll('.createDivImg').forEach(e => e.style.height = '300px');
        }
        if(document.querySelector('.createBlockBike')) {
            let heightFixedBlock = document.querySelector('.heading-fixed-block').clientHeight;
            document.querySelector('.createBlockBike').style.marginTop = `${heightFixedBlock}px`;
        }
        if(window.getComputedStyle(document.querySelector('.mobile-btn')).display === 'block') {
            document.querySelector('.block-sort-card').style.marginTop = '50px';
         }  else {
            document.querySelector('.block-sort-card').style.marginTop = '0px';
        }        
       
});


function mobileOn() {
    document.querySelector('.heading-fixed-block').style.display = 'flex';
    document.querySelector('.heading-fixed-block').style.position = 'fixed';
    document.querySelector('.weather-block').style.display = 'block';
    document.querySelector('.welcome-block').style.display = 'grid';
};

function mobileOff() {
    document.querySelector('.heading-fixed-block').style.display = 'none';
    document.querySelector('.weather-block').style.display = 'none';
    document.querySelector('.welcome-block').style.display = 'none';
};