import React, {
	Component
} from 'react'
import classNames from 'classnames'
import Ellipsis from './Ellipsis'


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

class Item extends Component {
	render() {
		const {navigate, className, children, ...others} = this.props
		const classes = classNames({
			'mui-table-view-cell': true,

			[className]: className,
		})
		return <li className={classes} {...others}>
			{navigate ? (<a className="mui-navigate-right">{children}</a>) : children}
		</li>
	}
}

class Media extends Component {
	render() {
		const {src, to, navigate, title, left, right, rowNum, className, children, ...others} = this.props
		const classes = classNames({
			'mui-table-view-cell': true,
			'mui-media': true,

			[className]: className,
		})
		const imgClasses = classNames({
			'mui-media-object': true,
			'mui-pull-left': !left,
			'mui-pull-right': right,
		})
		return <li className={classes} {...others}>
			<a href={`#${to}`} className={classNames({
				'mui-navigate-right': navigate
			})}>
				<img className={imgClasses} src={src}/>
				<div className="mui-media-body">
					{title}
					<Ellipsis rowNum={rowNum}>{children}</Ellipsis>
				</div>
			</a>
		</li>
	}
}

List.Item = Item
List.Media = Media