function showDate()
{
	var now = new Date();
	var days = new Array('Κυρ','Δευ','Τρι','Τετ','Πεμ','Παρ','Σαβ');
	var months = new Array('1','2','3','4','5','6','7','8','9','10','11','12');
	var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
	function fourdigits(number)
	{
		return (number < 1000) ? number + 1900 : number;
	}
	
	tnow=new Date();
	thour=now.getHours();
	tmin=now.getMinutes();
	tsec=now.getSeconds();
	cYear = now.getFullYear();
	

	if (tmin<=9) { tmin="0"+tmin; }
	if (tsec<=9) { tsec="0"+tsec; }
	if (thour<10) { thour="0"+thour; }
	
	today = days[now.getDay()] + " " + date + "/" + months[now.getMonth()] + " " + thour + ":" + tmin;
	document.getElementById("dateDiv").innerHTML = today;
	document.getElementById("dateDiv2").innerHTML = today;
	todayInfo = thour + ":" + tmin + " " + date + "/" + months[now.getMonth()] + " " + cYear;
	document.getElementById("dateDiv3").innerHTML = todayInfo;
}
setInterval("showDate()", 1000);

/* PROJECT NAME: ΟΔΗΓΟΣ ΧΡΗΣΗΣ για τον Hybrid Αποκωδικοποιητή KAONMEDIA NS1110H
Built with Bootstrap Framework,Jquery, CSS3, HTML5,Font Awesome.
ΣΤΟΙΧΕΙΑ ΠΡΟΓΡΑΜΜΑΤΙΣΤΗ: 
ONOMA: Κλάδης Νικόλαος
Ε-MAIL: nkladis@ote.gr */