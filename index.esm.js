var i=(s,n,r,e=r-r*n/2,o=Math.min(e,1-e))=>[s,o?(r-e)/o:0,e],X=(s,n)=>(n||(n=s,s=0),Math.random()*(n-s)+s),y=(s,n,r,e,o=[0,0],a=[1,1])=>{let x=Math.PI/2,b=x/r,t,h;if(s==="lam\xE9"){let m=n/r*x,u=2/(2+20*e),p=Math.cos(m),M=Math.sin(m);t=Math.sign(p)*Math.abs(p)**u,h=Math.sign(M)*Math.abs(M)**u}else s==="arc"?(h=Math.cos(-Math.PI/2+n*b+e),t=Math.sin(Math.PI/2+n*b-e)):s==="pow"?(t=Math.pow(1-n/r,1-e),h=Math.pow(n/r,1-e)):s==="powY"?(t=Math.pow(1-n/r,e),h=Math.pow(n/r,1-e)):s==="powX"&&(t=Math.pow(n/r,e),h=Math.pow(n/r,1-e));return t=o[0]+Math.min(Math.max(t,0),1)*(a[0]-o[0]),h=o[1]+Math.min(Math.max(h,0),1)*(a[1]-o[1]),[t,h]};function R({total:s=3,centerHue:n=0,hueCycle:r=.3,offsetTint:e=.1,offsetShade:o=.1,curveAccent:a=0,tintShadeHueShift:x=.1,curveMethod:b="arc",offsetCurveModTint:t=.03,offsetCurveModShade:h=.03,minSaturationLight:m=[0,0],maxSaturationLight:u=[1,1]}={}){let p=[],M=[],w=[];for(let l=1;l<s+1;l++){let[c,k]=y(b,l,s+1,a,m,u),f=(360+(-180*r+(n+l*(360/(s+1))*r)))%360,d=i(f,c,k);p.push([d[0],d[1],d[2]]);let[I,P]=y(b,l,s+1,a+t,m,u),g=i(f,I,P);M.push([(f+360*x)%360,g[1]-e,g[2]+e]);let[T,F]=y(b,l,s+1,a-h,m,u),C=i(f,T,F);w.push([(360+(f-360*x))%360,C[1]-o,C[2]-o])}return{light:M,dark:w,base:p,all:[...M,...p,...w]}}export{R as default,i as hsv2hsl,y as pointOnCurve,X as random};
