<template>
  <div>
    <demand-input />
  <div class="demand-list"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DemandInput from './DemandInput.vue';

@Component({
  components: {
    DemandInput,
  },
})
export default class Demands extends Vue {

}
</script>

<style lang="scss" scoped>

</style>

