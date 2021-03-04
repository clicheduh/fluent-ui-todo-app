import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
	Stack,
	Label,
	IconButton,
	Dialog,
	DialogFooter,
	DefaultButton,
	PrimaryButton,
	DialogType
} from '@fluentui/react';

const TodoItem = (props) => {
	const [openDeleteModal, setOpenModal] = useState(true);

	const deleteTodo = (id) => {
		props.deleteTodo(id);
		setOpenModal(true);
	};

	return (
		<Stack>
			<Stack
				horizontal
				verticalAlign="center"
				horizontalAlign="space-between"
			>
				<Label>{props.todo.name}</Label>
				<IconButton
					iconProps={{ iconName: 'trash' }}
					className="clearButton"
					onClick={() => {
						setOpenModal(!openDeleteModal);
					}}
				/>
			</Stack>
			<Dialog
				hidden={openDeleteModal}
				dialogContentProps={{
					type: DialogType.normal,
					title: 'Delete',
					subText:
						'Are you sure you want to delete this item? This cannot be undone.'
				}}
				modalProps={{
					isBlocking: false
				}}
			>
				<DialogFooter>
					<PrimaryButton
						text="Yes"
						onClick={() => {
							deleteTodo(props.todo.id);
						}}
					/>
					<DefaultButton
						text="No"
						onClick={() => {
							setOpenModal(true);
						}}
					/>
				</DialogFooter>
			</Dialog>
		</Stack>
	);
};

const mapStateToProps = (state, ownProps) => {
	// var idToShow = ownProps.match.params.post_id;
	return {
		todos: state.todos.find((todo) => {
			return idToShow === todo.id;
		})
	};
};

export default connect(mapStateToProps)(TodoItem);
