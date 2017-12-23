import Mock from 'mockjs'
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: '@/assets/touxiang.jpg',
    name: '李博'
  }
]

const Users = []

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    tel: Mock.mock('/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$/'),
    company: Mock.Random.ctitle(8, 15),
    duijie: Mock.Random.cname(),
    wechat: Mock.Random.word(),
    department: Mock.mock('@cword(3)'),
    zhuwu: Mock.mock('@cword(3)')
  }))
}

export { LoginUsers, Users }
