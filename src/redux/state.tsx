let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi World! How are you?', likesCounter: 75 },
      { id: 2, message: 'Today is a good day!', likesCounter: 57 },
      { id: 3, message: 'Oops, I did it again!', likesCounter: 57 },
    ]
  },
  messagesPage: {
    dialogs: [
      { id: 1, name: 'Jnon' },
      { id: 2, name: 'Nick' },
      { id: 3, name: 'Alex' }
    ],
    messages: [
      { id: 1, message: 'Hi! How are you?' },
      { id: 2, message: 'I am fine! And you?' },
      { id: 3, message: 'Me too. Have a nice day!' },
      { id: 4, message: ':)' }
    ]
  }
}

export type StateType = typeof state;
export default state;