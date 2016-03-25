import React, {
	Component
} from 'react'
import classNames from 'classnames'


/**
 * styleName in [primary, success, warning, danger, purple, royal]
 */
export default class Badge extends Component {
	static propTypes = {
		styleName: React.PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'purple', 'royal'])
	}
	render() {
		const {size, inverted, styleName, className, children, ...others} = this.props
		const classes = classNames({
			'mui-badge': true,

			['mui-badge-' + styleName]: styleName,

			'mui-badge-inverted': inverted
		})
		return <span className={classes} {...others}>{children}</span>
	}
}