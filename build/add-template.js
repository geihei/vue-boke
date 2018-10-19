const argv = require('xx-argv')(process.argv)
const fs = require('fs')
const chalk = require('chalk')
const mkdirp = require('mkdirp')
const inquirer = require('inquirer')

if (argv.template && argv.path) {
    start(argv)
} else {
    inquirer.prompt([
        {
            name: 'template',
            message: '请输入模板名称(如 template):',
            type: 'input',
            validate: msg => (/[a-z][a-z0-9-_]/.test(msg) ? true : 'template 不符合命名规范(小写字母开头, 小写字母或数字或中划线下划线)'),
        },
        {
            name: 'path',
            message: '请输入模板路径:',
            type: 'list',
            choices: [
                'admin',
                'components',
            ]
        }
    ]).then(answers => {
        start(answers)
    }) 
}

function start(argv) {
    const templatePath = process.cwd() + '/src/' + argv.path
    const templateName = argv.template
    const templateNameUpper = argv.template.toUpperCase()
    fs.access(templatePath + '/' + templateName + '.vue', function(err) {
        if (err) {
            // 此方式是用流的方式边读边写 速度较快 还可以通过readFile再writeFile的形式写文件
            fs.createReadStream('./sketch/template.vue').pipe(fs.createWriteStream(templatePath + '/' + templateName + '.vue'))
            if (argv.path === 'admin') {
                fs.readFile(process.cwd() + '/src/router/index.js', 'utf8', function (err, file) {
                    let res = file.replace(/\/\*newrouter\*\//g, 
                    `{
                        path: '/${templateName}',
                        name: '${templateNameUpper}',
                        component: ${templateNameUpper}
                    },
                    /*newrouter*/`).replace(/\/\*newpath\*\//g, 
                    `import ${templateNameUpper} from '@/admin/${templateName}'
                    /*newpath*/`)
                    fs.writeFile(process.cwd() + '/src/router/index.js', res, 'utf8', function(err) {
                        if (err) return console.log(err)
                        console.log(chalk.green('完成'))
                    })
                })
            }
        } else {
            console.error('文件名已存在')
        }
    })
}
