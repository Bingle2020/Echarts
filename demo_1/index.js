$.get("./json/china.json", function (map) {
    var myChart = echarts.init(document.getElementById('app'));
    echarts.registerMap("china", map);
    var option = {
        series: [{
            map: "china",
            type: "map",
            aspectScale: 1.0,
            selectedMode: 'single', //选择类型,
            hoverable: true, //鼠标经过高亮
            roam: true, //鼠标滚轮缩放
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: '#ffffff', //区域边框色
                    areaColor: '#FFDAB9', //区域背景色
                    label: {
                        show: false,
                        textStyle: {
                            color: '#6495ED', //文字颜色
                            fontSize: '.8rem' //文字大小
                        }
                    }
                },
                emphasis: { // 选中样式
                    borderWidth: 1,
                    borderColor: '#00ffff',
                    color: '#ffffff',
                    label: {
                        show: true,
                        textStyle: {
                            color: '#ff0000'
                        }
                    }
                }
            }
        }]
    };
    myChart.setOption(option);
});