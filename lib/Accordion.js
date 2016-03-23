import React, {
	Component
} from 'react'

export default class Accordion extends Component {
	render() {
		return <div className="mui-table-view-cell mui-collapse">
			<a className="mui-navigate-right" href="#">{this.props.title}</a>
			<div className="mui-collapse-content">
				{this.props.children}
			</div>
		</div>
	}
}