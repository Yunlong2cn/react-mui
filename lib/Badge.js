import React, {
	Component
} from 'react'
import classNames from 'classnames'


export default class Badge extends Component {
	render() {
		const {size, inverted, styleName, className, children, ...others} = this.props
		const classes = classNames({
			'mui-badge': true,

			'mui-badge-primary': styleName === 'primary',
			'mui-badge-success': styleName === 'success',
			'mui-badge-warning': styleName === 'warning',
			'mui-badge-danger': styleName === 'danger',
			'mui-badge-purple': styleName === 'purple',
			'mui-badge-royal': styleName === 'royal',

			'mui-badge-inverted': inverted
		})
		return <span className={classes} {...others}>{children}</span>
	}
}