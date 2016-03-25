import React, {
	Component
} from 'react'
import classNames from 'classnames'

/**
 * rowNum 不存在，或小于 1 时，默认为一行，超过后转为省略号
 */
export default class Ellipsis extends Component {
	render() {
		const {rowNum, className, children, ...others} = this.props
		const classes = classNames({
			'mui-ellipsis': !rowNum,
			['mui-ellipsis-' + rowNum]: rowNum>1,
		})
		return <p className={classes}>{children}</p>
	}
}