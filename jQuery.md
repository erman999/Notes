# jQuery

#### Ajax
```js
$.ajax({
  url : "page.php",
  type: "POST",
  data : { "username": "erman999" },
  dataType: 'json',
  success: function(response, status, xhr){
    console.log(response);
  },
  error: function(xhr, status, err){
    console.log(xhr);
  },
  complete: function(xhr, status){
    console.log(xhr);
  }
});
```

#### Ajax Multimedia
```js
$.ajax({
  url : "page.php",
  enctype: 'multipart/form-data',
  type: "POST",
  dataType: 'json',
  data : { "username": "erman999" },
  processData: false,
  contentType: false,
  beforeSend: function() {
    $('#my_form').trigger("reset");
  },
  xhr: function(){
    var xhr = $.ajaxSettings.xhr();
    xhr.upload.onprogress = function(data){
      console.log(data.loaded, data.total);
      // var percent = Math.round(((Math.round(data.loaded)/Math.round(data.total))*100));
      // var percentVal = percent + '%';
    };
    return xhr;
  },
  success: function(response, status, xhr){
    console.log(response);
  },
  error: function(xhr, status, err){
    console.log(xhr);
  },
  complete: function(xhr, status){
    console.log(xhr);
  }
});
```
