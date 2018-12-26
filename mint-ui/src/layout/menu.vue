<template>
    <div class="sidebar">
        <el-menu class="el-menu-vertical-demo"
            :default-active="displayPage"
            unique-opened>
            <el-submenu v-for="(menu, menuIndex) in menus" 
            :index="menuIndex+''" 
            :key="menuIndex">
                <template slot="title">
                    <i :class="`icon icon-${icons[menuIndex]}`"/>
                    <span>{{ menu.title }}</span>
                </template>
                <el-menu-item v-for="(page, childIndex) in menu.children"
                  :index="page.url"
                  :key="childIndex"
                  @click="goto(page.url)">
                    <template slot="title">
                        <span>{{ page.title }}</span>
                    </template>
                </el-menu-item>
            </el-submenu>
        </el-menu>
        <div :class="[{'sidebar-toggle--active': !active}, 'sidebar-toggle']" @click="toggle">
            <i :class="active ? 'el-icon-arrow-left' : 'el-icon-arrow-right'"/>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Menu from '@/mock/common/menu';

export default {
    data() {
        return {
            menus: Menu.result.menuList,
            icons: ['order', 'product', 'basic', 'order', 'product', 'basic', 'order', 'product', 'basic'],
        };
    },
    computed: {
        ...mapState({
            active: 'sidebarActive'
        }),
        displayPage() {
            return this.$route.path;
        }
    },
    methods: {
        goto(path) {
            this.$router.push({ path });
        },
        toggle() {
            this.$store.commit('toggleSidebar');
        }
    }
};
</script>

<style scoped lang="scss">
@import "~@/style/mixins/index.scss";

@include b(sidebar) {
    width: 216px;
    height: 100%;
    overflow: visible;
    background: #fff;
    transition:all .3s;
}

@include b(sidebar-toggle) {    
    display: flex;
    position: absolute;
    top: 50%;
    left: 216px;
    width: 10px;
    height: 50px;
    font-size: 10px;
    margin-top: -60px;
    z-index: 10;
    align-items: center;
    background: #C2C9D0;
    color: #fff;
    transition: left .3s;
    cursor: pointer;
    @include m(active) {
        left: 0;
    }
}
.el-submenu__title {
    font-size: 14px;
    span {
        margin-left: 10px;
    }
}
</style>
