import React, {
	Component
} from 'react'
import classNames from 'classnames'


export default class Radio extends Component {
	static propTypes = {
		name: React.PropTypes.string.isRequired
	}

	render() {
		const {name, left, right, className, children, ...others} = this.props
		const classes = classNames({
			'mui-radio': true,
			'mui-input-row': true,
			'mui-left': left,
			'mui-right': right,

			[className]: className,
		})
		return <div className={classes} {...others}>
			<label>{children}</label>
			<input name={name} type="radio"/>
		</div>
	}
}