module.exports = { extends: ['@commitlint/config-conventional'] }
module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  roles: {
    'type-enum': [
      2,
      // 在什么情况下进行验证
      'always',
      // 泛型内容
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'revert',
        'build'
      ]
    ]
  },
  // 大小写不做校验
  'subject-case': [0]
}
