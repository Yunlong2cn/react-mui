import React, {
	Component
} from 'react'
import classNames from 'classnames'


export default class List extends Component {

	render() {
		const {className, children, ...others} = this.props
		const classes = classNames({
			'mui-table-view': true,

			[className]: className,
		})
		return <ul className={classes} {...others}>
			{children}
		</ul>
	}
}

export class Item extends Component {
	render() {
		const {className, children, ...others} = this.props
		const classes = classNames({
			'mui-table-view-cell': true,

			[className]: className,
		})
		return <li className={classes} {...others}>{children}</li>
	}
}