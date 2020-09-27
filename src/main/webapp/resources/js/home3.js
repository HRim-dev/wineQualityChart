// Vanilla JS
/*document.addEventListener('DOMContentLoaded', function() {
	  // code
	load_wineQualitylist();
});
*/

// jQuery
$( document ).ready(function() {
	load_wineQualitylist();
});

function load_wineQualitylist() {
	let wineQualityList;
	let html;
	let url = "/highchart_pilot/restex";
	// Jquery 
	 $("#load_wineQualityList").click(function(){  
		 //ajax 톤신(동적으로 JSON 파일(결과값) 로드
		 $.ajax({
			url: url,
			dataType: "json",
			success:function(data){
				//받아온 JSON을 테이블로 툴력
				$.each(data, function(){
					$("#wineQualityList").append("<tr><td>"+this.quality+"</td>" +
							"<td>"+this.pH+"</td>"+
							"<td>"+this.fixed_acidity+"</td>"+
							"<td>"+this.volatile_acidity+"</td>"+
							"<td>"+this.alcohol+"</td>"+
							"</tr>") ;                              
				});
			},
			error:function(){
				alert("ajax 통신 오류");
			}
		 });
	});
}



// Vanilla JS
//document.getElementById('load_wineQualityList').addEventListener('click', function() {
/*
 * 
			// Vanilla JS
			var url = "/highchart_pilot/restex";

			var beforeSend = function() {
				var wrap = document.getElementById('wineQualityList')
				while (wrap.firstChild)
					wrap.removeChild(wrap.firstChild)
			}

			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log(xhr.responseText);
						wineQualityList = JSON.parse(xhr.responseText);

						for (var i = 0; i < wineQualityList.length; i++) {

							var tr = document.createElement('tr');
							var td1 = document.createElement('td');
							td1.innerHTML = wineQualityList[i].quality;
							tr.appendChild(td1);

							var td2 = document.createElement('td');
							td2.innerHTML = wineQualityList[i].pH;
							tr.appendChild(td2);

							var td3 = document.createElement('td');
							td3.innerHTML = wineQualityList[i].fixed_acidity;
							tr.appendChild(td3);
							
							document.getElementById('wineQualityList')
									.appendChild(tr);

						}

					} else alert(xhr.responseText);
				}
			}

			xhr.open("POST", url, true);
			xhr.setRequestHeader("Content-Type", "application/json");
			beforeSend();
			xhr.send(null);});
 */