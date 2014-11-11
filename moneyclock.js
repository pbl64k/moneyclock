
var moneyclock = {
    TICK_MSEC: 100,

    startTime: Date.now(),

    ratePerSec: 0,

    init: function()
    {
        document.getElementById('configForm').style.display = '';
    },

    start: function()
    {
        document.getElementById('configForm').style.display = 'none';
        document.getElementById('moneyclock').style.display = '';

        moneyclock.ratePerSec = document.getElementById('hourlyRates').value.split(',')
                .map(function(x) { return parseFloat(x) / 3600; })
                .reduce(function (x, y) { return x + y; });

        moneyclock.startTime = Date.now();

        setInterval(moneyclock.tick, moneyclock.TICK_MSEC);
    },

    tick: function()
    {
        var curTime = Date.now();

        var moneySpent = '$' + (moneyclock.ratePerSec * ((curTime - moneyclock.startTime) / 1000)).toFixed(2);

        document.getElementById('moneyclock').innerHTML = moneySpent;
    },
};

