<template>
    <div class="m-product-categroy">
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="(item, index) in classicList" :key="index">
                <m-select :name="item.title" :list="item.subList"/>
            </dd>
        </dl>
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="(item, index) in areaList" :key="index">
                <m-select :name="item.title" :list="item.subList"/>
            </dd>
        </dl>
    </div>
</template>

<script>
import MSelect from './select.vue'
export default {
  data () {
    return {
      classicList: [
        {
          title: '美食',
          type: 'food',
          subList: [
            {
              name: '日本菜',
              id: 'Japan'
            },
            {
              name: '饮品店',
              id: 'drink'
            },
            {
              name: '面包甜点',
              id: 'cate'
            }
          ]
        },
        {
          title: '酒店住宿',
          type: 'hotal',
          subList: [
            {
              name: '温泉酒店',
              id: 'hot_spring'
            }
          ]
        }
      ],
      areaList: [
        {
          title: '美食',
          type: 'food',
          subList: [
            {
              name: '日本菜',
              id: 'Japan'
            },
            {
              name: '饮品店',
              id: 'drink'
            },
            {
              name: '面包甜点',
              id: 'cate'
            }
          ]
        },
        {
          title: '酒店住宿',
          type: 'hotal',
          subList: [
            {
              name: '温泉酒店',
              id: 'hot_spring'
            }
          ]
        }
      ]
    }
  },
  components: {
    MSelect
  }
}
</script>
