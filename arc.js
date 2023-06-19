		AOS.init();
  		window.addEventListener('scroll',function(){
  			var value=window.scrollY
  			var sec4=document.getElementById('sec4')
  			var sec5=document.getElementById('sec5')
  			var build1=document.getElementById('building1')
  			var build2=document.getElementById('center')
  			var build3=document.getElementById('build2')
  			console.log(value)
  			var box1=document.getElementById('move')
  			var video=document.getElementById('video')
  			var last1=document.getElementById('last1')
  			var res=document.getElementById('restaurant')
  			var sec6=document.getElementById('sec6')
  			var first=document.getElementById('back1')
  			if(value>56){
  				box1.classList.add('move')
  			}
  			else{
  				box1.classList.remove('move')
  			}
  			if(value>918){
  				video.pause()
  			}
  			else{
  				video.play()	
  			}

  			if(value>873){
  				sec4.classList.add('upsec')
  				sec4.style.borderRadius='0px'
  				sec4.classList.remove('downsec')
  			}
  			else if(value<873){
  				sec4.classList.remove('upsec')
  				sec4.style.borderTopLeftRadius='50%'
  				sec4.style.borderTopRightRadius='50%'
  				sec4.classList.add('downsec')	
  			}
  			if(value>1146){
  				sec5.classList.add('upsec5')
  				sec5.classList.remove('downsec5')
  				build1.classList.add('upbuild')
  				build1.classList.remove('downbuild')
  				build2.classList.add('upbuild')
  				build2.classList.remove('downbuild')
  				build3.classList.add('upbuild')
  				build3.classList.remove('downbuild')
  			}
  			else if(value<1146){
  				sec5.classList.add('downsec5')
  				sec5.classList.remove('upsec5')
  				build1.classList.add('downbuild')
  				build1.classList.remove('upbuild')
  				build2.classList.add('downbuild')
  				build2.classList.remove('upbuild')
  				build3.classList.add('downbuild')
  				build3.classList.remove('upbuild')
  			}
 			if (value>1455) {
 				last1.classList.add('upbuild')
 				last1.classList.remove('downbuild')
 				sec6.classList.add('upsec6')
 				sec6.classList.remove('downsec6')
 			}
 			else if(value<1455){
 				last1.classList.add('downbuild')
 				last1.classList.remove('upbuild')
 				sec6.classList.add('downsec6')
 				sec6.classList.remove('upsec6')
 			}
 			if(value>45){
 				first.classList.add('upfirst')
 				first.classList.remove('downfirst')
 			}
 			else if(value<45){
 				first.classList.add('downfirst')
 				first.classList.remove('upfirst')
 			}

  		})