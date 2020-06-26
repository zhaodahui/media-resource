import Vue from 'vue'

//element ui
import 'element-ui/lib/theme-chalk/index.css';
import {
	Button, 
	Row, 
	Col, 
	Menu , 
	MenuItem,
	Tabs,
	TabPane, 
	Card,
	Form,
	FormItem,
	Input,
	Select,
	Option,
	Checkbox,
	CheckboxGroup,
	Radio,
	RadioGroup,
	RadioButton,
	Dropdown,
	DropdownMenu,
	DropdownItem,
	Dialog,
	Progress,
	Tree,
	Cascader,
	Pagination,
	BreadcrumbItem,
	Breadcrumb,
	Message,
	MessageBox,
	Table,
	TableColumn,
	Main,
	Submenu,
	Container,
	Header,
	Aside,
	MenuItemGroup,
  Upload
} from 'element-ui'

Vue.use(Button)
Vue.use(Select)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Card)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Form)
Vue.use(Select)
Vue.use(Option)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Progress)
Vue.use(Dialog)
Vue.use(Tree)
Vue.use(Cascader)
Vue.use(Pagination)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Main)
Vue.use(Submenu)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(MenuItemGroup)
Vue.use(Upload)
Vue.use(Form)
Vue.use(FormItem)
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;