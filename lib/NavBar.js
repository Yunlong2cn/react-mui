import React, {
	Component
} from 'react'

export default class NavBar extends Component {
	render() {
		return <header className="mui-bar mui-bar-nav">
			<a className="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 className="mui-title">{this.props.title}</h1>
		</header>
	}
}