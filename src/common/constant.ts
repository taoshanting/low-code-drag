const Constant = {
    // 接口状态字段
    HTTP_STATUS: {
      SUCCESS: '200', // 调用成功
      NOTHING: '602', // 架构不存在
      LOGIN_EXPIRED: '403', // 登录态过期
      NO_RIGHT: '600', // 无权限
      NO_DATA: '603', // 数据计算中
      REPETITIVE_TASK: '400', // 导出任务重复
      UP_FILE_FAIL: '043' //上传文件失败
    },
    DATE_FORMAT: {
      FORMAT_TYPE_ONE: 'YYYY-MM-DD',
      FORMAT_TYPE_TWO: 'YYYYMMDD',
      FORMAT_TYPE_YYYY: 'YYYY',
      FORMAT_TYPE_YYYY_MM: 'YYYY-MM',
      FORMAT_TYPE_YYYYN: 'YYYY年',
      FORMAT_TYPE_YYYYN_MMN: 'YYYY年MM月',
      FORMAT_TYPE_YYYYMM: 'YYYYMM',
      FORMAT_TYPE_MMN_DDN: 'MM月DD日',
      FORMAT_TYPE_MM: 'MM',
      FORMAT_TYPE_Y: 'YYYY年',
      FORMAT_TYPE_M: 'M月',
      FORMAT_TYPE_D: 'DD',
      FORMAT_TYPE_YYYYN_MN: 'YYYY年M月',
      FORMAT_TYPE_YYYYN_MMN_DDN: 'YYYY年MM月DD日',
      FORMAT_TYPE_MN_DDN: 'M.DD'
    },
    // 数字的单位配置
    UNIT_CONFIG: {
      HM: 'hm',
      M: 'm',
      W: 'w',
      K: 'k',
      Y: 'y'
    },
    // 单位名称
    UNIT_CONFIG_NAME: {
      hm: '亿',
      m: '百万',
      w: '万',
      k: 'K',
      y: '元'
    },
    // 数据状态
    historyDataStatus: {
      isCalculating: '0',
      isReady: '1'
    },
    // 接口返回无数据的值
    DEFAULT_VALUE: {
      SINGLE_HYPHEN: '-',
      DOUBLE_HYPHEN: '--'
    },
    // 日历-按月选择器tab枚举类
    TIMETAB: {
      CALENDAR: 'calendar',
      MONTH: 'month',
      HOLIDAYMONTH: 'holidayMonth'
    },
    REPORT_TYPE: {
      SR: 'SR',
      DS: 'DS',
      SX: 'SX',
      SF: 'SF',
      LR: 'LR',
      DR: 'dsRecruit',
      SE: 'standardEvaluation',
      PT: 'PT',
      HL: 'HL',
      CL: 'CL',
      LZF: 'lzfTrace',
      LU: 'LU',
      TDR: 'TDR',
      NTDR: 'tenDayReport', //24年新直销人力产能权限接口入参
      WZB: 'WZB',
      WZBDS: 'WZBDS',
      WZBVISIT: 'WZBVISIT', //外展包-拜访清单报表
      TMDO: 'taskManage',
      ACTIVE: 'active', // 活跃监控：active
      DSPM: 'dsProcessMonitoring', // 标准流程监测
      DSMEM: 'dsModelEvaluationMatrix', // 模型评价矩阵
      CRE: 'customDetailReport', // 定制报表清单报表导出
      CPRE: 'CUSTOM_PROCESS_REPORT_EXPORT', // 定制报表加工表导出
      CFRE: 'CUSTOM_FINAL_REPORT_EXPORT', //定制化报表成表导出
      LIST: 'LIST', //增员转化漏斗数据导出
      ANA: 'ANA', //未测评分析数据导出
      EVA: 'EVA', //矩阵模型分析数据导出
      ASDETAIL: 'ASDETAIL', // 增员明细数据的导出
      TI: 'trainingImage', //培训画像
      LPT: 'luTraceReport', // 全产品销售及转化
      TCS: 'TRAIN_PROCESS_SUMMARY', // 实训营汇总导出
      TCDD: 'TRAIN_PROCESS_DETAIL', // 实训营DS清单
      COCKPIT: 'COCKPIT', // 驾驶舱
      TC: 'trainingCamp', // 实训营数据导出
      COURSE: 'course', // 智能推客数据导出
      TO: 'TASK_OUTPUT', // 任务详情报表导出
      WD: 'unsecuredNewLoanConvertReport', // 无抵押新贷转化报表
      WD_STOCK: 'WDCL', //无抵押存量转化报表
      RB: 'recruitBrief', // 增员简报【230608】
      LFTMDO: 'sxTaskManage', // 寿渠任务管理
      SECURED: 'securedNewLoanConvertReport', // 有抵押转化
      ME: 'exportMonitor', // 监控导出报表
      OE: 'operatingMonitor', // 运营监控导出
      DS_FARMER: 'responsibilityFieldExport', // 行业团队
      ZDX: 'exportZDX', // 智多星导出
      FARMER_MONITOR: 'farmerMonitoring', // 农夫异常监控
      DOCUMENTS: 'checkDocumentsList', // 查看单证清单表
      AMR: 'activityManagementReport', //活动量管理报表
      DS_FARMER_NEW: 'DS_FARMER', //架构类型（DS:直销、SX:寿险、SF：外渠、DS_FARMER：农夫（20231026版本））
      ALL_PRODUCT: 'XDZH', //全产品新贷转化
      CHAMPION_LIST: 'championList', // 销售龙虎榜
      INTENT_CUST: 'INTENT_CUST', // 意向客户清单
      REVIEW_CONTRACT: 'CUST_QUERY_DOC', // 客户查阅合同记录
      DS_RISK_GRADE: 'dsRiskGrade', // ds风险分析
      SX_RISK_GRADE: 'sxRiskGrade' // ds风险分析
    },
    CHANNEL: {
      CORP: '整体',
      DS: '直销',
      SX: '寿渠',
      SF: '外渠',
      NYC: '远程新贷'
    },
    // 陆账房渠道下拉框
    LU_CHANNEL: [
      {
        label: '整体',
        value: 'ALL'
      },
      {
        label: '直销',
        value: 'DS'
      },
      {
        label: '寿渠',
        value: 'SX'
      },
      {
        label: '外渠',
        value: 'SF'
      }
    ],
    // 全产品销售及转化下拉框
    LU_TRACE_CHANNEL: (isBefore2023: boolean) => [
      {
        label: '整体',
        value: 'ALL'
      },
      {
        label: '直销',
        value: 'DS'
      },
      {
        label: '寿渠',
        value: 'SX'
      },
      isBefore2023 // 2023年之前，就展示外渠，否则展示创展
        ? {
            label: '外渠',
            value: 'SF'
          }
        : {
            label: '创展',
            value: 'SF'
          },
      {
        label: '电销',
        value: 'LR'
      }
    ],
    // 同比环比展示
    MTD_CIRCLE_RIAT_FLAG: {
      noShow: '0',
      isShow: '1'
    },
    // deptCode码
    DEPTCODE: {
      ZT: '0000'
    },
    //面包屑掉接口事件类型
    UP_ORG_STATUS: {
      ADD: 'add',
      DELETE: 'delete',
      SELECTADD: 'selectAdd',
      SELECTDELETE: 'selectDelete',
      SELECTORG: 'selectOrg'
    },
    //是否是折标
    DISCOUNT_OR_UNDISCOUNT: [
      { label: '折标', value: 'discount' },
      { label: '非折标', value: 'unDiscount' }
    ],
    TIME_TYPE: {
      calendar: '1',
      month: '2',
      holidayMonth: '3'
    },
    // 直销页面DS分析查询类型
    DS_TYPE: {
      CA: 'dsCapacity', // 产能
      LR: 'dsLoanRate', // 开单率
      MP: 'dsManpower', // 人力
      CK: 'dsPerformance' // 考核
    },
    XUN_CHANNEL: {
      DS: 'DS', // 直销
      SX: 'SX', // 寿险
      NC: 'NC', // 电销
      DS_ROUTEKEY: 'DS_WEB',
      SX_ROUTEKEY: 'SX_WEB',
      NC_ROUTEKEY: 'NC_WEB'
    },
    //是否今天标示，用于日期选择判断
    IS_TODAY_FLAG: '0',
    // 任务状态
    TASK_STATUS: {
      fail: '0', // 任务失败
      ing: '1', // 进行中
      success: '2', // 已完成
      broken: '3', // 已失效
      line: '4' // 排队中
    },
    XUN_LIST: [
      {
        value: 'top',
        label: '上旬'
      },
      {
        value: 'mid',
        label: '中旬'
      },
      {
        value: 'buttom',
        label: '下旬'
      }
    ],
    // 需要中文名判断枚举类
    CHINESENAME: {
      ZB: '总部',
      ZT: '整体',
      CL: '远程存量'
    },
    // 软拨对账tab枚举
    SOFT_DAIL: {
      JF: 'JF', // 平安金服-属地固话
      KJ: 'KJ', // 平安科技-10100388
      REGION: 'REGION' // 属地号码
    },
    // 驾驶舱测试环境地址
    COCKPIT_URL_STG:
      'https://ph-finebi-stg1.paic.com.cn/decision/v5/design/report/6c92aa9694204baa838cadf0e0a9d551/view?entryType=5',
    // fineBi首页测试环境地址
    FINEBI_URL_STG: 'https://ph-finebi-stg1.paic.com.cn/decision',
    // fineBi首页生产环境地址
    FINEBI_URL_PRD: 'https://ph-finebi.paic.com.cn/decision',
    // 智多星接口轮训时间 5分钟
    ZDX_POLLING_TIME: 5 * 60 * 1000,
    /** 周数 */
    WEEK_CN: ['日', '一', '二', '三', '四', '五', '六']
  };
  
  export default Constant;
  