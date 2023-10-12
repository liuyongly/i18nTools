<template>
  <div class="homepage">
    <v-tabs @change="tabChange" v-model="tab">
      <v-tab key="tab-1">
        <v-icon color="green darken-2">$memoryBowArrow </v-icon>
        导出i18n
      </v-tab>
      <v-tab key="tab-2">
        <v-icon color="green darken-2" style="height: auto">$memoryDevice </v-icon>
        导入i18n
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-content>
          <exportPage key="tab-1" />
        </v-content>
      </v-tab-item>
      <v-tab-item >
        <v-content>
          <importPage key="tab-2"/>
        </v-content>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import exportPage from "./components/exportPage.vue";
import importPage from "./components/importPage.vue";
export default {
  name: "HomePage",
  components: { exportPage, importPage },
  data() {
    return {
      tab: 0,
    };
  },

  mounted() {},

  methods: {
    tabChange(val) {
      console.log("val", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.homepage {
  height: 100%;
  padding: 16px;
}
</style>
