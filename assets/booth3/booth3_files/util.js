function BrowserIsNotIE5() {
var browser=navigator.appName;
var version=navigator.appVersion;
var isNotIE5 = true;
if (browser.indexOf("Microsoft") >= 0 ) {
if (version.indexOf("MSIE 5.0") != -1) {
isNotIE5 = false;
}
}
return isNotIE5;
}
function popUpAdmin(cid,url){
sealWin=window.open(url,"Admin"+cid,'toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=1');
if ( BrowserIsNotIE5() && sealWin != null )
sealWin.focus();
}
function popUpDialogResizeable(cid,name,url){
sealWin=window.open(url,name+cid,'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=1,width=700,height=525');
if ( BrowserIsNotIE5() && sealWin != null )
sealWin.focus();
}
function popUpDialogResizeableVarSize(cid,name,url,w,h){
sealWin=window.open(url,name+cid,'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=1,width='+w+',height='+h);
if ( BrowserIsNotIE5() && sealWin != null )
sealWin.focus();
}
function popUpExt(cid,url,w1,h1){
sealWin=window.open(url,"Ext"+cid,"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=1,width="+w1+",height="+h1);
if ( BrowserIsNotIE5() && sealWin != null )
sealWin.focus();
}
function popUpExtNoResize(cid,url,w1,h1){
sealWin=window.open(url,"Ext"+cid,"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width="+w1+",height="+h1);
if ( BrowserIsNotIE5() && sealWin != null )
sealWin.focus();
}
function popUpUpload(url){
sealWin=window.open(url,'Upload','toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=1,width=550,height=130');
if ( BrowserIsNotIE5() && sealWin != null )
sealWin.focus();
}

function MM_swapImgRestore() { //v3.0
var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_findObj(n, d) { //v4.01
var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { //v3.0
var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function MM_reloadPage(init) {  //Updated by PVII. Reloads the window if Nav4 resized
if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);
function MM_openBrWindow(theURL,winName,features,myWidth,myHeight,isCenter) { //v3.0
if(window.screen)if(isCenter)if(isCenter=="true"){
var myLeft = (screen.width-myWidth)/2;
var myTop = (screen.height-myHeight)/2;
features+=(features!='')?',':'';
features+=',left='+myLeft+',top='+myTop;
}
window.open(theURL,winName,features+((features!='')?',':'')+'width='+myWidth+',height='+myHeight);
}
function MM_showHideLayers() { //v3.0
var i,p,v,obj,args=MM_showHideLayers.arguments;
for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
obj.visibility=v; }
}
function MM_changeProp(objName,x,theProp,theValue) { //v3.0
var obj = MM_findObj(objName);
if (obj && (theProp.indexOf("style.")==-1 || obj.style)) eval("obj."+theProp+"='"+theValue+"'");
}
function addbookmark(){
if (document.all) window.external.AddFavorite(location.href,document.title)
}
function cVoid(){return}

try {
var ie=document.all?1:0
} catch (err) {
var ie=1
}
try {
var ns4=document.layers?1:0
} catch (err) {
var ns4=0
}
try {
var ns6=(document.getElementById&&!document.all)?1:0
} catch (err) {
var ns6=0
}
function winheight() {return (ns4||ns6)?window.innerHeight:window.document.body.clientHeight;}
function winwidth() {return (ns4||ns6)?window.innerWidth:window.document.body.clientWidth;}

function fApplyPageBreak(){
var sPageHeader	= "";
var sPageFooter	= "";
if ( document.getElementById ){
for ( var i=1; i <= document.frmPageBreak.numPages.value; i++ ){
if ( document.getElementById( "page_" + i ) ){
if ( i == document.frmPageBreak.curPage.value ) sStyle = "block"
else sStyle = "none";
document.getElementById( "page_" + i ).style.display = sStyle;}}
if ( document.frmPageBreak.curPage.value == 1 )	{
document.getElementById("pagebreak_header").style.display = "none";
if ( document.frmPageBreak.curPage.value < document.frmPageBreak.numPages.value ){
sPageFooter = "CONTINUED&nbsp;&nbsp;&nbsp;";
sPageFooter = fAppendPageLinks( sPageFooter );
sPageFooter += "&nbsp;&nbsp;<a href=\"Javascript: fShowPage( document.frmPageBreak.curPage.value * 1 + 1 );\">Next</a>&gt;";
sPageFooter += "&nbsp;&nbsp;<a href=\"Javascript: fShowPage( document.frmPageBreak.numPages.value );\">Last</a>&gt;&gt;";}}
else{
sPageHeader = "Page&nbsp;" + document.frmPageBreak.curPage.value + "&nbsp;of&nbsp;" + document.frmPageBreak.numPages.value;
document.getElementById("pagebreak_header").innerHTML = sPageHeader;
document.getElementById("pagebreak_header").style.display = "block";
sPageFooter = "&lt;&lt;<a href=\"Javascript: fShowPage(1);\">First</a>&nbsp;&nbsp;";
sPageFooter += "&lt;<a href=\"Javascript: fShowPage( document.frmPageBreak.curPage.value * 1 - 1 );\">Back</a>&nbsp;&nbsp;&nbsp;";
sPageFooter = fAppendPageLinks( sPageFooter );
if ( document.frmPageBreak.curPage.value < document.frmPageBreak.numPages.value ){
sPageFooter += "&nbsp;&nbsp;<a href=\"Javascript: fShowPage( document.frmPageBreak.curPage.value * 1 + 1 );\">Next</a>&gt;";
sPageFooter += "&nbsp;&nbsp;<a href=\"Javascript: fShowPage( document.frmPageBreak.numPages.value );\">Last</a>&gt;&gt;";}}
document.getElementById("pagebreak_footer").innerHTML = sPageFooter;
document.getElementById("pagebreak_footer").style.display = "block";}
}
function fAppendPageLinks( s ){
for ( var i=1; i <= document.frmPageBreak.numPages.value; i++ )	{
if ( i != document.frmPageBreak.curPage.value) s += "<a href=\"Javascript: fShowPage(" + i + ");\">";
s += ( i + "" );
if ( i != document.frmPageBreak.curPage.value) s += "</a>";
s += "&nbsp;";}
return s;
}
function fShowPage( n ){
document.frmPageBreak.curPage.value = n;
fApplyPageBreak();
}
function fElementSelect( objElement, checkSelectedValue ){
if (objElement.options)
if (objElement.options.length>=1) {
for(var i=0; i<objElement.options.length; i++){
if(objElement.options[i].value == checkSelectedValue)
{objElement.options[i].selected = true}
else { 
if( ("," + checkSelectedValue + ",").indexOf( "," + objElement[i].value + "," ) >= 0 )
objElement[i].selected = true;
else
objElement.options[i].selected = false;}}}
return true;
}
function fElementRadio( objElement, checkSelectedValue ){
if (objElement.length>=1)
for(var i=0; i<objElement.length; i++){
if(objElement[i].value == checkSelectedValue)
{objElement[i].checked = true}
else
objElement[i].checked = false;}
return true;
}
function fElementCheckbox( objElement, checkSelectedValue ){
if (objElement.length>=1)
for(var i=0; i<objElement.length; i++){
if(objElement[i].value == checkSelectedValue)
{objElement[i].checked = true}
else {
if ( ("," + checkSelectedValue + ",").indexOf("," + objElement[i].value + ",") >= 0)
objElement[i].checked = true;
else
objElement[i].checked = false;}}
return true;
}
function fElementCheckboxOption( objElement, sCheck ) {
if (sCheck != null && sCheck != "" && sCheck != "0" && sCheck != "NO" && sCheck != "no" && sCheck != "N" && sCheck != "n")
objElement.checked = true;
else
objElement.checked = false;
}
function fMergeAttachment(mergefield, spanid, domain) {
var filename=mergefield;
var filename2=filename;
var filetype='';
var output;
if (filename.indexOf(',') >= 0)
{
var filesplit = filename.split(",")
filename = filesplit[0];
filename2 = filesplit[1];
}
if (filename.indexOf('.') >= 0)
{filetype = filename.substr(filename.indexOf(".") + 1).toLowerCase();}
filename = domain + filename;
if (filetype == 'jpeg' || filetype == 'jpg' || filetype == 'gif' )
{output = "<img src='" + filename + "' alt='" + filename2 + "'>";}
else
{output = "<a target='_blank' href='" + filename + "'>" + filename2 + "</a>";}
spanid.innerHTML = output;
}
var currentPage=1, totalPage;
function changepage(current, pagecount) {
    currentPage = current;
    totalPage = pagecount;
    var pageElements = document.getElementsByTagName("div");
    for (var i = 0; i < pageElements.length; i++) {
        if (pageElements[i].className == "network_member_page_content") {
            pageElements[i].style.display = "none";
        }
    }
    document.getElementById('pagediv' + current).style.display = "";
    if (currentPage == 1) {
        document.getElementById("pagePrev").disabled = true;
    }
    else {
        document.getElementById("pagePrev").disabled = false; ;
    }
    if (currentPage == totalPage) {
        document.getElementById("pageNext").disabled = true;
    }
    else {
        document.getElementById("pageNext").disabled = false;
    }
}
function goPrevPage(obj, totalPage) {
    if (currentPage >= 2) {
        changepage(currentPage - 1, totalPage);
    }
}
function goNextPage(obj, totalPage) {
    if (currentPage != totalPage) {
        changepage(currentPage + 1, totalPage);
    }
}
