function navNext()
{
	for(temp=0;temp<5;temp++)
	{
		 //alert(p);
		document.getElementById('canvas'+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById('canvas'+simsubscreennum).style.visibility="visible";
	document.getElementById('nextButton').style.visibility="hidden";
	magic();
}

function animatearrow() {
	if (document.getElementById("arrow1").style.visibility == "hidden")
	  document.getElementById("arrow1").style.visibility = "visible";
	else document.getElementById("arrow1").style.visibility = "hidden";
  }


function magic()
{
	if(simsubscreennum==1){
		document.getElementById('well1').style.visibility="visible";
		document.getElementById('nextButton').style.visibility="visible";
	}
	else if(simsubscreennum==2){
		document.getElementById('well1').style.visibility="hidden";
		document.getElementById('tub11').style.visibility="visible";
		document.getElementById('ar1').style.visibility="visible";
		document.getElementById('1m').style.visibility="visible";
		document.getElementById('ar2').style.visibility="visible";
		document.getElementById('1m1').style.visibility="visible";
		document.getElementById('ar3').style.visibility="visible";
		document.getElementById('1m2').style.visibility="visible";
		document.getElementById('nextButton').style.visibility="visible";
	}
	else if(simsubscreennum==3){
		document.getElementById('tub11').style.visibility="hidden";
		document.getElementById('ar1').style.visibility="hidden";
		document.getElementById('1m').style.visibility="hidden";
		document.getElementById('ar2').style.visibility="hidden";
		document.getElementById('1m1').style.visibility="hidden";
		document.getElementById('ar3').style.visibility="hidden";
		document.getElementById('1m2').style.visibility="hidden";
		// document.getElementById('well1').style.visibility="hidden";
		document.getElementById('ground1').style.visibility="visible";
		document.getElementById('set1').style.visibility="visible";
		document.getElementById('water1').style.visibility="visible";
		document.getElementById('tape1').style.visibility="visible";
		myInt = setInterval(function () {
			animatearrow();
		  }, 500);
		  document.getElementById("arrow1").style =
			"visibility:visible ;position:absolute; left:573px; top:257px; height: 30px; z-index: 10;";
		  document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
		  // Code for IE9
		  document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
		  // Standard syntax
		  document.getElementById("arrow1").style.transform = "rotate(270deg)";
		  document.getElementById("tape1").onclick = function () {
			myStopFunction();
			document.getElementById('tape1').style.visibility="hidden";
			document.getElementById('meaMan1').style.visibility="visible";
			document.getElementById('sound2').style.visibility="visible";
			document.getElementById("sound2").style.animation ="moveScale 3s forwards";
			setTimeout(function () {
			document.getElementById('read1').style.visibility="visible";
			document.getElementById("read1").style.animation ="moveRead 1s forwards";
			setTimeout(function () {
				document.getElementById('p4').style.visibility="visible";
				document.getElementById('nextButton').style.visibility="visible";
			},2000);
		},3000);
		  }
	}
	else if(simsubscreennum==4){
		document.getElementById('read1').style.visibility="hidden";
		document.getElementById('p4').style.visibility="hidden";
		document.getElementById('meaMan1').style.visibility="hidden";
		document.getElementById('sound2').style.visibility="hidden";
		document.getElementById('sw1').style.visibility="visible";
		myInt = setInterval(function () {
			animatearrow();
		  }, 500);
		  document.getElementById("arrow1").style =
			"visibility:visible ;position:absolute; left:181px; top:187px; height: 30px; z-index: 10;";
		  document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
		  // Code for IE9
		  document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
		  // Standard syntax
		  document.getElementById("arrow1").style.transform = "rotate(180deg)";
		  document.getElementById("sw1").onclick = function () {
			myStopFunction();
			document.getElementById('sw1').style.visibility="hidden";
			document.getElementById('sw2').style.visibility="visible";
			document.getElementById('tog1').style.visibility="visible";
			document.getElementById("tog1").style.animation ="moveTog 1s forwards";
			setTimeout(function () {
				document.getElementById('sw2').style.visibility="hidden";
				document.getElementById('sw3').style.visibility="visible";
				setTimeout(function () {
					document.getElementById('sw3').style.visibility="hidden";
					document.getElementById('tog1').style.visibility="hidden";
				document.getElementById('tub1').style.visibility="visible";
				
				document.getElementById('clock1').style.visibility="visible";
				document.getElementById('pin1').style.visibility="visible";
				document.getElementById("grad4").style.visibility="visible";
				document.getElementById("grad4").style.animation = "movehy1 1s forwards";
				document.getElementById("pin1").style.transformOrigin = "80% 90%";

            document.getElementById("pin1").style.animation="movePin 2s forwards";
				setTimeout(function () {
					
					document.getElementById("grad2").style.visibility="visible";
					document.getElementById("grad2").style.animation = "moveWater 2s forwards";
					document.getElementById("water1").style.animation = "moveWater1 1s forwards";
					setTimeout(function () {
						document.getElementById("vol1").style.visibility="visible";
						document.getElementById("p5").style.visibility="visible";
						document.getElementById('sw2').style.visibility="visible";
						document.getElementById('tog1').style.visibility="visible";
			document.getElementById("tog1").style.animation ="moveTog1 1s forwards";
			setTimeout(function () {
				document.getElementById('grad4').style.visibility="hidden";
				document.getElementById('sw2').style.visibility="hidden";
						document.getElementById('tog1').style.visibility="hidden";
						document.getElementById('flow2').style.visibility="hidden";
						document.getElementById('meaMan1').style.visibility="visible";
			document.getElementById('sound2').style.visibility="visible";
			document.getElementById("sound2").style.animation ="moveScale1 3s forwards";
			setTimeout(function () {
				document.getElementById("vol1").style.visibility="hidden";
				document.getElementById("p5").style.visibility="hidden";
				document.getElementById('meaMan1').style.visibility="hidden";
				document.getElementById('sound2').style.visibility="hidden";
				document.getElementById('sw1').style.visibility="visible";
					document.getElementById('tub1').style.visibility="hidden";
					document.getElementById('flow2').style.visibility="hidden";
					document.getElementById("grad2").style.visibility="hidden";
					document.getElementById("tab1").style.visibility="visible";
							document.getElementById("dataTable1").style.visibility="visible";
							document.getElementById("g-1").style.visibility="visible";
							document.getElementById("g-2").style.visibility="visible";



			myInt = setInterval(function () {
				animatearrow();
			  }, 500);
			  document.getElementById("arrow1").style =
				"visibility:visible ;position:absolute; left:181px; top:187px; height: 30px; z-index: 10;";
			  document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
			  // Code for IE9
			  document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
			  // Standard syntax
			  document.getElementById("arrow1").style.transform = "rotate(180deg)";
			  document.getElementById("sw1").onclick = function () {
				myStopFunction();
				document.getElementById('sw1').style.visibility="hidden";
				document.getElementById('sw2').style.visibility="visible";
				document.getElementById('tog1').style.visibility="visible";
				document.getElementById("tog1").style.animation ="moveTog 1s forwards";
				setTimeout(function () {
					document.getElementById('sw2').style.visibility="hidden";
					document.getElementById('sw3').style.visibility="visible";
					setTimeout(function () {
						document.getElementById('sw3').style.visibility="hidden";
						document.getElementById('tog1').style.visibility="hidden";
					// document.getElementById('tub1').style.visibility="visible";
					document.getElementById('clock1').style.visibility="visible";
					document.getElementById('pin1').style.visibility="visible";
					document.getElementById("grad4").style.visibility="visible";
					document.getElementById("grad4").style.animation = "movehy2 1s forwards";
					document.getElementById("pin1").style.transformOrigin = "80% 90%";
				
				document.getElementById("pin1").style.animation="movePin1 2s forwards";

					setTimeout(function () {
						document.getElementById("flow1").style.visibility="visible";
						// document.getElementById("grad2").style.visibility="visible";
						// document.getElementById("grad2").style.animation = "moveWater 1s forwards";
						document.getElementById("water1").style.animation = "moveWater2 1s forwards";
						setTimeout(function () {
							document.getElementById('sw2').style.visibility="visible";
							document.getElementById('tog1').style.visibility="visible";
				document.getElementById("tog1").style.animation ="moveTog1 1s forwards";
				setTimeout(function () {
					document.getElementById('grad4').style.visibility="hidden";
					document.getElementById('sw2').style.visibility="hidden";
							document.getElementById('tog1').style.visibility="hidden";
							document.getElementById('meaMan1').style.visibility="visible";
				document.getElementById('sound2').style.visibility="visible";
				document.getElementById("sound2").style.animation ="moveScale2 3s forwards";
				
				setTimeout(function () {
					document.getElementById('meaMan1').style.visibility="hidden";
					document.getElementById('sound2').style.visibility="hidden";
					document.getElementById('sw1').style.visibility="visible";
						document.getElementById('tub1').style.visibility="hidden";
						document.getElementById("grad2").style.visibility="hidden";
						document.getElementById("g-3").style.visibility="visible";
	
	
	
	
				myInt = setInterval(function () {
					animatearrow();
				  }, 500);
				  document.getElementById("arrow1").style =
					"visibility:visible ;position:absolute; left:181px; top:187px; height: 30px; z-index: 10;";
				  document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
				  // Code for IE9
				  document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
				  // Standard syntax
				  document.getElementById("arrow1").style.transform = "rotate(180deg)";
				  document.getElementById("sw1").onclick = function () {
					myStopFunction();
					document.getElementById('sw1').style.visibility="hidden";
					document.getElementById('sw2').style.visibility="visible";
					document.getElementById('tog1').style.visibility="visible";
					document.getElementById("tog1").style.animation ="moveTog 1s forwards";
					setTimeout(function () {
						document.getElementById('sw2').style.visibility="hidden";
						document.getElementById('sw3').style.visibility="visible";
						setTimeout(function () {
							document.getElementById('sw3').style.visibility="hidden";
							document.getElementById('tog1').style.visibility="hidden";
						// document.getElementById('tub1').style.visibility="visible";
						document.getElementById('clock1').style.visibility="visible";
						document.getElementById('pin1').style.visibility="visible";
						document.getElementById("grad4").style.visibility="visible";
						document.getElementById("grad4").style.animation = "movehy3 1s forwards";
						document.getElementById("pin1").style.transformOrigin = "80% 90%";
					
					document.getElementById("pin1").style.animation="movePin3 2s forwards";
						setTimeout(function () {
							document.getElementById("flow1").style.visibility="visible";
							// document.getElementById("grad2").style.visibility="visible";
							// document.getElementById("grad2").style.animation = "moveWater 1s forwards";
							document.getElementById("water1").style.animation = "moveWater3 1s forwards";
							setTimeout(function () {
								document.getElementById('sw2').style.visibility="visible";
								document.getElementById('tog1').style.visibility="visible";
					document.getElementById("tog1").style.animation ="moveTog1 1s forwards";
					setTimeout(function () {
						document.getElementById('grad4').style.visibility="hidden";
						document.getElementById('sw2').style.visibility="hidden";
								document.getElementById('tog1').style.visibility="hidden";
								document.getElementById('meaMan1').style.visibility="visible";
					document.getElementById('sound2').style.visibility="visible";
					document.getElementById("sound2").style.animation ="moveScale3 3s forwards";
		
					setTimeout(function () {
						document.getElementById('meaMan1').style.visibility="hidden";
						document.getElementById('sound2').style.visibility="hidden";
						document.getElementById('sw1').style.visibility="visible";
							document.getElementById('tub1').style.visibility="hidden";
							document.getElementById("grad2").style.visibility="hidden";
							document.getElementById("g-4").style.visibility="visible";
		
		
		
		
					myInt = setInterval(function () {
						animatearrow();
					  }, 500);
					  document.getElementById("arrow1").style =
						"visibility:visible ;position:absolute; left:181px; top:187px; height: 30px; z-index: 10;";
					  document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
					  // Code for IE9
					  document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
					  // Standard syntax
					  document.getElementById("arrow1").style.transform = "rotate(180deg)";
					  document.getElementById("sw1").onclick = function () {
						myStopFunction();
						document.getElementById('sw1').style.visibility="hidden";
						document.getElementById('sw2').style.visibility="visible";
						document.getElementById('tog1').style.visibility="visible";
						document.getElementById("tog1").style.animation ="moveTog 1s forwards";
						setTimeout(function () {
							document.getElementById('sw2').style.visibility="hidden";
							document.getElementById('sw3').style.visibility="visible";
							setTimeout(function () {
								document.getElementById('sw3').style.visibility="hidden";
								document.getElementById('tog1').style.visibility="hidden";
							// document.getElementById('tub1').style.visibility="visible";
							document.getElementById('clock1').style.visibility="visible";
							document.getElementById('pin1').style.visibility="visible";
							document.getElementById("grad4").style.visibility="visible";
							document.getElementById("grad4").style.animation = "movehy4 1s forwards";
							document.getElementById("pin1").style.transformOrigin = "80% 90%";
						
						document.getElementById("pin1").style.animation="movePin4 2s forwards";
							setTimeout(function () {
								document.getElementById("flow1").style.visibility="visible";
								// document.getElementById("grad2").style.visibility="visible";
								// document.getElementById("grad2").style.animation = "moveWater 1s forwards";
								document.getElementById("water1").style.animation = "moveWater4 1s forwards";
								setTimeout(function () {
									document.getElementById('sw2').style.visibility="visible";
									document.getElementById('tog1').style.visibility="visible";
						document.getElementById("tog1").style.animation ="moveTog1 1s forwards";
						setTimeout(function () {
							document.getElementById('grad4').style.visibility="hidden";
							document.getElementById('sw2').style.visibility="hidden";
									document.getElementById('tog1').style.visibility="hidden";
									document.getElementById('meaMan1').style.visibility="visible";
						document.getElementById('sound2').style.visibility="visible";
						document.getElementById("sound2").style.animation ="moveScale4 3s forwards";
			
						setTimeout(function () {
							document.getElementById('meaMan1').style.visibility="hidden";
							document.getElementById('sound2').style.visibility="hidden";
							document.getElementById('sw1').style.visibility="visible";
								document.getElementById('tub1').style.visibility="hidden";
								document.getElementById("grad2").style.visibility="hidden";
								document.getElementById("g-5").style.visibility="visible";
			
			
			
			
						myInt = setInterval(function () {
							animatearrow();
						  }, 500);
						  document.getElementById("arrow1").style =
							"visibility:visible ;position:absolute; left:181px; top:187px; height: 30px; z-index: 10;";
						  document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
						  // Code for IE9
						  document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
						  // Standard syntax
						  document.getElementById("arrow1").style.transform = "rotate(180deg)";
						  document.getElementById("sw1").onclick = function () {
							myStopFunction();
							document.getElementById('sw1').style.visibility="hidden";
							document.getElementById('sw2').style.visibility="visible";
							document.getElementById('tog1').style.visibility="visible";
							document.getElementById("tog1").style.animation ="moveTog 1s forwards";
							setTimeout(function () {
								document.getElementById('sw2').style.visibility="hidden";
								document.getElementById('sw3').style.visibility="visible";
								setTimeout(function () {
									document.getElementById('sw3').style.visibility="hidden";
									document.getElementById('tog1').style.visibility="hidden";
								// document.getElementById('tub1').style.visibility="visible";
								document.getElementById('clock1').style.visibility="visible";
								document.getElementById('pin1').style.visibility="visible";
								document.getElementById("grad4").style.visibility="visible";
								document.getElementById("grad4").style.animation = "movehy5 1s forwards";
								document.getElementById("pin1").style.transformOrigin = "80% 90%";
							
							document.getElementById("pin1").style.animation="movePin5 2s forwards";
								setTimeout(function () {
									document.getElementById("flow1").style.visibility="visible";
									// document.getElementById("grad2").style.visibility="visible";
									// document.getElementById("grad2").style.animation = "moveWater 1s forwards";
									document.getElementById("water1").style.animation = "moveWater5 1s forwards";
									setTimeout(function () {
										document.getElementById('sw2').style.visibility="visible";
										document.getElementById('tog1').style.visibility="visible";
							document.getElementById("tog1").style.animation ="moveTog1 1s forwards";
							setTimeout(function () {
								document.getElementById('grad4').style.visibility="hidden";
								document.getElementById('sw2').style.visibility="hidden";
										document.getElementById('tog1').style.visibility="hidden";
										document.getElementById('meaMan1').style.visibility="visible";
							document.getElementById('sound2').style.visibility="visible";
							document.getElementById("sound2").style.animation ="moveScale5 3s forwards";
							

							
						setTimeout(function () {
							document.getElementById('meaMan1').style.visibility="hidden";
							document.getElementById('sound2').style.visibility="hidden";
							document.getElementById('sw1').style.visibility="visible";
								document.getElementById('tub1').style.visibility="hidden";
								document.getElementById("grad2").style.visibility="hidden";
								document.getElementById("g-6").style.visibility="visible";
			
			
			
						myInt = setInterval(function () {
							animatearrow();
						  }, 500);
						  document.getElementById("arrow1").style =
							"visibility:visible ;position:absolute; left:181px; top:187px; height: 30px; z-index: 10;";
						  document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
						  // Code for IE9
						  document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
						  // Standard syntax
						  document.getElementById("arrow1").style.transform = "rotate(180deg)";
						  document.getElementById("sw1").onclick = function () {
							myStopFunction();
							document.getElementById('sw1').style.visibility="hidden";
							document.getElementById('sw2').style.visibility="visible";
							document.getElementById('tog1').style.visibility="visible";
							document.getElementById("tog1").style.animation ="moveTog 1s forwards";
							setTimeout(function () {
								document.getElementById('sw2').style.visibility="hidden";
								document.getElementById('sw3').style.visibility="visible";
								setTimeout(function () {
									document.getElementById('sw3').style.visibility="hidden";
									document.getElementById('tog1').style.visibility="hidden";
								// document.getElementById('tub1').style.visibility="visible";
								document.getElementById('clock1').style.visibility="visible";
								document.getElementById('pin1').style.visibility="visible";
								document.getElementById("grad4").style.visibility="visible";
								document.getElementById("grad4").style.animation = "movehy6 1s forwards";
								document.getElementById("pin1").style.transformOrigin = "80% 90%";
							
							document.getElementById("pin1").style.animation="movePin6 2s forwards";
								setTimeout(function () {
									document.getElementById("flow1").style.visibility="visible";
									// document.getElementById("grad2").style.visibility="visible";
									// document.getElementById("grad2").style.animation = "moveWater 1s forwards";
									document.getElementById("water1").style.animation = "moveWater6 1s forwards";
									setTimeout(function () {
										document.getElementById('sw2').style.visibility="visible";
										document.getElementById('tog1').style.visibility="visible";
							document.getElementById("tog1").style.animation ="moveTog1 1s forwards";
							setTimeout(function () {
								document.getElementById('grad4').style.visibility="hidden";
								document.getElementById('sw2').style.visibility="hidden";
										document.getElementById('tog1').style.visibility="hidden";
										document.getElementById('meaMan1').style.visibility="visible";
							document.getElementById('sound2').style.visibility="visible";
							document.getElementById("sound2").style.animation ="moveScale6 3s forwards";
				
				

							setTimeout(function () {
								document.getElementById('meaMan1').style.visibility="hidden";
								document.getElementById('sound2').style.visibility="hidden";
								document.getElementById('sw1').style.visibility="visible";
									document.getElementById('tub1').style.visibility="hidden";
									document.getElementById("grad2").style.visibility="hidden";
									document.getElementById("g-7").style.visibility="visible";
				
				
				
							myInt = setInterval(function () {
								animatearrow();
							  }, 500);
							  document.getElementById("arrow1").style =
								"visibility:visible ;position:absolute; left:181px; top:187px; height: 30px; z-index: 10;";
							  document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
							  // Code for IE9
							  document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
							  // Standard syntax
							  document.getElementById("arrow1").style.transform = "rotate(180deg)";
							  document.getElementById("sw1").onclick = function () {
								myStopFunction();
								document.getElementById('sw1').style.visibility="hidden";
								document.getElementById('sw2').style.visibility="visible";
								document.getElementById('tog1').style.visibility="visible";
								document.getElementById("tog1").style.animation ="moveTog 1s forwards";
								setTimeout(function () {
									document.getElementById('sw2').style.visibility="hidden";
									document.getElementById('sw3').style.visibility="visible";
									setTimeout(function () {
										document.getElementById('sw3').style.visibility="hidden";
										document.getElementById('tog1').style.visibility="hidden";
									// document.getElementById('tub1').style.visibility="visible";
									// document.getElementById('flow2').style.visibility="visible";
									document.getElementById('clock1').style.visibility="visible";
									document.getElementById('pin1').style.visibility="visible";
									document.getElementById("grad4").style.visibility="visible";
									document.getElementById("grad4").style.animation = "movehy7 1s forwards";
									document.getElementById("pin1").style.transformOrigin = "80% 90%";
								
								document.getElementById("pin1").style.animation="movePin7 2s forwards";
									setTimeout(function () {
										document.getElementById("flow1").style.visibility="visible";
										// document.getElementById("grad2").style.visibility="visible";
										// document.getElementById("grad2").style.animation = "moveWater11 1s forwards";
										document.getElementById("water1").style.animation = "moveWater7 1s forwards";
										setTimeout(function () {
											// document.getElementById("flow2").style.visibility="visible";
											document.getElementById('sw2').style.visibility="visible";
											document.getElementById('tog1').style.visibility="visible";
								document.getElementById("tog1").style.animation ="moveTog1 1s forwards";
								setTimeout(function () {
									document.getElementById('grad4').style.visibility="hidden";
									document.getElementById('sw2').style.visibility="hidden";
									document.getElementById('flow2').style.visibility="hidden";
											document.getElementById('tog1').style.visibility="hidden";
											document.getElementById('meaMan1').style.visibility="visible";
								document.getElementById('sound2').style.visibility="visible";
								document.getElementById("sound2").style.animation ="moveScale7 3s forwards";
					

								setTimeout(function () {
									document.getElementById('meaMan1').style.visibility="hidden";
									document.getElementById('sound2').style.visibility="hidden";
									document.getElementById('sw1').style.visibility="visible";
										document.getElementById('tub1').style.visibility="hidden";
										document.getElementById("grad2").style.visibility="hidden";
										document.getElementById("g-8").style.visibility="visible";
					
					
					
								myInt = setInterval(function () {
									animatearrow();
								  }, 500);
								  document.getElementById("arrow1").style =
									"visibility:visible ;position:absolute; left:181px; top:187px; height: 30px; z-index: 10;";
								  document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
								  // Code for IE9
								  document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
								  // Standard syntax
								  document.getElementById("arrow1").style.transform = "rotate(180deg)";
								  document.getElementById("sw1").onclick = function () {
									myStopFunction();
									document.getElementById('sw1').style.visibility="hidden";
									document.getElementById('sw2').style.visibility="visible";
									document.getElementById('tog1').style.visibility="visible";
									document.getElementById("tog1").style.animation ="moveTog 1s forwards";
									setTimeout(function () {
										document.getElementById('sw2').style.visibility="hidden";
										document.getElementById('sw3').style.visibility="visible";
										setTimeout(function () {
											document.getElementById('sw3').style.visibility="hidden";
											document.getElementById('tog1').style.visibility="hidden";
										// document.getElementById('tub1').style.visibility="visible";
										document.getElementById('clock1').style.visibility="visible";
										document.getElementById('pin1').style.visibility="visible";
										document.getElementById("grad4").style.visibility="visible";
										document.getElementById("grad4").style.animation = "movehy8 1s forwards";
										document.getElementById("pin1").style.transformOrigin = "80% 90%";
									
									document.getElementById("pin1").style.animation="movePin8 2s forwards";
										setTimeout(function () {
											document.getElementById("flow1").style.visibility="visible";
											// document.getElementById("grad2").style.visibility="visible";
											// document.getElementById("grad2").style.animation = "moveWater11 1s forwards";
											document.getElementById("water1").style.animation = "moveWater8 1s forwards";
											setTimeout(function () {
												document.getElementById('sw2').style.visibility="visible";
												document.getElementById('tog1').style.visibility="visible";
									document.getElementById("tog1").style.animation ="moveTog1 1s forwards";
									setTimeout(function () {
										document.getElementById('grad4').style.visibility="hidden";
										document.getElementById('sw2').style.visibility="hidden";
												document.getElementById('tog1').style.visibility="hidden";
												document.getElementById('meaMan1').style.visibility="visible";
									document.getElementById('sound2').style.visibility="visible";
									document.getElementById("sound2").style.animation ="moveScale8 3s forwards";
						

									setTimeout(function () {
										document.getElementById('meaMan1').style.visibility="hidden";
										document.getElementById('sound2').style.visibility="hidden";
										document.getElementById('sw1').style.visibility="visible";
											document.getElementById('tub1').style.visibility="hidden";
											document.getElementById("grad2").style.visibility="hidden";
											document.getElementById("g-9").style.visibility="visible";
						
						
						
									myInt = setInterval(function () {
										animatearrow();
									  }, 500);
									  document.getElementById("arrow1").style =
										"visibility:visible ;position:absolute; left:181px; top:187px; height: 30px; z-index: 10;";
									  document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
									  // Code for IE9
									  document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
									  // Standard syntax
									  document.getElementById("arrow1").style.transform = "rotate(180deg)";
									  document.getElementById("sw1").onclick = function () {
										myStopFunction();
										document.getElementById('sw1').style.visibility="hidden";
										document.getElementById('sw2').style.visibility="visible";
										document.getElementById('tog1').style.visibility="visible";
										document.getElementById("tog1").style.animation ="moveTog 1s forwards";
										setTimeout(function () {
											document.getElementById('sw2').style.visibility="hidden";
											document.getElementById('sw3').style.visibility="visible";
											setTimeout(function () {
												document.getElementById('sw3').style.visibility="hidden";
												document.getElementById('tog1').style.visibility="hidden";
											// document.getElementById('tub1').style.visibility="visible";
											document.getElementById('clock1').style.visibility="visible";
											document.getElementById('pin1').style.visibility="visible";
											document.getElementById("grad4").style.visibility="visible";
											document.getElementById("grad4").style.animation = "movehy9 1s forwards";
											document.getElementById("pin1").style.transformOrigin = "80% 90%";
										
										document.getElementById("pin1").style.animation="movePin9 2s forwards";
											setTimeout(function () {
												document.getElementById("flow1").style.visibility="visible";
												// document.getElementById("grad2").style.visibility="visible";
												// document.getElementById("grad2").style.animation = "moveWater11 1s forwards";
												document.getElementById("water1").style.animation = "moveWater9 1s forwards";
												setTimeout(function () {
													document.getElementById('sw2').style.visibility="visible";
													document.getElementById('tog1').style.visibility="visible";
										document.getElementById("tog1").style.animation ="moveTog1 1s forwards";
										setTimeout(function () {
											document.getElementById('grad4').style.visibility="hidden";
											document.getElementById('sw2').style.visibility="hidden";
													document.getElementById('tog1').style.visibility="hidden";
													document.getElementById('meaMan1').style.visibility="visible";
										document.getElementById('sound2').style.visibility="visible";
										document.getElementById("sound2").style.animation ="moveScale9 3s forwards";
							
							

										setTimeout(function () {
											document.getElementById('meaMan1').style.visibility="hidden";
											document.getElementById('sound2').style.visibility="hidden";
											document.getElementById('sw1').style.visibility="visible";
												document.getElementById('tub1').style.visibility="hidden";
												document.getElementById("grad2").style.visibility="hidden";
												document.getElementById("g-10").style.visibility="visible";
							
							
							
										myInt = setInterval(function () {
											animatearrow();
										  }, 500);
										  document.getElementById("arrow1").style =
											"visibility:visible ;position:absolute; left:181px; top:187px; height: 30px; z-index: 10;";
										  document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
										  // Code for IE9
										  document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
										  // Standard syntax
										  document.getElementById("arrow1").style.transform = "rotate(180deg)";
										  document.getElementById("sw1").onclick = function () {
											myStopFunction();
											document.getElementById('sw1').style.visibility="hidden";
											document.getElementById('sw2').style.visibility="visible";
											document.getElementById('tog1').style.visibility="visible";
											document.getElementById("tog1").style.animation ="moveTog 1s forwards";
											setTimeout(function () {
												document.getElementById('sw2').style.visibility="hidden";
												document.getElementById('sw3').style.visibility="visible";
												setTimeout(function () {
													document.getElementById('sw3').style.visibility="hidden";
													document.getElementById('tog1').style.visibility="hidden";
												// document.getElementById('tub1').style.visibility="visible";
												document.getElementById('clock1').style.visibility="visible";
												document.getElementById('pin1').style.visibility="visible";
												document.getElementById("grad4").style.visibility="visible";
												document.getElementById("grad4").style.animation = "movehy10 1s forwards";
												document.getElementById("pin1").style.transformOrigin = "80% 90%";
											
											document.getElementById("pin1").style.animation="movePin10 2s forwards";
												setTimeout(function () {
													document.getElementById("flow1").style.visibility="visible";
													// document.getElementById("grad2").style.visibility="visible";
													// document.getElementById("grad2").style.animation = "moveWater11 1s forwards";
													document.getElementById("water1").style.animation = "moveWater10 1s forwards";
													setTimeout(function () {
														document.getElementById('sw2').style.visibility="visible";
														document.getElementById('tog1').style.visibility="visible";
											document.getElementById("tog1").style.animation ="moveTog1 1s forwards";
											setTimeout(function () {
												document.getElementById('grad4').style.visibility="hidden";
												document.getElementById('sw2').style.visibility="hidden";
														document.getElementById('tog1').style.visibility="hidden";
														document.getElementById('meaMan1').style.visibility="visible";
											document.getElementById('sound2').style.visibility="visible";
											document.getElementById("sound2").style.animation ="moveScale10 3s forwards";
								
								

											setTimeout(function () {
												document.getElementById('meaMan1').style.visibility="hidden";
												document.getElementById('sound2').style.visibility="hidden";
												document.getElementById('sw1').style.visibility="visible";
													document.getElementById('tub1').style.visibility="hidden";
													document.getElementById("grad2").style.visibility="hidden";
													document.getElementById("g-11").style.visibility="visible";
								
								
								
											myInt = setInterval(function () {
												animatearrow();
											  }, 500);
											  document.getElementById("arrow1").style =
												"visibility:visible ;position:absolute; left:181px; top:187px; height: 30px; z-index: 10;";
											  document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
											  // Code for IE9
											  document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
											  // Standard syntax
											  document.getElementById("arrow1").style.transform = "rotate(180deg)";
											  document.getElementById("sw1").onclick = function () {
												myStopFunction();
												document.getElementById('sw1').style.visibility="hidden";
												document.getElementById('sw2').style.visibility="visible";
												document.getElementById('tog1').style.visibility="visible";
												document.getElementById("tog1").style.animation ="moveTog 1s forwards";
												setTimeout(function () {
													document.getElementById('sw2').style.visibility="hidden";
													document.getElementById('sw3').style.visibility="visible";
													setTimeout(function () {
														document.getElementById('sw3').style.visibility="hidden";
														document.getElementById('tog1').style.visibility="hidden";
													document.getElementById('tub1').style.visibility="visible";
													document.getElementById('clock1').style.visibility="visible";
													document.getElementById('pin1').style.visibility="visible";
													document.getElementById("grad4").style.visibility="visible";
													document.getElementById("grad4").style.animation = "movehy11 1s forwards";
													document.getElementById("pin1").style.transformOrigin = "80% 90%";
												
												document.getElementById("pin1").style.animation="movePin11 2s forwards";
													setTimeout(function () {
														document.getElementById("flow1").style.visibility="visible";
														document.getElementById("grad2").style.visibility="visible";
														document.getElementById("grad2").style.animation = "moveWater11 1s forwards";
														document.getElementById("water1").style.animation = "moveWater21 1s forwards";
														setTimeout(function () {
															document.getElementById('vol2').style.visibility="visible";
															document.getElementById("p6").style.visibility="visible";
															document.getElementById('sw2').style.visibility="visible";
															document.getElementById('tog1').style.visibility="visible";
												document.getElementById("tog1").style.animation ="moveTog1 1s forwards";
												setTimeout(function () {
													document.getElementById('grad4').style.visibility="hidden";
													document.getElementById('sw2').style.visibility="hidden";
															document.getElementById('tog1').style.visibility="hidden";
															document.getElementById('meaMan1').style.visibility="visible";
												document.getElementById('sound2').style.visibility="visible";
												document.getElementById("sound2").style.animation ="moveScale11 3s forwards";
									
									
												setTimeout(function () {
													document.getElementById('vol2').style.visibility="hidden";
													document.getElementById("p6").style.visibility="hidden";
													document.getElementById('meaMan1').style.visibility="hidden";
													document.getElementById('sound2').style.visibility="hidden";
													document.getElementById('sw1').style.visibility="visible";
														document.getElementById('tub1').style.visibility="hidden";
														document.getElementById("grad2").style.visibility="hidden";
														document.getElementById("g-12").style.visibility="visible";
									
									
									
												myInt = setInterval(function () {
													animatearrow();
												  }, 500);
												  document.getElementById("arrow1").style =
													"visibility:visible ;position:absolute; left:181px; top:187px; height: 30px; z-index: 10;";
												  document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
												  // Code for IE9
												  document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
												  // Standard syntax
												  document.getElementById("arrow1").style.transform = "rotate(180deg)";
												  document.getElementById("sw1").onclick = function () {
													myStopFunction();
													document.getElementById('sw1').style.visibility="hidden";
													document.getElementById('sw2').style.visibility="visible";
													document.getElementById('tog1').style.visibility="visible";
													document.getElementById("tog1").style.animation ="moveTog 1s forwards";
													setTimeout(function () {
														document.getElementById('sw2').style.visibility="hidden";
														document.getElementById('sw3').style.visibility="visible";
														setTimeout(function () {
															document.getElementById('sw3').style.visibility="hidden";
															document.getElementById('tog1').style.visibility="hidden";
														// document.getElementById('tub1').style.visibility="visible";
														document.getElementById('clock1').style.visibility="visible";
														document.getElementById('pin1').style.visibility="visible";
														document.getElementById("grad4").style.visibility="visible";
														document.getElementById("grad4").style.animation = "movehy12 1s forwards";
														document.getElementById("pin1").style.transformOrigin = "80% 90%";
													
													document.getElementById("pin1").style.animation="movePin12 2s forwards";
														setTimeout(function () {
															document.getElementById("flow1").style.visibility="visible";
															// document.getElementById("grad2").style.visibility="visible";
															// document.getElementById("grad2").style.animation = "moveWater11 1s forwards";
															document.getElementById("water1").style.animation = "moveWater12 1s forwards";
															setTimeout(function () {
																document.getElementById('sw2').style.visibility="visible";
																document.getElementById('tog1').style.visibility="visible";
													document.getElementById("tog1").style.animation ="moveTog1 1s forwards";
													setTimeout(function () {
														document.getElementById('grad4').style.visibility="hidden";
														document.getElementById('sw2').style.visibility="hidden";
																document.getElementById('tog1').style.visibility="hidden";
																document.getElementById('meaMan1').style.visibility="visible";
													document.getElementById('sound2').style.visibility="visible";
													document.getElementById("sound2").style.animation ="moveScale12 3s forwards";
										
										
													setTimeout(function () {
														document.getElementById('meaMan1').style.visibility="hidden";
														document.getElementById('sound2').style.visibility="hidden";
														document.getElementById('sw1').style.visibility="visible";
															document.getElementById('tub1').style.visibility="hidden";
															document.getElementById("grad2").style.visibility="hidden";
															document.getElementById("g-13").style.visibility="visible";
										
										
										
										
													myInt = setInterval(function () {
														animatearrow();
													  }, 500);
													  document.getElementById("arrow1").style =
														"visibility:visible ;position:absolute; left:181px; top:187px; height: 30px; z-index: 10;";
													  document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
													  // Code for IE9
													  document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
													  // Standard syntax
													  document.getElementById("arrow1").style.transform = "rotate(180deg)";
													  document.getElementById("sw1").onclick = function () {
														myStopFunction();
														document.getElementById('sw1').style.visibility="hidden";
														document.getElementById('sw2').style.visibility="visible";
														document.getElementById('tog1').style.visibility="visible";
														document.getElementById("tog1").style.animation ="moveTog 1s forwards";
														setTimeout(function () {
															document.getElementById('sw2').style.visibility="hidden";
															document.getElementById('sw3').style.visibility="visible";
															setTimeout(function () {
																document.getElementById('sw3').style.visibility="hidden";
																document.getElementById('tog1').style.visibility="hidden";
															// document.getElementById('tub1').style.visibility="visible";
															
															document.getElementById('clock1').style.visibility="visible";
															document.getElementById('pin1').style.visibility="visible";
															document.getElementById("grad4").style.visibility="visible";
															document.getElementById("grad4").style.animation = "movehy13 1s forwards";
															document.getElementById("pin1").style.transformOrigin = "80% 90%";
														
														document.getElementById("pin1").style.animation="movePin13 2s forwards";
															setTimeout(function () {
																document.getElementById("flow1").style.visibility="visible";
																// document.getElementById("grad2").style.visibility="visible";
																// document.getElementById("grad2").style.animation = "moveWater31 1s forwards";
																// document.getElementById('flow2').style.visibility="visible";
																document.getElementById("water1").style.animation = "moveWater13 1s forwards";
																setTimeout(function () {
																	// document.getElementById("flow2").style.visibility="visible";
																	document.getElementById('sw2').style.visibility="visible";
																	document.getElementById('tog1').style.visibility="visible";
														document.getElementById("tog1").style.animation ="moveTog1 1s forwards";
														setTimeout(function () {
															document.getElementById('grad4').style.visibility="hidden";
															document.getElementById('sw2').style.visibility="hidden";
																	document.getElementById('tog1').style.visibility="hidden";
																	document.getElementById('flow2').style.visibility="hidden";
																	document.getElementById('meaMan1').style.visibility="visible";
														document.getElementById('sound2').style.visibility="visible";
														document.getElementById("sound2").style.animation ="moveScale13 3s forwards";
														setTimeout(function () {
															document.getElementById('meaMan1').style.visibility="hidden";
															document.getElementById('sound2').style.visibility="hidden";
															// document.getElementById('sw1').style.visibility="visible";
																document.getElementById('tub1').style.visibility="hidden";
																document.getElementById("grad2").style.visibility="hidden";
																document.getElementById("g-14").style.visibility="visible";
																document.getElementById("dialog3").style.visibility = "visible";
																document.getElementById("5-7").onclick = function () {
																	document.getElementById("5-7").style.visibility = "hidden";
																	hidedialog4();											

		document.getElementById("pin1").style.transformOrigin = "80% 90%";
            document.getElementById("pin1").style.animation="movePin 2s forwards";
			document.getElementById("water1").style.animation = "moveWater41 1s forwards";
			setTimeout(function () {
				document.getElementById("i1").style.visibility="visible";
				document.getElementById("pin1").style.transformOrigin = "80% 90%";
				document.getElementById("pin1").style.animation="movePin1 2s forwards";
				document.getElementById("water1").style.animation = "moveWater42 2s forwards";
				setTimeout(function () {
					document.getElementById("i2").style.visibility="visible";
					document.getElementById("pin1").style.transformOrigin = "80% 90%";
					document.getElementById("pin1").style.animation="movePin3 2s forwards";
					document.getElementById("water1").style.animation = "moveWater43 2s forwards";
					setTimeout(function () {
						document.getElementById("i3").style.visibility="visible";
						document.getElementById("pin1").style.transformOrigin = "80% 90%";
						document.getElementById("pin1").style.animation="movePin4 2s forwards";
						document.getElementById("water1").style.animation = "moveWater44 2s forwards";
						setTimeout(function () {
							document.getElementById("i4").style.visibility="visible";
							document.getElementById("pin1").style.transformOrigin = "80% 90%";
							document.getElementById("pin1").style.animation="movePin5 2s forwards";
							document.getElementById("water1").style.animation = "moveWater45 2s forwards";
							setTimeout(function () {
								document.getElementById("i5").style.visibility="visible";
								document.getElementById("pin1").style.transformOrigin = "80% 90%";
								document.getElementById("pin1").style.animation="movePin6 2s forwards";
								document.getElementById("water1").style.animation = "moveWater46 2s forwards";
								setTimeout(function () {
									document.getElementById("i6").style.visibility="visible";
									document.getElementById("pin1").style.transformOrigin = "80% 90%";
									document.getElementById("pin1").style.animation="movePin7 2s forwards";
									document.getElementById("water1").style.animation = "moveWater47 2s forwards";
									setTimeout(function () {
										document.getElementById("i7").style.visibility="visible";
										document.getElementById("pin1").style.transformOrigin = "80% 90%";
										document.getElementById("pin1").style.animation="movePin8 2s forwards";
										document.getElementById("water1").style.animation = "moveWater48 2s forwards";
										setTimeout(function () {
											document.getElementById("i8").style.visibility="visible";
											document.getElementById("pin1").style.transformOrigin = "80% 90%";
											document.getElementById("pin1").style.animation="movePin9 2s forwards";
											document.getElementById("water1").style.animation = "moveWater49 2s forwards";
											setTimeout(function () {
												document.getElementById("i9").style.visibility="visible";
												document.getElementById("pin1").style.transformOrigin = "80% 90%";
												document.getElementById("pin1").style.animation="movePin10 2s forwards";
												document.getElementById("water1").style.animation = "moveWater50 2s forwards";
												setTimeout(function () {
													document.getElementById("i10").style.visibility="visible";
													document.getElementById("pin1").style.transformOrigin = "80% 90%";
													document.getElementById("pin1").style.animation="movePin11 2s forwards";
													document.getElementById("water1").style.animation = "moveWater51 2s forwards";
													setTimeout(function () {
														document.getElementById("i11").style.visibility="visible";
														document.getElementById("pin1").style.transformOrigin = "80% 90%";
														document.getElementById("pin1").style.animation="movePin12 2s forwards";
														document.getElementById("water1").style.animation = "moveWater52 2s forwards";
														setTimeout(function () {
															document.getElementById("i12").style.visibility="visible";
															document.getElementById("pin1").style.transformOrigin = "80% 90%";
															document.getElementById("pin1").style.animation="movePin13 2s forwards";
															document.getElementById("water1").style.animation = "moveWater53 2s forwards";
															setTimeout(function () {
																document.getElementById("i13").style.visibility="visible";
																// document.getElementById("pin1").style.transformOrigin = "80% 90%";
																// document.getElementById("pin1").style.animation="movePin13 2s forwards";
																// document.getElementById("water1").style.animation = "moveWater54 2s forwards";
																document.getElementById("nextButton").style.visibility = "visible";
																										
																							
																							
																							
																							
																							
															},2500);
																									
																						
																						
																						
																						
																						
														},2500);
																								
																					
																					
																					
																					
																					
													},2500);
																							
																				
																				
																				
																				
																				
												},2500);
																						
																			
																			
																			
																			
																			
											},2500);
																					
																		
																		
																		
																		
																		
										},2500);
																				
																	
																	
																	
																	
																	
									},2500);
																			
																
																
																
																
																
								},2500);
																		
															
															
															
															
															
							},2500);
																	
														
														
														
														
														
						},2500);
																
													
													
													
													
													
					},2500);
															
												
												
												
												
												
				},2500);
														
											
											
											
											
										
			},2500);
										}
														},3000);
													
														
														},1500);
																},1000);
															},1000);
														},1000);
														},1000);
													  }
										
										
										
										
										
										
										
										
										
										
													  
													},3000);
													
										
										
										
										
										
										
													
													},1500);
															},1000);
														},1000);
													},1000);
													},1000);
												  }
									
									
									
									
									
									
									
									
									
									
												  
												},3000);
												
									
									
									
									
									
									
												
												},1500);
														},1000);
													},1000);
												},1000);
												},1000);
											  }
								
								
								
								
								
								
								
								
								
								
											  
											},3000);
								
								
								
								
								
								
											
											},1500);
													},1000);
												},1000);
											},1000);
											},1000);
										  }
							
							
							
							
							
							
							
							
							
							
										  
										},3000);
							
							
							
							
							
							
										
										},1500);
												},1000);
											},1000);
										},1000);
										},1000);
									  }
						
						
						
						
						
						
						
						
						
						
									  
									},3000);
						
						
						
						
						
						
						
									
									},1500);
											},1000);
										},1000);
									},1000);
									},1000);
								  }
					
					
					
					
					
					
					
					
					
					
								  
								},3000);
					
					
					
					
					
					
					
								
								},1500);
										},1000);
									},1000);
								},1000);
								},1000);
							  }
				
				
				
				
				
				
				
				
				
				
							  
							},3000);
				
				
				
				
				
				
							
							},1500);
									},1000);
								},1000);
							},1000);
							},1000);
						  }
			
			
			
			
			
			
			
			
			
			
						  
						},3000);
				
				
				
				
				
				
				
							
							},1500);
									},1000);
								},1000);
							},1000);
							},1000);
						  }
			
			
			
			
			
			
			
			
			
			
						  
						},3000);



			
			
			
			
			
			
						
						},1500);
								},1000);
							},1000);
						},1000);
						},1000);
					  }
		
		
		
		
		
		
		
		
		
		
					  
					},3000);



		
		
		
		
		
		
		
					
					},1500);
							},1000);
						},1000);
					},1000);
					},1000);
				  }
	
	
	
	
	
	
	
	
	
	
				  
				},3000);
	
	
	
	
	
	
	
				
				},1500);
						},1000);
					},1000);
				},1000);
				},1000);
			  }










			  
			},3000);
			},1500);
					},1000);
				},1000);
			},1000);
			},1000);
		  }

	}
	else if(simsubscreennum==5){
		document.getElementById("tab1").style.visibility="hidden";
		document.getElementById("ground1").style.visibility="hidden";
		document.getElementById("pin1").style.visibility="hidden";
		document.getElementById("clock1").style.visibility="hidden";
		document.getElementById("tub1").style.visibility="hidden";
		document.getElementById("flow2").style.visibility="hidden";
		document.getElementById("flow1").style.visibility="hidden";
		document.getElementById("set1").style.visibility="hidden";
		document.getElementById("dataTable1").style.visibility="hidden";
		document.getElementById("g-1").style.visibility="hidden";
		document.getElementById("g-2").style.visibility="hidden";
		document.getElementById("g-3").style.visibility="hidden";
		document.getElementById("g-4").style.visibility="hidden";
		document.getElementById("g-5").style.visibility="hidden";

		document.getElementById("g-6").style.visibility="hidden";
		document.getElementById("g-7").style.visibility="hidden";
		document.getElementById("g-8").style.visibility="hidden";

		document.getElementById("g-9").style.visibility="hidden";
		document.getElementById("g-10").style.visibility="hidden";
		document.getElementById("g-11").style.visibility="hidden";
		document.getElementById("g-12").style.visibility="hidden";
		document.getElementById("g-13").style.visibility="hidden";
		document.getElementById("g-14").style.visibility="hidden";
		document.getElementById("i1").style.visibility="hidden";
		document.getElementById("i2").style.visibility="hidden";
		document.getElementById("i3").style.visibility="hidden";
		document.getElementById("i4").style.visibility="hidden";
		document.getElementById("i5").style.visibility="hidden";
		document.getElementById("i6").style.visibility="hidden";
		document.getElementById("i7").style.visibility="hidden";
		document.getElementById("i8").style.visibility="hidden";
		document.getElementById("i9").style.visibility="hidden";
		document.getElementById("i10").style.visibility="hidden";
		document.getElementById("i11").style.visibility="hidden";
		document.getElementById("i12").style.visibility="hidden";
		document.getElementById("i13").style.visibility="hidden";
		document.getElementById("water1").style.visibility="hidden";
		document.getElementById("tab2").style.visibility="visible";
		document.getElementById("dataTable2").style.visibility="visible";
		document.getElementById("btn1").style.visibility = "visible";
	}
}


function myStopFunction() {
	clearInterval(myInt);
	document.getElementById("arrow1").style.visibility = "hidden";
  }

	function showContent(elementId) {
		// Show the hidden content div
		document.getElementById(elementId).style.visibility = 'visible';
	  
	  }
	  
	  function hideContent(elementId) {
		// Hide the content div on mouse leave
		document.getElementById(elementId).style.visibility = 'hidden';
	  }


	  function hidedialog4() {
		document.getElementById("dialog3").style.visibility = "hidden";
		document.getElementById("divp2").style.visibility = "hidden";
	  }


	  clkCount1=0;
	  let arr1 = ["0.03","0.22","0.06","0.20","0.09","0.17","0.12","0.15","0.15","0.13","0.18","0.13","0.21","0.13","0.23","0.13","0.23","0.13","0.21","0.13","0.23","0.12","0.23","0.12","0.23","0.12"];

	  function checkInput1() {
		let inputs = [document.getElementById("gi-1"), document.getElementById("gi-2"), document.getElementById("gi-3"), document.getElementById("gi-4"), document.getElementById("gi-5"), document.getElementById("gi-6"), document.getElementById("gi-7"), document.getElementById("gi-8"), document.getElementById("gi-9"), document.getElementById("gi-10"),document.getElementById("gi-11"), document.getElementById("gi-12"), document.getElementById("gi-13"), document.getElementById("gi-14"), document.getElementById("gi-15"), document.getElementById("gi-16"), document.getElementById("gi-17"), document.getElementById("gi-18"), document.getElementById("gi-19"), document.getElementById("gi-20"), document.getElementById("gi-21"), document.getElementById("gi-22"), document.getElementById("gi-23"), document.getElementById("gi-24"), document.getElementById("gi-25"), document.getElementById("gi-26")];
		let anyInputEmpty = false;
		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].value === "") {
				anyInputEmpty = true;
				document.getElementById("alerttxt").style.visibility="visible";
			}
			
		}
		if (anyInputEmpty) {
			return;
		}
		document.getElementById("alerttxt").style.visibility="hidden";
		clkCount1++;
		let allInputsCorrect = true;
		for (let i = 0; i < inputs.length; i++) {
			console.log("red");
			if (inputs[i].value === arr1[i]) {
				inputs[i].style.color = "green";
			
		
			} else {
				allInputsCorrect = false;
				inputs[i].style.color = "red";
			}
		// setTimeout(() => {
		// 		inputs[i].style.color = "black";
		// 	}, 3000);
				// inputs[i].style.color = "black";
			
		}
		if (clkCount1 == 2) {
			document.getElementById("btn1").style.visibility="hidden";
			document.getElementById("resbtn1").style.visibility = "visible";
		}
		if (allInputsCorrect) {
		   
			document.getElementById("btn1").style.visibility = "hidden";
			document.getElementById("resbtn1").style.visibility = "hidden";
		}
	}
	function getResult1() {
		let inputs = [document.getElementById("gi-1"), document.getElementById("gi-2"), document.getElementById("gi-3"), document.getElementById("gi-4"), document.getElementById("gi-5"), document.getElementById("gi-6"), document.getElementById("gi-7"), document.getElementById("gi-8"), document.getElementById("gi-9"), document.getElementById("gi-10"),document.getElementById("gi-11"), document.getElementById("gi-12"), document.getElementById("gi-13"), document.getElementById("gi-14"), document.getElementById("gi-15"), document.getElementById("gi-16"), document.getElementById("gi-17"), document.getElementById("gi-18"), document.getElementById("gi-19"), document.getElementById("gi-20"), document.getElementById("gi-21"), document.getElementById("gi-22"), document.getElementById("gi-23"), document.getElementById("gi-24"), document.getElementById("gi-25"), document.getElementById("gi-26")];
		for (let i = 0; i < inputs.length; i++) {
			inputs[i].value = arr1[i];
			inputs[i].style.color = "green";
		}
		document.getElementById("resbtn1").style.visibility = "hidden";
	
		// document.getElementById("nextButton").style.visibility = "visible";
	}
		  
		  
		  
		  
		  
	
	function alert1() {
	  alert("Hello! I am an alert box!");
	}