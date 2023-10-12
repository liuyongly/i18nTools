module.exports = {
  // 登录
  login: {
    title: "Health Management Platform", //蓋德健康大數據管理平臺 Guider Health Big Data Management Platform
    logIn: "Login", //管理員登錄
    index: "Home page", //首頁
    loging: "Logging...", //登 錄 中
    username: "Please enter the account", //請輸入賬號
    password: "Please enter the password", // 請輸入密碼
    phoneNumber: "Please enter the mobile phone number", // 請輸入手機號
    account: "Please enter email address",
    savePassword: "Remember the password", // 記住密碼
    code: {
      value: "Verification Code", // 驗證碼
      not: {
        match: "The verification code cannot be empty ", //驗證碼不能為空
      },
      btnFont: "Get verification code", // 獲取驗證碼
      check: {
        match: "Please enter the verification code ", //請輸入驗證碼
      },
    },
    user: {
      password: {
        not: {
          match: "The password cannot be empty ", //密碼不能為空
        },
      },
      username: {
        not: {
          match: "The username cannot be empty ", //用戶名不能為空
        },
      },
      phoneNumber: {
        not: {
          match: "The mobile phone number cannot be empty ", //手機號不能為空
        },
        check: {
          match: "Please enter the correct mobile phone number ", //請輸入正確的手機號
        },
      },
    },
    email: "Please enter the email address", //'請輸入郵箱地址',
    tabsView: {
      emailLabel: "Email", //'郵箱登錄',
      accountLabel: "User", // 帳號登入
      messageLabel: "Message", //短信登入
      phoneLabel: "Admin", //管理員登入
    },
    personal: 'Personal Center',//個人中心',
    logOut: 'Logout',//退出登錄',
    logOutStr: 'Are you confirm to logoff and exit the system?',//確定注销并退出系统吗？',
  },
  // 饲主管理
  ownerManagement: {
    form: {
      name: "Name",
    },
    table: {
      headUrl: "Portrait",
      name: "Name",
      email: "Email",
      emergencyContactPhone: "Phone",
      registrationDate: "Registration date",
    },
    language_user: "Language",
    userName: "Name",
    pet_list: "pet list",
    payment_history: "payment history",
  },
  // 宠物管理
  petManagement: {
    UnbindConfirmationMessage: "Are you sure you want to unbind ?",
    transferConfirmationMessage: "Are you sure you want to transfer ?",
    adoptConfirmationMessage: "Are you sure you want to adopt ?",
    transfer: "Transfer",
    pet_transfer: "Pet transfer",
    pdf_report: "PDF report",
    Pet_photo: "Pet photo", //'宠物照片',
    selectUserTitle: "Select user",
    select_device: "Select device encoding", //'选择设备编码',
  },
  //健康项目管理
  healthyManage: {
    //性别
    sex: {
      boy: "Male", // 男
      girl: "Female ", //女
    },
    //搜索提示文字
    iptPlaceholder: {
      userIpt: "Input UserName", // 請輸入使用者姓名
      sTimeIpt: "Start Time", // 請選擇開始時間
      eTimeIpt: "End Time ", //請選擇結束時間
    },
    //血压
    bloodPressure: {
      tabsLabel: {
        historyLabel: "History", // 歷史資料
        warringLabel: "Alarms", // 警報資料
        statisticalLable: "Statistics ", //統計分析
      },
      findBtn: "Search", // 查詢
      resetBtn: "Reset",
      to: "to", // 至
      tableLabel: {
        index: "No.", // 序號
        portrait: "Portrait", //頭像
        name: "Name", // 姓名
        sex: "Gender", // 性别
        bracelet: "Source", // 手環MAC
        bloodPressure: "BP", // 血壓
        status: "Stat", // 狀態
        testTime: "Time", //測量時間
      },
    },
    //血氧
    bloodOxygen: {
      tableLabel: {
        index: "No.", // 序號
        portrait: "Portrait", //頭像
        name: "Name", // 姓名
        sex: "Gender", // 性别
        bracelet: "Source", // 手環MAC
        bloodOxygen: "SpO2", // 血氧
        status: "Stat", // 狀態
        testTime: "Time", //測量時間
      },
    },
    //心率
    heartRate: {
      tableLabel: {
        index: "No.", // 序號
        portrait: "Portrait", //頭像
        name: "Name", // 姓名
        sex: "Gender", // 性别
        bracelet: "Source", // 手環MAC
        heartRate: "HR", // 心率
        status: "Stat", // 狀態
        testTime: "Time", //測量時間
      },
    },
    //体温
    temperature: {
      tableLabel: {
        index: "No.", // 序號
        portrait: "Portrait", //頭像
        name: "Name", // 姓名
        sex: "Gender", // 性别
        bracelet: "Source", // 手環MAC
        temperature: "BT", // 體溫
        status: "Stat", // 狀態
        testTime: "Time", //測量時間
      },
    },
    //计步
    stepCount: {
      tableLabel: {
        index: "No.", // 序號
        portrait: "Portrait", //頭像
        name: "Name", // 姓名
        sex: "Gender", // 性别
        bracelet: "Source", // 手環MAC
        stepCount: "Steps", // 計步
        testTime: "Time", //測量時間
      },
    },
    //定位
    location: {
      tableLabel: {
        index: "No.", // 序號
        portrait: "Portrait", //頭像
        name: "Name", // 姓名
        sex: "Gender", // 性别
        bracelet: "Source", // 手環MAC
        location: "Location", // 定位
        testTime: "Time", //測量時間
      },
    },
    //警报资料
    alarmInformation: {
      tableLabel: {
        index: "No.", // 序號
        value: "Value", // 數值
        status: "Stat", // 狀態
        testTime: "Time", //測量時間
      },
    },
    //统计分析
    statisticalAnalysis: {
      titles: {
        statusTitle: "Analysis by status", // 按狀態分析
        sexTitle: "Analysis by gender", // 按異常性別統計
        ageTitle: "Analysis by age ", //按年齡分析
      },
    },
    //基本资料
    basicInformation: {
      basicTitle: " Basic Information", // 基本資料
      userLabel: {
        sex: "Gender", // 性別
        height: "Height", // 身高
        weight: "Weight", // 體重
        age: "Age", // 年齡
        admissionTime: "Adm. Date", // 入院日期
        category: "Dept.", // 科别
        bedNumber: "Bed", // 床號
        grade: "Ward", // 等級
        bloodPressure: "Personal BP", // 私人血壓
        bloodOxygen: "Personal SpO2", // 私人血氧
        heartRate: "Personal HR", // 私人心率
        temperature: "Personal BT", // 私人體溫
        stepCount: "Personal Steps", // 運動步數
        location: "Personal Location", // 私人定位
        electric: "Battery", // 手環剩余電量
        MAC: "Source", // 手環MAC
        noteInformation: "Remarks", //備註資訊
      },
    },
    //近期
    near: {
      bloodPressureTitle: "Recent BP", // 近期血壓
      bloodOxygenTitle: "Recent SpO2", // 近期血氧
      heartRateTitle: "Recent HR", // 近期心率
      temperatureTitle: "Recent BT", // 近期體溫
      stepCountTitle: "Recent steps", // 近期運動
      locationTitle: "Recent locations", // 近期定位
      tableLabel: {
        status: 'Stat',// 狀態
        time: 'Time',// 時間
        systolicPressure: 'Systolic pressure',// 收縮壓
        diastolicBloodPressure: 'Diatolic pressure',// 舒張壓
        bloodOxygen: 'SpO2',// 血氧
        heartRate: 'HR',// 心率
        temperature: 'BT',// 體溫
        stepCount: 'Steps',// 計步
        location: 'Location '//定位
      }
    },
    common: {
      HDMonitorSituation: 'Scenario',
      WALK: 'Walk',
      HOME: 'At home',
      REST: 'Rest',
      DAY: 'Everyday',
      WEEK: 'Weekly',
      MONTH: 'Monthly',
      YEAR: 'Annually',
      ONCE: 'Once'
    }
  },
  //设备管理
  deviceManage: {
    //手环设备
    bracelet: {
      iptPlaceholder: {
        braceletMAC: "Please enter SmartWatch MAC address ", //請輸入手環MAC
      },
      mechanism: "All Institutions", // 全部機構
      tableLabel: {
        index: "No.", // 序號
        braceletMAC: "Source", // 手環MAC
        username: "User", // 使用者
        mechanism: "Institution", // 所屬機構
        status: "Stat", // 狀態
        deviceTypeName: "Device", //設備型號
        createTime: "Create", // 創建時間
        operation: "Operation ", //操作
      },
      tableTag: {
        unbundling: "Unbind", //解綁
        edit: "Edit ", //編輯
      },
      dialogBtns: {
        save: "Save", // 保存
        cancel: "Cancel", // 取消
        sure: "OK", //確認
      },
      editDialog: {
        title: "Edit", // 編輯
        label: {
          braceletMAC: "Source", // 手環MAC
          equipment: "Device", // 設備類型
          mechanism: "Institution", // 所屬機構
          status: "Status", // 狀態
          username: "User", // 使用者
          changeUser: "Change user ", //更換使用者
        },
        iptPlaceholder: {
          mechanism: "Please select the institution", // 請選擇所屬機構
          status: "Please select the status ", //請選擇狀態
        },
      },
      unbundlingDialog: {
        title: "Unbind", // 解綁
        topLeftFont: "Ready to unbind the user", // 即將解除使用者
        topRightFont: "Bind", // 的綁定
        bottomFont: "Confirm to select the new user", // 確認後即可擇新的使用者
        confirm: {
          title: "Prompt", // 提示
          isSure: "Are you sure to unbind?", // 確認解綁嗎?
          cancel: "Cancel", // 取消
          sure: "OK", // 確認
          success: "Unbind successfully", // 解綁成功
          info: "Unbind cancelled ", //已取消解綁
        },
      },
      deviceSettings: {
        title: "Device settings", //Device settings
        IMEI: "Device IMEI", //Device IMEI
        operator: "Operator", //Operator
        address: "Operator", //Operator
        stepGauge: "Step frequency", //Step frequency
        sleepStartTime: "Sleep start time", //Sleep start time
        sleepEndTime: "Sleep end time", //Sleep end time
        sbpCeiling: "Systolic blood pressure upper threshold", //Systolic blood pressure upper threshold
        rateFrequency: "Heart rate reporting frequency", //Heart rate reporting frequency
        EmergencyCall: "Emergency call mode", //Emergency call mode
        SMSswitch: "SMS upload switch", //SMS upload switch
        EquipmentModel: "Equipment model", //Equipment model
        MaximumRate: "Heart rate upper limit", //Heart rate upper limit
        stepSwitch: "Step switch", //Step switch
        stepTarget: "Step target", //Step target
        PoweSavingr: "Intelligent power saving mode", //Intelligent power saving mode
        TimingMeasuringSwitch:
          "Heart rate/blood pressure/blood oxygen timing measurement switch", //Heart rate/blood pressure/blood oxygen timing measurement switch
        LocationFrequency: "Location reporting frequency", //Location reporting frequency
        GPSswitch: "GPS switch", //GPS switch
        EquipmentVersion: "Heart rate lower limit", //Equipment version
        rateLowerLimit: "Heart rate lower limit", //Heart rate lower limit
        AttitudeAnomalyMonitoring: "Attitude Anomaly Monitoring", //Attitude Anomaly Monitoring
        SceneMode: "Scene mode", //Scene mode
        SleepSwitch: "Sleep switch", //Sleep switch
        DbpLower: "Diastolic blood pressure lower threshold", //Diastolic blood pressure lower threshold
        TrackSwitch: "Track switch", //Track switch
        CallAnsweringMode: "Call answering mode", //Call answering mode
        VoiceReminderReplySwitch: "Voice reminder reply switch", //Voice reminder reply switch
        ON: "ON", //ON
        OFF: "Off", //Off
        minutes5: "5 minutes",
        minutes15: "15 minutes", //15 minutes
        minutes30: "30 minutes", //30 minutes
        minutes45: "45 minutes", //45 minutes
        minutes60: "60 minutes", //60 minutes
        H19: "19 o'clock", //19 oclock
        H19M30: "19:30", //19:30
        H20: "20 points", //20 points
        H20M30: "20:30", //20:30
        H21: "21 o'clock", //21 o'clock
        H21M30: "21:30", //21:30
        H22: "22 o'clock", //22 o'clock
        H22M30: "22:30", //22:30
        H23: "23 o'clock", //23 o'clock
        H23M30: "23:30", //23:30
        SOSCall1: "SOS call mode 1", //SOS call mode 1
        SOSCall2: "SOS call mode 2", //SOS call mode 2
        H5: "5 points", //5 points
        H5M30: "5:30", //5:30
        H6: "6 o'clock", //6 o'clock
        H6M30: "6:30", //6:30
        H7: "o'clock", //7 o'clock
        H7M30: "7:30", //7:30
        H8: "8 o'clock", //8 o'clock
        H8M30: "8:30", //8:30
        H9: "9 o'clock", //9 o'clock
        H9M30: "9:30", //9:30
        H10: "10 points", //10 points
        H10M30: "10:30", //10:30
        H11: "11 o'clock", //11 o'clock
        H11M30: "11:30", //11:30
        vibration: "Vibration", //Vibration
        TheBell: "Ringtone", //Ringtone
        VibrateAndTheBell: "Vibration + Ringtone", //Vibration + Ringtone
        mute: "No vibration and no sound", //No vibration and no sound
        DisableAutomaticAnswering: "Disable automatic answering", //Disable automatic answering
        ImmediatelyAnswer: "Answer immediately", //Answer immediately
        AutomaticAnswer30S: "Auto answer after thirty seconds", //Auto answer after thirty seconds
        AutomaticAnswer10S: "Auto answer after fifteen seconds", //Auto answer after fifteen seconds
        CurrentDeviceStatus: "The current state of the device", //The current state of the device
        offline: "Offline", //Offline
        online: "Online", //Online
        refresh: "Refresh", //Refresh
        restart: "Restart", //Restart
        familyNumber: "Family Number", //Family Number
        banFamilyNumber: "Forbid calls from numbers other than family numbers", //Forbid calls from numbers other than family numbers
        Serial: "Number", //Number
        name: "Name", //Name
        phone: "Number", //Number
        settingSOS: "Whether it is set to SOS number", //Whether it is set to SOS number
        operation: "Operation", //Operation
        RemindType: "Remind type", //Remind type
        RemindModel: "Remind mode", //Remind mode
        RemindTime: "Remind time", //Remind time
        download: "Click to download the language file", //Click to download the language file
        state: "State", //State
        bloodoxygen_enable: "Blood oxygen timing measurement", // Blood oxygen timing measurement
        heartrate_enable: "Heart rate timing measurement", //Heart rate timing measurement
        bloodpressure_enable: "Blood pressure timing measurement", // Blood pressure timing measurement
        fall_enable: "Fall judgment", //Fall judgment
        deviceName: "Device name", //Device name
        sim_phone_type: "Card type", //Card type
        sim_phone: "Device SIM card number", //Device SIM card number
        cycle: "Cycle once", //Cycle once
        cycleInfinite: "Infinite loop", //Infinite loop
        network_type: "Network type", //Network type
        sos_sendmail: "Whether to send SMS for emergency call", //Whether to send SMS for emergency call
        AccountSettings: "Equipment settings", //Account settings
        RemindManagement: "Remind management", //Remind management
        ElectronicFence: "Electronic fence", //Electronic fence
        infrastructure: "Basic Settings",
        FamilyNumberTips: "A MAX of 10 family numbers can be bound",
        DeviceNotBound: `The device is not bound to user, so you can't add the family number`,
        UsersBinding: "User binding",
        Pickupthekids: "Pick up kids", //接孩子
        water: "Drink water", //喝水
        getUp: "Get up", //起床
        medicine: "Take medicine", //吃药
        exercise: "Sports", //运动
        clock: "Punch", //打卡
        safeness: "Report peace", //报平安
        SpecialRemind: "Special reminder", //特殊提醒
        OnlyOnce: "Only once", //仅一次
        repeat: "Repeat", //重复
        WhatDay: "Day of the week", //星期几
        PleaseRemindType: "Please select a reminder type", //请选择提醒类型
        PleaseRemindTime: "Please select a reminder time", //请选择提醒时间
        PleaseRemindWeek: "Select at least one week", //至少选择一个星期
        remindNumberTips: "Reminder set up to 10", //提醒设置最多10个
      },
      changeUserDialog: {
        title: "Select user", // 選擇使用者
        iptPlaceholder: {
          username: "Please enter the user’s name", // 請輸入使用者姓名
          selectSex: "Please select the user’s gender", // 請選擇使用者性別
          selectAge: "Please select the user’s age ", //請選擇使用者年齡
        },
        tableLabel: {
          index: "No.", // 序號
          portrait: "Portrait", // 頭像
          username: "Name", // 姓名
          sex: "Gender", // 性別
          age: "Age ", //年齡
        },
      },
    },
    //信标设备//
    beacon: {
      iptPlaceholder: {
        braceletMAC: "Please enter the SmartWatch MAC address ", //請輸入手環MAC
      },
      mechanism: "All Institutions", // 全部機構
      tableLabel: {
        index: "No.", // 序號
        code: "Device code", // 設備碼
        major: "major",
        minor: "minor",
        mechanism: "Institution", // 所屬機構
        createTime: "Create time", // 創建時間
        operation: "Operation ", //操作
      },
      tableTag: {
        edit: "Edit", // 編輯
        del: "Delete ", //删除
      },
      editDialog: {
        iptPlaceholder: {
          mechanism: "Please select the institution ", //請選擇所屬機構
        },
        label: {
          code: "Device code", // 設備碼
          mechanism: "Institution", // 所屬機構
          major: "major",
          minor: "minor",
        },
        confirm: {
          title: "Prompt", // 提示
          isSure: "Are you sure to delete?", // 確認刪除嗎?
          cancel: "Cancel", // 取消
          sure: "OK", // 確認
          success: "Delete successfully", // 刪除成功
          info: "Delete cancelled ", //已取消刪除
        },
      },
    },
  },
  //系统管理
  systemManage: {
    //系统管理员
    admin: {
      iptPlaceholder: {
        mechanismName: "Please enter institution name", //請輸入機構名稱
        userName: "Please enter the user’s name", //請輸入用戶名稱',
        phoneNumber: "Please enter the mobile phone number", //請輸入手機號
        status: "User’s status", //用戶狀態'
      },
      tableLabel: {
        userNumber: "No.", //用戶编号',
        userName: "Name", //用戶名稱',
        nickName: "NIC", //用戶昵稱',
        phoneNumber: "Mobile Phone", //手機號碼',
        status: "Stat", //狀態',
        createTime: "Create time", //創建時間
        operation: "Operation", //操作'
      },
      dialog: {
        title: {
          addUserTitle: "Add user", //添加用戶',
          editUserTitle: "Edit user", //修改用戶'
        },
        label: {
          nickName: "NIC", //用戶昵稱',
          mechanismName: "Institution", //所屬機構',
          phoneNumber: "Mobile Phone", //手機號碼',
          email: "E-mail", //郵箱',
          userName: "Name", //用戶名稱',
          password: "Password", //用戶密碼',
          sex: "Gender", //用戶性別',
          status: "Status", //狀態',
          postIds: "Post", //崗位',
          role: "Role", //角色',
          mark: "Remark", //備註'
        },
        iptPlaceholder: {
          nickName: "Please enter user’s nickname", //請輸入用戶昵稱',
          mechanismName: "Please select the institution", //請選擇所屬機構',
          phoneNumber: "Please enter the mobile phone number", //請輸入手機號
          email: " Please enter the E-mail", //請輸入郵箱',
          userName: " Please enter the user’s name ", //請輸入用戶名稱',
          password: " Please enter the user’s password ", //請輸入用戶密碼',
          default: "Please select", //請選擇',
          mark: " Please enter the remark", //請輸入內容'
        },
        rules: {
          userName: "The user’s name cannot be empty", //用戶名稱不能為空',
          nickName: " The user’s nickname cannot be empty ", //用戶昵稱不能為空',
          mechanismName: " The user’s institution cannot be empty ", //所屬機構不能為空',
          password: " The user’s password cannot be empty ", //用戶密碼不能為空',
          email: " The user’s E-mail cannot be empty ", //郵箱地址不能為空',
          emailVerification: "Please enter the right e-mail", //請輸入正確的郵箱地址',
          phoneNumber: " The user’s name cannot be empty ", //手機號碼不能為空',
          phoneNumberVerification: "Please enter the right mobile phone number", //請輸入正確的手機號碼'
        },
      },
    },
    //机构设置
    mechanism: {
      iptPlaceholder: {
        mechanism: "Please enter institution name", // 請輸入機構名稱
        status: "Please select status ", //请选择狀態
      },
      mechanismBtn: "Add Institution", //新增機構
      tableLabel: {
        index: "No.", // 序號
        mechanismName: "Name", // 機構名稱
        adress: "Address", // 聯系地址
        status: "Stat", // 狀態
        expireDate: "Expiration date", // 到期日期
        operation: "Operation ", //操作
      },
      tableTag: {
        binding: "Bind the administrator", // 綁定管理員
        edit: "Edit", // 編輯
        del: "Delete ", //删除
      },
      editDialog: {
        addTitle: "Add", // 新增
        label: {
          superiorMechanism: "Superior institution", // 上級機構
          mechanismName: "Name", // 機構名稱
          sort: "Rank", // 顯示排序
          person: "Principal", // 負責人
          phoneNumber: "Phone", // 聯系電話
          email: "E-mail", // 郵箱
          status: "Status ", //機構狀態
        },
        iptPlaceholder: {
          superiorMechanism: "Please select the superior institution", // 請選擇上級機構
          mechanismName: "Please select institution name", // 請選擇机构名称
          person: "Please enter the principal", // 請輸入負責人
          phoneNumber: "Please enter the contact phone number", // 請輸入联系电话
          email: " Please enter the e-mail ", //請輸入郵箱
        },
        tips: {
          superiorMechanism: " Please select the superior institution", // 請選擇上級機構
          mechanismName: " Please select institution name", // 請選擇机构名称
          orderNum: "The rank cannot be empty", // 顯示排序不能為空
          email: " Please enter the correct e-mail", // 請輸入正確的郵箱地址
          phoneNumber: "Please enter the correct phone number", // 請輸入正確的手機號碼
        },
      },
    },
    //权限角色
    permissionRole: {
      iptPlaceholder: {
        roleName: "Please enter the role ", // 請輸入權限角色
      },
      addRoleBtn: "Add Role", // 新增角色
      permissionSettingBtn: "Permission Setting", // 權限設置
      tableLabel: {
        index: "No.", // 序號
        roleName: "Name", // 角色名称
        roleAlias: "Alias", // 角色别名
        roleSort: "Sort", // 角色排序
        operation: "Operation ", //操作
      },
      editDialog: {
        addTitle: "Add", // 新增
        label: {
          roleName: "Name", // 角色名称
          roleAlias: "Alias", // 角色别名
          roleSort: "Sort ", // 角色排序
        },
        iptPlaceholder: {
          roleName: "Please enter role name", // 請輸入角色名稱
          roleAlias: "Please enter role alias", // 請輸入角色别名
          roleSort: "Please enter role sort ", //請輸入角色排序
        },
        tips: {
          roleName: "Please enter role name", // 請輸入角色名稱
          roleAlias: "Please enter role alias", // 請輸入角色别名
          roleSort: " The rank cannot be empty ", //顯示排序不能為空
        },
      },
      permissionDialog: {
        title: "Permission Setting ", //權限配置
      },
    },
    //角色管理
    roleManage: {
      iptPlaceholder: {
        roleName: "Please enter role name", //請輸入角色名稱',
        permissionSymbol: "Please enter permission symbol", //請輸入權限字符',
        status: "Status", //角色狀態',
        startTime: "Start", //開始日期',
        endTime: "End", //結束日期'
      },
      tableLabel: {
        roleNumber: "No.", //角色編號',
        roleName: "Name", //角色名稱',
        permissionSymbol: "Permission Symbol", //權限字符',
        showSort: "Rank", //顯示順序',
        status: "Status", //狀態',
        createTime: "Create Time", //創建時間
        operation: "Operation", //操作'
      },
      dataScopeOptionsLabel: {
        label1: "All data permissions", //全部數據權限',
        label2: "Custom data permissions", //自定數據權限',
        label3: "Local data permissions", //本機構數據權限',
        label4: "Local and following permissions", //本機構及以下數據權限',
        label5: "Personal Data permission only", //僅本人數據權限'
      },
      dialog: {
        label: {
          roleName: "Name", //角色名稱',
          permissionSymbol: "Permission Symbol", //權限字符',
          roleSort: "Rank", //角色順序',
          status: "Status", //狀態',
          menuPermission: "Menu Permission", //菜單權限',
          open: "Expand/Collapse", //展開/折疊',
          checkAll: "Select all/Deselect all", //全選/全不選',
          linkage: "Parent-child linkage", //父子聯動',//上下層聯動
          mark: "Remarks", //備註',
          permissionScope: "Permission scope", //權限範圍',
          dataPermission: "Data permission", //數據權限'
        },
        iptPlaceholder: {
          mark: "Please enter content", //請輸入內容'
        },
        rules: {
          roleName: "The role name cannot be empty", //角色名稱不能為空',
          permissionSymbol: "The permission symbol cannot be empty", //權限字符不能為空',
          roleSort: "The role rank cannot be empty", //角色順序不能為空'
        },
        title: {
          addRoleTitle: "Add Role", //添加角色',
          editRoleTitle: "Edit Role", //修改角色',
          distributionTitle: "Distribute data permission", //分配數據權限'
        },
      },
    },
    //部门管理
    departmentManage: {
      iptPlaceholder: {
        mechanismName: "Please enter institution name", //'請輸入機構名稱',
        status: "Status", //機構狀態'
      },
      tableLabel: {
        mechanismName: "Name", //機構名稱',
        status: "Status", //狀態',
        createTime: "Create Time", //創建時間
        operation: "Operation", //操作'
      },
      dialog: {
        label: {
          superiorMechanism: "Superior institution", //上級機構',
          mechanismName: "Name", //機構名稱',
          showSort: "NIC", //顯示排序',
          person: "Principal", //負責人',
          phoneNumber: "Phone", //聯系電話',
          email: "E-mail", //郵箱',
          status: "Status", //機構狀態'
        },
        iptPlaceholder: {
          superiorMechanism: "Please select superior institution", //選擇上級機構',
          mechanismName: "Please enter institution name", //'請輸入機構名稱',
          person: "Please enter principal", //請輸入負責人',
          phoneNumber: "Please enter contact phone number", //請輸入聯系電話',
          email: "Please enter E-mail", //請輸入郵箱'
        },
        rules: {
          superiorMechanism: "The superior institution cannot be empty", //上級機構不能為空',
          mechanismName: "The institution name cannot be empty", //機構名稱不能為空',
          showSort: "The rank cannot be empty", //顯示排序不能為空',
          email: "Please enter the right e-mail", //請輸入正確的郵箱地址',
          phoneNumber: "Please enter the right phone number", //請輸入正確的手機號碼'
        },
        title: {
          addTitle: "Add Institution", //添加機構',
          editTitle: "Edit Institution", //修改機構'
        },
      },
    },
    menuManage: {
      iptPlaceholder: {
        menuName: "Please enter the menu name", //請輸入菜單名稱',
        menuStatus: "Status", //菜單狀態'
      },
      tableLabel: {
        menuName: "Name", //菜單名稱',
        icon: "Icon", //圖標',
        sort: "Rank", //排序',
        permission: "Permission ID", //權限標識',
        component: "Component Path", //組件路徑',
        status: "Status", //狀態',
        createTime: "Create Time", //創建時間
        operation: "Operation", //操作'
      },
      dialog: {
        title: {
          addMenuTitle: "Add Menu", //添加菜單',
          editMenuTitle: "Edit Menu", //修改菜單'
        },
        label: {
          superiorMenu: "Superior menu", //上級菜單',
          menuType: "Yype", //菜單類型',
          menuIcon: "Icon", //菜單圖標',
          menuName: "Name", //菜單名稱',
          showSort: "Rank", //顯示排序',
          outerChain: "Outreach or not", //是否外鏈',
          routerUrl: "Routing address", //路由地址',
          component: "Component path", //組件路徑',
          permission: "Permission ID", //權限標識',
          showStatus: "Display status", //顯示狀態',
          menuStatus: "Menu status", //菜單狀態',
          keep: "Cache or not", //是否緩存'
        },
        iptPlaceholder: {
          superiorMenu: "Select superior menu", //選擇上級菜單',
          menuIcon: "Click to select icon", //點擊選擇圖標',
          menuName: "Please enter menu name", //請輸入菜單名稱',
          routerUrl: " Please enter routing address", //請輸入路由地址',
          component: " Please enter component path", //請輸入組件路徑',
          permission: "Permission ID", //請權限標識',
          showStatus: "Display status", //顯示狀態',
          menuStatus: "Menu status", //菜單狀態',
          keep: "Cache or not", //是否緩存',
          iconName: " Please enter icon name", //請輸入圖標名稱'
        },
        menuTypeRadioLabel: ["Catalogue", "Menu", "Button"], // 目錄, 菜單, 按鈕
        outerChainRadioLabel: ["Yes", "No"], // 是, 否
        keepRadioLabel: ["Cache", "No cache"], // 緩存, 不緩存
      },
    },
    //病房管理
    wardManage: {
      iptPlaceholder: {
        location: "Please select the building", //請選擇樓宇
        floor: "Please select the floor", //請選擇樓層
        roomName: "Please enter the room name", //請輸入房間名稱
        bedNumber: " Please enter the bed number", //請輸入床號
      },
      tableLabel: {
        index: "No.", //序号
        roomName: "Room", //房間名稱
        floor: "Floor", //所屬樓層
        location: "Building", //所屬樓宇
        bedNumber: "Bed", //床號
        manager: "Manager", //管理者
        createTime: "Create Time", //創建時間
        operation: "Operation", //操作
      },
      editDialog: {
        addBedBtn: "Add bed number", //增加床號
        selectManager: "Select manager", //選擇管理者
        rules: {
          building: "The building cannot be empty", //所屬樓宇不能為空
          floor: "The floor cannot be empty", //所屬樓層不能為空
          roomName: "The room name cannot be empty", //房間名稱不能為空
        },
      },
      changeManageDialog: {
        iptPlaceholder: {
          manager: "Please enter the name of the manager", //請輸入管理者姓名
          sex: "Please select the gender of the manager", //請選擇管理者性別
          category: "Please select the category", //請選擇科別
        },
        tableLabel: {
          index: "No.", //序號
          portrait: "Portrait", //頭像
          name: "Name", //姓名
          sex: "Gender", //性別
          category: "Category", //科別
        },
      },
    },
    //醫生管理
    doctorManage: {
      iptPlaceholder: {
        username: "Please enter the name", //請輸入姓名
        phoneNumber: "Please enter the phone number", //請輸入聯系電話
      },
      addBtn: "Add Doctor", //新增醫生
      tableLabel: {
        index: "No.", //序號
        portrait: "Portrait", //頭像
        username: "Name", //姓名
        sex: "Gender", //性別
        phoneNumber: "Phone", //聯繫電話
        title: "Title", //職稱
        mechanism: "Institution", //所屬機構
        createTime: "Create Time", //創建時間
        operation: "Operation", //操作
      },
      editDialog: {
        label: {
          portrait: "Portrait", //頭像
          username: "Name", //姓名
          sex: "Gender", //性别
          birthday: "Birth", //出生日期
          IDCard: "ID number", //身份證號
          mechanism: "Institution", //所屬機構
          category: "Category", //所屬科别
          title: "Title", //職稱
          admin: "Bind admin", //綁定管理員
          email: "E-mail", //個人郵箱
          state: "Status", //狀態
          address: "Address", //詳細地址
          doctorID: "Doctor license", //醫師證
          IDCardIn: "ID Card(front)", //身份照(正)
          IDCardOut: "ID Card(back)", //身份照(反)
          info: "Introduction", //簡介
        },
        iptPlaceholder: {
          username: "Please enter the name", //請輸入姓名
          birthday: "Please select the date of birth", //請選擇出生日期
          IDCard: "Please enter the ID number", //請輸入身份證號
          category: "Please select the category", //請選擇科別
          title: "Please select the title", //請選擇職稱
          admin: "Please select the admin", //選擇管理員
          email: "Please enter the E-mail", //請輸入個人郵箱
          state: "Please select the status", //請選擇狀態
          address: "Please enter the address", //請輸入詳細地址
          info: "Please enter the doctor introduction", //請輸入醫生簡介
        },
      },
      permissionDialog: {
        title: "Permission configuration", //權限配置
      },
    },
  },
  //科别管理
  departmentManage: {
    departmentName: "Dept", //科室名称
    person: "Principal", //负责人
    phone: "Phone", //电话
    iptPlaceholder: {
      departmentName: "Please enter the department name", //请输入科室名称
      person: "Please enter the leader name", //请输入负责人
      phone: "Please enter the mobile phone number", //请输入电话
    },
  },
  userInfo: {
    user: "Personal Information", //個人信息',
    userName: "User Name", //用戶名稱',
    userPhone: "Mobile Phone", //手機號碼',
    userEmail: "E-mail", //用戶郵箱',
    company: "Institution", //所屬機構',
    roule: "Role", //所屬角色',
    creatTime: "Create date", //创建日期',
    info: "Basic Information", //基本資料',
    updatePwd: "Change password", //修改密碼',
    userIsNull: "User name cannot be empty ", //用戶昵稱不能為空',
    emailIsNull: "E-mail cannot be empty ", //郵箱地址不能為空',
    pleaseEmail: "Please enter the right e-mail", //請輸入正確的郵箱地址',
    phoneIsNull: "The mobile phone number cannot be empty ", //手機號碼不能為空',
    telphone: "Mobile Phone", //手機號碼',
    userNick: "Nickname", //用戶昵稱',
    pwdnot: "The password entered twice are inconsistent", //兩次輸入的密碼不一致',
    oldPwdIsNull: "The old password cannot be empty ", //舊密碼不能為空',
    newPwdIsNull: "The new password cannot be empty ", //新密碼不能為空',
    affirmPwdIsNull: "Confirm password cannot be empty ", //確認密碼不能為空',
    pwdHint: "The length is 6-20 characters", //長度在 6 到 20 個字符',
    pleasePwd: "Please confirm the password", //請確認密碼',
    pleaseNewPwd: "Please enter the new password", //請輸入新密碼',
    pleaseOldPwd: "Please enter the old password", //請輸入舊密碼',
    oldPwd: "Old PWD", //舊密碼',
    newPwd: "New PWD", //新密碼',
    affirmPwd: "Confirm the password", //確認密碼'
  },
  // 通用
  name: "Name",
  headUrl: "Portrait", //头像
  noData: "No Data", //无数据
  search: "Search",
  add: "Add",
  edit: "Edit",
  delete: "Delete",
  submit: "Save",
  cancel: "Cancel",
  reset: "Reset",
  back: "Back",
  confirm: "OK",
  export: "Export", // 导出
  boy: "Male", //男
  girl: "Female", //女
  BASE: "Basic", //'基础',
  NORMAL: "Normal", //'普通',
  GOLD: "Gold Card", //'金卡',
  PLATINUM: "Platinum card", //'铂金卡',
  index: "No.", //序號
  sex: "Gender",
  age: "Age ",
  state: "State",
  operation: "Operation", //操作
  edit_history: "Edit history", //编辑历史
  Request_delete: "Apply for deletion", // 申请删除
  detail: "Detail", //詳情
  REGISTER: "Registered",
  USER_EDIT: "User Edit",
  SYSTEM_EDIT: "background editing",
  email: "E-mail",
  emergencyContactPhone: "Phone", //聯繫電話
  ps_emergencyContactPhone: "Please enter the contact phone number", //請輸入聯繫電話',
  birthday: "Birthday", //出生日期
  ps_birthday: "Please select the birth date", //請選擇出生日期',
  marriage: "Marriage",
  ps_default: "Please select", //請選擇',
  occupation: "Occupation",
  address: "Address", //詳細地址
  ps_address: "Please enter the address", //請輸入詳細地址
  edit_time: "edit time",
  current_points: "current points",
  Pet_name: "Pet name", //'宠物名称',
  Chip_number: "Chip number", //'晶片号码',
  sterilization: "Ligation", //'绝育',
  variety: "Pet Type", //'种类',
  ps_variety: "Please select a variety", //'请选择种类',
  category: "Variety",
  ps_category: "Please select a variety",
  owner: "Owner", //'饲主',
  ps_owner: "Please select the owner", //'请选择饲主',
  Device_coding: "Device code", //'设备编号',
  ps_Device_coding: "Please select the device code", //'请选择设备编号',
  equipmentType: "device type",
  male: "Male", //'公',
  female: "Female", //'母',
  DOG: "Dog", //'狗',
  CAT: "Cat", //'猫',
  other: "Other", //'其他',
  no: "No",
  yes: "Yes",
  oneFullYearOfLife: "Y/O", //周歲
  num_month: "month", //'个月',
  orderNo: "Order number", //'订单号',
  goodsName: "Product name", //'商品名称',
  consumption_points: "consumption points",
  pay_amount: "Payment amount", //'支付金额',
  pay_time: "payment time",
  Owner_information: "Owner information", //'所有者信息',
  deleteSuccess: "Delete successfully", //刪除成功
  addSuccess: "Added successfully", //新增成功',
  editSuccess: "Edited successfully", //修改成功',
  optional: "Successful operation", //操作成功
  operator: "Operator", //Operator
  createTime: "Create", // 創建時間
  Operation_log_details: "Operation log details", //'操作日志详情',
  record_type: "record type",
  Operating_time: "Operating time", //'操作时间',
  before_modification: "before modification",
  after_modification: "after modification",
  UPDATE_USER: "update user",
  UPDATE_PET: "update pet",
  Reason_deletion: "Reason for deletion",
  Please_reason_deletion: "Please enter the reason for deletion",
  normal: "Normal", //正常
  earlyWarning: "Early warning", //預警
  urgency: "Urgency", //緊急,//Urgency
  heartbeat: "HR",
  breathe: "Breath",
  theyCount: "Steps",
  emotion: "Emotion",
  CALM: "Calm", //'平静',
  REST: "Rest",
  EXCITED: "Excited",
  Please_Pet_name: "Please enter the pet name", //'请输入宠物名称',
  Please_owner_name: "Please enter the owner name.", //'请输入饲主姓名',
  editStatus: "Edit Status",
  petStatus: "Pet Status",
  adopt: "Adopt",
  transfer: "Transfer",
  Front_and_back_feet: "length",
  ps_Front_and_back_feet: "Please enter body length",
  ps_Body_weight: "Please enter the weight", //'请输入体重',
  ps_Body_length: "Please enter body length", //'请输入身长',
  Body_weight: "Weight",
  Body_length: "Height",
  please_select: "Please select",
  inputName: "Please enter name", // 請輸入名稱
  Membership_level: "Membership Level", //'会员级别',
  ps_Membership_level: "Please select membership level", //'请选择会员级别',
  please_sex: "Please select a gender",
  ps_Chip_number: "Please enter the chip number", //'请输入晶片号码',
  Registration_start_time: "Registration start time",
  Registration_end_time: "registration end time",
  registrationDate: "Registration date",
  select: "Select",
  notice: "Notice",
  deviceTypeName: "Device type",
  PDFreport: "PDF report",
  submitPDF: "Preview",
  time: "Time",
  project: "Item", // 項目
  stepCount: "Steps", // 計步
  healthReport: "Measurement Report",
  pet_info: "Pet basic information",
  gender: "Gender", //性別
  way_of_care: "way of care",
  FAMILY: "family care",
  PERSONAL: "Personal Care",
  measuredResults: "Measured results",
  unit: "Unit",
  abnormalDescription: "Abnormal description",
  normalReferenceValue: "Normal reference value",
  bmi: "BMI",
  height: "Height", //身高(cm)
  times_min: "times/minute",
  respiratoryRateGraph: "Respiratory graph",
  RRIGraph: "RRI graph",
  weightGraph: "weight graph",
  stepCountGraph: "step counting graph",
  emotionGraph: "emotion trend graph",
  heartRateGraph: "HR Graph",
  downloadPDF: "Download PDF",
  startDate: "Start Date",
  endDate: "End Date",
  value: "Value",
  heartRate: "HR", // 心率
  neutered: "Ligated", //'已绝育',
  unneutered: "Not ligated", //'未绝育',
  Health_data: "Health profile",
  health_data: "Health profile",
  Please_health_data: "Please select at least one health data", //'请至少选择一个健康数据',
  Health_alert: "Health alert", //'健康警报',
  Health_Passbook: "Health Passbook", // 健康存折
  years: "Year",
  month: "Month",
  weeks: "week",
  day: "Day",
  date: "Date",
  Activity_index: "Activity index", //'活动指数',
  Rest_index: "Rest index", //'休息指数',
  calorie: "Calorie", // '卡路里'
  weight: "Weight",
  report_theme: "theme",
  Please_select_an_event_type: "Please select an event type", //'请选择事件类型',
  event_type: "event type", //'事件类型',
  VACCINE: "Vaccine injection", //'疫苗注射',
  DAILY_MEAL: "Daily meal", //'日常膳食',
  SPECIAL_EVENT: "Special event", //'特殊事件',
  WEIGHT_HEIGHT: "Weight/Height", //'体重/身高',
  PERIODIC_ACTIVITY: "Periodic activity", //'周期活动',
  Ambient_temperature: "Ambient TEMP", //'环境温度',
  Ambient_humidity: "Ambient humidity", //'环境湿度',
  currentCalorie: "Current Calories",
  dreamCalorie: "Ideal Calories",
  Appointment_Time: "Appointment period",
  Appointment_Status: "Appointment status",
  doctor: "Doctor",
  NOTARRIVED: "Not started",
  QUEUING: "Queuing",
  WAITINQUIRY: "Waiting for consultation",
  INQUIRING: "Receiving consultations",
  END: "End the consultation",
  ABSENT: "Absent",
  UNPAID: "Unpaid", //'未支付',
  PAYMENTS: "Paying", //'支付中',
  PAID: "Paid", //'已支付'
  DOCTORCONFIRM: "Doctor confirm", //'医生确认',
  REFUSE: "Refused", //'拒绝',
  CANCELING: "Canceling",
  Topic_Keywords: "Please enter topic keywords",
  shiftMinutes: "Ahead of time",
  reminders: "Reminder", //'提醒',
  history: "History",
  Give_away_integral: "Give away points", //'赠送积分',
  Freezing_integral: "Freezing integral", //'冻结积分',
  integral: "Integral", //'积分',
  points_record: "Points record", //积分记录
  annotation: "Remarks", //備註',
  userName: "Name", //用戶名稱',
  Please_select_user: "Please select the user",
  describes: "Remarks", //備註
  ps_describes: "Please enter remarks", //請輸入備註',
  Please_integral: "Please enter the integral", //'请输入积分',
  hospital_name: "Hospital name", //'医院名称',
  ps_hospital_name: "Please enter the name of the hospital", //'请输入医院名称',
  fail: "Failure", //失败
  del: "Delete ", //删除
  reminder: "Warning",
  success: "Success",
  updateok: "The update is successful", //更新成功
  REQUEST: "To be reviewed", //'待审核',
  AGREE: "Pass", //'通过',
  REJECT: "Rejected", //'驳回',
  Audit_identity: "Audit identity", //'审核身份',
  Service_time: "Service Time", //'服务时间',
  Service_date: "Service Date", //'服务日期',
  Educational_level: "Educational level", //'教育程度',
  diploma: "Diploma certificate", //'毕业证书',
  ps_Educational_level: "Please select the educational level", //'请选择教育程度',
  phone: "Phone",
  Please_select_hospital: "Please select a hospital", //'请选择医院',
  Please_select_the_department: "Please select the department", //'请选择科室',
  delMessage: {
    delhint: "Are you sure to delete name", //是否確認刪除名稱',
    data: "?",
  },
  warning: "Warning",
  bindingAdmin: "Please bind the administrator", //請先綁定管理員
  delsuccee: "Deleted successfully", //刪除成功',
  addsuccee: "Added successfully", //添加成功',
  editsuccee: "Modified successfully", //修改成功',
  time_type: "Time type", //'时间类型',
  Please_time_type: "Please select the time type", //'请选择时间类型',
  Consulting_room: "consulting room", //'诊室',
  Please_Consulting_room: "Please enter the consultation room", //'请输入诊室',
  select_Service_time: "Select one or more dates", //'选择一个或多个日期',
  start_time: "Start time", //'开始时间',
  Please_end_time: "Please choose the end time", //'请选择结束时间',
  Please_start_time: "Please select the start time", //'请选择开始时间',
  end_time: "End time", //'结束时间',
  people_appointments: "Appointment number",
  morning: "Morning",
  afternoon: "Afternoon",
  evening: "Evening",
  userManagement: {
    table: {
      index: "No.", //序號
      boy: "Male", //男
      girl: "Female", //女
    },
    rules: {
      deviceCode: 'Please enter device MAC',//請輸入設備MAC',
      devicetypeAll: 'Please select device type' // 請選擇設備型號
    }
  },
  vip_type: "Member type", //'会员类型',
  Please_vip_type: "Please select the membership type", //'请选择会员类型',
  Give_away_vip: "Give away member", //'赠送会员',
  certificate: {
    license: "License", //許可證
    licenseList: "License List", //許可證列表
    institutions: "Name", //機構名稱
    inputInstitutions: "Please enter institution name", //請輸入機構名稱
    createTime: "Create Time", //建立時間
    startTime: "Start", //開始時間
    endTime: "End", //到期時間
    choosestartTime: "Please select the start time", //請選擇開始時間
    chooseendTime: "Please select the end time", //請選擇到期時間
  },
  vipHistory: "Member Record",
  Validity_type: "Validity type", //"有效期类型",
  number_of_days: "number of days",
  specific_date: "specific date", //"特定日期",
  Validity_period: "Validity period (days)", //'有效期(天)',
  Please_Validity_period: "Please enter the validity period", //'请输入有效期',
  select_date: "select date",
  choose_the_owner: "Choose the owner",
  renewStatus: "Renewal Status",
  updateTime: "Update Time", //修改时间
  Please_goodsName: "Please enter the product name", //'请输入商品名称',
  goodsType: "Goods type", //'商品类型',
  Please_goodsType: "Please select the type of goods", //'请选择商品类型',
  enable: "On the shelf", //'上架',
  price: "Price", //'价格',
  Please_price: "Please enter the price", //'请输入价格',
  Member_level: "Member level", //'会员等级',
  Please_Member_level: "Please select the membership level", //'请选择会员等级',
  Product_details: "Product Details", //'商品详情',
  Please_Product_details: "Please enter product details", //'请输入商品详情',
  POINT: "Points", //'积分',
  VIP_BASE: "Basic membership", //'基础会员',
  VIP_NORMAL: "Ordinary member", //'普通会员',
  VIP_GOLD: "Gold card member", //'金卡会员',
  VIP_PLATINUM: "Platinum Card Member", //'铂金卡会员',
  ONLINE_DOCTOR: "Online Doctor", //'在线医生',
  all: "All",
  platform: "Platform",
  Please_platform: "Please select a platform",
  iosId: "Apple Id",
  Please_iosId: "Please enter in the apple id",
  REFUNDING: "Refunding", //'退款中',
  REFUND_OK: "Refund successful", //'退款成功',
  REFUND_ERROR: "Refund failed", //'退款失败',
  REFUND_state: "Refund status", //'退款状态',
  refund_orderNo: "Refund order number", //'退款订单号',
  PAY_TIMEOUT: "Payment timeout", //'支付超时',
  REFUND: "Refunded", //'已退款',
  order_state: "Order status", //'订单状态',
  income: "Income", //'收入',
  savesuccee: "Saved successfully", //'保存成功',
  firstPage: "Page 1",
  secondPage: "Page 2",
  thirdPage: "Page 3",
  applicant: "applicant",
  DELETE_USER: "delete user",
  deleted_person: "deleted person",
  Approval_Status: "Approval Status",
  This_user_has_been_deleted: "The user has been deleted",
  review_: "Review",
  Reason_for_rejection: "Reason for rejection",
  Please_reason_for_rejection: "Please enter the reason for rejection",
  Please_enter_the_system_module: "Please enter the system module", //'请输入系统模块',
  Please_enter_operator: "Please enter the operator", //'请输入操作人',
  Operation_type: "Operation type", //'操作类型',
  Operating_status: "Operating status", //'操作状态',
  Delete_pet_owner: "Delete owner/pet",
  DELETE_PET: "Delete pet",
  toLead: "Import",
  toLeadFile: "Import file",
  selectCompontId: "Please select your institution!",
  selectUpdateFile: "Please select the upload file! ",
  selectFile: "Select file",
  updatePlease: "Please upload",
  longSize: "The size does not exceed",
  formatFor: "Format is",
  flie: "file",
  deleteBtn: "Delete",
  fileTypeRules: "The file format is incorrect, please upload",
  typeFile: "Format file",
  fileSizeRules: "The upload file size cannot exceed",
  fileNumRules: "The number of uploaded files cannot exceed",
  num: "number",
  downloadXlsx: "Download Template",
  device_type: "device type",
  Reason_device_type: "Please select a device type",
  device_channel: "Channel",
  ps_device_channel: "Please enter a channel",
  firstEnableTime: "FirstEnableTime",
  lastEnableTime: "LastEnableTime",
  Device_Edit_Status: "DeviceEditStatus",
  device_status: "device status",
  DELETE_BY_USER: "User delete",
  ENABLE_BY_USER: "User enabled",
  DELETE_BY_SYSTEM: "Background delete",
  ENABLE_BY_SYSTEM: "background enabled",
  TO_BE_PAIRED: "To be paired",
  ps_equipment_type_name: "Please enter the device type name", //'请输入设备类型名称',
  equipmentName: 'Device Type Name',//'设备类型名称',
  equipmentInfo: 'Device Type Description',//'设备类型描述',
  devicename: 'The device name cannot be empty',//设备名称不能为空
  deviceTexts: 'The device type cannot be empty',//设备类型不能为空
  createDeviceType: 'New Device Type',//新增设备类型
  updateDeviceType: 'Changing the Device Type',//修改设备类型
  setting_type: 'Setting type',//'设置类型',
  Please_setting_type:'Please select the setting type',//'请选择设置类型',
  Please_description:'Please enter a description',//'请输入描述',
  Please_numerical:'Please enter a value',//'请输入数值',
  numerical: 'Rank number',
  description: "Description",
  USER_MAX_PET_BAND:'Pet binding upper limit',//'宠物绑定上限',
  PET_DOG_HD_TYPE:'Pet dog health data',//'宠物狗健康数据',
  PET_CAT_HD_TYPE:'Pet cat health data',//'宠物猫健康数据',
  RATIO_POINT:'Point conversion ratio',//'积分兑换比率',
  RATIO_PRICE:'Online doctor platform share percentage',//'在线医生平台分成百分比',
  MAX_POINT:'Upper limit of available points',//'可用积分上限',
  RATE_POINT_GIFT: 'Point gift rate',//'积分赠送比率',
  bulletin_title: 'Title of Bulletin',
  bulletin_form: {
    bulletin_send_time: 'Sending Time',
    bulletin_send_frequency: 'Sending Frequency',
    bulletin_send_Intervals: 'Sending Intervals(Second)',
    bulletin_send_subject: 'Sending Object',
    ps_bulletin_send_mode: 'Please select the sending method',
    ps_bulletin_send_time: 'Please select the sending time',
    ps_bulletin_send_frequency: 'Please select the sending frequency',
    ps_bulletin_send_Intervals: 'Please select a time interval',
    ps_bulletin_send_subject: 'Please select the sender',
    send_immediately: 'Send now',
    send_certain_date:'Specific Date',
    ps_bulletin_title: 'Please enter the bulletin title',
    bulletin_content: 'Bulletin content',
    ps_bulletin_content: 'Please enter bulletin content',
    all: 'All',
  },
  add_announcement: 'Add announcement',
  edit_announcement: 'Edit Announcement',
  check_announcement: 'View Announcement',
  examineBtn: "Check",
  choseOwner: 'Selected owner',//已选饲主
  update: 'Edit',//修改',
  resetConfirm: {
    left: 'Please enter',//請輸入',
    right: ' new password',//的新密碼',
    title: 'Prompt',//提示',
    success: 'Modified successfully! The new password is '//修改成功，新密碼是：'
  },
  StatusConfirm: {
    isSureLeft: 'Please confirm the',//確認要',
    isSureRight: 'role?',//角色吗?',
    isUser: 'user?'//用戶吗?'
  },
  use: 'Enable',//啟用',
  notuse: 'Disable',//停用',
  inputComplexFont: 'Please enter Traditional Chinese',//請輸入繁體',
  inputEnglish: 'Please enter English',//請輸入英文',
  complexFont: ' Traditional Chinese',//繁體',
  english: 'English',//英文',
  addroleName: 'Add role name',//角色名稱
  language: {
    zh_CN: 'Please enter Simplified Chinese',//请输入简体中文
    vi_VN: 'Please enter Vietnamese',//请输入越南文
    ja_JP: "Please enter Japanese",
  },
  menu: {
    pleasemenuName: 'Please enter menu name',//請輸入菜單名稱',
    menuState: 'Menu status',//菜單狀態',
    menuName: 'Name',//菜單名稱',
    icon: 'Icon',//圖標',
    sorting: 'Rank',//排序',
    identify: 'Permission label',//權限標識',
    componentPath: 'Component path',//組件路徑',
    menuHigher: 'Superior menu',//上級菜單',
    pleasemenuHigher: 'Please select superior menu',//選擇上級菜單',
    menuType: 'Type',//菜單類型',
    directory: 'Catalogue',//目錄',
    menu: 'Menu',//菜單',
    button: 'Button',//按鈕',
    menuIcon: 'Icon',//菜單圖標',
    clickIcon: 'Click to select icon',//點擊選擇圖標',
    accordingSort: 'Rank',//顯示排序',
    linkOut: 'Outreach or not',//是否外鏈',
    roueAddress: 'Routing address',//路由地址',
    pleaseroueAddress: 'Please enter routing address',//請輸入路由地址',
    pleasecomponentPath: 'Please enter component path',//請輸入組件路徑',
    accordingState: 'Display status',//顯示狀態',
    iscache: 'Cache or not',//是否緩存',
    cache: 'Cache',//緩存',
    notcache: 'No cache',//不緩存',
    nameempty: 'The menu name cannot be empty',//菜單名稱不能為空',
    menuempty: 'The menu order cannot be empty ',//菜單順序不能為空',
    roueempty: 'The routing address cannot be empty ',//路由地址不能為空',
    categories: 'Main category',//主類目',
    addmenu: 'Add Menu',//添加菜單'

    ownerMenu: 'Owner Mgmt',
    petMenu: 'Pet Mgmt',
    healthMenu: 'Health Mgmt',
    orderMenu: 'Order Mgmt'
  },
  addMenuName:'Add menu name',//菜單名稱,
  dict: {
    inputDictName: 'Please enter dictionary name',//請輸入字典名稱',
    inputDictType: 'Please enter dictionary type',//請輸入字典類型',
    inputAnnotation: 'Please enter annotation',//請輸入批註',
    inputDictLabel: 'Please enter dictionary label',//請輸入字典標籤',
    inputDictValue: 'Please enter dictionary value',//請輸入字典鍵值',
    selectState: 'Please select status',//請選擇狀態',
    dictName: 'Name',//字典名稱',
    dictType: 'Type',//字典類型',
    annotation: 'Remarks',//備註',
    dictCode: 'Code',//字典編碼',
    dictLabel: 'Label',//字典標籤',
    dictValue: 'Value',//字典鍵值',
    dictSort: 'Rank',//字典排序',
    vaildDictName: 'The dictionary name cannot be empty',//字典名稱不能為空',
    vaildDictType: 'The dictionary type cannot be empty ',//字典類型不能為空',
    vaildDictLabel: 'The data label cannot be empty ',//數據标签不能為空',
    vaildDictValue: 'The data value cannot be empty ',//數據鍵值不能為空',
    vaildDictSort: 'The data rank cannot be empty ',//數據順序不能為空',
    addDictType: 'Add dictionary type ',//添加字典類型',
    editDictType: 'Edit dictionary type',//修改字典類型',
    addDictData: 'Add dictionary data',//添加字典數據',
    editDictData: 'Edit dictionary data',//修改字典數據',
    addDictName: 'Add dictionary name',//添加字典名稱',
    addDictLabel: 'Add dictionary label',//添加字典標籤',
    selectOperationType: 'Please select operation type',//請選擇操作類型',
    selectOperationState: 'Please select data status',//請選擇數據狀態',
  },
  deleteDiceOne: 'Are you sure to delete data who’s dictionary code is “',//是否確認删除字典編號為"',
  deleteDiceTwo: '”data',//"的數據項?',
  icon: 'Icon',//圖標',
  // log
  Log_ID: 'Log ID',//'日志ID',
  System_modules: 'System modules',//'系统模块',
  start_date: 'Start date',//'开始日期',
  end_date:'End date',//'结束日期',
  Request_method: 'Request method',//'请求方式',
  Host: "Host",
  Operating_location: 'Operating location',//'操作地点',
  Operation_date:'Operation date',//'操作日期',
  Operation_module: 'Operation module',//'操作模块',
  login_information: 'Login information',//'登录信息',
  Request_address: 'Request address',//'请求地址',
  Operation_method: 'Operation method',//'操作方法',
  Request_parameters: 'Request parameters',//'请求参数',
  return_parameter: 'Return parameter',//'返回参数',
  Exception_information: 'Exception information',//'异常信息',
  activity: 'Activity',//"活动力",
  vaildComplexFont: 'The traditional Chinese characters cannot be empty ',//繁體不能為空',
  vaildEnglish: 'The English cannot be empty ',//英文不能為空',
  sq: {
    form: {
      name: 'Name',// 名稱
      inputName: 'Please enter name',// 請輸入名稱
      selectMAC: 'Please select MAC',// 請选择MAC
      theGroundFloor: 'Ground',// 地上樓層
      theUndergroundFloor: 'Lower',// 地下樓層
      allRadio: 'Select all',// 全選
      unAllRadio: 'Inverse',// 反選
      selectLongMAC: 'Please enter keyword',// 請輸入關鍵詞
      titleMAC: 'Source',// 設備MAC
      lng: 'Longitude',// 經度
      lat: 'Latitude',// 緯度
      inputLng: 'Please enter longitude',// 請輸入經度
      inputLat: 'Please enter latitude',// 請輸入緯度
      addr: 'Address',// 詳細地址
      inputAddr: 'Please enter detailed address',// 請輸入詳細地址
      poineName: 'Location',// 點位名稱
      userNum: 'Online',// 在線人數
      selectStime: 'Please select start date',// 請選擇起始日期
      selectEtime: ' Please select end date ',//請選擇结束日期
      inputDictName: 'Please enter dictionary name',//請輸入字典名稱',
      inputDictType: 'Please enter dictionary type',//請輸入字典類型',
      selectState: 'Please select status',//請選擇狀態',
      sTime: 'Start',//開始日期',
      eTime: 'End',//结束日期',
      inputAnnotation: 'Please enter annotation',//請輸入批註',
      inputDictLabel: 'Please enter dictionary label',//請輸入字典標籤',
      inputDictValue: 'Please enter dictionary value',//請輸入字典鍵值',
      selectOperationType: 'Please select operation type',//請選擇操作類型',
      selectOperationState: 'Please select data status',//請選擇數據狀態',
      inputComplexFont: 'Please enter Traditional Chinese',//請輸入繁體',
      inputEnglish: 'Please enter English',//請輸入英文',
      complexFont: ' Traditional Chinese',//繁體',
      english: 'English',//英文',
      areaCode: 'Area code',//地區編碼',
      inputAreaCode: 'Please enter area code',//請輸入地區編碼'
      refreshRate: 'Refresh',//刷新頻率
      minute: 'min',// 分鐘
      setName: 'Set Name', //名稱設置
      earlyWarningNum: 'Value',// 預警值
      stateNum: 'State',//狀態值
      setEarlyWarning: 'Set early warning',//恢復預警
      cancelEarlyWarning: 'Cancel early warning'//取消預警
    },
    btn: {
      search: 'Search',// 搜索
      add: 'Add',// 新增
      edit: 'Edit',// 編輯
      delete: 'Delete',// 刪除
      submit: 'Save', //保存
      cancel: 'Cancel', //取消
      reset: 'Reset', //重置
      back: 'Back', //返回
      confirm: 'OK',//,確定
      cloneFloor: 'Synchronize plan', //同步平面圖
      deleteFloor: 'Delete plan', //刪除平面圖
      lookInfo: 'View details', //查看詳情
      track: 'Location track ',//活動軌跡
      bindingMechanism: 'Bind institution',//綁定機構'
      set: 'Set',// 設置,
      setDefaultNum: 'Default',//使用系統默認值
      info: 'details' //查看詳情
    },
    table: {
      index: 'No.', //序號
      floorNum: 'Floor number', //樓層數
      floor: 'Floor', //樓層
      someDigits: 'Point number', //點位數
      facilityMAC: 'Source', //設備MAC
      creatTime: 'Create time', //創建時間
      headUrl: 'Portrait', //頭像
      gender: 'Gender', //性別
      boy: 'Male', //男
      girl: 'Female', //女
      name: 'Name', //姓名
      oneFullYearOfLife: 'Y/O', //周歲
      age: 'Age', //年齡
      braceletMAC: 'Source', //手環MAC
      operation: 'Operation',//操作
      time: 'Time',//時間',
      project: 'Item',//項目',
      number: 'Value',//數值',
      state: 'Stat',//狀態',
      dictName: 'Name',//字典名稱',
      dictType: 'Type',//字典類型',
      annotation: 'Remarks',//備註',
      dictCode: 'Code',//字典編碼',
      dictLabel: 'Label',//字典標籤',
      dictValue: 'Value',//字典鍵值',
      dictSort: 'Rank',//字典排序',
      bedNumber: 'Bed No.',// 床號
      boNum: 'SpO2',// 血氧值
      hrNum: 'HR',//心率值,
      ttNum: 'BT'//體溫值
    },
    dialogTitie: {
      someDigits: 'Point Management', //點位管理
      addFloor: 'Add floor', //新增樓層
      editFloor: 'Edit floor', //編輯樓層
      addWarnOne: '【',
      addWarnTwo: '】Plans are synchronized to the following floors',//】平面圖同步設置到以下樓層',
      addDictType: 'Add dictionary type ',//添加字典類型',
      editDictType: 'Edit dictionary type',//修改字典類型',
      addDictData: 'Add dictionary data',//添加字典數據',
      editDictData: 'Edit dictionary data',//修改字典數據',
      addDictName: 'Add dictionary name',//添加字典名稱',
      addDictLabel: 'Add dictionary label',//添加字典標籤',
      bindingOrganization: 'Bind Institution',//綁定機構',
      addSubmitOrganization: 'Select Institution',//選擇機構',
      addMenuName: 'Add menu name',//菜單名稱,
      addroleName: 'Add role name'//角色名稱
    },
    rules: {
      vaildName: 'The name cannot be empty', //名稱不能為空
      vaildTheGround: 'The number of floor cannot be 0', //樓層數不能等於零
      successUpload: 'Upload successfully', //上傳成功
      errorUpload: 'Upload failed', //上傳失敗
      uploadDefault: 'Please upload the plan', //請上傳平面圖
      selectMAC: 'Please select device MAC ', //請選擇設備MAC
      vaildDictName: 'The dictionary name cannot be empty',//字典名稱不能為空',
      vaildDictType: 'The dictionary type cannot be empty ',//字典類型不能為空',
      vaildDictLabel: 'The data label cannot be empty ',//數據标签不能為空',
      vaildDictValue: 'The data value cannot be empty ',//數據鍵值不能為空',
      vaildDictSort: 'The data rank cannot be empty ',//數據順序不能為空',
      vaildComplexFont: 'The traditional Chinese characters cannot be empty ',//繁體不能為空',
      vaildEnglish: 'The English cannot be empty '//英文不能為空',
    },
    confirm: {
      deletePlan: 'Are you sure to delete the current plan and points?', //確認刪除當前平面圖和點位嘛
      deletePoint: 'Are you sure to delete the current points?', //確認刪除當前點位嘛
      deleteBuilding: 'Are you sure to delete the current building?', //確認刪除當前樓宇嘛
      typeWarn: 'Warning', //警告
      deleteSuccess: 'Delete successfully', //刪除成功
      addSuccess: 'Added successfully',//新增成功',
      editSuccess: 'Edited successfully',//修改成功',
      deleteCancel: 'Delete cancelled ', //取消刪除
      deleteDiceOne: 'Are you sure to delete data who’s dictionary code is “”',//是否確認删除字典編號為"',
      deleteDiceTwo: 'data',//"的數據項?',
      deleteUserOrganization: 'Confirm to unbind the current institution '
    },//確認要解綁當前機構
    text: {
      floorImg: 'Prompt: Right click to create point', //提示：鼠標右鍵創建點位
      user: 'Person',//人
      yearsOfAge: 'Y/O',//歲
      averageDatStatistics: 'Average data statistics',// 平均數據統計,
      trendAnalysis: 'Trend analysis'// 趨勢分析
    },
    messages: {
      date: 'Incorrect data format '//日期格式有誤
    },
    router: {
      user: 'Personal center',//個人中心
      dictData: 'Dictionary data',//字典數據
      operationLog: 'Scheduling log',//調度日誌
      modifyTGCFile: 'Modify to generate the configuration file'//修改生成配置文件
    }
  },
};
