import Group from '../packages/group/index.js';
import SelectDropdown from '../packages/select-dropdown/index.js';
import Pagination from '../packages/pagination/index.js';
import Dialog from '../packages/dialog/index.js';
import Autocomplete from '../packages/autocomplete/index.js';
import Dropdown from '../packages/dropdown/index.js';
import DropdownItem from '../packages/dropdown-item/index.js';
import Menu from '../packages/menu/index.js';
import Submenu from '../packages/submenu/index.js';
import MenuItem from '../packages/menu-item/index.js';
import Input from '../packages/input/index.js';
import InputNumber from '../packages/input-number/index.js';
import InputGroup from '../packages/input-group/index.js';
import Radio from '../packages/radio/index.js';
import RadioGroup from '../packages/radio-group/index.js';
import RadioButton from '../packages/radio-button/index.js';
import Checkbox from '../packages/checkbox/index.js';
import CheckboxGroup from '../packages/checkbox-group/index.js';
import Switch from '../packages/switch/index.js';
import Select from '../packages/select/index.js';
import Option from '../packages/option/index.js';
import OptionGroup from '../packages/option-group/index.js';
import Button from '../packages/button/index.js';
import ButtonGroup from '../packages/button-group/index.js';
import Table from '../packages/table/index.js';
import TableColumn from '../packages/table-column/index.js';
import DatePicker from '../packages/date-picker/index.js';
import TimeSelect from '../packages/time-select/index.js';
import TimePicker from '../packages/time-picker/index.js';
import Popover from '../packages/popover/index.js';
import Tooltip from '../packages/tooltip/index.js';
import MessageBox from '../packages/message-box/index.js';
import Breadcrumb from '../packages/breadcrumb/index.js';
import BreadcrumbItem from '../packages/breadcrumb-item/index.js';
import Form from '../packages/form/index.js';
import FormItem from '../packages/form-item/index.js';
import Tabs from '../packages/tabs/index.js';
import TabPane from '../packages/tab-pane/index.js';
import Tag from '../packages/tag/index.js';
import Tree from '../packages/tree/index.js';
import Alert from '../packages/alert/index.js';
import Notification from '../packages/notification/index.js';
import Slider from '../packages/slider/index.js';
import Loading from '../packages/loading/index.js';
import Icon from '../packages/icon/index.js';
import Row from '../packages/row/index.js';
import Col from '../packages/col/index.js';
import Upload from '../packages/upload/index.js';
import Progress from '../packages/progress/index.js';
import Spinner from '../packages/spinner/index.js';

const install = function(Vue) {
  if (install.installed) return;

  Vue.component(Group.name, Group);
  Vue.component(SelectDropdown.name, SelectDropdown);
  Vue.component(Pagination.name, Pagination);
  Vue.component(Dialog.name, Dialog);
  Vue.component(Autocomplete.name, Autocomplete);
  Vue.component(Dropdown.name, Dropdown);
  Vue.component(DropdownItem.name, DropdownItem);
  Vue.component(Menu.name, Menu);
  Vue.component(Submenu.name, Submenu);
  Vue.component(MenuItem.name, MenuItem);
  Vue.component(Input.name, Input);
  Vue.component(InputNumber.name, InputNumber);
  Vue.component(InputGroup.name, InputGroup);
  Vue.component(Radio.name, Radio);
  Vue.component(RadioGroup.name, RadioGroup);
  Vue.component(RadioButton.name, RadioButton);
  Vue.component(Checkbox.name, Checkbox);
  Vue.component(CheckboxGroup.name, CheckboxGroup);
  Vue.component(Switch.name, Switch);
  Vue.component(Select.name, Select);
  Vue.component(Option.name, Option);
  Vue.component(OptionGroup.name, OptionGroup);
  Vue.component(Button.name, Button);
  Vue.component(ButtonGroup.name, ButtonGroup);
  Vue.component(Table.name, Table);
  Vue.component(TableColumn.name, TableColumn);
  Vue.component(DatePicker.name, DatePicker);
  Vue.component(TimeSelect.name, TimeSelect);
  Vue.component(TimePicker.name, TimePicker);
  Vue.component(Popover.name, Popover);
  Vue.component(Tooltip.name, Tooltip);
  Vue.component(Breadcrumb.name, Breadcrumb);
  Vue.component(BreadcrumbItem.name, BreadcrumbItem);
  Vue.component(Form.name, Form);
  Vue.component(FormItem.name, FormItem);
  Vue.component(Tabs.name, Tabs);
  Vue.component(TabPane.name, TabPane);
  Vue.component(Tag.name, Tag);
  Vue.component(Tree.name, Tree);
  Vue.component(Alert.name, Alert);
  Vue.component(Slider.name, Slider);
  Vue.component(Icon.name, Icon);
  Vue.component(Row.name, Row);
  Vue.component(Col.name, Col);
  Vue.component(Upload.name, Upload);
  Vue.component(Progress.name, Progress);
  Vue.component(Spinner.name, Spinner);

  // Vue.use(Loading);

  // Vue.prototype.$msgbox = MessageBox;
  // Vue.prototype.$alert = MessageBox.alert;
  // Vue.prototype.$confirm = MessageBox.confirm;
  // Vue.prototype.$prompt = MessageBox.prompt;
  // Vue.prototype.$notify = Notification;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  install,
  Group,
  SelectDropdown,
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  Input,
  InputNumber,
  InputGroup,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  MessageBox,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Notification,
  Slider,
  Loading,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner
};
