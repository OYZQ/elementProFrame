export default `
├── node_modules // npm下载包都在这个文件夹 <br>
├── public <br>
│  ├── favicon.ico <br>
│  └── index.html // 作为入口模板，最后打包文件所在地，也是main.js绑定的dom <br>
├── src // 整个工程文件目录 <br>
│   └── api // 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        
`