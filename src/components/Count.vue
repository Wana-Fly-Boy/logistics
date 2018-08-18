<template>
    <div id="count" :style="{'width':'600px','height':'400px'}"></div>
</template>
<script>
    export default {
        data() {
            return {
                msg: 'Hello'
            }
        },
        mounted() {
            this.drawLine();
        },
        methods: {
            drawLine() {
                //基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('count'));

                myChart.setOption({
                    title: {
                        text: '服饰销量统计',
                        textStyle: {
                            color: 'gray',
                            fontWeight: '400',
                            fontSize: 18
                        }
                    },
                    tooltip: {},
                    legend: {
                        data:['销量']
                    },
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20],
                        itemStyle: {
                            normal: {
                                color: '#409eff'
                            }
                        }
                    }],
                });
            }
        }
    }
</script>
<style>
    #count {
        margin: 80px auto;
    }
</style>
