import 'mui/dist/css/mui'

import React, {
	Component
} from 'react'
import {
	render
} from 'react-dom'

import {
	Button,
	Badge,
	Icon
} from '../../lib'


class App extends Component {
	
	handleClick(e) {
		alert('JSON.stringify(e)')
	}

	render() {
		return <div>
			Hello world
			<hr/>
			<Button>你好</Button>
			<Button styleName="primary">你好</Button>
			<Button styleName="negative">你好</Button>
			<Button styleName="positive">你好</Button>
			<Button styleName="link">你好</Button>
			<Button styleName="positive" icon="search">你好</Button>
			<Button styleName="negative" icon="home">你好</Button>
			<hr/>
			<Badge styleName="warning">12</Badge>
		</div>
	}

}





render(<App/>, document.getElementById('root'))