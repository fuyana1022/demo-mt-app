<template>
  <div class="category">
    <dl class="m-category">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item, index) in list" :key="index">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl class="m-category-section" v-for="(item, index) in cityGroup" :key="index" :id="'city-' + index">
        <dt>{{index}}</dt>
        <dd>
            <span v-for="city in item" :key="city.id">
                {{city.name}}
            </span>
        </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      cityGroup: null,
      cityList: []
    }
  },
  created () {
    let data = [
      {
        id: 50,
        name: '杭州',
        pinyin: 'hangzhou',
        acronym: 'hz',
        rank: 'A',
        firstChar: 'H'
      },
      {
        id: 51,
        name: '宁波',
        pinyin: 'ningbo',
        acronym: 'nb',
        rank: 'B',
        firstChar: 'N'
      },
      {
        id: 112,
        name: '温州',
        pinyin: 'wenzhou',
        acronym: 'wz',
        rank: 'B',
        firstChar: 'W'
      },
      {
        id: 185,
        name: '嘉兴',
        pinyin: 'jiaxing',
        acronym: 'jx',
        rank: 'C',
        firstChar: 'J'
      },
      {
        id: 186,
        name: '湖州',
        pinyin: 'huzhou',
        acronym: 'huzhou',
        rank: 'C',
        firstChar: 'H'
      },
      {
        id: 188,
        name: '金华',
        pinyin: 'jinhua',
        acronym: 'jh',
        rank: 'C',
        firstChar: 'J'
      },
      {
        id: 416,
        name: '富阳',
        pinyin: 'fuyangfy',
        acronym: 'fuyangfy',
        rank: 'E',
        firstChar: 'F'
      },
      {
        id: 452,
        name: '长兴',
        pinyin: 'changxing',
        acronym: 'chx',
        rank: 'E',
        firstChar: 'C'
      },
      {
        id: 476,
        name: '兰溪',
        pinyin: 'lanxi',
        acronym: 'lx',
        rank: 'E',
        firstChar: 'L'
      }
    ]
    let obj = {}
    data.forEach((item, index) => {
      if (!obj[item.firstChar.toUpperCase()]) {
        obj[item.firstChar.toUpperCase()] = []
      }
      obj[item.firstChar.toUpperCase()].push(item)
    })
    console.log(obj)
    this.cityGroup = obj
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "@/assets/css/changecity/category.scss";
</style>
