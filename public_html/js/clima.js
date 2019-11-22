function getClima(){
    
    $.ajax({
        method: 'get',
        crossDomain: true,
        url: 'https://api.openweathermap.org/data/2.5/weather?id=3468879&appid=56d07e3a24ce1661cdaf641d1e86a0ff',
        dataType: 'json',
        success: function (data){
            
            temperatura  = data.main.temp - 273;
            $('#temperatura').html(temperatura+"º");
            //alert(temperatura - 273);
            
             umidade  = data.main.umidith ;
            $('#umidade').html(umidade);
            
            descricao = traduzirDescricao(data.weather[0].description);
            $('#situacao').html(descricao);
            
            //temperaturaMaxima  = data.main.temp_max;
            //alert(temperaturaMaxima -273 );
            
           //umidade = data.main.humidity;
            //alert(umidade);
        },
        error: function (argument) {
            alert('Falha ao obter dados!');
            
        }
    });
}

function traduzirDescricao(descricao){
    descricaoTraduzida = "";
    
    
    if(descricao == "clear sky"){
        descricaoTraduzida = "céu limpo";
        
    }else  if(descricao == "few clouds"){
        descricaoTraduzida = "Poucas nuvens";
        
    }else  if(descricao == "scattered clouds"){
        descricaoTraduzida = " Nuvens dispersas";
        
    }else  if(descricao == "broken clouds"){
        descricaoTraduzida = "Nuvens quebradas ";
        
    }else  if(descricao == "shower rain"){
        descricaoTraduzida = "Chuva de banho";
        
    }else  if(descricao == "rain"){
        descricaoTraduzida = " Chuva";
        
    }else  if(descricao == "thunderstorm"){
        descricaoTraduzida = " Trovoada";
        
    }else  if(descricao == "snow"){
        descricaoTraduzida = "Neve ";
        
    }else  if(descricao == "mist"){
        descricaoTraduzida = " Névoa";
    }
        return descricaoTraduzida;
        
  }
        
        
        
    
window.onload = function(){
    getClima();
};
    
    



