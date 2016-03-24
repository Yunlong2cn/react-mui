import React, {
	Component
} from 'react'
import classNames from 'classnames'

export default class Item extends Component {
	render() {
		const {navigate, className, children, ...others} = this.props
		const classes = classNames({
			'mui-table-view-cell': true,

			[className]: className,
		})
		return <li className={classes} {...others}>
			{(navigate=>{
				if (navigate) {
					return <a className="mui-navigate-right">
						{children}
					</a>
				} else {
					return <span>{ children }</span>
				}
			})(navigate) }
		</li>
	}
}