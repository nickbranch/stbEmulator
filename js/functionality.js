/* PROJECT NAME: ΟΔΗΓΟΣ ΧΡΗΣΗΣ για τον Hybrid Αποκωδικοποιητή KAONMEDIA NS1110H
Built with Bootstrap Framework,Jquery, CSS3, HTML5,Font Awesome.
ΣΤΟΙΧΕΙΑ ΠΡΟΓΡΑΜΜΑΤΙΣΤΗ: 
ONOMA: Κλάδης Νικόλαος
Ε-MAIL: nkladis@ote.gr */
var languages = new Array('Ελληνικά','Αγγλικά');
var subtitles = new Array('Ελληνικά','Μη διαθέσιμοι');
var catItems = new Array('Όλα','Αγαπημένα','Ελληνικά','Ταινίες/Σειρές','Αθλητικά','Ντοκιμαντέρ','Lifestyle','Παιδικά','Μουσικά','Τοπικά Ελλ','Ειδησεογραφικά','Cinema On Demand**','Για ενηλίκους');
var i = 1;
var j = 0;
var k = 0;
var pinVariable = 0;
var livepauseconf = false;
var livepausechoices = false;
var miniepgconf= false;
var miniEpgChoices= false;
var gbutton= false;
var recording = false;
var showProg = false;
var showAltProg = false;
var fav = false;
var remFavo = true;
var programmChoices = false;
var synopsis = false;
var chanLcat = false;
var lpStop = false;
var recordMain = false;
var recordTimeBased = false;
var rtv = false;
var RTVChoices = false;
var showSignalSettingsVAR = false;
var showSatSettingsVAR = false;
var showFreeSatVAR = false;
var showSoundAndSubtitlesVar = false;
var showVideoSettingsVAR = false;
var recording2 = false;
var count = 0;
var iteration = 0;
var checkALL = false;

function backbutton(){
if ($("#categoriesInside").hasClass("hidden")=== false) {
	$("#categoriesInside").addClass("hidden");
	$("#mainmenuCategoriesInside").addClass("hidden");
	$("#alphaMenu").addClass("hidden");
	$("#vodButtonsCatInside").addClass("hidden");
	$("#menuCategoriesMAIN").removeClass("hidden");
	$("#vodButtonsCategories").removeClass("hidden");
	$("#mainmenuCod").removeClass("hidden");
	return;
}

if (($("#favChannels").hasClass("hidden")=== false) && (checkALL)) {
	$("input[type='checkbox']").prop('checked',false);
	checkALL = false;
	var msgstring = "Επιλογή Όλων";
	document.getElementById("checkALLspan").innerHTML = msgstring;
	return;
}

if (($("#stepTwoFreeSat").hasClass("hidden")=== false) && (checkALL)) {
	$("input[type='checkbox']").prop('checked',false);
	checkALL = false;
	var msgstring = "Επιλογή Όλων";
	document.getElementById("checkALLspanFreeSat").innerHTML = msgstring;
	return;
}

if (($("#boolSelectCOD1").hasClass("hidden")=== false) && (checker)) {
	$("input[type='checkbox']").prop('checked',false);
	checker = false;
	var msgstring = "Επιλογή Όλων";
	document.getElementById("myCODCheckALL").innerHTML = msgstring;
	return;
} else if ($("#boolSelectCOD1").hasClass("hidden")=== false) {
	$( ".hidethis" ).addClass("hidden");
	var msgstring = "Επιλογή";
	document.getElementById("myCODCheckALL").innerHTML = msgstring;
	return;
}

if (($("#boolSelectCOD1FAV").hasClass("hidden")=== false) && (checker)) {
	$("input[type='checkbox']").prop('checked',false);
	checker = false;
	var msgstring = "Επιλογή Όλων";
	document.getElementById("myCODCheckALL").innerHTML = msgstring;
	return;
} else if ($("#boolSelectCOD1FAV").hasClass("hidden")=== false) {
	$( ".hidethis" ).addClass("hidden");
	var msgstring = "Επιλογή";
	document.getElementById("myCODCheckALL").innerHTML = msgstring;
	return;
}

if (($("#boolSelectDL").hasClass("hidden")=== false) && (checker)) {
	$("input[type='checkbox']").prop('checked',false);
	checker = false;
	var msgstring = "Επιλογή Όλων";
	document.getElementById("myDLSCheckALL").innerHTML = msgstring;
	return;
} else if ($("#boolSelectDL").hasClass("hidden")=== false) {
	$( ".hidethis" ).addClass("hidden");
	var msgstring = "Επιλογή";
	document.getElementById("myDLSCheckALL").innerHTML = msgstring;
	return;
}

if (($("#boolSelect").hasClass("hidden")=== false) && (checker)) {
	$("input[type='checkbox']").prop('checked',false);
	checker = false;
	var msgstring = "Επιλογή Όλων";
	document.getElementById("myRecsCheckALL").innerHTML = msgstring;
	return;
} else if ($("#boolSelect").hasClass("hidden")=== false) {
	$( ".hidethis" ).addClass("hidden");
	var msgstring = "Επιλογή";
	document.getElementById("myRecsCheckALL").innerHTML = msgstring;
	return;
}

if ($("#insideSeries").hasClass("hidden")=== false) {
	$("#insideSeries").addClass("hidden");
	$("#allDiv").removeClass("hidden");
	return;
} else {
	$("#myRecordings").addClass('hidden');
}
	$("#recordp").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#recSettings").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	recordTimeBased = false;

if (synopsis && miniepgconf) {
		$("#synopsis").addClass('hidden');
		$("#miniEpgChoices").addClass('hidden');
		$("#miniepg").removeClass('hidden');
		synopsis = false;
	} else if (synopsis && showProg) {
		$("#synopsis").addClass('hidden');
		$("#programm").removeClass('hidden');
		synopsis = false;
		return;
	} else if (synopsis && showAltProg) {
		$("#synopsis").addClass('hidden');
		$("#alternativeProgramm").removeClass('hidden');
		synopsis = false;
		return;
	} else if (synopsis && rtv){
		$("#synopsis").addClass('hidden');
		$("#replayTVProgramm").removeClass('hidden');
		synopsis = false;
		return;
	} else if (miniepgconf && count === 1){
		$("#miniEpgChoices").addClass('hidden');
		$("#miniepg").removeClass('hidden');
		count = 0;
		return;
	} else if (rtv && count === 1){
		$("#RTVChoices").addClass('hidden');
		$("#replayTVProgramm").removeClass('hidden');
		count = 0;
		return;
	} else if (count===0){
		$("#miniepg").addClass('hidden');
		$("#replayTVProgramm").addClass('hidden');
		miniepgconf = false;
		rtv = false;
	} else {
		iteration = 1;
	}
	
	if (recordMain && programmChoices) {
		$("#recordp").addClass('hidden');
		$("#programmChoices").removeClass('hidden');
		recordMain = false;
	}
	
	if (chanLcat){
		$("#chanList").addClass('hidden');
		chanLcat = false;
	}

	if (showProg && programmChoices) {
		$("#programmChoices").addClass('hidden');
		$("#programm").removeClass('hidden');
		programmChoices = false;
	} else if (showAltProg && programmChoices) {
		$("#programmChoices").addClass('hidden');
		$("#alternativeProgramm").removeClass('hidden');
		programmChoices = false;
	} else {
		iteration = 1;
	}
	
	if (showProg && count === 1) {
		$("#programm").removeClass('hidden');
		count = 0;
	} else if (showAltProg && count===1){
		$("#alternativeProgramm").removeClass('hidden');
		count = 0;
	} else if (count===0){
		$("#programm").addClass('hidden');
		$("#alternativeProgramm").addClass('hidden');
		showAltProg = false;
		showProg = false;		
	} else {
		iteration = 1;
	}

	if (livepauseconf && livepausechoices) {
	$("#lpchoicespanel").addClass('hidden');
	livepausechoices = false;
	} else if (livepauseconf && lpStop) {
		$("#bStopButton").addClass('hidden');
		lpStop = false;
		livepauseconf = true;
	} else if (livepauseconf) {
		$("#bStopButton").removeClass('hidden');
		lpStop = true;
	} else {
		$("#livepause").addClass('hidden');
		livepauseconf = false;
	}
	
	if (gbutton) {
		$("#gbutton").addClass('hidden');
	}
}

function stopButton() {
if (livepauseconf) {
	lpStop = true;
	livepausechoices = false;
	$("#lpchoicespanel").addClass('hidden');
	$("#bStopButton").removeClass('hidden');
} else if (recording || recording2) {
	$("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#recSettings").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#stopRec").removeClass('hidden');
} else {
	iteration =1 ;
	}
}
	
function greenbutton() {
	$("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#recSettings").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	chanLcat = false;
	
if (miniepgconf===false && livepauseconf===false && showProg===false && showAltProg===false && rtv===false)  //ΕΑΝ ΤΟ ΜΙΝΙ EPG,EPG,rtv ΚΑΙ ΤΟ PAUSE ΕΙΝΑΙ ΚΛΕΙΣΤΟ ΤΟΤΕ ΔΕΙΞΕ ΤΙΣ ΕΠΙΛΟΓΕΣ ΤΟΥ ΠΡΑΣΙΝΟΥ
{
$("#gbutton").removeClass('hidden');
document.getElementById("gbuttonsubs").innerHTML = subtitles[0];
document.getElementById("gbuttonsound").innerHTML = languages[0];
	 gbutton = true;
}
else if (livepauseconf) // ΑΛΛΙΩΣ ΑΝ ΕΙΝΑΙ ΑΝΟΙΧΤΟ ΤΟ PAUSE ΑΝΟΙΞΕ ΤΙΣ ΕΠΙΛΟΓΕΣ ΤΟΥ
{
	$("#lpchoicespanel").removeClass('hidden');
	document.getElementById("subtitles").innerHTML = languages[0];
	document.getElementById("soundlang").innerHTML = languages[1];
	livepausechoices = true;
}
else if (miniepgconf) // ΑΛΛΙΩΣ ΑΝ ΕΙΝΑΙ ΑΝΟΙΧΤΟ ΤΟ ΜΙΝΙ EPG ΑΝΟΙΞΕ ΤΙΣ ΕΠΙΛΟΓΕΣ ΤΟΥ
{
	$("#miniEpgChoices").removeClass('hidden');
	$("#miniepg").addClass('hidden');
	document.getElementById("miniepgsubtitles").innerHTML = languages[0];
	document.getElementById("miniepgsoundlang").innerHTML = languages[1];
		miniEpgChoices = true;
		count = 1;
} 
else if (showProg||showAltProg) // ΑΛΛΙΩΣ ΑΝ ΕΙΝΑΙ ΑΝΟΙΧΤΟ ΤΟ EPG ΑΝΟΙΞΕ ΤΙΣ ΕΠΙΛΟΓΕΣ ΤΟΥ
{
	$("#programmChoices").removeClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');	
	document.getElementById("epgsubtitles").innerHTML = languages[0];
	document.getElementById("epgsoundlang").innerHTML = languages[1];
		programmChoices = true;
		count = 1;
}
else if (rtv)// ΑΛΛΙΩΣ ΑΝ ΕΙΝΑΙ ΑΝΟΙΧΤΟ ΤΟ rtv ΑΝΟΙΞΕ ΤΙΣ ΕΠΙΛΟΓΕΣ ΤΟΥ
{
	$("#RTVChoices").removeClass('hidden');
	$("#replayTVProgramm").addClass('hidden');	
	document.getElementById("epgsubtitles").innerHTML = languages[0];
	document.getElementById("epgsoundlang").innerHTML = languages[1];
		RTVChoices = true;
		count = 1;
}
else {
	gbutton= false;
}
}

function redButton() {
	if (remFavo) {
		document.getElementById("messageFav").innerHTML = "Επιτυχής προσθήκη καναλιού στα αγαπημένα";
		document.getElementById("messageCODFav").innerHTML = "Επιτυχής προσθήκη στα αγαπημένα";
		document.getElementById("progFav").innerHTML = "Διαγρ. Αγαπ";
		document.getElementById("progFavAlt").innerHTML = "Διαγρ. Αγαπ";
		document.getElementById("miniEPGfav").innerHTML = "Διαγρ. Αγαπ";
		document.getElementById("progreplayTV").innerHTML = "Διαγρ. Αγαπ";
		document.getElementById("favRentCod").innerHTML = "Διαγρ. Αγαπ";
		document.getElementById("favRentCodSynopsis").innerHTML = "Διαγρ. Αγαπ";
		document.getElementById("favRentCatsInside").innerHTML = "Διαγρ. Αγαπ";
		$("#rtvimgfav").removeClass('hidden');
		$("#altprogStar").removeClass('hidden');	
		fav = true;
		remFavo = false;
	} else if (fav) {
		document.getElementById("messageFav").innerHTML = "Επιτυχής Αφαίρεση καναλιού από τα αγαπημένα";
		document.getElementById("messageCODFav").innerHTML = "Επιτυχής Αφαίρεση από τα αγαπημένα";
		document.getElementById("progFav").innerHTML = "Προσ. Αγαπ";
		document.getElementById("progFavAlt").innerHTML = "Προσ. Αγαπ";
		document.getElementById("miniEPGfav").innerHTML = "Προσ. Αγαπ";
		document.getElementById("progreplayTV").innerHTML = "Προσ. Αγαπ";
		document.getElementById("favRentCod").innerHTML = "Προσ. Αγαπ";
		document.getElementById("favRentCodSynopsis").innerHTML = "Προσ. Αγαπ";
		document.getElementById("favRentCatsInside").innerHTML = "Προσ. Αγαπ";
		$("#rtvimgfav").addClass('hidden');
		$("#altprogStar").addClass('hidden');
		fav = false;
		remFavo = true;
	} else {
		fav = false;
		remFavo = false;
	}
}

function blueButton() {
if (showProg||showAltProg){
	if (i === 0) {
		document.getElementById("progCatPlace").innerHTML = catItems[i];
		document.getElementById("progCatAltPlace").innerHTML = catItems[i];
		i++;
	} else if (i === 1) {			
	document.getElementById("progCatPlace").innerHTML = catItems[1];
	document.getElementById("progCatAltPlace").innerHTML = catItems[1];
	i++;
	} else {
		if (i === (catItems.length)) {
		i = 0;
		document.getElementById("progCatPlace").innerHTML = catItems[i];
		document.getElementById("progCatAltPlace").innerHTML = catItems[i];
		i++;
		return;
		}
		document.getElementById("progCatPlace").innerHTML = catItems[i];
		document.getElementById("progCatAltPlace").innerHTML = catItems[i];
		i++;
	}
} else if (($("#signalSettings").hasClass('hidden')===false) && ($("#freeSat").hasClass('hidden')===false)) {
	msgString = "Τα επιλεγμένα κανάλια/ραδιοσταθμοί σωθήκανε στην λίστα καναλιών και αρχίζουνε απο τον αριθμό 800.";
	document.getElementById("agentMsg").innerHTML = msgString;
	$("#freeSatSaveBtn").addClass('hidden');	
} else if ($("#favChannels").hasClass('hidden')===false) {
	var msgstring = "Αφού επιλέξουμε με το πλήκτρο ΟΚ όλα τα κανάλια που θέλουμε για αγαπημένα απο όλες τις σελίδες, πατάμε το μπλέ κουμπί για αποθήκευση αλλαγών.";
	document.getElementById("agentMsg").innerHTML = msgstring;
	$("#favSaveBtn").addClass('hidden');	
}
}

function showSaveBtn() {
	$("#freeSatSaveBtn").removeClass('hidden');
}

var diseqc = new Array('Κανένα','Α','Β','C','D');
var lnbNO = new Array('1','2','3','4');
var sateliteName = new Array('EUTELSAT 9B','HOTBIRD','ASTRA','OTHER');
var iDis = 0;
var satName = 0;

function disRight() {
	if (iDis === 0) {
		document.getElementById("diseqc").innerHTML = diseqc[iDis+1];
		document.getElementById("lnbNO").innerHTML = lnbNO[iDis];
		document.getElementById("sateliteName").innerHTML = sateliteName[iDis];
		iDis++;
	} else if (iDis === 1) {			
		document.getElementById("diseqc").innerHTML = diseqc[iDis+1];
		document.getElementById("lnbNO").innerHTML = lnbNO[1];
		document.getElementById("sateliteName").innerHTML = sateliteName[1];
		iDis++;
	} else {
		if (iDis === (diseqc.length-1)) {
		iDis = 0;
		document.getElementById("diseqc").innerHTML = diseqc[iDis];
		document.getElementById("lnbNO").innerHTML = lnbNO[iDis];
		document.getElementById("sateliteName").innerHTML = sateliteName[iDis];
		return;
		}
		document.getElementById("diseqc").innerHTML = diseqc[iDis+1];
		document.getElementById("lnbNO").innerHTML = lnbNO[iDis];
		document.getElementById("sateliteName").innerHTML = sateliteName[iDis];
		iDis++;
	}
}

function disLeft() {
if (iDis === 0) {
		document.getElementById("diseqc").innerHTML = diseqc[diseqc.length-1];
		document.getElementById("lnbNO").innerHTML = lnbNO[lnbNO.length-1];
		document.getElementById("sateliteName").innerHTML = sateliteName[sateliteName.length-1];
		iDis=4;
} else if (iDis === 1) {
		document.getElementById("diseqc").innerHTML = diseqc[iDis-1];
		document.getElementById("lnbNO").innerHTML = lnbNO[iDis-1];
		document.getElementById("sateliteName").innerHTML = sateliteName[iDis-1];
		iDis--;
} else {	
	iDis--;		
		document.getElementById("diseqc").innerHTML = diseqc[iDis];
		document.getElementById("lnbNO").innerHTML = lnbNO[iDis-1];
		document.getElementById("sateliteName").innerHTML = sateliteName[iDis-1];
	}	
}

function lnbNumberRight() {
	if (iDis === 0) {
		document.getElementById("diseqc").innerHTML = diseqc[iDis+1];
		document.getElementById("lnbNO").innerHTML = lnbNO[iDis];
		document.getElementById("sateliteName").innerHTML = sateliteName[iDis];
		iDis++;
	} else if (iDis === 1) {			
		document.getElementById("diseqc").innerHTML = diseqc[iDis+1];
		document.getElementById("lnbNO").innerHTML = lnbNO[1];
		document.getElementById("sateliteName").innerHTML = sateliteName[1];
		iDis++;
	} else {
		if (iDis === (diseqc.length-1)) {
		iDis = 0;
		document.getElementById("diseqc").innerHTML = diseqc[iDis];
		document.getElementById("lnbNO").innerHTML = lnbNO[iDis];
		document.getElementById("sateliteName").innerHTML = sateliteName[iDis];
		return;
		}
		document.getElementById("diseqc").innerHTML = diseqc[iDis+1];
		document.getElementById("lnbNO").innerHTML = lnbNO[iDis];
		document.getElementById("sateliteName").innerHTML = sateliteName[iDis];
		iDis++;
	}
}

function lnbNumberLeft() {
if (iDis === 0) {
		document.getElementById("diseqc").innerHTML = diseqc[diseqc.length-1];
		document.getElementById("lnbNO").innerHTML = lnbNO[lnbNO.length-1];
		document.getElementById("sateliteName").innerHTML = sateliteName[sateliteName.length-1];
		iDis=4;
} else if (iDis === 1) {
		document.getElementById("diseqc").innerHTML = diseqc[iDis];
		document.getElementById("lnbNO").innerHTML = lnbNO[iDis-1];
		document.getElementById("sateliteName").innerHTML = sateliteName[iDis-1];
		iDis--;
} else {	
	iDis--;		
		document.getElementById("diseqc").innerHTML = diseqc[iDis];
		document.getElementById("lnbNO").innerHTML = lnbNO[iDis-1];
		document.getElementById("sateliteName").innerHTML = sateliteName[iDis-1];
	}	
}

function satNameRight() {
	if (iDis === 0) {
		iDis++;
		document.getElementById("sateliteName").innerHTML = sateliteName[iDis];
	} else if (iDis === 1) {
		iDis++;
		document.getElementById("sateliteName").innerHTML = sateliteName[iDis];
	} else {
		if (iDis === (sateliteName.length-1)) {
		iDis = 0;
		document.getElementById("sateliteName").innerHTML = sateliteName[iDis];
		return;
		}
		if (iDis > (sateliteName.length-1)) {
		iDis = 0;
		document.getElementById("sateliteName").innerHTML = sateliteName[iDis];
		return;
		}
		iDis++;
		document.getElementById("sateliteName").innerHTML = sateliteName[iDis];		
	}
}

function satNameLeft() {
if (iDis === 0) {
	iDis = 3;
		document.getElementById("sateliteName").innerHTML = sateliteName[iDis];
} else if (iDis === 1) {
		document.getElementById("sateliteName").innerHTML = sateliteName[0];
		iDis--;
} else {
		document.getElementById("sateliteName").innerHTML = sateliteName[iDis-1];
		iDis--;
	}	
}

var lnbType = new Array('Universal','Manual');
var iLNBtype = 0;

function lnbtypeRL() {
if (iLNBtype === 0) {
	iLNBtype++;
	document.getElementById("lnbType").innerHTML = lnbType[iLNBtype];
	} else if (iLNBtype === 1) {			
	iLNBtype = 0;
		document.getElementById("lnbType").innerHTML = lnbType[iLNBtype];
	}
}

function showStepOne() {
	$("#stepTwo").addClass('hidden');
	$("#stepOne").removeClass('hidden');
}

function showStepTwo() {
	$("#stepOne").addClass('hidden');
	$("#stepTwo").removeClass('hidden');
}

function showStepThree() {
	$("#stepTwo").addClass('hidden');
	$("#stepThree").removeClass('hidden');
}

function finalizeSearch() {
	$("#stepThree").addClass('hidden');
	$("#stepOne").removeClass('hidden');
}

function newSearch() {
	var msgstring = "Έαν δεν κλειδώσει το λουκέτο μπορεί ο χρήστης να κάνει νέα προσπάθεια πατώντας νέα αναζήτηση.";
		document.getElementById("agentMsg").innerHTML = msgstring;
}

/*FREE SAT*/
function showStepTwoFreeSat() {
	$("#stepOneFreeSat").addClass('hidden');
	$("#stepTwoFreeSat").removeClass('hidden');
	var msgstring = "Mόλις πατηθεί το πλήκτρο για προβολή καναλιών αρχίζει η αναζήτηση. Μπορεί να διακοπεί πατώντας το κόκκινο πλήκτρο.";
	document.getElementById("agentMsg").innerHTML = msgstring;
}

function showStepTwoFreeSatAuto() {
	$("#stepOneFreeSat").addClass('hidden');
	$("#stepTwoFreeSat").removeClass('hidden');
	var msgstring = "Mόλις πατηθεί το πλήκτρο για προβολή καναλιών αρχίζει η AYTOMATH αναζήτηση. Μπορεί να διακοπεί πατώντας το κόκκινο πλήκτρο. Προσθέτονται όλα τα κανάλια/ραδιοσταθμοί από όλους τους δορυφόρους/αναμεταδότες που βλέπει ο αποκωδικοποιητής και το κεραιοσύστημα";
	document.getElementById("agentMsg").innerHTML = msgstring;
}

function valuesForFreeSatOthers() {
freeSatTransCount = 1;
document.getElementById("freeSatTransmit").innerHTML = freeSatTransmiter[freeSatTransCount];	
lnbOrientCount = 0;
document.getElementById("freeSatPolosi").innerHTML = orientation[lnbOrientCount];
modTypeCounter = 3;
document.getElementById("freeSatModType").innerHTML = modType[modTypeCounter];
fecCounter = 0;
document.getElementById("freeSatFEC").innerHTML = fec[fecCounter];
txtString = "<input type=\"textbox\">";
document.getElementById("freeSatFreq").innerHTML = txtString;
document.getElementById("freeSatRate").innerHTML = txtString;
}

function valuesForFreeSatALLSATS() {
freeSatTransCount = 0;
document.getElementById("freeSatTransmit").innerHTML = freeSatTransmiter[freeSatTransCount];
lnbOrientCount = 0;
blankstring = "&nbsp;";
document.getElementById("freeSatPolosi").innerHTML = blankstring;
modTypeCounter = 0;
document.getElementById("freeSatModType").innerHTML = blankstring;
fecCounter = 0;
document.getElementById("freeSatFEC").innerHTML = blankstring;
document.getElementById("freeSatFreq").innerHTML = blankstring;
document.getElementById("freeSatRate").innerHTML = blankstring;
}

var freeSatIName = 0;
function freeSatSateliteRight() {
if (freeSatIName === 2) {
		freeSatIName++;
		document.getElementById("freeSatSatelite").innerHTML = sateliteName[freeSatIName];
		valuesForFreeSatOthers();
} else if (freeSatIName === 0) {
		freeSatIName++;
		document.getElementById("freeSatSatelite").innerHTML = sateliteName[freeSatIName];
		valuesForFreeSatALLSATS();
} else if (freeSatIName === 1) {
		freeSatIName++;
		document.getElementById("freeSatSatelite").innerHTML = sateliteName[freeSatIName];
		valuesForFreeSatALLSATS();
	} else {
		if (freeSatIName === (sateliteName.length-1)) {
		freeSatIName = 0;
		document.getElementById("freeSatSatelite").innerHTML = sateliteName[freeSatIName];
		valuesForFreeSatALLSATS();
		return;
		}
		if (freeSatIName > (sateliteName.length-1)) {
		freeSatIName = 0;
		document.getElementById("freeSatSatelite").innerHTML = sateliteName[freeSatIName];
		valuesForFreeSatALLSATS();
		return;
		}
		freeSatIName++;
		document.getElementById("freeSatSatelite").innerHTML = sateliteName[freeSatIName];
		valuesForFreeSatALLSATS();	
	}
}

function freeSatSateliteLeft() {
if (freeSatIName === 0) {
	freeSatIName = 3;
	document.getElementById("freeSatSatelite").innerHTML = sateliteName[freeSatIName];
	valuesForFreeSatOthers();	
} else if (freeSatIName === 1) {
		document.getElementById("freeSatSatelite").innerHTML = sateliteName[0];
		freeSatIName--;
		valuesForFreeSatALLSATS();		
} else {
		document.getElementById("freeSatSatelite").innerHTML = sateliteName[freeSatIName-1];
		freeSatIName--;
		valuesForFreeSatALLSATS();
	}	
}

var orientation = new Array('Vertical','Horizontal');
var lnbOrientCount = 0;
function lnbOrientation() {
if (freeSatIName === 3) {
if (lnbOrientCount === 0) {
	lnbOrientCount++;
	document.getElementById("freeSatPolosi").innerHTML = orientation[lnbOrientCount];
	} else if (lnbOrientCount === 1) {			
	lnbOrientCount = 0;
		document.getElementById("freeSatPolosi").innerHTML = orientation[lnbOrientCount];
	}
}
}

var modType = new Array('Auto','DVB-S2 QPSK','DVB-S2 SPSK','DVB-S QPSK');
var modTypeCounter = 0;
var modTypeHelper = false;
function modTypeRight() {
if (freeSatIName === 3) {
	if (modTypeCounter === 0) {
		if (modTypeHelper){
		modTypeCounter++;
		modTypeHelper = false;
		document.getElementById("freeSatModType").innerHTML = modType[modTypeCounter];
		} else {
		document.getElementById("freeSatModType").innerHTML = modType[modTypeCounter];
		modTypeCounter++;
		}
	} else {
		if (modTypeCounter > (modType.length-1)) {
		modTypeCounter = 0;
		modTypeHelper = true;
		document.getElementById("freeSatModType").innerHTML = modType[modTypeCounter];
		return;
		}
		document.getElementById("freeSatModType").innerHTML = modType[modTypeCounter];
		modTypeCounter++;
		}
}
}

function modTypeLeft() {
if (freeSatIName === 3) {
if (modTypeCounter === 0) {
	modTypeCounter = 3;
		document.getElementById("freeSatModType").innerHTML = modType[modTypeCounter];
} else if (modTypeCounter === 1) {
		document.getElementById("freeSatModType").innerHTML = modType[0];
		modTypeCounter--;
} else {
		document.getElementById("freeSatModType").innerHTML = modType[modTypeCounter-1];
		modTypeCounter--;
	}	
}
}

var fec = new Array('1/2','2/3','3/4','5/6','7/8','8/9','3/5');
var fecCounter = 0;
function fecRight() {
if (freeSatIName === 3) {
	if (fecCounter === 0) {
		if (modTypeHelper){
		fecCounter++;
		modTypeHelper = false;
		document.getElementById("freeSatFEC").innerHTML = fec[fecCounter];
		} else {
		document.getElementById("freeSatFEC").innerHTML = fec[fecCounter];
		fecCounter++;
		}
	} else {
		if (fecCounter > (fec.length-1)) {
		fecCounter = 0;
		modTypeHelper = true;
		document.getElementById("freeSatFEC").innerHTML = fec[fecCounter];
		return;
		}
		document.getElementById("freeSatFEC").innerHTML = fec[fecCounter];
		fecCounter++;
		}
}
}

function fecLeft() {
if (freeSatIName === 3) {
if (fecCounter === 0) {
	fecCounter = 6;
		document.getElementById("freeSatFEC").innerHTML = fec[fecCounter];
} else if (fecCounter === 1) {
		document.getElementById("freeSatFEC").innerHTML = fec[0];
		fecCounter--;
} else {
		document.getElementById("freeSatFEC").innerHTML = fec[fecCounter-1];
		fecCounter--;
	}	
}
}

var freeSatTransmiter = new Array('all','others');
var freeSatTransCount = 0;
function freeSatTransmitterz() {
if (freeSatTransCount === 0) {
	valuesForFreeSatOthers();
	} else if (freeSatTransCount === 1) {			
	valuesForFreeSatALLSATS();
	}
}

/*OK BUTTON CHANNEL LIST FUNCTIONALITY*/
function chanListRight() {
if (chanLcat){
	if (i === 0) {
		i++;
		document.getElementById("channelTitle").innerHTML = catItems[i];
	} else if (i === 1) {
		i++;
		document.getElementById("channelTitle").innerHTML = catItems[i];
	} else {
		if (i === (catItems.length-1)) {
		i = 0;
		document.getElementById("channelTitle").innerHTML = catItems[i];
		return;
		}
		if (i > (catItems.length-1)) {
		i = 0;
		document.getElementById("channelTitle").innerHTML = catItems[i];
		return;
		}
		i++;
		document.getElementById("channelTitle").innerHTML = catItems[i];		
		}
	}
}

function chanListLeft() {
if (chanLcat){
if (i === 0) {
	i = 12;
		document.getElementById("channelTitle").innerHTML = catItems[i];
} else if (i === 1) {
		document.getElementById("channelTitle").innerHTML = catItems[0];
		i--;
} else {
		document.getElementById("channelTitle").innerHTML = catItems[i-1];
		i--;
	}	
}
}

function subsChoiceRight(){
if (showProg||showAltProg||miniepgconf||gbutton||livepauseconf){
	if (j === 0) {
		document.getElementById("epgsubtitles").innerHTML = subtitles[j];
		document.getElementById("miniepgsubtitles").innerHTML = subtitles[j];
		document.getElementById("gbuttonsubs").innerHTML = subtitles[j];
		document.getElementById("subtitles").innerHTML = subtitles[j];
		j++;
	}else {			
		document.getElementById("epgsubtitles").innerHTML = subtitles[j];
		document.getElementById("miniepgsubtitles").innerHTML = subtitles[j];
		document.getElementById("gbuttonsubs").innerHTML = subtitles[j];
		document.getElementById("subtitles").innerHTML = subtitles[j];
		j++;
		if (j === (subtitles.length)) {
			j = 0;
			}else {
					iteration = 1;
				  }
			}	
	}
}

function subsChoiceLeft() {
if (showProg||showAltProg||miniepgconf||gbutton||livepauseconf){
	if (j === 0) {
		document.getElementById("epgsubtitles").innerHTML = subtitles[j];
		document.getElementById("miniepgsubtitles").innerHTML = subtitles[j];
		document.getElementById("gbuttonsubs").innerHTML = subtitles[j];
		document.getElementById("subtitles").innerHTML = subtitles[j];
		j++;
	}else {			
		document.getElementById("epgsubtitles").innerHTML = subtitles[j];
		document.getElementById("miniepgsubtitles").innerHTML = subtitles[j];
		document.getElementById("gbuttonsubs").innerHTML = subtitles[j];
		document.getElementById("subtitles").innerHTML = subtitles[j];
		j++;
		if (j === (subtitles.length)) {
			j = 0;
			}else {
					iteration = 1;
				  }
			}	
	}
}

function langChoiceRight(){
if (showProg||showAltProg||miniepgconf||gbutton||livepauseconf){
	if (k === 0) {
		document.getElementById("epgsoundlang").innerHTML = subtitles[k];
		document.getElementById("miniepgsoundlang").innerHTML = subtitles[k];
		document.getElementById("gbuttonsound").innerHTML = subtitles[k];
		document.getElementById("soundlang").innerHTML = subtitles[k];
		k++;
	}else {			
		document.getElementById("epgsoundlang").innerHTML = subtitles[k];
		document.getElementById("miniepgsoundlang").innerHTML = subtitles[k];
		document.getElementById("gbuttonsound").innerHTML = subtitles[k];
		document.getElementById("soundlang").innerHTML = subtitles[k];
		k++;
		if (k === (subtitles.length)) {
			k = 0;
			}else {
					iteration = 1;
				  }
			}	
	}
}

function langChoiceLeft() {
if (showProg||showAltProg||miniepgconf||gbutton||livepauseconf){
	if (k === 0) {
		document.getElementById("epgsoundlang").innerHTML = subtitles[k];
		document.getElementById("miniepgsoundlang").innerHTML = subtitles[k];
		document.getElementById("gbuttonsound").innerHTML = subtitles[k];
		document.getElementById("soundlang").innerHTML = subtitles[k];
		k++;
	}else {			
		document.getElementById("epgsoundlang").innerHTML = subtitles[k];
		document.getElementById("miniepgsoundlang").innerHTML = subtitles[k];
		document.getElementById("gbuttonsound").innerHTML = subtitles[k];
		document.getElementById("soundlang").innerHTML = subtitles[k];
		k--;
		if (k === (subtitles.length)) {
			k = 0;
			}else {
					iteration = 1;
				  }
			}	
	}
}

function iButton() {
if (miniepgconf===false && showProg===false && showAltProg===false && rtv===false)  //ΕΑΝ ΤΟ ΜΙΝΙ EPG,EPG,rtv ΕΙΝΑΙ ΚΛΕΙΣΤA ΤΟΤΕ ΔΕΙΞΕ TO MINI EPG KAI ΚΡΥΨΕ ΟΛΑ ΤΑ ΑΛΛΑ
{
	$("#miniepg").removeClass('hidden');
	$("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#recSettings").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	miniepgconf= true;
}
else if (miniepgconf) // ΑΛΛΙΩΣ ΑΝ ΕΙΝΑΙ ΑΝΟΙΧΤΟ ΤΟ miniepg ΑΝΟΙΞΕ ΤΗΝ ΣΥΝΟΨΗ ΚΑΙ ΚΛΕΙΣΕ ΤΟ MINI EPG
{
	$("#synopsis").removeClass('hidden');
	$("#miniepg").addClass('hidden');
	synopsis = true;
	count = 1;
}
else if (showProg||showAltProg||rtv) // ΑΛΛΙΩΣ ΑΝ ΕΙΝΑΙ ΑΝΟΙΧΤΟ ΤΟ EPG/ALTEPG ΑΝΟΙΞΕ ΤHN ΣΥΝΟΨΗ ΚΑΙ ΚΛΕΙΣΕ ΤΟ
{
	$("#synopsis").removeClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	synopsis = true;
	count = 1;
}else {
	synopsis = false;
}
}

function yellowButton() {
	if (showProg) {
		$("#programm").addClass('hidden');
		$("#alternativeProgramm").removeClass('hidden');
		showProg = false;
		showAltProg = true;
	} else if (showAltProg)	{
		$("#alternativeProgramm").addClass('hidden');
		$("#programm").removeClass('hidden');
		showProg = true;
	} else if ($("#favChannels").hasClass('hidden')=== false) {
		uncheckAll();
	} else if ($("#myRecordings").hasClass('hidden')=== false) {
		hideALLCBchoices();
	} else if ($("#myDownloads").hasClass('hidden')=== false) {
		hideALLCBchoicesDL();
	} else if ($("#myOnDemand").hasClass('hidden')=== false) {
		hideALLCBchoicesCOD();
	} else if (($("#signalSettings").hasClass('hidden')===false) && ($("#freeSat").hasClass('hidden')===false)) {
		uncheckAll();
	} else if ($("#menuAlphabetically").hasClass('hidden')=== false) {
		proposalsTwo();
	} else if ($("#menuCategoriesMAIN").hasClass('hidden')=== false) {
		proposalsTwo();
	} else if (($("#onDemandRent").hasClass('hidden')=== false) && ($("#mainViewPremieres").hasClass('hidden')=== false)) {
		changeViewCod();
	} else if (($("#onDemandRent").hasClass('hidden')=== false) && ($("#altViewPremieres").hasClass('hidden')=== false)) {
		changeViewCod();
	} else {
		showProg = false;
		showAltProg = false;
	}
}

function okButton(){
if (($("#signalSettings").hasClass('hidden')===false) && ($("#freeSat").hasClass('hidden')===false) && ($("#stepTwoFreeSat").hasClass('hidden')===false)) {
var msgstring = "Πατώντας το πλήκτρο ΟΚ ο χρήστης μπορεί να επιλέξει/αποεπιλέξει το κανάλι/ραδιοσταθμό στο οποίο μπορεί να πάει με τα βελάκια πλοήγησης.";
document.getElementById("agentMsg").innerHTML = msgstring;
} else if ($("#favChannels").hasClass('hidden')===false) {
var msgstring = "Πατώντας το πλήκτρο ΟΚ ο χρήστης μπορεί να επιλέξει/αποεπιλέξει το κανάλι στο οποίο μπορεί να πάει με τα βελάκια πλοήγησης.";
document.getElementById("agentMsg").innerHTML = msgstring;
} else {	
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 showAltProg = false;
 programmChoices = false;
 synopsis = false;
 chanLcat = true;
 recordTimeBased = false;
 rtv = false;
 showSignalSettingsVAR= false;
 showSoundAndSubtitlesVar = false;
 showVideoSettingsVAR = false;
    $("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#miniEpgChoices").addClass('hidden');
	$("#lpchoicespanel").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#chanList").removeClass('hidden');
}
}

function favButton(){
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 showAltProg = false;
 programmChoices = false;
 synopsis = false;
 chanLcat = true; 
 recordTimeBased = false;
 rtv = false;
 showSignalSettingsVAR= false;
 showSoundAndSubtitlesVar = false;
 showVideoSettingsVAR = false;
    $("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#miniEpgChoices").addClass('hidden');
	$("#lpchoicespanel").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#chanList").removeClass('hidden');
	document.getElementById("channelTitle").innerHTML = catItems[1];
}

function showRecord(){
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 showAltProg = false;
 programmChoices = false;
 synopsis = false;
 recordMain = true;
 recordTimeBased = false;
 rtv = false;
 showSignalSettingsVAR= false;
 showSoundAndSubtitlesVar = false;
 showVideoSettingsVAR = false;
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#miniEpgChoices").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#lpchoicespanel").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#recSettings").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#RTVChoices").addClass('hidden');
	$("#onDemandRent").addClass('hidden');	
if ((document.getElementById('pvrMode').checked) ||(document.getElementById('extHDDmode').checked)) {
	$("#recordp").removeClass('hidden');
	} else {
		$("#nohddAv").removeClass('hidden');
	}
}

function showRecordTimeBased(){
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 showAltProg = false;
 programmChoices = false;
 synopsis = false;
 recordMain = false;
 rtv = false;
 recordTimeBased = true;
 showSignalSettingsVAR= false;
 showSoundAndSubtitlesVar = false;
 showVideoSettingsVAR = false;
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#miniEpgChoices").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#lpchoicespanel").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#recSettings").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordp").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#RTVChoices").addClass('hidden');
	if ((document.getElementById('pvrMode').checked) ||(document.getElementById('extHDDmode').checked)) {
	$("#recordTimeBased").removeClass('hidden');
	} else {
		$("#nohddAv").removeClass('hidden');
	}
}

function cancelTimeBased(){
	if (recordTimeBased){
		$("#recordTimeBased").addClass('hidden');
		recordTimeBased = false;
	} 
}

function recordConfirm1(){
	$("#recordp").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#recordConfirm").removeClass('hidden');
}

function recordConfirm2(){
if (((document.getElementById('pvrMode').checked) && recording === false && recording2 === false) || ((document.getElementById('extHDDmode').checked && recording === false))) {
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").removeClass('hidden');
	$("#recImg").removeClass('hidden');
	recording = true;
	} else if ((document.getElementById('pvrMode').checked) && recording === false && recording2 === true) {
		$("#recordConfirm").addClass('hidden');
		$("#confirmMessageYes").removeClass('hidden');
		$("#recImg").removeClass('hidden');
		recording = true;
	} else if ((document.getElementById('pvrMode').checked) && recording === true && recording2 === false) {
		$("#recordConfirm").addClass('hidden');
		$("#confirmMessageYes").removeClass('hidden');
		$("#recImg2").removeClass('hidden');
		recording2 = true;
	} else if ((document.getElementById('pvrMode').checked) && recording === true && recording2 === true) {
		$("#recordConfirm").addClass('hidden');
		$("#recFunctionality").removeClass('hidden');
		$("#rec1").removeClass('hidden');
		$("#rec2").removeClass('hidden');
	} else if ((document.getElementById('extHDDmode').checked && recording === true)){
		$("#recordConfirm").addClass('hidden');
		$("#rec1").removeClass('hidden');
		$("#recFunctionality").removeClass('hidden');
	} else if ((document.getElementById('extHDDmode').checked && recording2 === true)){
		$("#recordConfirm").addClass('hidden');
		$("#rec2").removeClass('hidden');
		$("#recFunctionality").removeClass('hidden');
	} else {
		iteration = 1;
	}
}

function cancelConfirm(){
	if (recordMain){
		$("#recordConfirm").addClass('hidden');
		$("#recordp").removeClass('hidden');
	} else {
		$("#recordConfirm").addClass('hidden');
		$("#recordTimeBased").removeClass('hidden');
		}
}

function stopRecord(){
if (recording){
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 showAltProg = false;
 programmChoices = false;
 synopsis = false;
 recordTimeBased = false;
 rtv = false;
 showSignalSettingsVAR= false;
 showSoundAndSubtitlesVar = false;
 showVideoSettingsVAR = false;
	$("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#recSettings").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#stopRec").removeClass('hidden');
} else {
	iteration = 1;
	}
}

function stopRecok(){
if ((document.getElementById('rec1cb').checked) && (document.getElementById('pvrMode').checked)) {
	recording = false;
	$("#recFunctionality").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#stopRecordmsg").removeClass('hidden');
	$("#recImg").addClass('hidden');
	$("#rec1").addClass('hidden');
	document.getElementById("rec1cb").checked = false;	
} else if ((document.getElementById('rec2cb').checked) && (document.getElementById('pvrMode').checked)) {
	recording2 = false;
	$("#recFunctionality").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#stopRecordmsg").removeClass('hidden');
	$("#recImg2").addClass('hidden');
	$("#rec2").addClass('hidden');
	document.getElementById("rec2cb").checked = false;
} else if ((document.getElementById('rec1cb').checked) && (document.getElementById('extHDDmode').checked)) {
	recording = false;
	$("#recFunctionality").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#stopRecordmsg").removeClass('hidden');
	$("#recImg").addClass('hidden');
	$("#rec1").addClass('hidden');
	document.getElementById("rec1cb").checked = false;
} else if ((document.getElementById('rec2cb').checked) && (document.getElementById('extHDDmode').checked)) {
	recording2 = false;
	$("#recFunctionality").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#stopRecordmsg").removeClass('hidden');
	$("#recImg2").addClass('hidden');
	$("#rec2").addClass('hidden');
	document.getElementById("rec2cb").checked = false;
} else if ((recording||recording2) && (document.getElementById('extHDDmode').checked)) {
	recording2 = false;
	recording = false;
	$("#stopRec").addClass('hidden');
	$("#stopRecordmsg").removeClass('hidden');
	$("#recImg").addClass('hidden');
	$("#rec1").addClass('hidden');
	$("#recImg2").addClass('hidden');
	$("#rec2").addClass('hidden');
} else if (recording && recording2) {
	recording2 = false;
	$("#stopRec").addClass('hidden');
	$("#stopRecordmsg").removeClass('hidden');
	$("#recImg2").addClass('hidden');
	$("#rec2").addClass('hidden');
} else if (recording || recording2) {
	recording = false;
	recording2 = false;
	$("#stopRec").addClass('hidden');
	$("#stopRecordmsg").removeClass('hidden');
	$("#recImg").addClass('hidden');
	$("#rec1").addClass('hidden');
	$("#recImg2").addClass('hidden');
	$("#rec2").addClass('hidden');
} else {
		iteration = 1;
	}
}

function stopRecCancel(){
	$("#recFunctionality").addClass('hidden');
}

function stopReccancel(){
	$("#stopRec").addClass('hidden');
	$("#confirmMessageYes").removeClass('hidden');
}

function showReplayTV(){
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 programmChoices = false;
 synopsis = false;
 recordTimeBased = false;
 rtv = true;
 showSignalSettingsVAR= false;
 showSoundAndSubtitlesVar = false;
 showVideoSettingsVAR = false;
    $("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#miniEpgChoices").addClass('hidden');
	$("#lpchoicespanel").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#recSettings").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#replayTVProgramm").removeClass('hidden');
}

function leftAddActiveRepTV() {
if ($("#replTVChan1").hasClass("active")) {
	$("#replTVChan1").removeClass("active");
	$("#replTVChan4").addClass("active");
} else if ($("#replTVChan4").hasClass("active")) {
	$("#replTVChan4").removeClass("active");
	$("#replTVChan3").addClass("active");
} else if ($("#replTVChan3").hasClass("active")) {
	$("#replTVChan3").removeClass("active");
	$("#replTVChan2").addClass("active");
} else if ($("#replTVChan2").hasClass("active")) {
	$("#replTVChan2").removeClass("active");
	$("#replTVChan1").addClass("active");
}
}

function rightAddActiveRepTV() {
if ($("#replTVChan1").hasClass("active")) {
	$("#replTVChan1").removeClass("active");
	$("#replTVChan2").addClass("active");
} else if ($("#replTVChan2").hasClass("active")) {
	$("#replTVChan2").removeClass("active");
	$("#replTVChan3").addClass("active");
} else if ($("#replTVChan3").hasClass("active")) {
	$("#replTVChan3").removeClass("active");
	$("#replTVChan4").addClass("active");
} else if ($("#replTVChan4").hasClass("active")) {
	$("#replTVChan4").removeClass("active");
	$("#replTVChan1").addClass("active");
}
}

function showMessages(){
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 showAltProg = false;
 programmChoices = false;
 synopsis = false;
 recordTimeBased = false;
 rtv = false;
 showSignalSettingsVAR= false;
 showSoundAndSubtitlesVar = false;
 showVideoSettingsVAR = false;
	$("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#recSettings").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#messages").removeClass('hidden');
}

function livepause(){
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 showAltProg = false;
 programmChoices = false;
 synopsis = false;	
 recordTimeBased = false;
 rtv = false;
 showSignalSettingsVAR= false;
 showSoundAndSubtitlesVar = false;
 showVideoSettingsVAR = false;
    $("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#miniEpgChoices").addClass('hidden');
	$("#lpchoicespanel").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#recSettings").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#livepause").removeClass('hidden');
	livepauseconf = true;
}

function showProgramm(){
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = true;
 programmChoices = false;
 synopsis = false;
 recordTimeBased = false;
 rtv = false;
 showSignalSettingsVAR = false;
 showSoundAndSubtitlesVar = false;
 showVideoSettingsVAR = false;
    $("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#miniEpgChoices").addClass('hidden');
	$("#lpchoicespanel").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#recSettings").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#programm").removeClass('hidden');
}

function leftAddActiveAltEPG() {
if ($("#altEPGChan1").hasClass("active")) {
	$("#altEPGChan1").removeClass("active");
	$("#altEPGChan4").addClass("active");
} else if ($("#altEPGChan4").hasClass("active")) {
	$("#altEPGChan4").removeClass("active");
	$("#altEPGChan3").addClass("active");
} else if ($("#altEPGChan3").hasClass("active")) {
	$("#altEPGChan3").removeClass("active");
	$("#altEPGChan2").addClass("active");
} else if ($("#altEPGChan2").hasClass("active")) {
	$("#altEPGChan2").removeClass("active");
	$("#altEPGChan1").addClass("active");
}
}

function rightAddActiveAltEPG() {
if ($("#altEPGChan1").hasClass("active")) {
	$("#altEPGChan1").removeClass("active");
	$("#altEPGChan2").addClass("active");
} else if ($("#altEPGChan2").hasClass("active")) {
	$("#altEPGChan2").removeClass("active");
	$("#altEPGChan3").addClass("active");
} else if ($("#altEPGChan3").hasClass("active")) {
	$("#altEPGChan3").removeClass("active");
	$("#altEPGChan4").addClass("active");
} else if ($("#altEPGChan4").hasClass("active")) {
	$("#altEPGChan4").removeClass("active");
	$("#altEPGChan1").addClass("active");
}
}
/**/
function showSignalSettings(){
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 showAltProg = false;
 programmChoices = false;
 synopsis = false;
 recordTimeBased = false;
 rtv = false;
 showSignalSettingsVAR = true;
 showSatSettingsVAR = false;
 showFreeSatVAR = false;
 showSoundAndSubtitlesVar = false;
 showVideoSettingsVAR = false;
    $("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#miniEpgChoices").addClass('hidden');
	$("#lpchoicespanel").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#signalSettings").removeClass('hidden');
}

function showSatSettings(){
	$("#freeSat").addClass('hidden');
	$("#stepThree").addClass('hidden');
	$("#stepTwo").addClass('hidden');
	$("#stepOne").removeClass('hidden');
	$("#satSettings").removeClass('hidden');
}

function showFreeSat(){
	$("#satSettings").addClass('hidden');
	$("#stepTwoFreeSat").addClass('hidden');
	$("#stepOneFreeSat").removeClass('hidden');
	$("#freeSat").removeClass('hidden');
}

/**/
function genSettings(){
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 showAltProg = false;
 programmChoices = false;
 synopsis = false;
 recordTimeBased = false;
 rtv = false;
 showSignalSettingsVAR = false;
 showSoundAndSubtitlesVar = false;
 showVideoSettingsVAR = false;
    $("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#miniEpgChoices").addClass('hidden');
	$("#lpchoicespanel").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#genSettings").removeClass('hidden');
}

function showLangSettings(){
	$("#progrView").addClass('hidden');
	$("#powerSaveOptions").addClass('hidden');
	$("#recSettings").addClass('hidden');
	$("#langSettings").removeClass('hidden');
}

function showProgrView(){
	$("#langSettings").addClass('hidden');
	$("#powerSaveOptions").addClass('hidden');
	$("#recSettings").addClass('hidden');
	$("#progrView").removeClass('hidden');
}

function recSettings(){
	$("#langSettings").addClass('hidden');
	$("#progrView").addClass('hidden');
	$("#powerSaveOptions").addClass('hidden');
	$("#recSettings").removeClass('hidden');
}

function showPowerSaveOptions(){
	$("#langSettings").addClass('hidden');
	$("#progrView").addClass('hidden');
	$("#recSettings").addClass('hidden');
	$("#powerSaveOptions").removeClass('hidden');
}
/**/
function showSoundAndSubtitles(){
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 showAltProg = false;
 programmChoices = false;
 synopsis = false;
 recordTimeBased = false;
 rtv = false;
 showSignalSettingsVAR = false;
 showSoundAndSubtitlesVar = true;
 showVideoSettingsVAR = false;
    $("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#miniEpgChoices").addClass('hidden');
	$("#lpchoicespanel").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#soundAndSubtitles").removeClass('hidden');
}

function showSubSettings(){
	$("#soundSettings").addClass('hidden');
	$("#soundType").addClass('hidden');
	$("#soundDelay").addClass('hidden');
	$("#subSettings").removeClass('hidden');
}

function showSoundSettings(){
	$("#soundType").addClass('hidden');
	$("#soundDelay").addClass('hidden');
	$("#subSettings").addClass('hidden');
	$("#soundSettings").removeClass('hidden');
}

function showSoundType(){
	$("#soundSettings").addClass('hidden');
	$("#subSettings").addClass('hidden');
	$("#soundDelay").addClass('hidden');
	$("#soundType").removeClass('hidden');
}

function showSoundDelay(){
	$("#soundSettings").addClass('hidden');
	$("#subSettings").addClass('hidden');
	$("#soundType").addClass('hidden');
	$("#soundDelay").removeClass('hidden');
}
/**/
function showVideoSettings(){
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 showAltProg = false;
 programmChoices = false;
 synopsis = false;
 recordTimeBased = false;
 rtv = false;
 showSignalSettingsVAR = false;
 showSoundAndSubtitlesVar = true;
 showVideoSettingsVAR = true;
    $("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#miniEpgChoices").addClass('hidden');
	$("#lpchoicespanel").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#videoSettings").removeClass('hidden');
}

function showResolutionAnalysis(){
	$("#scartSettings").addClass('hidden');
	$("#screenSettings").addClass('hidden');
	$("#resolutionAnalysis").removeClass('hidden');
}

function showScreenSettings(){
	$("#resolutionAnalysis").addClass('hidden');
	$("#scartSettings").addClass('hidden');
	$("#screenSettings").removeClass('hidden');
}

function showScartSettings(){
	$("#resolutionAnalysis").addClass('hidden');
	$("#screenSettings").addClass('hidden');
	$("#scartSettings").removeClass('hidden');
}

/**/
function systema(){
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 showAltProg = false;
 programmChoices = false;
 synopsis = false;
 recordTimeBased = false;
 rtv = false;
 showSignalSettingsVAR = false;
 showSoundAndSubtitlesVar = false;
    $("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#miniEpgChoices").addClass('hidden');
	$("#lpchoicespanel").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#recSettings").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#systema").removeClass('hidden');
}

// function changePage() {
	// if ($("#pageOne").hasClass("hidden")) {
		// $("#pageOne").removeClass("hidden");
		// $("#pageTwo").addClass("hidden");
	// } else {
		// $("#pageTwo").removeClass("hidden");
		// $("#pageOne").addClass("hidden");
	// }
// }

function showPageOne() {
 if (!$("#systemInfo").hasClass("hidden")) {
	$("#pageOne").removeClass("hidden");
	$("#pageTwo").addClass("hidden");
	var oneOfTwo = 1;
	document.getElementById("oneOfTwo").innerHTML = oneOfTwo;
		if ((document.getElementById("pvrMode").checked) || (document.getElementById("extHDDmode").checked)){
		var infostring = "Διαθέσιμος";
		document.getElementById("pvrINFOstatus").innerHTML = infostring;
		var infostring2 = "90%";
		document.getElementById("remainingPVR").innerHTML = infostring2;
	} else {
		iteration =1;
	}
 }
}
function showPageTwo() {
if (!$("#systemInfo").hasClass("hidden")){
	$("#pageTwo").removeClass("hidden");
    $("#pageOne").addClass("hidden");
	var oneOfTwo = 2;
	document.getElementById("oneOfTwo").innerHTML = oneOfTwo;
	}
}

function showSystemInfo(){
	$("#checkSignal").addClass('hidden');
	$("#networkStatus").addClass('hidden');
	$("#systemInfo").removeClass('hidden');
		if ((document.getElementById("pvrMode").checked) || (document.getElementById("extHDDmode").checked)){
		var infostring = "Διαθέσιμος";
		document.getElementById("pvrINFOstatus").innerHTML = infostring;
		var infostring2 = "90%";
		document.getElementById("remainingPVR").innerHTML = infostring2;
	} else {
		iteration =1;
	}
}

function checkSignal(){
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 showAltProg = false;
 programmChoices = false;
 synopsis = false;
 recordTimeBased = false;
 rtv = false;
 showSignalSettingsVAR = false;
 showSoundAndSubtitlesVar = false;
    $("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#miniEpgChoices").addClass('hidden');
	$("#lpchoicespanel").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#recSettings").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#systemInfo").addClass('hidden');
	$("#networkStatus").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#systema").removeClass('hidden');
	$("#checkSignal").removeClass('hidden');
	$("#checkSignal").addClass('pullCenter');
}

function showNetworkStatus(){
	$("#systemInfo").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#networkStatus").removeClass('hidden');
}
/**/

function showRestoreDIV(){
	pinVariable = 3;
	showpinForRestore();
}

function showpinForRestore() {
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 showAltProg = false;
 programmChoices = false;
 synopsis = false;
 recordTimeBased = false;
 rtv = false;
 showSignalSettingsVAR = false;
 showSoundAndSubtitlesVar = false;
    $("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#miniEpgChoices").addClass('hidden');
	$("#lpchoicespanel").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#recSettings").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#showPin").removeClass('hidden');
}

function showRestore() {
switch (pinVariable) { 
	case 1: 
		$("#showPin").addClass('hidden');
		$("#userPriviledges").removeClass('hidden');
		break;
	case 2: 
		$("#showPin").addClass('hidden');
		$("#userManagement").removeClass('hidden');
		break;
	case 3: 
			$("#showPin").addClass('hidden');
			$("#restore").removeClass('hidden');
			$("#factoryReset").addClass('hidden');
			if (document.getElementById("noHDDmode").checked === true) {
				$("#nohddAvailable").removeClass('hidden');
			} else {
				$("#hddAvailable").removeClass('hidden');
			}
		break;		
	case 4: 
		$("#showPin").addClass('hidden');
		$("#rentalHistory").removeClass('hidden');
		break;
	default:
		alert('Nobody Wins!');
}
}

function showFormat(){
	$("#format").removeClass('hidden');
	if (document.getElementById("noHDDmode").checked === true) {
		$("#nohddAvailable").removeClass('hidden');
		$("#hddAvailable").addClass('hidden');
		$("#confFormat").addClass('hidden');
	} else {
		$("#nohddAvailable").addClass('hidden');
		$("#hddAvailable").removeClass('hidden');
		$("#confFormat").addClass('hidden');
		}
	$("#factoryReset").addClass('hidden');	
}

function cancelRestore(){
	$("#showPin").addClass('hidden');	
}

function showFactoryReset() {
	$("#factoryReset").removeClass('hidden');
	$("#confRestore").removeClass('hidden');
	$("#format").addClass('hidden');
}

function formatDialog() {
	$("#hddAvailable").addClass('hidden');
	$("#confFormat").removeClass('hidden');
}

function okFormat(){
	   var msgstring = "Εγινε διαμόρφωση σκληρού δίσκου";
		document.getElementById("agentMsg").innerHTML = msgstring;
		$("#confFormat").addClass('hidden');		
}

function cancelFormat(){
		$("#confFormat").addClass('hidden');		
}

function okRestore() {
	var msgstring = "Έγινε επαναφορά στις εργοστασιακές ρυθμίσεις";
		document.getElementById("agentMsg").innerHTML = msgstring;
		$("#confFormat").addClass('hidden');
		$("#restore").addClass('hidden');
}

function cancelfactoryReset(){
		$("#factoryReset").addClass('hidden');		
}
/**/
function showReboot() {
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 showAltProg = false;
 programmChoices = false;
 synopsis = false;
 recordTimeBased = false;
 rtv = false;
 showSignalSettingsVAR = false;
 showSoundAndSubtitlesVar = false;
    $("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#miniEpgChoices").addClass('hidden');
	$("#lpchoicespanel").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#recSettings").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#reboot").removeClass('hidden');
}

function rebootOK() {
		var msgstring = "Έγινε επανεκκίνηση του αποκωδικοποιητή.";
		document.getElementById("agentMsg").innerHTML = msgstring;
		$("#reboot").addClass('hidden');
}

function rebootCancel() {
		$("#reboot").addClass('hidden');
}

/**/
function showUserPriviledges(){
	pinVariable = 1;
	showpinForRestore();
}

function showSubMenuUP() {
	var msgstring = "<h4>Maria</h4>";
	document.getElementById("cpUser").innerHTML = msgstring;
	$("#isAdmin").removeClass('hidden');
	$("#uPSubMenu").removeClass('hidden');
}
function showSubMenuUP2() {
	var msgstring = "<h4>OteTvUser</h4>";
	document.getElementById("cpUser").innerHTML = msgstring;
	$("#isAdmin").addClass('hidden');
	$("#uPSubMenu").removeClass('hidden');
}

function showHybridChangePin(){
	$("#rentalLimit").addClass('hidden');
	$("#hybridMovies").addClass('hidden');
	$("#hybridChannels").addClass('hidden');
	$("#hybridParentalControl").addClass('hidden');
	$("#hybridChangePin").removeClass('hidden');
}

function showHybridParentalControl(){
	$("#rentalLimit").addClass('hidden');
	$("#hybridMovies").addClass('hidden');
	$("#hybridChannels").addClass('hidden');
	$("#hybridChangePin").addClass('hidden');
	$("#hybridParentalControl").removeClass('hidden');
}

function showHybridChannels(){
	$("#rentalLimit").addClass('hidden');
	$("#hybridMovies").addClass('hidden');
	$("#hybridChangePin").addClass('hidden');
	$("#hybridParentalControl").addClass('hidden');
	$("#hybridChannels").removeClass('hidden');
}

function showHybridMovies(){
	$("#rentalLimit").addClass('hidden');
	$("#hybridChangePin").addClass('hidden');
	$("#hybridChannels").addClass('hidden');
	$("#hybridParentalControl").addClass('hidden');
	$("#hybridMovies").removeClass('hidden');
}

function showRentalLimit(){
	$("#hybridChangePin").addClass('hidden');
	$("#hybridMovies").addClass('hidden');
	$("#hybridChannels").addClass('hidden');
	$("#hybridParentalControl").addClass('hidden');
	$("#rentalLimit").removeClass('hidden');
}

function rombos() {
    document.getElementById("rombos").checked = true;
	document.getElementById("circle").checked = false;
	document.getElementById("triangle").checked = false;
	document.getElementById("square").checked = false;
	document.getElementById("over18").checked = false;
}

function circle() {
    document.getElementById("rombos").checked = true;
	document.getElementById("circle").checked = true;
	document.getElementById("triangle").checked = false;
	document.getElementById("square").checked = false;
	document.getElementById("over18").checked = false;
}

function triangle() {
    document.getElementById("rombos").checked = true;
	document.getElementById("circle").checked = true;
	document.getElementById("triangle").checked = true;
	document.getElementById("square").checked = false;
	document.getElementById("over18").checked = false;
}

function square() {
    document.getElementById("rombos").checked = true;
	document.getElementById("circle").checked = true;
	document.getElementById("triangle").checked = true;
	document.getElementById("square").checked = true;
	document.getElementById("over18").checked = false;
}

function over18() {
    document.getElementById("rombos").checked = true;
	document.getElementById("circle").checked = true;
	document.getElementById("triangle").checked = true;
	document.getElementById("square").checked = true;
	document.getElementById("over18").checked = true;
}

/**/
function showUserManagement(){
	pinVariable = 2;
	showpinForRestore();
}

function showChangeUserCredentials(){
	$("#addRemoveUser").addClass('hidden');
	$("#fbTwitter").addClass('hidden');
	$("#changeUser").addClass('hidden');
	$("#addUser").addClass('hidden');
	$("#deleteUser").addClass('hidden');
	$("#fbTwitterEmail").addClass('hidden');
	$("#changeUserCredentials").removeClass('hidden');
}

function showAddRemoveUser(){
	$("#changeUserCredentials").addClass('hidden');
	$("#fbTwitter").addClass('hidden');
	$("#changeUser").addClass('hidden');
	$("#addUser").addClass('hidden');
	$("#deleteUser").addClass('hidden');
	$("#fbTwitterEmail").addClass('hidden');
	$("#addRemoveUser").removeClass('hidden');
}

function showDeleteUser() {
	$("#changeUserCredentials").addClass('hidden');
	$("#fbTwitter").addClass('hidden');
	$("#changeUser").addClass('hidden');
	$("#addUser").addClass('hidden');
	$("#addRemoveUser").addClass('hidden');
	$("#fbTwitterEmail").addClass('hidden');
	$("#deleteUser").removeClass('hidden');
}


function showFbTwitter(){
	$("#addRemoveUser").addClass('hidden');
	$("#changeUserCredentials").addClass('hidden');
	$("#changeUser").addClass('hidden');
	$("#addUser").addClass('hidden');
	$("#deleteUser").addClass('hidden');
	$("#fbTwitterEmail").addClass('hidden');
	$("#fbTwitter").removeClass('hidden');
}

function showChangeUser(){
	$("#addRemoveUser").addClass('hidden');
	$("#fbTwitter").addClass('hidden');
	$("#changeUserCredentials").addClass('hidden');
	$("#addUser").addClass('hidden');
	$("#deleteUser").addClass('hidden');
	$("#fbTwitterEmail").addClass('hidden');
	$("#changeUser").removeClass('hidden');
}

function showAddUser(){
	$("#addRemoveUser").addClass('hidden');
	$("#fbTwitter").addClass('hidden');
	$("#changeUserCredentials").addClass('hidden');
	$("#changeUser").addClass('hidden');
	$("#deleteUser").addClass('hidden');
	$("#fbTwitterEmail").addClass('hidden');
	$("#addUser").removeClass('hidden');
}

function addUserConfirm() {
		var msgstring = "Νέος Χρήστης Προστέθηκε";
		document.getElementById("agentMsg").innerHTML = msgstring;
		$("#addUser").addClass('hidden');
		$("#addRemoveUser").removeClass('hidden');
}

function cancelAddUser() {
		$("#addUser").addClass('hidden');
		$("#addRemoveUser").removeClass('hidden');
}

function deleteUserConfirm() {
		$("#deleteUser").addClass('hidden');
		$("#delUser").addClass('hidden');
		$("#addRemoveUser").removeClass('hidden');
}

function cancelDeleteUser() {
		$("#deleteUser").addClass('hidden');
		$("#addRemoveUser").removeClass('hidden');
}



function fbTwitterEmail() {
		$("#fbTwitter").addClass('hidden');
		$("#fbTwitterEmail").removeClass('hidden');
}

function fbConfirm() {
	var msgstring = "Η διαδικασία συνεχίζεται μέσω email που αποστέλλεται στην διεύθυνση που βάζει ο χρήστης.";
		document.getElementById("agentMsg").innerHTML = msgstring;
		$("#fbTwitterEmail").addClass('hidden');
		$("#fbTwitter").removeClass('hidden');
}

function fbCancel() {
		$("#fbTwitterEmail").addClass('hidden');
		$("#fbTwitter").removeClass('hidden');
}

function userEditChangeImg() {
	if ($("#editCredentialsIMG").attr('src') === "img/user1.jpg") {
	   $("#editCredentialsIMG").attr('src', 'img/user2.jpg');
	} else {
	   $("#editCredentialsIMG").attr('src', 'img/user1.jpg');
	}
	
	if ($("#editCredentialsIMG2").attr('src') === "img/user1.jpg") {
	   $("#editCredentialsIMG2").attr('src', 'img/user2.jpg');
	} else {
	   $("#editCredentialsIMG2").attr('src', 'img/user1.jpg');
	}
	
}

function changeUserConfirm() {
		var msgstring = "Ο αποκωδικοποιητής γυρνάει στην αρχική οθόνη με την επιλογή χρηστών.";
		document.getElementById("agentMsg").innerHTML = msgstring;
}
/**/
function showFavChannels() {
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 showAltProg = false;
 programmChoices = false;
 synopsis = false;
 recordTimeBased = false;
 rtv = false;
 showSignalSettingsVAR = false;
 showSoundAndSubtitlesVar = false;
 showVideoSettingsVAR = false;
    $("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#miniEpgChoices").addClass('hidden');
	$("#lpchoicespanel").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#favChannels").removeClass('hidden');
}

function showSearch() {
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 showAltProg = false;
 programmChoices = false;
 synopsis = false;
 recordTimeBased = false;
 rtv = false;
 showSignalSettingsVAR = false;
 showSoundAndSubtitlesVar = false;
 showVideoSettingsVAR = false;
    $("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#miniEpgChoices").addClass('hidden');
	$("#lpchoicespanel").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#search").removeClass('hidden');
}

function showMyRecordings() {
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 showAltProg = false;
 programmChoices = false;
 synopsis = false;
 recordTimeBased = false;
 rtv = false;
 showSignalSettingsVAR = false;
 showSoundAndSubtitlesVar = false;
 showVideoSettingsVAR = false;
    $("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#miniEpgChoices").addClass('hidden');
	$("#lpchoicespanel").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#myRecordings").removeClass('hidden');
}

function showMyDownloads() {
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 showAltProg = false;
 programmChoices = false;
 synopsis = false;
 recordTimeBased = false;
 rtv = false;
 showSignalSettingsVAR = false;
 showSoundAndSubtitlesVar = false;
 showVideoSettingsVAR = false;
    $("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#miniEpgChoices").addClass('hidden');
	$("#lpchoicespanel").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#myDownloads").removeClass('hidden');
}

/**/
function changeFavPosition() {
	var msgstring = "Επιλέγοντας ένα κανάλι με το πράσινο κουμπί μπορούμε να το μεταφέρουμε σε άλλη θέση.";
	document.getElementById("agentMsg").innerHTML = msgstring;
}

function saveChangesFav() {
	var msgstring = "Αφού επιλέξουμε με το πλήκτρο ΟΚ όλα τα κανάλια που θέλουμε για αγαπημένα απο όλες τις σελίδες, πατάμε το μπλέ κουμπί για αποθήκευση αλλαγών.";
	document.getElementById("agentMsg").innerHTML = msgstring;
	$("#favSaveBtn").addClass('hidden');
}

function showFavSaveBtn() {
	$("#favSaveBtn").removeClass('hidden');
}

function uncheckAll(){
if (checkALL){
		 $("input[type='checkbox']").prop('checked',false);
		 checkALL = false;
		var msgstring = "Επιλογή Όλων";
		document.getElementById("checkALLspan").innerHTML = msgstring;
		document.getElementById("checkALLspanFreeSat").innerHTML = msgstring;
		$("#freeSatSaveBtn").removeClass('hidden');
		$("#favSaveBtn").removeClass('hidden');
	 } else {
		checkALL = true;
		$("input[type='checkbox']").prop('checked',true);
		var msgstring = "Αποεπιλογή";
		document.getElementById("checkALLspan").innerHTML = msgstring;
		document.getElementById("checkALLspanFreeSat").innerHTML = msgstring;
		$("#freeSatSaveBtn").removeClass('hidden');
		$("#favSaveBtn").removeClass('hidden');
		}
}

/**/
function rightAddActive() {
if ($("#all").hasClass("active")) {
	$("#all").removeClass("active");
	$("#myRecs4").addClass("hidden");
	$("#fake1").removeClass("hidden");
	$("#simpleProg").addClass("active");
} else if ($("#simpleProg").hasClass("active")) {
	$("#simpleProg").removeClass("active");
	$("#myRecs1").addClass("hidden");
	$("#myRecs2").addClass("hidden");
	$("#myRecs3").addClass("hidden");
	$("#myRecs4").removeClass("hidden");
	$("#fake1").removeClass("hidden");
	$("#fake2").removeClass("hidden");
	$("#fake3").removeClass("hidden");
	$("#series").addClass("active");
} else if ($("#series").hasClass("active")) {
	$("#series").removeClass("active");
	$("#all").addClass("active");
	$("#myRecs1").removeClass("hidden");
	$("#myRecs2").removeClass("hidden");
	$("#myRecs3").removeClass("hidden");
	$("#myRecs4").removeClass("hidden");
	$("#fake2").addClass("hidden");
	$("#fake3").addClass("hidden");
}
}

function leftAddActive() {
if ($("#all").hasClass("active")) {
	$("#all").removeClass("active");
	$("#myRecs1").addClass("hidden");
	$("#myRecs2").addClass("hidden");
	$("#myRecs3").addClass("hidden");
	$("#myRecs4").removeClass("hidden");
	$("#fake1").removeClass("hidden");
	$("#fake2").removeClass("hidden");
	$("#fake3").removeClass("hidden");
	$("#series").addClass("active");
} else if ($("#simpleProg").hasClass("active")) {
	$("#simpleProg").removeClass("active");
	$("#myRecs1").removeClass("hidden");
	$("#myRecs2").removeClass("hidden");
	$("#myRecs3").removeClass("hidden");
	$("#myRecs4").removeClass("hidden");
	$("#fake2").addClass("hidden");
	$("#fake3").addClass("hidden");
	$("#all").addClass("active");
} else if ($("#series").hasClass("active")) {
	$("#series").removeClass("active");
	$("#simpleProg").addClass("active");
	$("#myRecs1").removeClass("hidden");
	$("#myRecs2").removeClass("hidden");
	$("#myRecs3").removeClass("hidden");
	$("#myRecs4").addClass("hidden");
	$("#fake2").addClass("hidden");
	$("#fake3").addClass("hidden");
}
}

var checker = false;
function hideALLCBchoices() {
if (checker){
	$("input[type='checkbox']").prop('checked',false);
	checker = false;
	var msgstring = "Επιλογή Όλων";
	document.getElementById("myRecsCheckALL").innerHTML = msgstring;
} else if ($("#boolSelect").hasClass("hidden")) {
	$( ".hidethis" ).removeClass("hidden");
	var msgstring = "Επιλογή Όλων";
	document.getElementById("myRecsCheckALL").innerHTML = msgstring;
} else if ($("#boolSelect").hasClass("hidden")=== false) {
	$("input[type='checkbox']").prop('checked',true);
	var msgstring = "Αποεπιλογή";
	document.getElementById("myRecsCheckALL").innerHTML = msgstring;
	checker = true;	
} else {
		iteration = 1;
	}
}

function recordDescription1() {
	var msgstring = "302 OTE Sport 2 HD <br>  Ποδόσφαιρο:Βαλένθια-Ράγιο...<br>13:30-15:30(120') <img src=\"img\\rombos.png\" height=30 width=30> <br><br><br><br><br><br><br><br><br> Σε εγγραφή:Απομένουν 64'<br>";
	document.getElementById("descriptionOfProg").innerHTML = msgstring;
}

function recordDescription2() {
	var msgstring = "208 FOX <br>  Elementary K3 E20<br>20:30-21:30(60') <img src=\"img\\circle.png\" height=30 width=30> <br><br><br><br><br><br><br><br><br><br>";
	document.getElementById("descriptionOfProg").innerHTML = msgstring;
}

function recordDescription3() {
	var msgstring = "306 OTE Cinema 4 HD <br> Mr.Robot K2 E3<br>23:00-00:00(60')<img src=\"img\\square.png\" height=30 width=30> <br><br><br><br><br><br><br><br><br><br>";
	document.getElementById("descriptionOfProg").innerHTML = msgstring;
}

function recordDescription4() {
	$("#allDiv").addClass("hidden");
	$("#insideSeries").removeClass("hidden");
}
/**/
function showMyOnDemand() {
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 showAltProg = false;
 programmChoices = false;
 synopsis = false;
 recordTimeBased = false;
 rtv = false;
 showSignalSettingsVAR = false;
 showSoundAndSubtitlesVar = false;
 showVideoSettingsVAR = false;
    $("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#miniEpgChoices").addClass('hidden');
	$("#lpchoicespanel").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#onDemandRent").addClass('hidden');
	$("#myOnDemand").removeClass('hidden');
}

function showCinemaOnDemand() {
 lpStop = false;
 livepauseconf = false;
 livepausechoices = false;
 miniepgconf= false;
 miniEpgChoices= false;
 gbutton= false;
 showProg = false;
 showAltProg = false;
 programmChoices = false;
 synopsis = false;
 recordTimeBased = false;
 rtv = false;
 showSignalSettingsVAR = false;
 showSoundAndSubtitlesVar = false;
 showVideoSettingsVAR = false;
    $("#recordp").addClass('hidden');
	$("#recordConfirm").addClass('hidden');
	$("#confirmMessageYes").addClass('hidden');
	$("#stopRecordmsg").addClass('hidden');
	$("#stopRec").addClass('hidden');
	$("#miniepg").addClass('hidden');
	$("#messages").addClass('hidden');
	$("#gbutton").addClass('hidden');
	$("#miniEpgChoices").addClass('hidden');
	$("#lpchoicespanel").addClass('hidden');
	$("#livepause").addClass('hidden');
	$("#checkSignal").addClass('hidden');
	$("#programm").addClass('hidden');
	$("#alternativeProgramm").addClass('hidden');
	$("#systema").addClass('hidden');
	$("#programmChoices").addClass('hidden');
	$("#chanList").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	$("#recordTimeBased").addClass('hidden');
	$("#synopsis").addClass('hidden');
	$("#replayTVProgramm").addClass('hidden');
	$("#signalSettings").addClass('hidden');
	$("#soundAndSubtitles").addClass('hidden');
	$("#videoSettings").addClass('hidden');
	$("#nohddAv").addClass('hidden');
	$("#restore").addClass('hidden');
	$("#showPin").addClass('hidden');
	$("#reboot").addClass('hidden');
	$("#genSettings").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#userPriviledges").addClass('hidden');
	$("#userManagement").addClass('hidden');
	$("#favChannels").addClass('hidden');
	$("#myRecordings").addClass('hidden');
	$("#myDownloads").addClass('hidden');
	$("#rentalHistory").addClass('hidden');
	$("#search").addClass('hidden');
	$("#myOnDemand").addClass('hidden');
	$("#onDemandRent").removeClass('hidden');
	
	$("#menuAdult").addClass('hidden');
	$("#menuCategoriesMAIN").addClass('hidden');
	$("#menuCategories").removeClass('hidden');
	$("#menuAlphabetically").addClass('hidden');
	$("#menuPremieres").removeClass('hidden');
	$("#altViewPremieres").addClass('hidden');
	$("#premieres").addClass('active');
	$("#categoriesInside").addClass('hidden');
	$("#menuCategoriesAltView").addClass('hidden');
	
	$("#mainmenuCategoriesInside").addClass('hidden');
	$("#alphaMenu").addClass('hidden');
	$("#mainmenuCod").removeClass('hidden');
	
	$("#vodButtonsCategories").addClass('hidden');
	$("#vodButtonsCatInside").addClass('hidden');
	$("#vodButtons").removeClass('hidden');
	
	$("#premieres").addClass("active");
	$("#premiersHD").removeClass("active");
	$("#catsCOD").removeClass("active");
	$("#alphabetically").removeClass("active");
	$("#adultsCOD").removeClass("active");

}

function showRentalHistory() {
pinVariable = 4;
showpinForRestore();
}
/**/
function hideALLCBchoicesDL(){
if (checker){
	$("input[type='checkbox']").prop('checked',false);
	$( ".hidethisIMG" ).addClass("hidden");
	checker = false;
	var msgstring = "Επιλογή Όλων";
	document.getElementById("myDLSCheckALL").innerHTML = msgstring;
} else if ($("#boolSelectDL").hasClass("hidden")) {
	$( ".hidethis" ).removeClass("hidden");
	var msgstring = "Επιλογή Όλων";
	document.getElementById("myDLSCheckALL").innerHTML = msgstring;
} else if ($("#boolSelectDL").hasClass("hidden")=== false) {
	$("input[type='checkbox']").prop('checked',true);
	var msgstring = "Αποεπιλογή";
	document.getElementById("myDLSCheckALL").innerHTML = msgstring;
	checker = true;	
} else {
		iteration = 1;
	}
}

function dlDescription1() {
	var msgstring = "Batman V Superman: H Αυγή Της Δικαιοσύνης <br><img src=\"img/bvsSu.jpg\" height=\"200\"><br><img src=\"img/triangle.png\"  height=\"20\" width=\"20\">Είδος: 	Περιπέτεια<br>Τιμή: 2,49&euro; <br>Διαθέσιμο έως: 14/12/2016<br>Κατάσταση Λήψης: 1%<br>";
	document.getElementById("descriptionOfDL").innerHTML = msgstring;
}

function dlDescription2() {
	var msgstring = "Spectre <br><img src=\"img/specter.jpg\" height=\"200\"><br><img src=\"img/triangle.png\"  height=\"20\" width=\"20\">Είδος: 	Περιπέτεια<br>Τιμή: 2,49&euro; <br>Διαθέσιμο έως: 15/08/2016<br>Κατάσταση Λήψης: Προγραμματισμένή<br>";
	document.getElementById("descriptionOfDL").innerHTML = msgstring;
}

function rightAddActiveDL() {
if ($("#allDownloads").hasClass("active")) {
	$("#allDownloads").removeClass("active");
	$("#codDownloads").addClass("active");
} else if ($("#codDownloads").hasClass("active")) {
	$("#codDownloads").removeClass("active");
	$("#allDivDL").addClass("hidden");
	$("#dlRTV").removeClass("hidden");
	$("#rtvDownloads").addClass("active");
} else if ($("#rtvDownloads").hasClass("active")) {
	$("#rtvDownloads").removeClass("active");
	$("#allDownloads").addClass("active");
	$("#allDivDL").removeClass("hidden");
	$("#dlRTV").addClass("hidden");
}
}

function leftAddActiveDL() {
if ($("#allDownloads").hasClass("active")) {
	$("#allDownloads").removeClass("active");
	$("#allDivDL").addClass("hidden");
	$("#dlRTV").removeClass("hidden");
	$("#rtvDownloads").addClass("active");
} else if ($("#codDownloads").hasClass("active")) {
	$("#codDownloads").removeClass("active");
	$("#allDownloads").addClass("active");
} else if ($("#rtvDownloads").hasClass("active")) {
	$("#rtvDownloads").removeClass("active");
	$("#codDownloads").addClass("active");
	$("#allDivDL").removeClass("hidden");
	$("#dlRTV").addClass("hidden");
}
}
/**/
function hideALLCBchoicesCOD() {
if (checker){
	$("input[type='checkbox']").prop('checked',false);
	checker = false;
	var msgstring = "Επιλογή Όλων";
	document.getElementById("myCODCheckALL").innerHTML = msgstring;
} else if ($("#boolSelectCOD1").hasClass("hidden")) {
	$( ".hidethis" ).removeClass("hidden");
	var msgstring = "Επιλογή Όλων";
	document.getElementById("myCODCheckALL").innerHTML = msgstring;
} else if ($("#boolSelectCOD1").hasClass("hidden")=== false) {
	$("input[type='checkbox']").prop('checked',true);
	var msgstring = "Αποεπιλογή";
	document.getElementById("myCODCheckALL").innerHTML = msgstring;
	checker = true;	
} else {
		iteration = 1;
	}
}

function leftAddActiveCOD() {
if ($("#pageHolders").hasClass("active")) {
	$("#pageHolders").removeClass("active");
	$("#mycodFavs").addClass("active");
	$("#codPageholdersDiv").addClass("hidden");
	$("#codFavoritesDIV").removeClass("hidden");
} else if ($("#mycodFavs").hasClass("active")) {
	$("#mycodFavs").removeClass("active");
	$("#codFavoritesDIV").addClass("hidden");
	$("#codPageholdersDiv").removeClass("hidden");
	$("#pageHolders").addClass("active");
} 
}

function rightAddActiveCOD() {
if ($("#pageHolders").hasClass("active")) {
	$("#pageHolders").removeClass("active");
	$("#mycodFavs").addClass("active");
	$("#codPageholdersDiv").addClass("hidden");
	$("#codFavoritesDIV").removeClass("hidden");
} else if ($("#mycodFavs").hasClass("active")) {
	$("#mycodFavs").removeClass("active");
	$("#codFavoritesDIV").addClass("hidden");
	$("#codPageholdersDiv").removeClass("hidden");
	$("#pageHolders").addClass("active");
} 
}

function descriptionOfCOD1() {
	var msgstring = "Batman V Superman: H Αυγή Της Δικαιοσύνης <br><img src=\"img/bvsSu.jpg\" height=\"200\"><br><img src=\"img/triangle.png\"  height=\"20\" width=\"20\">Είδος: 	Περιπέτεια<br>Τιμή: 2,49&euro;<br>";
	document.getElementById("descriptionOfCOD").innerHTML = msgstring;
	document.getElementById("descriptionOfCODFAV").innerHTML = msgstring;
}

function descriptionOfCOD2() {
	var msgstring = "Spectre <br><img src=\"img/specter.jpg\" height=\"200\"><br><img src=\"img/triangle.png\"  height=\"20\" width=\"20\">Είδος: 	Περιπέτεια<br>Τιμή: 2,49&euro;<br>";
	document.getElementById("descriptionOfCOD").innerHTML = msgstring;
	document.getElementById("descriptionOfCODFAV").innerHTML = msgstring;
}

function codRedButton() {
if ($("#pageHolders").hasClass("active") && (document.getElementById('boolSelectCOD1').checked) && (document.getElementById('boolSelectCOD2').checked)){
	var msgstring = "Θέλετε να διαγράψετε τους Σελιδοδείκτες;<br><button type=\"button\" class=\"btn btn-lg btn-default confirm pull-left buttonRec\" data-dismiss=\"modal\" data-toggle=\"modal\" onclick=\"confirmDeleteCOD()\" data-target=\"#codDeleteMSG\">Ναί</button><button type=\"button\" class=\"btn btn-lg btn-default confirm buttonRec\" data-dismiss=\"modal\">Όχι</button>";
	document.getElementById("deletionCOD").innerHTML = msgstring;
} else if ($("#pageHolders").hasClass("active")) {
	var msgstring = "Θέλετε να διαγράψετε τον Σελιδοδείκτη;<br><button type=\"button\" class=\"btn btn-lg btn-default confirm pull-left buttonRec\" data-dismiss=\"modal\" data-toggle=\"modal\" onclick=\"confirmDeleteCOD()\" data-target=\"#codDeleteMSG\">Ναί</button><button type=\"button\" class=\"btn btn-lg btn-default confirm buttonRec\" data-dismiss=\"modal\">Όχι</button>";
	document.getElementById("deletionCOD").innerHTML = msgstring;
} else if ($("#mycodFavs").hasClass("active") && (document.getElementById('boolSelectCOD1FAV').checked) && (document.getElementById('boolSelectCOD1FAV').checked)){
	var msgstring = "Θέλετε να αφαιρέσετε τις επιλεγμένες ταινίες απο τα αγαπημένα σας;<br><button type=\"button\" class=\"btn btn-lg btn-default confirm pull-left buttonRec\" data-dismiss=\"modal\" onclick=\"confirmDeleteCOD()\" data-toggle=\"modal\" data-target=\"#codDeleteMSG\">Ναί</button><button type=\"button\" class=\"btn btn-lg btn-default confirm buttonRec\" data-dismiss=\"modal\">Όχι</button>";
	document.getElementById("deletionCOD").innerHTML = msgstring;
} else if ($("#mycodFavs").hasClass("active")) {
	var msgstring = "Θέλετε να διαγράψετε την επιλεγμένη ταινία απο τα αγαπημένα σας;<br><button type=\"button\" class=\"btn btn-lg btn-default confirm pull-left buttonRec\" data-dismiss=\"modal\" onclick=\"confirmDeleteCOD()\" data-toggle=\"modal\" data-target=\"#codDeleteMSG\">Ναί</button><button type=\"button\" class=\"btn btn-lg btn-default confirm buttonRec\" data-dismiss=\"modal\">Όχι</button>";
	document.getElementById("deletionCOD").innerHTML = msgstring;
} 
}

function confirmDeleteCOD() {
if ($("#pageHolders").hasClass("active") && (document.getElementById('boolSelectCOD1').checked) && (document.getElementById('boolSelectCOD2').checked)){
	var msgstring2 = "Oι σελιδοδείκτες διαγράφηκαν<br>";
	document.getElementById("deleteMessageCOD").innerHTML = msgstring2;
	$("#myCOD1").addClass("hidden");
	$("#myCOD2").addClass("hidden");
	$("#fake1CODPage").removeClass("hidden");
	$("#fake2CODPage").removeClass("hidden");
} else if ($("#pageHolders").hasClass("active")) {
	var msgstring2 = "O σελιδοδείκτης διαγράφηκε<br>";
	document.getElementById("deleteMessageCOD").innerHTML = msgstring2;
	$("#myCOD1").addClass("hidden");
	$("#myCOD2").removeClass("hidden");
	$("#fake1CODPage").removeClass("hidden");
	$("#fake2CODPage").addClass("hidden");	
} else if ($("#mycodFavs").hasClass("active") && (document.getElementById('boolSelectCOD1FAV').checked) && (document.getElementById('boolSelectCOD1FAV').checked)){
	var msgstring2 = "Έχετε αφαιρέσει τις επιλεγμένες ταινίες από τα Αγαπημένα<br>";
	document.getElementById("deleteMessageCOD").innerHTML = msgstring2;
	$("#codFavs1").addClass("hidden");
	$("#codFavs2").addClass("hidden");
	$("#fake1CodFav").removeClass("hidden");
	$("#fake2CodFav").removeClass("hidden");		
} else if ($("#mycodFavs").hasClass("active")) {
	var msgstring2 = "Έχετε αφαιρέσει αυτή την ταινία από τα Αγαπημένα<br>";
	document.getElementById("deleteMessageCOD").innerHTML = msgstring2;
	$("#codFavs1").addClass("hidden");
	$("#codFavs2").removeClass("hidden");
	$("#fake1CodFav").removeClass("hidden");
	$("#fake2CodFav").addClass("hidden");
} 
}

function okCOD() {
if ($("#pageHolders").hasClass("active")) {
	var msgstring = "Πατώντας το πλήκτρο ΟΚ αρχίζει η προβολή της επιλεγμένης ταινίας απο το σήμειο που είχε διακοπή την προηγούμενη φορά. Πρώτα πρέπει να γίνει ο απαιτούμενος έλενγχος ταχύτητας γραμμής adsl και μετά βγαίνει το πλαίσιο ενοικίασης/προβολής ή λήψης. Ο κάθε Χρήστης έχει πρόσβαση μόνο στις δικές του αγαπημένες ταινίες καθώς και στους δικούς του Σελιδοδείκτες.";
	document.getElementById("agentMsg").innerHTML = msgstring;
} else if ($("#mycodFavs").hasClass("active")) {
	var msgstring = "Πατώντας το πλήκτρο ΟΚ αρχίζει η προβολή της επιλεγμένης ταινίας. Ο κάθε Χρήστης έχει πρόσβαση μόνο στις δικές του αγαπημένες ταινίες καθώς και στους δικούς του Σελιδοδείκτες.";
	document.getElementById("agentMsg").innerHTML = msgstring;
} 
}

function downloadACOD() {
if ($("#codDLGreen2").hasClass("hidden")=== false) {
var msgstring = "Πατώντας το πλήκτρο ΟΚ αρχίζει η λήψη της επιλεγμένης ταινίας εφόσον έχει γίνει ενοικίαση.";
	document.getElementById("agentMsg").innerHTML = msgstring;
} else if ($("#downloadButton").hasClass("disabled")) {
var msgstring = "Πρώτα πρέπει να γίνει ενοικίαση ταινίας και μετά λήψη";
	document.getElementById("agentMsg").innerHTML = msgstring;
} else {
var msgstring = "Πατώντας το πλήκτρο ΟΚ αρχίζει η λήψη της επιλεγμένης ταινίας εφόσον έχει γίνει ενοικίαση.";
	document.getElementById("agentMsg").innerHTML = msgstring;
}
}

function rentACOD() {
var msgstring = "<p>Γίνεται έλενγχος της adsl γραμμής και μετά ζητάει το pin του χρήστη, αφού το βάλει γίνεται η ενοικίαση, ενεργοποιείται η προβολή και λήψη(σκληρός δίσκος διαθέσιμος).</p><p>Μετά την εισαγωγή του PIN έχετε τη δυνατότητα να ορίσετε εάν η συγκεκριμένη λήψη θα είναι προσβάσιμη από όλους τους χρήστες που θα συνδέονται στον συγκεκριμένο αποκωδικοποιητή, επιλέγοντας το πεδίο «Κοινή Χρήση».</p>";
document.getElementById("agentMsg").innerHTML = msgstring;
	$("#codRentGreen").addClass("hidden");
	$("#codWatchGreen").removeClass("hidden");
	$("#codDLGreen").removeClass("hidden");
}

function rentACOD2() {
var msgstring = "<p>Γίνεται έλενγχος της adsl γραμμής και μετά ζητάει το pin του χρήστη, αφού το βάλει γίνεται η ενοικίαση, ενεργοποιείται η προβολή και λήψη(σκληρός δίσκος διαθέσιμος).</p><p>Μετά την εισαγωγή του PIN έχετε τη δυνατότητα να ορίσετε εάν η συγκεκριμένη λήψη θα είναι προσβάσιμη από όλους τους χρήστες που θα συνδέονται στον συγκεκριμένο αποκωδικοποιητή, επιλέγοντας το πεδίο «Κοινή Χρήση».</p>";
document.getElementById("agentMsg").innerHTML = msgstring;
	$("#codRentGreen2").addClass("hidden");
	$("#codWatchGreen2").removeClass("hidden");
	$("#codDLGreen2").removeClass("hidden");
}

function trailerCOD() {
var msgstring = "<p>Πατώντας αυτή την επιλογή ο χρήστης μπορεί να δει το τρέιλερ της ταινίας.</p> <p>ΠΡΟΣΟΧΗ-> Δεν έχουν όλες οι ταινίες διαθέσιμο ΤΡΕΪΛΕΡ και όσες δεν έχουν τα συγκεκριμένα κουμπιά/επιλογές δεν είναι ορατά.</p>";
document.getElementById("agentMsg").innerHTML = msgstring;
}
/**/
function leftAddActiveHistory() {
if ($("#onDemandHistory").hasClass("active")) {
	$("#onDemandHistory").removeClass("active");
	$("#moviePackage").addClass("active");
} else if ($("#moviePackage").hasClass("active")) {
	$("#moviePackage").removeClass("active");
	$("#onDemandHistory").addClass("active");
} 
}

function rightAddActiveHistory() {
if ($("#onDemandHistory").hasClass("active")) {
	$("#onDemandHistory").removeClass("active");
	$("#moviePackage").addClass("active");
} else if ($("#moviePackage").hasClass("active")) {
	$("#moviePackage").removeClass("active");
	$("#onDemandHistory").addClass("active");
} 
}

function changeMonthHistory() {
	var myselect = document.getElementById("historyCB");
	var selectedValue = myselect.options[myselect.selectedIndex].value;
	if (selectedValue===1){
	$("#myCOD1History").removeClass("hidden");
	$("#myCOD2History").removeClass("hidden");
	$("#fake1HistoryPage").addClass("hidden");
	$("#fake2HistoryPage").addClass("hidden");
	} else {
	$("#myCOD1History").addClass("hidden");
	$("#myCOD2History").addClass("hidden");
	$("#fake1HistoryPage").removeClass("hidden");
	$("#fake2HistoryPage").removeClass("hidden");
	}
}
/**/
function descriptionOfAltViewPremieres1() {
	var msgstring = "Batman V Superman: H Αυγή Της Δικαιοσύνης <br><img src=\"img/bvsSu.jpg\" height=\"200\"><br><img src=\"img/triangle.png\"  height=\"20\" width=\"20\">Είδος: 	Περιπέτεια<br>Τιμή: 2,49&euro; <br>Διαθέσιμο έως: 14/12/2016";
	document.getElementById("descriptionOfAltViewPremieres").innerHTML = msgstring;
	batmanRight = true;
}

function descriptionOfAltViewPremieres2() {
	var msgstring = "Spectre <br><img src=\"img/specter.jpg\" height=\"200\"><br><img src=\"img/triangle.png\"  height=\"20\" width=\"20\">Είδος: 	Περιπέτεια<br>Τιμή: 2,49&euro; <br>Διαθέσιμο έως: 15/08/2016";
	document.getElementById("descriptionOfAltViewPremieres").innerHTML = msgstring;
	spectreRight = true;
}

function descriptionOfAltViewPremieres3() {
	var msgstring = "10 Cloverfield Lane <br><img src=\"img/clover.jpg\" height=\"200\"><br><img src=\"img/triangle.png\"  height=\"20\" width=\"20\">Είδος: 	Κοινωνική<br>Τιμή: 2,49&euro; <br>Διαθέσιμο έως: 6/11/2016 ";
	document.getElementById("descriptionOfAltViewPremieres").innerHTML = msgstring;
	cloverRight = true;
}

function descriptionOfAltViewPremieres4() {
	var msgstring = "Kung Fu Panda 3 <br><img src=\"img/panda.jpg\" height=\"200\"><br><img src=\"img/triangle.png\"  height=\"20\" width=\"20\">Είδος: 		Οικογενειακή<br>Τιμή: 2,49&euro; <br>Διαθέσιμο έως: 31/12/2016";
	document.getElementById("descriptionOfAltViewPremieres").innerHTML = msgstring;
	pandaRight = true;
}

function descriptionOfAltViewPremieres5() {
	var msgstring = "Zootopia <br><img src=\"img/zootopia.jpg\" height=\"200\"><br><img src=\"img/triangle.png\"  height=\"20\" width=\"20\">Είδος: 		Οικογενειακή<br>Τιμή: 2,49&euro; <br>Διαθέσιμο έως: 3/10/2016";
	document.getElementById("descriptionOfAltViewPremieres").innerHTML = msgstring;
	zootopiaRight = true;
}

function changeViewCod() {
if ($("#mainViewPremieres").hasClass("hidden")=== false) {
	$("#mainViewPremieres").addClass("hidden");
	$("#menuCategoriesMainView").addClass("hidden");
	$("#menuCategoriesAltView").removeClass("hidden");
	$("#altViewPremieres").removeClass("hidden");
	clearClassesCats();
} else if ($("#altViewPremieres").hasClass("hidden")=== false) {
	$("#altViewPremieres").addClass("hidden");
	$("#menuCategoriesAltView").addClass("hidden");
	$("#menuCategoriesMainView").removeClass("hidden");
	$("#mainViewPremieres").removeClass("hidden");
	clearClassesCats();
} 
}

function clearClassesCats() {
	$("#codALTC1").removeClass("growProposeThis");
	$("#codALTC2").removeClass("growProposeThis");
	$("#codALTC3").removeClass("growProposeThis");
	$("#codALTC4").removeClass("growProposeThis");
	$("#codALTC5").removeClass("growProposeThis");
	$("#codALTC6").removeClass("growProposeThis");
	batmanRight = false;
	spectreRight = false;
	cloverRight = false;
	pandaRight = false;
	zootopiaRight = false;	
}

var moviez = ["#batman","#specter","#clover","#panda","#zootopia"];
var iterate = 0;
var triggerRight = false;
var triggerLeft = false;

function iterateRIGHT() {
triggerRight = true;
if (iterate === 0) {
	var smov = moviez[iterate];
	var smov2 = moviez[moviez.length-1];
	$(smov).addClass("growTHIS");
	$(smov2).removeClass("growTHIS");
	if (triggerLeft) {
			iterate++;
			iterate++;
			triggerLeft = false;
		} else {
			iterate++;
		}
} else if (iterate > (moviez.length - 1)) {
		iterate = 0;
		var smov = moviez[iterate];
		var smov2 = moviez[moviez.length - 1];
		$(smov).addClass("growTHIS");
		$(smov2).removeClass("growTHIS");
		if (triggerLeft) {
			iterate++;
			iterate++;
			triggerLeft = false;
		} else {
			iterate++;
		}
} else {
		var smov = moviez[iterate];
		var smov2 = moviez[iterate - 1];
		$(smov).addClass("growTHIS");
		$(smov2).removeClass("growTHIS");
		if (triggerLeft) {
			iterate++;
			iterate++;
			triggerLeft = false;
		} else {
			iterate++;
		}
}
}

function iterateLEFT() {
triggerLeft = true;
if (triggerRight) {
	iterate--;
	iterate--;
	triggerRight = false;
} else {
	iterate--;
}
if (iterate < 0){
	iterate = moviez.length - 1;
	var smov = moviez[iterate];
	var smov2 = moviez[0];
	$(smov).addClass("growTHIS");
	$(smov2).removeClass("growTHIS");
}
var smov = moviez[iterate];
var smov2 = moviez[iterate + 1];
	$(smov).addClass("growTHIS");
	$(smov2).removeClass("growTHIS");
}

function rightAddActiveCODRENT() {
if ($("#premieres").hasClass("active")) {
	$("#premieres").removeClass("active");
	$("#premiersHD").addClass("active");
} else if ($("#premiersHD").hasClass("active")) {
	$("#premiersHD").removeClass("active");
	$("#catsCOD").addClass("active");
	$("#menuPremieres").addClass("hidden");
	$("#menuCategoriesMAIN").removeClass("hidden");
	$("#menuCategories").removeClass("hidden");
	$("#menuAlphabetically").addClass("hidden");
	$("#vodButtonsCategories").removeClass("hidden");
	$("#vodButtons").addClass("hidden");
} else if ($("#catsCOD").hasClass("active")) {
	$("#catsCOD").removeClass("active");
	$("#alphabetically").addClass("active");
	$("#menuAlphabetically").removeClass("hidden");
	$("#menuCategories").addClass("hidden");
} else if ($("#alphabetically").hasClass("active")) {
	$("#alphabetically").removeClass("active");
	$("#adultsCOD").addClass("active");
	$("#menuCategoriesMAIN").addClass("hidden");
	$("#vodButtonsCategories").addClass("hidden");
	$("#menuAdult").removeClass("hidden");
} else if ($("#adultsCOD").hasClass("active")) {
	$("#adultsCOD").removeClass("active");
	$("#premieres").addClass("active");
	$("#menuAdult").addClass("hidden");
	$("#menuPremieres").removeClass("hidden");
	$("#vodButtonsCategories").addClass("hidden");
	$("#vodButtons").removeClass("hidden");
}
}

function leftAddActiveCODRENT() {
if ($("#premieres").hasClass("active")) {
	$("#premieres").removeClass("active");
	$("#adultsCOD").addClass("active");
	$("#menuPremieres").addClass("hidden");
	$("#vodButtons").addClass("hidden");
	$("#menuAdult").removeClass("hidden");
} else if ($("#adultsCOD").hasClass("active")) {
	$("#adultsCOD").removeClass("active");
	$("#alphabetically").addClass("active");
	$("#menuAdult").addClass("hidden");
	$("#menuCategoriesMAIN").removeClass("hidden");
	$("#menuCategories").addClass("hidden");
	$("#menuAlphabetically").removeClass("hidden");
	$("#vodButtonsCategories").removeClass("hidden");
	$("#vodButtons").addClass("hidden");
} else if ($("#alphabetically").hasClass("active")) {
	$("#alphabetically").removeClass("active");
	$("#catsCOD").addClass("active");
	$("#menuAlphabetically").addClass("hidden");
	$("#menuCategories").removeClass("hidden");
	$("#vodButtonsCategories").removeClass("hidden");
} else if ($("#catsCOD").hasClass("active")) {
	$("#catsCOD").removeClass("active");
	$("#premiersHD").addClass("active");
	$("#menuCategoriesMAIN").addClass("hidden");
	$("#menuPremieres").removeClass("hidden");
	$("#vodButtonsCategories").addClass("hidden");
	$("#vodButtons").removeClass("hidden");
} else if ($("#premiersHD").hasClass("active")) {
	$("#premiersHD").removeClass("active");
	$("#premieres").addClass("active");
}
}

function leftAddActiveCategories() {
if ($("#catAdventures").hasClass("active")) {
	$("#catAdventures").removeClass("active");
	$("#theMenu").addClass("hidden");
	$("#extraMenu").removeClass("hidden");
	$("#catClassic").addClass("active");
} else if ($("#catClassic").hasClass("active")) {
	$("#catClassic").removeClass("active");
	$("#catΤhriller").addClass("active");
} else if ($("#catΤhriller").hasClass("active")) {
	$("#catΤhriller").removeClass("active");
	$("#theMenu").removeClass("hidden");
	$("#extraMenu").addClass("hidden");
	$("#catFamily").addClass("active");
} else if ($("#catFamily").hasClass("active")) {
	$("#catFamily").removeClass("active");
	$("#catKids").addClass("active");
} else if ($("#catKids").hasClass("active")) {
	$("#catKids").removeClass("active");
	$("#catSocial").addClass("active");
} else if ($("#catSocial").hasClass("active")) {
	$("#catSocial").removeClass("active");
	$("#catComedies").addClass("active");
} else if ($("#catComedies").hasClass("active")) {
	$("#catComedies").removeClass("active");
	$("#catAdventures").addClass("active");
}
}

function rightAddActiveCategories() {
if ($("#catAdventures").hasClass("active")) {
	$("#catAdventures").removeClass("active");
	$("#catComedies").addClass("active");
} else if ($("#catComedies").hasClass("active")) {
	$("#catComedies").removeClass("active");
	$("#catSocial").addClass("active");
} else if ($("#catSocial").hasClass("active")) {
	$("#catSocial").removeClass("active");
	$("#catKids").addClass("active");
} else if ($("#catKids").hasClass("active")) {
	$("#catKids").removeClass("active");
	$("#catFamily").addClass("active");
} else if ($("#catFamily").hasClass("active")) {
	$("#catFamily").removeClass("active");
	$("#theMenu").addClass("hidden");
	$("#extraMenu").removeClass("hidden");
	$("#catΤhriller").addClass("active");
} else if ($("#catΤhriller").hasClass("active")) {
	$("#catΤhriller").removeClass("active");
	$("#catClassic").addClass("active");
} else if ($("#catClassic").hasClass("active")) {
	$("#catClassic").removeClass("active");
	$("#theMenu").removeClass("hidden");
	$("#extraMenu").addClass("hidden");
	$("#catAdventures").addClass("active");
}
}

function leftAddActiveAlpha() {
if ($("#zeroTo9").hasClass("active")) {
	$("#zeroTo9").removeClass("active");
	$("#tToOmega").addClass("active");
} else if ($("#tToOmega").hasClass("active")) {
	$("#tToOmega").removeClass("active");
	$("#nToS").addClass("active");
} else if ($("#nToS").hasClass("active")) {
	$("#nToS").removeClass("active");
	$("#hToM").addClass("active");
} else if ($("#hToM").hasClass("active")) {
	$("#hToM").removeClass("active");
	$("#aTOz").addClass("active");
} else if ($("#aTOz").hasClass("active")) {
	$("#aTOz").removeClass("active");
	$("#zeroTo9").addClass("active");
}
}

function rightAddActiveAlpha() {
if ($("#zeroTo9").hasClass("active")) {
	$("#zeroTo9").removeClass("active");
	$("#aTOz").addClass("active");
} else if ($("#aTOz").hasClass("active")) {
	$("#aTOz").removeClass("active");
	$("#hToM").addClass("active");
} else if ($("#hToM").hasClass("active")) {
	$("#hToM").removeClass("active");
	$("#nToS").addClass("active");
} else if ($("#nToS").hasClass("active")) {
	$("#nToS").removeClass("active");
	$("#tToOmega").addClass("active");
} else if ($("#tToOmega").hasClass("active")) {
	$("#tToOmega").removeClass("active");
	$("#zeroTo9").addClass("active");
}
}

function categoriesInside() {
if ($("#catsCOD").hasClass("active")) {
	$("#mainmenuCod").addClass("hidden");
	$("#menuCategoriesMAIN").addClass("hidden");
	$("#vodButtonsCategories").addClass("hidden");
	$("#mainmenuCategoriesInside").removeClass("hidden");
	$("#categoriesInside").removeClass("hidden");
	$("#vodButtonsCatInside").removeClass("hidden");
} else if ($("#alphabetically").hasClass("active")) {
	$("#mainmenuCod").addClass("hidden");
	$("#menuCategoriesMAIN").addClass("hidden");
	$("#vodButtonsCategories").addClass("hidden");
	$("#alphaMenu").removeClass("hidden");
	$("#categoriesInside").removeClass("hidden");
	$("#vodButtonsCatInside").removeClass("hidden");
}
}

function alphaBeticallyInside() {
	$("#mainmenuCod").addClass("hidden");
	$("#menuCategoriesMAIN").addClass("hidden");
	$("#vodButtonsCategories").addClass("hidden");
	$("#alphaMenu").removeClass("hidden");
	$("#categoriesInside").removeClass("hidden");
	$("#vodButtonsCatInside").removeClass("hidden");
}

var batmanRight = false;
var spectreRight = false;
var cloverRight = false;
var pandaRight = false;
var zootopiaRight = false;

function batmanRightSide() {
batmanRight = true;
spectreRight = false;
cloverRight = false;
pandaRight = false;
zootopiaRight = false;
var msgstring = "Batman V Superman: H Αυγή Της Δικαιοσύνης<br>\n<img class=\"imagesbigcat growPropose\" src=\"img/bvsSu.jpg\"><br>\n<img class=\"\" src=\"img/triangle.png\" height=\"20\" width=\"20\"> Είδος: Περιπέτεια<br>\nΤιμή: 2,49 \&euro;<br>\nΔιάρκεια ενοικίασης: 48 ώρες";
		document.getElementById("categoriesInsideRightView").innerHTML = msgstring;
}
function specterRightSide() {
batmanRight = false;
spectreRight = true;
cloverRight = false;
pandaRight = false;
zootopiaRight = false;
var msgstring = "Spectre<br>\n<img class=\"imagesbigcat growPropose\" src=\"img/specter.jpg\"><br>\n<img class=\"\" src=\"img/triangle.png\" height=\"20\" width=\"20\"> Είδος: Περιπέτεια<br>\nΤιμή: 2,49 \&euro;<br>\nΔιάρκεια ενοικίασης: 48 ώρες";
		document.getElementById("categoriesInsideRightView").innerHTML = msgstring;
}
function cloverRightSide() {
batmanRight = false;
spectreRight = false;
cloverRight = true;
pandaRight = false;
zootopiaRight = false;
var msgstring = "10 Cloverfield Lane<br>\n<img class=\"imagesbigcat growPropose\" src=\"img/clover.jpg\"><br>\n<img class=\"\" src=\"img/triangle.png\" height=\"20\" width=\"20\"> Είδος: Κοινωνική<br>\nΤιμή: 2,49 \&euro;<br>\nΔιάρκεια ενοικίασης: 48 ώρες";
		document.getElementById("categoriesInsideRightView").innerHTML = msgstring;
}
function pandaRightSide() {
batmanRight = false;
spectreRight = false;
cloverRight = false;
pandaRight = true;
zootopiaRight = false;
var msgstring = "Kung Fu Panda 3<br>\n<img class=\"imagesbigcat growPropose\" src=\"img/panda.jpg\"><br>\n<img class=\"\" src=\"img/triangle.png\" height=\"20\" width=\"20\"> Είδος: Οικογενειακή<br>\nΤιμή: 2,49 \&euro;<br>\nΔιάρκεια ενοικίασης: 48 ώρες";
		document.getElementById("categoriesInsideRightView").innerHTML = msgstring;
}
function zootopiaRightSide() {
batmanRight = false;
spectreRight = false;
cloverRight = false;
pandaRight = false;
zootopiaRight = true;
var msgstring = "Zootopia<br>\n<img class=\"imagesbigcat growPropose\" src=\"img/zootopia.jpg\"><br>\n<img class=\"\" src=\"img/triangle.png\" height=\"20\" width=\"20\"> Είδος: Οικογενειακή<br>\nΤιμή: 2,49 \&euro;<br>\nΔιάρκεια ενοικίασης: 48 ώρες";
		document.getElementById("categoriesInsideRightView").innerHTML = msgstring;
}

var growProposeVar = false;
function proposals() {
if ($("#proposeSynopsisButton").hasClass("disabled") === false) {
	growPropose = true;
	$("#specterPropose").addClass("growProposeThis");
	$("#proposeSynopsisButton").addClass("disabled");
	iteratePropose++;
}
}

function iterateRIGHTCATS() {
if ($("#codALTC1").hasClass("test")) {
	$("#codALTC1").removeClass("test");
	$("#codALTC1").addClass("growProposeThis");
	batmanRightSide();
} else if ($("#codALTC1").hasClass("growProposeThis")) {
	$("#codALTC1").removeClass("growProposeThis");
	$("#codALTC2").addClass("growProposeThis");
	specterRightSide();
}else if ($("#codALTC2").hasClass("growProposeThis")) {
	$("#codALTC2").removeClass("growProposeThis");
	$("#codALTC3").addClass("growProposeThis");
	cloverRightSide();
}else if ($("#codALTC3").hasClass("growProposeThis")) {
	$("#codALTC3").removeClass("growProposeThis");
	$("#codALTC4").addClass("growProposeThis");
	pandaRightSide();
}else if ($("#codALTC4").hasClass("growProposeThis")) {
	$("#codALTC4").removeClass("growProposeThis");
	$("#codALTC5").addClass("growProposeThis");
	zootopiaRightSide();
}else if ($("#codALTC5").hasClass("growProposeThis")) {
	$("#codALTC5").removeClass("growProposeThis");
	$("#codALTC6").addClass("growProposeThis");
	batmanRightSide();
}else if ($("#codALTC6").hasClass("growProposeThis")) {
	$("#codALTC6").removeClass("growProposeThis");
	$("#codALTC1").addClass("growProposeThis");
	batmanRightSide();
}
}

function iterateLEFTCATS() {
if ($("#codALTC1").hasClass("test")) {
	$("#codALTC1").removeClass("test");
	$("#codALTC1").addClass("growProposeThis");
	batmanRightSide();
} else if ($("#codALTC1").hasClass("growProposeThis")) {
	$("#codALTC1").removeClass("growProposeThis");
	$("#codALTC6").addClass("growProposeThis");
	batmanRightSide();
}else if ($("#codALTC6").hasClass("growProposeThis")) {
	$("#codALTC6").removeClass("growProposeThis");
	$("#codALTC5").addClass("growProposeThis");
	zootopiaRightSide();
}else if ($("#codALTC5").hasClass("growProposeThis")) {
	$("#codALTC5").removeClass("growProposeThis");
	$("#codALTC4").addClass("growProposeThis");
	pandaRightSide();
}else if ($("#codALTC4").hasClass("growProposeThis")) {
	$("#codALTC4").removeClass("growProposeThis");
	$("#codALTC3").addClass("growProposeThis");
	cloverRightSide();
}else if ($("#codALTC3").hasClass("growProposeThis")) {
	$("#codALTC3").removeClass("growProposeThis");
	$("#codALTC2").addClass("growProposeThis");
	specterRightSide();
}else if ($("#codALTC2").hasClass("growProposeThis")) {
	$("#codALTC2").removeClass("growProposeThis");
	$("#codALTC1").addClass("growProposeThis");
	batmanRightSide();
}
}

function okButtonCats(){
if ($("#codALTC1").hasClass("growProposeThis")) {
	batmanSynopsis();
} else if ($("#codALTC2").hasClass("growProposeThis")) {
	specterSynopsis();
} else if ($("#codALTC3").hasClass("growProposeThis")) {
	cloverSynopsis();
} else if ($("#codALTC4").hasClass("growProposeThis")) {
	pandaSynopsis();
} else if ($("#codALTC5").hasClass("growProposeThis")) {
	zootopiaSynopsis();
} else if ($("#codALTC6").hasClass("growProposeThis")) {
	batmanSynopsis();
} else if (batmanRight) {
	batmanSynopsis();
} else if (spectreRight) {
	specterSynopsis();
} else if (cloverRight) {
	cloverSynopsis();
} else if (pandaRight) {
	pandaSynopsis();
} else if (zootopiaRight) {
	zootopiaSynopsis();
} else {
	return;
}
}

var moviezPropose = ["#specterPropose","#cloverPropose","#zootopiaPropose"];
var iteratePropose = 0;
var triggerDown = false;
var triggerUp = false;

function iterateDOWN() {
if (growPropose) {
triggerDown = true;
if (iteratePropose === 0) {
	var smov = moviezPropose[iteratePropose];
	var smov2 = moviezPropose[moviezPropose.length-1];
	$(smov).addClass("growProposeThis");
	$(smov2).removeClass("growProposeThis");
	if (triggerUp) {
			iteratePropose++;
			iteratePropose++;
			triggerUp = false;
		} else {
			iteratePropose++;
		}
} else if (iteratePropose > (moviezPropose.length - 1)) {
		iteratePropose = 0;
		var smov = moviezPropose[iteratePropose];
		var smov2 = moviezPropose[moviezPropose.length - 1];
		$(smov).addClass("growProposeThis");
		$(smov2).removeClass("growProposeThis");
		if (triggerUp) {
			iteratePropose++;
			iteratePropose++;
			triggerUp = false;
		} else {
			iteratePropose++;
		}
} else {
		var smov = moviezPropose[iteratePropose];
		var smov2 = moviezPropose[iteratePropose - 1];
		$(smov).addClass("growProposeThis");
		$(smov2).removeClass("growProposeThis");
		if (triggerUp) {
			iteratePropose++;
			iteratePropose++;
			triggerUp = false;
		} else {
			iteratePropose++;
		}
}
}
}

function iterateUP() {
if (growPropose) {
triggerUp = true;
if (triggerDown) {
	iteratePropose--;
	iteratePropose--;
	triggerDown = false;
} else {
	iteratePropose--;
}
if (iteratePropose < 0){
	iteratePropose = moviezPropose.length - 1;
	var smov = moviezPropose[iteratePropose];
	var smov2 = moviezPropose[0];
	$(smov).addClass("growProposeThis");
	$(smov2).removeClass("growProposeThis");
}
var smov = moviezPropose[iteratePropose];
var smov2 = moviezPropose[iteratePropose + 1];
	$(smov).addClass("growProposeThis");
	$(smov2).removeClass("growProposeThis");
}
}

function batmanSynopsis() {
$("#rentButton").removeClass("hidden");
$("#watchCodBtn").addClass("hidden");
$("#proposeSynopsisButton").removeClass("disabled");
$("#downloadButton").addClass("disabled");	
var msgstring = "          <tbody>\n            <tr>\n              <td style=\"width:200px\"> <img class=\"\" src=\"img/bvsSu.jpg\"> <br> <img class=\"\" src=\"img/dd.png\"> </td>\n              <td><h4>Batman V Superman: H Αυγή Της Δικαιοσύνης</h4>\n                <img class=\"\" height=24 width=24 src=\"img/triangle.png\"><br>\n                Τιμή: 2,49€<br>\n                Διάρκεια: 145\'    Είδος: Περιπέτεια<br>\n                Σκηνοθεσία: \tΖακ Σνάιντερ<br>\n                Ηθοποιοί: \tΜπεν Άφλεκ,Χένρι Κάβιλ<br>\n                Γλώσσα: Αγγλικά<br>\n                Έτος παραγωγής: \t2015<br>\n                Διαθέσιμο έως: \t14/12/2016 <br>\n                Διάρκεια ενοικίασης: \t48 ώρες <br>\n              </td>\n            </tr>\n            <tr>\n              <td colspan=\"2\">Υπό το φόβο των ολοένα και πιο απρόβλεπτων πράξεων του Σούπερμαν, ο Μπάτμαν αρνείται να αφήσει τον εξωγήινο υπερήρωα ανεξέλεγκτο.\n                Με τους δυο τους να βρίσκονται σε πόλεμο όμως, μια μεγάλη απειλή κατά της ανθρωπότητας βρίσκει την ευκαιρία να αναδυθεί.\n              </td>\n            </tr>";
		document.getElementById("movieSynopsis").innerHTML = msgstring;
}

function specterSynopsis() {
$("#rentButton").removeClass("hidden");
$("#watchCodBtn").addClass("hidden");
$("#downloadButton").addClass("disabled");
$("#proposeSynopsisButton").removeClass("disabled");
var msgstring = "       <tbody>\n            <tr>\n              <td style=\"width:200px\"> <img class=\"\" src=\"img/specter.jpg\"> <br> <img class=\"\" src=\"img/dd.png\"> </td>\n              <td><h4>Spectre</h4>\n                <img class=\"\" height=24 width=24 src=\"img/triangle.png\"><br>\n                Τιμή: 2,49€<br>\n                Διάρκεια: 142\'    Είδος: Περιπέτεια<br>\n                Σκηνοθεσία: \t\tΣαμ Μέντες<br>\n                Ηθοποιοί: \t\tΝτάνιελ Κρεγκ,Κρίστοφ Βαλτς<br>\n                Γλώσσα: Αγγλικά<br>\n                Έτος παραγωγής: \t2015<br>\n                Διαθέσιμο έως: \t15/08/2016 <br>\n                Διάρκεια ενοικίασης: \t48 ώρες <br>\n              </td>\n            </tr>\n            <tr>\n              <td colspan=\"2\">Ένα αινιγματικό μήνυμα από το παρελθόν του Μποντ τον οδηγεί στην αποκάλυψη μιας εγκληματικής οργάνωσης. \n\t\t\t  Και ενώ ο Μ συγκρούεται με την πολιτική ηγεσία για να διατηρήσει το πρόγραμμα 00, ο Μποντ αποκαλύπτει την τρομακτική αλήθεια πίσω από το όνομα SPECTRE.\n              </td>\n            </tr>\n          </tbody>";
		document.getElementById("movieSynopsis").innerHTML = msgstring;
}

function cloverSynopsis() {
$("#rentButton").removeClass("hidden");
$("#watchCodBtn").addClass("hidden");
$("#downloadButton").addClass("disabled");
$("#proposeSynopsisButton").removeClass("disabled");
var msgstring = "          <tbody>\n            <tr>\n              <td style=\"width:200px\"> <img class=\"\" src=\"img/clover.jpg\"> <br> <img class=\"\" src=\"img/dd.png\"> </td>\n              <td><h4>10 Cloverfield Lane</h4>\n                <img class=\"\" height=24 width=24 src=\"img/triangle.png\"><br>\n                Τιμή: 2,49€<br>\n                Διάρκεια: 99\'    Είδος: Κοινωνική<br>\n                Σκηνοθεσία: \t\t\t\tΝταν Τράχτενμπεργκ<br>\n                Ηθοποιοί: \t\t\tΜέρι Ελίζαμπεθ Γουίνστεντ,Τζον Γκούντμαν<br>\n                Γλώσσα: Αγγλικά<br>\n                Έτος παραγωγής: \t2016<br>\n                Διαθέσιμο έως: \t16/11/2016 <br>\n                Διάρκεια ενοικίασης: \t48 ώρες <br>\n              </td>\n            </tr>\n            <tr>\n              <td colspan=\"2\">Μετά από τροχαίο, μια γυναίκα συνέρχεται μέσα σε καταφύγιο με δύο άντρες που την ενημερώνουν πως ο αέρας έξω είναι δηλητηριώδης λόγω χημικής επίθεσης. \n\t\t\t  Κι ενώ φοβάται για τη ζωή της στο καταφύγιο, πρέπει να προετοιμαστεί για ό,τι μπορεί να συμβαίνει έξω.\n              </td>\n            </tr>\n          </tbody>";
		document.getElementById("movieSynopsis").innerHTML = msgstring;
}

function pandaSynopsis() {
$("#rentButton").removeClass("hidden");
$("#watchCodBtn").addClass("hidden");
$("#proposeSynopsisButton").removeClass("disabled");
$("#downloadButton").addClass("disabled");
var msgstring = "          <tbody>\n            <tr>\n              <td style=\"width:200px\"> <img class=\"\" src=\"img/panda.jpg\"> <br> <img class=\"\" src=\"img/dd.png\"> </td>\n              <td><h4>Kung Fu Panda 3</h4>\n                <img class=\"\" height=24 width=24 src=\"img/triangle.png\"><br>\n                Τιμή: 2,49€<br>\n                Διάρκεια: 91\'    Είδος: Οικογενειακή<br>\n                Σκηνοθεσία: \t\t\tΤζένιφερ Γιου Νέλσον<br>\n                Ηθοποιοί: \t\t\tΜπράϊαν Κράνστον,Τζακ Μπλακ<br>\n                Γλώσσα: Αγγλικά<br>\n                Έτος παραγωγής: \t2016<br>\n                Διαθέσιμο έως: \t31/12/2016 <br>\n                Διάρκεια ενοικίασης: \t48 ώρες <br>\n              </td>\n            </tr>\n            <tr>\n              <td colspan=\"2\">Καθώς ο Πο σιγά-σιγά γίνεται από απλός πολεμιστής δάσκαλος, θα συναντήσει τον επί πολλά χρόνια χαμένο πατέρα του, τον Λι. \n\t\t\t  Οι δυο τους θα ταξιδέψουν στο μυστικό παράδεισο των Πάντα, τον οποίο ο Πο θα κληθεί να σώσει από τον Κάι, τον υπερφυσικό πολεμιστή.\n              </td>\n            </tr>\n          </tbody>";
		document.getElementById("movieSynopsis").innerHTML = msgstring;
}
function zootopiaSynopsis() {
$("#rentButton").removeClass("hidden");
$("#watchCodBtn").addClass("hidden");
$("#downloadButton").addClass("disabled");
$("#proposeSynopsisButton").removeClass("disabled");
var msgstring = "          <tbody>\n            <tr>\n              <td style=\"width:200px\"> <img class=\"\" src=\"img/zootopia.jpg\"> <br> <img class=\"\" src=\"img/dd.png\"> </td>\n              <td><h4>Zootopia</h4>\n                <img class=\"\" height=24 width=24 src=\"img/triangle.png\"><br>\n                Τιμή: 2,49€<br>\n                Διάρκεια: 104\'    Είδος: Οικογενειακή<br>\n                Σκηνοθεσία: \t\t\t\tΡιτς Μουρ<br>\n                Ηθοποιοί: \t\t\t\tΤζίνιφερ Γκούντγουιν,Τζέισον Μπέιτμαν<br>\n                Γλώσσα: Αγγλικά<br>\n                Έτος παραγωγής: \t2016<br>\n                Διαθέσιμο έως: \t03/10/2016 <br>\n                Διάρκεια ενοικίασης: \t48 ώρες <br>\n              </td>\n            </tr>\n            <tr>\n              <td colspan=\"2\">Η ενθουσιώδης λαγουδίτσα, η Τζούντι Χοπς είναι ο πρώτος λαγός που γίνεται δεκτός στο αστυνομικό σώμα. Η Τζούντι θα ταξιδέψει στη Ζωούπολη, την πολύβουη μεγαλούπολη, αποφασισμένη να αποδείξει την αξία της, εξιχνιάζοντας μία μυστηριώδη υπόθεση.\n              </td>\n            </tr>\n          </tbody>";
document.getElementById("movieSynopsis").innerHTML = msgstring;
}

function rentCOD() {
	$("#downloadButton").removeClass("disabled");
	var msgstring = "<p>Γίνεται έλενγχος της adsl γραμμής και μετά ζητάει το pin του χρήστη, αφού το βάλει γίνεται η ενοικίαση, ενεργοποιείται η προβολή και λήψη(σκληρός δίσκος διαθέσιμος).</p><p>Μετά την εισαγωγή του PIN έχετε τη δυνατότητα να ορίσετε εάν η συγκεκριμένη λήψη θα είναι προσβάσιμη από όλους τους χρήστες που θα συνδέονται στον συγκεκριμένο αποκωδικοποιητή, επιλέγοντας το πεδίο «Κοινή Χρήση».</p>";
	document.getElementById("agentMsg").innerHTML = msgstring;
	$("#rentButton").addClass("hidden");
	$("#watchCodBtn").removeClass("hidden");
}

function watchACod() {
var msgstring = "Πατώντας προβολή ξεκινάει η ταινία που ενοικίασε ο χρήστης απευθείας αφού κάνει έλενγχο της adsl γραμμής. Αν το bandwdith της γραμμής δεν είναι αρκετό τότε ο χρήστης μπορεί να κάνει λήψη(εφόσον διαθέτει σκληρό δίσκο) και να δει την ταινία πιο μετά.";
	document.getElementById("agentMsg").innerHTML = msgstring;
}

function synopsisCOD(){
if ($("#batman").hasClass("growTHIS") || batmanRight) {
	batmanSynopsis();
} else if ($("#specter").hasClass("growTHIS") || spectreRight) {
	specterSynopsis();
} else if ($("#clover").hasClass("growTHIS") || cloverRight) {
	cloverSynopsis();
} else if ($("#panda").hasClass("growTHIS") || pandaRight) {
	pandaSynopsis();
} else if ($("#zootopia").hasClass("growTHIS") || zootopiaRight) {
	zootopiaSynopsis();
} else {
	return;
}
}

function filterAllCOD() {
    document.getElementById("filterAllCOD").checked = true;
	document.getElementById("thriller").checked = false;
	document.getElementById("familyCOD").checked = false;
	document.getElementById("socialCOD").checked = false;
	document.getElementById("comedy").checked = false;
	document.getElementById("adventure").checked = false;
	document.getElementById("kids").checked = false;
}

function thriller() {
    document.getElementById("filterAllCOD").checked = false;
	document.getElementById("thriller").checked = true;
}
function familyCOD() {
    document.getElementById("filterAllCOD").checked = false;
	document.getElementById("familyCOD").checked = true;
}
function socialCOD() {
    document.getElementById("filterAllCOD").checked = false;
	document.getElementById("socialCOD").checked = true;
}
function comedy() {
    document.getElementById("filterAllCOD").checked = false;
	document.getElementById("comedy").checked = true;
}
function adventure() {
    document.getElementById("filterAllCOD").checked = false;
	document.getElementById("adventure").checked = true;
}
function kids() {
    document.getElementById("filterAllCOD").checked = false;
	document.getElementById("kids").checked = true;
}

var growPropose2 = false;
function proposalsTwo() {
if ($("#proposeSynopsisButton2").hasClass("disabled") === false) {
	growPropose2 = true;
	$("#specterPropose2").addClass("growProposeThis");
	$("#proposeSynopsisButton2").addClass("disabled");
	iteratePropose2++;
}
}

var moviezPropose2 = ["#specterPropose2","#zootopiaPropose2"];
var iteratePropose2 = 0;
var triggerDown2 = false;
var triggerUp2 = false;

function iterateDOWN2() {
if (growPropose2) {
triggerDown2 = true;
if (iteratePropose2 === 0) {
	var smov = moviezPropose2[iteratePropose2];
	var smov2 = moviezPropose2[moviezPropose2.length-1];
	$(smov).addClass("growProposeThis");
	$(smov2).removeClass("growProposeThis");
	if (triggerUp2) {
			iteratePropose2++;
			iteratePropose2++;
			triggerUp2 = false;
		} else {
			iteratePropose2++;
		}
} else if (iteratePropose2 > (moviezPropose2.length - 1)) {
		iteratePropose2 = 0;
		var smov = moviezPropose2[iteratePropose2];
		var smov2 = moviezPropose2[moviezPropose2.length - 1];
		$(smov).addClass("growProposeThis");
		$(smov2).removeClass("growProposeThis");
		if (triggerUp2) {
			iteratePropose2++;
			iteratePropose2++;
			triggerUp2 = false;
		} else {
			iteratePropose2++;
		}
} else {
		var smov = moviezPropose2[iteratePropose2];
		var smov2 = moviezPropose2[iteratePropose2 - 1];
		$(smov).addClass("growProposeThis");
		$(smov2).removeClass("growProposeThis");
		if (triggerUp2) {
			iteratePropose2++;
			iteratePropose2++;
			triggerUp2 = false;
		} else {
			iteratePropose2++;
		}
}
}
}

function iterateUP2() {
if (growPropose2) {
triggerUp2 = true;
if (triggerDown2) {
	iteratePropose2--;
	iteratePropose2--;
	triggerDown2 = false;
} else {
	iteratePropose2--;
}
if (iteratePropose2 < 0){
	iteratePropose2 = moviezPropose2.length - 1;
	var smov = moviezPropose2[iteratePropose2];
	var smov2 = moviezPropose2[0];
	$(smov).addClass("growProposeThis");
	$(smov2).removeClass("growProposeThis");
}
var smov = moviezPropose2[iteratePropose2];
var smov2 = moviezPropose2[iteratePropose2 + 1];
	$(smov).addClass("growProposeThis");
	$(smov2).removeClass("growProposeThis");
}
}



/**/
function agentInfo() {
if (showProg||showAltProg) {
	var msgstring = "<p>Πατώντας το κουμπί εγγραφής, εφόσον υπάρχει διαθέσιμος σκληρός δίσκος, μπορείτε να ορίσετε εγγραφή για το πρόγραμμα που έχετε επιλέξει, ενώ μπορείτε να την ακυρώσετε πατώντας το κουμπί για δεύτερη φορά.</p><p>Πατώντας το πράσινο κουμπί εμφανίζονται περισσότερες επιλογές όπως να ορίσετε «Υπενθύμιση» για ένα μελλοντικό πρόγραμμα, να προγραμματίσετε «Εγγραφή Προγράμματος», «Εγγραφή Βάσει Χρονικής Διάρκειας» ή «Εγγραφή Σειράς» ανάλογα με το είδος του επιλεγμένου προγράμματος και τη χρονική στιγμή προβολής του.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#signalSettings").hasClass('hidden')===false) && ($("#freeSat").hasClass('hidden')===false) && ($("#stepTwoFreeSat").hasClass('hidden')===false)) {
	var msgstring = "Με τα πλήκτρα <i class=\"fa fa-fast-backward\" aria-hidden=\"true\"></i> <i class=\"fa fa-fast-forward\" aria-hidden=\"true\"></i> ο χρήστης μπορεί να πλοηγηθεί σε άλλη σελίδα αναλόγως που βρίσκεται το μπλε πλαίσιο(Κανάλια/ραδιοσταθμοί)";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (livepauseconf){
	var msgstring = "Εάν επιθυμείτε να επιστρέψετε στη ζωντανή ροή του προγράμματος, μπορείτε να πατήσετε <button type=\"button\" class=\"btn btn-lg btn-default chevron\"><i class=\"fa fa-square\" aria-hidden=\"true\"></i></button> ή το <button type=\"button\" class=\"btn btn-lg btn-default chevron\"><i class=\"fa fa-undo\" aria-hidden=\"true\"></i></button>και να επιλέξετε « Έξοδος».";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (miniepgconf) {
	var msgstring = "Πατώντας το κουμπί για δεύτερη φορά μπορείτε να δείτε αναλυτικές πληροφορίες για το επιλεγμένο πρόγραμμα. Με τα βελάκια <i class=\"fa fa-caret-left\" aria-hidden=\"true\"></i>  <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i> μπορείτε να μετακινηθείτε μεταξύ των καναλιών και να δείτε το εκάστοτε τρέχον πρόγραμμα. Χρησιμοποιήστε τα κουμπιά <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>  για να δείτε τα διαθέσιμα προγράμματα του επιλεγμένου καναλιού.";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#onDemandRent").hasClass('hidden')=== false) && ($("#menuAdult").hasClass('hidden')=== false)) {
	var msgstring = "<p>To Κομμάτι για ενηλίκους έχει ίδιο μενού με τα άλλα μενου αναζήτησης του COD.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if ($("#onDemandRent").hasClass('hidden')=== false) {
	var msgstring = "<p>Ο χρήστης πρέπει να επιλέξει ταινία απο το μενού με τα βελάκια και πατώντας το πλήκτρο ΟΚ βγαίνει η σύνοψη ταινίας. Αν πατήσει το πράσινο κουμπί ενώ η επιλογή του είναι πάνω στο μενου το μόνο που θα βγει είναι Αναζήτηση και Βοήθεια.</p><p>Κατά την αναπαραγωγή μπορείτε να πατήσετε <i class=\"fa fa-square\" aria-hidden=\"true\"></i>(Παύση), <i class=\"fa fa-play\" aria-hidden=\"true\"></i>(Εκκίνηση), <i class=\"fa fa-fast-forward\" aria-hidden=\"true\"></i>(Μετάβαση Πίσω),<i class=\"fa fa-fast-backward\" aria-hidden=\"true\"></i>(Μετάβαση Μπροστά), μπλε πλήκτρο(10 λεπτά μπροστά), κίτρινο πλήκτρο(10 λεπτά πίσω), ενώ πατώντας τα κουμπιά <i class=\"fa fa-pause\" aria-hidden=\"true\"></i> ή <i class=\"fa fa-undo\" aria-hidden=\"true\"></i> μπορείτε να διακόψετε την προβολή. Πατώντας επανειλημμένα τα κουμπιά <i class=\"fa fa-fast-forward\" aria-hidden=\"true\"></i>,<i class=\"fa fa-fast-backward\" aria-hidden=\"true\"></i> και μπορείτε να αλλάξετε την ταχύτητα μετακίνησης (οι διαθέσιμες ταχύτητες είναι 2Χ, 4Χ, 8Χ, 16Χ, 24Χ).</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if ($("#replayTVProgramm").hasClass('hidden')=== false) {
	var msgstring = "<p>Με το Replay TV έχετε τη δυνατότητα να δείτε επιλεγμένα προγράμματα σε συγκεκριμένα κανάλια, έως και 48 ώρες μετά την προβολή τους. Επιπλέον, μπορείτε να δείτε από την αρχή το τρέχον πρόγραμμα σε περίπτωση που συντονιστήκατε στο κανάλι μετά την έναρξη του προγράμματος.</p><p>Για την προβολή ενός προγράμματος Replay TV πατήστε το πράσινο κουμπί και επιλέξτε «Replay TV» στο μενού των επιλογών που θα εμφανιστεί. Κατά την αναπαραγωγή ενός προγράμματος Replay TV μπορείτε να πατήσετε <i class=\"fa fa-square\" aria-hidden=\"true\"></i>(Παύση), <i class=\"fa fa-play\" aria-hidden=\"true\"></i>(Εκκίνηση), <i class=\"fa fa-fast-forward\" aria-hidden=\"true\"></i>(Μετάβαση Πίσω),<i class=\"fa fa-fast-backward\" aria-hidden=\"true\"></i>(Μετάβαση Μπροστά), μπλε πλήκτρο(10 λεπτά μπροστά), κίτρινο πλήκτρο(10 λεπτά πίσω), ενώ πατώντας τα κουμπιά <i class=\"fa fa-pause\" aria-hidden=\"true\"></i> ή <i class=\"fa fa-undo\" aria-hidden=\"true\"></i> μπορείτε να διακόψετε την προβολή. Πατώντας επανειλημμένα τα κουμπιά <i class=\"fa fa-fast-forward\" aria-hidden=\"true\"></i>,<i class=\"fa fa-fast-backward\" aria-hidden=\"true\"></i> και μπορείτε να αλλάξετε την ταχύτητα μετακίνησης (οι διαθέσιμες ταχύτητες είναι 2Χ, 4Χ, 8Χ, 16Χ, 24Χ).</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if ($("#myDownloads").hasClass('hidden')=== false) {
	var msgstring = "<p>Όταν πατάτε λήψη το πρόγραμμα/ταινία θα αποθηκευτεί προσωρινά στον σκληρό δίσκο για να μπορείτε να την παρακολουθήσετε αργότερα, εφόσον έχει αποθηκευτεί ικανό μέρος της (5% της συνολικής διάρκειας) που επιτρέπει την απρόσκοπτη θέαση. Οι ταινίες Cinema On Demand που έχετε αποθηκεύσει προσωρινά εμφανίζονται στο μενού Λογαριασμός Χρήστη / Οι Λήψεις μου.</p><p> Εάν επιλέξετε «Λήψη» μιας ταινίας, μπορείτε να την προβάλετε μόνο από το αρχείο στον σκληρό σας δίσκο και όχι από το δίκτυο. Εφόσον ξεκινήσετε την προβολή της ταινίας και η λήψη δεν έχει ολοκληρωθεί, μπορείτε να κάνετε γρήγορη προβολή μπροστά (fast forward) μέχρι το σημείο της ταινίας που έχει γίνει λήψη κάθε φορά.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if ($("#myOnDemand").hasClass('hidden')=== false) {
	var msgstring = "<p>Μπορείτε να προσθέσετε την ταινία που επιλέξατε στα Αγαπημένα πατώντας το κόκκινο κουμπί και μετά να τη βρείτε στο μενού Λογαριασμός Χρήστη / Τα On Demand μου. Στο ίδιο μενού μπορείτε να βρείτε εύκολα όλες τις ταινίες τις οποίες έχετε ενοικιάσει και έχετε ξεκινήσει την προβολή τους (Λογαριασμός Χρήστη / Σελιδοδείκτες).</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if ($("#search").hasClass('hidden')=== false) {
	var msgstring = "<p>Η αναζήτηση προγραμμάτων είναι δυνατή μέσα από το μενού Kανάλια και On Demand. Μπορείτε να περιορίσετε την αναζήτηση προγραμμάτων επιλέγοντας το είδος του Προγράμματος (Κανάλια, Replay TV, On Demand) που αναζητάτε ή/και την Κατηγορία στην οποία επιθυμείτε να γίνει η αναζήτηση (Όλα, Τίτλος, Ηθοποιοί, Σκηνοθεσία, Είδος). Κατόπιν θα πρέπει να εισαγάγετε κάποια «Λέξη Κλειδί» χρησιμοποιώντας το πληκτρολόγιο που θα εμφανιστεί στην οθόνη σας.</p><p>Πατήστε ΟΚ για να εμφανιστεί το πληκτρολόγιο στην οθόνη σας και στη συνέχεια επιλέξτε χαρακτήρες χρησιμοποιώντας τα βελάκια και το κουμπί και τέλος πατήστε «ΟΚ» στο πληκτρολόγιοτης οθόνης για να ξεκινήσει η Αναζήτηση (απαιτούνται τουλάχιστον 3 χαρακτήρες). Είναι δυνατή η ταξινόμηση με το πράσινο πλήκτρο.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#signalSettings").hasClass('hidden')=== false) && ($("#freeSat").hasClass('hidden')=== false)) {
	var msgstring = "<p>Ο ΟΤΕ TV Μέσω Δορυφόρου σάς δίνει τη δυνατότητα αναζήτησης και προσθήκης στη Λίστα Καναλιών ελεύθερων (μη κρυπτογραφημένων) δορυφορικών καναλιών (Free-To-Air Satellite Channels), τα οποία εκπέμπονται είτε από το δορυφόρο EUTELSAT 9B είτε από κάποιον άλλο δορυφόρο, εφόσον διαθέτετε κατάλληλο κεραιοσύστημα. Τα ελεύθερα κανάλια που θα επιλέξετε σύμφωνα με τη διαδικασία που περιγράφεται παρακάτω, θα προστεθούν στο τέλος της Λίστας Καναλιών, μετά το κανάλι 800, και θα είναι προσβάσιμα όπως όλα τα κανάλια της υπηρεσίας.</p>.<p>ΣΗΜΕΙΟ ΑΝΑΦΟΡΑΣ-> Όλοι οι δορυφόροι πέρα απο τις επιλογές all/others έχουνε προεπιλεγμενες επιλογές με αναμεταδότες/συχνότητες που δεν φαίνονται στον emulator.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#genSettings").hasClass('hidden')=== false) && ($("#langSettings").hasClass('hidden')=== false)) {
	var msgstring = "<p>Αλλάξετε τη γλώσσα του μενού από Ελληνικά σε Αγγλικά και το αντίστροφο στο μενού «Γλώσσα Μενού».</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#genSettings").hasClass('hidden')=== false) && ($("#progrView").hasClass('hidden')=== false)) {
	var msgstring = "<p>Αλλάξετε το στυλ προβολής του προγράμματος σε Οριζόντια ή Κάθετη Προβολή στο μενού «Πρόγραμμα».</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#genSettings").hasClass('hidden')=== false) && ($("#recSettings").hasClass('hidden')=== false)) {
	var msgstring = "<p>Ρυθμίσετε επιπλέον χρόνο εγγραφής πριν και μετά την προγραμματισμένη ώρα προβολής του προγράμματος στο μενού «Ρυθμίσεις Εγγραφών». Μπορείτε να επιλέξετε να ξεκινούν οι εγγραφές σας από 5 έως 30 λεπτά πριν την έναρξη του προγράμματος και να σταματούν από 5 έως και 30 λεπτά μετά τη λήξη του.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#genSettings").hasClass('hidden')=== false) && ($("#powerSaveOptions").hasClass('hidden')=== false)) {
	var msgstring = "<p>Στο μενού «Εξοικονόμηση Ενέργειας», μπορείτε να ορίσετε το χρόνο στον οποίο θα μεταβεί αυτόματα ο αποκωδικοποιητής σε κατάσταση Παθητικής Αναμονής ή να απενεργοποιήσετε τις ρυθμίσεις εξοικονόμησης ενέργειας. Στην κατάσταση Παθητικής Αναμονής, η κατανάλωση ισχύος του αποκωδικοποιητή περιορίζεται σημαντικά σύμφωνα με την ισχύουσα ευρωπαϊκή νομοθεσία και οι λειτουργίες του αποκωδικοποιητή περιορίζονται στο ελάχιστο.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#soundAndSubtitles").hasClass('hidden')=== false) && ($("#subSettings").hasClass('hidden')=== false)) {
	var msgstring = "<p>Μέσα από το μενού «Υπότιτλοι» έχετε την δυνατότητα να ενεργοποιήσετε/απενεργοποιήσετε την εμφάνιση υποτίτλων στα κανάλια που παρέχεται αυτή η δυνατότητα.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#soundAndSubtitles").hasClass('hidden')=== false) && ($("#soundSettings").hasClass('hidden')=== false)) {
	var msgstring = "<p>Στο μενού «Γλώσσα Ήχου» μπορείτε να επιλέξετε τη γλώσσα ήχου του προγράμματος, εφόσον το συγκεκριμένο κανάλι/πρόγραμμα παρέχει αυτή τη δυνατότητα.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#soundAndSubtitles").hasClass('hidden')=== false) && ($("#soundType").hasClass('hidden')=== false)) {
	var msgstring = "<p>Mπορείτε να επιλέξετε το είδος του ήχου [Στερεοφωνικός (Stereo), Πολυκάναλος (Surround), Μονοφωνικός (Mono)] που επιθυμείτε μέσα από το μενού «Είδος Ήχου». Για να απολαύσετε πολυκάναλο ήχο Dolby Digital στα προγράμματα/ταινίες που διατίθεται, θα πρέπει να συνδέσετε τον αποκωδικοποιητή με το ηχοσύστημά σας μέσω της θύρας HDMI ή S/PDIF και να επιλέξετε το αντίστοιχο είδος ήχου. Τα προγράμματα/ταινίες που είναι διαθέσιμα με ήχο Dolby Digital φέρουν σχετική σήμανση στις πληροφορίες.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#soundAndSubtitles").hasClass('hidden')=== false) && ($("#soundDelay").hasClass('hidden')=== false)) {
	var msgstring = "<p>Εφόσον έχετε συνδέσει τον αποκωδικοποιητή σας με εξωτερικό ηχοσύστημα (π.χ.home cinema, ενισχυτής) και παρατηρείτε κάποια ασυμφωνία μεταξύ ήχου και εικόνας, μπορείτε να τα συγχρονίσετε εισάγοντας επιπλέον καθυστέρηση στη ροή του ήχου μέσω του αποκωδικοποιητή από το μενού «Υστέρηση Ήχου».</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#videoSettings").hasClass('hidden')=== false) && ($("#resolutionAnalysis").hasClass('hidden')=== false)) {
	var msgstring = "<p>Επιλέξτε την αναλογία (4:3 ή 16:9) και την ανάλυση οθόνης [Τυπική Ανάλυση (SD),Υψηλή Ανάλυση (HD)], ανάλογα με τον τύπο της τηλεόρασης που διαθέτετε, από το μενού «Αναλογία και Ανάλυση». Εφόσον η τηλεόρασή σας έχει τη δυνατότητα προβολής περιεχομένου υψηλής ευκρίνειας (HD), προτείνεται να επιλέξετε αναλογία και ανάλυση οθόνης «16:9, 1080i» για να απολαύσετε καλύτερη ποιότητα εικόνας.</p>";		
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#videoSettings").hasClass('hidden')=== false) && ($("#screenSettings").hasClass('hidden')=== false)) {
	var msgstring = "<p>Μέσα από το μενού «Ρυθμίσεις Οθόνης» μπορείτε να επιλέξετε την προβολή των καναλιών σε «Πλήρη Οθόνη» ή σε «Κανονική Προβολή» δηλ. όπως μεταδίδεται το πηγαίο σήμα από το κάθε κανάλι.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#videoSettings").hasClass('hidden')=== false) && ($("#scartSettings").hasClass('hidden')=== false)) {
	var msgstring = "<p>Eφόσον έχετε συνδέσει τον αποκωδικοποιητή με την τηλεόρασή σας μέσω SCART, μέσα από τις «Ρυθμίσεις SCART» μπορείτε να ρυθμίσετε τον τύπο βίντεο που θα λαμβάνετε («RGB» ή «Composite»).</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#systema").hasClass('hidden')=== false) && ($("#systemInfo").hasClass('hidden')=== false)) {
	var msgstring = "<p>Σε αυτό το μενού μπορείτε να βρείτε χρήσιμες πληροφορίες για τον εξοπλισμό σας και το λογαριασμό σας, όπως Αριθμό Κάρτας, Σειριακό Αριθμό STB, η Διεύθυνση MAC, Ταυτότητα Συνδρομητή, Μοντέλο Αποκωδικοποιητή, Διαθεσιμότητα Σκληρού Δίσκου κ.ά. επιλέγοντας «Ρυθμίσεις / Σύστημα / Πληροφορίες».</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#systema").hasClass('hidden')=== false) && ($("#checkSignal").hasClass('hidden')=== false)) {
	var msgstring = "<p>Μέσα από το μενού «Έλεγχος Δορ. Σήματος» (διαθέσιμο στον ΟΤΕ TV Μέσω Δορυφόρου) μπορείτε να ελέγξετε την ισχύ και την ποιότητα του σήματος καθώς και τα χαρακτηριστικά μετάδοσης (Συχνότητα, Ρυθμός Μετάδοσης, FEC) του καναλιού στο οποίο είστε συντονισμένοι. Για γρήγορη μετάβαση στο μενού ελέγχου του δορυφορικού σήματος πατήστε απλώς το κουμπί <i class=\"fa fa-signal\" aria-hidden=\"true\"></i> στο τηλεχειριστήριό σας.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#systema").hasClass('hidden')=== false) && ($("#networkStatus").hasClass('hidden')=== false)) {
	var msgstring = "<p>Mέσα από την «Κατάσταση δικτύου» μπορείτε να ελέγξετε την κατάσταση δικτύου IP και τις σχετικές παραμέτρους (π.χ. Διεύθυνση IP) (διαθέσιμο στον ΟΤΕ TV Μέσω Ευρυζωνικής Σύνδεσης και στον ΟΤΕ TV Μέσω Δορυφόρου σε λειτουργία Hybrid).</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if ($("#reboot").hasClass('hidden')=== false) {
	var msgstring = "<p>Μπορείτε να επανεκκινήσετε τον αποκωδικοποιητή σας επιλέγοντας «Ρυθμίσεις /Επανεκκίνηση».</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#restore").hasClass('hidden')=== false) && ($("#format").hasClass('hidden')=== false)) {
	var msgstring = "<p>Μπορείτε να διαμορφώσετε τον σκληρό δίσκο σας επιλέγοντας το μενού Ρυθμίσεις / Επαναφορά / Διαμόρφωση και πατώντας το κόκκινο κουμπί.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#restore").hasClass('hidden')=== false) && ($("#factoryReset").hasClass('hidden')=== false)) {
	var msgstring = "<p>Εφόσον σας ζητηθεί από την Εξυπηρέτηση Πελατών, μέσα από το μενού «Ρυθμίσεις / Επαναφορά / Επαναφορά Ρυθμίσεων» μπορείτε να επαναφέρετε τον αποκωδικοποιητή στις εργοστασιακές του ρυθμίσεις. Για να αποκτήσετε πρόσβαση στο μενού αυτό, θα χρειαστεί να εισαγάγετε τον Κωδικό PIN του Διαχειριστή, όπως και κατά την αρχική ενεργοποίηση του αποκωδικοποιητή.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#userPriviledges").hasClass('hidden')=== false) && ($("#hybridChangePin").hasClass('hidden')=== false)) {
	var msgstring = "<p>O διαχειριστής μπορεί να αλλάξει τον Kωδικό PIN του Χρήστη επιλέγοντας «Αλλαγή Κωδικού PIN». Ο Κωδικός Χρήστη αποτελείται από 4-12 αριθμητικά ψηφία και χρησιμοποιείται στον ΟΤΕ TV Μέσω Ευρυζωνικής Σύνδεσης και στον ΟΤΕ ΤV Μέσω Δορυφόρου σε λειτουργία Hybrid για την ενοικίαση ταινιών Cinema On Demand, για την πρόσβαση σε «κλειδωμένα» κανάλια, προγράμματα, κατηγορίες καναλιών, για την αλλαγή του επιπέδου Γονικού Ελέγχου αλλά και για τη δημιουργία επιπλέον Χρηστών και τον ορισμό των δικαιωμάτων τους.</p><p>Να αλλάξει τον Κωδικό PIN της Συνδρομητικής Κάρτας επιλέγοντας «Αλλαγή Κωδ. Κάρτας». Ο Κωδικός PIN της Συνδρομητικής Κάρτας αποτελείται από 4 αριθμητικά ψηφία και χρησιμοποιείται στον ΟΤΕ ΤV Μέσω Δορυφόρου σε απλή δορυφορική λειτουργία για την πρόσβαση σε «κλειδωμένα» κανάλια και για την αλλαγή του επιπέδου Γονικού Ελέγχου.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#userPriviledges").hasClass('hidden')=== false) && ($("#hybridParentalControl").hasClass('hidden')=== false)) {
	var msgstring = "<p>O διαχειριστής μπορεί να ορίσει το επιτρεπόμενο επίπεδο Γονικού Ελέγχου των προγραμμάτων ανάλογα με το προφίλ και την ηλικία του χρήστη επιλέγοντας «Γονικός Έλεγχος» προεπιλογή «Κατάλληλο για ανηλίκους άνω των 15». Θα πρέπει να σημειωθεί ότι τα επίπεδα Γονικού Ελέγχου στον ΟΤΕ ΤV Μέσω Δορυφόρου σε απλή δορυφορική λειτουργία και σε λειτουργία Hybrid λειτουργούν ανεξάρτητα και θα πρέπει να ορίζονται ξεχωριστά από τον Διαχειριστή.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#userPriviledges").hasClass('hidden')=== false) && ($("#hybridChannels").hasClass('hidden')=== false)) {
	var msgstring = "<p>Να κλειδώσει συγκεκριμένα κανάλια για κάποιο Χρήστη επιλέγοντας «Κανάλια». Για την προβολή κάποιου «κλειδωμένου» καναλιού, θα πρέπει ο Διαχειριστής να εισαγάγει το PIN του.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#userPriviledges").hasClass('hidden')=== false) && ($("#hybridMovies").hasClass('hidden')=== false)) {
	var msgstring = "<p>Να κλειδώσει συγκεκριμένους καταλόγους ταινιών Cinema On Demand από το μενού «Ταινίες». Για προβολή των ταινιών από τους «κλειδωμένους καταλόγους» θα πρέπει ο Διαχειριστής να εισαγάγει τον PIN του για να ξεκλειδώσει τη συγκεκριμένη κατηγορία.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#userPriviledges").hasClass('hidden')=== false) && ($("#rentalLimit").hasClass('hidden')=== false)) {
	var msgstring = "<p>Να ορίσει μηνιαίο ανώτατο όριο ενοικιάσεων ταινιών Cinema On Demand μέσα από το μενού «Όριο Ενοικιάσεων». Οι ταινίες χρεώνονται στο λογαριασμό της σύνδεσης OTE TV.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if ($("#userPriviledges").hasClass('hidden')=== false) {
	var msgstring = "<p>Ο Διαχειριστής (Admin) του λογαριασμού μπορεί μέσα από το μενού «Διαχείριση Δικαιωμάτων» να ορίσει συγκεκριμένα δικαιώματα χρήσης για τον ίδιο και για τους υπόλοιπους Χρήστες που έχει δημιουργήσει (για πληροφορίες σχετικά με τη Δημιουργία Χρηστών συμβουλευτείτε το μενού «Διαχείριση Χρηστών»).</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#userManagement").hasClass('hidden')=== false) && ($("#changeUserCredentials").hasClass('hidden')=== false)) {
	var msgstring = "<p>Από το μενού «Αλλαγή Στοιχείων» ο κάθε Χρήστης μπορεί να αλλάξει την Εικόνα (Avatar) ή/και το Όνομα. Επίσης, στο ίδιο μενού εμφανίζεται το «Όνομα Σύνδεσης OTE TV GO» του εκάστοτε Χρήστη. Εφόσον έχετε ενεργοποιήσει την υπηρεσία OTE TV GO, ο κάθε Χρήστης μπορεί να συνδεθεί στην εφαρμογή (application) της υπηρεσίας, χρησιμοποιώντας το Όνομα Σύνδεσής του και το PIN του.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#userManagement").hasClass('hidden')=== false) && ($("#addRemoveUser").hasClass('hidden')=== false)) {
	var msgstring = "<p>Από εδώ ο διαχειριστής μπορεί να διαγράψει χρήστες, επιλέγοντας τον χρήστη που θέλει να διαγράψει. Επίσης μπορεί να προσθέσει νέους χρήστες.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#userManagement").hasClass('hidden')=== false) && ($("#addUser").hasClass('hidden')=== false)) {
	var msgstring = "<p>Κατά την Προσθήκη ενός Χρήστη, ο Διαχειριστής ορίζει:• Εικόνα Χρήστη (Avatar). Ο Διαχειριστής μπορεί να επιλέξει από ένα σύνολο δεκαέξι (16) προεπιλεγμένων εικόνων.<br>• Όνομα. Το Όνομα Χρήστη πρέπει να περιέχει τουλάχιστον ένα γράμμα, να περιλαμβάνει 1-32 χαρακτήρες, ενώ μπορεί να περιλαμβάνει αριθμούς, ελληνικά και αγγλικά γράμματα και τα ειδικά σύμβολα, τελεία (.) και κάτω παύλα (_). Επιπλέον, θα πρέπει να είναι διαθέσιμο, δηλ. να μην χρησιμοποιείται από κάποιον άλλο Χρήστη του λογαριασμού σας. Η καταχώρηση του Ονόματος γίνεται με τη βοήθεια πληκτρολογίου που εμφανίζεται στην οθόνη πατώντας το κουμπί OK στο σχετικό πεδίο.<br>• Κωδικό PIN. Ο κωδικός πρέπει να περιέχει 4-12 αριθμητικούς χαρακτήρες.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#userManagement").hasClass('hidden')=== false) && ($("#fbTwitter").hasClass('hidden')=== false)) {
	var msgstring = "<p>Από το μενού «Facebook & Twitter» μπορείτε να συνδέσετε τους λογαριασμούς σας στα μέσα κοινωνικής δικτύωσης (Facebook και Twitter), ώστε να μπορείτε να κάνετε «share» τα αγαπημένα σας προγράμματα και να ενημερώνετε τους φίλους σας για το πρόγραμμα που παρακολουθείτε στην υπηρεσία ΟΤΕ TV.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#userManagement").hasClass('hidden')=== false) && ($("#fbTwitterEmail").hasClass('hidden')=== false)) {
	var msgstring = "<p>Αφού επιλέξετε το μέσο Κοινωνικής Δικτύωσης (Facebook ή Twitter), θα πρέπει εισαγάγετε το λογαριασμό σας χρησιμοποιώντας το πληκτρολόγιο που εμφανίζεται στην οθόνη. Ένα μήνυμα επιβεβαίωσης θα αποσταλεί στο e-mail που δηλώσατε εντός λίγων λεπτών. Στη συνέχεια θα πρέπει να επιλέξετε τον σχετικό σύνδεσμο στο e-mail σας και να αποδεχτείτε τη σύνδεση μέσα από το μέσο κοινωνικής δικτύωσης που επιλέξατε εντός τριάντα (30) λεπτών.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#userManagement").hasClass('hidden')=== false) && ($("#changeUser").hasClass('hidden')=== false)) {
	var msgstring = "<p>Από αυτό το μενού μπορεί να γίνει αλλαγή χρήστη.Αρχική οθόνη stb σε iptv/hybrid mode.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if ($("#userManagement").hasClass('hidden')=== false) {
	var msgstring = "<p>Διατίθεται στον ΟΤΕ ΤV Μέσω Ευρυζωνικής Σύνδεσης και στον OTE TV Μέσω Δορυφόρου σε λειτουργία Hybrid. Κατά την ενεργοποίηση της υπηρεσίας δημιουργείται αυτόματα ένας αρχικός Χρήστης (Διαχειριστής) του Λογαριασμού OTE TV. Ο Διαχειριστής έχει τη δυνατότητα μέσα από το μενού «Διαχείριση Χρηστών» να δημιουργήσει έως τέσσερις (4) επιπλέον Χρήστες, π.χ. ένα λογαριασμό για το παιδί του, επιλέγοντας «Προσθήκη / Διαγραφή».</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if ($("#favChannels").hasClass('hidden')=== false) {
	var msgstring = "<p>Μπορείτε να προσθέσετε και να διαχειριστείτε τα αγαπημένα κανάλια σας μέσα από το μενού Λογαριασμός Χρήστη / Αγαπημένα Κανάλια. Ο μέγιστος αριθμός αγαπημένων καναλιών που μπορείτε να αποθηκεύσετε είναι πενήντα (50).</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (chanLcat) {
		var msgstring = "<p>Με τα βελάκια <i class=\"fa fa-caret-left\" aria-hidden=\"true\"></i>  <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i> μπορείτε να αλλάξετε κατηγορία καναλιών.</p><p>Μπορείτε να πλοηγηθείτε στη Λίστα Καναλιών χρησιμοποιώντας τo πάνω και το κάτω βέλος ή τα κουμπιά CH + / - για να μεταβείτε πιο γρήγορα στα επόμενα κανάλια.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if ($("#myRecordings").hasClass('hidden')=== false) {
		var msgstring = "<p>Απαραίτητη προϋπόθεση για να μπορέσετε να κάνετε εγγραφή στο πρόγραμμα που επιθυμείτε είναι η σύνδεση του αποκωδικοποιητή σας με έναν εξωτερικό σκληρό δίσκο.Ο κάθε Χρήστης έχει πρόσβαση μόνο στις δικές του Εγγραφές καθώς και σε όλες τις κοινόχρηστες Εγγραφές, ενώ ο Διαχειριστής μπορεί να δει τις Εγγραφές όλων των Χρηστών.</p><p>Κατά την αναπαραγωγή μπορείτε να πατήσετε <i class=\"fa fa-square\" aria-hidden=\"true\"></i>(Παύση), <i class=\"fa fa-play\" aria-hidden=\"true\"></i>(Εκκίνηση), <i class=\"fa fa-fast-forward\" aria-hidden=\"true\"></i>(Μετάβαση Πίσω),<i class=\"fa fa-fast-backward\" aria-hidden=\"true\"></i>(Μετάβαση Μπροστά), μπλε πλήκτρο(10 λεπτά μπροστά), κίτρινο πλήκτρο(10 λεπτά πίσω), ενώ πατώντας τα κουμπιά <i class=\"fa fa-pause\" aria-hidden=\"true\"></i> ή <i class=\"fa fa-undo\" aria-hidden=\"true\"></i> μπορείτε να διακόψετε την προβολή. Πατώντας επανειλημμένα τα κουμπιά <i class=\"fa fa-fast-forward\" aria-hidden=\"true\"></i>,<i class=\"fa fa-fast-backward\" aria-hidden=\"true\"></i> και μπορείτε να αλλάξετε την ταχύτητα μετακίνησης (οι διαθέσιμες ταχύτητες είναι 2Χ, 4Χ, 8Χ, 16Χ, 24Χ).</p><p><img src=\"img/rec.png\" height=\"30\" width=\"30\"> Σε εγγραφή<br><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Προγραμματισμένές<br><img src=\"img/checkedGreen.png\"> Ολοκληρωμένες<br><img src=\"img/recexc.png\" height=\"30\" width=\"30\"> Ημιτελής<br><i class=\"fa fa-pause\" aria-hidden=\"true\"></i> Σε παύση</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#recordp").hasClass('hidden')=== false) || ($("#recordTimeBased").hasClass('hidden')=== false)) {
		var msgstring = "<p>Κατά τη διάρκεια θέασης ενός προγράμματος πατώντας το κουμπί εγγραφής μπορείτε να κάνετε εγγραφή του τρέχοντος προγράμματος, ενώ έχετε τη δυνατότητα να επιλέξετε εάν η εγγραφή θα είναι προσβάσιμη από τους άλλους Χρήστες επιλέγοντας το πεδίο «Κοινή Χρήση» (για τη χρήση αυτής της λειτουργικότητας στον ΟΤΕ TV Μέσω Δορυφόρου θα πρέπει να θέσετε τον αποκωδικοποιητή σας σε λειτουργία Hybrid).</p><p>Μπορείτε να διακόψετε μια εγγραφή σε εξέλιξη πατώντας για δεύτερη φορά το κουμπί εγγραφής ή το <i class=\"fa fa-square\" aria-hidden=\"true\"></i> . Εναλλακτικά με το πράσινο κουμπί μπορείτε να θέσετε/διακόψετε την εγγραφή του προγράμματος που παρακολουθείτε εκείνη την στιγμή ή να προγραμματίσετε/διακόψετε την εγγραφή μιας σειράς ή να ορίσετε μια εγγραφή βάσει χρονικής διάρκειας. Η εγγραφή προγράμματος μπορεί να γίνει και μέσα από τον Ηλεκτρονικό Οδηγό Προγράμματος (EPG).</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if ($("#nohddAv").hasClass('hidden')=== false) {
		var msgstring = "<p>Απαραίτητη προϋπόθεση για να μπορέσετε να κάνετε εγγραφή στο πρόγραμμα που επιθυμείτε είναι η σύνδεση του αποκωδικοποιητή σας με έναν εξωτερικό σκληρό δίσκο.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if ($("#recFunctionality").hasClass('hidden')=== false) {
		var msgstring = "<p>Εξωτερικός σκληρός δίσκος->Σε περίπτωση που μια εγγραφή σας συμπέσει με μια άλλη προγραμματισμένη εγγραφή, δική σας ή κάποιου άλλου Χρήστη, θα λάβετε προειδοποιητικό μήνυμα διακοπής της τρέχουσας ή ακύρωσης της προγραμματισμένης εγγραφής.<br> Για stb-PVR μπορεί να γίνει η ταυτόχρονη εγγραφή και θέαση ή ακόμα και 2 εγγραφές.<br>Για την καλύτερη διαχείριση των εγγραφών σας αλλά και του αποθηκευτικού χώρου συνιστάται η Κοινή Χρήση των εγγραφών σας με τους υπόλοιπους Χρήστες (αφορά συνδέσεις OTE TV Μέσω Ευρυζωνικής Σύνδεσης και ΟΤΕ TV Μέσω Δορυφόρου σε λειτουργία Hybrid).</p><p> Στα δεξία αναφέρεται αν η εγγραφή είναι προγραμματισμένη η γίνεται εκείνη την στιγμή.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if ($("#rentalHistory").hasClass('hidden')=== false) {
		var msgstring = "<p>Ο Διαχειριστής έχει τη δυνατότητα να δει το σύνολο των τίτλων Cinema On Demand ή τα πακέτα ταινιών που έχουν ενοικιάσει όλοι οι Χρήστες από το μενού Λογαριασμός Χρήστη / Ιστορικό Ενοικιάσεων. Στο συγκεκριμένο μενού εμφανίζεται το σύνολο των ενοικιάσεων ανά μήνα, ταξινομημένες βάσει της ημερομηνίας ενοικίασης. Τέλος, στο συγκεκριμένο μενού μπορείτε να δείτε το υπόλοιπο της πίστωσής σας (credits), το οποίο μπορείτε να χρησιμοποιήσετε για μελλοντικές ενοικιάσεις ταινιών Cinema On Demand.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if ($("#messages").hasClass('hidden')=== false) {
		var msgstring = "<p>Ο ΟΤΕ ΤV έχει τη δυνατότητα να αποστέλλει ενημερωτικά μηνύματα σε όλους ή σε μεμονωμένους συνδρομητές, τα οποία αφορούν θέματα που μπορεί να τους ενδιαφέρουν (π.χ. νέες προσφορές, προσθήκες περιεχομένου), καθώς και τεχνικά θέματα (π.χ. προγραμματισμένες αναβαθμίσεις λογισμικού). Όταν λαμβάνετε ένα νέο μήνυμα, εμφανίζεται ένα «Φακελάκι» στο πάνω μέρος της οθόνης. Για να δείτε τα μηνύματα που σας έχουν αποσταλεί, επιλέξτε Λογαριασμό Χρήστη / Μηνύματα ή, εναλλακτικά, πατήστε το πλήκτρο με το φακελάκι στο τηλεχειριστήριό σας. Στη λίστα των μηνυμάτων εμφανίζεται ο τίτλος και η ημερομηνία αποστολής του μηνύματος. Για να διαβάσετε ένα μήνυμα, αρκεί να το επιλέξετε και να πιέσετε ΟΚ . Μπορείτε να επιλέξετε ένα ή περισσότερα μηνύματα πατώντας το κίτρινο κουμπί και να διαγράψετε οποιαδήποτε στιγμή ένα μήνυμα πατώντας το κόκκινο κουμπί.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#satSettings").hasClass('hidden')=== false) && ($("#stepOne").hasClass('hidden')=== false)) {
		var msgstring = "<p>Μέσα από τις Ρυθμίσεις Δορυφόρου μπορείτε να ορίσετε, όπως και κατά την αρχική εγκατάσταση, τις παραμέτρους του κεραιοσυστήματος που χρησιμοποιείτε για τη λήψη του ΟΤΕ TV Μέσω Δορυφόρου, καθώς και τον αναμεταδότη του δορυφόρου EUTELSAT 9B στον οποίο είστε συντονισμένοι. Συγκεκριμένα, μέσα από αυτό το μενού μπορείτε να προσδιορίσετε τον αριθμό και τον τύπο LNB καθώς και την θύρα DiSEqC στην οποία έχετε συνδέσει την κεραία που στοχεύει στο δορυφόρο EUTELSAT 9B ή και άλλους δορυφόρους που πιθανόν να έχετε επιλέξει.</p><p>Πατάμε ΟΚ στις ρυθμίσεις δορυφόρου και πάμε με το κάτω βέλος πλοήγησης στην επιβεβαίωση να γίνει μπλε.Εκεί πατάμε ΟΚ για το επόμενο βήμα.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#satSettings").hasClass('hidden')=== false) && ($("#stepTwo").hasClass('hidden')=== false)) {
		var msgstring = "<p>Πατάμε δεξία με τα βελάκια πλοήγησης και επιλέγουμε επιβεβάιωση αφού έχουμε επιλέξει τον αναμεταδότη που θέλουμε.Συνιστάται να μην αλλάζετε τον προεπιλεγμένο αναμεταδότη εκτός και αν σας ζητηθεί από την Εξυπηρέτηση Πελατών. Τυχόν αλλαγή του αναμεταδότη πιθανόν να επιφέρει απώλεια σήματος. προειδοποιητικό μήνυμα επιλέξτε «ΟΚ»</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else if (($("#satSettings").hasClass('hidden')=== false) && ($("#stepThree").hasClass('hidden')=== false)) {
		var msgstring = "<p>Αν δεν υπάρχει κάποια βλάβη στο κεραιοσύστημα μετά από μερικά δευτερόλεπτα, η «κλειδαριά» στο μέσο της οθόνης θα «κλειδώσει» και στο κάτω μέρος της οθόνης το πλήκτρο «ΟΚ» θα γίνει ενεργό.Αυτό σημαίνει ότι ο αποκωδικοποιητής έχει συντονιστεί με τον επιλεγμένο αναμεταδότη. Επιλέγοντας «ΟΚ» θα μεταβείτε στο πρώτο κανάλι της Λίστας Καναλιών όπως και κατά την αρχική εγκατάσταση.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else {
		var msgstring = "Καθώς παρακολουθείτε ένα ζωντανό πρόγραμμα, πατώντας το κουμπί εμφανίζεται ο Σύντομος Οδηγός Προγράμματος (mini-EPG) στον οποίο μπορείτε να δείτε πληροφορίες για το τρέχον και το επόμενο πρόγραμμα του επιλεγμένου καναλιού, όπως τον τίτλο του προγράμματος.";
		document.getElementById("agentMsg").innerHTML = msgstring;
	}
}

function showLogOut() {
	var msgstring = "<p>Για να αποσυνδεθείτε από το λογαριασμό σας ώστε να συνδεθεί κάποιος άλλος Χρήστης με τα δικά του στοιχεία, επιλέξτε Λογαριασμός Χρήστη / Αποσύνδεση.</p>";
	document.getElementById("agentMsg").innerHTML = msgstring;
}

function playButton() {
	if (livepauseconf) {
		var msgstring = "Πατώντας το κουμπί <i class=\"fa fa-play\" aria-hidden=\"true\"></i></button> μπορείτε να συνεχίσετε την προβολή του προγράμματος από το σημείο που σταματήσατε";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} else {
		var msgstring = "Play";
		document.getElementById("agentMsg").innerHTML = msgstring;
	} 
}

function livepauseStop() {
	lpStop = true;
	livepausechoices = false;
		$("#lpchoicespanel").addClass('hidden');
		$("#bStopButton").removeClass('hidden');
}
function livepauseff() {
		var msgstring = "Μπορείτε να μετακινηθείτε γρήγορα εμπρός στο πρόγραμμα με ταχύτητα έως χ24";
		document.getElementById("agentMsg").innerHTML = msgstring;
}
function livepausePlay() {
		var msgstring = "Πατώντας το κουμπί <i class=\"fa fa-play\" aria-hidden=\"true\"></i> μπορείτε να συνεχίσετε την προβολή του προγράμματος από το σημείο που σταματήσατε";
		document.getElementById("agentMsg").innerHTML = msgstring;
}
function livepausePause() {
		var msgstring = "Εφόσον έχετε συνδέσει έναν εξωτερικό σκληρό δίσκο στον αποκωδικοποιητή σας,έχετε τη δυνατότητα να «παγώσετε» προσωρινά το ζωντανό πρόγραμμα έως 120 λεπτά πατώντας το κουμπί <i class=\"fa fa-pause\" aria-hidden=\"true\"></i>.";
		document.getElementById("agentMsg").innerHTML = msgstring;
}
function livepausefb() {
		var msgstring = "Μπορείτε να μετακινηθείτε γρήγορα πίσω στο πρόγραμμα με ταχύτητα έως χ24";
		document.getElementById("agentMsg").innerHTML = msgstring;
}
function livepauseBlue() {
		var msgstring = "10 λεπτά πίσω";
		document.getElementById("agentMsg").innerHTML = msgstring;
}
function livepauseYellow() {
		var msgstring = "10 λεπτά μπροστά";
		document.getElementById("agentMsg").innerHTML = msgstring;
}

function reminder() {
		var msgstring = "Μπορείτε να ορίσετε «Υπενθύμιση» για ένα μελλοντικό πρόγραμμα";
		document.getElementById("agentMsg").innerHTML = msgstring;
}

function replayTVmsg() {
		var msgstring = "Πριν την προβολή οποιουδήποτε προγράμματος Replay TV ο αποκωδικοποιητής πραγματοποιεί έλεγχο της σύνδεσης DSL ώστε να διασφαλιστεί η απρόσκοπτη θέασή του. Εάν η ταχύτητα σύνδεσής σας δεν επαρκεί για την άμεση προβολή του προγράμματος ή εάν επιθυμείτε να το δείτε αργότερα (εντός του χρόνου δικαιωμάτων προβολής) και έχετε συνδέσει σκληρό δίσκο στον αποκωδικοποιητή σας, έχετε τη δυνατότητα να το αποθηκεύσετε προσωρινά στον σκληρό σας δίσκο επιλέγοντας «Λήψη».";
		document.getElementById("agentMsg").innerHTML = msgstring;
}

function seriesRecord() {
		var msgstring = "<p>Εμφανίζεται μόνο εάν το επιλεγμένο πρόγραμμα αποτελεί μέρος σειράς επείσοδίων.Η μορφή και η λειτουργεία που πανομοιότυπά με την κανονική εγγραφή.</p><p>Κατά τον προγραμματισμό εγγραφής προγράμματος ή σειράς μπορείτε να ορίσετε τη δυνατότητα εγγραφής επιπρόσθετου χρόνου (buffer time) πριν την έναρξη και μετά τη λήξη της εγγραφής από το μενού Ρυθμίσεις / Γενικές Ρυθμίσεις / Ρυθμίσεις Εγγραφών.</p>";
		document.getElementById("agentMsg").innerHTML = msgstring;
}

function programmStart() {
		var msgstring = "Εκκίνηση Επιλεγμένου προγράμματος.";
		document.getElementById("agentMsg").innerHTML = msgstring;
}

function shareDone() {
			var msgstring = "Μπορείτε να ενημερώσετε τους φίλους σας στο Facebook ή/και στο Twitter ότι παρακολουθείτε τη συγκεκριμένη ταινία στον OTE TV επιλέγοντας «Κοινοποίηση». Αυτό προϋποθέτει ότι έχετε συνδέσει το λογαριασμό κοινωνικής δικτύωσής σας με την υπηρεσία.";
			document.getElementById("agentMsg").innerHTML = msgstring;
}

function changedPin() {
			var msgstring = "Επιτυχής Αλλαγή κωδικού PIN";
			document.getElementById("agentMsg").innerHTML = msgstring;
}

function changeCredentialsConfirm() {
	var msgstring = "Επιτυχής Αλλαγή Στοιχείων";
		document.getElementById("agentMsg").innerHTML = msgstring;
}

function watchARecord() {
	var msgstring = "Ενώ είμαστε πάνω σε μία εγγραφή εμφανίζονται πληροφορίες για αυτήν στα δεξιά. Πατώντας το ΟΚ πάνω σε μία εγγραφή άμα είναι ολοκληρωμένη χωρίς προβλήματα, αρχίζει η προβολή της επιλεγμένης εγγραφής ή επιλογή για να σταματήσει αν είναι σε εξέλιξη";
		document.getElementById("agentMsg").innerHTML = msgstring;
}

function watchADownload() {
	var msgstring = "Για προβολή πατήστε ΟΚ. Οι λήψεις είναι διαθέσιμες για προβολή, εφόσον δεν έχουν λήξει τα σχετικά δικαιώματα πρόσβασης (έως 48 ώρες μετά την ενοικίαση των ταινιών Cinema On Demand και έως 48 ώρες από την αρχική προβολή τους για τα προγράμματα REPLAY TV).";
		document.getElementById("agentMsg").innerHTML = msgstring;
}

function cancelAseries() {
	var msgstring = "Ενώ είμαστε πάνω σε μία σειρά, μας δίνεται η εξής επιλογή για να ακυρώσουμε την εγγραφή μελλοντικών επισοδείων.";
		document.getElementById("agentMsg").innerHTML = msgstring;
}

function cancelADownload() {
	var msgstring = "Ενώ είμαστε πάνω σε μία λήψη, μας δίνεται η δυνατότητα να την ακυρώσουμε.";
		document.getElementById("agentMsg").innerHTML = msgstring;
}

function lpExit() {
	$("#livepause").addClass('hidden');
	$("#bStopButton").addClass('hidden');
	livepauseconf = false;
	lpStop = false;
	var msgstring = "Συντονιστήκατε στο ζωντανό πρόγραμμα.";
	document.getElementById("agentMsg").innerHTML = msgstring;
}

function lpContinue() {
	$("#bStopButton").addClass('hidden');
	livepauseconf = true;
	lpStop = false;
}

function greek() {
    document.getElementById("greek").checked = true;
	document.getElementById("english").checked = false;
}

function english() {
    document.getElementById("english").checked = true;
	document.getElementById("greek").checked = false;
}

function horizontal() {
    document.getElementById("horizontal").checked = true;
	document.getElementById("vertical").checked = false;
}

function vertical() {
    document.getElementById("vertical").checked = true;
	document.getElementById("horizontal").checked = false;
}

function yesShowSubs() {
    document.getElementById("yesShowSubs").checked = true;
	document.getElementById("noShowSubs").checked = false;
}

function noShowSubs() {
    document.getElementById("noShowSubs").checked = true;
	document.getElementById("yesShowSubs").checked = false;
}

function engSound() {
    document.getElementById("engSound").checked = true;
	document.getElementById("grSound").checked = false;
	document.getElementById("originalSound").checked = false;
}

function grSound() {
    document.getElementById("grSound").checked = true;
	document.getElementById("engSound").checked = false;
	document.getElementById("originalSound").checked = false;
}

function originalSound() {
    document.getElementById("originalSound").checked = true;
	document.getElementById("grSound").checked = false;
	document.getElementById("engSound").checked = false;
}

function stereoType() {
    document.getElementById("stereoType").checked = true;
	document.getElementById("monoType").checked = false;
	document.getElementById("multiType").checked = false;
}

function multiType() {
    document.getElementById("multiType").checked = true;
	document.getElementById("monoType").checked = false;
	document.getElementById("stereoType").checked = false;
}

function monoType() {
    document.getElementById("monoType").checked = true;
	document.getElementById("multiType").checked = false;
	document.getElementById("stereoType").checked = false;
}

function typicalFourToThree() {
    document.getElementById("typicalFourToThree").checked = true;
	document.getElementById("typicalSixteenToNine").checked = false;
	document.getElementById("highSevenTwentyPi").checked = false;
	document.getElementById("highTenEighty").checked = false;
	document.getElementById("highTenEightyPi").checked = false;
}

function typicalSixteenToNine() {
    document.getElementById("typicalSixteenToNine").checked = true;
	document.getElementById("typicalFourToThree").checked = false;
	document.getElementById("highSevenTwentyPi").checked = false;
	document.getElementById("highTenEighty").checked = false;
	document.getElementById("highTenEightyPi").checked = false;
}

function highSevenTwentyPi() {
    document.getElementById("highSevenTwentyPi").checked = true;
	document.getElementById("typicalFourToThree").checked = false;
	document.getElementById("typicalSixteenToNine").checked = false;
	document.getElementById("highTenEighty").checked = false;
	document.getElementById("highTenEightyPi").checked = false;
}

function highTenEighty() {
    document.getElementById("highTenEighty").checked = true;
	document.getElementById("typicalFourToThree").checked = false;
	document.getElementById("typicalSixteenToNine").checked = false;
	document.getElementById("highSevenTwentyPi").checked = false;
	document.getElementById("highTenEightyPi").checked = false;
}

function highTenEightyPi() {
    document.getElementById("highTenEightyPi").checked = true;
	document.getElementById("highTenEighty").checked = false;
	document.getElementById("highSevenTwentyPi").checked = false;
	document.getElementById("typicalSixteenToNine").checked = false;
	document.getElementById("typicalFourToThree").checked = false;
}

function rgb() {
    document.getElementById("rgb").checked = true;
	document.getElementById("composite").checked = false;
}

function composite() {
    document.getElementById("composite").checked = true;
	document.getElementById("rgb").checked = false;
}


function fullScreen() {
    document.getElementById("fullScreen").checked = true;
	document.getElementById("normalScreen").checked = false;
}

function normalScreen() {
    document.getElementById("normalScreen").checked = true;
	document.getElementById("fullScreen").checked = false;
}

function pvrMode() {
    document.getElementById("pvrMode").checked = true;
	document.getElementById("extHDDmode").checked = false;
	document.getElementById("noHDDmode").checked = false;
var msgstring = "<p>Αλλαγή λειτουργείας Emulator σε PVR(Personal video recorder): Οι εγγραφές σβήστηκαν.";
document.getElementById("agentMsg").innerHTML = msgstring;
recording = false;
recording2 = false;
$("#recImg").addClass('hidden');
$("#recImg2").addClass('hidden');
}

function extHDDmode() {
    document.getElementById("extHDDmode").checked = true;
	document.getElementById("pvrMode").checked = false;
	document.getElementById("noHDDmode").checked = false;
var msgstring = "<p>Αλλαγή λειτουργείας Emulator σε External Hard Disk: Οι εγγραφές σβήστηκαν.";
document.getElementById("agentMsg").innerHTML = msgstring;
recording = false;
recording2 = false;
$("#recImg").addClass('hidden');
$("#recImg2").addClass('hidden');
}

function noHDDmode() {
    document.getElementById("noHDDmode").checked = true;
	document.getElementById("pvrMode").checked = false;
	document.getElementById("extHDDmode").checked = false;
var msgstring = "<p>Αλλαγή λειτουργείας Emulator σε λειτουργεία χωρίς δίσκο: Οι εγγραφές σβήστηκαν.";
document.getElementById("agentMsg").innerHTML = msgstring;
recording = false;
recording2 = false;
$("#recImg").addClass('hidden');
$("#recImg2").addClass('hidden');
}

function rec1cb() {
    document.getElementById("rec1cb").checked = true;
	document.getElementById("rec2cb").checked = false;
}

function rec2cb() {
    document.getElementById("rec2cb").checked = true;
	document.getElementById("rec1cb").checked = false;
}

/**/
function filterAll() {
    document.getElementById("filterAll").checked = true;
	document.getElementById("filterRecording").checked = false;
	document.getElementById("filterCompleted").checked = false;
	document.getElementById("filterProgrammed").checked = false;
	document.getElementById("filterInPause").checked = false;
	document.getElementById("filterAFailed").checked = false;
	$("#myRecs1").removeClass("hidden");
	$("#myRecs2").removeClass("hidden");
	$("#myRecs3").removeClass("hidden");
	$("#myRecs4").removeClass("hidden");
	$("#fake1").addClass("hidden");
	$("#fake2").addClass("hidden");
	$("#fake3").addClass("hidden");
	$("#fake4").addClass("hidden");
}

function filterRecording() {
    document.getElementById("filterAll").checked = false;
	document.getElementById("filterRecording").checked = true;
	document.getElementById("filterCompleted").checked = false;
	document.getElementById("filterProgrammed").checked = false;
	document.getElementById("filterInPause").checked = false;
	document.getElementById("filterAFailed").checked = false;
	$("#myRecs1").removeClass("hidden");
	$("#myRecs2").addClass("hidden");
	$("#myRecs3").addClass("hidden");
	$("#myRecs4").addClass("hidden");
	$("#fake1").removeClass("hidden");
	$("#fake2").removeClass("hidden");
	$("#fake3").removeClass("hidden");
	$("#fake4").addClass("hidden");
}

function filterCompleted() {
    document.getElementById("filterAll").checked = false;
	document.getElementById("filterRecording").checked = false;
	document.getElementById("filterCompleted").checked = true;
	document.getElementById("filterProgrammed").checked = false;
	document.getElementById("filterInPause").checked = false;
	document.getElementById("filterAFailed").checked = false;
	$("#myRecs1").addClass("hidden");
	$("#myRecs2").removeClass("hidden");
	$("#myRecs3").removeClass("hidden");
	$("#myRecs4").removeClass("hidden");
	$("#fake1").removeClass("hidden");
	$("#fake2").addClass("hidden");
	$("#fake3").addClass("hidden");
	$("#fake4").addClass("hidden");
}

function filterProgrammed() {
    document.getElementById("filterAll").checked = false;
	document.getElementById("filterRecording").checked = false;
	document.getElementById("filterCompleted").checked = false;
	document.getElementById("filterProgrammed").checked = true;
	document.getElementById("filterInPause").checked = false;
	document.getElementById("filterAFailed").checked = false;
	$("#myRecs1").addClass("hidden");
	$("#myRecs2").addClass("hidden");
	$("#myRecs3").addClass("hidden");
	$("#myRecs4").addClass("hidden");
	$("#fake1").removeClass("hidden");
	$("#fake2").removeClass("hidden");
	$("#fake3").removeClass("hidden");
	$("#fake4").removeClass("hidden");
}

function filterInPause() {
    document.getElementById("filterAll").checked = false;
	document.getElementById("filterRecording").checked = false;
	document.getElementById("filterCompleted").checked = false;
	document.getElementById("filterProgrammed").checked = false;
	document.getElementById("filterInPause").checked = true;
	document.getElementById("filterAFailed").checked = false;
	$("#myRecs1").addClass("hidden");
	$("#myRecs2").addClass("hidden");
	$("#myRecs3").addClass("hidden");
	$("#myRecs4").addClass("hidden");
	$("#fake1").removeClass("hidden");
	$("#fake2").removeClass("hidden");
	$("#fake3").removeClass("hidden");
	$("#fake4").removeClass("hidden");
}

function filterAFailed() {
    document.getElementById("filterAll").checked = false;
	document.getElementById("filterRecording").checked = false;
	document.getElementById("filterCompleted").checked = false;
	document.getElementById("filterProgrammed").checked = false;
	document.getElementById("filterInPause").checked = false;
	document.getElementById("filterAFailed").checked = true;
	$("#myRecs1").addClass("hidden");
	$("#myRecs2").addClass("hidden");
	$("#myRecs3").addClass("hidden");
	$("#myRecs4").addClass("hidden");
	$("#fake1").removeClass("hidden");
	$("#fake2").removeClass("hidden");
	$("#fake3").removeClass("hidden");
	$("#fake4").removeClass("hidden");
}

/**/
function filterAllDL() {
    document.getElementById("filterAllDL").checked = true;
	document.getElementById("filterDownloading").checked = false;
	document.getElementById("filterCompletedDL").checked = false;
	document.getElementById("filterProgrammedDL").checked = false;
	document.getElementById("filterInPauseDL").checked = false;
	document.getElementById("filterAFailedDL").checked = false;
	$("#myDLS1").removeClass("hidden");
	$("#myDLS2").removeClass("hidden");
	$("#fake1DL").addClass("hidden");
	$("#fake2DL").addClass("hidden");
}

function filterDownloading() {
    document.getElementById("filterAllDL").checked = false;
	document.getElementById("filterDownloading").checked = true;
	document.getElementById("filterCompletedDL").checked = false;
	document.getElementById("filterProgrammedDL").checked = false;
	document.getElementById("filterInPauseDL").checked = false;
	document.getElementById("filterAFailedDL").checked = false;
	$("#myDLS1").removeClass("hidden");
	$("#myDLS2").addClass("hidden");
	$("#fake1DL").removeClass("hidden");
	$("#fake2DL").addClass("hidden");
}

function filterCompletedDL() {
    document.getElementById("filterAllDL").checked = false;
	document.getElementById("filterDownloading").checked = false;
	document.getElementById("filterCompletedDL").checked = true;
	document.getElementById("filterProgrammedDL").checked = false;
	document.getElementById("filterInPauseDL").checked = false;
	document.getElementById("filterAFailedDL").checked = false;
	$("#myDLS1").addClass("hidden");
	$("#myDLS2").addClass("hidden");
	$("#fake1DL").removeClass("hidden");
	$("#fake2DL").removeClass("hidden");
}

function filterProgrammedDL() {
    document.getElementById("filterAllDL").checked = false;
	document.getElementById("filterDownloading").checked = false;
	document.getElementById("filterCompletedDL").checked = false;
	document.getElementById("filterProgrammedDL").checked = true;
	document.getElementById("filterInPauseDL").checked = false;
	document.getElementById("filterAFailedDL").checked = false;
	$("#myDLS1").addClass("hidden");
	$("#myDLS2").removeClass("hidden");
	$("#fake1DL").removeClass("hidden");
	$("#fake2DL").addClass("hidden");
}

function filterInPauseDL() {
    document.getElementById("filterAllDL").checked = false;
	document.getElementById("filterDownloading").checked = false;
	document.getElementById("filterCompletedDL").checked = false;
	document.getElementById("filterProgrammedDL").checked = false;
	document.getElementById("filterInPauseDL").checked = true;
	document.getElementById("filterAFailedDL").checked = false;
	$("#myDLS1").addClass("hidden");
	$("#myDLS2").addClass("hidden");
	$("#fake1DL").removeClass("hidden");
	$("#fake2DL").removeClass("hidden");
}

function filterAFailedDL() {
    document.getElementById("filterAllDL").checked = false;
	document.getElementById("filterDownloading").checked = false;
	document.getElementById("filterCompletedDL").checked = false;
	document.getElementById("filterProgrammedDL").checked = false;
	document.getElementById("filterInPauseDL").checked = false;
	document.getElementById("filterAFailedDL").checked = true;
	$("#myDLS1").addClass("hidden");
	$("#myDLS2").addClass("hidden");
	$("#fake1DL").removeClass("hidden");
	$("#fake2DL").removeClass("hidden");
}

function ote1Tr() {
    document.getElementById("ote1Tr").checked = true;
	document.getElementById("ote2Tr").checked = false;
	document.getElementById("ote3Tr").checked = false;
	document.getElementById("ote4Tr").checked = false;
	document.getElementById("ote5Tr").checked = false;
	document.getElementById("ote6Tr").checked = false;
	document.getElementById("ote7Tr").checked = false;
	document.getElementById("ote8Tr").checked = false;
}

function ote2Tr() {
    document.getElementById("ote1Tr").checked = false;
	document.getElementById("ote2Tr").checked = true;
	document.getElementById("ote3Tr").checked = false;
	document.getElementById("ote4Tr").checked = false;
	document.getElementById("ote5Tr").checked = false;
	document.getElementById("ote6Tr").checked = false;
	document.getElementById("ote7Tr").checked = false;
	document.getElementById("ote8Tr").checked = false;
}
function ote3Tr() {
    document.getElementById("ote1Tr").checked = false;
	document.getElementById("ote2Tr").checked = false;
	document.getElementById("ote3Tr").checked = true;
	document.getElementById("ote4Tr").checked = false;
	document.getElementById("ote5Tr").checked = false;
	document.getElementById("ote6Tr").checked = false;
	document.getElementById("ote7Tr").checked = false;
	document.getElementById("ote8Tr").checked = false;
}
function ote4Tr() {
    document.getElementById("ote1Tr").checked = false;
	document.getElementById("ote2Tr").checked = false;
	document.getElementById("ote3Tr").checked = false;
	document.getElementById("ote4Tr").checked = true;
	document.getElementById("ote5Tr").checked = false;
	document.getElementById("ote6Tr").checked = false;
	document.getElementById("ote7Tr").checked = false;
	document.getElementById("ote8Tr").checked = false;
}
function ote5Tr() {
    document.getElementById("ote1Tr").checked = false;
	document.getElementById("ote2Tr").checked = false;
	document.getElementById("ote3Tr").checked = false;
	document.getElementById("ote4Tr").checked = false;
	document.getElementById("ote5Tr").checked = true;
	document.getElementById("ote6Tr").checked = false;
	document.getElementById("ote7Tr").checked = false;
	document.getElementById("ote8Tr").checked = false;
}
function ote6Tr() {
    document.getElementById("ote1Tr").checked = false;
	document.getElementById("ote2Tr").checked = false;
	document.getElementById("ote3Tr").checked = false;
	document.getElementById("ote4Tr").checked = false;
	document.getElementById("ote5Tr").checked = false;
	document.getElementById("ote6Tr").checked = true;
	document.getElementById("ote7Tr").checked = false;
	document.getElementById("ote8Tr").checked = false;
}
function ote7Tr() {
    document.getElementById("ote1Tr").checked = false;
	document.getElementById("ote2Tr").checked = false;
	document.getElementById("ote3Tr").checked = false;
	document.getElementById("ote4Tr").checked = false;
	document.getElementById("ote5Tr").checked = false;
	document.getElementById("ote6Tr").checked = false;
	document.getElementById("ote7Tr").checked = true;
	document.getElementById("ote8Tr").checked = false;
}
function ote8Tr() {
    document.getElementById("ote1Tr").checked = false;
	document.getElementById("ote2Tr").checked = false;
	document.getElementById("ote3Tr").checked = false;
	document.getElementById("ote4Tr").checked = false;
	document.getElementById("ote5Tr").checked = false;
	document.getElementById("ote6Tr").checked = false;
	document.getElementById("ote7Tr").checked = false;
	document.getElementById("ote8Tr").checked = true;
}


