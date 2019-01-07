const fs = require('fs');
const path = require('path');
const findUp = require('find-up');
const chalk = require('chalk');
const nodemailer = require('nodemailer');

function getConfig() {
    const gitDir = findUp.sync('.git');
    const rootDir = path.dirname(gitDir);
    const configFile = path.resolve(rootDir, '.preparecommitrc');
    if (fs.existsSync(configFile)) {
        return JSON.parse(fs.readFileSync(configFile, 'utf-8') || '{}');
    }
    return {};
}

async function sendMail(transport, message) {
    const transporter = nodemailer.createTransport(transport);
    await transporter.sendMail(message, (err, info) => {
        if(err) {
            console.log(chalk.red(err));
            return;
        }
        console.log(chalk.green('Message Sent: ', info.messageId));
        console.log(chalk.green('Preview URL: ', nodemailer.getTestMessageUrl(info)));
        return 0;
    });
}

function emailService() {
    const config = getConfig();
    if(!config.emailEnable) {
        return;
    }
    if(!config.emailGroup || !config.emailGroup.length) {
        console.log(chalk.red('没有找到邮箱列表，请检查.preparecommitrc中是否指定邮件列表（emailGroup）'));
        return;
    }

    const user = 'robot_git@163.com';
    const pass = 'robot_git1234';
    const commitName = process.env.GIT_AUTHOR_NAME || 'unknow';
    const transport = {
        host: 'smtp.163.email',
        port: 465,
        secure: true,
        auth: {
            user,
            pass
        }
    };

    const message = {
        from: `${commitName} <${user}>`,
        to: 'linxingjian199205@163.com',
        subject: 'test',
        text: 'hahaha',
        html: '<b>welcome</b>'
    };
    
    sendMail(transport, message);
};

emailService();