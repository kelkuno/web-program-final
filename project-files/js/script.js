var baseURL = "https://www.metaweather.com";
var vm = new Vue ({
    el: "#app",
    data: {
        weather: []
    },
    methods: {
        getWeather: function () {
            axios.get(baseURL + "/api/location/2452078/2019/4/30/").then(function(response){
                console.log(response);
                vm.weather = response.data;
            })
        }
    },
    created: function() {
        this.getWeather();
    }
});