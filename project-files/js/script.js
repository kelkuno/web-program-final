var baseURL = "https://api.openweathermap.org";
var vm = new Vue ({
    el: "#app",
    data: {
        theWeather: [],
        current: {}

    },
    methods: {
        getWeather: function () {
            axios.get(baseURL + "/data/2.5/forecast?id=5037649&units=imperial&APPID=1c1c263df2c51f2f988897655b61c6e9").then(function(response){
                console.log(response);
                vm.theWeather = response.data.list;
            });
        },
        getCurrentWeather: function () {
            axios.get(baseURL + "/data/2.5/weather?id=5037649&units=imperial&APPID=1c1c263df2c51f2f988897655b61c6e9").then(function(response){
                console.log(response);
                vm.current = response.data;
            });
        },
    },
    created: function() {
        this.getWeather();
        this.getCurrentWeather();
    }
});


