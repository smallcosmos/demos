<template>
    <div class="error-page">
        <div class="error-notice" :style="{ backgroundImage: `url(${error.imgSrc})` }">
            <p class="error-notice__title">{{ error.msg }}</p>
            <p class="error-notice__desc">抱歉，您访问的页面不存在</p>
            <el-button type="primary" @click="handleGotoIndex">返回首页</el-button>
        </div>
    </div>
</template>
<script>
const resourceMap = {
    401: {
        msg: '无权限访问',
        imgSrc: 'https://haitao.nos.netease.com/fefb55b9-4b26-4354-9a1e-39d586570297.jpeg'
    },
    404: {
        msg: '404！出错了',
        imgSrc: 'https://haitao.nos.netease.com/1858af16-d826-4903-a408-1232d2859119.jpeg'
    },
    500: {
        msg: '服务器出错',
        imgSrc: 'https://haitao.nos.netease.com/23e5b723-0325-4962-9e21-cf08048b0bb7.jpeg'
    }
};

export default {
    props: {
        indexPath: {
            type: String,
            default: '/'
        },
        code: {
            validator(errorCode) {
                return Reflect.ownKeys(resourceMap).indexOf(parseInt(errorCode)) === -1;
            }
        }
    },
    data() {
        return {
            error: resourceMap[this.code]
        };
    },
    methods: {
        handleGotoIndex() {
            this.$router.push(this.indexPath);
        }
    }
};
</script>
<style scoped>
.error-page {
    position: relative;
    height: 100%;
    text-align: center;
}
.error-notice {
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-166px);
    padding-left: 166px;
    display: inline-block;
    text-align: left;
    background-size: 136px 136px;
    background-repeat: no-repeat;
    background-position: 0 50%;
}
.error-notice__title {
    margin-bottom: 8px;
    font-size: 36px;
    color: #666;
}
.error-notice__desc {
    margin-bottom: 12px;
    line-height: 24px;
    font-size: 20px;
    color: #666;
}
</style>
