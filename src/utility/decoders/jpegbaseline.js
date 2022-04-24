var JpegImage=function(){function a(){}function b(a,b){for(var c,d,e=0,f=[],g=16;0<g&&!a[g-1];)g--;f.push({children:[],index:0});var h,l=f[0];for(c=0;c<g;c++){for(d=0;d<a[c];d++){for(l=f.pop(),l.children[l.index]=b[e];0<l.index;)l=f.pop();for(l.index++,f.push(l);f.length<=c;)f.push(h={children:[],index:0}),l.children[l.index]=h.children,l=h;e++}c+1<g&&(f.push(h={children:[],index:0}),l.children[l.index]=h.children,l=h)}return f[0].children}function c(a,b,c){return 64*((a.blocksPerLine+1)*b+c)}function d(a,b,d,e,f,g,l,m,o){function p(){if(0<M)return M--,1&L>>M;if(L=a[b++],255===L){var c=a[b++];if(c)throw"unexpected marker: "+(L<<8|c).toString(16)}return M=7,L>>>7}function q(a){for(var b=a;;){if(b=b[p()],"number"==typeof b)return b;if("object"!=typeof b)throw"invalid huffman sequence"}}function t(a){for(var b=0;0<a;)b=b<<1|p(),a--;return b}function u(a){if(1===a)return 1===p()?1:-1;var b=t(a);return b>=1<<a-1?b:b+(-1<<a)+1}function w(a,b){var c=q(a.huffmanTableDC),d=0===c?0:u(c);a.blockData[b]=a.pred+=d;for(var e=1;64>e;){var f=q(a.huffmanTableAC),g=15&f,h=f>>4;if(0===g){if(15>h)break;e+=16;continue}e+=h;var j=i[e];a.blockData[b+j]=u(g),e++}}function x(a,b){var c=q(a.huffmanTableDC),d=0===c?0:u(c)<<o;a.blockData[b]=a.pred+=d}function y(a,b){a.blockData[b]|=p()<<o}function z(a,b){if(0<N)return void N--;for(var c=g;c<=l;){var d=q(a.huffmanTableAC),e=15&d,f=d>>4;if(0===e){if(15>f){N=t(f)+(1<<f)-1;break}c+=16;continue}c+=f;var h=i[c];a.blockData[b+h]=u(e)*(1<<o),c++}}function A(a,b){for(var c,d,e,f=g,h=0;f<=l;){switch(e=i[f],O){case 0:if(d=q(a.huffmanTableAC),c=15&d,h=d>>4,0===c)15>h?(N=t(h)+(1<<h),O=4):(h=16,O=1);else{if(1!==c)throw"invalid ACn encoding";D=u(c),O=h?2:3}continue;case 1:case 2:a.blockData[b+e]?a.blockData[b+e]+=p()<<o:(h--,0===h&&(O=2===O?3:0));break;case 3:a.blockData[b+e]?a.blockData[b+e]+=p()<<o:(a.blockData[b+e]=D<<o,O=0);break;case 4:a.blockData[b+e]&&(a.blockData[b+e]+=p()<<o);}f++}4===O&&(N--,0===N&&(O=0))}function B(a,b,d,e,f){var g=(0|d/I)*a.v+e,h=d%I*a.h+f,i=c(a,g,h);b(a,i)}function C(a,b,d){var e=0|d/a.blocksPerLine,f=d%a.blocksPerLine,g=c(a,e,f);b(a,g)}var D,E,F,r,s,G,H,I=d.mcusPerLine,J=d.progressive,K=b,L=0,M=0,N=0,O=0,P=e.length;H=J?0===g?0===m?x:y:0===m?z:A:w;var Q,R,S=0;R=1===P?e[0].blocksPerLine*e[0].blocksPerColumn:I*d.mcusPerColumn,f||(f=R);for(var T,U;S<R;){for(F=0;F<P;F++)e[F].pred=0;if(N=0,1===P)for(E=e[0],G=0;G<f;G++)C(E,H,S),S++;else for(G=0;G<f;G++){for(F=0;F<P;F++)for(E=e[F],T=E.h,U=E.v,r=0;r<U;r++)for(s=0;s<T;s++)B(E,H,S,r,s);S++}if(M=0,Q=a[b]<<8|a[b+1],65280>=Q)throw"marker was not found";if(65488<=Q&&65495>=Q)b+=2;else break}return b-K}function e(a,b,c){for(var d,e,f,g,h,i,j,l,o,p,q,r,s,u,v,w,x,y=a.quantizationTable,z=a.blockData,A=0;64>A;A+=8){if(o=z[b+A],p=z[b+A+1],q=z[b+A+2],r=z[b+A+3],s=z[b+A+4],u=z[b+A+5],v=z[b+A+6],w=z[b+A+7],o*=y[A],0==(p|q|r|s|u|v|w)){x=5793*o+512>>10,c[A]=x,c[A+1]=x,c[A+2]=x,c[A+3]=x,c[A+4]=x,c[A+5]=x,c[A+6]=x,c[A+7]=x;continue}p*=y[A+1],q*=y[A+2],r*=y[A+3],s*=y[A+4],u*=y[A+5],v*=y[A+6],w*=y[A+7],d=5793*o+128>>8,e=5793*s+128>>8,f=q,g=v,h=2896*(p-w)+128>>8,l=2896*(p+w)+128>>8,i=r<<4,j=u<<4,d=d+e+1>>1,e=d-e,x=3784*f+1567*g+128>>8,f=1567*f-3784*g+128>>8,g=x,h=h+j+1>>1,j=h-j,l=l+i+1>>1,i=l-i,d=d+g+1>>1,g=d-g,e=e+f+1>>1,f=e-f,x=2276*h+3406*l+2048>>12,h=3406*h-2276*l+2048>>12,l=x,x=799*i+4017*j+2048>>12,i=4017*i-799*j+2048>>12,j=x,c[A]=d+l,c[A+7]=d-l,c[A+1]=e+j,c[A+6]=e-j,c[A+2]=f+i,c[A+5]=f-i,c[A+3]=g+h,c[A+4]=g-h}for(var B=0;8>B;++B){if(o=c[B],p=c[B+8],q=c[B+16],r=c[B+24],s=c[B+32],u=c[B+40],v=c[B+48],w=c[B+56],0==(p|q|r|s|u|v|w)){x=5793*o+8192>>14,x=x<=k?0:x>=m?n:x-k>>4,z[b+B]=x,z[b+B+8]=x,z[b+B+16]=x,z[b+B+24]=x,z[b+B+32]=x,z[b+B+40]=x,z[b+B+48]=x,z[b+B+56]=x;continue}d=5793*o+2048>>12,e=5793*s+2048>>12,f=q,g=v,h=2896*(p-w)+2048>>12,l=2896*(p+w)+2048>>12,i=r,j=u,d=d+e+1>>1,e=d-e,x=3784*f+1567*g+2048>>12,f=1567*f-3784*g+2048>>12,g=x,h=h+j+1>>1,j=h-j,l=l+i+1>>1,i=l-i,d=d+g+1>>1,g=d-g,e=e+f+1>>1,f=e-f,x=2276*h+3406*l+2048>>12,h=3406*h-2276*l+2048>>12,l=x,x=799*i+4017*j+2048>>12,i=4017*i-799*j+2048>>12,j=x,o=d+l,w=d-l,p=e+j,v=e-j,q=f+i,u=f-i,r=g+h,s=g-h,o=o<=k?0:o>=m?n:o-k>>4,p=p<=k?0:p>=m?n:p-k>>4,q=q<=k?0:q>=m?n:q-k>>4,r=r<=k?0:r>=m?n:r-k>>4,s=s<=k?0:s>=m?n:s-k>>4,u=u<=k?0:u>=m?n:u-k>>4,v=v<=k?0:v>=m?n:v-k>>4,w=w<=k?0:w>=m?n:w-k>>4,z[b+B]=o,z[b+B+8]=p,z[b+B+16]=q,z[b+B+24]=r,z[b+B+32]=s,z[b+B+40]=u,z[b+B+48]=v,z[b+B+56]=w}}function f(a,b){for(var d=b.blocksPerLine,f=b.blocksPerColumn,g=new Int32Array(64),h=0;h<f;h++)for(var i,j=0;j<d;j++)i=c(b,h,j),e(b,i,g);return b.blockData}function h(b){return 0>=b?0:255<=b?255:b}var i=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),k=-2056,m=2024,n=255;return a.prototype={parse:function(a){function c(){var b=a[q]<<8|a[q+1];return q+=2,b}function e(){var b=c(),d=a.subarray(q,q+b-2);return q+=d.length,d}function g(a){for(var b=Math.ceil(a.samplesPerLine/8/a.maxH),c=Math.ceil(a.scanLines/8/a.maxV),d=0;d<a.components.length;d++){T=a.components[d];var e=Math.ceil(Math.ceil(a.samplesPerLine/8)*T.h/a.maxH),f=Math.ceil(Math.ceil(a.scanLines/8)*T.v/a.maxV),g=b*T.h,h=c*T.v;T.blockData=new Int16Array(64*h*(g+1)),T.blocksPerLine=e,T.blocksPerColumn=f}a.mcusPerLine=b,a.mcusPerColumn=c}var o,p,q=0,r=null,s=null,t=[],u=[],w=[],x=c();if(65496!==x)throw"SOI not found";for(x=c();65497!==x;){var y,A,B;switch(x){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var C=e();65504===x&&74===C[0]&&70===C[1]&&73===C[2]&&70===C[3]&&0===C[4]&&(r={version:{major:C[5],minor:C[6]},densityUnits:C[7],xDensity:C[8]<<8|C[9],yDensity:C[10]<<8|C[11],thumbWidth:C[12],thumbHeight:C[13],thumbData:C.subarray(14,14+3*C[12]*C[13])}),65518===x&&65===C[0]&&100===C[1]&&111===C[2]&&98===C[3]&&101===C[4]&&(s={version:C[5]<<8|C[6],flags0:C[7]<<8|C[8],flags1:C[9]<<8|C[10],transformCode:C[11]});break;case 65499:for(var D,E=c(),F=E+q-2;q<F;){var G=a[q++],H=new Uint16Array(64);if(0==G>>4)for(A=0;64>A;A++)D=i[A],H[D]=a[q++];else if(1==G>>4)for(A=0;64>A;A++)D=i[A],H[D]=c();else throw"DQT: invalid table spec";t[15&G]=H}break;case 65472:case 65473:case 65474:if(o)throw"Only single frame JPEGs supported";c(),o={},o.extended=65473===x,o.progressive=65474===x,o.precision=a[q++];var I=255/((1<<o.precision)-1);k/=I,m/=I,n/=I,o.scanLines=c(),o.samplesPerLine=c(),o.components=[],o.componentIds={};var J,K=a[q++],L=0,M=0;for(y=0;y<K;y++){J=a[q];var N=a[q+1]>>4,h=15&a[q+1];L<N&&(L=N),M<h&&(M=h);var v=a[q+2];B=o.components.push({h:N,v:h,quantizationTable:t[v],quantizationTableId:v}),o.componentIds[J]=B-1,q+=3}o.maxH=L,o.maxV=M,g(o);break;case 65476:var O=c();for(y=2;y<O;){var P=a[q++],Q=new Uint8Array(16),R=0;for(A=0;16>A;A++,q++)R+=Q[A]=a[q];var S=new Uint8Array(R);for(A=0;A<R;A++,q++)S[A]=a[q];y+=17+R,(0==P>>4?w:u)[15&P]=b(Q,S)}break;case 65501:c(),p=c();break;case 65498:var T,U=c(),V=a[q++],W=[];for(y=0;y<V;y++){var X=o.componentIds[a[q++]];T=o.components[X];var Y=a[q++];T.huffmanTableDC=w[Y>>4],T.huffmanTableAC=u[15&Y],W.push(T)}var Z=a[q++],$=a[q++],_=a[q++],aa=d(a,q,o,W,p,Z,$,_>>4,15&_);q+=aa;break;case 65535:255!==a[q]&&q--;break;default:if(255===a[q-3]&&192<=a[q-2]&&254>=a[q-2]){q-=3;break}throw"unknown JPEG marker "+x.toString(16);}x=c()}for(this.width=o.samplesPerLine,this.height=o.scanLines,this.jfif=r,this.adobe=s,this.components=[],y=0;y<o.components.length;y++)T=o.components[y],T.quantizationTable||null==T.quantizationTableId||(T.quantizationTable=t[T.quantizationTableId]),this.components.push({output:f(o,T),scaleX:T.h/o.maxH,scaleY:T.v/o.maxV,blocksPerLine:T.blocksPerLine,blocksPerColumn:T.blocksPerColumn});this.numComponents=this.components.length},_getLinearizedBlockData:function(a,b){var c,d,e,f,g,h,l,m,n,o,p,q=this.width/a,r=this.height/b,s=0,t=this.components.length,u=a*b*t,v=new Uint16Array(u),w=new Uint32Array(a),z=4294967288;for(l=0;l<t;l++){for(c=this.components[l],d=c.scaleX*q,e=c.scaleY*r,s=l,p=c.output,f=c.blocksPerLine+1<<3,g=0;g<a;g++)m=0|g*d,w[g]=(m&z)<<3|7&m;for(h=0;h<b;h++)for(m=0|h*e,o=f*(m&z)|(7&m)<<3,g=0;g<a;g++)v[s]=p[o+w[g]],s+=t}var A=this.decodeTransform;if(A)for(l=0;l<u;)for(m=0,n=0;m<t;m++,l++,n+=2)v[l]=(v[l]*A[n]>>8)+A[n+1];return v},_isColorConversionNeeded:function(){return!!(this.adobe&&this.adobe.transformCode)||3===this.numComponents},_convertYccToRgb:function(a){for(var b,c,d,e=0,f=a.length;e<f;e+=3)b=a[e],c=a[e+1],d=a[e+2],a[e]=h(b-179.456+1.402*d),a[e+1]=h(b+135.459-.344*c-.714*d),a[e+2]=h(b-226.816+1.772*c);return a},_convertYcckToRgb:function(a){for(var c,d,e,f,j=0,l=0,m=a.length;l<m;l+=4){c=a[l],d=a[l+1],e=a[l+2],f=a[l+3];var n=-122.67195406894+d*(-6.60635669420364e-5*d+.000437130475926232*e-5.4080610064599e-5*c+.00048449797120281*f-.154362151871126)+e*(-.000957964378445773*e+.000817076911346625*c-.00477271405408747*f+1.53380253221734)+c*(.000961250184130688*c-.00266257332283933*f+.48357088451265)+f*(-.000336197177618394*f+.484791561490776),o=107.268039397724+d*(2.19927104525741e-5*d-.000640992018297945*e+.000659397001245577*c+.000426105652938837*f-.176491792462875)+e*(-.000778269941513683*e+.00130872261408275*c+.000770482631801132*f-.151051492775562)+c*(.00126935368114843*c-.00265090189010898*f+.25802910206845)+f*(-.000318913117588328*f-.213742400323665),g=-20.810012546947+d*(-.000570115196973677*d-2.63409051004589e-5*e+.0020741088115012*c-.00288260236853442*f+.814272968359295)+e*(-1.53496057440975e-5*e-.000132689043961446*c+.000560833691242812*f-.195152027534049)+c*(.00174418132927582*c-.00255243321439347*f+.116935020465145)+f*(-.000343531996510555*f+.24165260232407);a[j++]=h(n),a[j++]=h(o),a[j++]=h(g)}return a},_convertYcckToCmyk:function(a){for(var b,c,d,e=0,f=a.length;e<f;e+=4)b=a[e],c=a[e+1],d=a[e+2],a[e]=h(434.456-b-1.402*d),a[e+1]=h(119.541-b+.344*c+.714*d),a[e+2]=h(481.816-b-1.772*c);return a},_convertCmykToRgb:function(a){for(var d,e,f,h,j=0,l=-16581375,n=1/255/255,o=0,p=a.length;o<p;o+=4){d=a[o],e=a[o+1],f=a[o+2],h=a[o+3];var q=d*(-4.387332384609988*d+54.48615194189176*e+18.82290502165302*f+212.25662451639585*h-72734.4411664936)+e*(1.7149763477362134*e-5.6096736904047315*f-17.873870861415444*h-1401.7366389350734)+f*(-2.5217340131683033*f-21.248923337353073*h+4465.541406466231)-h*(21.86122147463605*h+48317.86113160301),r=d*(8.841041422036149*d+60.118027045597366*e+6.871425592049007*f+31.159100130055922*h-20220.756542821975)+e*(-15.310361306967817*e+17.575251261109482*f+131.35250912493976*h-48691.05921601825)+f*(4.444339102852739*f+9.8632861493405*h-6341.191035517494)-h*(20.737325471181034*h+47890.15695978492),g=d*(.8842522430003296*d+8.078677503112928*e+30.89978309703729*f-.23883238689178934*h-3616.812083916688)+e*(10.49593273432072*e+63.02378494754052*f+50.606957656360734*h-28620.90484698408)+f*(.03296041114873217*f+115.60384449646641*h-49363.43385999684)-h*(22.33816807309886*h+45932.16563550634);a[j++]=0<=q?255:q<=l?0:0|255+q*n,a[j++]=0<=r?255:r<=l?0:0|255+r*n,a[j++]=0<=g?255:g<=l?0:0|255+g*n}return a},getData:function(a,b,c){if(4<this.numComponents)throw"Unsupported color mode";var d=this._getLinearizedBlockData(a,b);if(1===this.numComponents&&c){for(var e,f=d.length,g=new Uint16Array(3*f),h=0,j=0;j<f;j++)e=d[j],g[h++]=e,g[h++]=e,g[h++]=e;return g}if(3===this.numComponents)return this._convertYccToRgb(d);if(4===this.numComponents){if(this._isColorConversionNeeded())return c?this._convertYcckToRgb(d):this._convertYcckToCmyk(d);if(c)return this._convertCmykToRgb(d)}return d}},a}();self.addEventListener("message",function(a){var b=new JpegImage;b.parse(a.data.buffer);var c=b.getData(b.width,b.height);self.postMessage([c])},!1);