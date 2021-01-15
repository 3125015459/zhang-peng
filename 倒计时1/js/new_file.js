$(function() {
    var clock = new Vue({
        el: '#clock',
        data: {
            time: '',
            date: ''
        }
    });

    var timerID = setInterval(updateTime, 1000);
    updateTime();

    function updateTime(year, month, day) {
        var year = 2020,
            month = 07,
            day = 18;
        var now = new Date();
        var endDate = new Date(year, month - 1, day);
        var leftTime = endDate.getTime() - now.getTime(); //剩余毫秒
        var leftsecond = parseInt(leftTime / 1000);

        var day1 = Math.floor(leftsecond / (60 * 60 * 24)); //剩余天
        var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600); //剩余时
        var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60); //剩余分
        var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60); //剩余秒
        clock.time = day1 + "天" + (hour + 9) + "小时" + minute + "分" + second + "秒"; //显示
        clock.date = "距离我们的中考仅有";

    };

})