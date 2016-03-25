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
	Icon,
	Card,
	Radio,
	InputGroup,
	List,
	Switch,
	Ellipsis
} from '../../lib'


class App extends Component {
	
	handleClick(e) {
		alert('JSON.stringify(e)')
	}

	handleChange(e) {
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
			<hr/>
			<Card>dsaf</Card>
			<hr/>
			<InputGroup>
				<Radio name="test" left>怕就</Radio>
				<Radio name="test">不是吧</Radio>
			</InputGroup>
			<hr/>
			<List>
				<List.Item>Hello.........</List.Item>
				<List.Item>Hello</List.Item>
				<List.Item navigate>Hello</List.Item>
			</List>
			<hr/>
			<Card>
				<List>
					<List.Item navigate>
						Hello
						<Badge styleName="success">12</Badge>
					</List.Item>
					<List.Item>Hello</List.Item>
					<List.Item navigate>Hello</List.Item>
				</List>
			</Card>
			<hr/>
			<Switch onClick={e => this.handleChange(e) } name="test"/>
			<hr/>
			<Switch active name="test2"/>
			<hr/>
			<Ellipsis>这里是内容呀这里是内容呀这里是内容呀这里是内容呀这里是内容呀这里是内容呀</Ellipsis>
			<Ellipsis rowNum={2}>这里是内容呀这里是内容呀这里是内容呀这里是内容呀这里是内容呀这里是内容呀</Ellipsis>
			<hr/>
			<List>
				<List.Media navigate title="test" to="hello" src="http://www.dcloud.io/hellomui/images/shuijiao.jpg">
					Hello.........
				</List.Media>
				<List.Media right title="test" to="hello2" src="http://www.dcloud.io/hellomui/images/shuijiao.jpg">
					Hello.........
				</List.Media>
			</List>
			<hr/>
			<Card>
				<List>
					<List.Media navigate title="test" to="hello" src="http://www.dcloud.io/hellomui/images/shuijiao.jpg">
						Hello.........
					</List.Media>
					<List.Media right title="test" to="hello2" src="http://www.dcloud.io/hellomui/images/shuijiao.jpg">
						Hello.........
					</List.Media>
				</List>
			</Card>
		</div>
	}

}





render(<App/>, document.getElementById('root'))