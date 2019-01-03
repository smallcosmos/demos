<template>
    <div>
        <loadmore :top-method="loadTop"
            :bottom-method="loadBottom"
            :bottom-all-loaded="allLoaded"
            ref="loadmore">
            <ul>
                <li v-for="(item, index) in list" :key="index">{{ item }}</li>
            </ul>
            <div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
                <span v-show="topStatus === 'loading'">Loading...</span>
            </div>
        </loadmore>
    </div>
</template>

<script>
import { Toast, Indicator, Loadmore } from 'mint-ui';
export default {
    components: {Loadmore},
    data() {
        const list = new Array(100).fill(1).map((item, index) => item + index);
        return {
            list
        }
    },
    created() {
        Toast({
            message: 'Upload Complete',
            position: 'bottom',
            iconClass: 'icon icon-product',
            duration: 5000
        });
        // Indicator.open({
        //     text: 'Loading...',
        //     //'snake' | 'fading-circle' | 'double-bounce' | 'triple-bounce'
        //     spinnerType: 'fading-circle'
        // });
    },
    methods: {
        loadTop() {
            this.$refs.loadmore.onTopLoaded();
        },
        loadBottom() {
            this.allLoaded = true;// if all data are loaded
            this.$refs.loadmore.onBottomLoaded();
        },
        allLoaded() {
            console.log('loaded');
        }
    }
}
</script>
