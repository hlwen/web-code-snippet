<template>
    <Menu :collapsed="collapsed"></Menu>
   <div class="main">
     <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
       <MenuUnfoldOutlined v-if="collapsed" />
       <MenuFoldOutlined v-else />
     </a-button>
     <div id="nav">
       <router-link to="/">Home</router-link> |
       <router-link to="/about">About</router-link>
     </div>
     <router-view/>
   </div>
</template>
<script>
  import Menu from '@/components/Menu';

  import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons-vue';

  export default {
    name: 'App',
    components: {
      Menu,
      MenuFoldOutlined,
      MenuUnfoldOutlined,
    },
    data(){
      return {
        collapsed: false
      }
    },
    created() {
      console.log('vue2.0写法 created');
    },
    mounted() {
      console.log(this.$route);
    },
    methods: {

      toggleCollapsed() {
        this.collapsed = !this.collapsed;
      },
      close() {
        console.log('close');
      },
    },
  };
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}
.main{
  flex: 1;

}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
