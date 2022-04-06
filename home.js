let data = [

    {
        id: 1,
        name: 'Alex',
        username: 'alex98',
        islastseen: '12:21',
        img: 'https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png',
        text: 'How are you doing ?',
        chatdata: ['Salom alex', 'alex qachon kelasan'],

    },
    {
        id: 2,
        name: 'John',
        username: 'john21',
        islastseen: '07:21',
        img: 'https://cdn-icons-png.flaticon.com/512/236/236832.png',
        text: 'John is typing ...',
        chatdata: ['Salom John', ' qachon kelasan']
    },

    {
        id: 3,
        name: 'Micheal',
        username: 'michael',
        islastseen: 'online',
        img: 'https://cdn-icons-png.flaticon.com/512/219/219986.png',
        text: 'Michael is typing ...',
        chatdata: ['Salom Micahel', 'Yaxshimisan ?', "Hi", 'Hello']
    },
    {
        id: 4,
        name: 'Travor',
        username: 'travor',
        islastseen: '12:21',
        img: 'https://brithouse.ru/wp-content/uploads/2015/07/flat-face-icon-23.png',
        text: 'How are you doing ?',
        chatdata: ['Salom TRavor', 'Justin qachon kelasan']
    },
    {
        id: 5,
        name: 'Bot Father',
        username: 'botfather',
        islastseen: 'bot',
        img: 'http://lubiteliyablok.com/wp-content/uploads/2015/07/4.2.png',
        text: 'How are you doing ?',
        chatdata: ['Salom Bot ', 'Bot qachon kelasan']
    },
    {
        id: 6,
        name: 'Vk Music Bot',
        username: 'vkmbot',
        islastseen: 'bot',
        img: 'https://botostore.com/netcat_files/22/26/preview_26957_1542499501.jpg',
        text: 'How are you doing ?',
        chatdata: ['Salom Musiqa', 'Justin qachon kelasan']
    },
    {
        id: 7,
        name: 'DC Official Group',
        username: 'dc',
        islastseen: 'group',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMknCf_bq9BM5WOroIwGJvMuFooJcOhTvulRlgNsskfLRrWFERBOwTiYeZPtGIu5R_Atk&usqp=CAU',
        text: 'How are you doing ?',
        chatdata: ['Salom Dc', 'Dc qachon kelasan']
    },
    {
        id: 8,
        name: 'Alex',
        username: 'alex98',
        islastseen: '12:21',
        img: 'https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png',
        text: 'How are you doing ?',
        chatdata: ['Salom aliex', 'alix qachon kelasan']
    },
    {
        id: 9,
        name: 'Jastin',
        username: 'jastin12',
        islastseen: '12:32',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7gjz_tqhCGxPjl-J099B6Ll8LDZAkNqXpvo6gXoc-3dTYzCf4lvxx1T_lJa7BFP1G2g&usqp=CAU',
        text: 'John Doe ?',
        chatdata: ['Salom Jastin', 'Justin qachon kelasan']
    },
    {
        id: 10,
        name: 'Lisa',
        username: 'lisa007',
        islastseen: '12:21',
        img: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-6.jpg',
        text: 'How are you doing ?',
        chatdata: ['Salom lisa', 'lisa qachon kelasan']
    },
    {
        id: 11,
        name: 'LiLa',
        username: 'lila12',
        islastseen: '12:21',
        img: 'https://bak.kg/wp-content/uploads/2020/04/219969.png',
        text: 'Im Lila ?',
        chatdata: ['Salom lila', 'lila qachon kelasan']
    },
    {
        id: 12,
        name: 'Vk Music Bot',
        username: 'vkmbot',
        islastseen: 'bot',
        img: 'https://botostore.com/netcat_files/22/26/preview_26957_1542499501.jpg',
        text: 'How are you doing ?',
        chatdata: ['Musiqalar']
    },
    {
        id: 13,
        name: 'DC Official Group',
        username: 'dc',
        islastseen: 'group',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMknCf_bq9BM5WOroIwGJvMuFooJcOhTvulRlgNsskfLRrWFERBOwTiYeZPtGIu5R_Atk&usqp=CAU',
        text: 'How are you doing ?',
        chatdata: ['Digital city yangi eloni']
    },
    {
        id: 14,
        name: 'Alex',
        username: 'alex98',
        islastseen: '12:21',
        img: 'https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png',
        text: 'How are you doing ?',
        chatdata: ['Salom alex', 'alex qachon kelasan']
    },
    {
        id: 15,
        name: 'Jastin',
        username: 'jastin12',
        islastseen: '12:32',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7gjz_tqhCGxPjl-J099B6Ll8LDZAkNqXpvo6gXoc-3dTYzCf4lvxx1T_lJa7BFP1G2g&usqp=CAU',
        text: 'John Doe ?',
        chatdata: ['Salom Jastin', 'Justin qachon kelasan']
    },
    {
        id: 16,
        name: 'Lisa',
        username: 'lisa007',
        islastseen: '12:21',
        img: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-6.jpg',
        text: 'How are you doing ?',
        chatdata: ['Salom lisa', 'lisa qachon kelasan']
    },
]




var defaultObj = data[0]
var globalId = -1


function InitialJoyla() {
    document.getElementById('defname').innerHTML = defaultObj.name
    document.getElementById('deftime').innerHTML = defaultObj.islastseen
    document.getElementById('defimg').src = defaultObj.img
    document.getElementById('defimg3').src = defaultObj.img
    document.getElementById('defname1').innerHTML = defaultObj.name
    document.getElementById('deftime1').innerHTML = defaultObj.islastseen
    document.getElementById('defimg1').src = defaultObj.img
    document.getElementById('username').innerHTML = `Username: <span style='color:orange;'>@${defaultObj.username}</span>`
}


function OnclickWhenClick(id) {
    defaultObj = data[id]
    InitialJoyla()
    InitialChats()
}



var AsosiySend = document.getElementById('asosiysend');
var SearchInput = document.getElementById('search-main');





function InitalList() {
    var text = ''
    data.map((item, index) => {
        text += `
            <div class='userwrap' onclick='OnclickWhenClick(${index})'>
                <img src=${item.img} alt='' >
                <div class='text-div'>
                    <div class='qator-bir'>
                        <h2>${item.name}</h2>
                        <p>${item.islastseen}</p>
                    </div>
                    <p class='text-msg'>${item.text}</p>
                </div>
            </div>
        `
    })

    document.getElementById('users').innerHTML = text

}



function Searching() {

    var filtered = data.filter((item) => {
        return item.username.includes(SearchInput.value)
    })

    var text = ''
    filtered.map((item, index) => {
        text += `
            <div class='userwrap'>
                <img src=${item.img} alt='' >
                <div class='text-div'>
                    <div class='qator-bir'>
                        <h2>${item.name}</h2>
                        <p>${item.islastseen}</p>
                    </div>
                    <p class='text-msg'>${item.text}</p>
                </div>
            </div>
        `
    })

    document.getElementById('users').innerHTML = text !== '' ? text : '<p class="notfound">No user found with this username</p>'
}

SearchInput.addEventListener('keydown', (e) => {
    Searching()
})

InitalList()



window.addEventListener("dblclick", () => {
    closeNav()
})

//side-bar
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}


var KunTun = document.getElementById('tunkun');
document.getElementById('all-words').style.color = 'white';

KunTun.addEventListener('click', (event) => {
    if (event.target.checked) {
        document.getElementById('mySidenav').style.backgroundColor = '#292E34';
        document.getElementById('topdiv').style.backgroundColor = '#B2B938';
        document.getElementById('all-words').style.color = 'white';
        document.getElementById('mySidenav').style.color = 'white';
    } else {
        document.getElementById('mySidenav').style.backgroundColor = 'white';
        document.getElementById('topdiv').style.backgroundColor = 'white';
        document.getElementById('topdiv').style.color = 'black';
        document.getElementById('all-words').style.color = 'black';
        document.getElementById('mySidenav').style.color = 'black';
    }
})



function InitialChats() {
    var text = '';
    defaultObj.chatdata.map((item, index) => {
        text += `
            <div class='msg-main'>
                <div class='msg-disf'>
                    <ion-icon  onclick='Delete(${index})' class='del-btn' name="trash-outline"></ion-icon>
                    <ion-icon onclick='Edit(${index})'  class='edit-btn' name="eyedrop"></ion-icon>
                    <p>${item} <ion-icon id='checkicon' name="checkmark"></ion-icon></p>
                </div>
            </div>
        `
    })
    document.getElementById('idchats').innerHTML = text
}

var FileInp = document.getElementById('file-input');

FileInp.addEventListener('change', (e) => {

    if (FileInp.files[0].name !== undefined) {
        defaultObj.chatdata.push(`<img id="random" src="./images/${FileInp.files[0].name !== undefined ? FileInp.files[0].name : ''}"  alt="">`)
        InitialChats()
    } else {
        console.log(undefined);
    }
})



function Ochish1() {
    document.getElementById('mid12').style.display = 'block'
    document.getElementById('mid11').style.width = '50%'

}
function Yopish1() {
    document.getElementById('mid12').style.display = 'none'
    document.getElementById('mid11').style.width = '75%'
}

function Edit(ind) {
    AsosiySend.value = defaultObj.chatdata[ind]
    globalId=ind
    document.getElementById('sendanimation').innerHTML = '<ion-icon style="color:orange;font-size:33px;" name="checkmark-circle-outline"></ion-icon>'

}

function Addtoarr() {

    if (globalId === -1) {
        if (AsosiySend.value == '') {
            document.getElementById('sendanimation').style.animation = 'shake 0.5s'
        } else {
            defaultObj.chatdata.push(AsosiySend.value)
            InitialChats()
            AsosiySend.value = ''

        }
    }else{
        defaultObj.chatdata[globalId] = AsosiySend.value
        AsosiySend.value = ''
        globalId=-1
        document.getElementById('sendanimation').innerHTML = '<ion-icon name="send-outline"></ion-icon>'
        InitialChats()

    }

}
function Delete(ind) {
    defaultObj.chatdata.splice(ind, 1)
    InitialChats()
}
AsosiySend.addEventListener('click', () => {
    document.getElementById('sendanimation').style.animation = 'none 0.5s'
})

AsosiySend.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        Addtoarr()
    }
})

InitialChats()
InitialJoyla()