import React, {
	Component
} from 'react'
import classNames from 'classnames'


/**
 * styleName in [primary, success, warning, danger, purple, royal]
 */
export default class Switch extends Component {
	constructor(props, context) {
		super(props)
		this.state = {
			active: props.active
		}
	}

	static propTypes = {
		styleName: React.PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'purple', 'royal']),
		onChange: React.PropTypes.func
	}

	static defaultProps = {
		active: false,
		mini: false
	}

	handleClick(e) {
		// 切换状态
		this.setState({
			active: !this.state.active
		})
		// 执行回调
		this.props.onClick && this.props.onClick(e)
	}

	render() {
		const {name, mini, styleName, className, onClick, onChange, children, ...others} = this.props
		const classes = classNames({
			'mui-switch': true,
			'mui-switch-mini': mini,
			'mui-active': this.state.active,

			['mui-switch-' + styleName]: styleName,
		})
		return <div className={classes} {...others} onClick={e=>this.handleClick(e)}>
			<div className="mui-switch-handle"></div>
			<input type="checkbox" name={name} checked={this.state.active} onChange={()=>{}}/>
		</div>
	}
}