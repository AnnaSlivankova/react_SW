import avatar from '../components/Profile/ProfileInfo/ava.jpg';

export type PostsType = {
    id: number
    message: string
    like: number
}
export type DialogsType = {
    id: number
    name: string
    avatar: string
}
export type MessagesType = {
    id: number
    message: string
}

const state = {
    profilePage: {
        posts: [
            {id: 1, message: "This is my first message", like: 1},
            {id: 2, message: "I bought a dog", like: 50},
            {id: 3, message: "Guys, should i buy a new car?", like: 19},
            {id: 4, message: "Hello, guess my name?", like: 4},
        ],
    },
    dialogPage: {
        dialogs: [
            {id: 1, name: "Anna", avatar: avatar},
            {id: 2, name: "Alex", avatar: avatar},
            {id: 3, name: "Ron", avatar: avatar},
            {id: 4, name: "Helga", avatar: avatar},
        ],
        messages: [
            {id: 1, message: "Hi! When do you come to as?"},
            {id: 2, message: "Nice to meet you!"},
            {id: 3, message: "Call you boss! Immediately...he is so angry"},
            {id: 4, message: "You need this car)) have a look..."},
        ],
    },
    // friendsBar: {
    //     id: 1, ava: avatar, name:
    // }
}


export default state;