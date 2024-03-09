var autoloads = ["projectpreview.js", "headercomponent.js", "footercomponent.js"];
var array_length = autoloads.length;
for (var i = 0; i < array_length; i++) {
    let script = document.createElement('script');
    script.src = "/js/" + autoloads[i];
    document.getElementById("endanchor").append(script);
    console.log(autoloads[i]);
    //Do something
}
