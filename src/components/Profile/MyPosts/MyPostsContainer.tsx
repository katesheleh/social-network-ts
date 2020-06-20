import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {MapDispatchToPropsPostsType} from "../../../types/types";

let mapStateToProps = (state: any) => { // StateType
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	};
};

let mapDispatchToProps = (dispatch: MapDispatchToPropsPostsType) => {
	return {
		updatePostNewText: (text: string) => {
			dispatch(updateNewPostTextActionCreator(text));
		},
		addPost: () => {
			dispatch(addPostActionCreator());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);