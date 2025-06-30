const validatePassword = () => (rule, value, callback) => {
  if (!value) {
    callback(new Error('密码不能为空'))
  } else {
    if (value.length < 6) {
      callback(new Error('密码长度不能小于6'))
    } else {
      callback()
    }
  }
}
export const loginRules = {
  username: [{ required: true, message: '用户名不能为空', triggle: 'blur' }],
  password: [{ required: true, triggle: 'blur', validator: validatePassword() }]
}
