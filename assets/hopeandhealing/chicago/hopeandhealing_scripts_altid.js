$(window).load(function(){
	$("img[src$='/images/help_Button.gif']").parent().hide();

	if(location.href.indexOf('/faf/reg_new/registerPre.asp')>0){
		$("td b:contains('Use Sphere login')").closest('tr').hide();
	}

	if(location.href.indexOf('/faf/reg_new/register.asp')>0){
		$("td.subheadertext b:contains('Fees')").closest('tr').hide();
		$("input[name='fees']").closest('table').parent().closest('tr').hide();
		$("#Table11").parent().css('padding','0');
		$("a.fafFormHelp").hide();
		$("ul.globalNav li.parentMenuItem:last").hide();
	}

	if(location.href.indexOf('/faf/login/partMenu.asp')>0){
		$("#myHQbody a:contains('Start here!')").parent().hide();
		$.cookie("uofc_loggedin","1",{path: '/', domain: '.kintera.org', expires: 24});
	}

	if(location.href.indexOf('&login=t') > 0) //user logged out
		$.cookie("uofc_loggedin","0",{path: '/', domain: '.kintera.org', expires: 24});

	if($.cookie('uofc_loggedin') == "1"){
		$('#headerLinks a:last-child').attr('href', "http://hopeandhealingnetwork.kintera.org/faf/login/partLogOut.asp?ievent=1089783&lis=0&kntae1089783=C3D71E8D9BE7496BB436ED6CACBDC830");
		$('#headerLinks a:last-child').html('LOG OUT'); //changes LOGIN link at top of page to LOG OUT, persists throughout thon until user logs out
	}

	if(location.href.indexOf('/faf/login/page_edit.asp')>0){
		$("img[src$='/images/buttons/previewsilver.gif']").closest('tr').hide().prev().hide();
	}


	if(location.href.indexOf('/faf/donorReg/donorPledge.asp')>0){
		updatedaysleft = setInterval("update_daysleft()",500);
	}


	if( $("#footer_outer").size()==0 ){
		$("#footer").wrap('<div id="footer_outer"></div>');
	}
	$("#footer_outer").appendTo("#wrapPage");


	$("#footer table.noprint").hide();
	$("#footer .footerCopyright").hide();

	if(location.href.indexOf('donorBilling.asp')>0){
		$("select[name='Field6079656']").closest('tr').hide();
		$("textarea[name='Field4708184']").closest('table').hide();
		var sid_to_credit = $("form[name='billingForm'] input[name='participantSupporterId']").val();
		var oldfunds = ["Pediatric Cancer Research","Ted Mullin Fund","Peds GI Social Work","General Pediatric Research","Comer Children's Hospital","Neuroblastoma Research"];
		$.ajax({
			dataType: 'jsonp',
			data: 'sid='+sid_to_credit,
			jsonp: 'jsonp_callback',
			url: '//alumnidev.uchicago.edu/assets/hopeandhealing/chicago/get_custom_profile.php',
			success: function (data) {
				//console.log('success');
				console.log(data);
				if(data.cause_value!=''){
					$("select[name='Field6079656'] option[value='"+data.cause_value+"']").attr('selected',true);
					var fund_name = data.cause_value.replace("\\","");
					$("textarea[name='Field4708184']").val(fund_name+'|'+data.fund_id+'|'+$("input:hidden[name='participantFullName']").val());

					//console.log('Special Instructions: ' + $("[name='Field4708184']").val());
					//console.log(oldfunds);
				}
				if($.inArray(fund_name, oldfunds) !== -1){
					console.log("found");
					$("select[name='Field6079656'] option[value='Other']").attr('selected',true);
				}
				console.log("sid_to_credit: " + sid_to_credit);
				console.log("fund_name: " + fund_name);
				console.log('Special Instructions: ' + $("[name='Field4708184']").val());
				console.log('Fund: ' + $("[name='Field6079656']").val());
			}
		});
	}

	if(location.href.indexOf('/reg_new/register.asp')>0){
		$("textarea[name='Field4708184']").closest('table').hide();
		var fund_ids_array = new Array;

//old funds
		fund_ids_array["Pediatric Cancer Research"] = "33390-4250-1";
		fund_ids_array["Ted Mullin Fund"] = "33523-4250-3";
		fund_ids_array["Peds GI Social Work"] = "33567-4250-3";
		fund_ids_array["General Pediatric Research"] = "33894-4250-1";
		fund_ids_array["Comer Children\'s Hospital"] = "33983-6112-1";
		fund_ids_array["Neuroblastoma Research"] = "33710-4250-3";

//new funds
		fund_ids_array["Academic Pediatrics"] = "33122-4250-3";
		fund_ids_array["Adoption Center"] = "33455-4250-2";
		fund_ids_array["Allergy and Immunology"] = "33761-4250-4";
		fund_ids_array["Cancer and Blood Diseases"] = "33390-4250-1";
		fund_ids_array["Cardiology"] = "33198-4250-3";
		fund_ids_array["Child Life and Family Education"] = "33702-6112-1";
		fund_ids_array["Child Protective Services"] = "33896-4250-3";
		fund_ids_array["Congenital Anomalies"] = "33951-4250-3";
		fund_ids_array["Critical Care"] = "33901-4250-2";
		fund_ids_array["Developmental and Behavioral Pediatrics"] = "33758-4250-2";
		fund_ids_array["Emergency Medicine"] = "33750-4250-3";
		fund_ids_array["Endocrinology/Diabetes"] = "33903-4250-2";
		fund_ids_array["Gastroenterology, Hepatology, and Nutrition"] = "33684-4250-4";
		fund_ids_array["General Support"] = "33415-4250-2";
		fund_ids_array["Infectious Disease"] = "33907-4250-4";
		fund_ids_array["Kennedy Intellectual and Developmental Disabilities Research Center"] = "33660-4250-4";
		fund_ids_array["Kidney Disease"] = "33912-4250-3";
		fund_ids_array["Neonatal Intensive Care Unit (NICU)"] = "30268-6112-1";
		fund_ids_array["Neonatology"] = "33926-4250-3";
		fund_ids_array["Neurology"] = "33658-4250-2";
		fund_ids_array["Nursing"] = "30269-6112-1";
		fund_ids_array["Pediatric Intensive Care Unit (PICU)"] = "30267-6112-1";
		fund_ids_array["Pulmonary and Sleep Medicine"] = "33498-4250-2";
		fund_ids_array["Social Work"] = "30270-6112-1";
		fund_ids_array["Sports Medicine"] = "33919-4250-1";
		fund_ids_array["Surgery"] = "33007-4250-3";
		fund_ids_array["Other"] = "39899-BSD1-1";
		$("select[name='Field6079656']").change(function(){
			$("textarea[name='Field4708184']").val($("option:selected",this).text()+'|'+fund_ids_array[$("option:selected",this).val()]);

		});
	}

	if(location.href.indexOf('/faf/update/updateProfile.asp')>0){
		$("textarea[name='custom_4708184']").closest('tr').hide().prev().hide();
	}

	if(location.href.indexOf('/faf/error/errorEvent.asp')>0){
		$("h3:contains('You are already an event')").text("You are already a Hope & Healing Network participant");

		$('div.FAFBodyTable table td').contents().filter(function(){return this.nodeType === 3}).wrap('<span />');

		$('div.FAFBodyTable table td span:contains("You are already a Hope")').text("You are already a Hope & Healing Network participant. To register another user, please ");
	}

});




function update_daysleft(){
	if( $("#contentTertiary").size()>0 && $("span.dataRowLabel:contains('Days Left To Give')").size()>0 ){
		$("span.dataRowLabel:contains('Days Left To Give')").parent().hide();
		clearInterval(updatedaysleft);
	}
}
