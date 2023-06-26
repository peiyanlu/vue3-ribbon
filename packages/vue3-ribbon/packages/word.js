const word = {
  fileTabMenu: {
    name: 'file-tab-menu:generic-actions',
    activator: {
      label: '文件',
    },
    items: [
      // {
      //   label: '导入文件',
      //   iconType: 'img',
      //   icon: 'assets/images/File32x32.png',
      //   commands: [
      //     {
      //       type: 'ImportFile',
      //       custom: true
      //     }
      //   ]
      // },
      // {
      //   label: '导出',
      //   iconType: 'img',
      //   icon: 'assets/images/File32x32.png',
      //   commands: [
      //     {
      //       name: 'CSFILE ExportToFbx',
      //       icon: 'logo',
      //       label: '导出FBX'
      //     }
      //   ]
      // }
    ],
  },
  quickLaunchToolbar: [
    {
      name: 'HDEC Undo',
      hint: 'Undo(Ctl+Z)', // optional
      iconType: 'svg',
      icon: 'undo',
    },
    {
      name: 'HDEC Redo',
      hint: 'Redo(Ctl+Y)', // optional
      iconType: 'svg',
      icon: 'redo',
    },
  ],
  tabs: [
    {
      label: '主页',
      ribbons: [
        {
          label: '特性',
          width: '252px',
          name: 'characteristic',
          tools: [
            {
              type: 'color-picker', // define type of the tool
              name: 'HDEC PropertyColor', // color picker name
              size: 'large', // size of the tool - "small" or "large"
              width: '120px',
              hint: '设置激活颜色', // optional tool hint
              pattern: 'free', // color picker pattern
              icon: 'logo', // color picker icon
              iconType: 'svg', // color picker icon type
              predefine: [],
              value: '#fff000',
              showAlpha: false,
              colorFormat: 'hex',
            },
          ],
        },
        {
          label: '基本',
          name: 'basic',
          width: '214px', // optional width in pixels or percentage, if not set ribbon width will be automatic
          tools: [
            {
              type: 'split-button',
              name: 'split-button:properties',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC PropertyView true',
                  hint: '检查元素属性', // optional
                  label: '属性', // optional
                  icon: 'assets/images/Properties32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'Properties',
                    type: 'dragdroppopup',
                    width: 720,
                    height: 360,
                    titleText: '属性',
                    delayed: true,
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:item-types',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'Item Types',
                  hint: '管理样式', // optional
                  label: '样式', // optional
                  icon: 'assets/images/ECClass32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:item-types',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC Reference',
                  hint: '参考', // optional
                  label: '参考', // optional
                  icon: 'assets/images/ECClass32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'Reference',
                    type: 'dragpopup',
                    width: 720,
                    titleText: '参考',
                    delayed: true,
                  },
                },
              ],
            },
            {
              type: 'buttons',
              name: 'button:level',
              size: 'large',
              items: 'break',
              commands: [
                {
                  name: 'Level Manager',
                  popup: 'LevelManager',
                  hint: '理设计文件和连接的参考的层和层的属性', // optional
                  label: '层管理器', // optional
                  icon: 'assets/images/LevelManager32x32.png',
                  iconType: 'img',
                  // popupConfig: {
                  //   component: 'LevelManager',
                  //   type: 'dragdroppopup',
                  //   width: 720,
                  //   titleText: '层管理器',
                  //   delayed: true
                  // }
                },
                {
                  name: 'Level Show',
                  hint: '开启/关闭模型中的层', // optional
                  label: '层显示', // optional
                  icon: 'assets/images/Level32x32.png',
                  iconType: 'img',
                },
              ],
            },
          ],
        },
        {
          label: '输入',
          name: 'input',
          width: '124px', // optional width in pixels or percentage, if not set ribbon width will be automatic
          tools: [
            {
              type: 'split-button',
              name: 'split-button:paste-options',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC OpenKeyIn',
                  hint: '浏览、构造和输入键入命令', // optional
                  label: '键入命令', // optional
                  icon: 'assets/images/keyin32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'TypeTheCommand',
                    type: 'dragshrinkpopup',
                    width: 550,
                    titleText: '键入命令',
                    delayed: true,
                  },
                  ableToFixed: true,
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:paste-options',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC DataPointKeyIn',
                  hint: '输入详细数据点', // optional
                  label: '输入数据点', // optional
                  icon: 'assets/images/PlaceContentPlaceSingle32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'DataPointKeyIn',
                    type: 'dragshrinkpopup',
                    width: 300,
                    titleText: '输入数据点',
                    delayed: true,
                  },
                  ableToFixed: true,
                },
              ],
            },
          ],
        },
        {
          label: '选择',
          name: 'choice',
          width: '182px', // optional width in pixels or percentage, if not set ribbon width will be automatic
          tools: [
            {
              type: 'split-button',
              name: 'split-button:choice',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC IndividualSelection',
                  hint: '元素选择', // optional
                  label: '元素选择', // optional
                  icon: 'assets/images/ElementSelection32x32.png',
                  iconType: 'img',
                },
                {
                  name: 'HDEC BlockSelection',
                  hint: '元素框选', // optional
                  label: '元素框选', // optional
                  icon: 'assets/images/SelectionBlock32x32.png',
                  iconType: 'img',
                },
                {
                  name: 'HDEC SelectAll',
                  hint: '全选', // optional
                  label: '全选', // optional
                  icon: 'assets/images/Selection-SelectAll32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:hide',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC HideElement',
                  hint: '隐藏元素', // optional
                  label: '隐藏元素', // optional
                  icon: 'assets/images/HideElement32x32.png',
                  iconType: 'img',
                },
                {
                  name: 'HDEC IsolationElement',
                  hint: '隔离元素', // optional
                  label: '隔离元素', // optional
                  icon: 'assets/images/IsolationElement32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:delete',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC DeleteElement',
                  hint: '删除元素', // optional
                  label: '删除元素', // optional
                  icon: 'assets/images/Delete32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:delete',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC UnHideAllElement',
                  hint: '取消隐藏', // optional
                  label: '取消隐藏', // optional
                  icon: 'assets/images/UnHideAllElement32x32.png',
                  iconType: 'img',
                },
              ],
            },
          ],
        },
        {
          label: '操作',
          name: 'operation',
          width: '200px', // optional width in pixels or percentage, if not set ribbon width will be automatic
          tools: [
            {
              type: 'split-button',
              name: 'split-button:choice',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC MoveElement',
                  hint: '移动元素到新位置', // optional
                  label: '移动', // optional
                  icon: 'assets/images/Move32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:choice',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC CopyElement',
                  hint: '复制元素到新位置', // optional
                  label: '复制', // optional
                  icon: 'assets/images/Copy32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'CopyElement',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '复制元素',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:choice',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC RotateElement',
                  hint: '旋转元素', // optional
                  label: '旋转', // optional
                  icon: 'assets/images/Rotate32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'RotateElement',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '旋转',
                  },
                },
              ],
            },
            {
              type: 'buttons',
              name: 'button:delete',
              size: 'large',
              items: '',
              commands: [
                {
                  name: 'HDEC ScaleElement',
                  hint: '调整元素大小', // optional
                  label: '缩放', // optional
                  icon: 'assets/images/Scale32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'ScaleElement',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '缩放',
                  },
                },
                {
                  name: 'HDEC ConstructArray',
                  hint: '元素阵列', // optional
                  label: '阵列', // optional
                  icon: 'assets/images/ConstructArray32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'ConstructArray',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '阵列',
                  },
                },
                {
                  name: 'HDEC MirrorElement',
                  hint: '镜像元素', // optional
                  label: '镜像', // optional
                  icon: 'assets/images/Mirror32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'MirrorElement',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '镜像',
                  },
                },
                {
                  name: 'HDEC MoveParallel',
                  hint: '线元素按距离平行移动', // optional
                  label: '线偏移', // optional
                  icon: 'assets/images/MoveParallel32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'MoveParallel',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '线偏移',
                  },
                },
                {
                  name: 'HDEC CreateShape',
                  hint: '从一系列开放的平面元素创建闭合的复杂形状', // optional
                  label: '创建复杂形状', // optional
                  icon: 'assets/images/CreateComplexShape32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'CreateShape',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '创建复杂形状',
                  },
                },
                {
                  name: 'HDEC CreateChain',
                  hint: '使用一系列开放元素创建开放的复杂元素', // optional
                  label: '创建复杂链', // optional
                  icon: 'assets/images/CreateComplexChain32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'CreateChain',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '创建复杂链',
                  },
                },
              ],
            },
          ],
        },
        {
          label: '放置',
          name: 'place',
          width: '298px', // optional width in pixels or percentage, if not set ribbon width will be automatic
          tools: [
            {
              type: 'split-button',
              name: 'split-button:choice',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC DrawLine',
                  hint: '绘制直线', // optional
                  label: '绘制直线', // optional,
                  icon: 'assets/images/PlaceLine32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'DrawLine',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '绘制直线',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:choice',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC DrawSmartLine',
                  hint: '制开放或闭合线性元素', // optional
                  label: '绘制智能线', // optional
                  icon: 'assets/images/PlaceSmartLine32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'DrawSmartLine',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '绘制智能线',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:choice',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC DrawArc',
                  hint: '绘制圆弧', // optional
                  label: '绘制圆弧', // optional
                  icon: 'assets/images/PlaceArc32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'DrawArc',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '绘制圆弧',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:delete',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC DrawCircle',
                  hint: '绘制圆', // optional
                  label: '绘制圆', // optional
                  icon: 'assets/images/PlaceCircle32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'DrawCircle',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '绘制圆',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:delete',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC DrawRect',
                  hint: '绘制矩形', // optional
                  label: '绘制矩形', // optional,
                  icon: 'assets/images/PlaceBlock32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'DrawRect',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '绘制矩形',
                  },
                },
                {
                  name: 'HDEC DrawRegularPolygon',
                  hint: '绘制正多边形', // optional
                  label: '绘制正多边形', // optional,
                  icon: 'assets/images/RegularPolygon32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'DrawRegularPolygon',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '绘制正多边形',
                  },
                },
              ],
            },
            {
              type: 'buttons',
              name: 'button:delete',
              size: 'large',
              items: '',
              commands: [
                {
                  name: 'HDEC DrawBSpline',
                  hint: 'B样条曲线', // optional
                  label: 'B样条曲线', // optional,
                  icon: 'assets/images/DrawBSpline32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'DrawBSpline',
                    type: 'dragpopup',
                    width: 360,
                    titleText: 'B样条曲线',
                  },
                },
                {
                  name: 'HDEC AddText',
                  hint: '放置文本元素', // optional
                  label: '文本', // optional,
                  icon: 'assets/images/PLTextAboveElement32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'AddText',
                    type: 'dragpopup',
                    width: 720,
                    titleText: '放置文本',
                  },
                },
                {
                  name: 'HDEC DrawHelix',
                  hint: '绘制弹簧线', // optional
                  label: '弹簧线', // optional
                  icon: 'assets/images/PlaceHelix32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'DrawHelix',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '绘制弹簧线',
                  },
                },
                {
                  name: 'HDEC DrawSpiral',
                  hint: '绘制螺旋线', // optional
                  label: '螺旋线', // optional
                  icon: 'assets/images/PlaceSpiral32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'DrawSpiral',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '螺旋线',
                  },
                },
              ],
            },
          ],
        },
        {
          label: '修改',
          name: 'modify',
          width: '124px', // optional width in pixels or percentage, if not set ribbon width will be automatic
          tools: [
            {
              type: 'split-button',
              name: 'split-button:choice',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC TrimElement',
                  hint: '修剪元素', // optional
                  label: '修剪', // optional
                  icon: 'assets/images/TrimElements32x32.png',
                  iconType: 'img',
                },
                {
                  name: 'HDEC FilletCurve',
                  hint: '在两条线段间构造圆角或圆弧', // optional
                  label: '构造倒圆角', // optional
                  icon: 'assets/images/ConstructCircularFillet32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'FilletCurve',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '构造倒圆角',
                  },
                },
                {
                  name: 'HDEC ConstructChamfer',
                  hint: '在两条线段间构造方角', // optional
                  label: '构造倒方角', // optional
                  icon: 'assets/images/ConstructCircularFillet32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'ConstructChamfer',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '构造倒方角',
                  },
                },
                {
                  name: 'HDEC TrimToElement',
                  hint: '线延长', // optional
                  label: '线延长', // optional
                  icon: 'assets/images/ConstructCircularFillet32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'TrimToElement',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '线延长',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:choice',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC DrawTangent',
                  hint: '绘制切线', // optional
                  label: '绘制切线', // optional
                  icon: 'assets/images/DrawTangent32x32.png',
                  iconType: 'img',
                },
              ],
            },
          ],
        },
        {
          label: '组和单元',
          name: 'groups-units',
          width: '224px', // optional width in pixels or percentage, if not set ribbon width will be automatic
          tools: [
            {
              type: 'split-button',
              name: 'split-button:choice',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'Cloud CreateSharedUnit',
                  hint: '创建共享单元', // optional
                  label: '创建单元', // optional
                  icon: 'assets/images/CreateSharedUnit32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'CreateSharedUnit',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '创建单元',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:choice',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'Cloud ActivateSharedUnit',
                  hint: '放置共享单元', // optional
                  label: '放置单元', // optional
                  icon: 'assets/images/ActiveCell32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'ActivateSharedUnit',
                    type: 'dragpopup',
                    width: 960,
                    titleText: '放置单元',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:choice',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC ConvertCellToGroup',
                  hint: '共享单元转为组', // optional
                  label: '单元转组', // optional
                  icon: 'assets/images/ConvertCellToGroup32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'buttons',
              name: 'button:delete',
              size: 'large',
              items: 'break',
              commands: [
                {
                  name: 'HDEC CreateGraphicGroup',
                  hint: '将元素合并到一个组(孤立单元)', // optional
                  label: '组', // optional
                  icon: 'assets/images/Selection-Group32x32.png',
                  iconType: 'img',
                },
                {
                  name: 'HDEC UngroupGraphicGroup',
                  hint: '撤销所选组', // optional
                  label: '解组', // optional
                  icon: 'assets/images/Selection-Ungroup32x32.png',
                  iconType: 'img',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: '实体',
      ribbons: [
        {
          label: '基元',
          width: '260px',
          name: 'primitives',
          tools: [
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC DrawSphere',
                  hint: '创建球体实体', // optional
                  label: '球体', // optional
                  icon: 'assets/images/PlaceSphere32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'DrawSphere',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '球体实体',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC DrawCylinder',
                  hint: '创建具有圆形横截面的拉伸构造实体', // optional
                  label: '圆柱体', // optional
                  icon: 'assets/images/PlaceCylinder32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'DrawCylinder',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '圆柱实体',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC DrawCuboid',
                  hint: '放置具有矩形横截面的拉伸构造实体', // optional
                  label: '体块', // optional
                  icon: 'assets/images/PlaceSlab32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'DrawCuboid',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '体块实体',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC CertainAngleTorus',
                  hint: '放置圆环(环形)实体', // optional
                  label: '圆环', // optional
                  icon: 'assets/images/PlaceTorus32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'CertainAngleTorus',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '圆环实体',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC DrawCone',
                  hint: '放置圆锥实体', // optional
                  label: '圆锥体', // optional
                  icon: 'assets/images/PlaceTorus32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'DrawCone',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '圆锥实体',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC DrawEllipsoid',
                  hint: '放置椭球实体', // optional
                  label: '椭球体', // optional
                  icon: 'assets/images/PlaceTorus32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'DrawEllipsoid',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '椭球体',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC DrawLinearSolid',
                  hint: '放置线性实体', // optional
                  label: '线性实体', // optional
                  icon: 'assets/images/PlaceTorus32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'DrawLinearSolid',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '线性实体',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC ImprintOnSolid',
                  hint: '印刻', // optional
                  label: '印刻', // optional
                  icon: 'assets/images/PlaceTorus32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'ImprintOnSolid',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '印刻',
                  },
                },
              ],
            },
          ],
        },
        {
          label: '创建实体',
          name: 'create-ntity',
          width: '198px',
          tools: [
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC Extrude',
                  hint: '通过线性拉伸构造轮廓创建实体', // optional
                  label: '拉伸构造', // optional
                  icon: 'assets/images/DrawTangent32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'Extrude',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '拉伸构造',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC ExtrudeAlong',
                  hint: '通过沿路径拉伸构造轮廓创建实体', // optional
                  label: '沿曲线拉伸构造', // optional
                  icon: 'assets/images/Extrude32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'ExtrudeAlong',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '沿曲线拉伸构造',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC DrawSolidByRevolution',
                  hint: '通过绕轴旋转构造轮廓创建实体', // optional
                  label: '旋转构造', // optional
                  icon: 'assets/images/ParametricRevolve32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'DrawSolidByRevolution',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '旋转构造',
                  },
                },
              ],
            },
          ],
        },
        {
          label: '特征',
          name: 'features',
          width: '198px',
          tools: [
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC FilletEdges',
                  hint: '为实体的一个或多个创建圆角(过渡)', // optional
                  label: '圆角', // optional
                  icon: 'assets/images/3DFillet32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'FilletEdges',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '边圆角',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC ChamferEdges',
                  hint: '为实体的一个或多个创建倒角(过渡)', // optional
                  label: '倒角', // optional
                  icon: 'assets/images/3DChamfer32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'ChamferEdges',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '倒角',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC Hole',
                  hint: '在实体中放置孔', // optional
                  label: '孔', // optional
                  icon: 'assets/images/ParametricHole32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'Hole',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '孔',
                  },
                },
              ],
            },
          ],
        },
        {
          label: '修改特征',
          name: 'modify-feature',
          width: '325px',
          tools: [
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC OffsetFace',
                  hint: '修改实体的面、边和顶点', // optional
                  label: '修改实体', // optional
                  icon: 'assets/images/ModifyFace32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'OffsetFace',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '修改实体',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC Cut',
                  hint: '切割元素', // optional
                  label: '切割实体', // optional
                  icon: 'assets/images/TrimSolidNew32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'Cut',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '切割',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC UniteBodies',
                  hint: '相并', // optional
                  label: '相并', // optional
                  icon: 'assets/images/ParametricUnion32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'UniteBodies',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '合并实体',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC IntersectBodies',
                  hint: '相交', // optional
                  label: '相交', // optional
                  icon: 'assets/images/ParametricIntersection32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'IntersectBodies',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '实体交集',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC SubtractBodies',
                  hint: '相减', // optional
                  label: '相减', // optional
                  icon: 'assets/images/ParametricDifference32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'SubtractBodies',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '删减实体',
                  },
                },
              ],
            },
          ],
        },
        {
          label: '实体实用工具',
          name: 'entity-utility',
          width: '134px',
          tools: [
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC ExtractFacesOrEdges',
                  hint: '从实体或曲面提取面或边', // optional
                  label: '提取面/边', // optional
                  icon: 'assets/images/ExtractFace32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'ExtractFacesOrEdges',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '提取面或边',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC ConvertToSolid',
                  hint: '将元素转换为实体', // optional
                  label: '转换为实体', // optional
                  icon: 'assets/images/Convert3D32x32.png',
                  iconType: 'img',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: '面和曲面',
      ribbons: [
        {
          label: '创建曲面',
          width: '70px',
          name: 'create-surface',
          tools: [
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC Loft',
                  hint: '创建通过两个截面元素的(B样条)曲面', // optional
                  label: '放样', // optional
                  icon: 'assets/images/SurfaceByLoft32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'Loft',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '放样',
                  },
                },
              ],
            },
          ],
        },
        {
          label: '修改面',
          name: 'modify-face',
          width: '325px',
          tools: [
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC CreateSurfaceFromCurve',
                  hint: '在两曲面间创建过渡', // optional
                  label: '过渡曲面', // optional
                  icon: 'assets/images/BlendSurface32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC UniteShapes',
                  hint: '区域合并', // optional
                  label: '区域合并', // optional
                  icon: 'assets/images/PatternTypeUnion32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'UniteShapes',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '图形合并',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC IntersectShapes',
                  hint: '区域相交', // optional
                  label: '区域相交', // optional
                  icon: 'assets/images/PatternTypeIntersection32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'IntersectShapes',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '图形交集',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC SubtractShapes',
                  hint: '区域相减', // optional
                  label: '区域相减', // optional
                  icon: 'assets/images/PatternTypeDifference32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'SubtractShapes',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '图形相减',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC StitchSurface',
                  hint: '将两个或多个开放曲面缝合为一个曲面', // optional
                  label: '缝合', // optional
                  icon: 'assets/images/StitchSurface32x32.png',
                  iconType: 'img',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: '网格',
      ribbons: [
        {
          label: '创建',
          width: '134px',
          name: 'create',
          tools: [
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC CreateMeshFromOtherBody',
                  hint: '从三维元素(如曲面或实体)创建三角形化网格元素', // optional
                  label: '从元素创建网格', // optional
                  icon: 'assets/images/ConstructFacet32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC CreateMeshFromCurves',
                  hint: '在两条曲线之间创建网格相似', // optional
                  label: '从两条曲线创建网格', // optional
                  icon: 'assets/images/MeshDevelopCurve32x32.png',
                  iconType: 'img',
                },
              ],
            },
          ],
        },
        {
          label: '计算',
          name: 'calculation',
          width: '342px',
          tools: [
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC SliceMeshBody',
                  hint: '使用平面到切面元素生成曲线', // optional
                  label: '平面切分', // optional
                  icon: 'assets/images/PlanarSlice32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC AggregateMeshes',
                  hint: '将元素合并到一个组', // optional
                  label: '组', // optional
                  icon: 'assets/images/3DWarehouse32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC EditMesh',
                  hint: '通过定义栅格点手动放置栅格元素', // optional
                  label: '放置栅格网格', // optional
                  icon: 'assets/images/MeshPlaceGrid32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC SplitMesh',
                  hint: '将现有网格分割为分开的各个部分', // optional
                  label: '分割网格', // optional
                  icon: 'assets/images/MeshSplit32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'buttons',
              name: 'buttons:page-break',
              size: 'large',
              items: '',
              width: '80px',
              commands: [
                {
                  name: 'HDEC UniteMeshes',
                  hint: '从两个或多个现有网格单元的并集构造网格元素', // optional
                  label: '网格合并', // optional
                  icon: 'assets/images/MeshUnite32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'UniteMeshes',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '网格相并',
                  },
                },
                {
                  name: 'HDEC IntersectMeshes',
                  hint: '在两个或多个现有网格元素的交点构造网格元素', // optional
                  label: '网格相交', // optional
                  icon: 'assets/images/MeshIntersection32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'IntersectMeshes',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '网格相交',
                  },
                },
                {
                  name: 'HDEC SubtractMeshes',
                  hint: '通过将一个现有的网格元素从另一个元素减去来构造网格元素', // optional
                  label: '网格相减', // optional
                  icon: 'assets/images/MeshDifference32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'SubtractMeshes',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '网格相减',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: '绘图辅助',
      ribbons: [
        {
          label: '工作平面',
          width: '390px',
          name: 'create',
          tools: [
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC SetACSOrigin',
                  hint: '设置原点', // optional
                  label: '设置 原点', // optional
                  icon: 'assets/images/DefineACS32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'SetACSOrigin',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '设置工作平面原点',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC SetACSHeight',
                  hint: '设置高度', // optional
                  label: '设置 高度', // optional
                  icon: 'assets/images/MoveACS32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'SetACSHeight',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '设置工作平面高度',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC RotateACSToTopView',
                  hint: '顶视图平面', // optional
                  label: '顶视图 平面', // optional
                  icon: 'assets/images/AcsDefineByTop32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC RotateACSToFrontView',
                  hint: '前视图平面', // optional
                  label: '前视图 平面', // optional
                  icon: 'assets/images/AcsDefineByFront32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC RotateACSToRightView',
                  hint: '右视图平面', // optional
                  label: '右视图 平面', // optional
                  icon: 'assets/images/AcsDefineBySide32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC RotateACSToCurrentView',
                  hint: '当前视图平面', // optional
                  label: '当前 视图平面', // optional
                  icon: 'assets/images/ACS32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'buttons',
              name: 'buttons:page-break',
              size: 'large',
              items: '',
              commands: [
                {
                  name: 'HDEC ResetACSOrigin',
                  hint: '重置 原点', // optional
                  label: '重置 原点', // optional
                  icon: 'assets/images/AcsReset32x32.png',
                  iconType: 'img',
                },
                {
                  name: 'HDEC ToggleACSDisplay',
                  hint: '切换工作平面显示', // optional
                  label: '切换工作 平面显示', // optional
                  icon: 'assets/images/DefineACSFromView32x32.png',
                  iconType: 'img',
                },
                {
                  name: 'HDEC ShowACSPanel',
                  hint: '查看工作平面属性', // optional
                  label: '查看工作 平面属性', // optional
                  icon: 'assets/images/DefineACSFromReference32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'ShowACSPanel',
                    type: 'dragpopup',
                    width: 720,
                    titleText: '工作平面',
                  },
                },
              ],
            },
          ],
        },
        {
          label: '精确绘图',
          name: 'accurate-drawing',
          width: '390px',
          tools: [
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC ToggleLockXYAxis',
                  hint: '精确绘图 正交模式', // optional
                  label: '正交 模式', // optional
                  icon: 'assets/images/AccuDrawSmartLock32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC SetAccuDrawOrigin',
                  hint: '精确绘图 设置原点', // optional
                  label: '设置 原点', // optional
                  icon: 'assets/images/AccuDrawOrigin32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC ToggleAccuDrawMode',
                  hint: '精确绘图 切换模式', // optional
                  label: '切换 模式', // optional
                  icon: 'assets/images/AccudrawSwitchMode32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC RotateAccuDrawToTopView',
                  hint: '精确绘图 顶视图方向', // optional
                  label: '顶视图方向', // optional
                  icon: 'assets/images/AccuDrawSetTop32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC RotateAccuDrawToFrontView',
                  hint: '精确绘图 前视图方向', // optional
                  label: '前视图方向', // optional
                  icon: 'assets/images/AccuDrawSetFront32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC RotateAccuDrawToRightView',
                  hint: '精确绘图 右视图方向', // optional
                  label: '右视图方向', // optional
                  icon: 'assets/images/AccuDrawSetSide32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC RotateAccuDrawToCurrentView',
                  hint: '精确绘图 当前视图方向', // optional
                  label: '当前视图方向', // optional
                  icon: 'assets/images/AccuDraw32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC RedoAccuDrawOrientation',
                  hint: '精确绘图 上一个自定义方向', // optional
                  label: '上一个自定义方向', // optional
                  icon: 'assets/images/AccuDrawRotationCycle32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC AccuDrawRotateAxisX',
                  hint: '精确绘图 绕X轴旋转', // optional
                  label: '绕X轴 旋转', // optional
                  icon: 'assets/images/AccuDrawRotateAxisX32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC AccuDrawRotateAxisY',
                  hint: '精确绘图 绕Y轴旋转', // optional
                  label: '绕Y轴 旋转', // optional
                  icon: 'assets/images/AccuDrawRotateAxisY32x32.png',
                  iconType: 'img',
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC AccuDrawRotateAxisZ',
                  hint: '精确绘图 绕Z轴旋转', // optional
                  label: '绕Z轴 旋转', // optional
                  icon: 'assets/images/AccuDrawRotateAxisZ32x32.png',
                  iconType: 'img',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: '分析',
      ribbons: [
        {
          label: '测量',
          name: 'measure',
          width: '182px', // optional width in pixels or percentage, if not set ribbon width will be automatic
          tools: [
            {
              type: 'split-button',
              name: 'split-button:choice',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC MeasureDistance',
                  hint: '测量距离', // optional
                  label: '测量距离', // optional
                  icon: 'assets/images/MeasureDistance32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'MeasureDistance',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '测量距离',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:choice',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC MeasureAngle',
                  hint: '测量角度', // optional
                  label: '测量角度', // optional
                  icon: 'assets/images/MeasureAngle32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'MeasureAngle',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '测量角度',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:choice',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC MeasureRadius',
                  hint: '测量半径', // optional
                  label: '测量半径', // optional
                  icon: 'logo',
                  iconType: '',
                  popupConfig: {
                    component: 'MeasureRadius',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '测量半径',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: '视图',
      ribbons: [
        {
          label: '视图保存',
          width: '260px',
          name: 'create',
          tools: [
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown

              commands: [
                {
                  name: 'HDEC CreateSavedView',
                  hint: '创建需要保存的视图', // optional
                  label: '保存 视图', // optional
                  icon: 'assets/images/AccuDrawRotateAxisZ32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'CreateSavedView',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '保存视图',
                    delayed: true,
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC UpdateSavedViewSetting',
                  hint: '更新已保存视图的设置', // optional
                  label: '更新 视图设置', // optional
                  icon: 'assets/images/AccuDrawRotateAxisZ32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'UpdateSavedViewSetting',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '更新视图',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC DeleteSavedView',
                  hint: '删除已保存视图', // optional
                  label: '删除 视图', // optional
                  icon: 'assets/images/AccuDrawRotateAxisZ32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'DeleteSavedView',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '删除视图',
                  },
                },
              ],
            },
            {
              type: 'split-button',
              name: 'split-button:page-break',
              size: 'large',
              dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
              commands: [
                {
                  name: 'HDEC ApplySavedView',
                  hint: '恢复已保存视图状态', // optional
                  label: '应用 视图', // optional
                  icon: 'assets/images/AccuDrawRotateAxisZ32x32.png',
                  iconType: 'img',
                  popupConfig: {
                    component: 'ApplySavedView',
                    type: 'dragpopup',
                    width: 360,
                    titleText: '应用视图',
                  },
                },
              ],
            },
          ],
        },
        // {
        //   label: '窗口',
        //   name: 'accurate-drawing',
        //   width: '262px',
        //   tools: [
        //     {
        //       type: 'split-button',
        //       name: 'split-button:page-break',
        //       size: 'large',
        //       dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        //       commands: [
        //         {
        //           name: 'Cascade',
        //           hint: '按数字顺序层叠视图窗口', // optional
        //           label: '层叠', // optional
        //           icon: 'assets/images/View-Cascade32x32.png',
        //           iconType: 'img'
        //         }
        //       ]
        //     },
        //     {
        //       type: 'split-button',
        //       name: 'split-button:page-break',
        //       size: 'large',
        //       dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        //       commands: [
        //         {
        //           name: 'Tile',
        //           hint: '平铺视图窗口', // optional
        //           label: '平铺', // optional
        //           icon: 'assets/images/View-Tile32x32.png',
        //           iconType: 'img'
        //         }
        //       ]
        //     },
        //     {
        //       type: 'split-button',
        //       name: 'split-button:page-break',
        //       size: 'large',
        //       dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        //       commands: [
        //         {
        //           name: 'Arrange',
        //           hint: '调整所有视图窗口大小，以便在可用空间内紧密拟合，而不重叠', // optional
        //           label: '排列', // optional
        //           icon: 'assets/images/View-Arrange32x32.png',
        //           iconType: 'img'
        //         }
        //       ]
        //     },
        //     {
        //       type: 'split-button',
        //       name: 'split-button:page-break',
        //       size: 'large',
        //       dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        //       commands: [
        //         {
        //           name: 'Add View',
        //           hint: '新增视口到主界面', // optional
        //           label: '新增', // optional
        //           icon: 'assets/images/View32x32.png',
        //           iconType: 'img'
        //         }
        //       ]
        //     }
        //   ]
        // }
      ],
    },
    {
      label: '可视化',
      ribbons: [
        {
          label: '可视化',
          name: 'accurate-drawing',
          width: '340px',
          tools: [
            // {
            //   type: 'Material',
            //   name: 'split-button:page-break',
            //   size: 'large',
            //   dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
            //   commands: [
            //     {
            //       name: 'HDEC ApplyMaterial',
            //       hint: '应用', // optional
            //       label: '应用', // optional
            //       icon: 'assets/images/SetUp32x32.png',
            //       iconType: 'img'
            //     }
            //   ]
            // }
            // {
            //   type: 'exclusive-boxes', // define tool type
            //   name: 'exclusive-boxes:styles-options', // tool name,
            //   width: '260px',
            //   height: '80px',
            //   boxCssClasses: ['word-styles'], // array of optional additional CSS classes to apply to the box
            //   data: {
            //     colNumber: 3,
            //     command: 'styles', // commands group name
            //     items: [
            //       {
            //         name: 'Normal',
            //         value: 'normal',
            //         html: '<span style="font-size: 11px; color: #000;">AaBbCc</span><span>Normal</span>'
            //       },
            //       {
            //         name: 'No Spacing',
            //         value: 'no-spacing',
            //         html: '<span style="font-size: 12px; color: #000;">AaBbCc</span><span>No Spacing</span>'
            //       },
            //       {
            //         name: 'Heading 1',
            //         value: 'heading-1',
            //         html: '<span style="font-size: 16px; color: #2e74b5;">AaBbCc</span><span>Heading 1</span>'
            //       },
            //       {
            //         name: 'Heading 2',
            //         value: 'heading-2',
            //         html: '<span style="font-size: 13px; color: #2e74b5;">AaBbCc</span><span>Heading 2</span>'
            //       },
            //       {
            //         name: 'Heading 3',
            //         value: 'heading-3',
            //         html: '<span style="font-size: 12px; color: #2e74b5;">AaBbCc</span><span>Heading 3</span>'
            //       },
            //       {
            //         name: 'Heading 4',
            //         value: 'heading-4',
            //         html: '<span style="font-size: 12px; color: #2e74b5; font-style: italic;">AaBbCc</span><span>Heading 4</span>'
            //       },
            //       {
            //         name: 'Heading 5',
            //         value: 'heading-5',
            //         html: '<span style="font-size: 11px; color: #2e74b5;">AaBbCc</span><span>Heading 5</span>'
            //       },
            //       {
            //         name: 'Heading 6',
            //         value: 'heading-6',
            //         html: '<span style="font-size: 11px; color: #1f4d78;">AaBbCc</span><span>Heading 6</span>'
            //       },
            //       {
            //         name: 'Heading 7',
            //         value: 'heading-7',
            //         html: '<span style="font-size: 11px; color: #1f4d78; font-style: italic">AaBbCc</span><span>Heading 7</span>'
            //       },
            //       {
            //         name: 'Heading 8',
            //         value: 'heading-8',
            //         html: '<span>AaBbCc</span><span>Heading 8</span>'
            //       },
            //       {
            //         name: 'Heading 9',
            //         value: 'heading-9',
            //         html: '<span>AaBbCc</span><span>Heading 9</span>'
            //       },
            //       {
            //         name: 'Title',
            //         value: 'title',
            //         html: '<span style="font-weight: bold">AaBbCc</span><span>Title</span>'
            //       },
            //       {
            //         name: 'Subtitle',
            //         value: 'subtitle',
            //         html: '<span>AaBbCc</span><span>Subtitle</span>'
            //       },
            //       {
            //         name: 'Subtitle Emphasis',
            //         value: 'subtitle-emphasis',
            //         html: '<span style="font-style: italic">AaBbCc</span><span>Subtitle Emphasis</span>'
            //       },
            //       {
            //         name: 'Emphasis',
            //         value: 'emphasis',
            //         html: '<span style="font-weight: bold; font-style: italic">AaBbCc</span><span>Emphasis</span>'
            //       },
            //       {
            //         name: 'Intense Emphasis',
            //         value: 'intense-emphasis',
            //         html: '<span style="font-weight: bold">AaBbCc</span><span>Intense Emphasis</span>'
            //       }
            //     ]
            //   }
            // },
            // {
            //   type: 'group', // define the type of the tool
            //   name: 'group:undo-redo', // tool name
            //   items: 'break', // optionally display the buttons list vertically
            //   width: '64px',
            //   members: [
            //     {
            //       type: 'split-button',
            //       name: 'split-button:page-break',
            //       size: 'large',
            //       dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
            //       commands: [
            //         {
            //           name: 'HDEC ApplyMaterial',
            //           hint: '应用', // optional
            //           label: '应用', // optional
            //           icon: 'assets/images/SetUp32x32.png',
            //           iconType: 'img'
            //         }
            //       ]
            //     },
            //     {
            //       type: 'split-button',
            //       name: 'split-button:page-break',
            //       size: 'large',
            //       dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
            //       commands: [
            //         {
            //           name: 'HDEC RemoveMaterial',
            //           hint: '移除', // optional
            //           label: '移除', // optional
            //           icon: 'assets/images/Delete32x32.png',
            //           iconType: 'img'
            //         }
            //       ]
            //     }
            //   ]
            // }
            // /* {
            //   type: 'split-button',
            //   name: 'split-button:page-break',
            //   size: 'large',
            //   dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
            //   commands: [
            //     {
            //       name: 'Visualization Material',
            //       hint: '可视化材质', // optional
            //       label: '材质', // optional
            //       icon: 'assets/images/ColorIndex32x32.png',
            //       iconType: 'img'
            //     }
            //   ]
            // }, */
          ],
        },
      ],
    },
    {
      label: '文件',
      ribbons: [
        {
          label: '导入',
          width: '268px',
          name: 'characteristic',
          tools: [
            {
              type: 'ImportFile',
              custom: true,
            },
          ],
        },
      ],
    },
  ],
  bangs: [
    {
      type: 'buttons',
      name: 'button',
      size: 'large',
      items: '',
      commands: [
        {
          name: 'HDEC WireframeMode',
          hint: '线框模式', // optional
          label: '线框模式', // optional
          icon: 'assets/images/DisplayStyleWireframe32x32.png',
          iconType: 'img',
        },
        {
          name: 'HDEC SmoothMode',
          hint: '光滑模式', // optional
          label: '光滑模式', // optional
          icon: 'assets/images/DisplayStyleSmooth32x32.png',
          iconType: 'img',
        },
        {
          name: 'HDEC BandedgeMode',
          hint: '带边缘着色', // optional
          label: '带边缘着色', // optional
          icon: 'assets/images/DisplayStyle32x32.png',
          iconType: 'img',
        },
        {
          name: 'HDEC IsometricView',
          hint: '等轴侧视图', // optional
          label: '等轴侧视图', // optional
          icon: 'assets/images/RotateActiveIso32x32.png',
          iconType: 'img',
        },
        {
          name: 'HDEC TopView',
          hint: '顶视图', // optional
          label: '顶视图', // optional
          icon: 'assets/images/RotateActiveTop32x32.png',
          iconType: 'img',
        },
        {
          name: 'HDEC FrontView',
          hint: '前视图', // optional
          label: '前视图', // optional
          icon: 'assets/images/RotateActiveFront32x32.png',
          iconType: 'img',
        },
        {
          name: 'HDEC RightView',
          hint: '右视图', // optional
          label: '右视图', // optional
          icon: 'assets/images/RotateActiveRight32x32.png',
          iconType: 'img',
        },
        {
          name: 'HDEC ZoomView',
          hint: '缩放视图', // optional
          label: '缩放视图', // optional
          icon: 'logo',
          iconType: 'svg',
        },
        {
          name: 'HDEC PanView',
          hint: '平移视图', // optional
          label: '平移视图', // optional
          icon: 'logo',
          iconType: 'svg',
        },
        {
          name: 'HDEC RotateView',
          hint: '旋转视图', // optional
          label: '旋转视图', // optional
          icon: 'logo',
          iconType: 'svg',
        },
        {
          name: 'HDEC FitView',
          hint: '适应窗口', // optional
          label: '适应窗口', // optional
          icon: 'assets/images/FitCamera32x32.png',
          iconType: 'img',
        },
      ],
    },
    {
      type: 'dropdown-slider',
      name: 'HDEC ViewChangeLight',
      hint: '光照调节', // optional
      pattern: 'simplify',
      // width: '120px', // width of the dropdown in pixels or percentage. if not set, width will be automatic
      value: 0.5,
      step: 0.01,
      min: 0,
      max: 1, // optional
      icon: 'assets/images/Light32x32.png',
      iconType: 'img',
    },
    {
      type: 'split-button',
      name: 'split-button:page-break',
      size: 'medium',
      dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
      commands: [
        {
          name: 'HDEC OrthogonalProjection',
          hint: '正交投影', // optional
          label: '正交投影', // optional
          icon: 'assets/images/ViewPerspective32x32.png',
          iconType: 'img',
        },
        {
          name: 'HDEC PerspectiveProjection',
          hint: '透视投影', // optional
          label: '透视投影', // optional
          icon: 'assets/images/ViewPerspective32x32.png',
          iconType: 'img',
        },
        {
          name: 'HDEC StretchProjection',
          hint: '拉伸投影', // optional
          label: '拉伸投影', // optional
          icon: 'assets/images/ViewPerspective32x32.png',
          iconType: 'img',
        },
      ],
    },
    {
      type: 'buttons',
      name: 'button',
      size: 'large',
      items: '',
      commands: [
        {
          name: 'HDEC CuttingSection',
          hint: '剖切', // optional
          label: '剖切', // optional
          icon: 'assets/images/SectioningAttempt32x32.png',
          iconType: 'img',
          popupConfig: {
            component: 'CuttingSection',
            type: 'dragpopup',
            width: 360,
            titleText: '视图剖切',
          },
        },
      ],
    },
  ],
}

export default word
