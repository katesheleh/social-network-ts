import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/state';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = ( state: any ) => { // StateType
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

let mapDispatchToProps = ( dispatch: ( arg0: { type: string; newText?: string; } ) => void ) => {
  return {
    updatePostNewText: ( text: string ) => {
      dispatch( updateNewPostTextActionCreator( text ) );
    },
    addPost: () => {
      dispatch( addPostActionCreator() );
    }
  };
};

const MyPostsContainer = connect( mapStateToProps, mapDispatchToProps )( MyPosts );
export default MyPostsContainer;