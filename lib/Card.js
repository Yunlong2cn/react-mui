import React, {
	Component
} from 'react'

export default class Card extends Component {

	render() {
		return <div className="mui-card">
			{this.props.children}
		</div>
	}
}