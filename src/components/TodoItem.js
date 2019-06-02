import React, { Component } from 'react';

class TodoItem extends Component {
	render() {
		const { title, onDelete, onEdit } = this.props;

		return (
			<li className="list-group-item text-capitalize d-flex justify-content-between my-2">
				<h6> {title} </h6>

				<div className="todo-icon">
					<button type="button" className="btn btn-sm" onClick={onEdit}>
						<span className="mx-2 text-success">
							<i className="fas fa-pen" />
						</span>
					</button>

					<button type="button" className="btn btn-sm" onClick={onDelete}>
						<span className="mx-2 text-danger">
							<i className="fas fa-trash" />
						</span>
					</button>
				</div>
			</li>
		);
	}
}

export default TodoItem;
