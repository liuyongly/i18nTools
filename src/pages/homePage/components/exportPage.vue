<template>
  <div>
    <v-card shaped elevation="2" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">i18n_To_Excel</div>
          <v-list-item-subtitle
            ><span class="font-weight-bold">添加要转换的 i18n 文件。</span> ps:
            xxx_zh, xxx_en, xxx_tw
            <v-btn class="ml-5" outlined rounded text @click="addChoseLang">
              添加语言
            </v-btn></v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-form v-model="valid" ref="fileForm">
        <v-container>
          <v-row v-for="lang in canChoseLangs" :key="lang.value">
            <v-col cols="10" md="4" align-self="center">
              <v-file-input
                v-model="lang.files"
                placeholder="选择 i18n 文件"
                :label="'选择 i18n 文件' + `(${lang.label})`"
                prepend-icon="$memorySword"
              >
                <template v-slot:selection="{ text }">
                  <v-chip
                    label
                    color="primary"
                    close
                    @click:close="deleteFile(lang)"
                  >
                    <v-avatar left>
                      <v-icon>$memoryFile </v-icon>
                    </v-avatar>
                    {{ text }}
                  </v-chip>
                </template>
              </v-file-input>
            </v-col>
            <v-col cols="2" md="4" align-self="center">
              <v-btn outlined rounded text @click="delChoseLang(lang)">
                <v-icon left dark> $memoryHeartBroken </v-icon> 删除
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>

      <v-card-actions>
        <v-text-field
        :value="savePath"
        :disabled="true"
        prepend-icon="$memoryMonitor"
            label="保存位置"
          ></v-text-field><v-btn outlined rounded text @click="choseSavePath"> 请选择保存位置 </v-btn><v-btn outlined rounded text @click="exportHandler"> 导出 </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="addDialogVisible" width="500" @click:outside="close">
      <v-card class="pt-6">
        <v-card-text>
          <v-form ref="addForm" v-model="valid" lazy-validation>
            <v-text-field
              v-model="addFrom.label"
              :rules="addFromRules.labelRules"
              label="Lang Label  (eg: 简体中文)"
              required
            ></v-text-field>

            <v-text-field
              v-model="addFrom.value"
              :rules="addFromRules.valueRules"
              label="Lang Code  (eg: zh-CN)"
              required
            ></v-text-field>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="addLang"
            >
              添加
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import json2xls from "@/plugins/json2xls.js";
import path from "path";
export default {
  name: "exportPage",
  inject: ["message"],
  data() {
    return {
      savePath: '',
      valid: false,
      canChoseLangs: [
        {
          value: "zh-CN",
          label: "简体中文",
          files: null,
        },
        {
          value: "zh_TW",
          label: "繁體中文",
          files: null,
        },
        // {
        //   value: "en_US",
        //   label: "English",
        //   files: null
        // },
      ],
      form: {},
      addFrom: {
        value: "",
        label: "",
        files: null
      },
      addFromRules: {
        valueRules: [(v) => !!v || "请输入 Lang Code"],
        labelRules: [(v) => !!v || "请输入 Lang Label"],
      },
      filesRules: [(v) => !!v || "请选择lang文件"],
      addDialogVisible: false,
    };
  },
  created() {
    this.canChoseLangs = localStorage.getItem("canChoseLangs")
      ? JSON.parse(localStorage.getItem("canChoseLangs"))
      : this.canChoseLangs;
    this.savePath = localStorage.getItem("savePath")
      ? localStorage.getItem("savePath")
      : this.savePath;
  },
  mounted() {},

  methods: {
    addChoseLang() {
      this.addDialogVisible = true;
    },
    deleteFile(lang) {
      this.canChoseLangs.forEach((item) => {
        if (item.value === lang.value) {
          item.files = null;
        }
      });
    },
    exportHandler() {
      const validate = this.$refs.fileForm.validate();
      console.log("exportHandler", validate);
      if (!validate) return;
      const type = [];
      let leastOne = false
      this.canChoseLangs.forEach((lang) => {
        console.log(lang.files);
        if (lang.files) {
          leastOne = true
          lang.files.path && type.push(path.extname(lang.files.path));
        }
      });
      if (!leastOne) return this.message("warning", "请选择至少一个文件");
      if (Array.from(new Set(type)).length > 1)
        return this.message("warning", "请选择同一类型文件");
      if (!this.savePath)
        return this.message("warning", "请选择保存位置");


      json2xls(this.canChoseLangs.filter(lang => lang.files), this.savePath, () => {
        this.message("success", "导出成功!");
      });
    },
    delChoseLang(lang) {
      if (this.canChoseLangs.length == 1)
        return this.message("warning", "至少保留一个语言");
      this.canChoseLangs = this.canChoseLangs.filter(
        (item) => item.value != lang.value
      );
      localStorage.setItem("canChoseLangs", JSON.stringify(this.canChoseLangs));
    },
    addLang() {
      const validate = this.$refs.addForm.validate();
      if (validate) {
        this.canChoseLangs.push({...this.addFrom});
        this.close();
        localStorage.setItem("canChoseLangs", JSON.stringify(this.canChoseLangs));
      }
      console.log("validate", validate);
    },
    close() {
      this.$refs.addForm.reset();
      this.addFrom = {
        value: "",
        label: "",
        files: null,
      };
      this.addDialogVisible = false
    },
    choseSavePath() {
      this.ipcRenderer.invoke('selectFolder', JSON.stringify({title: '选择保存位置'})).then(res =>{
          if (res && !res.canceled) {
            this.savePath = res.filePaths[0];
            localStorage.setItem("savePath", this.savePath);
          }
        })
    }
  },
};
</script>

<style lang="scss" scoped></style>
