import axios from '@/axios/fetch';
import MockPath from '@/mock/mock_api';

const mockpath = new MockPath();
class Api {
    VUE_APP_MOCK = process.env.VUE_APP_MOCK === '1'

    /**
     * 登录接口
     * @param data 登录信息
     */
    login = (data: unknown) => {
      let path = './api/user/login';
      if (this.VUE_APP_MOCK) {
        path = mockpath.login;
      }
      return axios
        .post(path, data);
    }

    /**
     * 获取用户信息
     */
    getByCode = () => axios.post(this.VUE_APP_MOCK ? mockpath.getByCode : './api/user/getByCode', {
      code: sessionStorage.code,
    })

    /**
     * 修改用户信息
     * @param formData 用户信息
     */
    changeUserInfo = (formData: unknown) => axios.post('./api/user/changeUserInfo', formData)

    /**
     * 创建学生&教师
     * @param formData 创建学生&教师
     */
    createClassMember = (formData: unknown) => axios.post('./api/classMember/createClassMember', formData)

    /**
     * 查询用户列表
     * @param searchData 查询条件
     */
    queryUserList = (searchData: unknown) => axios.post('./api/user/queryUserList', searchData)

    /**
     * 查询学生列表
     * @param searchData
     */
    queryStudentList = (searchData: unknown) => axios.post('./api/classMember/listStudent', searchData)

    /**
     * 重置用户密码
     * @param BaseUserCodeRequest code
     */
    adminResetPassword = (BaseUserCodeRequest: string) => axios.post('./api/user/adminResetPassword', { code: BaseUserCodeRequest })

    /**
     * 删除学生
     * @param formData
     */
    delStudent = (formData: unknown) => axios.post('./api/userManage/delStudent', formData)

    /**
     * 删除教师
     * @param formData
     */
    delTeacher = (formData: unknown) => axios.post('./api/userManage/delTeacher', formData)

    /**
     * 更改个人信息
     * @param formData
     */
    changeUserSignature = (formData: unknown) => axios.post('./api/user/changeUserSignature', formData)

    /**
     * 修改密码
     * @param formData
     */
    changePassword = (formData: unknown) => axios.post('./api/user/changePassword', formData)

    /**
     * 查询班级列表
     * @param searchData
     */
    getClassList = (searchData: unknown) => axios.post('./api/class/queryClass', searchData)

    /**
     * 编辑&创建班级
     * @param formData
     */
    editClassData = (formData: unknown) => axios.post('./api/class/createOrUpdateClass', formData)

    /**
     * 删除班级
     * @param formData
     */
    delClass = (formData: unknown) => axios.post('./api/userManage/delClass', formData)

    /**
     * 导入学生
     * @param formData
     * @param classId 班级id
     */
    uploadStudentByClass=(formData: unknown, classId: string) => axios.post(`./api/classMember/insertStudent?classId=${classId}`, formData)
}

export default new Api();
