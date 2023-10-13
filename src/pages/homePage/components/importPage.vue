<template>
  <div>
    <v-card shaped elevation="2" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">Excel_To_i18n</div>
          <v-list-item-subtitle
            ><span class="font-weight-bold">添加要转换的 Excel 文件。</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-form v-model="valid" ref="fileForm">
        <v-container>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="10" md="4">
                <v-select
                v-model="form.type"
                  prepend-icon="$memoryApplicationCode"
                  :items="types"
                  :rules="filesRules.type"
                  label="生成文件类型"
                ></v-select>
              </v-col>
              <v-col cols="10" md="4">
                <v-file-input
                  v-model="form.file"
                  placeholder="选择 Excel 文件"
                  :label="'选择 Excel 文件'"
                  prepend-icon="mdi-paperclip"
                  :rules="filesRules.file"
                  accept=".xlsx"
                >
                  <template v-slot:selection="{ text }">
                    <v-chip
                      label
                      color="primary"
                      close
                      @click:close="deleteFile"
                    >
                      <v-avatar left>
                        <v-icon>$memoryFile </v-icon>
                      </v-avatar>
                      {{ text }}
                    </v-chip>
                  </template>
                </v-file-input>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-form>

      <v-card-actions>
        <v-text-field
        :value="savePath"
        :disabled="true"
        prepend-icon="$memoryMonitor"
            label="保存位置"
          ></v-text-field><v-btn outlined rounded text @click="choseSavePath"> 请选择保存位置 </v-btn><v-btn outlined rounded text @click="exportHandler"> 生成 </v-btn>
      </v-card-actions>
    </v-card>
    <!-- <v-dialog v-model="addDialogVisible" width="500" @click:outside="close">
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
    </v-dialog> -->
  </div>
</template>

<script>
import xls2json from "@/plugins/xls2json.js";
export default {
  name: "exportPage",
  inject: ["message"],
  data() {
    return {
      savePath: '',
      valid: false,
      types: [".js", ".xml", ".strings", ".properties"],
      form: {
        type: ".js",
        file: null,
      },
      filesRules: {
        type: [(v) => !!v || "请选择生成文件类型"],
        file: [(v) => !!v || "请选择i18n Excel 文件"],
      },
      addDialogVisible: false,
    };
  },
  created() {
    this.savePath = localStorage.getItem("savePath_generate")
      ? localStorage.getItem("savePath_generate")
      : this.savePath;
  },
  mounted() {},

  methods: {
    deleteFile() {
      this.form.file = null;
    },
    exportHandler() {
      const validate = this.$refs.form.validate();
      console.log("exportHandler", validate);
      if (!validate) return;
      console.log(
        this.form.file,
        this.form.file.path.replace(this.form.file.name, "")
      );
      if (!this.savePath)
        return this.message("warning", "请选择保存位置");
      xls2json(this.form, this.savePath,() => {
        this.message("success", "生成i18n文件成功!");
      });
    },
    choseSavePath() {
      this.ipcRenderer.invoke('selectFolder', JSON.stringify({title: '选择保存位置'})).then(res =>{
          if (res && !res.canceled) {
            this.savePath = res.filePaths[0];
            localStorage.setItem("savePath_generate", this.savePath);
          }
        })
    }
  },
};
</script>

<style lang="scss" scoped></style>
