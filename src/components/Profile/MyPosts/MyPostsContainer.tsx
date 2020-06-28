import {updateNewPostTextAC, addPostAC} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {MapDispatchToPropsPostsType, StateInitialType} from '../../../types/types';

let mapStateToProps = (state: StateInitialType) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	};
};

let mapDispatchToProps = (dispatch: MapDispatchToPropsPostsType) => {
	return {
		updatePostNewText: (text: string) => {
			dispatch(updateNewPostTextAC(text));
		},
		addPost: () => {
			dispatch(addPostAC());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);