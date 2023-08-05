<!--
// This is to fixe a netscape bug...

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);


/*   This script changes between pictures depending on when the page is visited.
     The imagename is calculated and consists of the parts "cutiee" & number & ".gif".
     An example: cutiee1.jpg
     The script is compatible back to Netscape3/Explorer3 - at least.  



     The following first two variables gets the current second      */

var now = new Date();
var exactTimer = now.getSeconds();



/*   This next variable decides how many pic-numbers are generated.
     Changing the number here allows more pics, as many as the number.
     All pics must be in the form cutiee?.gif                        */

var randomStuff = eval(exactTimer % 5);



/*   Finally the stuff is corrected and put out as HTML.                    */

var picNumber=randomStuff+1
var cutiee="<IMG src=\"sitegrafics/cutiee"+picNumber+".gif\">";

//-->