import React, { Component } from 'react';

class TodoInput extends Component {
	state = {};
	render() {
		const { title, onChange, onSubmit, editItem } = this.props;

		return (
			<div className="card card-body my-3">
				<form method="post" onSubmit={onSubmit}>
					<div className="input-group">
						<div className="input-group-prepend">
							<div className="input-group-text bg-primary text-white">
								<i className="fas fa-book" />
							</div>
						</div>
						<input
							type="text"
							value={title}
							onChange={onChange}
							className="form-control text-capitalize"
							placeholder="Add A todo item"
						/>
					</div>
					<button
						type="submit"
						className={!editItem ? 'btn btn-block btn-primary mt-3' : 'btn btn-block btn-success mt-3'}
					>
						{!editItem ? 'Add Item' : 'Edit Item'}
					</button>
				</form>
			</div>
		);
	}
}

export default TodoInput;
