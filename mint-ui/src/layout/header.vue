<template>
    <div class="header">
        <h2 class="header-title">Mint-UI<a href="/" class="header-title__link"/></h2>
        <div class="header-right">
            <span> Welcome </span>
            <a href="/logout">Logout</a>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "~@/style/mixins/index.scss";

@include b(header) {
    width: 100%;
    height: 100%;
    padding: 10px 16px 10px 24px;
    background: #222;
}
@include b(header-title) {
    position: relative;
    display: flex;
    float: left;
    height: 28px;
    line-height: 28px;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    &:before {
        content: '';
        display: inline-block;
        width: 28px;
        height: 28px;
        margin-right: 8px;
        background-image: url(https://haitao.nos.netease.com/56057b7e-e3bd-4e14-9aba-52120526e299_175_200.svg);
        background-size: 100% 100%;
    }
    @include e(link) {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        text-decoration: none;
    }
}
@include b(header-right) {
    float: right;
    height: 28px;
    line-height: 28px;
    color: #fff;
    @include e(link) {
        color: #fff;
        &:hover {
            color: #fff;
        }
    }
}
@include b(header-dropdown) {
    /*margin-right: 52px;*/
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    .el-icon--right {
        margin-left: 10px;
        font-weight: bold;
    }
}
.el-dropdown-menu {
    padding: 0;
}
.el-dropdown-menu__item {
    font-size: 14px;
}
</style>
