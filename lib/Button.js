import React, {
	Component
} from 'react'
import classNames from 'classnames'
import {DEFAULT, PRIMARY, LINK} from './styleMaps'
import Icon from './Icon'


export default class Button extends Component {
	static propTypes = {
		disabled: React.PropTypes.bool
	}

	static defaultProps = {
		disabled: false
	}

	render() {
		const {type, size, outlined, disabled, styleName, className, icon, children, ...others} = this.props
		const classes = classNames({
			'mui-btn': true,

			['mui-btn-' + styleName]: styleName,

			'mui-btn-outlined': outlined,
			'mui-disabled': disabled,
			[className]: className
		})

		return <button type={type || 'button'} className={classes} disabled={disabled} {...others}>
			{(icon => {
				if (icon) return <Icon name={icon}/>
			})(icon) }
			{children}
		</button>
	}
}