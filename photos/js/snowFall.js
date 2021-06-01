<link rel="stylesheet" class="aplayer-secondary-style-marker" href="/assets/css/APlayer.min.css"><script src="/assets/js/APlayer.min.js" class="aplayer-secondary-script-marker"></script>/*!
 * snowFall Jquery plugin
 * Date: 2016-02-02 15:04
 * fall snow effect based on jquery and three.js
 * author 此生唯晴 http://weibo.com/cishengweiqing/
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;
//容器
var container;
//雪花例子
var particle;
//摄像机
var camera;
//场景
var scene;
//渲染器
var renderer;

var mouseX = 0;
var mouseY = 0;
//粒子在垂直（Y轴）方向运动范围
var particleY_Range = 0;
//粒子在垂直（X轴）方向运动范围
var particleX_Range = 0;

//风力权重，正值向右，负值向左，0表示无风
var wind_weight = 0;

var windowHalfX = SCREEN_WIDTH / 2;
var windowHalfY = SCREEN_HEIGHT / 2;

var particles = []; 
//粒子图片

var js=document.scripts;
//获取相对当前js目录的雪花图片路径
var path=js[js.length-1].src.substring(0,js[js.length-1].src.lastIndexOf("/"));
var imageSrc=path.substring(0,path.lastIndexOf("/")+1)+"images/ParticleSmoke.png";

var particleImage = new Image();//THREE.ImageUtils.loadTexture( "img/ParticleSmoke.png" );
particleImage.src = imageSrc; 

function onDocumentMouseMove( event ) {

	mouseX = event.clientX - windowHalfX;
	mouseY = event.clientY - particleY_Range / 2;
}

function onDocumentTouchStart( event ) {

	if ( event.touches.length == 1 ) {

		event.preventDefault();

		mouseX = event.touches[ 0 ].pageX - windowHalfX;
		mouseY = event.touches[ 0 ].pageY - particleY_Range / 2;
	}
}

function onDocumentTouchMove( event ) {

	if ( event.touches.length == 1 ) {

		event.preventDefault();

		mouseX = event.touches[ 0 ].pageX - windowHalfX;
		mouseY = event.touches[ 0 ].pageY - particleY_Range / 2;
	}
}

//

function loop() {
	for(var i = 0; i<particles.length; i++) { var particle="particles[i];" particle.updatephysics(); with(particle.position) if(y<-particley_range 2) y+="particleY_Range;" z轴位置不变 if(x>windowHalfX) x-=SCREEN_WIDTH; 
			else if(x<-windowhalfx) x+="SCREEN_WIDTH;" 风力偏向效果 if(z>1000) z-=2000; 
//			else if(z</-windowhalfx)></particles.length;>