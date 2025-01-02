const userList = [
  {
    id: '132989030188921',
    code: 'user_code_001',
    username: '王小明',
    phone: '13800138000',
    job: '前端开发',
    status: 1,
    progress: 77,
    image: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    provinceName: '北京市',
    cityName: '北京市',
    regionName: '朝阳区',
    createTime: '2024-10-01 08:30:00',
  },
  {
    id: '132989030188922',
    code: 'user_code_002',
    username: '李晓华',
    phone: '13800138001',
    job: '产品经理',
    status: 2,
    progress: 46,
    image: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    provinceName: '广东省',
    cityName: '深圳市',
    regionName: '南山区',
    createTime: '2024-09-25 10:15:00',
  },
  {
    id: '132989030188923',
    code: 'user_code_003',
    username: '张伟',
    phone: '13800138002',
    job: '运营专员',
    status: 1,
    progress: 95,
    image: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    provinceName: '上海市',
    cityName: '上海市',
    regionName: '浦东新区',
    createTime: '2024-09-30 14:45:00',
  },
  {
    id: '132989030188924',
    code: 'user_code_004',
    username: '陈思思',
    phone: '13800138003',
    job: '人事专员',
    status: 1,
    progress: 59,
    image: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    provinceName: '浙江省',
    cityName: '杭州市',
    regionName: '西湖区',
    createTime: '2024-10-03 09:20:00',
  },
  {
    id: '132989030188925',
    code: 'user_code_005',
    username: '刘强',
    phone: '13800138004',
    job: '会计',
    status: 2,
    progress: 80,
    image: 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    provinceName: '江苏省',
    cityName: '南京市',
    regionName: '玄武区',
    createTime: '2024-09-28 11:00:00',
  },
]

interface ApiResponse {
  total: number
  records: any[]
}

// 该api简单模拟查询接口数据的过滤
const userListApi = (params): Promise<ApiResponse> => {
  const filterKeys = Object.keys(params)

  const response = userList.filter((user) => {
    return filterKeys.every((key) => {
      if (
        ['current', 'size', 'currentPage', 'pageSize'].includes(key) ||
        ['', undefined, null].includes(params[key])
      ) {
        return true
      }
      return user[key] === params[key]
    })
  })

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        total: response.length,
        records: response,
      })
    }, 300)
  })
}

export { userList, userListApi }
