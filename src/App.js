import React, { Component } from 'react';
import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';
import uuid from 'uuid';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.js';

class App extends Component {
	state = {
		items: [],
		id: uuid(),
		item: '',
		editItem: false
	};

	// controlled input
	handleChange = (e) => {
		this.setState({
			item: e.target.value
		});
	};

	// function to add new todo item
	handleSubmit = (e) => {
		e.preventDefault();

		// If input is empty, do not add;
		if (!this.state.item.length) return;

		const newItem = {
			id: this.state.id,
			title: this.state.item
		};

		// console.log(newItem);

		// TODO: try the push method and see what happens
		const itemsCopy = [...this.state.items, newItem];

		this.setState({
			items: itemsCopy,
			item: '',
			id: uuid(),
			editItem: false
		});
	};

	// function to clear the todo items;
	handleClear = () => {
		this.setState({
			items: [],
			item: '',
			editItem: false,
			id: uuid()
		});
	};

	handleDelete = (id) => {
		const filteredItems = this.state.items.filter((item) => item.id !== id);
		this.setState({
			items: filteredItems
		});
	};

	handleEdit = (id) => {
		const filteredItems = this.state.items.filter((item) => item.id !== id);
		const selectedItem = this.state.items.find((item) => item.id === id);
		// console.log(editTodo);

		this.setState({
			items: filteredItems,
			item: selectedItem.title,
			editItem: true,
			id: id
		});
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-4">
						<h3 className="text-capitalize text-center">Todo Input</h3>

						<TodoInput
							title={this.state.item}
							editItem={this.state.editItem}
							onChange={this.handleChange}
							onSubmit={this.handleSubmit}
						/>

						<TodoList
							items={this.state.items}
							onClear={this.handleClear}
							onDelete={this.handleDelete}
							onEdit={this.handleEdit}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
