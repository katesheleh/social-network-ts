import {updateNewPostTextAC, addPostAC} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {MapDispatchToPropsPostsType} from '../../../types/types';
import {AppRootStateType} from '../../../redux/redux-store';

let mapStateToProps = (state: AppRootStateType) => {
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