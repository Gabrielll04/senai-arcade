(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const _r="STARDUST RUNNER",cc=3e3,Vt={espacoFundo:131850,espacoMedio:395804,ciano:2287359,cianoMedio:2077910,magenta:16723847,dourado:16765503,violeta:10124287,nebulaB:5906283},Mi=[{largura:480,altura:270,rotulo:"ALTA"},{largura:320,altura:180,rotulo:"MEDIA"},{largura:256,altura:144,rotulo:"BAIXA"}],ah=1,Ls=[1,.7,.45],oh=150,Ss=2.2,Me=[-Ss,0,Ss],hc=.12,ge={fov:60,perto:.1,longe:220,altura:4.4,recuo:6.5,alvoAltura:.5,alvoFrente:-16},vr={perto:46,longe:138},$n=9,Fe={meiaLargura:.42,meiaProfundidade:.5,alturaEmPe:1.62,alturaDeslize:.72,gravidade:48,impulsoPulo:12.2,duracaoDeslize:.55,invulneravel:1.5,inclinacaoMax:.42},Ho=21,_o=45,lh=3200,ko=1.4,ch=.82,Wo=1,hh=1.5,Ze={porMetro:1,poeira:50,quaseAcidente:25,degrausCombo:[1,2,3,5,8],janelaCombo:3,margemQuaseAcidente:.62},xi={escudo:{duracao:0,rotulo:"BOLHA",cor:2287359,classe:"escudo"},ima:{duracao:6,rotulo:"IMA",cor:16765503,classe:"ima"},tempo:{duracao:4,rotulo:"DILATACAO",cor:10124287,classe:"tempo"},supernova:{duracao:6,rotulo:"SUPERNOVA",cor:16723847,classe:"supernova"}},uh=17,dh=260,Xo=9.5,fh=.55,_n={distMinima:520,intervaloMin:26,intervaloMax:48,puxaoMax:.46,alcance:46,lateral:15},ph=60,mh=30,qo=.6,Yo=11,Is={limiteAmarelo:45,tempoAmarelo:3,limiteVermelho:30,tempoVermelho:5},gh=["NeonFox","AstroByte","VoidRunner","PixelNova","OrbitaZero","LuaCrua","CometaX","Quasar","Nebulosa","FotonBR","GravidadeZ","SolarPunk","AnelDeGas","Meteorito","CianoWave","Estelar"];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vo="170",_h=0,jo=1,vh=2,uc=1,xh=2,Un=3,ri=0,We=1,un=2,ei=0,Zi=1,ce=2,Zo=3,Ko=4,Mh=5,_i=100,Sh=101,yh=102,Eh=103,Ah=104,Th=200,bh=201,wh=202,Rh=203,ga=204,_a=205,Ch=206,Ph=207,Dh=208,Lh=209,Ih=210,Uh=211,Nh=212,Oh=213,Fh=214,va=0,xa=1,Ma=2,Ji=3,Sa=4,ya=5,Ea=6,Aa=7,xo=0,zh=1,Bh=2,ni=0,Vh=1,Gh=2,Hh=3,kh=4,Wh=5,Xh=6,qh=7,dc=300,Qi=301,ts=302,Ta=303,ba=304,Ar=306,Es=1e3,Nn=1001,wa=1002,Xe=1003,Yh=1004,Us=1005,dn=1006,Ur=1007,ti=1008,Bn=1009,fc=1010,pc=1011,As=1012,Mo=1013,Si=1014,xn=1015,Rs=1016,So=1017,yo=1018,es=1020,mc=35902,gc=1021,_c=1022,fn=1023,vc=1024,xc=1025,Ki=1026,ns=1027,Eo=1028,Ao=1029,Mc=1030,To=1031,bo=1033,ur=33776,dr=33777,fr=33778,pr=33779,Ra=35840,Ca=35841,Pa=35842,Da=35843,La=36196,Ia=37492,Ua=37496,Na=37808,Oa=37809,Fa=37810,za=37811,Ba=37812,Va=37813,Ga=37814,Ha=37815,ka=37816,Wa=37817,Xa=37818,qa=37819,Ya=37820,ja=37821,mr=36492,Za=36494,Ka=36495,Sc=36283,$a=36284,Ja=36285,Qa=36286,jh=3200,Zh=3201,yc=0,Kh=1,Jn="",Ve="srgb",ss="srgb-linear",Tr="linear",Jt="srgb",wi=7680,$o=519,$h=512,Jh=513,Qh=514,Ec=515,tu=516,eu=517,nu=518,iu=519,to=35044,eo=35048,Jo="300 es",On=2e3,xr=2001;class rs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nr=Math.PI/180,no=180/Math.PI;function ii(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Ge(i,t,e){return Math.max(t,Math.min(e,i))}function su(i,t){return(i%t+t)%t}function Or(i,t,e){return(1-e)*i+e*t}function vn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(t=0,e=0){Pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,s,r,a,o,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],E=s[1],A=s[4],S=s[7],N=s[2],w=s[5],b=s[8];return r[0]=a*_+o*E+l*N,r[3]=a*m+o*A+l*w,r[6]=a*d+o*S+l*b,r[1]=c*_+h*E+u*N,r[4]=c*m+h*A+u*w,r[7]=c*d+h*S+u*b,r[2]=f*_+p*E+g*N,r[5]=f*m+p*A+g*w,r[8]=f*d+p*S+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Fr.makeScale(t,e)),this}rotate(t){return this.premultiply(Fr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fr=new It;function Ac(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ru(){const i=Mr("canvas");return i.style.display="block",i}const Qo={};function xs(i){i in Qo||(Qo[i]=!0,console.warn(i))}function au(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ou(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function lu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Jt&&(i.r=Fn(i.r),i.g=Fn(i.g),i.b=Fn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Jt&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Jn?Tr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const tl=[.64,.33,.3,.6,.15,.06],el=[.2126,.7152,.0722],nl=[.3127,.329],il=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sl=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[ss]:{primaries:tl,whitePoint:nl,transfer:Tr,toXYZ:il,fromXYZ:sl,luminanceCoefficients:el,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:tl,whitePoint:nl,transfer:Jt,toXYZ:il,fromXYZ:sl,luminanceCoefficients:el,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}});let Ri;class cu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ri===void 0&&(Ri=Mr("canvas")),Ri.width=t.width,Ri.height=t.height;const n=Ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=Mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fn(e[n]/255)*255):e[n]=Fn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hu=0;class Tc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=ii(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(zr(s[a].image)):r.push(zr(s[a]))}else r=zr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function zr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?cu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uu=0;class Ie extends rs{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=Nn,s=Nn,r=dn,a=ti,o=fn,l=Bn,c=Ie.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=ii(),this.name="",this.source=new Tc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Es:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Es:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=dc;Ie.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,S=(p+1)/2,N=(d+1)/2,w=(h+f)/4,b=(u+_)/4,C=(g+m)/4;return A>S&&A>N?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=w/n,r=b/n):S>N?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=C/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=b/r,s=C/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class du extends rs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ie(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Tc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends du{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class bc extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fu extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=1-o;const d=l*f+c*p+h*g+u*_,E=d>=0?1:-1,A=1-d*d;if(A>Number.EPSILON){const N=Math.sqrt(A),w=Math.atan2(N,d*E);m=Math.sin(m*w)/N,o=Math.sin(o*w)/N}const S=o*E;if(l=l*m+f*S,c=c*m+p*S,h=h*m+g*S,u=u*m+_*S,m===1-o){const N=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=N,c*=N,h*=N,u*=N}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-o*p,t[e+2]=c*g+h*p+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Br.copy(this).projectOnVector(t),this.sub(Br)}reflect(t){return this.sub(Br.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Br=new I,rl=new Cs;class Ai{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ns.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(t.matrixWorld),this.union(Ns)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cs),Os.subVectors(this.max,cs),Ci.subVectors(t.a,cs),Pi.subVectors(t.b,cs),Di.subVectors(t.c,cs),kn.subVectors(Pi,Ci),Wn.subVectors(Di,Pi),oi.subVectors(Ci,Di);let e=[0,-kn.z,kn.y,0,-Wn.z,Wn.y,0,-oi.z,oi.y,kn.z,0,-kn.x,Wn.z,0,-Wn.x,oi.z,0,-oi.x,-kn.y,kn.x,0,-Wn.y,Wn.x,0,-oi.y,oi.x,0];return!Vr(e,Ci,Pi,Di,Os)||(e=[1,0,0,0,1,0,0,0,1],!Vr(e,Ci,Pi,Di,Os))?!1:(Fs.crossVectors(kn,Wn),e=[Fs.x,Fs.y,Fs.z],Vr(e,Ci,Pi,Di,Os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Cn=[new I,new I,new I,new I,new I,new I,new I,new I],rn=new I,Ns=new Ai,Ci=new I,Pi=new I,Di=new I,kn=new I,Wn=new I,oi=new I,cs=new I,Os=new I,Fs=new I,li=new I;function Vr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){li.fromArray(i,r);const o=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),l=t.dot(li),c=e.dot(li),h=n.dot(li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const pu=new Ai,hs=new I,Gr=new I;class En{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):pu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hs.subVectors(t,this.center);const e=hs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hs.copy(t.center).add(Gr)),this.expandByPoint(hs.copy(t.center).sub(Gr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new I,Hr=new I,zs=new I,Xn=new I,kr=new I,Bs=new I,Wr=new I;class wc{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Hr.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(Hr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(zs),o=Xn.dot(this.direction),l=-Xn.dot(zs),c=Xn.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Hr).addScaledVector(zs,f),p}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);const n=Pn.dot(this.direction),s=Pn.dot(Pn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,s,r){kr.subVectors(e,t),Bs.subVectors(n,t),Wr.crossVectors(kr,Bs);let a=this.direction.dot(Wr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,t);const l=o*this.direction.dot(Bs.crossVectors(Xn,Bs));if(l<0)return null;const c=o*this.direction.dot(kr.cross(Xn));if(c<0||l+c>a)return null;const h=-o*Xn.dot(Wr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,s,r,a,o,l,c,h,u,f,p,g,_,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Li.setFromMatrixColumn(t,0).length(),r=1/Li.setFromMatrixColumn(t,1).length(),a=1/Li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mu,t,gu)}lookAt(t,e,n){const s=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),qn.crossVectors(n,Ye),qn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),qn.crossVectors(n,Ye)),qn.normalize(),Vs.crossVectors(Ye,qn),s[0]=qn.x,s[4]=Vs.x,s[8]=Ye.x,s[1]=qn.y,s[5]=Vs.y,s[9]=Ye.y,s[2]=qn.z,s[6]=Vs.z,s[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],E=n[3],A=n[7],S=n[11],N=n[15],w=s[0],b=s[4],C=s[8],y=s[12],x=s[1],R=s[5],V=s[9],B=s[13],W=s[2],Z=s[6],k=s[10],$=s[14],H=s[3],st=s[7],ht=s[11],Mt=s[15];return r[0]=a*w+o*x+l*W+c*H,r[4]=a*b+o*R+l*Z+c*st,r[8]=a*C+o*V+l*k+c*ht,r[12]=a*y+o*B+l*$+c*Mt,r[1]=h*w+u*x+f*W+p*H,r[5]=h*b+u*R+f*Z+p*st,r[9]=h*C+u*V+f*k+p*ht,r[13]=h*y+u*B+f*$+p*Mt,r[2]=g*w+_*x+m*W+d*H,r[6]=g*b+_*R+m*Z+d*st,r[10]=g*C+_*V+m*k+d*ht,r[14]=g*y+_*B+m*$+d*Mt,r[3]=E*w+A*x+S*W+N*H,r[7]=E*b+A*R+S*Z+N*st,r[11]=E*C+A*V+S*k+N*ht,r[15]=E*y+A*B+S*$+N*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+_*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],E=u*m*c-_*f*c+_*l*p-o*m*p-u*l*d+o*f*d,A=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,S=h*_*c-g*u*c+g*o*p-a*_*p-h*o*d+a*u*d,N=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,w=e*E+n*A+s*S+r*N;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=E*b,t[1]=(_*f*r-u*m*r-_*s*p+n*m*p+u*s*d-n*f*d)*b,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*d+n*l*d)*b,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*b,t[4]=A*b,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*b,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*d-e*l*d)*b,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*b,t[8]=S*b,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*d-e*u*d)*b,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*d+e*o*d)*b,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*b,t[12]=N*b,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*b,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*b,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,_=a*h,m=a*u,d=o*u,E=l*c,A=l*h,S=l*u,N=n.x,w=n.y,b=n.z;return s[0]=(1-(_+d))*N,s[1]=(p+S)*N,s[2]=(g-A)*N,s[3]=0,s[4]=(p-S)*w,s[5]=(1-(f+d))*w,s[6]=(m+E)*w,s[7]=0,s[8]=(g+A)*b,s[9]=(m-E)*b,s[10]=(1-(f+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Li.set(s[0],s[1],s[2]).length();const a=Li.set(s[4],s[5],s[6]).length(),o=Li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],an.copy(this);const c=1/r,h=1/a,u=1/o;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,e.setFromRotationMatrix(an),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=On){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(o===On)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===xr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=On){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,p=(n+s)*h;let g,_;if(o===On)g=(a+r)*u,_=-2*u;else if(o===xr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Li=new I,an=new ee,mu=new I(0,0,0),gu=new I(1,1,1),qn=new I,Vs=new I,Ye=new I,al=new ee,ol=new Cs;class yn{constructor(t=0,e=0,n=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(al,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ol.setFromEuler(this),this.setFromQuaternion(ol,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Rc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _u=0;const ll=new I,Ii=new Cs,Dn=new ee,Gs=new I,us=new I,vu=new I,xu=new Cs,cl=new I(1,0,0),hl=new I(0,1,0),ul=new I(0,0,1),dl={type:"added"},Mu={type:"removed"},Ui={type:"childadded",child:null},Xr={type:"childremoved",child:null};class xe extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new I,e=new yn,n=new Cs,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new It}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(cl,t)}rotateY(t){return this.rotateOnAxis(hl,t)}rotateZ(t){return this.rotateOnAxis(ul,t)}translateOnAxis(t,e){return ll.copy(t).applyQuaternion(this.quaternion),this.position.add(ll.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cl,t)}translateY(t){return this.translateOnAxis(hl,t)}translateZ(t){return this.translateOnAxis(ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gs.copy(t):Gs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(us,Gs,this.up):Dn.lookAt(Gs,us,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dl),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mu),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dl),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,vu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,xu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}xe.DEFAULT_UP=new I(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new I,Ln=new I,qr=new I,In=new I,Ni=new I,Oi=new I,fl=new I,Yr=new I,jr=new I,Zr=new I,Kr=new fe,$r=new fe,Jr=new fe;class en{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),Ln.subVectors(n,e),qr.subVectors(t,e);const a=on.dot(on),o=on.dot(Ln),l=on.dot(qr),c=Ln.dot(Ln),h=Ln.dot(qr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Kr.setScalar(0),$r.setScalar(0),Jr.setScalar(0),Kr.fromBufferAttribute(t,e),$r.fromBufferAttribute(t,n),Jr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Kr,r.x),a.addScaledVector($r,r.y),a.addScaledVector(Jr,r.z),a}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),Ln.subVectors(t,e),on.cross(Ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),on.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return en.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return en.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ni.subVectors(s,n),Oi.subVectors(r,n),Yr.subVectors(t,n);const l=Ni.dot(Yr),c=Oi.dot(Yr);if(l<=0&&c<=0)return e.copy(n);jr.subVectors(t,s);const h=Ni.dot(jr),u=Oi.dot(jr);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ni,a);Zr.subVectors(t,r);const p=Ni.dot(Zr),g=Oi.dot(Zr);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Oi,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return fl.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(fl,o);const d=1/(m+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(Ni,a).addScaledVector(Oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function Qr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=su(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Qr(a,r,t+1/3),this.g=Qr(a,r,t),this.b=Qr(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=Cc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return Yt.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Ge(Pe.r*255,0,255))*65536+Math.round(Ge(Pe.g*255,0,255))*256+Math.round(Ge(Pe.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Pe.copy(this),e);const n=Pe.r,s=Pe.g,r=Pe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Ve){Yt.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,s=Pe.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(Hs);const n=Or(Yn.h,Hs.h,e),s=Or(Yn.s,Hs.s,e),r=Or(Yn.l,Hs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Ut;Ut.NAMES=Cc;let Su=0;class Ti extends rs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=ii(),this.name="",this.blending=Zi,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=_a,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$o,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ga&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$o&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class de extends Ti{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new I,ks=new Pt;class Se{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=to,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ks.fromBufferAttribute(this,e),ks.applyMatrix3(t),this.setXY(e,ks.x,ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==to&&(t.usage=this.usage),t}}class Pc extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Dc extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pe extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yu=0;const Je=new ee,ta=new xe,Fi=new I,je=new Ai,ds=new Ai,Ae=new I;class we extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ac(t)?Dc:Pc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return ta.lookAt(t),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(je.min,ds.min),je.expandByPoint(Ae),Ae.addVectors(je.max,ds.max),je.expandByPoint(Ae)):(je.expandByPoint(ds.min),je.expandByPoint(ds.max))}je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ae.fromBufferAttribute(o,c),l&&(Fi.fromBufferAttribute(t,c),Ae.add(Fi)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new I,l[C]=new I;const c=new I,h=new I,u=new I,f=new Pt,p=new Pt,g=new Pt,_=new I,m=new I;function d(C,y,x){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),o[C].add(_),o[y].add(_),o[x].add(_),l[C].add(m),l[y].add(m),l[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let C=0,y=E.length;C<y;++C){const x=E[C],R=x.start,V=x.count;for(let B=R,W=R+V;B<W;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const A=new I,S=new I,N=new I,w=new I;function b(C){N.fromBufferAttribute(s,C),w.copy(N);const y=o[C];A.copy(y),A.sub(N.multiplyScalar(N.dot(y))).normalize(),S.crossVectors(w,y);const R=S.dot(l[C])<0?-1:1;a.setXYZW(C,A.x,A.y,A.z,R)}for(let C=0,y=E.length;C<y;++C){const x=E[C],R=x.start,V=x.count;for(let B=R,W=R+V;B<W;B+=3)b(t.getX(B+0)),b(t.getX(B+1)),b(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Se(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pl=new ee,ci=new wc,Ws=new En,ml=new I,Xs=new I,qs=new I,Ys=new I,ea=new I,js=new I,gl=new I,Zs=new I;class Gt extends xe{constructor(t=new we,e=new de){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ea.fromBufferAttribute(u,t),a?js.addScaledVector(ea,h):js.addScaledVector(ea.sub(e),h))}e.add(js)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(Ws.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Ws,ml)===null||ci.origin.distanceToSquared(ml)>(t.far-t.near)**2))&&(pl.copy(r).invert(),ci.copy(t.ray).applyMatrix4(pl),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],E=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,N=A;S<N;S+=3){const w=o.getX(S),b=o.getX(S+1),C=o.getX(S+2);s=Ks(this,d,t,n,c,h,u,w,b,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const E=o.getX(m),A=o.getX(m+1),S=o.getX(m+2);s=Ks(this,a,t,n,c,h,u,E,A,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],E=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,N=A;S<N;S+=3){const w=S,b=S+1,C=S+2;s=Ks(this,d,t,n,c,h,u,w,b,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const E=m,A=m+1,S=m+2;s=Ks(this,a,t,n,c,h,u,E,A,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Eu(i,t,e,n,s,r,a,o){let l;if(t.side===We?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ri,o),l===null)return null;Zs.copy(o),Zs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Zs);return c<e.near||c>e.far?null:{distance:c,point:Zs.clone(),object:i}}function Ks(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Xs),i.getVertexPosition(l,qs),i.getVertexPosition(c,Ys);const h=Eu(i,t,e,n,Xs,qs,Ys,gl);if(h){const u=new I;en.getBarycoord(gl,Xs,qs,Ys,u),s&&(h.uv=en.getInterpolatedAttribute(s,o,l,c,u,new Pt)),r&&(h.uv1=en.getInterpolatedAttribute(r,o,l,c,u,new Pt)),a&&(h.normal=en.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};en.getNormal(Xs,qs,Ys,f.normal),h.face=f,h.barycoord=u}return h}class ze extends we{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function g(_,m,d,E,A,S,N,w,b,C,y){const x=S/b,R=N/C,V=S/2,B=N/2,W=w/2,Z=b+1,k=C+1;let $=0,H=0;const st=new I;for(let ht=0;ht<k;ht++){const Mt=ht*R-B;for(let Ft=0;Ft<Z;Ft++){const te=Ft*x-V;st[_]=te*E,st[m]=Mt*A,st[d]=W,c.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[d]=w>0?1:-1,h.push(st.x,st.y,st.z),u.push(Ft/b),u.push(1-ht/C),$+=1}}for(let ht=0;ht<C;ht++)for(let Mt=0;Mt<b;Mt++){const Ft=f+Mt+Z*ht,te=f+Mt+Z*(ht+1),q=f+(Mt+1)+Z*(ht+1),tt=f+(Mt+1)+Z*ht;l.push(Ft,te,tt),l.push(te,q,tt),H+=6}o.addGroup(p,H,y),p+=H,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ze(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function is(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=is(i[e]);for(const s in n)t[s]=n[s]}return t}function Au(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Tu={clone:is,merge:Oe};var bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Ti{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bu,this.fragmentShader=wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=Au(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ic extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new I,_l=new Pt,vl=new Pt;class Qe extends Ic{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=no*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return no*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,_l,vl),e.subVectors(vl,_l)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zi=-90,Bi=1;class Ru extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(zi,Bi,t,e);s.layers=this.layers,this.add(s);const r=new Qe(zi,Bi,t,e);r.layers=this.layers,this.add(r);const a=new Qe(zi,Bi,t,e);a.layers=this.layers,this.add(a);const o=new Qe(zi,Bi,t,e);o.layers=this.layers,this.add(o);const l=new Qe(zi,Bi,t,e);l.layers=this.layers,this.add(l);const c=new Qe(zi,Bi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Uc extends Ie{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cu extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Uc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ze(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:ei});r.uniforms.tEquirect.value=e;const a=new Gt(s,r),o=e.minFilter;return e.minFilter===ti&&(e.minFilter=dn),new Ru(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const na=new I,Pu=new I,Du=new It;class pi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=na.subVectors(n,e).cross(Pu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(na),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Du.getNormalMatrix(t),s=this.coplanarPoint(na).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new En,$s=new I;class wo{constructor(t=new pi,e=new pi,n=new pi,s=new pi,r=new pi,a=new pi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],E=s[13],A=s[14],S=s[15];if(n[0].setComponents(l-r,f-c,m-p,S-d).normalize(),n[1].setComponents(l+r,f+c,m+p,S+d).normalize(),n[2].setComponents(l+a,f+h,m+g,S+E).normalize(),n[3].setComponents(l-a,f-h,m-g,S-E).normalize(),n[4].setComponents(l-o,f-u,m-_,S-A).normalize(),e===On)n[5].setComponents(l+o,f+u,m+_,S+A).normalize();else if(e===xr)n[5].setComponents(o,u,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if($s.x=s.normal.x>0?t.max.x:t.min.x,$s.y=s.normal.y>0?t.max.y:t.min.y,$s.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Lu(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class zn extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const E=d*f-a;for(let A=0;A<c;A++){const S=A*u-r;g.push(S,-E,0),_.push(0,0,1),m.push(A/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){const A=E+c*d,S=E+c*(d+1),N=E+1+c*(d+1),w=E+1+c*d;p.push(A,S,w),p.push(S,N,w)}this.setIndex(p),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Iu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ou=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,id=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ad=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,od=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",hd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_d=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Md=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ad=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Td=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ld=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Id=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Od=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$d=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ef=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,of=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ff=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_f=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Af=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const If=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ep=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,np=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ap=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,up=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:Iu,alphahash_pars_fragment:Uu,alphamap_fragment:Nu,alphamap_pars_fragment:Ou,alphatest_fragment:Fu,alphatest_pars_fragment:zu,aomap_fragment:Bu,aomap_pars_fragment:Vu,batching_pars_vertex:Gu,batching_vertex:Hu,begin_vertex:ku,beginnormal_vertex:Wu,bsdfs:Xu,iridescence_fragment:qu,bumpmap_pars_fragment:Yu,clipping_planes_fragment:ju,clipping_planes_pars_fragment:Zu,clipping_planes_pars_vertex:Ku,clipping_planes_vertex:$u,color_fragment:Ju,color_pars_fragment:Qu,color_pars_vertex:td,color_vertex:ed,common:nd,cube_uv_reflection_fragment:id,defaultnormal_vertex:sd,displacementmap_pars_vertex:rd,displacementmap_vertex:ad,emissivemap_fragment:od,emissivemap_pars_fragment:ld,colorspace_fragment:cd,colorspace_pars_fragment:hd,envmap_fragment:ud,envmap_common_pars_fragment:dd,envmap_pars_fragment:fd,envmap_pars_vertex:pd,envmap_physical_pars_fragment:Td,envmap_vertex:md,fog_vertex:gd,fog_pars_vertex:_d,fog_fragment:vd,fog_pars_fragment:xd,gradientmap_pars_fragment:Md,lightmap_pars_fragment:Sd,lights_lambert_fragment:yd,lights_lambert_pars_fragment:Ed,lights_pars_begin:Ad,lights_toon_fragment:bd,lights_toon_pars_fragment:wd,lights_phong_fragment:Rd,lights_phong_pars_fragment:Cd,lights_physical_fragment:Pd,lights_physical_pars_fragment:Dd,lights_fragment_begin:Ld,lights_fragment_maps:Id,lights_fragment_end:Ud,logdepthbuf_fragment:Nd,logdepthbuf_pars_fragment:Od,logdepthbuf_pars_vertex:Fd,logdepthbuf_vertex:zd,map_fragment:Bd,map_pars_fragment:Vd,map_particle_fragment:Gd,map_particle_pars_fragment:Hd,metalnessmap_fragment:kd,metalnessmap_pars_fragment:Wd,morphinstance_vertex:Xd,morphcolor_vertex:qd,morphnormal_vertex:Yd,morphtarget_pars_vertex:jd,morphtarget_vertex:Zd,normal_fragment_begin:Kd,normal_fragment_maps:$d,normal_pars_fragment:Jd,normal_pars_vertex:Qd,normal_vertex:tf,normalmap_pars_fragment:ef,clearcoat_normal_fragment_begin:nf,clearcoat_normal_fragment_maps:sf,clearcoat_pars_fragment:rf,iridescence_pars_fragment:af,opaque_fragment:of,packing:lf,premultiplied_alpha_fragment:cf,project_vertex:hf,dithering_fragment:uf,dithering_pars_fragment:df,roughnessmap_fragment:ff,roughnessmap_pars_fragment:pf,shadowmap_pars_fragment:mf,shadowmap_pars_vertex:gf,shadowmap_vertex:_f,shadowmask_pars_fragment:vf,skinbase_vertex:xf,skinning_pars_vertex:Mf,skinning_vertex:Sf,skinnormal_vertex:yf,specularmap_fragment:Ef,specularmap_pars_fragment:Af,tonemapping_fragment:Tf,tonemapping_pars_fragment:bf,transmission_fragment:wf,transmission_pars_fragment:Rf,uv_pars_fragment:Cf,uv_pars_vertex:Pf,uv_vertex:Df,worldpos_vertex:Lf,background_vert:If,background_frag:Uf,backgroundCube_vert:Nf,backgroundCube_frag:Of,cube_vert:Ff,cube_frag:zf,depth_vert:Bf,depth_frag:Vf,distanceRGBA_vert:Gf,distanceRGBA_frag:Hf,equirect_vert:kf,equirect_frag:Wf,linedashed_vert:Xf,linedashed_frag:qf,meshbasic_vert:Yf,meshbasic_frag:jf,meshlambert_vert:Zf,meshlambert_frag:Kf,meshmatcap_vert:$f,meshmatcap_frag:Jf,meshnormal_vert:Qf,meshnormal_frag:tp,meshphong_vert:ep,meshphong_frag:np,meshphysical_vert:ip,meshphysical_frag:sp,meshtoon_vert:rp,meshtoon_frag:ap,points_vert:op,points_frag:lp,shadow_vert:cp,shadow_frag:hp,sprite_vert:up,sprite_frag:dp},et={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},gn={basic:{uniforms:Oe([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Oe([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Oe([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Oe([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Oe([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Oe([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Oe([et.points,et.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Oe([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Oe([et.common,et.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Oe([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Oe([et.sprite,et.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Oe([et.common,et.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Oe([et.lights,et.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};gn.physical={uniforms:Oe([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Js={r:0,b:0,g:0},ui=new yn,fp=new ee;function pp(i,t,e,n,s,r,a){const o=new Ut(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(E){let A=E.isScene===!0?E.background:null;return A&&A.isTexture&&(A=(E.backgroundBlurriness>0?e:t).get(A)),A}function _(E){let A=!1;const S=g(E);S===null?d(o,l):S&&S.isColor&&(d(S,1),A=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,A){const S=g(A);S&&(S.isCubeTexture||S.mapping===Ar)?(h===void 0&&(h=new Gt(new ze(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:is(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ui.copy(A.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fp.makeRotationFromEuler(ui)),h.material.toneMapped=Yt.getTransfer(S.colorSpace)!==Jt,(u!==S||f!==S.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Gt(new zn(2,2),new Vn({name:"BackgroundMaterial",uniforms:is(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(S.colorSpace)!==Jt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,A){E.getRGB(Js,Lc(i)),n.buffers.color.setClear(Js.r,Js.g,Js.b,A,a)}return{getClearColor:function(){return o},setClearColor:function(E,A=1){o.set(E),l=A,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(o,l)},render:_,addToRenderList:m}}function mp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(x,R,V,B,W){let Z=!1;const k=u(B,V,R);r!==k&&(r=k,c(r.object)),Z=p(x,B,V,W),Z&&g(x,B,V,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(x,R,V,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,R,V){const B=V.wireframe===!0;let W=n[x.id];W===void 0&&(W={},n[x.id]=W);let Z=W[R.id];Z===void 0&&(Z={},W[R.id]=Z);let k=Z[B];return k===void 0&&(k=f(l()),Z[B]=k),k}function f(x){const R=[],V=[],B=[];for(let W=0;W<e;W++)R[W]=0,V[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:V,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,R,V,B){const W=r.attributes,Z=R.attributes;let k=0;const $=V.getAttributes();for(const H in $)if($[H].location>=0){const ht=W[H];let Mt=Z[H];if(Mt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(Mt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(Mt=x.instanceColor)),ht===void 0||ht.attribute!==Mt||Mt&&ht.data!==Mt.data)return!0;k++}return r.attributesNum!==k||r.index!==B}function g(x,R,V,B){const W={},Z=R.attributes;let k=0;const $=V.getAttributes();for(const H in $)if($[H].location>=0){let ht=Z[H];ht===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor));const Mt={};Mt.attribute=ht,ht&&ht.data&&(Mt.data=ht.data),W[H]=Mt,k++}r.attributes=W,r.attributesNum=k,r.index=B}function _(){const x=r.newAttributes;for(let R=0,V=x.length;R<V;R++)x[R]=0}function m(x){d(x,0)}function d(x,R){const V=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;V[x]=1,B[x]===0&&(i.enableVertexAttribArray(x),B[x]=1),W[x]!==R&&(i.vertexAttribDivisor(x,R),W[x]=R)}function E(){const x=r.newAttributes,R=r.enabledAttributes;for(let V=0,B=R.length;V<B;V++)R[V]!==x[V]&&(i.disableVertexAttribArray(V),R[V]=0)}function A(x,R,V,B,W,Z,k){k===!0?i.vertexAttribIPointer(x,R,V,W,Z):i.vertexAttribPointer(x,R,V,B,W,Z)}function S(x,R,V,B){_();const W=B.attributes,Z=V.getAttributes(),k=R.defaultAttributeValues;for(const $ in Z){const H=Z[$];if(H.location>=0){let st=W[$];if(st===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(st=x.instanceColor)),st!==void 0){const ht=st.normalized,Mt=st.itemSize,Ft=t.get(st);if(Ft===void 0)continue;const te=Ft.buffer,q=Ft.type,tt=Ft.bytesPerElement,_t=q===i.INT||q===i.UNSIGNED_INT||st.gpuType===Mo;if(st.isInterleavedBufferAttribute){const rt=st.data,bt=rt.stride,Ct=st.offset;if(rt.isInstancedInterleavedBuffer){for(let zt=0;zt<H.locationSize;zt++)d(H.location+zt,rt.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let zt=0;zt<H.locationSize;zt++)m(H.location+zt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let zt=0;zt<H.locationSize;zt++)A(H.location+zt,Mt/H.locationSize,q,ht,bt*tt,(Ct+Mt/H.locationSize*zt)*tt,_t)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<H.locationSize;rt++)d(H.location+rt,st.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<H.locationSize;rt++)m(H.location+rt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let rt=0;rt<H.locationSize;rt++)A(H.location+rt,Mt/H.locationSize,q,ht,Mt*tt,Mt/H.locationSize*rt*tt,_t)}}else if(k!==void 0){const ht=k[$];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(H.location,ht);break;case 3:i.vertexAttrib3fv(H.location,ht);break;case 4:i.vertexAttrib4fv(H.location,ht);break;default:i.vertexAttrib1fv(H.location,ht)}}}}E()}function N(){C();for(const x in n){const R=n[x];for(const V in R){const B=R[V];for(const W in B)h(B[W].object),delete B[W];delete R[V]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const V in R){const B=R[V];for(const W in B)h(B[W].object),delete B[W];delete R[V]}delete n[x.id]}function b(x){for(const R in n){const V=n[R];if(V[x.id]===void 0)continue;const B=V[x.id];for(const W in B)h(B[W].object),delete B[W];delete V[x.id]}}function C(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:y,dispose:N,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function gp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function _p(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==fn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const C=b===Rs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Bn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==xn&&!C)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:S,vertexTextures:N,maxSamples:w}}function vp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new pi,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,A=E*4;let S=d.clippingState||null;l.value=S,S=h(g,f,A,p);for(let N=0;N!==A;++N)S[N]=e[N];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,S=p;A!==_;++A,S+=4)a.copy(u[A]).applyMatrix4(E,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function xp(i){let t=new WeakMap;function e(a,o){return o===Ta?a.mapping=Qi:o===ba&&(a.mapping=ts),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ta||o===ba)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Cu(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Oc extends Ic{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Yi=4,xl=[.125,.215,.35,.446,.526,.582],vi=20,ia=new Oc,Ml=new Ut;let sa=null,ra=0,aa=0,oa=!1;const mi=(1+Math.sqrt(5))/2,Vi=1/mi,Sl=[new I(-mi,Vi,0),new I(mi,Vi,0),new I(-Vi,0,mi),new I(Vi,0,mi),new I(0,mi,-Vi),new I(0,mi,Vi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class yl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sa,ra,aa),this._renderer.xr.enabled=oa,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Rs,format:fn,colorSpace:ss,depthBuffer:!1},s=El(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=El(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mp(r)),this._blurMaterial=Sp(r,t,e)}return s}_compileMaterial(t){const e=new Gt(this._lodPlanes[0],t);this._renderer.compile(e,ia)}_sceneToCubeUV(t,e,n,s){const o=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ml),h.toneMapping=ni,h.autoClear=!1;const p=new de({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new Gt(new ze,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Ml),_=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):E===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const A=this._cubeSize;Qs(s,E*A,d>2?A:0,A,A),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Qi||t.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Al());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Gt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ia)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Sl[(s-r-1)%Sl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Gt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*vi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):vi;m>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const d=[];let E=0;for(let b=0;b<vi;++b){const C=b/_,y=Math.exp(-C*C/2);d.push(y),b===0?E+=y:b<m&&(E+=2*y)}for(let b=0;b<d.length;b++)d[b]=d[b]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:A}=this;f.dTheta.value=g,f.mipInt.value=A-n;const S=this._sizeLods[s],N=3*S*(s>A-Yi?s-A+Yi:0),w=4*(this._cubeSize-S);Qs(e,N,w,3*S,2*S),l.setRenderTarget(e),l.render(u,ia)}}function Mp(i){const t=[],e=[],n=[];let s=i;const r=i-Yi+1+xl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Yi?l=xl[a-i+Yi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,E=new Float32Array(_*g*p),A=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,C=w>2?0:-1,y=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];E.set(y,_*g*w),A.set(f,m*g*w);const x=[w,w,w,w,w,w];S.set(x,d*g*w)}const N=new we;N.setAttribute("position",new Se(E,_)),N.setAttribute("uv",new Se(A,m)),N.setAttribute("faceIndex",new Se(S,d)),t.push(N),s>Yi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function El(i,t,e){const n=new yi(i,t,e);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Sp(i,t,e){const n=new Float32Array(vi),s=new I(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Al(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Tl(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Ro(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ta||l===ba,h=l===Qi||l===ts;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new yl(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new yl(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ep(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&xs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ap(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let A=0,S=E.length;A<S;A+=3){const N=E[A+0],w=E[A+1],b=E[A+2];f.push(N,w,w,b,b,N)}}else if(g!==void 0){const E=g.array;_=g.version;for(let A=0,S=E.length/3-1;A<S;A+=3){const N=A+0,w=A+1,b=A+2;f.push(N,w,w,b,b,N)}}else return;const m=new(Ac(f)?Dc:Pc)(f,1);m.version=_;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Tp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*_[E];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function bp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function wp(i,t,e){const n=new WeakMap,s=new fe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let x=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let N=o.attributes.position.count*S,w=1;N>t.maxTextureSize&&(w=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const b=new Float32Array(N*w*4*u),C=new bc(b,N,w,u);C.type=xn,C.needsUpdate=!0;const y=S*4;for(let R=0;R<u;R++){const V=d[R],B=E[R],W=A[R],Z=N*w*4*R;for(let k=0;k<V.count;k++){const $=k*y;g===!0&&(s.fromBufferAttribute(V,k),b[Z+$+0]=s.x,b[Z+$+1]=s.y,b[Z+$+2]=s.z,b[Z+$+3]=0),_===!0&&(s.fromBufferAttribute(B,k),b[Z+$+4]=s.x,b[Z+$+5]=s.y,b[Z+$+6]=s.z,b[Z+$+7]=0),m===!0&&(s.fromBufferAttribute(W,k),b[Z+$+8]=s.x,b[Z+$+9]=s.y,b[Z+$+10]=s.z,b[Z+$+11]=W.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new Pt(N,w)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Rp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Fc extends Ie{constructor(t,e,n,s,r,a,o,l,c,h=Ki){if(h!==Ki&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ki&&(n=Si),n===void 0&&h===ns&&(n=es),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const zc=new Ie,bl=new Fc(1,1),Bc=new bc,Vc=new fu,Gc=new Uc,wl=[],Rl=[],Cl=new Float32Array(16),Pl=new Float32Array(9),Dl=new Float32Array(4);function as(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=wl[s];if(r===void 0&&(r=new Float32Array(s),wl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function br(i,t){let e=Rl[t];e===void 0&&(e=new Int32Array(t),Rl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Cp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function Dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function Lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function Ip(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;Dl.set(n),i.uniformMatrix2fv(this.addr,!1,Dl),Ee(e,n)}}function Up(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;Pl.set(n),i.uniformMatrix3fv(this.addr,!1,Pl),Ee(e,n)}}function Np(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;Cl.set(n),i.uniformMatrix4fv(this.addr,!1,Cl),Ee(e,n)}}function Op(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function Bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function Vp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function Hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function Wp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bl.compareFunction=Ec,r=bl):r=zc,e.setTexture2D(t||r,s)}function Xp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vc,s)}function qp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gc,s)}function Yp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bc,s)}function jp(i){switch(i){case 5126:return Cp;case 35664:return Pp;case 35665:return Dp;case 35666:return Lp;case 35674:return Ip;case 35675:return Up;case 35676:return Np;case 5124:case 35670:return Op;case 35667:case 35671:return Fp;case 35668:case 35672:return zp;case 35669:case 35673:return Bp;case 5125:return Vp;case 36294:return Gp;case 36295:return Hp;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}}function Zp(i,t){i.uniform1fv(this.addr,t)}function Kp(i,t){const e=as(t,this.size,2);i.uniform2fv(this.addr,e)}function $p(i,t){const e=as(t,this.size,3);i.uniform3fv(this.addr,e)}function Jp(i,t){const e=as(t,this.size,4);i.uniform4fv(this.addr,e)}function Qp(i,t){const e=as(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tm(i,t){const e=as(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function em(i,t){const e=as(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function nm(i,t){i.uniform1iv(this.addr,t)}function im(i,t){i.uniform2iv(this.addr,t)}function sm(i,t){i.uniform3iv(this.addr,t)}function rm(i,t){i.uniform4iv(this.addr,t)}function am(i,t){i.uniform1uiv(this.addr,t)}function om(i,t){i.uniform2uiv(this.addr,t)}function lm(i,t){i.uniform3uiv(this.addr,t)}function cm(i,t){i.uniform4uiv(this.addr,t)}function hm(i,t,e){const n=this.cache,s=t.length,r=br(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||zc,r[a])}function um(i,t,e){const n=this.cache,s=t.length,r=br(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Vc,r[a])}function dm(i,t,e){const n=this.cache,s=t.length,r=br(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Gc,r[a])}function fm(i,t,e){const n=this.cache,s=t.length,r=br(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Bc,r[a])}function pm(i){switch(i){case 5126:return Zp;case 35664:return Kp;case 35665:return $p;case 35666:return Jp;case 35674:return Qp;case 35675:return tm;case 35676:return em;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return sm;case 35669:case 35673:return rm;case 5125:return am;case 36294:return om;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return fm}}class mm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jp(e.type)}}class gm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pm(e.type)}}class _m{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const la=/(\w+)(\])?(\[|\.)?/g;function Ll(i,t){i.seq.push(t),i.map[t.id]=t}function vm(i,t,e){const n=i.name,s=n.length;for(la.lastIndex=0;;){const r=la.exec(n),a=la.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ll(e,c===void 0?new mm(o,i,t):new gm(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new _m(o),Ll(e,u)),e=u}}}class gr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);vm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Il(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const xm=37297;let Mm=0;function Sm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ul=new It;function ym(i){Yt._getMatrix(Ul,Yt.workingColorSpace,i);const t=`mat3( ${Ul.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case Tr:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Sm(i.getShaderSource(t),a)}else return s}function Em(i,t){const e=ym(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Am(i,t){let e;switch(t){case Vh:e="Linear";break;case Gh:e="Reinhard";break;case Hh:e="Cineon";break;case kh:e="ACESFilmic";break;case Xh:e="AgX";break;case qh:e="Neutral";break;case Wh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const tr=new I;function Tm(){Yt.getLuminanceCoefficients(tr);const i=tr.x.toFixed(4),t=tr.y.toFixed(4),e=tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function wm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ms(i){return i!==""}function Ol(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function io(i){return i.replace(Cm,Dm)}const Pm=new Map;function Dm(i,t){let e=Ot[t];if(e===void 0){const n=Pm.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return io(e)}const Lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zl(i){return i.replace(Lm,Im)}function Im(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Um(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===uc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===xh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function Nm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qi:case ts:t="ENVMAP_TYPE_CUBE";break;case Ar:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Om(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ts:t="ENVMAP_MODE_REFRACTION";break}return t}function Fm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xo:t="ENVMAP_BLENDING_MULTIPLY";break;case zh:t="ENVMAP_BLENDING_MIX";break;case Bh:t="ENVMAP_BLENDING_ADD";break}return t}function zm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Bm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Um(e),c=Nm(e),h=Om(e),u=Fm(e),f=zm(e),p=bm(e),g=wm(r),_=s.createProgram();let m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ms).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ms).join(`
`),d.length>0&&(d+=`
`)):(m=[Bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),d=[Bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?Ot.tonemapping_pars_fragment:"",e.toneMapping!==ni?Am("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Em("linearToOutputTexel",e.outputColorSpace),Tm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ms).join(`
`)),a=io(a),a=Ol(a,e),a=Fl(a,e),o=io(o),o=Ol(o,e),o=Fl(o,e),a=zl(a),o=zl(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=E+m+a,S=E+d+o,N=Il(s,s.VERTEX_SHADER,A),w=Il(s,s.FRAGMENT_SHADER,S);s.attachShader(_,N),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(R){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(N).trim(),W=s.getShaderInfoLog(w).trim();let Z=!0,k=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,N,w);else{const $=Nl(s,N,"vertex"),H=Nl(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+$+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||W==="")&&(k=!1);k&&(R.diagnostics={runnable:Z,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:d}})}s.deleteShader(N),s.deleteShader(w),C=new gr(s,_),y=Rm(s,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,xm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=w,this}let Vm=0;class Gm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Hm(t),e.set(t,n)),n}}class Hm{constructor(t){this.id=Vm++,this.code=t,this.usedTimes=0}}function km(i,t,e,n,s,r,a){const o=new Rc,l=new Gm,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,R,V,B){const W=V.fog,Z=B.geometry,k=y.isMeshStandardMaterial?V.environment:null,$=(y.isMeshStandardMaterial?e:t).get(y.envMap||k),H=$&&$.mapping===Ar?$.image.height:null,st=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ht=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Mt=ht!==void 0?ht.length:0;let Ft=0;Z.morphAttributes.position!==void 0&&(Ft=1),Z.morphAttributes.normal!==void 0&&(Ft=2),Z.morphAttributes.color!==void 0&&(Ft=3);let te,q,tt,_t;if(st){const $t=gn[st];te=$t.vertexShader,q=$t.fragmentShader}else te=y.vertexShader,q=y.fragmentShader,l.update(y),tt=l.getVertexShaderID(y),_t=l.getFragmentShaderID(y);const rt=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Ct=B.isInstancedMesh===!0,zt=B.isBatchedMesh===!0,he=!!y.map,Xt=!!y.matcap,me=!!$,U=!!y.aoMap,Ke=!!y.lightMap,Ht=!!y.bumpMap,kt=!!y.normalMap,At=!!y.displacementMap,re=!!y.emissiveMap,Et=!!y.metalnessMap,T=!!y.roughnessMap,v=y.anisotropy>0,O=y.clearcoat>0,Y=y.dispersion>0,K=y.iridescence>0,X=y.sheen>0,vt=y.transmission>0,at=v&&!!y.anisotropyMap,ut=O&&!!y.clearcoatMap,qt=O&&!!y.clearcoatNormalMap,J=O&&!!y.clearcoatRoughnessMap,dt=K&&!!y.iridescenceMap,Tt=K&&!!y.iridescenceThicknessMap,wt=X&&!!y.sheenColorMap,ft=X&&!!y.sheenRoughnessMap,Wt=!!y.specularMap,Nt=!!y.specularColorMap,ne=!!y.specularIntensityMap,P=vt&&!!y.transmissionMap,it=vt&&!!y.thicknessMap,G=!!y.gradientMap,j=!!y.alphaMap,ct=y.alphaTest>0,ot=!!y.alphaHash,Dt=!!y.extensions;let ue=ni;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ue=i.toneMapping);const Re={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:te,fragmentShader:q,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:_t,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:zt,batchingColor:zt&&B._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&B.instanceColor!==null,instancingMorph:Ct&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ss,alphaToCoverage:!!y.alphaToCoverage,map:he,matcap:Xt,envMap:me,envMapMode:me&&$.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:Ke,bumpMap:Ht,normalMap:kt,displacementMap:f&&At,emissiveMap:re,normalMapObjectSpace:kt&&y.normalMapType===Kh,normalMapTangentSpace:kt&&y.normalMapType===yc,metalnessMap:Et,roughnessMap:T,anisotropy:v,anisotropyMap:at,clearcoat:O,clearcoatMap:ut,clearcoatNormalMap:qt,clearcoatRoughnessMap:J,dispersion:Y,iridescence:K,iridescenceMap:dt,iridescenceThicknessMap:Tt,sheen:X,sheenColorMap:wt,sheenRoughnessMap:ft,specularMap:Wt,specularColorMap:Nt,specularIntensityMap:ne,transmission:vt,transmissionMap:P,thicknessMap:it,gradientMap:G,opaque:y.transparent===!1&&y.blending===Zi&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:ct,alphaHash:ot,combine:y.combine,mapUv:he&&_(y.map.channel),aoMapUv:U&&_(y.aoMap.channel),lightMapUv:Ke&&_(y.lightMap.channel),bumpMapUv:Ht&&_(y.bumpMap.channel),normalMapUv:kt&&_(y.normalMap.channel),displacementMapUv:At&&_(y.displacementMap.channel),emissiveMapUv:re&&_(y.emissiveMap.channel),metalnessMapUv:Et&&_(y.metalnessMap.channel),roughnessMapUv:T&&_(y.roughnessMap.channel),anisotropyMapUv:at&&_(y.anisotropyMap.channel),clearcoatMapUv:ut&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:qt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ft&&_(y.sheenRoughnessMap.channel),specularMapUv:Wt&&_(y.specularMap.channel),specularColorMapUv:Nt&&_(y.specularColorMap.channel),specularIntensityMapUv:ne&&_(y.specularIntensityMap.channel),transmissionMapUv:P&&_(y.transmissionMap.channel),thicknessMapUv:it&&_(y.thicknessMap.channel),alphaMapUv:j&&_(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(kt||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(he||j),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Ft,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:he&&y.map.isVideoTexture===!0&&Yt.getTransfer(y.map.colorSpace)===Jt,decodeVideoTextureEmissive:re&&y.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(y.emissiveMap.colorSpace)===Jt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===un,flipSided:y.side===We,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Dt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&y.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function d(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)x.push(R),x.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(E(x,y),A(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function E(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function A(y,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const x=g[y.type];let R;if(x){const V=gn[x];R=Tu.clone(V.uniforms)}else R=y.uniforms;return R}function N(y,x){let R;for(let V=0,B=h.length;V<B;V++){const W=h[V];if(W.cacheKey===x){R=W,++R.usedTimes;break}}return R===void 0&&(R=new Bm(i,x,y,r),h.push(R)),R}function w(y){if(--y.usedTimes===0){const x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function b(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:N,releaseProgram:w,releaseShaderCache:b,programs:h,dispose:C}}function Wm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Xm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Vl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,g,_,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function o(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||Xm),n.length>1&&n.sort(f||Vl),s.length>1&&s.sort(f||Vl)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function qm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Gl,i.set(n,[a])):s>=r.length?(a=new Gl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ym(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ut};break;case"SpotLight":e={position:new I,direction:new I,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function jm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Zm=0;function Km(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $m(i){const t=new Ym,e=jm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new ee,a=new ee;function o(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,E=0,A=0,S=0,N=0,w=0,b=0;c.sort(Km);for(let y=0,x=c.length;y<x;y++){const R=c[y],V=R.color,B=R.intensity,W=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=V.r*B,u+=V.g*B,f+=V.b*B;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],B);b++}else if(R.isDirectionalLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,H=e.get(R);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=R.shadow.matrix,E++}n.directional[p]=k,p++}else if(R.isSpotLight){const k=t.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(V).multiplyScalar(B),k.distance=W,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[_]=k;const $=R.shadow;if(R.map&&(n.spotLightMap[N]=R.map,N++,$.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[_]=$.matrix,R.castShadow){const H=e.get(R);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=Z,S++}_++}else if(R.isRectAreaLight){const k=t.get(R);k.color.copy(V).multiplyScalar(B),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=k,m++}else if(R.isPointLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const $=R.shadow,H=e.get(R);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=R.shadow.matrix,A++}n.point[g]=k,g++}else if(R.isHemisphereLight){const k=t.get(R);k.skyColor.copy(R.color).multiplyScalar(B),k.groundColor.copy(R.groundColor).multiplyScalar(B),n.hemi[d]=k,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==E||C.numPointShadows!==A||C.numSpotShadows!==S||C.numSpotMaps!==N||C.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=S+N-w,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=E,C.numPointShadows=A,C.numSpotShadows=S,C.numSpotMaps=N,C.numLightProbes=b,n.version=Zm++)}function l(c,h){let u=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const A=c[d];if(A.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(A.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(A.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(A.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Hl(i){const t=new $m(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Jm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Hl(i),t.set(s,[o])):r>=a.length?(o=new Hl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Qm extends Ti{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tg extends Ti{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ng=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ig(i,t,e){let n=new wo;const s=new Pt,r=new Pt,a=new fe,o=new Qm({depthPacking:Zh}),l=new tg,c={},h=e.maxTextureSize,u={[ri]:We,[We]:ri,[un]:un},f=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:eg,fragmentShader:ng}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Gt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uc;let d=this.type;this.render=function(w,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),V=i.state;V.setBlending(ei),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=d!==Un&&this.type===Un,W=d===Un&&this.type!==Un;for(let Z=0,k=w.length;Z<k;Z++){const $=w[Z],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const st=H.getFrameExtents();if(s.multiply(st),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||B===!0||W===!0){const Mt=this.type!==Un?{minFilter:Xe,magFilter:Xe}:{};H.map!==null&&H.map.dispose(),H.map=new yi(s.x,s.y,Mt),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ht=H.getViewportCount();for(let Mt=0;Mt<ht;Mt++){const Ft=H.getViewport(Mt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),V.viewport(a),H.updateMatrices($,Mt),n=H.getFrustum(),S(b,C,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===Un&&E(H,C),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(y,x,R)};function E(w,b){const C=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new yi(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,C,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,C,p,_,null)}function A(w,b,C,y){let x=null;const R=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)x=R;else if(x=C.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const V=x.uuid,B=b.uuid;let W=c[V];W===void 0&&(W={},c[V]=W);let Z=W[B];Z===void 0&&(Z=x.clone(),W[B]=Z,b.addEventListener("dispose",N)),x=Z}if(x.visible=b.visible,x.wireframe=b.wireframe,y===Un?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:u[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const V=i.properties.get(x);V.light=C}return x}function S(w,b,C,y,x){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Un)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const B=t.update(w),W=w.material;if(Array.isArray(W)){const Z=B.groups;for(let k=0,$=Z.length;k<$;k++){const H=Z[k],st=W[H.materialIndex];if(st&&st.visible){const ht=A(w,st,y,x);w.onBeforeShadow(i,w,b,C,B,ht,H),i.renderBufferDirect(C,null,B,ht,w,H),w.onAfterShadow(i,w,b,C,B,ht,H)}}}else if(W.visible){const Z=A(w,W,y,x);w.onBeforeShadow(i,w,b,C,B,Z,null),i.renderBufferDirect(C,null,B,Z,w,null),w.onAfterShadow(i,w,b,C,B,Z,null)}}const V=w.children;for(let B=0,W=V.length;B<W;B++)S(V[B],b,C,y,x)}function N(w){w.target.removeEventListener("dispose",N);for(const C in c){const y=c[C],x=w.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const sg={[va]:xa,[Ma]:Ea,[Sa]:Aa,[Ji]:ya,[xa]:va,[Ea]:Ma,[Aa]:Sa,[ya]:Ji};function rg(i,t){function e(){let P=!1;const it=new fe;let G=null;const j=new fe(0,0,0,0);return{setMask:function(ct){G!==ct&&!P&&(i.colorMask(ct,ct,ct,ct),G=ct)},setLocked:function(ct){P=ct},setClear:function(ct,ot,Dt,ue,Re){Re===!0&&(ct*=ue,ot*=ue,Dt*=ue),it.set(ct,ot,Dt,ue),j.equals(it)===!1&&(i.clearColor(ct,ot,Dt,ue),j.copy(it))},reset:function(){P=!1,G=null,j.set(-1,0,0,0)}}}function n(){let P=!1,it=!1,G=null,j=null,ct=null;return{setReversed:function(ot){if(it!==ot){const Dt=t.get("EXT_clip_control");it?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const ue=ct;ct=null,this.setClear(ue)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?rt(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(ot){G!==ot&&!P&&(i.depthMask(ot),G=ot)},setFunc:function(ot){if(it&&(ot=sg[ot]),j!==ot){switch(ot){case va:i.depthFunc(i.NEVER);break;case xa:i.depthFunc(i.ALWAYS);break;case Ma:i.depthFunc(i.LESS);break;case Ji:i.depthFunc(i.LEQUAL);break;case Sa:i.depthFunc(i.EQUAL);break;case ya:i.depthFunc(i.GEQUAL);break;case Ea:i.depthFunc(i.GREATER);break;case Aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=ot}},setLocked:function(ot){P=ot},setClear:function(ot){ct!==ot&&(it&&(ot=1-ot),i.clearDepth(ot),ct=ot)},reset:function(){P=!1,G=null,j=null,ct=null,it=!1}}}function s(){let P=!1,it=null,G=null,j=null,ct=null,ot=null,Dt=null,ue=null,Re=null;return{setTest:function($t){P||($t?rt(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function($t){it!==$t&&!P&&(i.stencilMask($t),it=$t)},setFunc:function($t,nn,wn){(G!==$t||j!==nn||ct!==wn)&&(i.stencilFunc($t,nn,wn),G=$t,j=nn,ct=wn)},setOp:function($t,nn,wn){(ot!==$t||Dt!==nn||ue!==wn)&&(i.stencilOp($t,nn,wn),ot=$t,Dt=nn,ue=wn)},setLocked:function($t){P=$t},setClear:function($t){Re!==$t&&(i.clearStencil($t),Re=$t)},reset:function(){P=!1,it=null,G=null,j=null,ct=null,ot=null,Dt=null,ue=null,Re=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,E=null,A=null,S=null,N=null,w=null,b=new Ut(0,0,0),C=0,y=!1,x=null,R=null,V=null,B=null,W=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,$=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=$>=2);let st=null,ht={};const Mt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),te=new fe().fromArray(Mt),q=new fe().fromArray(Ft);function tt(P,it,G,j){const ct=new Uint8Array(4),ot=i.createTexture();i.bindTexture(P,ot),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<G;Dt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(it+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return ot}const _t={};_t[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Ji),Ht(!1),kt(jo),rt(i.CULL_FACE),U(ei);function rt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function bt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Ct(P,it){return u[P]!==it?(i.bindFramebuffer(P,it),u[P]=it,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function zt(P,it){let G=p,j=!1;if(P){G=f.get(it),G===void 0&&(G=[],f.set(it,G));const ct=P.textures;if(G.length!==ct.length||G[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Dt=ct.length;ot<Dt;ot++)G[ot]=i.COLOR_ATTACHMENT0+ot;G.length=ct.length,j=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,j=!0);j&&i.drawBuffers(G)}function he(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const Xt={[_i]:i.FUNC_ADD,[Sh]:i.FUNC_SUBTRACT,[yh]:i.FUNC_REVERSE_SUBTRACT};Xt[Eh]=i.MIN,Xt[Ah]=i.MAX;const me={[Th]:i.ZERO,[bh]:i.ONE,[wh]:i.SRC_COLOR,[ga]:i.SRC_ALPHA,[Ih]:i.SRC_ALPHA_SATURATE,[Dh]:i.DST_COLOR,[Ch]:i.DST_ALPHA,[Rh]:i.ONE_MINUS_SRC_COLOR,[_a]:i.ONE_MINUS_SRC_ALPHA,[Lh]:i.ONE_MINUS_DST_COLOR,[Ph]:i.ONE_MINUS_DST_ALPHA,[Uh]:i.CONSTANT_COLOR,[Nh]:i.ONE_MINUS_CONSTANT_COLOR,[Oh]:i.CONSTANT_ALPHA,[Fh]:i.ONE_MINUS_CONSTANT_ALPHA};function U(P,it,G,j,ct,ot,Dt,ue,Re,$t){if(P===ei){_===!0&&(bt(i.BLEND),_=!1);return}if(_===!1&&(rt(i.BLEND),_=!0),P!==Mh){if(P!==m||$t!==y){if((d!==_i||S!==_i)&&(i.blendEquation(i.FUNC_ADD),d=_i,S=_i),$t)switch(P){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ce:i.blendFunc(i.ONE,i.ONE);break;case Zo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ce:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ko:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,A=null,N=null,w=null,b.set(0,0,0),C=0,m=P,y=$t}return}ct=ct||it,ot=ot||G,Dt=Dt||j,(it!==d||ct!==S)&&(i.blendEquationSeparate(Xt[it],Xt[ct]),d=it,S=ct),(G!==E||j!==A||ot!==N||Dt!==w)&&(i.blendFuncSeparate(me[G],me[j],me[ot],me[Dt]),E=G,A=j,N=ot,w=Dt),(ue.equals(b)===!1||Re!==C)&&(i.blendColor(ue.r,ue.g,ue.b,Re),b.copy(ue),C=Re),m=P,y=!1}function Ke(P,it){P.side===un?bt(i.CULL_FACE):rt(i.CULL_FACE);let G=P.side===We;it&&(G=!G),Ht(G),P.blending===Zi&&P.transparent===!1?U(ei):U(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const j=P.stencilWrite;o.setTest(j),j&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),re(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(P){x!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),x=P)}function kt(P){P!==_h?(rt(i.CULL_FACE),P!==R&&(P===jo?i.cullFace(i.BACK):P===vh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),R=P}function At(P){P!==V&&(k&&i.lineWidth(P),V=P)}function re(P,it,G){P?(rt(i.POLYGON_OFFSET_FILL),(B!==it||W!==G)&&(i.polygonOffset(it,G),B=it,W=G)):bt(i.POLYGON_OFFSET_FILL)}function Et(P){P?rt(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function T(P){P===void 0&&(P=i.TEXTURE0+Z-1),st!==P&&(i.activeTexture(P),st=P)}function v(P,it,G){G===void 0&&(st===null?G=i.TEXTURE0+Z-1:G=st);let j=ht[G];j===void 0&&(j={type:void 0,texture:void 0},ht[G]=j),(j.type!==P||j.texture!==it)&&(st!==G&&(i.activeTexture(G),st=G),i.bindTexture(P,it||_t[P]),j.type=P,j.texture=it)}function O(){const P=ht[st];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(P){te.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),te.copy(P))}function ft(P){q.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),q.copy(P))}function Wt(P,it){let G=c.get(it);G===void 0&&(G=new WeakMap,c.set(it,G));let j=G.get(P);j===void 0&&(j=i.getUniformBlockIndex(it,P.name),G.set(P,j))}function Nt(P,it){const j=c.get(it).get(P);l.get(it)!==j&&(i.uniformBlockBinding(it,j,P.__bindingPointIndex),l.set(it,j))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ht={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,E=null,A=null,S=null,N=null,w=null,b=new Ut(0,0,0),C=0,y=!1,x=null,R=null,V=null,B=null,W=null,te.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:bt,bindFramebuffer:Ct,drawBuffers:zt,useProgram:he,setBlending:U,setMaterial:Ke,setFlipSided:Ht,setCullFace:kt,setLineWidth:At,setPolygonOffset:re,setScissorTest:Et,activeTexture:T,bindTexture:v,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:K,texImage2D:dt,texImage3D:Tt,updateUBOMapping:Wt,uniformBlockBinding:Nt,texStorage2D:qt,texStorage3D:J,texSubImage2D:X,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:ut,scissor:wt,viewport:ft,reset:ne}}function kl(i,t,e,n){const s=ag(n);switch(e){case gc:return i*t;case vc:return i*t;case xc:return i*t*2;case Eo:return i*t/s.components*s.byteLength;case Ao:return i*t/s.components*s.byteLength;case Mc:return i*t*2/s.components*s.byteLength;case To:return i*t*2/s.components*s.byteLength;case _c:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case bo:return i*t*4/s.components*s.byteLength;case ur:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:case Da:return Math.max(i,16)*Math.max(t,8)/4;case Ra:case Pa:return Math.max(i,8)*Math.max(t,8)/2;case La:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case mr:case Za:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Sc:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ja:case Qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ag(i){switch(i){case Bn:case fc:return{byteLength:1,components:1};case As:case pc:case Rs:return{byteLength:2,components:1};case So:case yo:return{byteLength:2,components:4};case Si:case Mo:case xn:return{byteLength:4,components:1};case mc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function og(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return p?new OffscreenCanvas(T,v):Mr("canvas")}function _(T,v,O){let Y=1;const K=Et(T);if((K.width>O||K.height>O)&&(Y=O/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){const X=Math.floor(Y*K.width),vt=Math.floor(Y*K.height);u===void 0&&(u=g(X,vt));const at=v?g(X,vt):u;return at.width=X,at.height=vt,at.getContext("2d").drawImage(T,0,0,X,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+vt+")."),at}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(T,v,O,Y,K=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=v;if(v===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),v===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),v===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),v===i.RGBA){const vt=K?Tr:Yt.getTransfer(Y);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=vt===Jt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function S(T,v){let O;return T?v===null||v===Si||v===es?O=i.DEPTH24_STENCIL8:v===xn?O=i.DEPTH32F_STENCIL8:v===As&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Si||v===es?O=i.DEPTH_COMPONENT24:v===xn?O=i.DEPTH_COMPONENT32F:v===As&&(O=i.DEPTH_COMPONENT16),O}function N(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Xe&&T.minFilter!==dn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function w(T){const v=T.target;v.removeEventListener("dispose",w),C(v),v.isVideoTexture&&h.delete(v)}function b(T){const v=T.target;v.removeEventListener("dispose",b),x(v)}function C(T){const v=n.get(T);if(v.__webglInit===void 0)return;const O=T.source,Y=f.get(O);if(Y){const K=Y[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(T),Object.keys(Y).length===0&&f.delete(O)}n.remove(T)}function y(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const O=T.source,Y=f.get(O);delete Y[v.__cacheKey],a.memory.textures--}function x(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let K=0;K<v.__webglFramebuffer[Y].length;K++)i.deleteFramebuffer(v.__webglFramebuffer[Y][K]);else i.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[Y]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=T.textures;for(let Y=0,K=O.length;Y<K;Y++){const X=n.get(O[Y]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(O[Y])}n.remove(T)}let R=0;function V(){R=0}function B(){const T=R;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function W(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function Z(T,v){const O=n.get(T);if(T.isVideoTexture&&At(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,T,v);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function k(T,v){const O=n.get(T);if(T.version>0&&O.__version!==T.version){q(O,T,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function $(T,v){const O=n.get(T);if(T.version>0&&O.__version!==T.version){q(O,T,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function H(T,v){const O=n.get(T);if(T.version>0&&O.__version!==T.version){tt(O,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const st={[Es]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[wa]:i.MIRRORED_REPEAT},ht={[Xe]:i.NEAREST,[Yh]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Ur]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},Mt={[$h]:i.NEVER,[iu]:i.ALWAYS,[Jh]:i.LESS,[Ec]:i.LEQUAL,[Qh]:i.EQUAL,[nu]:i.GEQUAL,[tu]:i.GREATER,[eu]:i.NOTEQUAL};function Ft(T,v){if(v.type===xn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===dn||v.magFilter===Ur||v.magFilter===Us||v.magFilter===ti||v.minFilter===dn||v.minFilter===Ur||v.minFilter===Us||v.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,st[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,st[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,st[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ht[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ht[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Mt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Xe||v.minFilter!==Us&&v.minFilter!==ti||v.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function te(T,v){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",w));const Y=v.source;let K=f.get(Y);K===void 0&&(K={},f.set(Y,K));const X=W(v);if(X!==T.__cacheKey){K[X]===void 0&&(K[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[X].usedTimes++;const vt=K[T.__cacheKey];vt!==void 0&&(K[T.__cacheKey].usedTimes--,vt.usedTimes===0&&y(v)),T.__cacheKey=X,T.__webglTexture=K[X].texture}return O}function q(T,v,O){let Y=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=i.TEXTURE_3D);const K=te(T,v),X=v.source;e.bindTexture(Y,T.__webglTexture,i.TEXTURE0+O);const vt=n.get(X);if(X.version!==vt.__version||K===!0){e.activeTexture(i.TEXTURE0+O);const at=Yt.getPrimaries(Yt.workingColorSpace),ut=v.colorSpace===Jn?null:Yt.getPrimaries(v.colorSpace),qt=v.colorSpace===Jn||at===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let J=_(v.image,!1,s.maxTextureSize);J=re(v,J);const dt=r.convert(v.format,v.colorSpace),Tt=r.convert(v.type);let wt=A(v.internalFormat,dt,Tt,v.colorSpace,v.isVideoTexture);Ft(Y,v);let ft;const Wt=v.mipmaps,Nt=v.isVideoTexture!==!0,ne=vt.__version===void 0||K===!0,P=X.dataReady,it=N(v,J);if(v.isDepthTexture)wt=S(v.format===ns,v.type),ne&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,wt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,wt,J.width,J.height,0,dt,Tt,null));else if(v.isDataTexture)if(Wt.length>0){Nt&&ne&&e.texStorage2D(i.TEXTURE_2D,it,wt,Wt[0].width,Wt[0].height);for(let G=0,j=Wt.length;G<j;G++)ft=Wt[G],Nt?P&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ft.width,ft.height,dt,Tt,ft.data):e.texImage2D(i.TEXTURE_2D,G,wt,ft.width,ft.height,0,dt,Tt,ft.data);v.generateMipmaps=!1}else Nt?(ne&&e.texStorage2D(i.TEXTURE_2D,it,wt,J.width,J.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,dt,Tt,J.data)):e.texImage2D(i.TEXTURE_2D,0,wt,J.width,J.height,0,dt,Tt,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Nt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,wt,Wt[0].width,Wt[0].height,J.depth);for(let G=0,j=Wt.length;G<j;G++)if(ft=Wt[G],v.format!==fn)if(dt!==null)if(Nt){if(P)if(v.layerUpdates.size>0){const ct=kl(ft.width,ft.height,v.format,v.type);for(const ot of v.layerUpdates){const Dt=ft.data.subarray(ot*ct/ft.data.BYTES_PER_ELEMENT,(ot+1)*ct/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,ot,ft.width,ft.height,1,dt,Dt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ft.width,ft.height,J.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,wt,ft.width,ft.height,J.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ft.width,ft.height,J.depth,dt,Tt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,wt,ft.width,ft.height,J.depth,0,dt,Tt,ft.data)}else{Nt&&ne&&e.texStorage2D(i.TEXTURE_2D,it,wt,Wt[0].width,Wt[0].height);for(let G=0,j=Wt.length;G<j;G++)ft=Wt[G],v.format!==fn?dt!==null?Nt?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,G,wt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?P&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ft.width,ft.height,dt,Tt,ft.data):e.texImage2D(i.TEXTURE_2D,G,wt,ft.width,ft.height,0,dt,Tt,ft.data)}else if(v.isDataArrayTexture)if(Nt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,wt,J.width,J.height,J.depth),P)if(v.layerUpdates.size>0){const G=kl(J.width,J.height,v.format,v.type);for(const j of v.layerUpdates){const ct=J.data.subarray(j*G/J.data.BYTES_PER_ELEMENT,(j+1)*G/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,J.width,J.height,1,dt,Tt,ct)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,dt,Tt,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,J.width,J.height,J.depth,0,dt,Tt,J.data);else if(v.isData3DTexture)Nt?(ne&&e.texStorage3D(i.TEXTURE_3D,it,wt,J.width,J.height,J.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,dt,Tt,J.data)):e.texImage3D(i.TEXTURE_3D,0,wt,J.width,J.height,J.depth,0,dt,Tt,J.data);else if(v.isFramebufferTexture){if(ne)if(Nt)e.texStorage2D(i.TEXTURE_2D,it,wt,J.width,J.height);else{let G=J.width,j=J.height;for(let ct=0;ct<it;ct++)e.texImage2D(i.TEXTURE_2D,ct,wt,G,j,0,dt,Tt,null),G>>=1,j>>=1}}else if(Wt.length>0){if(Nt&&ne){const G=Et(Wt[0]);e.texStorage2D(i.TEXTURE_2D,it,wt,G.width,G.height)}for(let G=0,j=Wt.length;G<j;G++)ft=Wt[G],Nt?P&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,dt,Tt,ft):e.texImage2D(i.TEXTURE_2D,G,wt,dt,Tt,ft);v.generateMipmaps=!1}else if(Nt){if(ne){const G=Et(J);e.texStorage2D(i.TEXTURE_2D,it,wt,G.width,G.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Tt,J)}else e.texImage2D(i.TEXTURE_2D,0,wt,dt,Tt,J);m(v)&&d(Y),vt.__version=X.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function tt(T,v,O){if(v.image.length!==6)return;const Y=te(T,v),K=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const X=n.get(K);if(K.version!==X.__version||Y===!0){e.activeTexture(i.TEXTURE0+O);const vt=Yt.getPrimaries(Yt.workingColorSpace),at=v.colorSpace===Jn?null:Yt.getPrimaries(v.colorSpace),ut=v.colorSpace===Jn||vt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const qt=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,dt=[];for(let j=0;j<6;j++)!qt&&!J?dt[j]=_(v.image[j],!0,s.maxCubemapSize):dt[j]=J?v.image[j].image:v.image[j],dt[j]=re(v,dt[j]);const Tt=dt[0],wt=r.convert(v.format,v.colorSpace),ft=r.convert(v.type),Wt=A(v.internalFormat,wt,ft,v.colorSpace),Nt=v.isVideoTexture!==!0,ne=X.__version===void 0||Y===!0,P=K.dataReady;let it=N(v,Tt);Ft(i.TEXTURE_CUBE_MAP,v);let G;if(qt){Nt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Wt,Tt.width,Tt.height);for(let j=0;j<6;j++){G=dt[j].mipmaps;for(let ct=0;ct<G.length;ct++){const ot=G[ct];v.format!==fn?wt!==null?Nt?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,ot.width,ot.height,wt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,Wt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,ot.width,ot.height,wt,ft,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,Wt,ot.width,ot.height,0,wt,ft,ot.data)}}}else{if(G=v.mipmaps,Nt&&ne){G.length>0&&it++;const j=Et(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Wt,j.width,j.height)}for(let j=0;j<6;j++)if(J){Nt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,dt[j].width,dt[j].height,wt,ft,dt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Wt,dt[j].width,dt[j].height,0,wt,ft,dt[j].data);for(let ct=0;ct<G.length;ct++){const Dt=G[ct].image[j].image;Nt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,Dt.width,Dt.height,wt,ft,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,Wt,Dt.width,Dt.height,0,wt,ft,Dt.data)}}else{Nt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,wt,ft,dt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Wt,wt,ft,dt[j]);for(let ct=0;ct<G.length;ct++){const ot=G[ct];Nt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,wt,ft,ot.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,Wt,wt,ft,ot.image[j])}}}m(v)&&d(i.TEXTURE_CUBE_MAP),X.__version=K.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function _t(T,v,O,Y,K,X){const vt=r.convert(O.format,O.colorSpace),at=r.convert(O.type),ut=A(O.internalFormat,vt,at,O.colorSpace),qt=n.get(v),J=n.get(O);if(J.__renderTarget=v,!qt.__hasExternalTextures){const dt=Math.max(1,v.width>>X),Tt=Math.max(1,v.height>>X);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,X,ut,dt,Tt,v.depth,0,vt,at,null):e.texImage2D(K,X,ut,dt,Tt,0,vt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),kt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,K,J.__webglTexture,0,Ht(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,K,J.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(T,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const Y=v.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,X=S(v.stencilBuffer,K),vt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Ht(v);kt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,X,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,T)}else{const Y=v.textures;for(let K=0;K<Y.length;K++){const X=Y[K],vt=r.convert(X.format,X.colorSpace),at=r.convert(X.type),ut=A(X.internalFormat,vt,at,X.colorSpace),qt=Ht(v);O&&kt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,ut,v.width,v.height):kt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,ut,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ut,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const K=Y.__webglTexture,X=Ht(v);if(v.depthTexture.format===Ki)kt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(v.depthTexture.format===ns)kt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ct(T){const v=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=Y}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");bt(v.__webglFramebuffer,T)}else if(O){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=i.createRenderbuffer(),rt(v.__webglDepthbuffer[Y],T,!1);else{const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),rt(v.__webglDepthbuffer,T,!1);else{const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(T,v,O){const Y=n.get(T);v!==void 0&&_t(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ct(T)}function he(T){const v=T.texture,O=n.get(T),Y=n.get(v);T.addEventListener("dispose",b);const K=T.textures,X=T.isWebGLCubeRenderTarget===!0,vt=K.length>1;if(vt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=v.version,a.memory.textures++),X){O.__webglFramebuffer=[];for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[at]=[];for(let ut=0;ut<v.mipmaps.length;ut++)O.__webglFramebuffer[at][ut]=i.createFramebuffer()}else O.__webglFramebuffer[at]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)O.__webglFramebuffer[at]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(vt)for(let at=0,ut=K.length;at<ut;at++){const qt=n.get(K[at]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&kt(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let at=0;at<K.length;at++){const ut=K[at];O.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[at]);const qt=r.convert(ut.format,ut.colorSpace),J=r.convert(ut.type),dt=A(ut.internalFormat,qt,J,ut.colorSpace,T.isXRRenderTarget===!0),Tt=Ht(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,dt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,O.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,v);for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)_t(O.__webglFramebuffer[at][ut],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else _t(O.__webglFramebuffer[at],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(v)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,ut=K.length;at<ut;at++){const qt=K[at],J=n.get(qt);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),Ft(i.TEXTURE_2D,qt),_t(O.__webglFramebuffer,T,qt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(qt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(at=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,Y.__webglTexture),Ft(at,v),v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)_t(O.__webglFramebuffer[ut],T,v,i.COLOR_ATTACHMENT0,at,ut);else _t(O.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,at,0);m(v)&&d(at),e.unbindTexture()}T.depthBuffer&&Ct(T)}function Xt(T){const v=T.textures;for(let O=0,Y=v.length;O<Y;O++){const K=v[O];if(m(K)){const X=E(T),vt=n.get(K).__webglTexture;e.bindTexture(X,vt),d(X),e.unbindTexture()}}}const me=[],U=[];function Ke(T){if(T.samples>0){if(kt(T)===!1){const v=T.textures,O=T.width,Y=T.height;let K=i.COLOR_BUFFER_BIT;const X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(T),at=v.length>1;if(at)for(let ut=0;ut<v.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ut=0;ut<v.length;ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const qt=n.get(v[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,O,Y,0,0,O,Y,K,i.NEAREST),l===!0&&(me.length=0,U.length=0,me.push(i.COLOR_ATTACHMENT0+ut),T.depthBuffer&&T.resolveDepthBuffer===!1&&(me.push(X),U.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<v.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const qt=n.get(v[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ht(T){return Math.min(s.maxSamples,T.samples)}function kt(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function At(T){const v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function re(T,v){const O=T.colorSpace,Y=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==ss&&O!==Jn&&(Yt.getTransfer(O)===Jt?(Y!==fn||K!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Et(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=Z,this.setTexture2DArray=k,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=zt,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=kt}function lg(i,t){function e(n,s=Jn){let r;const a=Yt.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===So)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fc)return i.BYTE;if(n===pc)return i.SHORT;if(n===As)return i.UNSIGNED_SHORT;if(n===Mo)return i.INT;if(n===Si)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===Rs)return i.HALF_FLOAT;if(n===gc)return i.ALPHA;if(n===_c)return i.RGB;if(n===fn)return i.RGBA;if(n===vc)return i.LUMINANCE;if(n===xc)return i.LUMINANCE_ALPHA;if(n===Ki)return i.DEPTH_COMPONENT;if(n===ns)return i.DEPTH_STENCIL;if(n===Eo)return i.RED;if(n===Ao)return i.RED_INTEGER;if(n===Mc)return i.RG;if(n===To)return i.RG_INTEGER;if(n===bo)return i.RGBA_INTEGER;if(n===ur||n===dr||n===fr||n===pr)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Ca||n===Pa||n===Da)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===La||n===Ia||n===Ua)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===La||n===Ia)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ua)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Na||n===Oa||n===Fa||n===za||n===Ba||n===Va||n===Ga||n===Ha||n===ka||n===Wa||n===Xa||n===qa||n===Ya||n===ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Na)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===za)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ba)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Va)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ga)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ha)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ka)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ya)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ja)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mr||n===Za||n===Ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===mr)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sc||n===$a||n===Ja||n===Qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class cg extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class be extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hg={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ie,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Vn({vertexShader:ug,fragmentShader:dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Gt(new zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pg extends rs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const _=new fg,m=e.getContextAttributes();let d=null,E=null;const A=[],S=[],N=new Pt;let w=null;const b=new Qe;b.viewport=new fe;const C=new Qe;C.viewport=new fe;const y=[b,C],x=new cg;let R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=A[q];return tt===void 0&&(tt=new ca,A[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=A[q];return tt===void 0&&(tt=new ca,A[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=A[q];return tt===void 0&&(tt=new ca,A[q]=tt),tt.getHandSpace()};function B(q){const tt=S.indexOf(q.inputSource);if(tt===-1)return;const _t=A[tt];_t!==void 0&&(_t.update(q.inputSource,q.frame,c||a),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Z);for(let q=0;q<A.length;q++){const tt=S[q];tt!==null&&(S[q]=null,A[q].disconnect(tt))}R=null,V=null,_.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,E=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new yi(p.framebufferWidth,p.framebufferHeight,{format:fn,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,_t=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?ns:Ki,_t=m.stencil?es:Si);const bt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new yi(f.textureWidth,f.textureHeight,{format:fn,type:Bn,depthTexture:new Fc(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(q){for(let tt=0;tt<q.removed.length;tt++){const _t=q.removed[tt],rt=S.indexOf(_t);rt>=0&&(S[rt]=null,A[rt].disconnect(_t))}for(let tt=0;tt<q.added.length;tt++){const _t=q.added[tt];let rt=S.indexOf(_t);if(rt===-1){for(let Ct=0;Ct<A.length;Ct++)if(Ct>=S.length){S.push(_t),rt=Ct;break}else if(S[Ct]===null){S[Ct]=_t,rt=Ct;break}if(rt===-1)break}const bt=A[rt];bt&&bt.connect(_t)}}const k=new I,$=new I;function H(q,tt,_t){k.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(_t.matrixWorld);const rt=k.distanceTo($),bt=tt.projectionMatrix.elements,Ct=_t.projectionMatrix.elements,zt=bt[14]/(bt[10]-1),he=bt[14]/(bt[10]+1),Xt=(bt[9]+1)/bt[5],me=(bt[9]-1)/bt[5],U=(bt[8]-1)/bt[0],Ke=(Ct[8]+1)/Ct[0],Ht=zt*U,kt=zt*Ke,At=rt/(-U+Ke),re=At*-U;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(re),q.translateZ(At),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),bt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Et=zt+At,T=he+At,v=Ht-re,O=kt+(rt-re),Y=Xt*he/T*Et,K=me*he/T*Et;q.projectionMatrix.makePerspective(v,O,Y,K,Et,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function st(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let tt=q.near,_t=q.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),x.near=C.near=b.near=tt,x.far=C.far=b.far=_t,(R!==x.near||V!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,V=x.far),b.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,x.layers.mask=b.layers.mask|C.layers.mask;const rt=q.parent,bt=x.cameras;st(x,rt);for(let Ct=0;Ct<bt.length;Ct++)st(bt[Ct],rt);bt.length===2?H(x,b,C):x.projectionMatrix.copy(b.projectionMatrix),ht(q,x,rt)};function ht(q,tt,_t){_t===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=no*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let Mt=null;function Ft(q,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){const _t=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let rt=!1;_t.length!==x.cameras.length&&(x.cameras.length=0,rt=!0);for(let Ct=0;Ct<_t.length;Ct++){const zt=_t[Ct];let he=null;if(p!==null)he=p.getViewport(zt);else{const me=u.getViewSubImage(f,zt);he=me.viewport,Ct===0&&(t.setRenderTargetTextures(E,me.colorTexture,f.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(E))}let Xt=y[Ct];Xt===void 0&&(Xt=new Qe,Xt.layers.enable(Ct),Xt.viewport=new fe,y[Ct]=Xt),Xt.matrix.fromArray(zt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(zt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(he.x,he.y,he.width,he.height),Ct===0&&(x.matrix.copy(Xt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),rt===!0&&x.cameras.push(Xt)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Ct=u.getDepthInformation(_t[0]);Ct&&Ct.isValid&&Ct.texture&&_.init(t,Ct,s.renderState)}}for(let _t=0;_t<A.length;_t++){const rt=S[_t],bt=A[_t];rt!==null&&bt!==void 0&&bt.update(rt,tt,c||a)}Mt&&Mt(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const te=new Nc;te.setAnimationLoop(Ft),this.setAnimationLoop=function(q){Mt=q},this.dispose=function(){}}}const di=new yn,mg=new ee;function gg(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Lc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,A,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,E,A):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===We&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===We&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=t.get(d),A=E.envMap,S=E.envMapRotation;A&&(m.envMap.value=A,di.copy(S),di.x*=-1,di.y*=-1,di.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(mg.makeRotationFromEuler(di)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=A*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===We&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _g(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,A){const S=A.program;n.uniformBlockBinding(E,S)}function c(E,A){let S=s[E.id];S===void 0&&(g(E),S=h(E),s[E.id]=S,E.addEventListener("dispose",m));const N=A.program;n.updateUBOMapping(E,N);const w=t.render.frame;r[E.id]!==w&&(f(E),r[E.id]=w)}function h(E){const A=u();E.__bindingPointIndex=A;const S=i.createBuffer(),N=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,N,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,S),S}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const A=s[E.id],S=E.uniforms,N=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let w=0,b=S.length;w<b;w++){const C=Array.isArray(S[w])?S[w]:[S[w]];for(let y=0,x=C.length;y<x;y++){const R=C[y];if(p(R,w,y,N)===!0){const V=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let Z=0;Z<B.length;Z++){const k=B[Z],$=_(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,V+W,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,W),W+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,A,S,N){const w=E.value,b=A+"_"+S;if(N[b]===void 0)return typeof w=="number"||typeof w=="boolean"?N[b]=w:N[b]=w.clone(),!0;{const C=N[b];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return N[b]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(E){const A=E.uniforms;let S=0;const N=16;for(let b=0,C=A.length;b<C;b++){const y=Array.isArray(A[b])?A[b]:[A[b]];for(let x=0,R=y.length;x<R;x++){const V=y[x],B=Array.isArray(V.value)?V.value:[V.value];for(let W=0,Z=B.length;W<Z;W++){const k=B[W],$=_(k),H=S%N,st=H%$.boundary,ht=H+st;S+=st,ht!==0&&N-ht<$.storage&&(S+=N-ht),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=$.storage}}}const w=S%N;return w>0&&(S+=N-w),E.__size=S,E.__cache={},this}function _(E){const A={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(A.boundary=4,A.storage=4):E.isVector2?(A.boundary=8,A.storage=8):E.isVector3||E.isColor?(A.boundary=16,A.storage=12):E.isVector4?(A.boundary=16,A.storage=16):E.isMatrix3?(A.boundary=48,A.storage=48):E.isMatrix4?(A.boundary=64,A.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),A}function m(E){const A=E.target;A.removeEventListener("dispose",m);const S=a.indexOf(A.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function d(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class vg{constructor(t={}){const{canvas:e=ru(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const E=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=ni,this.toneMappingExposure=1;const S=this;let N=!1,w=0,b=0,C=null,y=-1,x=null;const R=new fe,V=new fe;let B=null;const W=new Ut(0);let Z=0,k=e.width,$=e.height,H=1,st=null,ht=null;const Mt=new fe(0,0,k,$),Ft=new fe(0,0,k,$);let te=!1;const q=new wo;let tt=!1,_t=!1;const rt=new ee,bt=new ee,Ct=new I,zt=new fe,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function me(){return C===null?H:1}let U=n;function Ke(M,D){return e.getContext(M,D)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vo}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ot,!1),U===null){const D="webgl2";if(U=Ke(D,M),U===null)throw Ke(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ht,kt,At,re,Et,T,v,O,Y,K,X,vt,at,ut,qt,J,dt,Tt,wt,ft,Wt,Nt,ne,P;function it(){Ht=new Ep(U),Ht.init(),Nt=new lg(U,Ht),kt=new _p(U,Ht,t,Nt),At=new rg(U,Ht),kt.reverseDepthBuffer&&f&&At.buffers.depth.setReversed(!0),re=new bp(U),Et=new Wm,T=new og(U,Ht,At,Et,kt,Nt,re),v=new xp(S),O=new yp(S),Y=new Lu(U),ne=new mp(U,Y),K=new Ap(U,Y,re,ne),X=new Rp(U,K,Y,re),wt=new wp(U,kt,T),J=new vp(Et),vt=new km(S,v,O,Ht,kt,ne,J),at=new gg(S,Et),ut=new qm,qt=new Jm(Ht),Tt=new pp(S,v,O,At,X,p,l),dt=new ig(S,X,kt),P=new _g(U,re,kt,At),ft=new gp(U,Ht,re),Wt=new Tp(U,Ht,re),re.programs=vt.programs,S.capabilities=kt,S.extensions=Ht,S.properties=Et,S.renderLists=ut,S.shadowMap=dt,S.state=At,S.info=re}it();const G=new pg(S,U);this.xr=G,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=Ht.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ht.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(k,$,!1))},this.getSize=function(M){return M.set(k,$)},this.setSize=function(M,D,F=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=M,$=D,e.width=Math.floor(M*H),e.height=Math.floor(D*H),F===!0&&(e.style.width=M+"px",e.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(k*H,$*H).floor()},this.setDrawingBufferSize=function(M,D,F){k=M,$=D,H=F,e.width=Math.floor(M*F),e.height=Math.floor(D*F),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(Mt)},this.setViewport=function(M,D,F,z){M.isVector4?Mt.set(M.x,M.y,M.z,M.w):Mt.set(M,D,F,z),At.viewport(R.copy(Mt).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Ft)},this.setScissor=function(M,D,F,z){M.isVector4?Ft.set(M.x,M.y,M.z,M.w):Ft.set(M,D,F,z),At.scissor(V.copy(Ft).multiplyScalar(H).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(M){At.setScissorTest(te=M)},this.setOpaqueSort=function(M){st=M},this.setTransparentSort=function(M){ht=M},this.getClearColor=function(M){return M.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(M=!0,D=!0,F=!0){let z=0;if(M){let L=!1;if(C!==null){const Q=C.texture.format;L=Q===bo||Q===To||Q===Ao}if(L){const Q=C.texture.type,lt=Q===Bn||Q===Si||Q===As||Q===es||Q===So||Q===yo,pt=Tt.getClearColor(),mt=Tt.getClearAlpha(),Rt=pt.r,Lt=pt.g,gt=pt.b;lt?(g[0]=Rt,g[1]=Lt,g[2]=gt,g[3]=mt,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Rt,_[1]=Lt,_[2]=gt,_[3]=mt,U.clearBufferiv(U.COLOR,0,_))}else z|=U.COLOR_BUFFER_BIT}D&&(z|=U.DEPTH_BUFFER_BIT),F&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ut.dispose(),qt.dispose(),Et.dispose(),v.dispose(),O.dispose(),X.dispose(),ne.dispose(),P.dispose(),vt.dispose(),G.dispose(),G.removeEventListener("sessionstart",Uo),G.removeEventListener("sessionend",No),ai.stop()};function j(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const M=re.autoReset,D=dt.enabled,F=dt.autoUpdate,z=dt.needsUpdate,L=dt.type;it(),re.autoReset=M,dt.enabled=D,dt.autoUpdate=F,dt.needsUpdate=z,dt.type=L}function ot(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Dt(M){const D=M.target;D.removeEventListener("dispose",Dt),ue(D)}function ue(M){Re(M),Et.remove(M)}function Re(M){const D=Et.get(M).programs;D!==void 0&&(D.forEach(function(F){vt.releaseProgram(F)}),M.isShaderMaterial&&vt.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,F,z,L,Q){D===null&&(D=he);const lt=L.isMesh&&L.matrixWorld.determinant()<0,pt=ih(M,D,F,z,L);At.setMaterial(z,lt);let mt=F.index,Rt=1;if(z.wireframe===!0){if(mt=K.getWireframeAttribute(F),mt===void 0)return;Rt=2}const Lt=F.drawRange,gt=F.attributes.position;let jt=Lt.start*Rt,ie=(Lt.start+Lt.count)*Rt;Q!==null&&(jt=Math.max(jt,Q.start*Rt),ie=Math.min(ie,(Q.start+Q.count)*Rt)),mt!==null?(jt=Math.max(jt,0),ie=Math.min(ie,mt.count)):gt!=null&&(jt=Math.max(jt,0),ie=Math.min(ie,gt.count));const ae=ie-jt;if(ae<0||ae===1/0)return;ne.setup(L,z,pt,F,mt);let Be,Zt=ft;if(mt!==null&&(Be=Y.get(mt),Zt=Wt,Zt.setIndex(Be)),L.isMesh)z.wireframe===!0?(At.setLineWidth(z.wireframeLinewidth*me()),Zt.setMode(U.LINES)):Zt.setMode(U.TRIANGLES);else if(L.isLine){let xt=z.linewidth;xt===void 0&&(xt=1),At.setLineWidth(xt*me()),L.isLineSegments?Zt.setMode(U.LINES):L.isLineLoop?Zt.setMode(U.LINE_LOOP):Zt.setMode(U.LINE_STRIP)}else L.isPoints?Zt.setMode(U.POINTS):L.isSprite&&Zt.setMode(U.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Zt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Zt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const xt=L._multiDrawStarts,Rn=L._multiDrawCounts,Kt=L._multiDrawCount,sn=mt?Y.get(mt).bytesPerElement:1,bi=Et.get(z).currentProgram.getUniforms();for(let qe=0;qe<Kt;qe++)bi.setValue(U,"_gl_DrawID",qe),Zt.render(xt[qe]/sn,Rn[qe])}else if(L.isInstancedMesh)Zt.renderInstances(jt,ae,L.count);else if(F.isInstancedBufferGeometry){const xt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Rn=Math.min(F.instanceCount,xt);Zt.renderInstances(jt,ae,Rn)}else Zt.render(jt,ae)};function $t(M,D,F){M.transparent===!0&&M.side===un&&M.forceSinglePass===!1?(M.side=We,M.needsUpdate=!0,Ds(M,D,F),M.side=ri,M.needsUpdate=!0,Ds(M,D,F),M.side=un):Ds(M,D,F)}this.compile=function(M,D,F=null){F===null&&(F=M),d=qt.get(F),d.init(D),A.push(d),F.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),M!==F&&M.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),d.setupLights();const z=new Set;return M.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const Q=L.material;if(Q)if(Array.isArray(Q))for(let lt=0;lt<Q.length;lt++){const pt=Q[lt];$t(pt,F,L),z.add(pt)}else $t(Q,F,L),z.add(Q)}),A.pop(),d=null,z},this.compileAsync=function(M,D,F=null){const z=this.compile(M,D,F);return new Promise(L=>{function Q(){if(z.forEach(function(lt){Et.get(lt).currentProgram.isReady()&&z.delete(lt)}),z.size===0){L(M);return}setTimeout(Q,10)}Ht.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let nn=null;function wn(M){nn&&nn(M)}function Uo(){ai.stop()}function No(){ai.start()}const ai=new Nc;ai.setAnimationLoop(wn),typeof self!="undefined"&&ai.setContext(self),this.setAnimationLoop=function(M){nn=M,G.setAnimationLoop(M),M===null?ai.stop():ai.start()},G.addEventListener("sessionstart",Uo),G.addEventListener("sessionend",No),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(D),D=G.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,D,C),d=qt.get(M,A.length),d.init(D),A.push(d),bt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(bt),_t=this.localClippingEnabled,tt=J.init(this.clippingPlanes,_t),m=ut.get(M,E.length),m.init(),E.push(m),G.enabled===!0&&G.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&Ir(Q,D,-1/0,S.sortObjects)}Ir(M,D,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(st,ht),Xt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Xt&&Tt.addToRenderList(m,M),this.info.render.frame++,tt===!0&&J.beginShadows();const F=d.state.shadowsArray;dt.render(F,M,D),tt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,L=m.transmissive;if(d.setupLights(),D.isArrayCamera){const Q=D.cameras;if(L.length>0)for(let lt=0,pt=Q.length;lt<pt;lt++){const mt=Q[lt];Fo(z,L,M,mt)}Xt&&Tt.render(M);for(let lt=0,pt=Q.length;lt<pt;lt++){const mt=Q[lt];Oo(m,M,mt,mt.viewport)}}else L.length>0&&Fo(z,L,M,D),Xt&&Tt.render(M),Oo(m,M,D);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(S,M,D),ne.resetDefaultState(),y=-1,x=null,A.pop(),A.length>0?(d=A[A.length-1],tt===!0&&J.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Ir(M,D,F,z){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){z&&zt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(bt);const lt=X.update(M),pt=M.material;pt.visible&&m.push(M,lt,pt,F,zt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||q.intersectsObject(M))){const lt=X.update(M),pt=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),zt.copy(M.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),zt.copy(lt.boundingSphere.center)),zt.applyMatrix4(M.matrixWorld).applyMatrix4(bt)),Array.isArray(pt)){const mt=lt.groups;for(let Rt=0,Lt=mt.length;Rt<Lt;Rt++){const gt=mt[Rt],jt=pt[gt.materialIndex];jt&&jt.visible&&m.push(M,lt,jt,F,zt.z,gt)}}else pt.visible&&m.push(M,lt,pt,F,zt.z,null)}}const Q=M.children;for(let lt=0,pt=Q.length;lt<pt;lt++)Ir(Q[lt],D,F,z)}function Oo(M,D,F,z){const L=M.opaque,Q=M.transmissive,lt=M.transparent;d.setupLightsView(F),tt===!0&&J.setGlobalState(S.clippingPlanes,F),z&&At.viewport(R.copy(z)),L.length>0&&Ps(L,D,F),Q.length>0&&Ps(Q,D,F),lt.length>0&&Ps(lt,D,F),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Fo(M,D,F,z){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new yi(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?Rs:Bn,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const Q=d.state.transmissionRenderTarget[z.id],lt=z.viewport||R;Q.setSize(lt.z,lt.w);const pt=S.getRenderTarget();S.setRenderTarget(Q),S.getClearColor(W),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear(),Xt&&Tt.render(F);const mt=S.toneMapping;S.toneMapping=ni;const Rt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),tt===!0&&J.setGlobalState(S.clippingPlanes,z),Ps(M,F,z),T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let gt=0,jt=D.length;gt<jt;gt++){const ie=D[gt],ae=ie.object,Be=ie.geometry,Zt=ie.material,xt=ie.group;if(Zt.side===un&&ae.layers.test(z.layers)){const Rn=Zt.side;Zt.side=We,Zt.needsUpdate=!0,zo(ae,F,z,Be,Zt,xt),Zt.side=Rn,Zt.needsUpdate=!0,Lt=!0}}Lt===!0&&(T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q))}S.setRenderTarget(pt),S.setClearColor(W,Z),Rt!==void 0&&(z.viewport=Rt),S.toneMapping=mt}function Ps(M,D,F){const z=D.isScene===!0?D.overrideMaterial:null;for(let L=0,Q=M.length;L<Q;L++){const lt=M[L],pt=lt.object,mt=lt.geometry,Rt=z===null?lt.material:z,Lt=lt.group;pt.layers.test(F.layers)&&zo(pt,D,F,mt,Rt,Lt)}}function zo(M,D,F,z,L,Q){M.onBeforeRender(S,D,F,z,L,Q),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),L.onBeforeRender(S,D,F,z,M,Q),L.transparent===!0&&L.side===un&&L.forceSinglePass===!1?(L.side=We,L.needsUpdate=!0,S.renderBufferDirect(F,D,z,L,M,Q),L.side=ri,L.needsUpdate=!0,S.renderBufferDirect(F,D,z,L,M,Q),L.side=un):S.renderBufferDirect(F,D,z,L,M,Q),M.onAfterRender(S,D,F,z,L,Q)}function Ds(M,D,F){D.isScene!==!0&&(D=he);const z=Et.get(M),L=d.state.lights,Q=d.state.shadowsArray,lt=L.state.version,pt=vt.getParameters(M,L.state,Q,D,F),mt=vt.getProgramCacheKey(pt);let Rt=z.programs;z.environment=M.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(M.isMeshStandardMaterial?O:v).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Rt===void 0&&(M.addEventListener("dispose",Dt),Rt=new Map,z.programs=Rt);let Lt=Rt.get(mt);if(Lt!==void 0){if(z.currentProgram===Lt&&z.lightsStateVersion===lt)return Vo(M,pt),Lt}else pt.uniforms=vt.getUniforms(M),M.onBeforeCompile(pt,S),Lt=vt.acquireProgram(pt,mt),Rt.set(mt,Lt),z.uniforms=pt.uniforms;const gt=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(gt.clippingPlanes=J.uniform),Vo(M,pt),z.needsLights=rh(M),z.lightsStateVersion=lt,z.needsLights&&(gt.ambientLightColor.value=L.state.ambient,gt.lightProbe.value=L.state.probe,gt.directionalLights.value=L.state.directional,gt.directionalLightShadows.value=L.state.directionalShadow,gt.spotLights.value=L.state.spot,gt.spotLightShadows.value=L.state.spotShadow,gt.rectAreaLights.value=L.state.rectArea,gt.ltc_1.value=L.state.rectAreaLTC1,gt.ltc_2.value=L.state.rectAreaLTC2,gt.pointLights.value=L.state.point,gt.pointLightShadows.value=L.state.pointShadow,gt.hemisphereLights.value=L.state.hemi,gt.directionalShadowMap.value=L.state.directionalShadowMap,gt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,gt.spotShadowMap.value=L.state.spotShadowMap,gt.spotLightMatrix.value=L.state.spotLightMatrix,gt.spotLightMap.value=L.state.spotLightMap,gt.pointShadowMap.value=L.state.pointShadowMap,gt.pointShadowMatrix.value=L.state.pointShadowMatrix),z.currentProgram=Lt,z.uniformsList=null,Lt}function Bo(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=gr.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function Vo(M,D){const F=Et.get(M);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function ih(M,D,F,z,L){D.isScene!==!0&&(D=he),T.resetTextureUnits();const Q=D.fog,lt=z.isMeshStandardMaterial?D.environment:null,pt=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ss,mt=(z.isMeshStandardMaterial?O:v).get(z.envMap||lt),Rt=z.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Lt=!!F.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),gt=!!F.morphAttributes.position,jt=!!F.morphAttributes.normal,ie=!!F.morphAttributes.color;let ae=ni;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ae=S.toneMapping);const Be=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Zt=Be!==void 0?Be.length:0,xt=Et.get(z),Rn=d.state.lights;if(tt===!0&&(_t===!0||M!==x)){const $e=M===x&&z.id===y;J.setState(z,M,$e)}let Kt=!1;z.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==Rn.state.version||xt.outputColorSpace!==pt||L.isBatchedMesh&&xt.batching===!1||!L.isBatchedMesh&&xt.batching===!0||L.isBatchedMesh&&xt.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&xt.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&xt.instancing===!1||!L.isInstancedMesh&&xt.instancing===!0||L.isSkinnedMesh&&xt.skinning===!1||!L.isSkinnedMesh&&xt.skinning===!0||L.isInstancedMesh&&xt.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&xt.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&xt.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&xt.instancingMorph===!1&&L.morphTexture!==null||xt.envMap!==mt||z.fog===!0&&xt.fog!==Q||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==J.numPlanes||xt.numIntersection!==J.numIntersection)||xt.vertexAlphas!==Rt||xt.vertexTangents!==Lt||xt.morphTargets!==gt||xt.morphNormals!==jt||xt.morphColors!==ie||xt.toneMapping!==ae||xt.morphTargetsCount!==Zt)&&(Kt=!0):(Kt=!0,xt.__version=z.version);let sn=xt.currentProgram;Kt===!0&&(sn=Ds(z,D,L));let bi=!1,qe=!1,os=!1;const oe=sn.getUniforms(),mn=xt.uniforms;if(At.useProgram(sn.program)&&(bi=!0,qe=!0,os=!0),z.id!==y&&(y=z.id,qe=!0),bi||x!==M){At.buffers.depth.getReversed()?(rt.copy(M.projectionMatrix),ou(rt),lu(rt),oe.setValue(U,"projectionMatrix",rt)):oe.setValue(U,"projectionMatrix",M.projectionMatrix),oe.setValue(U,"viewMatrix",M.matrixWorldInverse);const Gn=oe.map.cameraPosition;Gn!==void 0&&Gn.setValue(U,Ct.setFromMatrixPosition(M.matrixWorld)),kt.logarithmicDepthBuffer&&oe.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&oe.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,qe=!0,os=!0)}if(L.isSkinnedMesh){oe.setOptional(U,L,"bindMatrix"),oe.setOptional(U,L,"bindMatrixInverse");const $e=L.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),oe.setValue(U,"boneTexture",$e.boneTexture,T))}L.isBatchedMesh&&(oe.setOptional(U,L,"batchingTexture"),oe.setValue(U,"batchingTexture",L._matricesTexture,T),oe.setOptional(U,L,"batchingIdTexture"),oe.setValue(U,"batchingIdTexture",L._indirectTexture,T),oe.setOptional(U,L,"batchingColorTexture"),L._colorsTexture!==null&&oe.setValue(U,"batchingColorTexture",L._colorsTexture,T));const ls=F.morphAttributes;if((ls.position!==void 0||ls.normal!==void 0||ls.color!==void 0)&&wt.update(L,F,sn),(qe||xt.receiveShadow!==L.receiveShadow)&&(xt.receiveShadow=L.receiveShadow,oe.setValue(U,"receiveShadow",L.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(mn.envMap.value=mt,mn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(mn.envMapIntensity.value=D.environmentIntensity),qe&&(oe.setValue(U,"toneMappingExposure",S.toneMappingExposure),xt.needsLights&&sh(mn,os),Q&&z.fog===!0&&at.refreshFogUniforms(mn,Q),at.refreshMaterialUniforms(mn,z,H,$,d.state.transmissionRenderTarget[M.id]),gr.upload(U,Bo(xt),mn,T)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(gr.upload(U,Bo(xt),mn,T),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&oe.setValue(U,"center",L.center),oe.setValue(U,"modelViewMatrix",L.modelViewMatrix),oe.setValue(U,"normalMatrix",L.normalMatrix),oe.setValue(U,"modelMatrix",L.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const $e=z.uniformsGroups;for(let Gn=0,Hn=$e.length;Gn<Hn;Gn++){const Go=$e[Gn];P.update(Go,sn),P.bind(Go,sn)}}return sn}function sh(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function rh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,D,F){Et.get(M.texture).__webglTexture=D,Et.get(M.depthTexture).__webglTexture=F;const z=Et.get(M);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=F===void 0,z.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){const F=Et.get(M);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,F=0){C=M,w=D,b=F;let z=!0,L=null,Q=!1,lt=!1;if(M){const mt=Et.get(M);if(mt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(U.FRAMEBUFFER,null),z=!1;else if(mt.__webglFramebuffer===void 0)T.setupRenderTarget(M);else if(mt.__hasExternalTextures)T.rebindTextures(M,Et.get(M.texture).__webglTexture,Et.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const gt=M.depthTexture;if(mt.__boundDepthTexture!==gt){if(gt!==null&&Et.has(gt)&&(M.width!==gt.image.width||M.height!==gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(M)}}const Rt=M.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(lt=!0);const Lt=Et.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Lt[D])?L=Lt[D][F]:L=Lt[D],Q=!0):M.samples>0&&T.useMultisampledRTT(M)===!1?L=Et.get(M).__webglMultisampledFramebuffer:Array.isArray(Lt)?L=Lt[F]:L=Lt,R.copy(M.viewport),V.copy(M.scissor),B=M.scissorTest}else R.copy(Mt).multiplyScalar(H).floor(),V.copy(Ft).multiplyScalar(H).floor(),B=te;if(At.bindFramebuffer(U.FRAMEBUFFER,L)&&z&&At.drawBuffers(M,L),At.viewport(R),At.scissor(V),At.setScissorTest(B),Q){const mt=Et.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,mt.__webglTexture,F)}else if(lt){const mt=Et.get(M.texture),Rt=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,mt.__webglTexture,F||0,Rt)}y=-1},this.readRenderTargetPixels=function(M,D,F,z,L,Q,lt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Et.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){At.bindFramebuffer(U.FRAMEBUFFER,pt);try{const mt=M.texture,Rt=mt.format,Lt=mt.type;if(!kt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-z&&F>=0&&F<=M.height-L&&U.readPixels(D,F,z,L,Nt.convert(Rt),Nt.convert(Lt),Q)}finally{const mt=C!==null?Et.get(C).__webglFramebuffer:null;At.bindFramebuffer(U.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(M,D,F,z,L,Q,lt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Et.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){const mt=M.texture,Rt=mt.format,Lt=mt.type;if(!kt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=M.width-z&&F>=0&&F<=M.height-L){At.bindFramebuffer(U.FRAMEBUFFER,pt);const gt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,gt),U.bufferData(U.PIXEL_PACK_BUFFER,Q.byteLength,U.STREAM_READ),U.readPixels(D,F,z,L,Nt.convert(Rt),Nt.convert(Lt),0);const jt=C!==null?Et.get(C).__webglFramebuffer:null;At.bindFramebuffer(U.FRAMEBUFFER,jt);const ie=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await au(U,ie,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,gt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Q),U.deleteBuffer(gt),U.deleteSync(ie),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,D=null,F=0){M.isTexture!==!0&&(xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,M=arguments[1]);const z=Math.pow(2,-F),L=Math.floor(M.image.width*z),Q=Math.floor(M.image.height*z),lt=D!==null?D.x:0,pt=D!==null?D.y:0;T.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,lt,pt,L,Q),At.unbindTexture()},this.copyTextureToTexture=function(M,D,F=null,z=null,L=0){M.isTexture!==!0&&(xs("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,M=arguments[1],D=arguments[2],L=arguments[3]||0,F=null);let Q,lt,pt,mt,Rt,Lt,gt,jt,ie;const ae=M.isCompressedTexture?M.mipmaps[L]:M.image;F!==null?(Q=F.max.x-F.min.x,lt=F.max.y-F.min.y,pt=F.isBox3?F.max.z-F.min.z:1,mt=F.min.x,Rt=F.min.y,Lt=F.isBox3?F.min.z:0):(Q=ae.width,lt=ae.height,pt=ae.depth||1,mt=0,Rt=0,Lt=0),z!==null?(gt=z.x,jt=z.y,ie=z.z):(gt=0,jt=0,ie=0);const Be=Nt.convert(D.format),Zt=Nt.convert(D.type);let xt;D.isData3DTexture?(T.setTexture3D(D,0),xt=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(T.setTexture2DArray(D,0),xt=U.TEXTURE_2D_ARRAY):(T.setTexture2D(D,0),xt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Rn=U.getParameter(U.UNPACK_ROW_LENGTH),Kt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),sn=U.getParameter(U.UNPACK_SKIP_PIXELS),bi=U.getParameter(U.UNPACK_SKIP_ROWS),qe=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ae.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,mt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Rt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Lt);const os=M.isDataArrayTexture||M.isData3DTexture,oe=D.isDataArrayTexture||D.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const mn=Et.get(M),ls=Et.get(D),$e=Et.get(mn.__renderTarget),Gn=Et.get(ls.__renderTarget);At.bindFramebuffer(U.READ_FRAMEBUFFER,$e.__webglFramebuffer),At.bindFramebuffer(U.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let Hn=0;Hn<pt;Hn++)os&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Et.get(M).__webglTexture,L,Lt+Hn),M.isDepthTexture?(oe&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Et.get(D).__webglTexture,L,ie+Hn),U.blitFramebuffer(mt,Rt,Q,lt,gt,jt,Q,lt,U.DEPTH_BUFFER_BIT,U.NEAREST)):oe?U.copyTexSubImage3D(xt,L,gt,jt,ie+Hn,mt,Rt,Q,lt):U.copyTexSubImage2D(xt,L,gt,jt,ie+Hn,mt,Rt,Q,lt);At.bindFramebuffer(U.READ_FRAMEBUFFER,null),At.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else oe?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(xt,L,gt,jt,ie,Q,lt,pt,Be,Zt,ae.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(xt,L,gt,jt,ie,Q,lt,pt,Be,ae.data):U.texSubImage3D(xt,L,gt,jt,ie,Q,lt,pt,Be,Zt,ae):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,L,gt,jt,Q,lt,Be,Zt,ae.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,L,gt,jt,ae.width,ae.height,Be,ae.data):U.texSubImage2D(U.TEXTURE_2D,L,gt,jt,Q,lt,Be,Zt,ae);U.pixelStorei(U.UNPACK_ROW_LENGTH,Rn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Kt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,sn),U.pixelStorei(U.UNPACK_SKIP_ROWS,bi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,qe),L===0&&D.generateMipmaps&&U.generateMipmap(xt),At.unbindTexture()},this.copyTextureToTexture3D=function(M,D,F=null,z=null,L=0){return M.isTexture!==!0&&(xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,z=arguments[1]||null,M=arguments[2],D=arguments[3],L=arguments[4]||0),xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,D,F,z,L)},this.initRenderTarget=function(M){Et.get(M).__webglFramebuffer===void 0&&T.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),At.unbindTexture()},this.resetState=function(){w=0,b=0,C=null,At.reset(),ne.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class Co{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new Co(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xg extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Mg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=to,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new I;class Sr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Se(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Sr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class pn extends Ti{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Gi;const fs=new I,Hi=new I,ki=new I,Wi=new Pt,ps=new Pt,Hc=new ee,er=new I,ms=new I,nr=new I,Wl=new Pt,ha=new Pt,Xl=new Pt;class Sn extends xe{constructor(t=new pn){if(super(),this.isSprite=!0,this.type="Sprite",Gi===void 0){Gi=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Mg(e,5);Gi.setIndex([0,1,2,0,2,3]),Gi.setAttribute("position",new Sr(n,3,0,!1)),Gi.setAttribute("uv",new Sr(n,2,3,!1))}this.geometry=Gi,this.material=t,this.center=new Pt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),Hc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-ki.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;ir(er.set(-.5,-.5,0),ki,a,Hi,s,r),ir(ms.set(.5,-.5,0),ki,a,Hi,s,r),ir(nr.set(.5,.5,0),ki,a,Hi,s,r),Wl.set(0,0),ha.set(1,0),Xl.set(1,1);let o=t.ray.intersectTriangle(er,ms,nr,!1,fs);if(o===null&&(ir(ms.set(-.5,.5,0),ki,a,Hi,s,r),ha.set(0,1),o=t.ray.intersectTriangle(er,nr,ms,!1,fs),o===null))return;const l=t.ray.origin.distanceTo(fs);l<t.near||l>t.far||e.push({distance:l,point:fs.clone(),uv:en.getInterpolation(fs,er,ms,nr,Wl,ha,Xl,new Pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ir(i,t,e,n,s,r){Wi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ps.x=r*Wi.x-s*Wi.y,ps.y=s*Wi.x+r*Wi.y):ps.copy(Wi),i.copy(t),i.x+=ps.x,i.y+=ps.y,i.applyMatrix4(Hc)}class Sg extends Ie{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Xe,h=Xe,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ql extends Se{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xi=new ee,Yl=new ee,sr=[],jl=new Ai,yg=new ee,gs=new Gt,_s=new En;class so extends Gt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ql(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),jl.copy(t.boundingBox).applyMatrix4(Xi),this.boundingBox.union(jl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new En),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),_s.copy(t.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(_s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(n),t.ray.intersectsSphere(_s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xi),Yl.multiplyMatrices(n,Xi),gs.matrixWorld=Yl,gs.raycast(t,sr);for(let a=0,o=sr.length;a<o;a++){const l=sr[a];l.instanceId=r,l.object=this,e.push(l)}sr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ql(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sg(new Float32Array(s*this.count),s,this.count,Eo,xn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class wr extends Ti{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Zl=new ee,ro=new wc,rr=new En,ar=new I;class Rr extends xe{constructor(t=new we,e=new wr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(s),rr.radius+=r,t.ray.intersectsSphere(rr)===!1)return;Zl.copy(s).invert(),ro.copy(t.ray).applyMatrix4(Zl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);ar.fromBufferAttribute(u,m),Kl(ar,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,_=p;g<_;g++)ar.fromBufferAttribute(u,g),Kl(ar,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Kl(i,t,e,n,s,r,a){const o=ro.distanceSqToPoint(i);if(o<e){const l=new I;ro.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Eg extends Ie{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Po extends we{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;E(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(p,2));function E(){const S=new I,N=new I;let w=0;const b=(e-t)/n;for(let C=0;C<=r;C++){const y=[],x=C/r,R=x*(e-t)+t;for(let V=0;V<=s;V++){const B=V/s,W=B*l+o,Z=Math.sin(W),k=Math.cos(W);N.x=R*Z,N.y=-x*n+m,N.z=R*k,u.push(N.x,N.y,N.z),S.set(Z,b,k).normalize(),f.push(S.x,S.y,S.z),p.push(B,1-x),y.push(g++)}_.push(y)}for(let C=0;C<s;C++)for(let y=0;y<r;y++){const x=_[y][C],R=_[y+1][C],V=_[y+1][C+1],B=_[y][C+1];(t>0||y!==0)&&(h.push(x,R,B),w+=3),(e>0||y!==r-1)&&(h.push(R,V,B),w+=3)}c.addGroup(d,w,0),d+=w}function A(S){const N=g,w=new Pt,b=new I;let C=0;const y=S===!0?t:e,x=S===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),g++;const R=g;for(let V=0;V<=s;V++){const W=V/s*l+o,Z=Math.cos(W),k=Math.sin(W);b.x=y*k,b.y=m*x,b.z=y*Z,u.push(b.x,b.y,b.z),f.push(0,x,0),w.x=Z*.5+.5,w.y=k*.5*x+.5,p.push(w.x,w.y),g++}for(let V=0;V<s;V++){const B=N+V,W=R+V;S===!0?h.push(W,W+1,B):h.push(W+1,W,B),C+=3}c.addGroup(d,C,S===!0?1:2),d+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Po(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Do extends Po{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Do(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cr extends we{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const A=new I,S=new I,N=new I;for(let w=0;w<e.length;w+=3)p(e[w+0],A),p(e[w+1],S),p(e[w+2],N),l(A,S,N,E)}function l(E,A,S,N){const w=N+1,b=[];for(let C=0;C<=w;C++){b[C]=[];const y=E.clone().lerp(S,C/w),x=A.clone().lerp(S,C/w),R=w-C;for(let V=0;V<=R;V++)V===0&&C===w?b[C][V]=y:b[C][V]=y.clone().lerp(x,V/R)}for(let C=0;C<w;C++)for(let y=0;y<2*(w-C)-1;y++){const x=Math.floor(y/2);y%2===0?(f(b[C][x+1]),f(b[C+1][x]),f(b[C][x])):(f(b[C][x+1]),f(b[C+1][x+1]),f(b[C+1][x]))}}function c(E){const A=new I;for(let S=0;S<r.length;S+=3)A.x=r[S+0],A.y=r[S+1],A.z=r[S+2],A.normalize().multiplyScalar(E),r[S+0]=A.x,r[S+1]=A.y,r[S+2]=A.z}function h(){const E=new I;for(let A=0;A<r.length;A+=3){E.x=r[A+0],E.y=r[A+1],E.z=r[A+2];const S=m(E)/2/Math.PI+.5,N=d(E)/Math.PI+.5;a.push(S,1-N)}g(),u()}function u(){for(let E=0;E<a.length;E+=6){const A=a[E+0],S=a[E+2],N=a[E+4],w=Math.max(A,S,N),b=Math.min(A,S,N);w>.9&&b<.1&&(A<.2&&(a[E+0]+=1),S<.2&&(a[E+2]+=1),N<.2&&(a[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function p(E,A){const S=E*3;A.x=t[S+0],A.y=t[S+1],A.z=t[S+2]}function g(){const E=new I,A=new I,S=new I,N=new I,w=new Pt,b=new Pt,C=new Pt;for(let y=0,x=0;y<r.length;y+=9,x+=6){E.set(r[y+0],r[y+1],r[y+2]),A.set(r[y+3],r[y+4],r[y+5]),S.set(r[y+6],r[y+7],r[y+8]),w.set(a[x+0],a[x+1]),b.set(a[x+2],a[x+3]),C.set(a[x+4],a[x+5]),N.copy(E).add(A).add(S).divideScalar(3);const R=m(N);_(w,x+0,E,R),_(b,x+2,A,R),_(C,x+4,S,R)}}function _(E,A,S,N){N<0&&E.x===1&&(a[A]=E.x-1),S.x===0&&S.z===0&&(a[A]=N/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.vertices,t.indices,t.radius,t.details)}}class Pr extends Cr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Pr(t.radius,t.detail)}}class Dr extends Cr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Dr(t.radius,t.detail)}}class Lo extends we{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,p=new I,g=new Pt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const d=r+m/n*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let d=0;d<n;d++){const E=d+m,A=E,S=E+n+1,N=E+n+2,w=E+1;o.push(A,S,w),o.push(S,N,w)}}this.setIndex(o),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ei extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,f=new I,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const E=[],A=d/n;let S=0;d===0&&a===0?S=.5/e:d===n&&l===Math.PI&&(S=-.5/e);for(let N=0;N<=e;N++){const w=N/e;u.x=-t*Math.cos(s+w*r)*Math.sin(a+A*o),u.y=t*Math.cos(a+A*o),u.z=t*Math.sin(s+w*r)*Math.sin(a+A*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(w+S,1-A),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){const A=h[d][E+1],S=h[d][E],N=h[d+1][E],w=h[d+1][E+1];(d!==0||a>0)&&p.push(A,S,w),(d!==n-1||l<Math.PI)&&p.push(S,N,w)}this.setIndex(p),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Lr extends we{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new I,u=new I,f=new I;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,E=(s+1)*p+g;a.push(_,m,E),a.push(m,d,E)}this.setIndex(a),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class si extends Ti{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kc extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ua=new ee,$l=new I,Jl=new I;class Ag{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wo,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;$l.setFromMatrixPosition(t.matrixWorld),e.position.copy($l),Jl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jl),e.updateMatrixWorld(),ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Tg extends Ag{constructor(){super(new Oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bg extends kc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new Tg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class wg extends kc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vo);const or=document.getElementById("palco"),vs=document.getElementById("cena");class Rg{constructor(){this.indiceResolucao=1,this.renderer=null,this.suportado=!1,this.webgl2=!1,this.aoPerderContexto=null,this.aoRecuperarContexto=null}iniciar(t){this.indiceResolucao=t;try{const e=vs.getContext("webgl2",{antialias:!1,alpha:!1})||vs.getContext("webgl",{antialias:!1,alpha:!1});if(!e)return!1;this.webgl2=typeof WebGL2RenderingContext!="undefined"&&e instanceof WebGL2RenderingContext,this.renderer=new vg({canvas:vs,context:e,antialias:!1,alpha:!1,depth:!0,stencil:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1}),this.renderer.setPixelRatio(1),this.renderer.autoClear=!0,this.renderer.sortObjects=!0,"outputColorSpace"in this.renderer&&(this.renderer.outputColorSpace=Ve),this.renderer.setClearColor(131850,1),this.suportado=!0}catch{return this.suportado=!1,!1}return vs.addEventListener("webglcontextlost",e=>{e.preventDefault(),this.aoPerderContexto&&this.aoPerderContexto()},!1),vs.addEventListener("webglcontextrestored",()=>{this.aplicarResolucao(),this.aoRecuperarContexto&&this.aoRecuperarContexto()},!1),this.aplicarResolucao(),window.addEventListener("resize",()=>this.ajustarLayout()),window.addEventListener("orientationchange",()=>{setTimeout(()=>this.ajustarLayout(),120)}),!0}get resolucao(){return Mi[this.indiceResolucao]}setResolucao(t){const e=Math.max(0,Math.min(Mi.length-1,t));return e===this.indiceResolucao?!1:(this.indiceResolucao=e,this.aplicarResolucao(),!0)}aplicarResolucao(){if(!this.renderer)return;const{largura:t,altura:e}=this.resolucao;this.renderer.setSize(t,e,!1),this.ajustarLayout()}ajustarLayout(){const{largura:t,altura:e}=this.resolucao,n=window.innerWidth,s=window.innerHeight,r=Math.min(n/t,s/e),a=r>=1?Math.floor(r):r,o=Math.round(t*a),l=Math.round(e*a);or.style.width=o+"px",or.style.height=l+"px",or.style.left=Math.round((n-o)/2)+"px",or.style.top=Math.round((s-l)/2)+"px",document.documentElement.style.setProperty("--u",(l/100).toFixed(3)+"px")}render(t,e){this.renderer.render(t,e)}estatisticas(){const t=this.renderer.info;return{chamadas:t.render.calls,triangulos:t.render.triangles,texturas:t.memory.textures,geometrias:t.memory.geometries}}dispose(){this.renderer&&this.renderer.dispose()}}const Ql=document.getElementById("fps"),da=document.getElementById("aviso-qualidade");class Cg{constructor(t){this.renderizador=t,this.quadros=0,this.acumulado=0,this.fps=60,this.segundosAbaixoAmarelo=0,this.segundosAbaixoVermelho=0,this.mostrarFps=!1,this.escalaParticulas=Ls[t.indiceResolucao],this.aoDegradar=null,this.manual=!1,this.tempoAviso=0}atualizar(t){this.quadros++,this.acumulado+=t,this.acumulado>=1&&(this.fps=this.quadros/this.acumulado,this.quadros=0,this.acumulado=0,this.manual||this.avaliar(),this.mostrarFps&&this.desenharContador()),this.tempoAviso>0&&(this.tempoAviso-=t,this.tempoAviso<=0&&da.classList.remove("visivel"))}avaliar(){const t=this.renderizador.indiceResolucao,e=Mi.length-1;if(this.fps<Is.limiteVermelho)this.segundosAbaixoVermelho+=1,this.segundosAbaixoAmarelo+=1;else if(this.fps<Is.limiteAmarelo)this.segundosAbaixoVermelho=0,this.segundosAbaixoAmarelo+=1;else{this.segundosAbaixoVermelho=0,this.segundosAbaixoAmarelo=0;return}if(t>=e)return;const n=this.segundosAbaixoVermelho>=Is.tempoVermelho,s=this.segundosAbaixoAmarelo>=Is.tempoAmarelo;if(!n&&!s)return;const a=Math.min(e,t+(n?2:1));this.renderizador.setResolucao(a)&&(this.escalaParticulas=Ls[a],this.segundosAbaixoAmarelo=0,this.segundosAbaixoVermelho=0,this.aoDegradar&&this.aoDegradar(a,this.escalaParticulas),this.avisar("QUALIDADE AJUSTADA: "+Mi[a].rotulo))}aplicarManual(t){this.manual=!0,this.renderizador.setResolucao(t)?(this.escalaParticulas=Ls[t],this.aoDegradar&&this.aoDegradar(t,this.escalaParticulas)):this.escalaParticulas=Ls[t],this.segundosAbaixoAmarelo=0,this.segundosAbaixoVermelho=0}avisar(t){da.textContent=t,da.classList.add("visivel"),this.tempoAviso=3.2}alternarContador(){this.mostrarFps=!this.mostrarFps,Ql.classList.toggle("oculto",!this.mostrarFps),this.mostrarFps&&this.desenharContador()}desenharContador(){const t=this.renderizador.estatisticas(),e=this.renderizador.resolucao;Ql.textContent=this.fps.toFixed(0)+" FPS  "+e.largura+"x"+e.altura+`
draw `+t.chamadas+"  tri "+(t.triangulos/1e3).toFixed(1)+`k
tex `+t.texturas+"  geo "+t.geometrias+"  "+(this.renderizador.webgl2?"GL2":"GL1")}}const Wc="senai-arcade",Xc=1,qc="stardust-runner",Pg=1e6;function Dg(){try{return window.parent!==window}catch{return!0}}const hn=typeof window!="undefined"&&Dg(),tc={left:"esquerda",right:"direita",up:"pular",down:"deslizar",action2:"deslizar",confirm:"confirmar",action1:"confirmar",start:"confirmar",back:"sair"};function Lg(i){return Object.prototype.hasOwnProperty.call(tc,i)?tc[i]:null}function Ig(i,t){return i==="pular"&&(t==="attract"||t==="fim")?"confirmar":i==="confirmar"&&t==="jogando"?"pular":i}function Ug(i){if(!i||typeof i!="object"||i.protocol!==Wc||i.version!==Xc||i.type!=="input")return null;const t=i.payload;return!t||typeof t!="object"||t.player!==1&&t.player!==2||t.phase!=="pressed"&&t.phase!=="released"||typeof t.action!="string"?null:{jogador:t.player,acao:t.action,fase:t.phase}}function Io(i,t){hn&&window.parent.postMessage({protocol:Wc,version:Xc,type:i,payload:t},window.location.origin)}function ec(){Io("ready",{gameId:qc})}function Ng(i="user-request"){Io("exit",{reason:i})}function Og(i){const t=Math.max(0,Math.min(Pg,Math.round(Number(i)||0)));Io("score",{gameId:qc,scores:[{player:1,value:t}]})}function Fg(i){const t=e=>{if(e.origin!==window.location.origin||e.source!==window.parent)return;const n=Ug(e.data);if(!n||n.fase!=="pressed")return;const s=Lg(n.acao);s&&i(s)};return window.addEventListener("message",t),()=>window.removeEventListener("message",t)}const zg={ArrowLeft:"esquerda",KeyA:"esquerda",ArrowRight:"direita",KeyD:"direita",ArrowUp:"pular",KeyW:"pular",Space:"pular",ArrowDown:"deslizar",KeyS:"deslizar",Enter:"confirmar",NumpadEnter:"confirmar",Escape:"voltar",KeyP:"pausa",KeyM:"mudo",KeyC:"config",KeyF:"telaCheia",F3:"fps"},Bg=new Set(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space","Enter","F3"]),ao=new Set;let Qn=0,Yc=!1,yr=!1;const oo=[];function Kn(i,t){if(Qn=performance.now(),!yr){yr=!0;for(const e of oo)try{e()}catch{}oo.length=0}for(const e of ao)e(i,t)}function Vg(){window.addEventListener("keydown",c=>{if(c.code==="F3"&&c.preventDefault(),Yc){c.code==="Enter"||c.code==="NumpadEnter"?Kn("confirmar","teclado"):c.code==="Escape"?Kn("voltar","teclado"):c.code==="Tab"?(c.preventDefault(),Kn("proximaSugestao","teclado")):Qn=performance.now();return}const h=zg[c.code];if(Bg.has(c.code)&&c.preventDefault(),!h){Qn=performance.now();return}c.repeat&&(h==="pular"||h==="confirmar")||Kn(h,"teclado")},{passive:!1});const i=26;let t=0,e=0,n=0,s=!1,r=!1;function a(c,h){t=c,e=h,n=performance.now(),s=!0,r=!1,Qn=n}function o(c,h){if(!s||r)return;const u=c-t,f=h-e;Math.abs(u)<i&&Math.abs(f)<i||(r=!0,Math.abs(u)>Math.abs(f)?Kn(u>0?"direita":"esquerda","toque"):Kn(f>0?"deslizar":"pular","toque"))}function l(){s&&!r&&performance.now()-n<450&&Kn("confirmar","toque"),s=!1}window.addEventListener("touchstart",c=>{const h=c.changedTouches[0];a(h.clientX,h.clientY)},{passive:!0}),window.addEventListener("touchmove",c=>{const h=c.changedTouches[0];o(h.clientX,h.clientY)},{passive:!0}),window.addEventListener("touchend",l,{passive:!0}),window.addEventListener("touchcancel",()=>{s=!1},{passive:!0}),window.addEventListener("pointerdown",c=>{if(c.pointerType!=="touch"){if(c.target&&c.target.tagName==="INPUT"){Qn=performance.now();return}if(c.target&&c.target.classList&&c.target.classList.contains("sugestao")){Qn=performance.now();return}a(c.clientX,c.clientY)}}),window.addEventListener("pointermove",c=>{c.pointerType!=="touch"&&c.buttons!==0&&o(c.clientX,c.clientY)}),window.addEventListener("pointerup",c=>{c.pointerType!=="touch"&&l()}),window.addEventListener("contextmenu",c=>c.preventDefault())}hn?Fg(i=>Kn(i,"arcade")):Vg();const ln={aoAgir(i){return ao.add(i),()=>ao.delete(i)},ociosoSegundos(){return(performance.now()-Qn)/1e3},marcarAtividade(){Qn=performance.now()},setCapturaTexto(i){Yc=!!i},noPrimeiroGesto(i){yr?i():oo.push(i)},get houveGesto(){return yr}};function Gg(){const i=document.documentElement,t=document.fullscreenElement||document.webkitFullscreenElement;try{t?(document.exitFullscreen||document.webkitExitFullscreen).call(document):(i.requestFullscreen||i.webkitRequestFullscreen).call(i)}catch{}}const jc="stardust-runner/v1",lo={volume:.7,mudo:!1,scanlines:!0,tremor:!0,movimentoReduzido:!1,qualidade:ah,qualidadeManual:!1,apelido:"",recorde:0,recordeApelido:"",recordeDistancia:0};let Mn={...lo};function Hg(){try{const i=localStorage.getItem(jc);if(!i)return;const t=JSON.parse(i);if(t&&typeof t=="object")for(const e of Object.keys(lo))e in t&&typeof t[e]==typeof lo[e]&&(Mn[e]=t[e])}catch{}}function co(){try{localStorage.setItem(jc,JSON.stringify(Mn))}catch{}}Hg();const Bt={get(i){return Mn[i]},set(i,t){Mn[i]=t,co()},merge(i){Object.assign(Mn,i),co()},tudo(){return{...Mn}}};function kg(i,t,e){return t>Mn.recorde?(Mn.recorde=t,Mn.recordeApelido=i,Mn.recordeDistancia=Math.round(e),co(),!0):!1}const Wg=25,Xg=.12,fa=16,pa={nome:"jogo",bpm:100,ganho:.52,progressao:[{raiz:45,triade:[57,60,64]},{raiz:41,triade:[53,57,60]},{raiz:48,triade:[52,55,60]},{raiz:43,triade:[55,59,62]}],kick:[1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],caixa:[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],hat:[0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0],baixo:[1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0]},nc=[69,72,74,76,79,81,84];function qi(i){return 440*Math.pow(2,(i-69)/12)}class qg{constructor(){this.ctx=null,this.pronto=!1,this.mudo=!1,this.volume=.7,this.atenuacao=1,this.offline=!1,this.intensidade="off",this.trilha=pa,this.passoAtual=0,this.ultimaColeta=0,this.proximoTempo=0,this.timer=null,this.pulso=0,this.pulsoGrave=0,this.ruido=null}iniciar(t){if(this.pronto)return!0;if(this.offline=!!t,t)this.ctx=t;else{const e=window.AudioContext||window.webkitAudioContext;if(!e)return!1;try{this.ctx=new e({latencyHint:"interactive"})}catch{return!1}}return this.mestre=this.ctx.createGain(),this.mestre.gain.value=this.mudo?0:this.volume*this.atenuacao,this.mestre.connect(this.ctx.destination),this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.value=-14,this.compressor.ratio.value=4,this.compressor.attack.value=.004,this.compressor.release.value=.22,this.compressor.connect(this.mestre),this.ganhoMusica=this.ctx.createGain(),this.ganhoMusica.gain.value=0,this.ganhoMusica.connect(this.compressor),this.ganhoSfx=this.ctx.createGain(),this.ganhoSfx.gain.value=.85,this.ganhoSfx.connect(this.compressor),this.eco=this.ctx.createDelay(.6),this.eco.delayTime.value=3*(60/pa.bpm/4),this.ecoRetorno=this.ctx.createGain(),this.ecoRetorno.gain.value=.32,this.ecoFiltro=this.ctx.createBiquadFilter(),this.ecoFiltro.type="lowpass",this.ecoFiltro.frequency.value=2200,this.eco.connect(this.ecoFiltro),this.ecoFiltro.connect(this.ecoRetorno),this.ecoRetorno.connect(this.eco),this.eco.connect(this.compressor),this.ruido=this.criarRuido(),this.pronto=!0,t||(this.ctx.onstatechange=()=>{this.ctx.state==="running"&&this.intensidade!=="off"&&(this.proximoTempo=this.ctx.currentTime+.06,this.ligarSequenciador())},this.retomar()),!0}criarRuido(){const t=Math.floor(this.ctx.sampleRate*1),e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);for(let s=0;s<t;s++)n[s]=Math.random()*2-1;return e}retomar(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}suspender(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend().catch(()=>{})}setVolume(t){this.volume=Math.max(0,Math.min(1,t)),this.aplicarGanhoMestre(.02)}setMudo(t){this.mudo=!!t,this.aplicarGanhoMestre(.02)}get bloqueado(){return this.pronto&&!this.mudo&&this.ctx.state!=="running"}setAtenuacao(t){const e=Math.max(0,Math.min(1,t));e!==this.atenuacao&&(this.atenuacao=e,this.aplicarGanhoMestre(.25))}aplicarGanhoMestre(t){if(!this.mestre)return;const e=this.mudo?0:this.volume*this.atenuacao;this.mestre.gain.setTargetAtTime(e,this.ctx.currentTime,t||.05)}diagnostico(){return{pronto:this.pronto,contexto:this.ctx?this.ctx.state:"inexistente",intensidade:this.intensidade,trilha:this.trilha?this.trilha.nome:null,volume:this.volume,atenuacao:this.atenuacao,mudo:this.mudo,nivel:this.medirNivel()}}medirNivel(){if(!this.pronto)return 0;this.analisador||(this.analisador=this.ctx.createAnalyser(),this.analisador.fftSize=1024,this.mestre.connect(this.analisador),this.amostras=new Float32Array(this.analisador.fftSize)),this.analisador.getFloatTimeDomainData(this.amostras);let t=0;for(let e=0;e<this.amostras.length;e++)t+=this.amostras[e]*this.amostras[e];return Number(Math.sqrt(t/this.amostras.length).toFixed(5))}setIntensidade(t){if(this.intensidade===t||(this.intensidade=t,!this.pronto))return;const e=t==="off"?0:pa.ganho;this.ganhoMusica.gain.setTargetAtTime(e,this.ctx.currentTime,.4),t!=="off"&&this.ligarSequenciador()}get passo(){return 60/this.trilha.bpm/4}ligarSequenciador(){this.timer||this.ctx.state==="running"&&(this.proximoTempo=this.ctx.currentTime+.06,this.timer=setInterval(()=>this.agendar(),Wg))}desligarSequenciador(){this.timer&&(clearInterval(this.timer),this.timer=null)}atualizar(t){this.pulso=Math.max(0,this.pulso-t*4.2),this.pulsoGrave=Math.max(0,this.pulsoGrave-t*2.4)}agendar(){if(!this.pronto||this.intensidade==="off")return;const t=this.ctx.currentTime,e=this.passo;for(;this.proximoTempo<t+Xg;)this.tocarPasso(this.passoAtual,this.proximoTempo,e),this.proximoTempo+=e,this.passoAtual=(this.passoAtual+1)%(fa*4)}tocarPasso(t,e,n){const s=this.trilha,r=Math.floor(t/fa),a=t%fa,o=s.progressao[r%s.progressao.length];if(s.kick[a]&&(this.kick(e,1),this.agendarPulso(e)),s.caixa[a]&&this.caixa(e,.18),s.hat[a]&&this.hat(e,a%4===0?.26:.13),s.baixo[a]){const l=a===7||a===14?12:0,c=a===4||a===12?7:0;this.baixo(qi(o.raiz+l+c),e,n*1.6,.42)}if(a===0&&this.pad(o.triade,e,n*16),a===2||a===10||a===6&&r%2===1){const l=nc[(t*7+r*3)%nc.length];this.lead(qi(l),e,n*2.2,.16)}}agendarPulso(t){const e=Math.max(0,(t-this.ctx.currentTime)*1e3);setTimeout(()=>{this.pulso=1,this.pulsoGrave=1},e)}kick(t,e){const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(140,t),n.frequency.exponentialRampToValueAtTime(42,t+.11),s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(e,t+.004),s.gain.exponentialRampToValueAtTime(1e-4,t+.24),n.connect(s),s.connect(this.ganhoMusica),n.start(t),n.stop(t+.26)}hat(t,e){const n=this.ctx.createBufferSource();n.buffer=this.ruido,n.playbackRate.value=1.6;const s=this.ctx.createBiquadFilter();s.type="highpass",s.frequency.value=7200;const r=this.ctx.createGain();r.gain.setValueAtTime(e,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.05),n.connect(s),s.connect(r),r.connect(this.ganhoMusica),n.start(t,Math.random()*.4,.08)}caixa(t,e){const n=this.ctx.createBufferSource();n.buffer=this.ruido;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.value=1900,s.Q.value=.9;const r=this.ctx.createGain();r.gain.setValueAtTime(e,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.13),n.connect(s),s.connect(r),r.connect(this.ganhoMusica),n.start(t,Math.random()*.3,.16);const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="triangle",a.frequency.setValueAtTime(220,t),a.frequency.exponentialRampToValueAtTime(140,t+.08),o.gain.setValueAtTime(e*.5,t),o.gain.exponentialRampToValueAtTime(1e-4,t+.1),a.connect(o),o.connect(this.ganhoMusica),a.start(t),a.stop(t+.12)}baixo(t,e,n,s){const r=this.ctx.createOscillator(),a=this.ctx.createOscillator(),o=this.ctx.createBiquadFilter(),l=this.ctx.createGain();r.type="sawtooth",r.frequency.value=t,a.type="square",a.frequency.value=t/2,o.type="lowpass",o.frequency.setValueAtTime(1500,e),o.frequency.exponentialRampToValueAtTime(420,e+n),o.Q.value=6,l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(s,e+.012),l.gain.exponentialRampToValueAtTime(1e-4,e+n),r.connect(o),a.connect(o),o.connect(l),l.connect(this.ganhoMusica),r.start(e),r.stop(e+n+.02),a.start(e),a.stop(e+n+.02)}pad(t,e,n){const s=this.ctx.createGain(),r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=1100,r.Q.value=.8,s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(.09,e+n*.35),s.gain.linearRampToValueAtTime(1e-4,e+n),r.connect(s),s.connect(this.ganhoMusica);for(const a of t)for(const o of[-6,6]){const l=this.ctx.createOscillator();l.type="triangle",l.frequency.value=qi(a),l.detune.value=o,l.connect(r),l.start(e),l.stop(e+n+.05)}}lead(t,e,n,s){const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="square",r.frequency.setValueAtTime(t,e),a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(s,e+.01),a.gain.exponentialRampToValueAtTime(1e-4,e+n),r.connect(a),a.connect(this.ganhoMusica),a.connect(this.eco),r.start(e),r.stop(e+n+.02)}get podeTocar(){return this.pronto&&(this.offline||this.ctx.state==="running")}sfxPulo(){if(!this.podeTocar)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(320,t),e.frequency.exponentialRampToValueAtTime(920,t+.14),n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(.3,t+.01),n.gain.exponentialRampToValueAtTime(1e-4,t+.2),e.connect(n),n.connect(this.ganhoSfx),e.start(t),e.stop(t+.22)}sfxDeslize(){if(!this.podeTocar)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.ruido;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.Q.value=3.5,n.frequency.setValueAtTime(2200,t),n.frequency.exponentialRampToValueAtTime(380,t+.34);const s=this.ctx.createGain();s.gain.setValueAtTime(.32,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.36),e.connect(n),n.connect(s),s.connect(this.ganhoSfx),e.start(t,Math.random()*.3,.4)}sfxColeta(t=0){if(!this.podeTocar)return;const e=this.ctx.currentTime,n=e-this.ultimaColeta;this.ultimaColeta=e;const r=.125*(n<.12?.55:n<.25?.8:1),a=74+Math.min(t,4)*2;[0,4].forEach((o,l)=>{const c=this.ctx.createOscillator(),h=this.ctx.createGain(),u=e+l*.05;c.type="square",c.frequency.setValueAtTime(qi(a+o),u),h.gain.setValueAtTime(1e-4,u),h.gain.exponentialRampToValueAtTime(r,u+.006),h.gain.exponentialRampToValueAtTime(1e-4,u+.11),c.connect(h),h.connect(this.ganhoSfx),c.start(u),c.stop(u+.13)})}sfxCombo(t){if(!this.podeTocar)return;const e=this.ctx.currentTime,n=69+t*3;[0,4,7,12].forEach((s,r)=>{const a=e+r*.06,o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="square",o.frequency.setValueAtTime(qi(n+s),a),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(.16,a+.008),l.gain.exponentialRampToValueAtTime(1e-4,a+.2),o.connect(l),l.connect(this.ganhoSfx),l.connect(this.eco),o.start(a),o.stop(a+.22)})}sfxPowerup(){if(!this.podeTocar)return;const t=this.ctx.currentTime;for(let e=0;e<6;e++){const n=t+e*.038,s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(qi(69+e*3),n),r.gain.setValueAtTime(1e-4,n),r.gain.exponentialRampToValueAtTime(.15,n+.006),r.gain.exponentialRampToValueAtTime(1e-4,n+.16),s.connect(r),r.connect(this.ganhoSfx),r.connect(this.eco),s.start(n),s.stop(n+.18)}}sfxDano(){if(!this.podeTocar)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.ruido;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(3200,t),n.frequency.exponentialRampToValueAtTime(220,t+.5);const s=this.ctx.createGain();s.gain.setValueAtTime(.5,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.55),e.connect(n),n.connect(s),s.connect(this.ganhoSfx),e.start(t,0,.6);const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sawtooth",r.frequency.setValueAtTime(160,t),r.frequency.exponentialRampToValueAtTime(34,t+.5),a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.42,t+.01),a.gain.exponentialRampToValueAtTime(1e-4,t+.6),r.connect(a),a.connect(this.ganhoSfx),r.start(t),r.stop(t+.62)}sfxQuaseAcidente(){if(!this.podeTocar)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.ruido,e.playbackRate.value=.8;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.Q.value=6,n.frequency.setValueAtTime(500,t),n.frequency.exponentialRampToValueAtTime(4200,t+.2);const s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.26,t+.04),s.gain.exponentialRampToValueAtTime(1e-4,t+.28),e.connect(n),n.connect(s),s.connect(this.ganhoSfx),e.start(t,Math.random()*.3,.32)}sfxUi(t=!1){if(!this.podeTocar)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="square",n.frequency.setValueAtTime(t?1400:880,e),s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(.1,e+.004),s.gain.exponentialRampToValueAtTime(1e-4,e+.05),n.connect(s),s.connect(this.ganhoSfx),n.start(e),n.stop(e+.06)}sfxBuracoNegro(){if(!this.podeTocar)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain(),s=this.ctx.createBiquadFilter();e.type="sawtooth",e.frequency.setValueAtTime(48,t),e.frequency.linearRampToValueAtTime(30,t+2.4),s.type="lowpass",s.frequency.value=220,n.gain.setValueAtTime(1e-4,t),n.gain.linearRampToValueAtTime(.3,t+.9),n.gain.linearRampToValueAtTime(1e-4,t+2.6),e.connect(s),s.connect(n),n.connect(this.ganhoSfx),e.start(t),e.stop(t+2.7)}}const St=new qg;function ke(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function nt(i,t,e){return t+i()*(e-t)}function He(i,t,e){return Math.floor(t+i()*(e-t+1))}function Zc(i,t){return t[Math.floor(i()*t.length)%t.length]}function gi(i,t,e,n){return t+(i-t)*Math.pow(e,n)}const ma=new Map;function An(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,e}function Tn(i,{repetirX:t=!1,nitido:e=!0}={}){const n=new Eg(i);return n.magFilter=e?Xe:dn,n.minFilter=ti,n.generateMipmaps=!0,n.wrapS=t?Es:Nn,n.wrapT=t?Es:Nn,"colorSpace"in n&&(n.colorSpace=Ve),n.needsUpdate=!0,n}function bn(i,t){return ma.has(i)||ma.set(i,t()),ma.get(i)}function cn(i){return"#"+i.toString(16).padStart(6,"0")}function Le(i,t){const e=i>>16&255,n=i>>8&255,s=i&255;return"rgba("+e+","+n+","+s+","+t+")"}function Ue(i=16777215,t=.18){return bn("halo"+i+t,()=>{const n=An(64,64),s=n.getContext("2d"),r=s.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return r.addColorStop(0,Le(16777215,1)),r.addColorStop(t,Le(i,.95)),r.addColorStop(.45,Le(i,.35)),r.addColorStop(1,Le(i,0)),s.fillStyle=r,s.fillRect(0,0,64,64),Tn(n,{nitido:!1})})}function Yg(){return bn("particula",()=>{const t=An(16,16),e=t.getContext("2d"),n=e.createRadialGradient(16/2,16/2,0,16/2,16/2,16/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,0.75)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,16,16),Tn(t,{nitido:!1})})}function jg(){return bn("ponto",()=>{const t=An(16,16),e=t.getContext("2d");e.fillStyle="rgba(255,255,255,0)",e.fillRect(0,0,16,16);const n=e.createRadialGradient(16/2,16/2,0,16/2,16/2,16/2.2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.3,"rgba(210,235,255,0.6)"),n.addColorStop(1,"rgba(160,200,255,0)"),e.fillStyle=n,e.fillRect(0,0,16,16),e.fillStyle="rgba(255,255,255,0.5)",e.fillRect(0,16/2-.5,16,1),e.fillRect(16/2-.5,0,1,16),Tn(t,{nitido:!1})})}function Zg(i,t){return bn("nebulosa"+i+t.join("-"),()=>{const n=An(128,128),s=n.getContext("2d"),r=ke(i*7919+13);s.clearRect(0,0,128,128),s.globalCompositeOperation="lighter";for(let c=0;c<16;c++){const h=t[c%t.length],u=nt(r,128*.18,128*.82),f=nt(r,128*.18,128*.82),p=nt(r,128*.12,128*.42),g=s.createRadialGradient(u,f,0,u,f,p);g.addColorStop(0,Le(h,nt(r,.16,.3))),g.addColorStop(.5,Le(h,.08)),g.addColorStop(1,Le(h,0)),s.fillStyle=g,s.fillRect(0,0,128,128)}const a=s.getImageData(0,0,128,128),o=a.data;for(let c=0;c<o.length;c+=4){const h=.72+r()*.56;o[c]=Math.min(255,o[c]*h),o[c+1]=Math.min(255,o[c+1]*h),o[c+2]=Math.min(255,o[c+2]*h)}s.putImageData(a,0,0),s.globalCompositeOperation="destination-in";const l=s.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return l.addColorStop(0,"rgba(0,0,0,1)"),l.addColorStop(.62,"rgba(0,0,0,0.82)"),l.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=l,s.fillRect(0,0,128,128),Tn(n,{nitido:!1})})}const Ts=[{tipo:"gasoso",base:1920867,faixa:3047318,detalhe:943e4},{tipo:"gasoso",base:6041372,faixa:9062950,detalhe:14721114},{tipo:"rochoso",base:3812165,faixa:5587050,detalhe:10256324},{tipo:"rochoso",base:4861976,faixa:7161638,detalhe:12159822},{tipo:"gelado",base:1783136,faixa:2838406,detalhe:13625599},{tipo:"gasoso",base:4665935,faixa:7030391,detalhe:14264040},{tipo:"rochoso",base:2310218,faixa:3498096,detalhe:8373449},{tipo:"gelado",base:5917212,faixa:8876074,detalhe:16771496}];function Kg(){return Ts.length}function $g(i){const t=Ts[i%Ts.length];return bn("planeta"+i,()=>{const s=An(128,64),r=s.getContext("2d"),a=ke(i*104729+7);if(r.fillStyle=cn(t.base),r.fillRect(0,0,128,64),t.tipo==="gasoso"){let c=0;for(;c<64;){const f=He(a,2,7),p=a();r.fillStyle=p>.72?cn(t.detalhe):p>.35?cn(t.faixa):cn(t.base),r.globalAlpha=nt(a,.45,.95);for(let g=0;g<128;g++){const _=Math.round(Math.sin(g/128*Math.PI*nt(a,1,1.02)+c)*1.2);r.fillRect(g,c+_,1,f)}c+=f}r.globalAlpha=1;const h=nt(a,20,108),u=nt(a,64*.35,64*.7);r.fillStyle=cn(t.detalhe),r.globalAlpha=.65,r.beginPath(),r.ellipse(h,u,nt(a,7,13),nt(a,3,6),0,0,Math.PI*2),r.fill(),r.globalAlpha=1}else if(t.tipo==="rochoso"){for(let c=0;c<70;c++){r.fillStyle=a()>.5?cn(t.faixa):cn(t.base),r.globalAlpha=nt(a,.25,.7);const h=He(a,4,22),u=He(a,3,10);r.fillRect(He(a,0,128),He(a,0,64),h,u)}r.globalAlpha=1;for(let c=0;c<26;c++){const h=nt(a,0,128),u=nt(a,4,60),f=nt(a,1.5,4.5);r.fillStyle=cn(t.detalhe),r.globalAlpha=.5,r.beginPath(),r.arc(h,u,f,0,Math.PI*2),r.fill(),r.fillStyle=cn(t.base),r.globalAlpha=.85,r.beginPath(),r.arc(h+f*.2,u+f*.2,f*.7,0,Math.PI*2),r.fill()}r.globalAlpha=1}else{for(let c=0;c<40;c++){r.strokeStyle=cn(t.faixa),r.globalAlpha=nt(a,.25,.6),r.lineWidth=1,r.beginPath();let h=nt(a,0,128),u=nt(a,0,64);r.moveTo(h,u);for(let f=0;f<5;f++)h+=nt(a,-14,14),u+=nt(a,-5,5),r.lineTo(h,u);r.stroke()}r.globalAlpha=1}const o=He(a,3,7);r.fillStyle=cn(t.detalhe),r.globalAlpha=.85,r.fillRect(0,0,128,o),r.fillRect(0,64-o,128,o),r.globalAlpha=.4,r.fillRect(0,o,128,2),r.fillRect(0,64-o-2,128,2),r.globalAlpha=1;const l=r.createLinearGradient(0,0,128,0);return l.addColorStop(0,"rgba(2,3,10,0.45)"),l.addColorStop(.35,"rgba(2,3,10,0)"),l.addColorStop(.75,"rgba(2,3,10,0.15)"),l.addColorStop(1,"rgba(2,3,10,0.6)"),r.fillStyle=l,r.fillRect(0,0,128,64),Tn(s,{repetirX:!0,nitido:!0})})}function Jg(i){return Ts[i%Ts.length].detalhe}function Qg(i){return bn("anel"+i,()=>{const n=An(64,8),s=n.getContext("2d"),r=ke(i*31337+5);s.clearRect(0,0,64,8);let a=0;for(;a<64;){const o=He(r,1,5),l=r()>.25?nt(r,.2,.75):0,c=r()>.5?14206874:9418441;s.fillStyle=Le(c,l),s.fillRect(a,0,o,8),a+=o}return Tn(n,{nitido:!0})})}function t0(){return bn("disco",()=>{const e=An(64,8),n=e.getContext("2d");for(let s=0;s<64;s++){const r=s/64,a=.55+.45*Math.sin(r*Math.PI*6),o=n.createLinearGradient(0,0,0,8);o.addColorStop(0,Le(16723847,.05*a)),o.addColorStop(.5,Le(16765503,.95*a)),o.addColorStop(1,Le(16723847,.05*a)),n.fillStyle=o,n.fillRect(s,0,1,8)}return Tn(e,{repetirX:!0,nitido:!0})})}function e0(){return bn("perigo",()=>{const e=An(32,32),n=e.getContext("2d");n.fillStyle="#dbe4f5",n.fillRect(0,0,32,32),n.fillStyle="#ff3b30";for(let r=-32;r<64;r+=16)n.beginPath(),n.moveTo(r,0),n.lineTo(r+8,0),n.lineTo(r+8-32,32),n.lineTo(r-32,32),n.closePath(),n.fill();const s=n.createLinearGradient(0,0,0,32);return s.addColorStop(0,"rgba(255,255,255,0.18)"),s.addColorStop(.55,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.28)"),n.fillStyle=s,n.fillRect(0,0,32,32),Tn(e,{repetirX:!0,nitido:!0})})}function n0(){return bn("rocha",()=>{const e=An(64,32),n=e.getContext("2d"),s=ke(20260215);n.fillStyle="#9a7f74",n.fillRect(0,0,64,32);for(let r=0;r<90;r++){const a=s();n.fillStyle=a>.7?"#c4a693":a>.4?"#7d6459":"#5d4a45",n.globalAlpha=nt(s,.3,.8),n.fillRect(He(s,0,64),He(s,0,32),He(s,2,9),He(s,2,7))}n.globalAlpha=1;for(let r=0;r<9;r++){let a=nt(s,0,64),o=nt(s,0,32);n.strokeStyle=s()>.5?"#ff8a3d":"#ffd23f",n.lineWidth=nt(s,1,2.4),n.beginPath(),n.moveTo(a,o);for(let l=0;l<4;l++)a+=nt(s,-12,12),o+=nt(s,-6,6),n.lineTo(a,o);n.stroke()}return Tn(e,{repetirX:!0,nitido:!0})})}function i0(){return bn("laser",()=>{const e=An(32,16),n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,16);s.addColorStop(0,Le(16723847,0)),s.addColorStop(.28,Le(16723847,.85)),s.addColorStop(.5,Le(16777215,1)),s.addColorStop(.72,Le(16723847,.85)),s.addColorStop(1,Le(16723847,0)),n.fillStyle=s,n.fillRect(0,0,32,16),n.fillStyle="rgba(255,255,255,0.35)";for(let r=0;r<32;r+=6)n.fillRect(r,0,2,16);return Tn(e,{repetirX:!0,nitido:!0})})}const ji=vr.longe+30,ho=4,ic=Math.ceil(ji/ho),uo=16,sc=Math.ceil(ji/uo);class s0{constructor(t){this.grupo=new be,t.add(this.grupo);const e=Ss*3,n=e/2,s=new Gt(new zn(e+.6,ji),new de({color:726080}));s.rotation.x=-Math.PI/2,s.position.set(0,-.02,$n-ji/2),s.renderOrder=0,this.grupo.add(s),this.trilhos=[];const r=[-n,-Ss/2,Ss/2,n];r.forEach((c,h)=>{const u=h===0||h===r.length-1,f=new ze(u?.14:.08,.05,ji),p=new de({color:u?Vt.ciano:Vt.cianoMedio}),g=new Gt(f,p);g.position.set(c,.01,$n-ji/2),g.renderOrder=1,this.grupo.add(g),this.trilhos.push({malha:g,externo:u})});const a=new ze(e+.3,.04,.16);this.matTravessa=new de({color:2861257}),this.travessas=new so(a,this.matTravessa,ic),this.travessas.instanceMatrix.setUsage(eo),this.travessas.frustumCulled=!1,this.travessas.renderOrder=1,this.grupo.add(this.travessas);const o=new ze(.12,1.1,.12);this.matPoste=new de({color:Vt.magenta}),this.postes=new so(o,this.matPoste,sc*2),this.postes.instanceMatrix.setUsage(eo),this.postes.frustumCulled=!1,this.postes.renderOrder=1,this.grupo.add(this.postes);const l=$n-vr.longe+6;this.brilhoHorizonte=new Gt(new zn(170,17),new de({map:Ue(3112959,.05),color:7329535,transparent:!0,opacity:.42,depthWrite:!1,blending:ce,fog:!1})),this.brilhoHorizonte.position.set(0,.2,l),this.brilhoHorizonte.renderOrder=-5,this.grupo.add(this.brilhoHorizonte),this.faixaHorizonte=new Gt(new zn(56,5),new de({map:Ue(Vt.magenta,.04),color:16747200,transparent:!0,opacity:.4,depthWrite:!1,blending:ce,fog:!1})),this.faixaHorizonte.position.set(0,.25,l+2),this.faixaHorizonte.renderOrder=-4,this.grupo.add(this.faixaHorizonte),this.meiaLarguraExterna=n+.55,this.dummy=new xe,this.offsetTravessa=0,this.offsetPoste=0,this.tempo=0,this.pulso=0,this.corTrilhoBase=new Ut(Vt.ciano),this.corTrilhoInterno=new Ut(Vt.cianoMedio),this.corTravessaBase=new Ut(2861257),this.corPosteBase=new Ut(Vt.magenta),this.escreverInstancias()}escreverInstancias(){const t=this.dummy;for(let e=0;e<ic;e++)t.position.set(0,.012,$n-e*ho+this.offsetTravessa),t.rotation.set(0,0,0),t.scale.set(1,1,1),t.updateMatrix(),this.travessas.setMatrixAt(e,t.matrix);this.travessas.instanceMatrix.needsUpdate=!0;for(let e=0;e<sc;e++){const n=$n-e*uo+this.offsetPoste;for(let s=0;s<2;s++)t.position.set(s===0?-this.meiaLarguraExterna:this.meiaLarguraExterna,.5,n),t.rotation.set(0,0,0),t.scale.set(1,1,1),t.updateMatrix(),this.postes.setMatrixAt(e*2+s,t.matrix)}this.postes.instanceMatrix.needsUpdate=!0}atualizar(t,e,n){this.tempo+=t,this.pulso=n,this.offsetTravessa=(this.offsetTravessa+e)%ho,this.offsetPoste=(this.offsetPoste+e)%uo,this.escreverInstancias();const s=.82+n*.3+Math.sin(this.tempo*2.1)*.06;for(const r of this.trilhos){const a=r.externo?this.corTrilhoBase:this.corTrilhoInterno;r.malha.material.color.copy(a).multiplyScalar(s)}this.matTravessa.color.copy(this.corTravessaBase).multiplyScalar(.7+n*.55),this.matPoste.color.copy(this.corPosteBase).multiplyScalar(.55+n*.5),this.brilhoHorizonte.material.opacity=.36+n*.14+Math.sin(this.tempo*.7)*.04,this.faixaHorizonte.material.opacity=.34+n*.22}}const ys=460;function rc(i,t,e,n,s){const r=ke(e),a=new Float32Array(i*3),o=new Float32Array(i*3),l=[16777215,13624575,10474751,16771520,16761048];for(let f=0;f<i;f++){a[f*3]=nt(r,-n,n),a[f*3+1]=nt(r,-n*.45,n*.8),a[f*3+2]=nt(r,-ys,30);const p=Zc(r,l),g=nt(r,.45,1);o[f*3]=(p>>16&255)/255*g,o[f*3+1]=(p>>8&255)/255*g,o[f*3+2]=(p&255)/255*g}const c=new we;c.setAttribute("position",new Se(a,3)),c.setAttribute("color",new Se(o,3)),c.boundingSphere=new En(new I,ys*2);const h=new wr({size:t,sizeAttenuation:!1,map:jg(),vertexColors:!0,transparent:!0,opacity:s,depthWrite:!1,depthTest:!1,blending:ce,fog:!1}),u=new Rr(c,h);return u.frustumCulled=!1,{pontos:u,posicoes:a,geo:c,quantidade:i}}class r0{constructor(t){this.grupo=new be,this.grupo.renderOrder=-10,t.add(this.grupo),this.camadaLonge=rc(460,2,1234,320,.95),this.camadaLonge.pontos.renderOrder=-10,this.camadaPerto=rc(170,3.6,9876,220,1),this.camadaPerto.pontos.renderOrder=-9,this.grupo.add(this.camadaLonge.pontos),this.grupo.add(this.camadaPerto.pontos),this.criarNebulosas(),this.criarCometa(),this.tempo=0,this.proximoCometa=nt(ke(42),8,20)}criarNebulosas(){const t=ke(777),e=[[3100624,4881407],[Vt.nebulaB,10899408],[11549290,16736154],[1859488,4172031]];this.nebulosas=[];for(let n=0;n<5;n++){const s=Zg(n+1,e[n%e.length]),r=new pn({map:s,transparent:!0,opacity:nt(t,.62,.95),depthWrite:!1,depthTest:!1,blending:ce,fog:!1}),a=new Sn(r),o=nt(t,90,190);a.scale.set(o,o*nt(t,.6,.95),1),a.position.set(nt(t,-150,150),nt(t,-30,90),nt(t,-ys,-120)),a.renderOrder=-11,a.userData.deriva=nt(t,.03,.1),this.grupo.add(a),this.nebulosas.push(a)}}criarCometa(){this.cometa=new be,this.cometa.visible=!1;const t=new Sn(new pn({map:Ue(14675967,.1),transparent:!0,depthWrite:!1,depthTest:!1,blending:ce,fog:!1}));t.scale.set(7,7,1);const e=new Gt(new zn(1,1),new de({map:Ue(9427199,.02),transparent:!0,opacity:.6,depthWrite:!1,depthTest:!1,blending:ce,fog:!1}));e.scale.set(64,5,1),e.position.x=-32,this.cometa.add(e),this.cometa.add(t),this.cometa.renderOrder=-8,this.grupo.add(this.cometa),this.cometaT=0,this.cometaDuracao=3.2}dispararCometa(){const t=ke(Math.floor(Math.random()*1e5)),e=nt(t,10,80),n=t()>.5?1:-1;this.cometaDe=new I(-n*210,e,nt(t,-360,-200)),this.cometaPara=new I(n*210,e-nt(t,20,70),this.cometaDe.z),this.cometa.rotation.z=Math.atan2(this.cometaPara.y-this.cometaDe.y,this.cometaPara.x-this.cometaDe.x)+(n>0?0:Math.PI),this.cometa.scale.setScalar((n>0,1)),this.cometaT=0,this.cometaDuracao=nt(t,2.4,4),this.cometa.visible=!0}atualizar(t,e){this.tempo+=t,this.moverCamada(this.camadaLonge,e*.05),this.moverCamada(this.camadaPerto,e*.14);for(const n of this.nebulosas)n.position.z+=e*.02,n.position.x-=n.userData.deriva*t*6,n.position.z>-60&&(n.position.z-=ys-60),n.position.x<-190&&(n.position.x=190);if(this.cometa.visible){this.cometaT+=t;const n=this.cometaT/this.cometaDuracao;if(n>=1)this.cometa.visible=!1,this.proximoCometa=this.tempo+nt(ke(Math.floor(this.tempo*97)),14,34);else{this.cometa.position.lerpVectors(this.cometaDe,this.cometaPara,n);const s=Math.sin(Math.PI*Math.min(1,n*1.15));this.cometa.children[0].material.opacity=.55*s,this.cometa.children[1].material.opacity=s}}else this.tempo>this.proximoCometa&&this.dispararCometa()}moverCamada(t,e){const n=t.posicoes;for(let s=0;s<t.quantidade;s++){const r=s*3+2;n[r]+=e,n[r]>30&&(n[r]-=ys+30)}t.geo.attributes.position.needsUpdate=!0}}const Er=-400,Kc=45;class a0{constructor(t,e){this.grupo=new be,this.receita=t%Kg();const n=nt(e,9,26);this.raio=n;const s=new Ei(n,12,8),r=new si({map:$g(this.receita),flatShading:!0,fog:!1});this.corpo=new Gt(s,r),this.grupo.add(this.corpo);const a=new Sn(new pn({map:Ue(Jg(this.receita),.55),transparent:!0,opacity:.32,depthWrite:!1,blending:ce,fog:!1}));if(a.scale.setScalar(n*3.1),this.grupo.add(a),e()<.38){const o=new Lo(n*1.35,n*2.1,28,1),l=new de({map:Qg(t+3),transparent:!0,opacity:.8,side:un,depthWrite:!1,fog:!1}),c=new Gt(o,l);c.rotation.x=Math.PI/2-nt(e,.25,.7),c.rotation.z=nt(e,0,Math.PI),this.grupo.add(c)}this.giro=nt(e,.02,.09)*(e()>.5?1:-1),this.parallax=nt(e,.16,.34),this.reposicionar(e,!0)}reposicionar(t,e){const n=t()>.5?1:-1;this.grupo.position.x=n*nt(t,26,92),this.grupo.position.y=nt(t,-14,52),this.grupo.position.z=e?nt(t,Er,-80):Er-nt(t,0,90),this.corpo.rotation.y=nt(t,0,Math.PI*2),this.corpo.rotation.z=nt(t,-.35,.35)}atualizar(t,e,n){this.corpo.rotation.y+=this.giro*t,this.grupo.position.z+=e*this.parallax,this.grupo.position.z>Kc&&this.reposicionar(n,!1)}}class o0{constructor(t,e){this.grupo=new be;const n=nt(e,1.6,4.2),s=new Gt(new Ei(n,8,6),new de({color:16777215,fog:!1}));this.grupo.add(s);const r=new Sn(new pn({map:Ue(t,.12),transparent:!0,opacity:.85,depthWrite:!1,blending:ce,fog:!1}));r.scale.setScalar(n*9),this.halo=r,this.grupo.add(r),this.fase=nt(e,0,Math.PI*2),this.escalaHalo=n*9,this.parallax=nt(e,.1,.2),this.reposicionar(e,!0)}reposicionar(t,e){this.grupo.position.x=(t()>.5?1:-1)*nt(t,30,130),this.grupo.position.y=nt(t,6,70),this.grupo.position.z=e?nt(t,Er,-120):Er}atualizar(t,e,n,s){this.grupo.position.z+=e*this.parallax;const r=.9+Math.sin(s*1.6+this.fase)*.12;this.halo.scale.setScalar(this.escalaHalo*r),this.grupo.position.z>Kc&&this.reposicionar(n,!1)}}class l0{constructor(){this.grupo=new be,this.grupo.visible=!1,this.ativo=!1,this.lado=1;const t=new Gt(new Ei(2.6,14,10),new de({color:0,fog:!1}));this.grupo.add(t),this.discos=[];for(let a=0;a<2;a++){const o=new Lr(4.4+a*1.5,.34-a*.12,6,30),l=new de({map:t0(),transparent:!0,opacity:.95-a*.3,blending:ce,depthWrite:!1,fog:!1}),c=new Gt(o,l);c.rotation.x=Math.PI/2-.42-a*.16,c.rotation.y=a*.3,this.discos.push(c),this.grupo.add(c)}const e=new Sn(new pn({map:Ue(Vt.magenta,.35),transparent:!0,opacity:.4,depthWrite:!1,blending:ce,fog:!1}));e.scale.setScalar(22),this.grupo.add(e),this.quantidadeParticulas=90;const n=new Float32Array(this.quantidadeParticulas*3),s=new we;s.setAttribute("position",new Se(n,3)),s.boundingSphere=new En(new I,40),this.posParticulas=n,this.anguloParticulas=new Float32Array(this.quantidadeParticulas),this.raioParticulas=new Float32Array(this.quantidadeParticulas),this.alturaParticulas=new Float32Array(this.quantidadeParticulas),this.velParticulas=new Float32Array(this.quantidadeParticulas);const r=ke(4242);for(let a=0;a<this.quantidadeParticulas;a++)this.anguloParticulas[a]=nt(r,0,Math.PI*2),this.raioParticulas[a]=nt(r,5,17),this.alturaParticulas[a]=nt(r,-3.5,3.5),this.velParticulas[a]=nt(r,.6,2.1);this.particulas=new Rr(s,new wr({color:Vt.dourado,size:2.2,sizeAttenuation:!1,map:Ue(Vt.dourado,.2),transparent:!0,opacity:.9,depthWrite:!1,blending:ce,fog:!1})),this.particulas.frustumCulled=!1,this.geoParticulas=s,this.grupo.add(this.particulas),this.rng=ke(99)}surgir(){this.lado=this.rng()>.5?1:-1,this.grupo.position.set(this.lado*nt(this.rng,_n.lateral,_n.lateral+5),nt(this.rng,1.5,5.5),-150),this.grupo.visible=!0,this.ativo=!0}recolher(){this.grupo.visible=!1,this.ativo=!1}atualizar(t,e,n){if(!this.ativo)return 0;if(this.grupo.position.z+=e,this.grupo.position.z>40)return this.recolher(),0;this.discos[0].rotation.z+=t*1.9,this.discos[1].rotation.z-=t*1.25;for(let a=0;a<this.quantidadeParticulas;a++){this.anguloParticulas[a]+=t*this.velParticulas[a]*(18/(this.raioParticulas[a]+2)),this.raioParticulas[a]-=t*this.velParticulas[a]*1.5,this.alturaParticulas[a]*=1-t*.5,this.raioParticulas[a]<3&&(this.raioParticulas[a]=nt(this.rng,13,20),this.alturaParticulas[a]=nt(this.rng,-4,4),this.anguloParticulas[a]=nt(this.rng,0,Math.PI*2));const o=this.raioParticulas[a],l=this.anguloParticulas[a];this.posParticulas[a*3]=Math.cos(l)*o,this.posParticulas[a*3+1]=this.alturaParticulas[a]+Math.sin(l)*o*.32,this.posParticulas[a*3+2]=Math.sin(l)*o*.75}this.geoParticulas.attributes.position.needsUpdate=!0;const s=Math.abs(this.grupo.position.z);if(s>_n.alcance)return 0;const r=1-s/_n.alcance;return this.lado*_n.puxaoMax*r*r}}class c0{constructor(t,e=4){this.grupo=new be,t.add(this.grupo),this.rng=ke(20240915),this.tempo=0,this.planetas=[];for(let s=0;s<e;s++){const r=new a0(He(this.rng,0,99),this.rng);this.planetas.push(r),this.grupo.add(r.grupo)}this.estrelas=[];const n=[Vt.ciano,Vt.dourado,Vt.magenta];for(let s=0;s<3;s++){const r=new o0(n[s],this.rng);this.estrelas.push(r),this.grupo.add(r.grupo)}}atualizar(t,e){this.tempo+=t;for(const n of this.planetas)n.atualizar(t,e,this.rng);for(const n of this.estrelas)n.atualizar(t,e,this.rng,this.tempo)}setQuantidade(t){for(let e=0;e<this.planetas.length;e++)this.planetas[e].grupo.visible=e<t}}const h0=`
attribute float tamanho;
attribute vec3 tom;
varying vec3 vTom;
void main() {
  vTom = tom;
  vec4 posVista = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * posVista;
  gl_PointSize = tamanho * (110.0 / max(-posVista.z, 1.0));
}`,u0=`
uniform sampler2D mapa;
varying vec3 vTom;
void main() {
  vec4 t = texture2D(mapa, gl_PointCoord);
  if (t.a < 0.02) discard;
  gl_FragColor = vec4(vTom * t.rgb, t.a);
}`;class d0{constructor(){this.capacidade=oh,this.escala=1,this.posicoes=new Float32Array(this.capacidade*3),this.tamanhos=new Float32Array(this.capacidade),this.tons=new Float32Array(this.capacidade*3),this.vx=new Float32Array(this.capacidade),this.vy=new Float32Array(this.capacidade),this.vz=new Float32Array(this.capacidade),this.vida=new Float32Array(this.capacidade),this.vidaMax=new Float32Array(this.capacidade),this.tamanhoBase=new Float32Array(this.capacidade),this.gravidade=new Float32Array(this.capacidade),this.arrasto=new Float32Array(this.capacidade),this.comMundo=new Uint8Array(this.capacidade),this.ativa=new Uint8Array(this.capacidade),this.livres=[];for(let n=this.capacidade-1;n>=0;n--)this.livres.push(n);const t=new we;t.setAttribute("position",new Se(this.posicoes,3)),t.setAttribute("tamanho",new Se(this.tamanhos,1)),t.setAttribute("tom",new Se(this.tons,3)),t.setDrawRange(0,this.capacidade),t.boundingSphere=new En(new I,400);const e=new Vn({uniforms:{mapa:{value:Yg()}},vertexShader:h0,fragmentShader:u0,transparent:!0,depthWrite:!1,blending:ce});this.malha=new Rr(t,e),this.malha.frustumCulled=!1,this.malha.renderOrder=6,this.geo=t}setEscala(t){this.escala=Math.max(.2,Math.min(1,t))}get limiteAtual(){return Math.floor(this.capacidade*this.escala)}emitir(t,e,n,s){const r=s||{},a=Math.max(1,Math.round((r.quantidade||1)*this.escala));for(let o=0;o<a;o++){if(this.livres.length===0||this.capacidade-this.livres.length>=this.limiteAtual)return;const l=this.livres.pop(),c=r.espalhamento===void 0?.2:r.espalhamento;this.posicoes[l*3]=t+(Math.random()-.5)*c,this.posicoes[l*3+1]=e+(Math.random()-.5)*c,this.posicoes[l*3+2]=n+(Math.random()-.5)*c;const h=r.velocidade||2,u=r.dirX===void 0?(Math.random()-.5)*2:r.dirX,f=r.dirY===void 0?(Math.random()-.5)*2:r.dirY,p=r.dirZ===void 0?(Math.random()-.5)*2:r.dirZ,g=r.variacao===void 0?.6:r.variacao;this.vx[l]=(u+(Math.random()-.5)*g)*h,this.vy[l]=(f+(Math.random()-.5)*g)*h,this.vz[l]=(p+(Math.random()-.5)*g)*h;const _=(r.vida||.5)*(.7+Math.random()*.6);this.vida[l]=_,this.vidaMax[l]=_,this.tamanhoBase[l]=(r.tamanho||.18)*(.7+Math.random()*.7),this.gravidade[l]=r.gravidade===void 0?0:r.gravidade,this.arrasto[l]=r.arrasto===void 0?1.8:r.arrasto,this.comMundo[l]=r.comMundo===!1?0:1,this.ativa[l]=1;const m=r.cor||16777215;this.tons[l*3]=(m>>16&255)/255,this.tons[l*3+1]=(m>>8&255)/255,this.tons[l*3+2]=(m&255)/255,this.tamanhos[l]=this.tamanhoBase[l]}}atualizar(t,e){for(let n=0;n<this.capacidade;n++){if(!this.ativa[n])continue;if(this.vida[n]-=t,this.vida[n]<=0){this.ativa[n]=0,this.tamanhos[n]=0,this.livres.push(n);continue}const s=Math.max(0,1-this.arrasto[n]*t);this.vx[n]*=s,this.vy[n]*=s,this.vz[n]*=s,this.vy[n]-=this.gravidade[n]*t,this.posicoes[n*3]+=this.vx[n]*t,this.posicoes[n*3+1]+=this.vy[n]*t,this.posicoes[n*3+2]+=this.vz[n]*t+(this.comMundo[n]?e:0);const r=this.vida[n]/this.vidaMax[n];this.tamanhos[n]=this.tamanhoBase[n]*(.25+r*.75),this.posicoes[n*3+2]>16&&(this.ativa[n]=0,this.tamanhos[n]=0,this.livres.push(n))}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.tamanho.needsUpdate=!0,this.geo.attributes.tom.needsUpdate=!0}limpar(){for(let t=0;t<this.capacidade;t++)this.ativa[t]&&(this.ativa[t]=0,this.tamanhos[t]=0,this.livres.push(t));this.geo.attributes.tamanho.needsUpdate=!0}get vivas(){return this.capacidade-this.livres.length}}function f0(i){const t=1-i;return 1-t*t*t}class p0{constructor(t,e){this.particulas=e,this.grupo=new be,t.add(this.grupo),this.corpo=new be,this.grupo.add(this.corpo);const n=new Gt(new Dr(.52,0),new si({color:862016,emissive:Vt.ciano,emissiveIntensity:.35,flatShading:!0}));n.scale.set(1,1.55,.85),n.position.y=.82,this.casco=n,this.corpo.add(n),this.nucleo=new Gt(new Ei(.2,8,6),new de({color:14220287})),this.nucleo.position.y=.86,this.corpo.add(this.nucleo),this.halo=new Sn(new pn({map:Ue(Vt.ciano,.15),transparent:!0,opacity:.85,depthWrite:!1,blending:ce})),this.halo.scale.setScalar(2.1),this.halo.position.y=.86,this.corpo.add(this.halo);const s=new ze(.1,.44,.3),r=new si({color:3804962,emissive:Vt.magenta,emissiveIntensity:.6,flatShading:!0});for(const a of[-1,1]){const o=new Gt(s,r);o.position.set(a*.42,.62,.06),o.rotation.z=a*.42,this.corpo.add(o)}this.propulsor=new Gt(new Do(.26,.6,6),new de({color:Vt.ciano,transparent:!0,opacity:.8,blending:ce,depthWrite:!1})),this.propulsor.rotation.x=Math.PI,this.propulsor.position.set(0,.24,.42),this.corpo.add(this.propulsor),this.escudo=new Gt(new Ei(1.15,10,7),new de({color:Vt.ciano,transparent:!0,opacity:.16,depthWrite:!1,side:un,blending:ce})),this.escudo.position.y=.82,this.escudo.visible=!1,this.grupo.add(this.escudo),this.sombra=new Gt(new zn(1.1,1.6),new de({map:Ue(1732512,.05),transparent:!0,opacity:.55,depthWrite:!1,blending:ce})),this.sombra.rotation.x=-Math.PI/2,this.sombra.position.y=.03,this.grupo.add(this.sombra),this.reiniciar()}reiniciar(){this.pista=1,this.pistaDestino=1,this.x=Me[1],this.xDe=Me[1],this.xPara=Me[1],this.tTroca=1,this.deslocamentoExterno=0,this.y=0,this.vy=0,this.noChao=!0,this.deslizando=!1,this.tempoDeslize=0,this.inclinacao=0,this.tempo=0,this.visivel=!0,this.grupo.visible=!0,this.escudo.visible=!1,this.piscando=0,this.corpo.scale.set(1,1,1),this.grupo.position.set(this.x,0,0)}trocarPista(t){const e=Math.max(0,Math.min(Me.length-1,this.pistaDestino+t));return e===this.pistaDestino?!1:(this.pistaDestino=e,this.xDe=this.x,this.xPara=Me[e],this.tTroca=0,!0)}pular(){return this.noChao?(this.vy=Fe.impulsoPulo,this.noChao=!1,this.deslizando=!1,this.tempoDeslize=0,!0):!1}deslizar(){return this.deslizando?!1:(this.deslizando=!0,this.tempoDeslize=Fe.duracaoDeslize,!this.noChao&&this.vy>0&&(this.vy=-12.2*.5),!0)}atualizar(t,e,n){this.tempo+=t,this.tTroca<1&&(this.tTroca=Math.min(1,this.tTroca+t/hc),this.x=this.xDe+(this.xPara-this.xDe)*f0(this.tTroca),this.tTroca>=1&&(this.pista=this.pistaDestino)),this.noChao||(this.vy-=Fe.gravidade*t,this.y+=this.vy*t,this.y<=0&&(this.y=0,this.vy=0,this.noChao=!0,this.particulas.emitir(this.x,.1,0,{quantidade:5,cor:Vt.ciano,velocidade:2.4,dirY:.6,vida:.3,tamanho:.14,espalhamento:.5}))),this.deslizando&&(this.tempoDeslize-=t,this.tempoDeslize<=0&&(this.deslizando=!1));const s=this.tTroca<1?-Math.sign(this.xPara-this.xDe)*Fe.inclinacaoMax*(1-this.tTroca):0;this.inclinacao+=(s-this.inclinacao)*Math.min(1,t*14);const r=this.deslizando?.45:1,a=this.deslizando?1.28:1;this.corpo.scale.y+=(r-this.corpo.scale.y)*Math.min(1,t*18),this.corpo.scale.x+=(a-this.corpo.scale.x)*Math.min(1,t*18),this.corpo.scale.z=this.corpo.scale.x,this.corpo.rotation.x=this.deslizando?-.5:this.noChao?0:-.2;const o=this.noChao&&!this.deslizando?Math.abs(Math.sin(this.tempo*e*.55))*.07:0,l=this.x+this.deslocamentoExterno;this.grupo.position.set(l,this.y+o,0),this.grupo.rotation.z=this.inclinacao,this.corpo.rotation.y=Math.sin(this.tempo*1.7)*.08;const c=1+n*.45+Math.sin(this.tempo*6)*.06;this.nucleo.scale.setScalar(c),this.halo.scale.setScalar(2.1*(.85+n*.4)),this.halo.material.opacity=.6+n*.35;const h=.6+Math.random()*.5;this.propulsor.scale.set(1,h,1),this.propulsor.material.opacity=.55+h*.35,this.sombra.position.x=0;const u=Math.min(1,this.y/2);this.sombra.scale.setScalar(1-u*.45),this.sombra.material.opacity=.5*(1-u*.6),this.sombra.position.y=.03-this.y-o,Math.random()<.85&&this.particulas.emitir(l,this.y+.32+o,.5,{quantidade:1,cor:this.deslizando?Vt.dourado:Vt.ciano,velocidade:1.2,dirZ:1,dirY:.25,variacao:.5,vida:.42,tamanho:.2,espalhamento:.22,arrasto:2.6}),this.piscando>0&&(this.piscando-=t,this.grupo.visible=Math.floor(this.piscando*14)%2===0,this.piscando<=0&&(this.grupo.visible=!0)),this.escudo.visible&&(this.escudo.rotation.y+=t*1.1,this.escudo.rotation.x+=t*.5,this.escudo.material.opacity=.13+Math.sin(this.tempo*5)*.05+n*.09,this.escudo.scale.setScalar(1+n*.06),this.escudo.position.y=.82+(this.deslizando?-.25:0))}setEscudo(t){this.escudo.visible=t}piscar(t){this.piscando=t}caixa(t){const e=this.deslizando?Fe.alturaDeslize:Fe.alturaEmPe,n=this.x+this.deslocamentoExterno;return t.minX=n-Fe.meiaLargura,t.maxX=n+Fe.meiaLargura,t.minY=this.y,t.maxY=this.y+e,t.minZ=-.5,t.maxZ=Fe.meiaProfundidade,t}}const Te={BAIXO:"baixo",PORTAO:"portao",PAREDE:"parede"},m0={[Te.BAIXO]:{meiaX:.8,minY:0,maxY:.85,meiaZ:.62},[Te.PORTAO]:{meiaX:1,minY:1.02,maxY:2.6,meiaZ:.32},[Te.PAREDE]:{meiaX:.88,minY:0,maxY:2.8,meiaZ:.48}};let lr=null;function $c(){if(lr)return lr;const i=new Pr(.82,0),t=i.attributes.position;for(let n=0;n<t.count;n++){const s=.78+(Math.sin(n*12.9898)*43758.5453%1+1)%1*.42;t.setXYZ(n,t.getX(n)*s,t.getY(n)*s*.85,t.getZ(n)*s)}i.computeVertexNormals();const e=e0();return e.repeat.set(1,1),lr={rochaGeo:i,rochaMat:new si({map:n0(),color:16763296,emissive:16742954,emissiveIntensity:.22,flatShading:!0}),veioMat:new de({color:16754237}),veioGeo:new ze(.2,.12,1),brasaMat:new pn({map:Ue(16747069,.22),transparent:!0,opacity:.55,depthWrite:!1,blending:ce}),posteGeo:new ze(.16,2.7,.16),posteMat:new si({color:2757184,emissive:Vt.magenta,emissiveIntensity:.55,flatShading:!0}),feixeGeo:new ze(2,.34,.1),feixeMat:new de({map:i0(),transparent:!0,opacity:.95,blending:ce,depthWrite:!1}),barreiraGeo:new ze(1.94,2.55,.5),barreiraMat:new de({map:e}),pilarGeo:new ze(.2,2.95,.6),pilarMat:new si({color:13819376,emissive:3754347,emissiveIntensity:1,flatShading:!0}),luzGeo:new ze(2.14,.16,.66),luzMat:new de({color:16731453}),corLuz:new Ut(16731453),haloBarreiraMat:new pn({map:Ue(16726832,.3),transparent:!0,opacity:.38,depthWrite:!1,blending:ce}),haloMat:new pn({map:Ue(Vt.magenta,.25),transparent:!0,opacity:.35,depthWrite:!1,blending:ce})},lr}class g0{constructor(t){const e=$c();if(this.tipo=t,this.grupo=new be,this.grupo.visible=!1,this.ativo=!1,this.pista=1,this.jaAvaliado=!1,this.giro=0,t===Te.BAIXO){const n=new Gt(e.rochaGeo,e.rochaMat);n.scale.set(1.08,.62,1.08),n.position.y=.42,this.rocha=n,this.grupo.add(n);const s=new Gt(e.veioGeo,e.veioMat);s.position.y=.42,this.grupo.add(s),this.veio=s;const r=new Sn(e.brasaMat.clone());r.scale.setScalar(2.5),r.position.y=.38,this.brasa=r,this.grupo.add(r)}else if(t===Te.PORTAO){for(const s of[-1,1]){const r=new Gt(e.posteGeo,e.posteMat);r.position.set(s*1.02,1.35,0),this.grupo.add(r)}this.feixes=[];for(const s of[1.22,1.9,2.42]){const r=new Gt(e.feixeGeo,e.feixeMat.clone());r.position.y=s,this.feixes.push(r),this.grupo.add(r)}const n=new Sn(e.haloMat.clone());n.scale.setScalar(3.4),n.position.y=1.8,this.grupo.add(n),this.halo=n}else{const n=new Gt(e.barreiraGeo,e.barreiraMat);n.position.y=1.28,this.grupo.add(n);for(const a of[-1,1]){const o=new Gt(e.pilarGeo,e.pilarMat);o.position.set(a*1.02,1.48,0),this.grupo.add(o)}const s=new Gt(e.luzGeo,e.luzMat);s.position.y=2.72,this.luz=s,this.grupo.add(s);const r=new Sn(e.haloBarreiraMat.clone());r.scale.setScalar(4.2),r.position.y=1.6,this.haloBarreira=r,this.grupo.add(r)}}ativar(t,e,n){this.ativo=!0,this.pista=t,this.jaAvaliado=!1,this.grupo.visible=!0,this.grupo.position.set(e,0,n),this.giro=(Math.random()-.5)*1.6,this.grupo.rotation.set(0,0,0),this.tipo===Te.BAIXO&&this.rocha.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3)}desativar(){this.ativo=!1,this.grupo.visible=!1,this.grupo.position.z=999}atualizar(t,e,n){if(this.grupo.position.z+=e,this.tipo===Te.BAIXO)this.rocha.rotation.x+=t*this.giro*.6,this.rocha.rotation.y+=t*this.giro,this.veio.rotation.copy(this.rocha.rotation),this.brasa.material.opacity=.42+Math.abs(Math.sin(n*3.1+this.giro))*.3;else if(this.tipo===Te.PORTAO){for(let s=0;s<this.feixes.length;s++){const r=this.feixes[s];r.material.opacity=.6+Math.abs(Math.sin(n*7+s*1.3))*.4,r.material.map&&(r.material.map.offset.x=(n*1.6+s*.3)%1),r.scale.x=1+Math.sin(n*9+s)*.03}this.halo.material.opacity=.22+Math.abs(Math.sin(n*4))*.2}else this.haloBarreira.material.opacity=.2+Math.abs(Math.sin(n*3.6))*.22}get caixa(){return m0[this.tipo]}}class _0{constructor(t,e=9){this.grupo=new be,t.add(this.grupo),this.pools={},this.ativos=[];for(const n of Object.values(Te)){const s=[];for(let r=0;r<e;r++){const a=new g0(n);this.grupo.add(a.grupo),s.push(a)}this.pools[n]=s}}criar(t,e,n,s){const r=this.pools[t];for(const a of r)if(!a.ativo)return a.ativar(e,n,s),this.ativos.push(a),a;return null}atualizar(t,e,n,s){const r=$c();r.luzMat.color.copy(r.corLuz).multiplyScalar(.45+Math.abs(Math.sin(n*3.4))*.55);for(let a=this.ativos.length-1;a>=0;a--){const o=this.ativos[a];o.atualizar(t,e,n),o.grupo.position.z>s&&(o.desativar(),this.ativos.splice(a,1))}}limpar(){for(const t of this.ativos)t.desativar();this.ativos.length=0}}const v0=.62;class x0{constructor(t){this.indice=t,this.ativo=!1,this.posicao=new I(0,0,999),this.alturaBase=.9,this.fase=0,this.giroX=0,this.giroY=0}ativar(t,e,n){this.ativo=!0,this.posicao.set(t,e,n),this.alturaBase=e,this.fase=Math.random()*Math.PI*2,this.giroX=Math.random()*Math.PI,this.giroY=Math.random()*Math.PI}desativar(){this.ativo=!1,this.posicao.set(0,-50,999)}}class Jc{constructor(t,e=48){this.grupo=new be,t.add(this.grupo),this.tamanho=e;const n=new Dr(.3,0),s=new si({color:9071124,emissive:Vt.dourado,emissiveIntensity:1.15,flatShading:!0});this.cristais=new so(n,s,e),this.cristais.instanceMatrix.setUsage(eo),this.cristais.frustumCulled=!1,this.grupo.add(this.cristais),this.posHalo=new Float32Array(e*3);const r=new we;r.setAttribute("position",new Se(this.posHalo,3)),r.boundingSphere=new En(new I,500),this.halos=new Rr(r,new wr({color:Vt.dourado,size:1,sizeAttenuation:!0,map:Ue(Vt.dourado,.18),transparent:!0,opacity:.8,depthWrite:!1,blending:ce})),this.halos.frustumCulled=!1,this.halos.renderOrder=5,this.geoHalo=r,this.grupo.add(this.halos),this.itens=[];for(let a=0;a<e;a++)this.itens.push(new x0(a));this.ativos=[],this.dummy=new xe,this.escreverInstancias()}criar(t,e,n){for(const s of this.itens)if(!s.ativo)return s.ativar(t,e,n),this.ativos.push(s),s;return null}atualizar(t,e,n,s,r,a){for(let o=this.ativos.length-1;o>=0;o--){const l=this.ativos[o];if(l.posicao.z+=e,l.giroY+=t*2.6,l.giroX+=t*1.1,r&&s){const c=s.x-l.posicao.x,h=s.y+.8-l.posicao.y,u=s.z-l.posicao.z,f=Math.sqrt(c*c+h*h+u*u);if(f<Xo&&f>.001){const p=Math.min(1,t*9*(1-f/Xo)*2.2);l.posicao.x+=c*p,l.posicao.y+=h*p,l.posicao.z+=u*p}}else l.posicao.y=l.alturaBase+Math.sin(n*2.4+l.fase)*.12;l.posicao.z>a&&(l.desativar(),this.ativos.splice(o,1))}this.escreverInstancias(n)}escreverInstancias(t=0){const e=this.dummy;for(let n=0;n<this.tamanho;n++){const s=this.itens[n];if(s.ativo){e.position.copy(s.posicao),e.rotation.set(s.giroX,s.giroY,0);const r=.9+Math.sin(t*4+s.fase)*.15;e.scale.setScalar(r),this.posHalo[n*3]=s.posicao.x,this.posHalo[n*3+1]=s.posicao.y,this.posHalo[n*3+2]=s.posicao.z}else e.position.set(0,-500,900),e.rotation.set(0,0,0),e.scale.setScalar(1e-4),this.posHalo[n*3]=0,this.posHalo[n*3+1]=-500,this.posHalo[n*3+2]=900;e.updateMatrix(),this.cristais.setMatrixAt(n,e.matrix)}this.cristais.instanceMatrix.needsUpdate=!0,this.geoHalo.attributes.position.needsUpdate=!0}remover(t){const e=this.ativos.indexOf(t);e>=0&&this.ativos.splice(e,1),t.desativar()}limpar(){for(const t of this.ativos)t.desativar();this.ativos.length=0,this.escreverInstancias()}static get meiaCaixa(){return v0}}class M0{constructor(){this.grupo=new be,this.grupo.visible=!1,this.ativo=!1,this.chave="escudo",this.cristal=new Gt(new Pr(.42,0),new si({color:1055280,emissive:Vt.ciano,emissiveIntensity:1,flatShading:!0})),this.grupo.add(this.cristal),this.anel=new Gt(new Lr(.72,.06,4,18),new de({color:Vt.ciano,transparent:!0,opacity:.9,blending:ce,depthWrite:!1})),this.anel.rotation.x=Math.PI/2.4,this.grupo.add(this.anel),this.halo=new Sn(new pn({map:Ue(16777215,.2),transparent:!0,opacity:.6,depthWrite:!1,blending:ce})),this.halo.scale.setScalar(3),this.grupo.add(this.halo)}ativar(t,e,n){this.chave=t,this.ativo=!0,this.grupo.visible=!0,this.grupo.position.set(e,1.15,n);const s=new Ut(xi[t].cor);this.cristal.material=this.cristal.material.clone(),this.cristal.material.emissive=s,this.anel.material=this.anel.material.clone(),this.anel.material.color=s,this.halo.material=this.halo.material.clone(),this.halo.material.map=Ue(xi[t].cor,.2)}desativar(){this.ativo=!1,this.grupo.visible=!1,this.grupo.position.z=999}atualizar(t,e,n){this.grupo.position.z+=e,this.cristal.rotation.y+=t*1.8,this.cristal.rotation.z+=t*.7,this.anel.rotation.z+=t*2.4,this.anel.rotation.y+=t*1.2;const s=.9+Math.sin(n*5)*.16;this.halo.scale.setScalar(3*s),this.grupo.position.y=1.15+Math.sin(n*2.2)*.14}}class Qc{constructor(t,e=3){this.grupo=new be,t.add(this.grupo),this.itens=[];for(let n=0;n<e;n++){const s=new M0;this.grupo.add(s.grupo),this.itens.push(s)}this.ativos=[]}criar(t,e,n){for(const s of this.itens)if(!s.ativo)return s.ativar(t,e,n),this.ativos.push(s),s;return null}atualizar(t,e,n,s){for(let r=this.ativos.length-1;r>=0;r--){const a=this.ativos[r];a.atualizar(t,e,n),a.grupo.position.z>s&&(a.desativar(),this.ativos.splice(r,1))}}remover(t){const e=this.ativos.indexOf(t);e>=0&&this.ativos.splice(e,1),t.desativar()}limpar(){for(const t of this.ativos)t.desativar();this.ativos.length=0}static get meiaCaixa(){return .8}}class S0{constructor(){this.cena=new xg,this.cena.background=new Ut(Vt.espacoFundo),this.cena.fog=new Co(Vt.espacoMedio,vr.perto,vr.longe),this.camera=new Qe(ge.fov,16/9,ge.perto,ge.longe),this.camera.position.set(0,ge.altura,ge.recuo),this.luzAmbiente=new wg(7176644,2),this.cena.add(this.luzAmbiente),this.luzSol=new bg(16773350,1.8),this.luzSol.position.set(-.7,1,.45),this.cena.add(this.luzSol),this.fundo=new r0(this.cena),this.profundo=new c0(this.cena,4),this.trilha=new s0(this.cena),this.buracoNegro=new l0,this.cena.add(this.buracoNegro.grupo),this.particulas=new d0,this.cena.add(this.particulas.malha),this.obstaculos=new _0(this.cena,9),this.poeira=new Jc(this.cena,48),this.powerups=new Qc(this.cena,3),this.jogador=new p0(this.cena,this.particulas),this.alvoOlhar=new I(0,ge.alvoAltura,ge.alvoFrente),this.olharAtual=this.alvoOlhar.clone(),this.tremor=0,this.tremorHabilitado=!0,this.deslocamentoCamera=new I,this.posicaoBase=this.camera.position.clone(),this.rolagem=0,this.modoCinema=!1,this.tempoCinema=0,this.tomadaCinema=0,this.tempo=0,this.campoDeVisaoBase=ge.fov}reiniciar(){this.obstaculos.limpar(),this.poeira.limpar(),this.powerups.limpar(),this.particulas.limpar(),this.buracoNegro.recolher(),this.jogador.reiniciar(),this.tremor=0,this.posicaoBase.set(0,ge.altura,ge.recuo),this.rolagem=0,this.camera.fov=this.campoDeVisaoBase,this.camera.updateProjectionMatrix()}sacudir(t){this.tremorHabilitado&&(this.tremor=Math.min(1.4,this.tremor+t))}atualizar(t,e,n,s,r){this.tempo+=t,this.fundo.atualizar(t,e),this.profundo.atualizar(t,e),this.trilha.atualizar(t,e,s),this.obstaculos.atualizar(t,e,this.tempo,$n),this.powerups.atualizar(t,e,this.tempo,$n),this.particulas.atualizar(t,e),this.atualizarCamera(t,n,s,r)}atualizarCamera(t,e,n,s){const r=this.jogador,a=this.posicaoBase;if(this.modoCinema)this.cameraCinematografica(t),this.rolagem=gi(this.rolagem,0,.002,t);else{const l=(r.x+r.deslocamentoExterno)*.42;a.x=gi(a.x,l,.0012,t),a.y=gi(a.y,ge.altura+r.y*.28+n*.05,9e-4,t),a.z=gi(a.z,ge.recuo,.002,t),this.alvoOlhar.set((r.x+r.deslocamentoExterno)*.6,ge.alvoAltura+r.y*.35,ge.alvoFrente),this.rolagem=gi(this.rolagem,-r.inclinacao*.3,.002,t)}if(this.olharAtual.lerp(this.alvoOlhar,Math.min(1,t*9)),this.tremor>0){this.tremor=Math.max(0,this.tremor-t*2.6);const l=this.tremor*this.tremor*.42;this.deslocamentoCamera.set((Math.random()-.5)*l,(Math.random()-.5)*l,(Math.random()-.5)*l*.5)}else this.deslocamentoCamera.multiplyScalar(.7);this.camera.position.copy(a).add(this.deslocamentoCamera),this.camera.lookAt(this.olharAtual),this.camera.rotateZ(this.rolagem);const o=this.campoDeVisaoBase+Math.min(9,(e-21)*.34)-(s?7:0);Math.abs(this.camera.fov-o)>.05&&(this.camera.fov=gi(this.camera.fov,o,.02,t),this.camera.updateProjectionMatrix())}cameraCinematografica(t){this.tempoCinema+=t;const e=this.jogador,n=this.tempoCinema,s=this.posicaoBase;switch(this.tomadaCinema){case 0:s.set(e.x+Math.sin(n*.3)*3.4+3.2,1.05,2.6),this.alvoOlhar.set(e.x,1,-16);break;case 1:s.set(e.x*.3,7.4+Math.sin(n*.4)*.6,7.5),this.alvoOlhar.set(0,.4,-34);break;case 2:{const r=this.buracoNegro,a=r.ativo?r.grupo.position:{x:-26,y:14,z:-70};s.set(e.x*.5,3,5.6),this.alvoOlhar.set(a.x*.55,a.y*.5+1,a.z*.45);break}default:s.set(e.x*.5,ge.altura-.5,ge.recuo-1.4),this.alvoOlhar.set(e.x*.6,ge.alvoAltura,ge.alvoFrente);break}}proximaTomada(t){this.tomadaCinema=Math.floor(nt(t,0,4))%4,this.tempoCinema=0}setCinema(t){this.modoCinema=t,t||(this.posicaoBase.set(0,ge.altura,ge.recuo),this.rolagem=0)}aplicarQualidade(t,e){this.particulas.setEscala(e),this.profundo.setQuantidade(t===0?4:t===1?3:2),this.fundo.camadaLonge.pontos.visible=t<2}get zDeSpawn(){return-128}}const ve=Te.BAIXO,De=Te.PORTAO,le=Te.PAREDE,y0=2*Fe.impulsoPulo/Fe.gravidade,E0=1.2,A0=[{nome:"pedra-solta",comprimento:10,peso:[10,6,3],espelhavel:!0,itens:[{z:0,pista:0,tipo:ve}]},{nome:"pedra-central",comprimento:10,peso:[9,6,3],espelhavel:!1,itens:[{z:0,pista:1,tipo:ve}]},{nome:"portao-solto",comprimento:10,peso:[8,7,4],espelhavel:!0,itens:[{z:0,pista:0,tipo:De}]},{nome:"destroco-lateral",comprimento:11,peso:[8,7,5],espelhavel:!0,itens:[{z:0,pista:0,tipo:le}]},{nome:"funil",comprimento:14,peso:[5,8,7],espelhavel:!1,itens:[{z:0,pista:0,tipo:le},{z:0,pista:2,tipo:le}]},{nome:"desvio-duplo",comprimento:25,peso:[4,8,8],espelhavel:!0,itens:[{z:0,pista:0,tipo:le},{z:0,pista:1,tipo:le},{z:15,pista:2,tipo:le},{z:15,pista:1,tipo:le}]},{nome:"cortina-de-laser",comprimento:13,peso:[3,7,8],espelhavel:!1,itens:[{z:0,pista:0,tipo:De},{z:0,pista:1,tipo:De},{z:0,pista:2,tipo:De}]},{nome:"chuva-de-rochas",comprimento:13,peso:[4,8,7],espelhavel:!1,itens:[{z:0,pista:0,tipo:ve},{z:0,pista:1,tipo:ve},{z:0,pista:2,tipo:ve}]},{nome:"escolha-sua-dor",comprimento:13,peso:[3,7,9],espelhavel:!0,itens:[{z:0,pista:0,tipo:ve},{z:0,pista:1,tipo:le},{z:0,pista:2,tipo:De}]},{nome:"tunel-baixo",comprimento:15,peso:[2,6,9],espelhavel:!0,itens:[{z:0,pista:0,tipo:De},{z:0,pista:1,tipo:De},{z:0,pista:2,tipo:le}]},{nome:"zigue-zague",comprimento:36,peso:[2,7,9],espelhavel:!0,itens:[{z:0,pista:0,tipo:le},{z:15,pista:1,tipo:le},{z:30,pista:2,tipo:le}]},{nome:"salto-duplo",comprimento:40,peso:[3,7,8],espelhavel:!1,itens:[{z:0,pista:0,tipo:ve},{z:0,pista:1,tipo:ve},{z:0,pista:2,tipo:ve},{z:28,pista:0,tipo:ve},{z:28,pista:1,tipo:ve},{z:28,pista:2,tipo:ve}]},{nome:"agacha-e-pula",comprimento:36,peso:[1,5,9],espelhavel:!1,itens:[{z:0,pista:0,tipo:De},{z:0,pista:1,tipo:De},{z:0,pista:2,tipo:De},{z:24,pista:0,tipo:ve},{z:24,pista:1,tipo:ve},{z:24,pista:2,tipo:ve}]},{nome:"corredor-estreito",comprimento:30,peso:[1,5,9],espelhavel:!0,itens:[{z:0,pista:0,tipo:le},{z:0,pista:1,tipo:De},{z:0,pista:2,tipo:le},{z:17,pista:0,tipo:le},{z:17,pista:1,tipo:ve},{z:17,pista:2,tipo:le}]},{nome:"porta-e-pedra",comprimento:26,peso:[3,7,7],espelhavel:!0,itens:[{z:0,pista:0,tipo:De},{z:0,pista:1,tipo:le},{z:17,pista:1,tipo:ve},{z:17,pista:2,tipo:le}]},{nome:"lixo-espacial",comprimento:34,peso:[2,6,8],espelhavel:!0,itens:[{z:0,pista:2,tipo:le},{z:14,pista:1,tipo:ve},{z:28,pista:0,tipo:le},{z:28,pista:1,tipo:De}]},{nome:"muralha-quebrada",comprimento:36,peso:[1,4,9],espelhavel:!0,itens:[{z:0,pista:1,tipo:le},{z:0,pista:2,tipo:le},{z:15,pista:0,tipo:le},{z:15,pista:1,tipo:De},{z:30,pista:1,tipo:le},{z:30,pista:2,tipo:ve}]}];function th(i){const t=[...i].sort((n,s)=>n.z-s.z),e=[];for(const n of t){const s=e[e.length-1];if(s&&Math.abs(n.z-s.z)<=E0)s.pistas[n.pista]=n.tipo;else{const r=new Array(Me.length).fill(null);r[n.pista]=n.tipo,e.push({z:n.z,pistas:r})}}return e}function T0(i,t){const e=i/t;return Math.floor(e/hc)}function fo(i,t=_o,e=null){const n=th(i.itens);if(n.length===0)return{viavel:!0,rota:[],camadas:n};const s=y0*t,r=e===null?Me.map((l,c)=>c):[e],a=[];for(const l of r)a.push({pista:l,zFimDoPulo:-1/0,rota:[]});let o=a;for(let l=0;l<n.length;l++){const c=n[l],h=l===0?c.z-40:n[l-1].z,u=l===0?Me.length:T0(c.z-h,t),f=[],p=new Set;for(const g of o)for(let _=0;_<Me.length;_++){if(Math.abs(_-g.pista)>u)continue;const m=c.pistas[_];let d=g.zFimDoPulo;if(m===le)continue;if(m===ve){if(c.z<g.zFimDoPulo)continue;d=c.z+s}else if(m===De){if(c.z<g.zFimDoPulo)continue;d=-1/0}const E=_+"|"+(d===-1/0?"chao":d.toFixed(1));p.has(E)||(p.add(E),f.push({pista:_,zFimDoPulo:d,rota:g.rota.concat(_)}))}if(f.length===0)return{viavel:!1,rota:null,camadas:n,falhouEm:l};o=f}return{viavel:!0,rota:o[0].rota,camadas:n}}function b0(i){return{...i,nome:i.nome+"-espelhado",espelhado:!0,itens:i.itens.map(t=>({...t,pista:Me.length-1-t.pista}))}}function w0(i=_o){const t=[],e=[];for(const n of A0){const s=n.espelhavel?[n,b0(n)]:[n];for(const r of s){const a=fo(r,i);if(!a.viavel){e.push({nome:r.nome,motivo:"sem rota viavel na camada "+a.falhouEm});continue}const o=r.itens.reduce((l,c)=>Math.max(l,c.z),0);if(r.comprimento<o+4){e.push({nome:r.nome,motivo:"comprimento "+r.comprimento+" menor que o ultimo obstaculo ("+o+")"});continue}t.push({...r,camadas:a.camadas,rotaSugerida:a.rota})}}return{validos:t,problemas:e}}const po=w0();if(po.problemas.length>0&&typeof console!="undefined")for(const i of po.problemas)console.error("[PADRAO INVALIDO] "+i.nome+": "+i.motivo);const fi=po.validos;function R0(i,t){const e=Math.max(0,Math.min(1,t));let n=0;const s=new Array(fi.length);for(let a=0;a<fi.length;a++){const o=fi[a].peso;let l;e<.5?l=o[0]+(o[1]-o[0])*(e/.5):l=o[1]+(o[2]-o[1])*((e-.5)/.5),l=Math.max(.01,l),s[a]=l,n+=l}let r=i()*n;for(let a=0;a<fi.length;a++)if(r-=s[a],r<=0)return fi[a];return fi[fi.length-1]}function C0(i){const t=Math.min(1,Math.max(0,i/lh));return Math.pow(t,1.25)}function mo(i){return Ho+(_o-Ho)*i}function P0(i){return ko+(ch-ko)*i}function D0(i){return Wo+(hh-Wo)*i}const L0=Object.keys(xi),cr=2.4;class I0{constructor(t,e){this.rng=t,this.obstaculos=e.obstaculos,this.poeira=e.poeira,this.powerups=e.powerups,this.reiniciar()}reiniciar(){this.distanciaAteProximo=46,this.tempoSemPowerup=0,this.ultimaPistaSegura=1,this.padroesGerados=0}atualizar(t,e,n,s){if(this.tempoSemPowerup+=t,this.distanciaAteProximo-=e,this.distanciaAteProximo>0)return;const r=R0(this.rng,n),a=mo(n),o=P0(n)*a,l=D0(n);this.instanciar(r,n,s,o,l),this.distanciaAteProximo=r.comprimento*l+o*nt(this.rng,.95,1.3),this.padroesGerados++}instanciar(t,e,n,s,r){let o=fo(t,void 0,this.ultimaPistaSegura);o.viavel||(o=fo(t));const l=o.camadas&&o.camadas.length?o.camadas:th(t.itens),c=o.rota||l.map(()=>1);for(const _ of t.itens)this.obstaculos.criar(_.tipo,_.pista,Me[_.pista],-128-_.z*r);for(let _=0;_<l.length;_++){const m=c[_],d=l[_].z*r,E=_===0?d-9:l[_-1].z*r,A=d-E,S=Math.max(1,Math.floor(A/cr)-1),N=l[_].pistas[m];for(let w=1;w<=S;w++){const b=E+A*w/(S+1),C=N===De&&b>d-5?.42:.9;this.poeira.criar(Me[m],C,-128-b)}}const h=c[c.length-1]!==void 0?c[c.length-1]:1;this.ultimaPistaSegura=h;const u=t.comprimento*r,f=Math.max(3,Math.floor(s*.62/cr)),p=this.rng()<.32,g=this.rng()<.7?h:He(this.rng,0,Me.length-1);for(let _=0;_<f;_++){const m=u+3+_*cr,d=_/Math.max(1,f-1),E=p?.9+Math.sin(d*Math.PI)*1.15:.9;this.poeira.criar(Me[g],E,-128-m)}if(n>dh&&this.tempoSemPowerup>uh&&this.rng()<.55){const _=Zc(this.rng,L0),m=u+3+f/2*cr;this.powerups.criar(_,Me[g],-128-m),this.tempoSemPowerup=0}}}const U0=5;class N0{constructor(){this.reiniciar()}reiniciar(){this.pontos=0,this.distancia=0,this.poeiraColetada=0,this.raspadas=0,this.nivelCombo=0,this.coletasNoNivel=0,this.tempoCombo=0,this.maiorMultiplicador=1,this.dobrado=!1,this.restoDistancia=0}get multiplicador(){const t=Ze.degrausCombo[this.nivelCombo];return this.dobrado?t*2:t}get comboRestante(){return Math.max(0,this.tempoCombo/Ze.janelaCombo)}atualizar(t,e){if(this.distancia+=e,this.restoDistancia+=e*Ze.porMetro,this.restoDistancia>=1){const n=Math.floor(this.restoDistancia);this.pontos+=n,this.restoDistancia-=n}return(this.nivelCombo>0||this.coletasNoNivel>0)&&(this.tempoCombo-=t,this.tempoCombo<=0)?(this.nivelCombo=0,this.coletasNoNivel=0,this.tempoCombo=0,"quebrou"):null}coletarPoeira(){const t=Ze.poeira*this.multiplicador;this.pontos+=t,this.poeiraColetada++,this.tempoCombo=Ze.janelaCombo,this.coletasNoNivel++;let e=!1;return this.coletasNoNivel>=U0&&this.nivelCombo<Ze.degrausCombo.length-1&&(this.nivelCombo++,this.coletasNoNivel=0,e=!0),this.multiplicador>this.maiorMultiplicador&&(this.maiorMultiplicador=this.multiplicador),{ganho:t,subiu:e}}registrarRaspada(){const t=Ze.quaseAcidente*this.multiplicador;return this.pontos+=t,this.raspadas++,this.tempoCombo=Math.max(this.tempoCombo,Ze.janelaCombo*.6),t}setDobrado(t){this.dobrado=t,this.multiplicador>this.maiorMultiplicador&&(this.maiorMultiplicador=this.multiplicador)}}const O0=.22,F0=.26,z0=2,B0=52;class V0{constructor(t){this.rng=t,this.reiniciar()}reiniciar(){this.cooldownTroca=0,this.pistaDesejada=1,this.erroPendente=0,this.tempoAteErrar=14+this.rng()*22}decidir(t,e,n,s,r){this.cooldownTroca=Math.max(0,this.cooldownTroca-t),this.tempoAteErrar-=t;const a={trocar:0,pular:!1,deslizar:!1},o=e.pistaDestino,l=[1/0,1/0,1/0],c=[null,null,null];for(const p of n){const g=p.grupo.position.z;if(g>1||g<-80)continue;const _=-g;_<l[p.pista]&&(l[p.pista]=_,c[p.pista]=p.tipo)}const h=l[o],u=c[o],f=h/r;if(u===Te.PAREDE&&f<z0){const p=this.melhorPista(o,l,c,r);p!==o&&(a.trocar=Math.sign(p-o),this.cooldownTroca=.14)}else if(u===Te.BAIXO&&f<O0)a.pular=!0;else if(u===Te.PORTAO&&f<F0)a.deslizar=!0;else if(h>30&&this.cooldownTroca<=0){const p=this.pistaComMaisPoeira(o,s,l,c);p!==o&&(a.trocar=Math.sign(p-o),this.cooldownTroca=.55+this.rng()*.5)}return this.tempoAteErrar<=0&&(this.tempoAteErrar=16+this.rng()*26,this.rng()<.55&&(a.pular=!1,a.deslizar=!1,a.trocar=0)),a}melhorPista(t,e,n,s){const r=s*.3;let a=t,o=-1/0;for(let l=0;l<Me.length;l++){const c=Math.abs(l-t);let h=Math.min(e[l],90)-c*6;n[l]===Te.PAREDE&&(h-=200);const u=Math.sign(l-t);for(let f=t+u;u!==0&&f!==l;f+=u)n[f]===Te.PAREDE&&e[f]<r*(c+1)&&(h-=200);h>o&&(o=h,a=l)}return a===t?t:t+Math.sign(a-t)}pistaComMaisPoeira(t,e,n,s){const r=[0,0,0];for(const l of e){const c=l.posicao.z;if(c>0||c<-46)continue;let h=0,u=1/0;for(let f=0;f<Me.length;f++){const p=Math.abs(l.posicao.x-Me[f]);p<u&&(u=p,h=f)}u<Fe.meiaLargura*2&&r[h]++}let a=t,o=r[t]+.5;for(let l=0;l<Me.length;l++)Math.abs(l-t)===1&&(s[l]===Te.PAREDE&&n[l]<B0||r[l]>o&&(o=r[l],a=l));return a}}function ac(){return{minX:0,maxX:0,minY:0,maxY:0,minZ:0,maxZ:0}}function G0(i,t){const e=i.caixa,n=i.grupo.position.x,s=i.grupo.position.z;return t.minX=n-e.meiaX,t.maxX=n+e.meiaX,t.minY=e.minY,t.maxY=e.maxY,t.minZ=s-e.meiaZ,t.maxZ=s+e.meiaZ,t}function H0(i,t){return i.minX<t.maxX&&i.maxX>t.minX&&i.minY<t.maxY&&i.maxY>t.minY&&i.minZ<t.maxZ&&i.maxZ>t.minZ}function oc(i,t,e){return i.minX<t.x+e&&i.maxX>t.x-e&&i.minY<t.y+e&&i.maxY>t.y-e&&i.minZ<t.z+e&&i.maxZ>t.z-e}function k0(i,t){const e=Math.max(t.minX-i.maxX,i.minX-t.maxX);if(e>=0&&e<Ze.margemQuaseAcidente)return!0;const n=Math.max(t.minY-i.maxY,i.minY-t.maxY);return i.maxX>t.minX&&i.minX<t.maxX&&n>=0&&n<Fe.meiaLargura}const tn={ATTRACT:"attract",CONTAGEM:"contagem",JOGANDO:"jogando",PAUSADO:"pausado",FIM:"fim"};class W0{constructor(){this.mundo=new S0,this.rng=ke((Date.now()^1542469173)>>>0),this.spawner=new I0(this.rng,{obstaculos:this.mundo.obstaculos,poeira:this.mundo.poeira,powerups:this.mundo.powerups}),this.pontuacao=new N0,this.bot=new V0(this.rng),this.caixaJogador=ac(),this.caixaObstaculo=ac(),this.estado=tn.ATTRACT,this.modoBot=!0,this.eventos={},this.reiniciarPartida()}reiniciarPartida(){this.mundo.reiniciar(),this.spawner.reiniciar(),this.pontuacao.reiniciar(),this.bot.reiniciar(),this.velocidade=mo(0),this.tempoPartida=0,this.invulneravel=0,this.temEscudo=!1,this.ativos={ima:0,tempo:0,supernova:0},this.puxao=0,this.proximoBuracoNegro=nt(this.rng,_n.intervaloMin,_n.intervaloMax),this.tempoProximaTomada=Yo,this.mundo.tomadaCinema=3,this.mundo.tempoCinema=0,this.morreu=!1}comecar(t){this.modoBot=t,this.reiniciarPartida(),this.mundo.setCinema(t),this.estado=t?tn.JOGANDO:tn.CONTAGEM,St.setIntensidade(t?"menu":"jogo")}acao(t){if(this.estado!==tn.JOGANDO||this.modoBot)return;const e=this.mundo.jogador;t==="esquerda"&&e.trocarPista(-1)||t==="direita"&&e.trocarPista(1)?St.sfxUi():t==="pular"&&e.pular()?St.sfxPulo():t==="deslizar"&&e.deslizar()&&St.sfxDeslize()}atualizar(t){const e=this.estado===tn.JOGANDO,n=this.ativos.tempo>0,r=e?t*(n?fh:1):0;e&&(this.tempoPartida+=t,this.atualizarDificuldade());const a=this.velocidade*r;if(e&&(this.modoBot&&this.pilotarBot(t),this.mundo.jogador.atualizar(r,this.velocidade,St.pulso),this.spawner.atualizar(r,a,this.dificuldade,this.pontuacao.distancia),this.atualizarBuracoNegro(t,a)),this.mundo.atualizar(t,a,this.velocidade,St.pulso,n),this.mundo.poeira.atualizar(r,a,this.mundo.tempo,this.mundo.jogador.grupo.position,this.ativos.ima>0,$n),!e){this.modoBot&&this.atualizarTomadas(t);return}this.pontuacao.atualizar(r,a),this.atualizarPowerups(t),this.testarColisoes(),this.invulneravel>0&&(this.invulneravel-=t),this.modoBot&&this.atualizarTomadas(t)}atualizarDificuldade(){this.dificuldade=C0(this.pontuacao.distancia),this.velocidade=mo(this.dificuldade)}atualizarTomadas(t){this.tempoProximaTomada-=t,this.tempoProximaTomada<=0&&(this.tempoProximaTomada=Yo*nt(this.rng,.7,1.4),this.mundo.proximaTomada(this.rng))}pilotarBot(t){const e=this.mundo.jogador,n=this.bot.decidir(t,e,this.mundo.obstaculos.ativos,this.mundo.poeira.ativos,this.velocidade);n.trocar!==0&&e.trocarPista(n.trocar)&&St.sfxUi(),n.pular&&e.pular()&&St.sfxPulo(),n.deslizar&&e.deslizar()&&St.sfxDeslize()}atualizarBuracoNegro(t,e){const n=this.mundo.buracoNegro;n.ativo||(this.proximoBuracoNegro-=t,this.proximoBuracoNegro<=0&&this.pontuacao.distancia>_n.distMinima&&(n.surgir(),St.sfxBuracoNegro(),this.emitir("aviso","SINGULARIDADE A VISTA","magenta"),this.proximoBuracoNegro=nt(this.rng,_n.intervaloMin,_n.intervaloMax)));const s=n.atualizar(t,e,this.mundo.tempo);if(this.puxao=gi(this.puxao,s,.001,t),this.mundo.jogador.deslocamentoExterno=this.puxao,Math.abs(this.puxao)>.12&&Math.random()<.5){const r=this.mundo.jogador;this.mundo.particulas.emitir(r.x+this.puxao,r.y+.9,.2,{quantidade:1,cor:Vt.violeta,velocidade:3,dirX:Math.sign(this.puxao),dirY:.2,variacao:.8,vida:.5,tamanho:.16,arrasto:1.2})}}atualizarPowerups(t){for(const e of["ima","tempo","supernova"])this.ativos[e]>0&&(this.ativos[e]-=t,this.ativos[e]<=0&&(this.ativos[e]=0,e==="supernova"&&this.pontuacao.setDobrado(!1),this.emitir("powerupFim",e)))}aplicarPowerup(t){St.sfxPowerup();const e=this.mundo.jogador;if(this.mundo.particulas.emitir(e.x,e.y+.9,0,{quantidade:16,cor:xi[t].cor,velocidade:5,vida:.7,tamanho:.24,espalhamento:.9,arrasto:2.2}),t==="escudo")this.temEscudo=!0,e.setEscudo(!0),this.emitir("aviso","BOLHA ATIVA","ciano");else{this.ativos[t]=xi[t].duracao,t==="supernova"&&this.pontuacao.setDobrado(!0);const n={ima:"IMA DE POEIRA",tempo:"DILATACAO TEMPORAL",supernova:"SUPERNOVA x2"};this.emitir("aviso",n[t],t==="supernova"?"magenta":"ciano")}this.emitir("powerup",t)}testarColisoes(){const e=this.mundo.jogador.caixa(this.caixaJogador);for(const r of this.mundo.obstaculos.ativos){const a=G0(r,this.caixaObstaculo);if(H0(e,a)){if(this.sofrerDano(r),this.morreu)return;continue}!r.jaAvaliado&&r.grupo.position.z>0&&(r.jaAvaliado=!0,k0(e,a)&&this.registrarRaspada(r))}const n=Jc.meiaCaixa;for(let r=this.mundo.poeira.ativos.length-1;r>=0;r--){const a=this.mundo.poeira.ativos[r];oc(e,a.posicao,n)&&this.coletarPoeira(a)}const s=Qc.meiaCaixa;for(let r=this.mundo.powerups.ativos.length-1;r>=0;r--){const a=this.mundo.powerups.ativos[r];if(oc(e,a.grupo.position,s)){const o=a.chave;this.mundo.powerups.remover(a),this.aplicarPowerup(o)}}}coletarPoeira(t){const e=t.posicao;this.mundo.particulas.emitir(e.x,e.y,e.z,{quantidade:4,cor:Vt.dourado,velocidade:3.4,vida:.4,tamanho:.18,espalhamento:.35,arrasto:3}),this.mundo.poeira.remover(t);const n=this.pontuacao.coletarPoeira();St.sfxColeta(this.pontuacao.nivelCombo),n.subiu&&(St.sfxCombo(this.pontuacao.nivelCombo),this.emitir("aviso","COMBO x"+Ze.degrausCombo[this.pontuacao.nivelCombo],"dourado"),this.emitir("combo",this.pontuacao.nivelCombo),this.mundo.sacudir(.16)),this.emitir("pontos",n.ganho)}registrarRaspada(t){const e=this.pontuacao.registrarRaspada();St.sfxQuaseAcidente(),this.emitir("aviso","RASPOU!","ciano"),this.emitir("pontos",e),this.mundo.sacudir(.12),this.mundo.particulas.emitir(t.grupo.position.x,1,.4,{quantidade:7,cor:Vt.ciano,velocidade:4.5,dirZ:.8,vida:.35,tamanho:.16,espalhamento:.5,arrasto:3.5})}sofrerDano(t){if(this.invulneravel>0)return;const e=this.mundo.jogador;if(this.temEscudo){this.temEscudo=!1,e.setEscudo(!1),this.invulneravel=Fe.invulneravel,e.piscar(Fe.invulneravel),St.sfxDano(),this.mundo.sacudir(.75),this.mundo.particulas.emitir(e.x,e.y+.9,0,{quantidade:20,cor:Vt.ciano,velocidade:7,vida:.6,tamanho:.26,espalhamento:1.1,arrasto:2.4}),t.desativar();const n=this.mundo.obstaculos.ativos.indexOf(t);n>=0&&this.mundo.obstaculos.ativos.splice(n,1),this.emitir("escudoQuebrou"),this.emitir("aviso","BOLHA ESTOUROU","magenta");return}this.morrer()}morrer(){if(this.morreu)return;this.morreu=!0;const t=this.mundo.jogador;St.sfxDano(),this.mundo.sacudir(1.3),this.mundo.particulas.emitir(t.x,t.y+.9,0,{quantidade:30,cor:Vt.magenta,velocidade:9,vida:.9,tamanho:.3,espalhamento:1.2,arrasto:1.6,gravidade:5}),this.mundo.particulas.emitir(t.x,t.y+.9,0,{quantidade:14,cor:Vt.dourado,velocidade:5,vida:1.1,tamanho:.22,espalhamento:1,arrasto:1.2}),t.grupo.visible=!1,this.estado=tn.FIM,this.emitir("morte",this.resumo())}resumo(){return{pontos:Math.round(this.pontuacao.pontos),distancia:Math.round(this.pontuacao.distancia),poeira:this.pontuacao.poeiraColetada,raspadas:this.pontuacao.raspadas,maiorMultiplicador:this.pontuacao.maiorMultiplicador,duracao:this.tempoPartida,bot:this.modoBot}}emitir(t,e,n){const s=this.eventos[t];s&&s(e,n)}estadoPowerups(){const t=[];this.temEscudo&&t.push({chave:"escudo",restante:1,total:1,infinito:!0});for(const e of["ima","tempo","supernova"])this.ativos[e]>0&&t.push({chave:e,restante:this.ativos[e],total:xi[e].duracao,infinito:!1});return t}}const Zn=i=>document.getElementById(i);class X0{constructor(){this.raiz=Zn("hud"),this.elScore=Zn("hud-score"),this.elDist=Zn("hud-dist"),this.elMult=Zn("hud-mult"),this.elBarra=Zn("hud-combo-barra").firstElementChild,this.elPowerups=Zn("hud-powerups"),this.elAvisos=Zn("hud-avisos"),this.elFlash=Zn("hud-flash"),this.exibido=0,this.ultimoTextoScore="",this.ultimoTextoDist="",this.ultimoMult=-1,this.assinaturaPowerups=""}mostrar(t){this.raiz.classList.toggle("oculto",!t),t||(this.elAvisos.innerHTML="",this.elPowerups.innerHTML="",this.assinaturaPowerups="")}reiniciar(){this.exibido=0,this.ultimoMult=-1,this.assinaturaPowerups="",this.elAvisos.innerHTML="",this.elPowerups.innerHTML="",this.elBarra.style.width="0%"}atualizar(t,e,n){const s=e.pontos;Math.abs(s-this.exibido)<1?this.exibido=s:this.exibido+=(s-this.exibido)*Math.min(1,t*9);const r=Math.floor(this.exibido).toLocaleString("pt-BR");r!==this.ultimoTextoScore&&(this.elScore.textContent=r,this.ultimoTextoScore=r);const a=Math.floor(e.distancia)+" M";a!==this.ultimoTextoDist&&(this.elDist.textContent=a,this.ultimoTextoDist=a);const o=e.multiplicador;o!==this.ultimoMult&&(this.elMult.textContent="x"+o,this.elMult.classList.toggle("ativo",o>1),o>this.ultimoMult&&this.ultimoMult>=0&&(this.elMult.classList.remove("sobe"),this.elMult.offsetWidth,this.elMult.classList.add("sobe")),this.ultimoMult=o),this.elBarra.style.width=(e.comboRestante*100).toFixed(0)+"%";const l=n.map(c=>c.chave+Math.ceil(c.restante*4)).join(",");l!==this.assinaturaPowerups&&(this.assinaturaPowerups=l,this.desenharPowerups(n))}desenharPowerups(t){if(t.length===0){this.elPowerups.innerHTML="";return}let e="";for(const n of t){const s=xi[n.chave],r=n.infinito?1:Math.max(0,n.restante/n.total);e+='<div class="pu '+s.classe+'"><span>'+s.rotulo+'</span><span class="pu-tempo"><i style="width:'+(r*100).toFixed(0)+'%"></i></span></div>'}this.elPowerups.innerHTML=e}aviso(t,e){const n=document.createElement("div");for(n.className="aviso"+(e?" "+e:""),n.textContent=t,this.elAvisos.appendChild(n);this.elAvisos.children.length>3;)this.elAvisos.removeChild(this.elAvisos.firstChild);setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},950)}flash(){this.elFlash.classList.remove("dispara"),this.elFlash.offsetWidth,this.elFlash.classList.add("dispara")}bateScore(){this.elScore.classList.remove("bate"),this.elScore.offsetWidth,this.elScore.classList.add("bate")}get degrausCombo(){return Ze.degrausCombo}}const hr=17;function q0(){const i=100/hr,t=[],e=(hr-1)/2;for(let s=0;s<hr;s++)for(let r=0;r<hr;r++){const a=(r-e)/e,o=(s-e)/e,l=Math.pow(Math.abs(a),.5)+Math.pow(Math.abs(o),.5);if(l>1.02)continue;let c;l<.42?c="#ffffff":l<.7?c="#ffd23f":c="#ff9a1f",t.push('<rect x="'+(r*i).toFixed(2)+'" y="'+(s*i).toFixed(2)+'" width="'+(i+.2).toFixed(2)+'" height="'+(i+.2).toFixed(2)+'" fill="'+c+'"/>')}const n=(s,r,a,o,l)=>'<rect x="'+s+'" y="'+r+'" width="'+a+'" height="'+a+'" fill="'+o+'" opacity="'+l+'"/>';return t.push(n(4,12,i*.8,"#22e6ff",.9)),t.push(n(88,20,i*.7,"#22e6ff",.75)),t.push(n(12,84,i*.7,"#ff2f87",.8)),t.push(n(82,78,i*.9,"#ffd23f",.7)),'<svg class="logo-estrela" viewBox="0 0 100 100" aria-hidden="true">'+t.join("")+"</svg>"}function Y0(i){const t=_r.split(" "),e=t[0]||_r,n=t.slice(1).join(" ");i.innerHTML='<div class="logo">'+q0()+'<div class="logo-texto"><span class="logo-linha1">'+e+"</span>"+(n?'<span class="logo-linha2">'+n+"</span>":"")+'<div class="logo-barra"></div></div></div>'}function j0(){return null}const bs=j0(),ws=bs!==null,lc=new Set;function go(i,t){lc.has(i)||(lc.add(i),console.warn("[placar] "+t))}function eh(i,t){t.status===404?go("404","o servidor em "+bs+" respondeu 404 para "+i+`.
A API do placar fica no server.js (porta 3000 por padrao), nao no servidor de desenvolvimento do Vite (5173).
Rode "node server.js" e aponte LEADERBOARD_URL para a porta dele - ou use LEADERBOARD_URL = 'auto' e abra o jogo pelo proprio server.js.`):t.status>=500&&go("5xx","o servidor respondeu "+t.status+" em "+i+".")}function nh(i){const t=new AbortController,e=setTimeout(()=>t.abort(),i);return{sinal:t.signal,cancelar:()=>clearTimeout(e)}}async function Z0(i){if(!ws)return null;const t=nh(cc);try{const e=await fetch(bs+"/api/score",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nickname:String(i.nickname||"ANONIMO").slice(0,12),score:Math.round(i.score)||0,distance:Math.round(i.distance)||0,maxCombo:Math.round(i.maxCombo)||1,stardust:Math.round(i.stardust)||0}),signal:t.sinal});return e.ok||eh("/api/score",e),e.ok}catch(e){return go("rede","nao deu para falar com "+bs+" ("+(e&&e.name)+`).
Confira se o server.js esta rodando nessa maquina e se o firewall liberou a porta para a rede privada.`),!1}finally{t.cancelar()}}async function K0(i=10){if(!ws)return null;const t=nh(cc);try{const e=await fetch(bs+"/api/top?limit="+i,{signal:t.sinal});if(!e.ok)return eh("/api/top",e),null;const n=await e.json();return Array.isArray(n)?n:n.top||null}catch{return null}finally{t.cancelar()}}const se=i=>document.getElementById(i),$0=["tela-attract","tela-nick","tela-partida","tela-pausa","tela-fim","tela-config","tela-erro"];class J0{constructor(t){this.cb=t,this.rng=ke((Date.now()^523124044)>>>0),this.atual=null,this.configSelecionada=0,this.sugestaoAtual=0,Y0(se("logo-slot")),document.title=_r,this.inputNick=se("input-nick"),this.inputNick.addEventListener("input",()=>{this.inputNick.value=this.limparApelido(this.inputNick.value)}),se("sugestoes-lista").addEventListener("click",e=>{const n=e.target.closest(".sugestao");n&&(this.inputNick.value=n.textContent,this.inputNick.focus(),this.cb.aoClicarSugestao&&this.cb.aoClicarSugestao())}),this.montarConfig()}limparApelido(t){return t.toUpperCase().replace(/[^A-Z0-9ÁÀÂÃÉÊÍÓÔÕÚÇ _.-]/g,"").slice(0,12)}mostrar(t){for(const e of $0){const n=se(e);if(!n)continue;const s=e===t;n.classList.toggle("oculto",!s)}this.atual=t}esconderTudo(){this.mostrar(null)}abrirAttract(t){this.mostrar("tela-attract"),this.desenharPlacar(t),this.setVitrine(this.vitrine)}setVitrine(t){if(this.vitrine=!!t,se("tela-attract").classList.toggle("vitrine",this.vitrine),hn){se("chamada-texto").textContent=this.vitrine?"APERTE A!":"APERTE A OU ENTER PARA COMECAR";return}se("chamada-texto").textContent=this.vitrine?"APERTE ENTER!":"PRESSIONE ENTER PARA COMECAR"}desenharPlacar(t){const e=se("lista-placar"),n=se("titulo-placar");if(t&&t.length){n.textContent="TOP 10 DA REDE",e.innerHTML=t.slice(0,10).map((r,a)=>"<li><i>"+String(a+1).padStart(2,"0")+"</i><b>"+this.escapar(r.nickname||"ANONIMO")+"</b><u>"+Number(r.score||0).toLocaleString("pt-BR")+"</u></li>").join("");return}n.textContent=ws?"RECORDE LOCAL (REDE OFFLINE)":"RECORDE LOCAL";const s=Bt.get("recorde");if(!s){e.innerHTML='<li class="placar-vazio">NINGUEM CORREU AINDA. SEJA O PRIMEIRO.</li>';return}e.innerHTML='<li class="destaque"><i>01</i><b>'+this.escapar(Bt.get("recordeApelido")||"ANONIMO")+"</b><u>"+s.toLocaleString("pt-BR")+"</u></li><li><i></i><b>MELHOR DISTANCIA</b><u>"+(Bt.get("recordeDistancia")||0)+" M</u></li>"}escapar(t){return String(t).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}abrirNickname(){this.mostrar("tela-nick");const t=Bt.get("apelido");this.sugestoes=this.sortearSugestoes(),this.sugestaoAtual=0,se("sugestoes-lista").innerHTML=this.sugestoes.map(e=>'<button type="button" class="sugestao">'+e.toUpperCase()+"</button>").join(""),this.inputNick.value=t||this.sugestoes[0].toUpperCase(),setTimeout(()=>{this.inputNick.focus(),this.inputNick.select()},30)}sortearSugestoes(){const t=[...gh],e=[];for(let n=0;n<3&&t.length;n++)e.push(t.splice(He(this.rng,0,t.length-1),1)[0]);return e}proximaSugestao(){!this.sugestoes||!this.sugestoes.length||(this.sugestaoAtual=(this.sugestaoAtual+1)%this.sugestoes.length,this.inputNick.value=this.sugestoes[this.sugestaoAtual].toUpperCase(),this.inputNick.select())}apelidoDigitado(){return this.limparApelido(this.inputNick.value).trim()||"ANONIMO"}abrirContagem(){this.mostrar("tela-partida")}setContagem(t){const e=se("contagem");e.textContent=t,e.classList.remove("contagem"),e.offsetWidth,e.classList.add("contagem")}abrirFim(t,e){this.mostrar("tela-fim"),se("fim-titulo").textContent=e?"VOCE VOOU":"FIM DE LINHA",se("fim-recorde").classList.toggle("oculto",!e),se("fim-envio").textContent="",se("fim-envio").className="fim-envio",se("fim-dist").textContent="0",se("fim-poeira").textContent="0",se("fim-combo").textContent="x1",se("fim-score").textContent="0",this.animarNumero(se("fim-score"),t.pontos,900,n=>n.toLocaleString("pt-BR")),this.animarNumero(se("fim-dist"),t.distancia,700,n=>String(n)),this.animarNumero(se("fim-poeira"),t.poeira,700,n=>String(n)),setTimeout(()=>{se("fim-combo").textContent="x"+t.maiorMultiplicador},620)}animarNumero(t,e,n,s){const r=performance.now(),a=o=>{const l=Math.min(1,(o-r)/n),c=1-Math.pow(1-l,3);t.textContent=s(Math.round(e*c)),l<1&&requestAnimationFrame(a)};requestAnimationFrame(a)}statusEnvio(t,e){const n=se("fim-envio");n.textContent=t,n.className="fim-envio"+(e?" "+e:"")}abrirPausa(){this.mostrar("tela-pausa")}abrirErro(t){this.mostrar("tela-erro"),se("erro-texto").textContent=t}montarConfig(){this.itensConfig=[{rotulo:"VOLUME",valor:()=>Bt.get("mudo")?"MUDO":Math.round(Bt.get("volume")*100)+"%",ajustar:t=>{if(Bt.get("mudo")&&t>0)Bt.set("mudo",!1);else{const e=Math.max(0,Math.min(1,Bt.get("volume")+t*.1));Bt.set("volume",Number(e.toFixed(2))),e===0?Bt.set("mudo",!0):Bt.set("mudo",!1)}this.cb.aoMudarAudio()}},{rotulo:"LINHAS DE TUBO",valor:()=>Bt.get("scanlines")?"LIGADAS":"DESLIGADAS",ajustar:()=>{Bt.set("scanlines",!Bt.get("scanlines")),this.cb.aoMudarVideo()}},{rotulo:"TREMOR DE TELA",valor:()=>Bt.get("tremor")?"LIGADO":"DESLIGADO",ajustar:()=>{Bt.set("tremor",!Bt.get("tremor")),this.cb.aoMudarVideo()}},{rotulo:"MOVIMENTO REDUZIDO",valor:()=>Bt.get("movimentoReduzido")?"LIGADO":"DESLIGADO",ajustar:()=>{Bt.set("movimentoReduzido",!Bt.get("movimentoReduzido")),this.cb.aoMudarVideo()}},{rotulo:"QUALIDADE GRAFICA",valor:()=>{const t=Mi[Bt.get("qualidade")];return t.rotulo+" ("+t.largura+"x"+t.altura+")"},ajustar:t=>{const e=Math.max(0,Math.min(Mi.length-1,Bt.get("qualidade")-t));Bt.merge({qualidade:e,qualidadeManual:!0}),this.cb.aoMudarQualidade(e)}}]}abrirConfig(){this.mostrar("tela-config"),this.configSelecionada=0,this.desenharConfig()}desenharConfig(){se("lista-config").innerHTML=this.itensConfig.map((t,e)=>'<li class="'+(e===this.configSelecionada?"sel":"")+'"><span>'+t.rotulo+'</span><span class="valor">'+t.valor()+"</span></li>").join("")}navegarConfig(t){this.configSelecionada=(this.configSelecionada+t+this.itensConfig.length)%this.itensConfig.length,this.desenharConfig()}ajustarConfig(t){this.itensConfig[this.configSelecionada].ajustar(t),this.desenharConfig()}get degrausCombo(){return Ze.degrausCombo}}function Q0(){return/(^|\/)placar\/?$/.test(window.location.pathname)}function t_(){document.title="PLACAR - STARDUST RUNNER",document.body.classList.remove("sem-scanlines","movimento-reduzido"),document.body.innerHTML='<header class="placar-topo"><h1 class="placar-titulo">STARDUST RUNNER<small>QUADRO DE RECORDES</small></h1><div class="contagem"><b id="total">0</b><br />CORRIDAS</div></header><div class="colunas"><section class="painel"><h2>MELHORES DA REDE</h2><ol id="top" class="top"></ol><div id="top-vazio" class="aviso">NINGUEM CORREU AINDA.<br />AGUARDANDO A PRIMEIRA CORRIDA.</div></section><section class="painel"><h2>ULTIMAS</h2><ol id="feed" class="feed"></ol><div id="feed-vazio" class="aviso">AGUARDANDO A PRIMEIRA CORRIDA.</div></section></div><footer class="placar-rodape"><span class="pisca">★</span><span>STARDUST RUNNER</span><span class="pisca">★</span></footer>';const i=document.createElement("style");i.textContent='html,body{height:100%}body{background:#02030a!important;color:#e8f4ff!important;font-family:ui-monospace,"Cascadia Mono",Consolas,monospace!important;padding:2.6vh 2.4vw!important;overflow:hidden!important;display:flex!important;flex-direction:column!important;gap:2vh!important;touch-action:auto!important;user-select:none!important}body::before{content:"";position:fixed;inset:0;z-index:-2;opacity:.55;background-image:radial-gradient(1px 1px at 20% 30%,#fff,transparent),radial-gradient(1px 1px at 70% 60%,#cfe4ff,transparent),radial-gradient(1px 1px at 40% 80%,#fff,transparent),radial-gradient(2px 2px at 85% 20%,#9fd4ff,transparent),radial-gradient(1px 1px at 10% 70%,#ffd8ec,transparent);background-size:340px 340px,420px 420px,260px 260px,520px 520px,300px 300px}body::after{content:"";position:fixed;left:-10vw;right:-10vw;bottom:-22vh;height:46vh;z-index:-2;pointer-events:none;background:radial-gradient(60% 100% at 50% 100%,rgba(34,230,255,.16),rgba(255,47,135,.07) 45%,transparent 72%)}html::before{content:"";position:fixed;inset:0;z-index:60;pointer-events:none;background:repeating-linear-gradient(to bottom,rgba(0,0,0,.22) 0px,rgba(0,0,0,.22) 1px,rgba(255,255,255,.02) 1px,rgba(255,255,255,.02) 3px);opacity:.5}html::after{content:"";position:fixed;inset:0;z-index:61;pointer-events:none;box-shadow:inset 0 0 18vmin rgba(2,3,10,.9)}.placar-topo{display:flex;align-items:center;gap:1.6vw;flex-wrap:wrap}.placar-titulo{font-size:clamp(26px,3.4vw,54px);letter-spacing:.12em;line-height:1;text-shadow:2px 0 0 #ff2f87,-2px 0 0 #22e6ff;margin:0;padding:0}.placar-titulo small{display:block;font-size:.3em;letter-spacing:.42em;color:#22e6ff;text-shadow:none;margin-top:.5em}.contagem{margin-left:auto;text-align:right;font-size:clamp(11px,1.1vw,15px);letter-spacing:.2em;color:#6d84a8}.contagem b{color:#e8f4ff;font-weight:400;font-size:1.5em}.colunas{flex:1;min-height:0;display:grid;grid-template-columns:2.5fr 1fr;gap:1.6vw}.painel{min-height:0;display:flex;flex-direction:column;border:1px solid rgba(34,230,255,.34);background:linear-gradient(180deg,rgba(10,15,42,.9),rgba(2,3,10,.94));clip-path:polygon(20px 0,100% 0,100% calc(100% - 20px),calc(100% - 20px) 100%,0 100%,0 20px);padding:1.8vh 1.4vw}.painel h2{font-size:clamp(12px,1.2vw,18px);letter-spacing:.34em;color:#ffd23f;margin:0 0 1.2vh;flex:none}.painel ol{list-style:none;flex:1;min-height:0;display:flex;flex-direction:column;gap:.4vh;margin:0;padding:0}.top li{flex:1;min-height:0;display:grid;grid-template-columns:2.2em 1fr auto;gap:1vw;align-items:center;padding:0 .6vw;font-size:clamp(14px,2.4vh,34px);border-left:.28em solid transparent}.top .pos{color:#6d84a8;font-variant-numeric:tabular-nums}.top .quem{min-width:0}.top .nome{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;letter-spacing:.08em}.top .detalhe{display:block;font-size:.5em;letter-spacing:.18em;color:#6d84a8;margin-top:.2em}.top .pts{font-variant-numeric:tabular-nums;color:#ffd23f;letter-spacing:.04em}.top li.p1{border-left-color:#ffd23f;background:linear-gradient(90deg,rgba(255,210,63,.14),transparent 70%);font-size:clamp(18px,3.4vh,46px)}.top li.p1 .pos,.top li.p1 .nome{color:#ffd23f}.top li.p2{border-left-color:#22e6ff}.top li.p2 .pos,.top li.p2 .nome{color:#22e6ff}.top li.p3{border-left-color:#ff2f87}.top li.p3 .pos,.top li.p3 .nome{color:#ff2f87}.top li.novo{animation:placar-chega .9s steps(6,end)}@keyframes placar-chega{0%{background:rgba(34,230,255,.4);transform:translateX(-.5em)}100%{background:transparent;transform:none}}.feed li{display:grid;grid-template-columns:1fr auto;gap:.6em;align-items:baseline;font-size:clamp(11px,1.6vh,20px);padding:.25vh 0;border-bottom:1px solid rgba(34,230,255,.08)}.feed .nome{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;letter-spacing:.06em}.feed .pts{color:#ffd23f;font-variant-numeric:tabular-nums}.feed li:first-child .nome{color:#22e6ff}.aviso{flex:1;display:flex;flex-direction:column;justify-content:center;gap:1.2vh;color:#6d84a8;font-size:clamp(12px,1.5vh,20px);letter-spacing:.14em;line-height:1.7;text-align:center}.placar-rodape{flex:none;display:flex;gap:1vw;align-items:center;justify-content:center;color:#6d84a8;font-size:clamp(10px,1.05vw,15px);letter-spacing:.34em}.placar-rodape .pisca{color:#ffd23f;animation:placar-piscar 1.2s steps(2,end) infinite}@keyframes placar-piscar{0%,60%{opacity:1}61%,100%{opacity:.2}}',document.head.appendChild(i);const t=Object.create(null);let e=!0;function n(c,h,u){const f=document.createElement("span");return f.className=h,f.textContent=u,c.appendChild(f),f}function s(c){const h=new Date(c);return String(h.getHours()).padStart(2,"0")+":"+String(h.getMinutes()).padStart(2,"0")}function r(c,h){document.getElementById(c).style.display=h?"":"none"}function a(c){const h=document.getElementById("top");r("top-vazio",c.length===0),h.style.display=c.length===0?"none":"",h.textContent="",c.forEach((u,f)=>{const p=document.createElement("li");p.className="p"+(f+1);const g=u.nickname+":"+u.score;!e&&!t[g]&&(p.className+=" novo"),t[g]=!0,n(p,"pos",String(f+1).padStart(2,"0"));const _=document.createElement("span");_.className="quem",n(_,"nome",u.nickname),n(_,"detalhe",u.distance+" METROS   COMBO x"+u.maxCombo+"   "+u.stardust+" POEIRAS"),p.appendChild(_),n(p,"pts",Number(u.score).toLocaleString("pt-BR")),h.appendChild(p)})}function o(c){const h=document.getElementById("feed");r("feed-vazio",c.length===0),h.style.display=c.length===0?"none":"",h.textContent="",c.forEach(u=>{const f=document.createElement("li"),p=document.createElement("span");p.className="nome",p.textContent=u.nickname,f.appendChild(p);const g=document.createElement("span");g.className="pts",g.textContent=Number(u.score).toLocaleString("pt-BR")+"  "+s(u.at),f.appendChild(g),h.appendChild(f)})}function l(){Promise.all([fetch("/api/top?limit=10",{cache:"no-store"}).then(c=>c.json()),fetch("/api/recent?limit=14",{cache:"no-store"}).then(c=>c.json()),fetch("/api/total",{cache:"no-store"}).then(c=>c.json())]).then(c=>{a(c[0]||[]),o(c[1]||[]),document.getElementById("total").textContent=(c[2]||{}).total||0,e=!1}).catch(()=>{})}l(),setInterval(l,3e3)}const yt={ATTRACT:"attract",NICK:"nick",CONTAGEM:"contagem",JOGANDO:"jogando",PAUSA:"pausa",FIM:"fim",CONFIG:"config",ERRO:"erro"};class e_{constructor(){this.renderizador=new Rg,this.fase=yt.ATTRACT,this.faseAnterior=yt.ATTRACT,this.tempoContagem=0,this.passoContagem=0,this.tempoAposMorteBot=0,this.topRemoto=null,this.ultimoQuadro=0,this.pausadoPorAba=!1,this.tempoChecarSom=0,this.idQuadro=0,this.encerrado=!1,this.timers=new Set}agendar(t,e){const n=setTimeout(()=>{this.timers.delete(n),t()},e);this.timers.add(n)}iniciar(){hn&&this.prepararModoArcade();const t=Bt.get("qualidade");if(!this.renderizador.iniciar(t)){this.mostrarErroWebGL(),hn&&(ln.aoAgir(e=>{e==="sair"&&this.encerrar()}),ec());return}this.governador=new Cg(this.renderizador),this.governador.manual=Bt.get("qualidadeManual"),this.jogo=new W0,this.hud=new X0,this.telas=new J0({aoMudarAudio:()=>this.aplicarPreferenciasAudio(),aoMudarVideo:()=>this.aplicarPreferenciasVideo(),aoMudarQualidade:e=>{this.governador.aplicarManual(e),this.jogo.mundo.aplicarQualidade(e,this.governador.escalaParticulas),St.sfxUi(!0)},aoClicarSugestao:()=>St.sfxUi()}),this.governador.aoDegradar=(e,n)=>{this.jogo.mundo.aplicarQualidade(e,n)},this.ligarEventosDoJogo(),this.aplicarPreferenciasVideo(),this.jogo.mundo.aplicarQualidade(t,this.governador.escalaParticulas),ln.aoAgir((e,n)=>this.tratarAcao(e,n)),this.ligarAudio(),ln.noPrimeiroGesto(()=>this.ligarAudio()),this.ligarEventosDeJanela(),!hn&&this.ehTouch()&&document.getElementById("toque-guia").classList.remove("oculto"),this.entrarAttract(),this.ultimoQuadro=performance.now(),this.idQuadro=requestAnimationFrame(e=>this.quadro(e)),hn&&ec()}prepararModoArcade(){document.body.classList.add("modo-arcade");const t=document.querySelector(".lista-controles");t&&(t.innerHTML="<li><b>&larr; &rarr;</b><span>TROCAR DE PISTA</span></li><li><b>&uarr; / A</b><span>PULAR</span></li><li><b>&darr; / B</b><span>DESLIZAR</span></li><li><b>VOLTAR</b><span>SAIR DO JOGO</span></li>")}encerrar(){if(!this.encerrado){this.encerrado=!0,cancelAnimationFrame(this.idQuadro);for(const t of this.timers)clearTimeout(t);this.timers.clear();try{St.suspender()}catch{}try{const t=this.renderizador.renderer;t&&(t.dispose(),t.forceContextLoss())}catch{}Ng("user-request")}}ehTouch(){return"ontouchstart"in window||navigator.maxTouchPoints>0}mostrarErroWebGL(){const t={mostrar:()=>{}};document.getElementById("tela-erro").classList.remove("oculto"),document.getElementById("erro-texto").textContent="Seu navegador nao suporta WebGL, que e o que o "+_r+" usa para desenhar. Tente o Chrome ou o Edge atualizados, e confira se a aceleracao de hardware esta ligada nas configuracoes do navegador.",this.telas=t}aplicarPreferenciasAudio(){St.setVolume(Bt.get("volume")),St.setMudo(Bt.get("mudo"))}ligarAudio(){const t=!St.pronto;if(!St.iniciar())return;t||St.retomar(),this.aplicarPreferenciasAudio();const e=this.fase===yt.JOGANDO;St.setAtenuacao(this.fase===yt.ATTRACT?qo:1),St.setIntensidade(e?"jogo":"menu")}aplicarPreferenciasVideo(){document.body.classList.toggle("sem-scanlines",!Bt.get("scanlines")),document.body.classList.toggle("movimento-reduzido",Bt.get("movimentoReduzido")),this.jogo.mundo.tremorHabilitado=Bt.get("tremor")&&!Bt.get("movimentoReduzido")}ligarEventosDoJogo(){this.jogo.eventos={aviso:(t,e)=>{this.fase===yt.JOGANDO&&this.hud.aviso(t,e)},pontos:()=>{this.fase===yt.JOGANDO&&this.hud.bateScore()},combo:()=>{},powerup:()=>{},powerupFim:()=>{},escudoQuebrou:()=>{this.fase===yt.JOGANDO&&this.hud.flash()},morte:t=>this.aoMorrer(t)}}ligarEventosDeJanela(){document.addEventListener("visibilitychange",()=>{document.hidden?(this.pausadoPorAba=!0,St.suspender(),this.fase===yt.JOGANDO&&this.pausar()):(this.pausadoPorAba=!1,this.ultimoQuadro=performance.now(),St.retomar())}),window.addEventListener("blur",()=>{this.fase===yt.JOGANDO&&this.pausar()}),this.renderizador.aoPerderContexto=()=>{this.fase===yt.JOGANDO&&this.pausar(),this.telas.abrirErro(hn?"A placa de video reiniciou e o desenho foi perdido. Aperte VOLTAR e abra o jogo de novo.":"A placa de video reiniciou e o desenho foi perdido. Recarregue a pagina (F5) para voltar a correr."),this.fase=yt.ERRO}}entrarAttract(){this.fase=yt.ATTRACT,this.hud.mostrar(!1),this.jogo.comecar(!0),this.telas.setVitrine(!1),this.telas.abrirAttract(this.topRemoto),St.setAtenuacao(qo),St.setIntensidade("menu"),this.tempoAposMorteBot=0,this.atualizarPlacarRemoto()}async atualizarPlacarRemoto(){if(!ws)return;const t=await K0(10);t&&this.fase===yt.ATTRACT&&(this.topRemoto=t,this.telas.desenharPlacar(t))}entrarNickname(){this.fase=yt.NICK,this.hud.mostrar(!1),this.telas.abrirNickname(),ln.setCapturaTexto(!0),St.sfxUi(!0)}entrarContagem(){ln.setCapturaTexto(!1),this.fase=yt.CONTAGEM,this.jogo.comecar(!1),this.jogo.estado=tn.CONTAGEM,this.hud.reiniciar(),this.hud.mostrar(!0),this.telas.abrirContagem(),this.passoContagem=3,this.tempoContagem=0,this.telas.setContagem("3"),St.sfxUi(),St.setAtenuacao(1),St.setIntensidade("jogo")}entrarJogo(){this.fase=yt.JOGANDO,this.jogo.estado=tn.JOGANDO,this.telas.esconderTudo(),this.hud.mostrar(!0)}pausar(){this.fase===yt.JOGANDO&&(this.fase=yt.PAUSA,this.jogo.estado=tn.PAUSADO,this.telas.abrirPausa(),St.setIntensidade("menu"),St.sfxUi())}despausar(){this.fase===yt.PAUSA&&(this.fase=yt.JOGANDO,this.jogo.estado=tn.JOGANDO,this.telas.esconderTudo(),St.setIntensidade("jogo"),St.sfxUi())}abrirConfig(){this.fase!==yt.CONFIG&&(this.faseAnterior=this.fase,this.fase===yt.JOGANDO&&(this.jogo.estado=tn.PAUSADO),this.fase===yt.NICK&&ln.setCapturaTexto(!1),this.fase=yt.CONFIG,this.telas.abrirConfig(),St.sfxUi(!0))}fecharConfig(){const t=this.faseAnterior;this.fase=t,St.sfxUi(),t===yt.ATTRACT?this.telas.abrirAttract(this.topRemoto):t===yt.NICK?(this.telas.abrirNickname(),ln.setCapturaTexto(!0)):t===yt.PAUSA?this.telas.abrirPausa():t===yt.FIM?this.telas.mostrar("tela-fim"):t===yt.JOGANDO?(this.telas.esconderTudo(),this.jogo.estado=tn.JOGANDO):this.telas.esconderTudo()}aoMorrer(t){if(t.bot){this.tempoAposMorteBot=2.6;return}this.fase=yt.FIM,this.hud.mostrar(!1),St.setIntensidade("menu");const e=Bt.get("apelido")||"ANONIMO",n=kg(e,t.pontos,t.distancia);this.telas.abrirFim(t,n),n&&this.agendar(()=>this.jogo.mundo.sacudir(.4),700),hn&&Og(t.pontos),ws&&(this.telas.statusEnvio("ENVIANDO PONTUACAO...",""),Z0({nickname:e,score:t.pontos,distance:t.distancia,maxCombo:t.maiorMultiplicador,stardust:t.poeira}).then(s=>{this.fase===yt.FIM&&(s?this.telas.statusEnvio("PONTUACAO ENVIADA","ok"):this.telas.statusEnvio("OFFLINE - PONTUACAO SO NO LOCAL","falha"),this.topRemoto=null)}))}tratarAcao(t,e){if(hn){if(t==="sair"){this.encerrar();return}t=Ig(t,this.fase)}if(!(this.encerrado||this.fase===yt.ERRO)){if(t==="telaCheia"){Gg();return}if(t==="fps"){this.governador.alternarContador();return}if(t==="mudo"){Bt.set("mudo",!Bt.get("mudo")),this.aplicarPreferenciasAudio(),this.fase===yt.JOGANDO&&this.hud.aviso(Bt.get("mudo")?"SOM DESLIGADO":"SOM LIGADO","ciano");return}if(t==="config"&&this.fase!==yt.CONFIG){this.abrirConfig();return}switch(this.fase){case yt.ATTRACT:t==="confirmar"?hn?this.entrarContagem():this.entrarNickname():this.telas.vitrine&&(this.telas.setVitrine(!1),St.sfxUi());break;case yt.NICK:t==="confirmar"?(Bt.set("apelido",this.telas.apelidoDigitado()),this.entrarContagem()):t==="voltar"?(ln.setCapturaTexto(!1),this.entrarAttract()):t==="proximaSugestao"&&(this.telas.proximaSugestao(),St.sfxUi());break;case yt.CONTAGEM:break;case yt.JOGANDO:t==="pausa"||t==="voltar"?this.pausar():this.jogo.acao(t);break;case yt.PAUSA:t==="pausa"||t==="confirmar"?this.despausar():t==="voltar"&&this.entrarAttract();break;case yt.FIM:t==="confirmar"?this.entrarContagem():t==="voltar"&&this.entrarAttract();break;case yt.CONFIG:t==="voltar"||t==="config"?this.fecharConfig():t==="pular"?(this.telas.navegarConfig(-1),St.sfxUi()):t==="deslizar"?(this.telas.navegarConfig(1),St.sfxUi()):t==="esquerda"?(this.telas.ajustarConfig(-1),St.sfxUi(!0)):t==="direita"?(this.telas.ajustarConfig(1),St.sfxUi(!0)):t==="confirmar"&&this.fecharConfig();break}}}quadro(t){if(this.encerrado||(this.idQuadro=requestAnimationFrame(n=>this.quadro(n)),this.fase===yt.ERRO))return;let e=(t-this.ultimoQuadro)/1e3;this.ultimoQuadro=t,e>0||(e=1/60),e>.1&&(e=.1),!this.pausadoPorAba&&(St.atualizar(e),this.governador.atualizar(e),this.avancarFluxo(e),this.conferirSom(e),this.jogo.atualizar(e),this.fase===yt.JOGANDO&&this.hud.atualizar(e,this.jogo.pontuacao,this.jogo.estadoPowerups()),this.renderizador.render(this.jogo.mundo.cena,this.jogo.mundo.camera))}conferirSom(t){if(this.tempoChecarSom-=t,this.tempoChecarSom>0)return;this.tempoChecarSom=.5;const e=St.bloqueado&&this.fase===yt.ATTRACT;document.getElementById("aviso-som").classList.toggle("oculto",!e)}avancarFluxo(t){if(this.fase===yt.CONTAGEM){this.tempoContagem+=t,this.tempoContagem>=.62&&(this.tempoContagem=0,this.passoContagem--,this.passoContagem>0?(this.telas.setContagem(String(this.passoContagem)),St.sfxUi()):this.passoContagem===0?(this.telas.setContagem("VAI!"),St.sfxCombo(2)):this.entrarJogo());return}if(this.fase===yt.ATTRACT&&!this.telas.vitrine&&ln.ociosoSegundos()>mh&&this.telas.setVitrine(!0),this.fase===yt.ATTRACT&&this.tempoAposMorteBot>0){this.tempoAposMorteBot-=t,this.tempoAposMorteBot<=0&&(this.jogo.comecar(!0),this.telas.abrirAttract(this.topRemoto));return}(this.fase===yt.NICK||this.fase===yt.FIM||this.fase===yt.PAUSA||this.fase===yt.CONFIG)&&ln.ociosoSegundos()>ph&&(ln.setCapturaTexto(!1),this.entrarAttract())}}if(Q0())t_();else{const i=new e_;i.iniciar(),window.stardust={versao:"1.0.0",jogo:()=>i.jogo,fps:()=>i.governador.fps,resolucoes:Mi,combos:Ze.degrausCombo,forcarVitrine:()=>i.telas.setVitrine(!0),audio:()=>St.diagnostico()}}
