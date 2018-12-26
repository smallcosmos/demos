<template>
    <el-container id="app">
        <router-view></router-view>
        <el-header height="48px">
            <router-view name="header"/>
        </el-header>
        <el-container>
            <el-aside id="app-aside" :width="width">
                <router-view name="menu"/>
            </el-aside>
            <el-main>
                <router-view id="app-container" name="body"/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
        };
    },
    computed: {
        ...mapState({
            active: 'sidebarActive'
        }),
        width() {
            return this.active ? '216px' : '0px';
        }
    }
};
</script>

<style>
    html, body {
        height: 100%;
        min-width: 1200px;
        overflow: hidden;
    }
    #app {
        height: 100%;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 12px;
        color: #333;
    }
    #app-aside {
        transition: width .3s;
    }
    #app-container {
        transition: left .3s;
    }
</style>
