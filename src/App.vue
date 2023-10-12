<template>
  <div id="app">
    <v-app>
      <v-system-bar
        :app="true"
        :window="true"
        class="systemBar title font-weight-bold font-italic d-flex justify-space-between"
      >
        <div class="flex-grow-1 logo"><v-icon class="logo__icon">$memoryGamepadUpRight </v-icon>i18nTools</div>
        <div class="btn">
          <v-icon class="system__btn" @click="windowMin">$memoryMinusCircle </v-icon>
          <v-icon class="system__btn" @click="windowClose">$memoryRemoveCircle </v-icon>
        </div>
      </v-system-bar>
      <v-main>
        <div class="message__box">
          <v-alert
            v-if="message.show"
            outlined
            :type="message.type"
            prominent
            border="left"
            transition="scale-transition"
          >
            {{ message.msg }}
          </v-alert>
        </div>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      message: this.$message,
    };
  },
  data() {
    return {
      message: {
        type: "info",
        msg: "",
        show: false,
        delay: 3000,
        timer: null,
      },
    };
  },
  mounted() {
    this.ipcRenderer.on("log", (_event, arg) => {
      console.log("main_log:", _event, JSON.parse(arg));
    });
    this.ipcRenderer.on('message', function(event, text) {
      console.log(text);
    });
  },
  methods: {
    windowMin() {
      console.log("windowMin");
      this.ipcRenderer.send("window-min");
    },
    windowClose() {
      console.log("windowClose");
      this.ipcRenderer.send("window-close");
    },
    $message(type = "info", msg = "", delay = 3000) {
      if (this.message.timer) {
        this.message.timer = null;
      }
      this.message.type = type;
      this.message.msg = msg;
      this.message.show = true;
      this.message.timer = setTimeout(() => {
        this.message.show = false;
        this.message.timer = null;
      }, delay);
    },
  },
};
</script>
<style lang="scss" scoped>
.systemBar {
  .logo {
    -webkit-app-region: drag;
    .logo__icon {
      &:hover {
        color:#009688 !important;
      }
    }
  }
  .system__btn {
    &:hover {
      color:#009688 !important;
    }
  }
}
.message__box {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 500;
}
</style>
<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
* {
  margin: 0;
  padding: 0;
}

html {
  overflow-y: auto !important;
}
html,
body {
  height: 100%;
  width: 100%;
}
</style>
