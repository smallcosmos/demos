/*
 *在指定的事件目标上注册用于处理指定类型事件的指定处理程序函数
 *确保处理程序一直作为事件目标的方法调用
 */
function addEvent(target, type, handler){
	if(target.addEventListener){
		target.addEventListener(type, handler, false);
	}else{
		target.attachEvent("on" + type, function(event){//IE
			//把处理程序作为事件目标的方法调用，
			//传递事件对象
			return handler.call(target, event);
		});
	}
}

/*
 *注销监听事件
 */
function removeEvent(target, type, handler){
	if(target.removeEventListener){
		target.removeEventListener(type, handler, false);
	}else{
		target.detachEvent("on" + type, handler);//IE
	}
}

/*
 *取消事件浏览器的默认操作
 */
function cancelHandler(event){
	var event = event || window.event;
	//处理事件代码

	//取消事件相关的默认行为
	if(event.preventDefault){
		event.preventDefault();//标准技术
	}
	if(event.returnValue){
		event.returnValue = true;//IE
	}
	return false;//用于处理使用对象属性注册的处理程序
}

/*
 * 取消事件传播
 */ 
function stopEventPropagation(event){
	var event = event || window.event;
	//处理事件代码
	
	if(event.stopPropagation){
		event.stopPropagation();//标准技术
	}else{
		event.cancelBubble = true;//IE
	}
}

/*
 * 获取鼠标事件（mouseover/mouseout）触发的相关对象
 */ 
var getRelatedTarget = function(event){
	event = event || window.event;
	if(event.relatedTarget){
		return event.relatedTarget;
	}else if(event.toElement){
		return event.toElement;
	}else if(event.fromElement){
		return event.fromElement;
	}else if(event.target){
		return event.target.attributes[0].ownerDocument.activeElement;
	}else{
		return null;
	}
}

/*
 * 获取点击事件（click）触发的目标对象
 */ 
var getTarget = function(event){
	event = event || window.event;
	return event.target || event.srcElement;
}

//检查事件来源
//getRelatedTarget(e).tagName.toUpperCase() == "A") && (getRelatedTarget(e).className.indexOf("class") != -1);
//getTarget(e).tagName.toUpperCase() == "A") && (getTarget(e).className.indexOf("class") != -1);


/*
 * 阻止浏览器继续加载（中断请求，文件上传等）
 */
function CloseSearch(){
    var xhr = createXMLHttpRequest();
    xhr.abort();
    mystop();
}
function mystop(){
    if (!!(window.attachEvent && !window.opera)){
    	document.execCommand("stop");
	}else{
		window.stop();
	}
}

/*
 * 获取样式
 */
function getCss(obj, key){
	return obj.currentStyle ?  obj.currentStyle[key] : window.getComputedStyle(obj,null)[key]; // or obj.ownerDocument.defaultView.getComputedStyle(obj,null)[key];
};

/*
 * 获取浏览器信息
 */
function getBrowseVersion(){
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/msie ([\d.]+)/)) ? (Sys["browse"] = "ie", Sys["version"] = s[1]) :
    (s = ua.match(/firefox\/([\d.]+)/)) ? (Sys["browse"] = "firefox", Sys["version"] = s[1]) :
    (s = ua.match(/chrome\/([\d.]+)/)) ? (Sys["browse"] = "chrome", Sys["version"] = s[1]) :
    (s = ua.match(/opera.([\d.]+)/)) ? (Sys["browse"] = "opera", Sys["version"] = s[1]) :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? (Sys["browse"] = "safari", Sys["version"] = s[1]) : 0;
    return Sys;
}

/*
 * 实例化XMLHttpRequest对象
 */ 
function createXMLHttpRequest(){
	var request;
	//在IE5.0和IE6.0中模拟XMLHttpRequest()构造函数
	if(window.XMLHttpRequest === undefined){
		window.XMLHttpRequest = function(){
			try{
				//如果可用，则使用ActiveX对象的最新版本
				return new ActiveXObject("Msxml2.XMLHTTP.6.0");
			}
			catch(e1){
				try{
					//否则，回退到较旧的版本
					return new ActiveXObject("Msxml2.XMLHTTP.3.0");
				}
				catch(e2){
					//都不可用，抛错
					throw new Error("XMLHttpRequest is not supported");
				}
			}
		};
	}else{
		//大部分浏览器支持的实例化构造函数
		request = new XMLHttpRequest();
	}
	return request;
}

/*
 * 用post向服务器端发送脚
 */ 
function postData(url, data, callback){
	var request = createXMLHttpRequest();
	//指定请求
	request.open("POST",url);
	request.onreadystatechange = function(){
		handleResponse(request,callback);
	}
	//添加监听事件
	//addEvent(request,"readystatechange", handleResponse(request,callback));
	//设置Content-Type类型，表单数据编码格式有一个正式的MIME类型
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	//request.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
	
	//立即发送
	request.send(encodeFormData(data));
	//or request.send(JSON.stringify(data));
}

/*
 * 编码对象的属性
 * 如果它们是来自HTML表单的名/值对，使用application/x-www-form-urlencoded格式
 */ 
function encodeFormData(data){
	if(!data){
		return "";
	}//确保一直返回字符串
	var pairs = [];	//保存名/值对
	for(var index = 0; index < data.length; index++){
		//if(!data.hasOwnProperty(name)){continue;}//跳过继承属性
		//if(typeof data[name] === "function"){continue;}//跳过方法
		//console.log(name, data, data[name].value);
		//if(data[name] && data[name] != "length"){
		var value = data[index]["value"].toString();
		name = data[index].name;
		name = encodeURIComponent(name).replace("%20","+");
		value = encodeURIComponent(value).replace("%20","+");
		pairs.push(name + "=" + value);//}
	}
	//console.log(pairs);
	return pairs.join('&');//返回使用"&"链接的名/值对
}

/*
 * 处理服务器响应结果
 */ 
function handleResponse(request, callback){
	//如果请求完成，则它是成功的（响应完成之前也会触发事件，所以应该一直检验readyState值为4 DONE状态）
	if( 200 === request.status && 4 === request.readyState ){
		//检查类型
		var type = request.getResponseHeader("Content-Type");
		if(type.indexOf("xml") !== -1 && request.responseXML){
			callback(request.responseXML);//Document对象响应
		}
		else if(type === "application/json"){
			callback( JSON.parse(request.responseText) );//JSON响应
		}
		else{
			callback(request);//字符串响应
		}
	}else if(404 === request.status){ //检验URL是否出错
		alert("URL Error");
	}
}

/*
 * 创建CORS跨域异步请求对象，兼容IE8
 */
function createCORSRequest(method, url){
	var xhr = new XMLHttpRequest();
	if("withCredentials" in xhr){
		//检查XHLHttpRequest对象是否有"withCredentials"属性
		//"withCredentials"属性仅存在于XMLHttpReqeust2对象中
		xhr.open(method, url, true);
	}else if(typeof XDomainRequest !="undefined"){
		//否则，检查XDomainRequest
		//XDomainRequest仅存在IE中，且通过其发起CORS请求
		xhr = new XDomainRequest();
		xhr.open(method, url);
	}else{
		//否则，CORS不被该浏览器支持
		xhr = null;
	}
	return xhr;
}

/*
 * 发起CORS请求
 */
function makeCORSRequest(data, xhr, callback, callback_fail, callback_error){  
	// 响应处理.
	xhr.onload = function(){
		var response = xhr.responseText;
		//callback or callback_fail
	};

	xhr.onerror = function() {
		callback_error();
	};

	xhr.send(data);
}

/*
 * 原生实现对象扩张，简化自jquery.extend，只支持浅拷贝
 */
var _extend = function(){  
    var options, name, src, copy, copyIsArray, clone,  
        target = arguments[0] || {}, // 目标对象  
        i = 1,  
        length = arguments.length,  
        deep = false;  
    // 处理深度拷贝情况（第一个参数是boolean类型且为true）  
    if ( typeof target === "boolean" ) {  
        deep = target && false;  
        target = arguments[1] || {};  
        // 跳过第一个参数（是否深度拷贝）和第二个参数（目标对象）  
        i = 2;  
    }  
    // 如果目标不是对象或函数，则初始化为空对象  
    if ( typeof target !== "object" && typeof(target) != 'function' ) {  
        target = {};  
    }
    for ( ; i < length; i++ ) {  
        // Only deal with non-null/undefined values  
        if ( (options = arguments[ i ]) != null ) {  
            // Extend the base object  
            for ( name in options ) {  
                src = target[ name ];  
                copy = options[ name ];  
                // Prevent never-ending loop  
                if ( target === copy ) {  
                    continue;  
                }  
                // 如果对象中包含了数组或者其他对象，则使用递归进行拷贝  
                if ( deep ) {  
                    return false; 
                // 不拷贝undefined值  
                } else if ( copy !== undefined ) {  
                    target[ name ] = copy;  
                }  
            }  
        }
    }  
    // 返回已经被修改的对象  
    return target;  
};
