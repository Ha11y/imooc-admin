import i18n from '@/i18n'

const validatePassword = () => (rule, value, callback) => {
  if (value.length < 6) {
    callback(i18n.global.t('msg.login.passwordRule'))
  } else {
    callback()
  }
}
export const loginRules = {
  username: [
    {
      required: true,
      message: i18n.global.t('msg.login.usernameRule'),
      triggle: 'blur'
    }
  ],
  password: [{ required: true, triggle: 'blur', validator: validatePassword() }]
}
