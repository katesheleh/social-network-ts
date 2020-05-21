import { v1 } from "uuid"


let state = {
  profilePage: {
    posts: [
      { id: v1(), message: 'Hi World! How are you?', likesCounter: 75 },
      { id: v1(), message: 'Today is a good day!', likesCounter: 57 },
      { id: v1(), message: 'Oops, I did it again!', likesCounter: 57 },
    ]
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

export const addPost = (postMessage: string) => {
  let newPost = { id: v1(), message: postMessage, likesCounter: 0 }
  state.profilePage.posts.push(newPost)
  console.log(state.profilePage.posts)
}

export const addMessage = (userMessage: string) => {
  let newMessage = { id: v1(), message: userMessage }
  state.messagesPage.messages.push(newMessage)
  console.log(state.messagesPage.messages)
}

export type StateType = typeof state;
export default state;