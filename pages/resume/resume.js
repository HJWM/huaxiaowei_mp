// pages/resume/resume.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'wuxian1',
        name: '无线通信一组',
        open: false,
        contents: [{
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '无线一主要涉及各种硬件的开发，秉承一贯的美好作风，传承扎实的精神品质，发扬独有的气质，用心做每件事，待每个人。'
          }]
        }, {
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '主要技能：'
          }]
        }, {
          name: 'ol',
          children: [{
            name: 'li',
            children: [{
              type: 'text',
              text: 'Linux 脚本开发，单片机，FPGA项目开发，数、模电路设计；'
            }]
          }, {
            name: 'li',
            children: [{
              type: 'text',
              text: '移动通信，万物互联；'
            }]
          }, {
            name: 'li',
            children: [{
              type: 'text',
              text: '智能硬件，智能家居；'
            }]
          }, {
            name: 'li',
            children: [{
              type: 'text',
              text: '秒变大神，秒变逗比。'
            }]
          }]
        }, {
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '入组攻略：'
          }]
        }, {
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '部门欢迎各路电子发烧友，硬件大拿来施展才华，也欢迎其他领域的佼佼者来跨行开拓，更欢迎虽是小白，但会吃会玩有自身亮点的有志青年来交流学习。无线一能给你提供的或许不是最前沿的硬件知识，但绝对是最和谐的交流平台和最珍贵的研途友谊。加入俱乐部，加入无线一，一起学习，一起吃、喝、玩、乐，让枯燥的研途更加精彩。'
          }]
        }]
      }, {
        id: 'wuxian2',
        name: '无线通信二组',
        open: false,
        contents: [{
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '无线通信二组是俱乐部中各类软件技术的学习交流聚集之地，也是喜欢软件开发小伙伴的最理想的思想碰撞的地方。这里有许多与软件开发相关技术包括但不限于Java技术，Android开发，Web应用开发（前台，后台），我们会常常举办一些独具特色的技术交流分享会，老带新学习指导，以及学习后的实践，各类软件开发大赛一定会有我们的身影。我们可以一起做些小开发，并让你从中受益。'
          }]
        }, {
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '主要技能：'
          }]
        }, {
          name: 'ol',
          children: [{
            name: 'li',
            children: [{
              type: 'text',
              text: 'Java技术；'
            }]
          }, {
            name: 'li',
            children: [{
              type: 'text',
              text: 'Android开发；'
            }]
          }, {
            name: 'li',
            children: [{
              type: 'text',
              text: 'Web应用开发（前端，后台）；'
            }]
          }, {
            name: 'li',
            children: [{
              type: 'text',
              text: 'Python技术；'
            }]
          }, {
            name: 'li',
            children: [{
              type: 'text',
              text: 'C++技术。'
            }]
          }]
        }, {
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '在无线二组中，不仅可以一起学习不同方向的技术，从不同的大牛那里获取一手找工作的信息，通过与前辈们的交流及思考，明确今后的学习工作的目标。另外，你还可以认识很多可爱且志同道合的小伙伴们，我们不仅仅可以谈技术，也可以谈人生谈理想，从诗词歌赋聊到人生哲学。这里会给你家一般的感觉，不论是学习还是娱乐，这里都会让你从心底里感到快乐。别犹豫啦，快到碗里来！'
          }]
        }]
      },
      {
        id: 'gukuan',
        name: '固定带宽组',
        open: false,
        pages: [],
        contents: [{
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '固定宽带组专注于各类算法的学习和探讨。这些算法包括但不限于：经典算法（枚举、贪婪、分治、递归、回溯、动态规划等）、机器学习算法（各类无监督学习算法和有监督学习算法）、深度学习（Tensor Flow、Keras、Caffe等框架）、计算机视觉（各类图像处理库）。'
          }]
        }, {
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '固宽组希望集结一帮志同道合的伙伴，一起做竞赛，瓜分奖金。现在主流的一些竞赛，如华为软件精英挑战赛、天池大数据竞赛平台、百度点石竞赛平台等，前三甲都有数万元的奖金。'
          }]
        }, {
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '如果你在包括但不限于以下的任何竞赛中取得优异的成绩，我们欢迎你的加入。'
          }]
        }, {
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: 'ACM及其他相关算法竞赛'
          }]
        }, {
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '各种大型互联网公司举办的竞赛'
          }]
        }, {
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '全国大学生电子设计竞赛'
          }]
        }, {
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '全国大学生数学建模竞赛'
          }]
        }, {
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '如果你擅长包括但不限于以下任何编程语言，我们欢迎你的加入：C/C++、C#、Java、Python、MATLAB'
          }]
        }, {
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '固宽组是一个团结向上的团体。我们会定期举行组内的技术交流学习会，督促成员一起参加一些高端大气上档次的竞赛，不定期举行一些组内的联谊活动（吃喝玩乐，狼人杀、阿瓦隆等桌游，唱歌等）。我们的宗旨是:增进技术，瓜分奖金，玩的开心。'
          }]
        }, {
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '欢迎各位同学向我们部门投递你们的简历。'
          }]
        }]
      },
      {
        id: 'yunjisuan',
        name: '云计算与海量数据组',
        open: false,
        contents: [{
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '云计算组定位于大数据与云计算技术，我们的目标是：在算法上，立足于机器学习、深度学习等数据挖掘算法，共同学习国际前沿技术与知识；在工程应用上，一起剖析底层经典技术实现，在服务器端开发方向进行深入学习。如果你擅长MATLAB、python、C/C++、Java等一种或多种语言，如果你曾在华为软件精英挑战赛、天池大数据竞赛、阿里中间件性能挑战赛、全国大学生电子设计竞赛、全国大学生数学建模竞赛等各种比赛中斩获佳绩，如果你有项目实战开发经验，熟练使用各种开源框架，如果你对复杂数据有敏锐的洞察力，善于在数据沙漠中掘金，我们都欢迎你的加入。'
          }]
        }, {
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '主要技能：'
          }]
        }, {
          name: 'ol',
          children: [{
            name: 'li',
            children: [{
              type: 'text',
              text: '机器学习(如SVM、线性回归、聚类等算法)；'
            }]
          }, {
            name: 'li',
            children: [{
              type: 'text',
              text: '深度学习(TensorFlow、Caffe、Keras等框架)；'
            }]
          }, {
            name: 'li',
            children: [{
              type: 'text',
              text: '数据挖掘、特征发现；'
            }]
          }, {
            name: 'li',
            children: [{
              type: 'text',
              text: '爬虫技术；'
            }]
          }, {
            name: 'li',
            children: [{
              type: 'text',
              text: '服务器端开发深入学习(如并发编程、框架源码分析、高性能数据库、分布式应用开发) 。'
            }]
          }]
        }, {
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '云计算组会定期以分享会的形式带领大家共同学习，探讨最前沿的技术和知识，或剖析经典技术的底层实现。也会组织大家一起参加比赛，斩获竞赛大奖；一起开发产品，通过实践加深对知识的理解。另外，也常吃喝玩乐，聚餐，KTV，桌游，登山一样不少；我们深信，优秀是一种习惯，希望你可以在云计算结交更多和你一样优秀的小伙伴！'
          }]
        }]
      }, 
      {
        id: 'wangmei',
        name: '网络媒体组',
        open: false,
        pages: ['button', 'list', 'input', 'slider', 'uploader'],
        contents: [{
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '网媒组是一个将idea变成产品的部门，聚集了一批机器学习、Web前端/服务端和产品运营方向的小伙伴，近几届的成员曾多次斩获算法类、软件类奖项，拥有较为丰富的开发和参赛经验。我们崇尚寓学于用，组建项目小组，在实战中磨练技术；开展日常的分享交流会也是我们一贯的传统。'
          }]
        }, {
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '主要技能：'
          }]
        }, {
          name: 'ol',
          children: [{
            name: 'li',
            children: [{
              type: 'text',
              text: '机器学习：人工神经网络，回归/贝叶斯/聚类/遗传化/迁移学习'
            }]
          }, {
            name: 'li',
            children: [{
              type: 'text',
              text: 'Web开发：React/Vue.js等主流前端框架、微信小程序、Node.js、服务端'
            }]
          }, {
            name: 'li',
            children: [{
              type: 'text',
              text: '神秘的非技术能力'
            }]
          }]
        }]
      }, 
      {
        id: 'ximeiti',
        name: '新媒体中心',
        open: false,
        contents: [{
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '新媒体是俱乐部的冲锋战士，负责俱乐部的活动的策划宣传工作。后期将会着重利用和开辟多维的宣广渠道，将好的宣广资源高效合理应用。'
          }]
        }, {
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '工作内容：'
          }]
        }, {
          name: 'ol',
          children: [{
            name: 'li',
            children: [{
              type: 'text',
              text: '负责俱乐部活动文案策划与宣传；'
            }]
          }, {
            name: 'li',
            children: [{
              type: 'text',
              text: '“西电华了个为”微信公众号的宣传与运营工作；'
            }]
          }, {
            name: 'li',
            children: [{
              type: 'text',
              text: '华为创新俱乐部官方微博的宣传与运营工作；'
            }]
          }, {
            name: 'li',
            children: [{
              type: 'text',
              text: '西电睿思论坛的相关宣传与运营工作。'
            }]
          }]
        }, {
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '俱乐部的福利数不胜数，技能培训和各种干货宣讲，我们总是拿到第一手信息，华俱在无形中给我们带来了太多的便利！在这里，我们的课余时间被充分利用了起来，每一分每一秒都变得有意义。孜孜不倦地跟着俱乐部的学长学姐学着做策划、写文案、排版发文，拿下了实实在在的技能，我们能更加清晰地认识自己、理解他人，快速地提升自我、结交伙伴。'
          }]
        }]
      }, 
      {
        id: 'mishu',
        name: '秘书处',
        open: false,
        contents: [{
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '这里是产品经理和项目经理的摇篮。作为俱乐部的润滑剂，秘书处的职能是协调各部门完成工作。同时作为俱乐部中的产品部门，秘书处的另一职能是负责产品的相关工作。'
          }]
        }, {
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: 'Get产品经理与项目经理的相关技能：'
          }]
        }, {
          name: 'ol',
          children: [{
            name: 'li',
            children: [{
              type: 'text',
              text: '敏锐的观察力，发现并掌握目标市场和用户需求的变化趋势；'
            }]
          }, {
            name: 'li',
            children: [{
              type: 'text',
              text: '善于思考，确定目标市场、产品定位、发展规划及路线图；'
            }]
          }, {
            name: 'li',
            children: [{
              type: 'text',
              text: '细心的分析，对来自市场、用户等各方面的需求进行收集、汇总、分析、更新、跟踪；'
            }]
          }, {
            name: 'li',
            children: [{
              type: 'text',
              text: '强大的汇总能力，编写产品需求文档；'
            }]
          }, {
            name: 'li',
            children: [{
              type: 'text',
              text: '乐于沟通，善于交流，组织协助俱乐部各个部门；'
            }]
          }, {
            name: 'li',
            children: [{
              type: 'text',
              text: '认真负责的态度，配合俱乐部小伙伴完成产品的测试工作。'
            }]
          }]
        }, {
          name: 'p',
          attrs: {
            class: 'rich-p'
          },
          children: [{
            type: 'text',
            text: '在秘书处，你可以学到运营方法，了解产品相关工作，锻炼活动策划能力，让自己的综合素质显著提升。并且可以收获珍贵的友谊，彼此学习共同进步，风雨同舟，共创未来！'
          }]
        }]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
        if (list[i].id == id) {
            list[i].open = !list[i].open
        } else {
            list[i].open = false
        }
    }
    this.setData({
        list: list
    });
  }
})