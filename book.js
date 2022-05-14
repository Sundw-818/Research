module.exports = {
    // 书籍信息
    "title": "书名",
    "description": "描述",
    "isbn": "图书编号",
    "author": "孙黛雯",
    "lang": "zh-cn",

    // 插件列表
    "plugins": ["-lunr", "-search", "search-pro", "code", "expandable-chapters", "back-to-top-button", "katex-gf",
                "advanced-emoji", "emphasize", "splitter", "tbfed-pagefooter"],

    // 插件全局配置
    "pluginsConfig": {
        // "code": {
        //     "copyButtons": false
        //   }
        "pluginsConfig": {
            "tbfed-pagefooter": {
                "copyright":"Copyright &copy xxxx.com 2017",
                "modify_label": "该文件修订时间：",
                "modify_format": "YYYY-MM-DD HH:mm:ss"
            }
        }
    },

        // 模板变量
    "variables": {
            // 自定义
    }

};