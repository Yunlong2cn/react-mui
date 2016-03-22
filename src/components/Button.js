import React, {
	Component
} from 'react'


export default class Button extends Component {
	
	render() {
		return <button type="button" className="mui-btn">
			{this.props.children}
		</button>
	}
}