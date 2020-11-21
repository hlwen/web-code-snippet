<style lang="less" scoped>
  .ant-menu-root{
  }
</style>
<template>
    <a-menu
      :style="{width:collapsed?'':'200px'}"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <a-menu-item key="1">
        <PieChartOutlined />
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <DesktopOutlined />
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <InboxOutlined />
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span><MailOutlined /><span>视频</span></span>
        </template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span><AppstoreOutlined /><span>音频</span></span>
        </template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">
            Option 11
          </a-menu-item>
          <a-menu-item key="12">
            Option 12
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
</template>

<script>
  import {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  } from '@ant-design/icons-vue';
  export default {
    components: {
      PieChartOutlined,
      MailOutlined,
      DesktopOutlined,
      InboxOutlined,
      AppstoreOutlined,
    },
    data() {
      return {
        selectedKeys: ['1'],
        openKeys: ['sub1'],
        preOpenKeys: ['sub1'],
      };
    },
    props:{
      collapsed:{
        type: Boolean,
        default: false
      }
    },
    watch: {
      collapsed() {
        this.toggleCollapsed()
      },
      openKeys(val, oldVal) {
        this.preOpenKeys = oldVal;
      },
    },
    methods: {
      toggleCollapsed() {
        this.openKeys = this.collapsed ? [] : this.preOpenKeys;
      },
    },
  };
</script>
