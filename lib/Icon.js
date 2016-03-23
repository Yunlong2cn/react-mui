import React, {
	Component
} from 'react'
import classNames from 'classnames'


export default class Icon extends Component {
	static propTypes = {
		name: React.PropTypes.string.isRequired
	}

	render() {
		const {name, className, children, ...others} = this.props
		const classes = classNames({
			'mui-icon': true,

			['mui-icon-' + name]: true,
		})
		return <span className={classes} {...others}>{children}</span>
	}
}