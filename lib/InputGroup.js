import React, {
	Component
} from 'react'
import classNames from 'classnames'


export default class InputGroup extends Component {

	render() {
		const {className, children, ...others} = this.props
		const classes = classNames({
			'mui-input-group': true,

			[className]: className,
		})
		return <div className={classes} {...others}>
			{children}
		</div>
	}
}