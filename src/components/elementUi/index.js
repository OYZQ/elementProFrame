import Vue from "vue";
import "element-ui/lib/theme-chalk/index.css";

import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
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
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  PageHeader,
  CascaderPanel,
  Loading,
  MessageBox,
  Message,
  Notification,
  Drawer
} from "element-ui";

Vue.component("MyPagination", Pagination);
Vue.component("MyDialog", Dialog);
Vue.component("MyAutocomplete", Autocomplete);
Vue.component("MyDropdown", Dropdown);
Vue.component("MyDropdownMenu", DropdownMenu);
Vue.component("MyDropdownItem", DropdownItem);
Vue.component("MyMenu", Menu);
Vue.component("MySubmenu", Submenu);
Vue.component("MyMenuItem", MenuItem);
Vue.component("MyMenuItemGroup", MenuItemGroup);
Vue.component("MyInput", Input);
Vue.component("MyInputNumber", InputNumber);
Vue.component("MyRadio", Radio);
Vue.component("MyRadioGroup", RadioGroup);
Vue.component("MyRadioButton", RadioButton);
Vue.component("MyCheckbox", Checkbox);
Vue.component("MyCheckboxButton", CheckboxButton);
Vue.component("MyCheckboxGroup", CheckboxGroup);
Vue.component("MySwitch", Switch);
Vue.component("MySelect", Select);
Vue.component("MyOption", Option);
Vue.component("MyOptionGroup", OptionGroup);
Vue.component("MyButton", Button);
Vue.component("MyButtonGroup", ButtonGroup);
Vue.component("MyTable", Table);
Vue.component("MyTableColumn", TableColumn);
Vue.component("MyDatePicker", DatePicker);
Vue.component("MyTimeSelect", TimeSelect);
Vue.component("MyTimePicker", TimePicker);
Vue.component("MyPopover", Popover);
Vue.component("MyTooltip", Tooltip);
Vue.component("MyBreadcrumb", Breadcrumb);
Vue.component("MyBreadcrumbItem", BreadcrumbItem);
Vue.component("MyForm", Form);
Vue.component("MyFormItem", FormItem);
Vue.component("MyTabs", Tabs);
Vue.component("MyTabPane", TabPane);
Vue.component("MyTag", Tag);
Vue.component("MyTree", Tree);
Vue.component("MyAlert", Alert);
Vue.component("MySlider", Slider);
Vue.component("MyIcon", Icon);
Vue.component("MyRow", Row);
Vue.component("MyCol", Col);
Vue.component("MyUpload", Upload);
Vue.component("MyProgress", Progress);
Vue.component("MySpinner", Spinner);
Vue.component("MyBadge", Badge);
Vue.component("MyCard", Card);
Vue.component("MyRate", Rate);
Vue.component("MySteps", Steps);
Vue.component("MyStep", Step);
Vue.component("MyCarousel", Carousel);
Vue.component("MyCarouselItem", CarouselItem);
Vue.component("MyCollapse", Collapse);
Vue.component("MyCollapseItem", CollapseItem);
Vue.component("MyCascader", Cascader);
Vue.component("MyColorPicker", ColorPicker);
Vue.component("MyTransfer", Transfer);
Vue.component("MyContainer", Container);
Vue.component("MyHeader", Header);
Vue.component("MyAside", Aside);
Vue.component("MyMain", Main);
Vue.component("MyFooter", Footer);
Vue.component("MyTimeline", Timeline);
Vue.component("MyTimelineItem", TimelineItem);
Vue.component("MyLink", Link);
Vue.component("MyDivider", Divider);
Vue.component("MyImage", Image);
Vue.component("MyCalendar", Calendar);
Vue.component("MyBacktop", Backtop);
Vue.component("MyPageHeader", PageHeader);
Vue.component("MyCascaderPanel", CascaderPanel);
Vue.component("MyDrawer", Drawer);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
