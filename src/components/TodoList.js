import React, { Component } from 'react';
import TodoItem from './TodoItem.js';

class TodoList extends Component {
	render() {
		const { items, onClear, onDelete, onEdit } = this.props;

		return (
			<ul className="list-group my-5">
				<h3 className="text-capitalize text-center">Todo List</h3>

				{items.map((item) => {
					return (
						<TodoItem
							key={item.id}
							title={item.title}
							onEdit={() => onEdit(item.id)}
							onDelete={() => onDelete(item.id)}
						/>
					);
				})}

				<button className="btn btn-block btn-danger text-capitalize mt-5" onClick={onClear}>
					Clear List
				</button>
			</ul>
		);
	}
}

export default TodoList;
