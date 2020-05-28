import { v1 } from "uuid"

let rerenderEntireTree = (state: StateType) => {
  console.log('State was changed')
}


let state = {
  profilePage: {
    posts: [
      { id: v1(), message: 'Hi World! How are you?', likesCounter: 75 },
      { id: v1(), message: 'Today is a good day!', likesCounter: 57 }
    ],
    newPostText: ''
  },
  messagesPage: {
    dialogs: [
      { id: v1(), name: 'Jnon' },
      { id: v1(), name: 'Nick' },
      { id: v1(), name: 'Alex' }
    ],
    messages: [
      { id: v1(), message: 'Hi! How are you?' },
      { id: v1(), message: 'I am fine! And you?' },
      { id: v1(), message: 'Me too. Have a nice day!' },
      { id: v1(), message: ':)' }
    ]
  }
}

export const addPost = () => {
  let newPost = { id: v1(), message: state.profilePage.newPostText, likesCounter: 0 }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state)
}

export const subscribe = (observer: any) => {
  rerenderEntireTree = observer
}

export const addMessage = (userMessage: string) => {
  let newMessage = {id: v1(), message: userMessage }
  state.messagesPage.messages.push(newMessage)  
  rerenderEntireTree(state)  
}

export type StateType = typeof state;
export default state;