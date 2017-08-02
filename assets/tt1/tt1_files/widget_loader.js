function r_to_params(obj, nest){
  var a = [];
  if(nest){
    for(key in obj){
      a.push( [ encodeURIComponent(nest + "[" + key + "]"), encodeURIComponent(obj[key])].join('=') );
    };
  } else{
    for(key in obj){
      a.push( [ key, encodeURIComponent(obj[key])].join('=') );
    };
  }
  return a.join('&')
};

function r_sanitize_params(obj){
  var params = {}
  if(obj.title) params.title = obj.title;
  if(obj.short_description) params.short_description = obj.short_description;
  if(obj.long_description) params.long_description = obj.long_description;
  if(obj.image) params.image = obj.image;
  if(obj.color) params.color = obj.color;

  var str = r_to_params(params);

  if(obj.donation_options){
    str += '&' + r_to_params(obj.donation_options, 'donation_options');
  } else {
    str += '&donation_options='; // We always want this param to be sent even if its blank.
  }
  
  return '?' + str
};

(function() {
  var ri=document.createElement('iframe');
  var src=document.getElementById("razoo_widget_loader_script").src;

  var host=src.match(/^https?\:\/\/[a-z\-\.\:\d]+/);

  if (window.r_params){
    var r_params = r_sanitize_params(window.r_params);
  } else {
    var r_params = '';
  }

  var path=host+'/widgets/orders/'+r_identifier+r_params;
  ri.scrolling="no";
  ri.marginHeight="0";
  ri.marginWidth="0";
  ri.width="300";
  ri.height="500";
  ri.frameBorder="0";
  ri.style.width="300px";
  ri.style.height="500px";
  ri.style.padding="0";
  ri.style.margin="0";
  ri.style.border=0;
  ri.style.overflow="hidden";
  ri.src=path;
  document.getElementById("razoo_donation_widget").innerHTML = '';
  document.getElementById("razoo_donation_widget").appendChild(ri);
})();
