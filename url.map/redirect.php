<?php
$url = $_SERVER['PHP_SELF'];
$params = $_SERVER['QUERY_STRING'];

$baseUrl = "/Users/linxingjian/work/e/demos/nek-ui/json/";
$url = $_SERVER['PHP_SELF'];
$params = $_SERVER['QUERY_STRING'];

$map = './map.txt';
function getFile($map, $url){
	global $baseUrl;
	$fd = fopen($map, 'r');
	while(!feof($fd)){
		$line = fgets($fd);
		$preg = '/[ \t]+/';
		$line = preg_replace($preg, ' ', $line);
		$lineArray = explode(' ', $line);
		if(strcmp($lineArray[0], $url) == 0){
			$json = $lineArray[1];
			$jsonUrl = $baseUrl . $json;
			readfile($jsonUrl);
			exit;
		}
	}
}
getFile($map, $url);
?>