<template>
    <div class="page-changeCity">
        <el-row>
            <province />
        </el-row>
        <el-row>
            <hot title="热门城市：" :list="hotList" />
        </el-row>
        <el-row>
            <hot title="最近访问：" :list="recentList" />
        </el-row>
        <el-row>
            <category />
        </el-row>
    </div>
</template>

<script>
import Province from '@/components/changeCity/province.vue'
import hot from '@/components/changeCity/hot.vue'
import Category from '@/components/changeCity/category.vue'
export default {
  data () {
    return {
      hotList: ['济南', '兰州', '哈尔滨', '杭州', '广州', '石家庄', '南京', '海口'],
      recentList: ['济南', '兰州', '哈尔滨', '杭州', '广州', '石家庄', '南京', '海口']
    }
  },
  components: {
    Province,
    hot,
    Category
  }
}
</script>
