var req=new XMLHttpRequest;
req.open("GET",'https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
    var data=JSON.parse(this.response);
    var asiacon=data.filter(x=>x.region=="Asia").map(item=>item.name);
    console.log(asiacon);

    var populess2l=data.filter(y=>y.population<200000).map(item=>item.name);
    console.log(populess2l);

    var total=data.reduce((acc,item)=>acc+item.population,0);
    console.log(total);

    data.forEach(item=>console.log(item.name,item.capital,item.flag));
   
}
