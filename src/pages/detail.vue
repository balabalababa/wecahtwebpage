<template>
  <div class="content-box">
    <common-header :tittle="tittle" :showmore="true"></common-header>
    <div class="drag">
      <div
        v-for="({id,label,color},index) in list"
        :style="{width:columnWidth,background:color,height:height+'px'}"
        class="drag__item"
        draggable
        :key="id"
        @dragstart="onDragStart($event,index)"
        @dragover="onDragOver($event,index)"
        @dragend="onDropEnd"
      >{{label}}</div>
    </div>
  </div>
</template>

<script>
import commonHeader from "common/common-header";
const throttle = (fn, delay) => {
  let time = () => new Date().getTime();
  let old = time();
  return (...rest) => {
    if (time() - old > delay) {
      fn(...rest);
      old = time();
    }
  };
};
export default {
  data() {
    return {
      tittle: "详情",
      data: 0,
      column: 3,
      height: 180,
      list: [
        { label: "标签1", id: 0, color: "red" },
        { label: "标签2", id: 1, color: "skyblue" },
        { label: "标签3", id: 2, color: "orange" },
        { label: "标签4", id: 3, color: "gray" },
        { label: "标签5", id: 4, color: "green" }
      ]
    };
  },
  components: {
    commonHeader
  },
  computed: {
    newdata: function() {
      return this.data + 1;
    },
    columnWidth() {
      return (0.8 / this.column) * 100 + "%";
    }
  },
  created() {
    this.init();
  },
  methods: {
    tohome() {
      this.$router.goBack();
    },
    add() {
      this.data++;
    },
    init() {
      console.log(2)
      let fn = (start, target) => {
        console.log(1)
        if (start > target) {
          // 如果移动项在目标项后面，那么从目标项到移动项都向后移动一步
          this.list.splice(target, 0, ...this.list.splice(start, 1));
        }
        if (start < target) {
          // 如果移动项在目标项前面，那么从移动项到目标项都向前移动一步
          this.list.splice(
            start,
            0,
            ...this.list.splice(start + 1, target - start)
          );
        }
        // 更新上一次的位置
        this.oldIndex = target;
        // 更新起始位置
        this.startIndex = target;
      };
      this.exchange = throttle(fn, 100);
    },
    onDropEnd(event) {
      event.target.style.opacity = "";
    },
    onDragOver(event, index) {
      event.preventDefault();
      this.exchange(this.startIndex, index);
    },
    onDragStart(event, index) {
      console.log(1);
      event.target.style.opacity = 0.5;
      event.dataTransfer.dropEffect = "move";
      this.startIndex = index;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.drag {
  display: flex;
  flex-wrap: wrap;
  &__item {
    margin: 10px;
  }
}
</style>
