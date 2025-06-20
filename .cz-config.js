module.exports = {
  types:[
    { value:'feat',name:'feat: 新功能'},
    { value:'fix',name:'fix:   修复bug'},
    { value:'docs',name:'docs:   文档变更'},
    { value:'style',name:'style:   代码格式(不影响代码运行的变动)'},
    { value:'refactor',name:'refactor:  重构(既不是增加feature,也不是修复bug)'},
    { value:'perf',name:'perf: 提升性能'},
    { value:'test',name:'test:   添加测试'},
    { value:'revert',name:'revert   回滚'},
    { value:'build',name:'build:    打包'}
  ],
  //步骤
  messages:{
    type:'请选择提交的类型',
    customScope:'请输入文件修改的范围(可选)',
    subject:'请简要描述提交（必填）',
    body:'请输入详细描述（可选）',
    footer:'请输入要关闭的issue(可选)',
    comfirmCommit:'确认要使用提上信息提交吗？(y/n)'
  },
  subjectLimit:72
}