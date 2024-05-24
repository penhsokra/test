// assets
import { UserOutlined } from '@ant-design/icons';

// icons
const icons = {
  UserOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const user = {
  id: 'group-user',
  title: 'Users',
  type: 'group',
  children: [
    {
      id: 'user',
      title: 'user name',
      type: 'item',
      url: '/chat',
      icon: icons.UserOutlined,
      breadcrumbs: false
    }
  ]
};

export default user;
