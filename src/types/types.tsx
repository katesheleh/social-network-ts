export type MapDispatchToPropsPostsType = (
		args: {
			type: string;
			newText?: string;
		}) => void


export enum ResultCodeStatus {
	'success' = 0,
	'error' = 1
}