
<table>

<!--donation form-->
<tr><td align="center">
<!--javascript common lib-->
<script src="/CommonLib/lib/INC_jsFields.js" Language="JavaScript"></script>

<form name="SUPPORTER1160635" action="https://www.kintera.org/site/apps/ka/sd/donorcustom.asp?c=**cindex**&b=**bindex**" method="POST" onsubmit="return CheckForm1160635(this);" id="FormDonation">
<input type="hidden" value="" name="Reload" id="Reload" />
<input type="hidden" value="https://www.kintera.org/site/apps/ka/sd/donorcustom.asp?c=**cindex**&b=**bindex**" name="Caller" id="Caller" />
<input type="hidden" value="" name="ParticipantSupporterID" id="ParticipantSupporterID" />
<input type="hidden" value="" name="CreditTeamID" id="CreditTeamID" />
<input type="hidden" value="" name="SupporterID" id="SupporterID" />
<input type="hidden" value="" name="LoginID" id="LoginID" />
<input type="hidden" value="5" name="FormID" id="FormID" />
<input type="hidden" value="" name="RelationSupporterID" id="RelationSupporterID" />
<input value="Y" name="Individual" id="Individual" type="hidden"><input type="hidden" value="" name="PledgeLevelID" id="PledgeLevelIDY"><table width="100%" id="TableRequiredInfo"><tr><td align="left"><font  class='Alert' >* required information</font></td></tr></table>
<table  cellspacing=0 cellpadding='' border=0 class='CTtableout'  width="100%" id="TableOuter"><!--1-->
	<tr><td>
	<table  cellspacing=1 cellpadding=3 border=0 class='CTtablein'  width="100%" id="TableInner"><!--2-->
	<tr><td  class='CTtitle'  colspan=3><span id="donation_type_copy"><b><font  class='CTtablein' >Donation</font></b></span></td></tr>
	<input type="hidden" value="" name="Tribute" id="Tribute" /><tr  class='CTsubtitle' ><td  colspan=3><b><font  class='CTtablein' >Select Gift Frequency and Amount</font></b></td></tr>
		<tr  class='CTeven' ><td colspan=3><b><font  class='CT' >
		<input  type=radio name="RecurringOption" value="N" onclick="CheckRecurring(form,'N');" checked id="RecurringOptionN" />
		I would like to make a one-time gift for the following amount:
		</font></b></td></tr>

		<tr  class='CTodd' ><td align=left width=30% nowrap>
		<font  class='CT' ><label for="Amount">Enter Donation Amount Here</label>:</font><font  class='Alert' >*</font>
		</td><td colspan=2><font  class='CT' >
		$<input type="text" size="12" maxlength="12" name="Amount" value="" onblur="return CheckAmtLevel(form, this);"  id="Amount" />
		</font></td></tr>

		<tr  class='CTeven' ><td colspan=3><b><font  class='CT' >
		<input type=radio name="RecurringOption" value="Y" onclick="CheckRecurring(form,'Y');"  id="RecurringOptionY">
		I would like to make a recurring gift.
		</font></b></td></tr>
		<tr  class='CTeven' ><td colspan=3><input type="hidden" value="10/20/2016" name="RecurringDate" id="RecurringDate">
	<table id="TableRecurringGift">
	<tr><td width="15%">&nbsp;</td><td><font  class='CT' >Gift Amount</font><font  class='Alert' >*</font></td>
	<td><font  class='CT' >Payment Frequency</font></td></tr>
	<tr><td>&nbsp;</td><td nowrap><font  class='CT' >
	$<input type="text" size=12 maxlength=12 name="RecurringAmount" value="" disabled id="RecurringAmount">
	</font></td><td><font  class='CT' >
	<input type="hidden" name="NumberOfPayments" value="1">

	<select name="BillingScheduleID" size=1 disabled id="BillingScheduleID">

			<option value="1004" >Monthly</option>

			<option value="1006" >Annually</option>

	</select>
	</font></td></tr>
	<tr><td colspan="4"><font  class='CT' >NOTE: This transaction will count as the first payment toward your total gift amount.</font></td></tr></table></td></tr>
		</table><!--designation--><table  cellspacing=1 cellpadding=3 border=0 class='CTtablein'  width="100%"><tr  class='CTsubtitle' ><td  colspan=3><b><font  class='CTtablein' >Donor Designations</font></b></td></tr><tr  class='CTeven' ><td colspan=3><font  class='CT' >Select a designation for your contribution</font><font  class='Alert' >*</font></td></tr>
	<input type="hidden" value="1" name="DesignationOption" id="DesignationOption">
	<tr  class='CTodd' ><td width=30%>&nbsp;</td><td colspan="2">
	<select name="BeneficiaryID"><option value=''>-- please make a selection --</option>
	<option  value="377434">Alumni House</option><option  value="377456">Athletics</option><option  value="377458">Biological Sciences Graduate Division</option><option  value="377460">Center for the Study of Race, Politics, and Culture</option><option  value="377462">Center in Paris</option><option  value="377464">Chapin Hall</option><option  value="377466">Chicago Booth: The Annual Fund</option><option  value="377468">College: College Fund</option><option  value="377470">Collegiate Scholars Program</option><option  value="377472">Court Theatre</option><option  value="377474">Divinity School Annual Fund</option><option  value="377476">Environmental Studies Internship Fund</option><option  value="377478">Friends of Jewish Studies</option><option  value="377480">Center for the Study of Gender and Sexuality</option><option  value="377482">Graduate Fund for the Humanities</option><option  value="377484">Graduate Fund for the Physical Sciences</option><option  value="377486">Graduate Fund for the Social Sciences</option><option  value="377488">Graduate Fund for the University</option><option  value="377490">Graham School of General Studies</option><option  value="377492">Harris School of Public Policy Studies</option><option  value="377494">Human Rights Internships</option><option  value="377496">International House</option><option  value="377498">Laboratory Schools Academic Support for Teachers</option><option  value="377500">Laboratory Schools Alumni Challenge Scholarship Fund</option><option  value="377502">Laboratory Schools Annual Fund</option><option  value="377504">Laboratory Schools Campaign Fund</option><option  value="377506">Laboratory Schools Class of 1953 Scholarship Fund</option><option  value="377508">Laboratory Schools Class of 1954 Endowed Scholarship Fund</option><option  value="377510">Laboratory Schools Class of 1977 Scholarship Fund</option><option  value="377512">Laboratory Schools Class of 2007 Scholarship Fund</option><option  value="377514">Laboratory Schools Connections</option><option  value="377516">Laboratory Schools Library Fund</option><option  value="377518">Laboratory Schools Maroons Athletic Fund</option><option  value="377520">Laboratory Schools Music, Theater and Visual Arts</option><option  value="377522">Laboratory Schools Professional Development</option><option  value="377524">Laboratory School Class of 2013 Scholarship Fund</option><option  value="377526">Laboratory Schools Student Financial Aid</option><option  value="377528">Law School: Annual Fund</option><option  value="377530">Law School: Class Reunion Gift</option><option  value="377532">Law School: Mandel Legal Clinic</option><option  value="377534">Library Fund: Annual Fund</option><option  value="377536">Library Society: Membership</option><option  value="377538">Logan Center for the Arts</option><option  value="377540">Master of Arts Program in the Social Sciences (MAPSS)</option><option  value="377542">Becker Friedman Institute</option><option  value="377544">College: Odyssey Scholarship Program</option><option  value="377546">Office of Special Programs</option><option  value="377548">Oriental Institute: Annual Membership</option><option  value="377550">Oriental Institute: Gallery Renovation</option><option  value="377552">Oriental Institute: General Fund</option><option  value="377554">Other - Please Specify</option><option  value="377556">College: Parents Fund</option><option  value="377558">Pritzker School of Medicine</option><option  value="377560">Rockefeller Chapel Music Commissions</option><option  value="377564">Rockefeller Memorial Chapel</option><option  value="377566">College: Senior Class Gift</option><option  value="377568">Smart Museum: SmartPartner</option><option  value="377570">Smart Museum: Membership</option><option  value="377572">SSA Fund</option><option  value="377574">WHPK Radio Station</option><option  value="377576">University Fund</option><option  value="377578">University of Chicago Magazine</option><option  value="377580">University of Chicago Presents</option><option  value="377582">Urban Education Institute</option><option  value="377584">Women's Board</option><option  value="380958">Chicago Booth Full Time MBA Class Gift</option><option  value="380962">Department of English</option><option  value="380964">Chicago Booth Full Time MBA Class Gift - Global Visibility</option><option  value="380966">Chicago Booth Executive MBA Class Gift - EMBA Faculty Endowment</option><option  value="380968">Chicago Booth Evening and Weekend Graduate Gift</option><option  value="381671">Chicago Booth Full Time MBA Class Gift - Career Services</option><option  value="382470">Office of LGBTQ Student Life</option><option  value="382505">Chapin Hall - The Harold A. Richman Fund</option><option  value="383196">Department of Music</option><option  value="383928">Parents Fund for Housing Activities</option><option  value="384679">Center for Latin American Studies</option><option  value="384689">Leo Strauss Center</option><option  value="384751">Civic Knowledge Project</option><option  value="385069">Women's Board Scholarship (Pioneer) Fund</option><option  value="385340">Class of 2000 College 10th Reunion Dorm Fund</option><option  value="385354">Disaster Relief Response</option><option  value="385828">College: Dean's Fund for Student Life</option><option  value="385875">UChicago for Haiti Relief</option><option  value="385877">Chicago Men's A Cappella-CMAC</option><option  value="385879">Chicago Debate Team</option><option  value="385881">Folklore Society</option><option  value="385883">Organization of Black Students-OBS</option><option  value="385885">Center for Leadership and Involvement</option><option  value="386224">Medical Alumni Annual Fund</option><option  value="386226">University Community Service Center (General Fund)</option><option  value="386228">University Community Service Center (Summer Links)</option><option  value="386233">Medical Center reunion expense account</option><option  value="386468">Celiac Disease Center</option><option  value="386470">Celiac Center Mouse Model Research Fund</option><option  value="386993">Emergency Medicine Disaster Relief</option><option  value="387713">Comer Childrens Hospital</option><option  value="387715">Comer - Toy Story 3</option><option  value="388509">Chicago Booth School of Business</option><option  value="388511">College Fund</option><option  value="388857">Graduate Student Aid</option><option  value="388859">Institute for Molecular Engineering</option><option  value="388861">Center in Beijing</option><option  value="388863">Chicago Arts</option><option  value="388865">Strategic Investment in Faculty</option><option  value="389895">Ian Cuming Memorial Scholarship</option><option  value="390167">Physical Sciences Dean's Discretionary Fund</option><option  value="390760">Pritzker School of Medicine: Alumni Annual Fund</option><option  value="390762">Pritzker School of Medicine: Joseph J. Ceithaml Scholarship Fund</option><option  value="390764">Pritzker School of Medicine: General Scholarship Fund</option><option  value="390766">Laboratory Schools Financial Aid Fund</option><option  value="390768">Parents Fund for Student Opportunities</option><option  value="390829">Sereno Gift Account, To support Paul Sereno's research</option><option  value="391102">University of Chicago Press Donations</option></select></td></tr><input type=hidden name='BeneficiaryFund377434' value='47889'><input type=hidden name='BeneficiaryFund377456' value='47889'><input type=hidden name='BeneficiaryFund377458' value='47889'><input type=hidden name='BeneficiaryFund377460' value='47889'><input type=hidden name='BeneficiaryFund377462' value='47889'><input type=hidden name='BeneficiaryFund377464' value='47889'><input type=hidden name='BeneficiaryFund377466' value='47889'><input type=hidden name='BeneficiaryFund377468' value='47889'><input type=hidden name='BeneficiaryFund377470' value='47889'><input type=hidden name='BeneficiaryFund377472' value='47889'><input type=hidden name='BeneficiaryFund377474' value='47889'><input type=hidden name='BeneficiaryFund377476' value='47889'><input type=hidden name='BeneficiaryFund377478' value='47889'><input type=hidden name='BeneficiaryFund377480' value='47889'><input type=hidden name='BeneficiaryFund377482' value='47889'><input type=hidden name='BeneficiaryFund377484' value='47889'><input type=hidden name='BeneficiaryFund377486' value='47889'><input type=hidden name='BeneficiaryFund377488' value='47889'><input type=hidden name='BeneficiaryFund377490' value='47889'><input type=hidden name='BeneficiaryFund377492' value='47889'><input type=hidden name='BeneficiaryFund377494' value='47889'><input type=hidden name='BeneficiaryFund377496' value='47889'><input type=hidden name='BeneficiaryFund377498' value='47889'><input type=hidden name='BeneficiaryFund377500' value='47889'><input type=hidden name='BeneficiaryFund377502' value='47889'><input type=hidden name='BeneficiaryFund377504' value='47889'><input type=hidden name='BeneficiaryFund377506' value='47889'><input type=hidden name='BeneficiaryFund377508' value='47889'><input type=hidden name='BeneficiaryFund377510' value='47889'><input type=hidden name='BeneficiaryFund377512' value='47889'><input type=hidden name='BeneficiaryFund377514' value='47889'><input type=hidden name='BeneficiaryFund377516' value='47889'><input type=hidden name='BeneficiaryFund377518' value='47889'><input type=hidden name='BeneficiaryFund377520' value='47889'><input type=hidden name='BeneficiaryFund377522' value='47889'><input type=hidden name='BeneficiaryFund377524' value='47889'><input type=hidden name='BeneficiaryFund377526' value='47889'><input type=hidden name='BeneficiaryFund377528' value='47889'><input type=hidden name='BeneficiaryFund377530' value='47889'><input type=hidden name='BeneficiaryFund377532' value='47889'><input type=hidden name='BeneficiaryFund377534' value='47889'><input type=hidden name='BeneficiaryFund377536' value='47889'><input type=hidden name='BeneficiaryFund377538' value='47889'><input type=hidden name='BeneficiaryFund377540' value='47889'><input type=hidden name='BeneficiaryFund377542' value='47889'><input type=hidden name='BeneficiaryFund377544' value='47889'><input type=hidden name='BeneficiaryFund377546' value='47889'><input type=hidden name='BeneficiaryFund377548' value='47889'><input type=hidden name='BeneficiaryFund377550' value='47889'><input type=hidden name='BeneficiaryFund377552' value='47889'><input type=hidden name='BeneficiaryFund377554' value='47889'><input type=hidden name='BeneficiaryFund377556' value='47889'><input type=hidden name='BeneficiaryFund377558' value='47889'><input type=hidden name='BeneficiaryFund377560' value='47889'><input type=hidden name='BeneficiaryFund377564' value='47889'><input type=hidden name='BeneficiaryFund377566' value='47889'><input type=hidden name='BeneficiaryFund377568' value='47889'><input type=hidden name='BeneficiaryFund377570' value='47889'><input type=hidden name='BeneficiaryFund377572' value='47889'><input type=hidden name='BeneficiaryFund377574' value='47889'><input type=hidden name='BeneficiaryFund377576' value='47889'><input type=hidden name='BeneficiaryFund377578' value='47889'><input type=hidden name='BeneficiaryFund377580' value='47889'><input type=hidden name='BeneficiaryFund377582' value='47889'><input type=hidden name='BeneficiaryFund377584' value='47889'><input type=hidden name='BeneficiaryFund380958' value='47889'><input type=hidden name='BeneficiaryFund380962' value='47889'><input type=hidden name='BeneficiaryFund380964' value='47889'><input type=hidden name='BeneficiaryFund380966' value='47889'><input type=hidden name='BeneficiaryFund380968' value='47889'><input type=hidden name='BeneficiaryFund381671' value='47889'><input type=hidden name='BeneficiaryFund382470' value='47889'><input type=hidden name='BeneficiaryFund382505' value='47889'><input type=hidden name='BeneficiaryFund383196' value='47889'><input type=hidden name='BeneficiaryFund383928' value='47889'><input type=hidden name='BeneficiaryFund384679' value='47889'><input type=hidden name='BeneficiaryFund384689' value='47889'><input type=hidden name='BeneficiaryFund384751' value='47889'><input type=hidden name='BeneficiaryFund385069' value='47889'><input type=hidden name='BeneficiaryFund385340' value='47889'><input type=hidden name='BeneficiaryFund385354' value='47889'><input type=hidden name='BeneficiaryFund385828' value='47889'><input type=hidden name='BeneficiaryFund385875' value='47889'><input type=hidden name='BeneficiaryFund385877' value='47889'><input type=hidden name='BeneficiaryFund385879' value='47889'><input type=hidden name='BeneficiaryFund385881' value='47889'><input type=hidden name='BeneficiaryFund385883' value='47889'><input type=hidden name='BeneficiaryFund385885' value='47889'><input type=hidden name='BeneficiaryFund386224' value='47889'><input type=hidden name='BeneficiaryFund386226' value='47889'><input type=hidden name='BeneficiaryFund386228' value='47889'><input type=hidden name='BeneficiaryFund386233' value='47889'><input type=hidden name='BeneficiaryFund386468' value='47889'><input type=hidden name='BeneficiaryFund386470' value='47889'><input type=hidden name='BeneficiaryFund386993' value='47889'><input type=hidden name='BeneficiaryFund387713' value='47889'><input type=hidden name='BeneficiaryFund387715' value='47889'><input type=hidden name='BeneficiaryFund388509' value='47889'><input type=hidden name='BeneficiaryFund388511' value='47889'><input type=hidden name='BeneficiaryFund388857' value='47889'><input type=hidden name='BeneficiaryFund388859' value='47889'><input type=hidden name='BeneficiaryFund388861' value='47889'><input type=hidden name='BeneficiaryFund388863' value='47889'><input type=hidden name='BeneficiaryFund388865' value='47889'><input type=hidden name='BeneficiaryFund389895' value='47889'><input type=hidden name='BeneficiaryFund390167' value='47889'><input type=hidden name='BeneficiaryFund390760' value='47889'><input type=hidden name='BeneficiaryFund390762' value='47889'><input type=hidden name='BeneficiaryFund390764' value='47889'><input type=hidden name='BeneficiaryFund390766' value='47889'><input type=hidden name='BeneficiaryFund390768' value='47889'><input type=hidden name='BeneficiaryFund390829' value='47889'><input type=hidden name='BeneficiaryFund391102' value='47889'></table><table  cellspacing=1 cellpadding=3 border=0 class='CTtablein' width='100%'><tr  class='CTsubtitle' ><td  colspan=3><b><font  class='CTtablein' >Donor Information</font></b></td></tr>
<!--Standard SupporterFields section begin-->
<tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' >First Name:</font><font  class='Alert' >*</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength="250" name="first_name" value="" ></font></td></tr><input type="hidden" name="lock_first_name" value=""><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' >Middle Name:</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength="20" name="middle_name" value="" ></font></td></tr><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' >Last Name:</font><font  class='Alert' >*</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength="250" name="last_name" value="" ></font></td></tr><input type="hidden" name="lock_last_name" value=""><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' >Primary Email:</font><font  class='Alert' >*</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength="100" name="email_address" value="" ></font></td></tr><input type="hidden" name="lock_email_address" value=""><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' >Address Line 1:</font><font  class='Alert' >*</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength="80" name="address_line_1" value="" ></font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' >Address Line 2:</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength="80" name="address_line_2" value="" ></font></td></tr><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' >City:</font><font  class='Alert' >*</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength="30" name="city" value="" ></font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' >State:</font><font  class='Alert' >*</font></td><td   align=left colspan=2><font  class='CT' ><select name="state" size=1 title="State" ><option value="">-- please make a selection --</option><option value="AL" >Alabama</option><option value="AK" >Alaska</option><option value="AS" >American Samoa</option><option value="AZ" >Arizona</option><option value="AR" >Arkansas</option><option value="AA" >Armed Forces Americas</option><option value="AE" >Armed Forces Europe</option><option value="AP" >Armed Forces Pacific</option><option value="CA" >California</option><option value="CO" >Colorado</option><option value="CT" >Connecticut</option><option value="DE" >Delaware</option><option value="DC" >District of Columbia</option><option value="FM" >F.S. Micronesia</option><option value="FL" >Florida</option><option value="GA" >Georgia</option><option value="GU" >Guam </option><option value="HI" >Hawaii</option><option value="ID" >Idaho</option><option value="IL" selected>Illinois</option><option value="IN" >Indiana</option><option value="IA" >Iowa</option><option value="KS" >Kansas</option><option value="KY" >Kentucky</option><option value="LA" >Louisiana</option><option value="ME" >Maine</option><option value="MH" >Marshall Islands</option><option value="MD" >Maryland</option><option value="MA" >Massachusetts</option><option value="MI" >Michigan</option><option value="MN" >Minnesota</option><option value="MS" >Mississippi</option><option value="MO" >Missouri</option><option value="MT" >Montana</option><option value="NE" >Nebraska</option><option value="NV" >Nevada</option><option value="NH" >New Hampshire</option><option value="NJ" >New Jersey</option><option value="NM" >New Mexico</option><option value="NY" >New York</option><option value="NC" >North Carolina</option><option value="ND" >North Dakota</option><option value="MP" >Northern Mariana Islands</option><option value="OH" >Ohio</option><option value="OK" >Oklahoma</option><option value="OR" >Oregon</option><option value="PW" >Palau</option><option value="PA" >Pennsylvania</option><option value="PR" >Puerto Rico</option><option value="RI" >Rhode Island</option><option value="SC" >South Carolina</option><option value="SD" >South Dakota</option><option value="TN" >Tennessee</option><option value="TX" >Texas</option><option value="UT" >Utah</option><option value="VT" >Vermont</option><option value="VI" >Virgin Islands</option><option value="VA" >Virginia</option><option value="WA" >Washington</option><option value="WV" >West Virginia</option><option value="WI" >Wisconsin</option><option value="WY" >Wyoming</option><option value="XX" >Not in USA</option></select></font></td></tr><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' >ZIP/Postal Code:</font><font  class='Alert' >*</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength=10 name="zip" value="" onblur="return checkZip(this);" ></font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' >Country:</font><font  class='Alert' >*</font></td><td   align=left colspan=2><font  class='CT' ><select name="country" size=1 title="Country" ><option value="">-- please make a selection --</option><option value="AF" >Afghanistan</option><option value="AX" >Aland Islands</option><option value="AL" >Albania</option><option value="DZ" >Algeria</option><option value="AS" >American Samoa</option><option value="AD" >Andorra</option><option value="AO" >Angola</option><option value="AI" >Anguilla</option><option value="AQ" >Antarctica</option><option value="AG" >Antigua and Barbuda</option><option value="AR" >Argentina</option><option value="AM" >Armenia</option><option value="AW" >Aruba</option><option value="AU" >Australia</option><option value="AT" >Austria</option><option value="AZ" >Azerbaijan</option><option value="BS" >Bahamas</option><option value="BH" >Bahrain</option><option value="BD" >Bangladesh</option><option value="BB" >Barbados</option><option value="BY" >Belarus</option><option value="BE" >Belgium</option><option value="BZ" >Belize</option><option value="BJ" >Benin</option><option value="BM" >Bermuda</option><option value="BT" >Bhutan</option><option value="BO" >Bolivia, Plurinational State of</option><option value="BA" >Bosnia and Herzegovina</option><option value="BW" >Botswana</option><option value="BV" >Bouvet Island</option><option value="BR" >Brazil</option><option value="IO" >British Indian Ocean Territory</option><option value="BN" >Brunei Darussalam</option><option value="BG" >Bulgaria</option><option value="BF" >Burkina Faso</option><option value="BI" >Burundi</option><option value="KH" >Cambodia</option><option value="CM" >Cameroon</option><option value="CA" >Canada</option><option value="CV" >Cape Verde</option><option value="KY" >Cayman Islands</option><option value="CF" >Central African Republic</option><option value="TD" >Chad</option><option value="CL" >Chile</option><option value="CN" >China</option><option value="CX" >Christmas Island</option><option value="CC" >Cocos (Keeling) Islands</option><option value="CO" >Colombia</option><option value="KM" >Comoros</option><option value="CG" >Congo</option><option value="CD" >Congo, The Democratic Republic of the</option><option value="CK" >Cook Islands</option><option value="CR" >Costa Rica</option><option value="CI" >Cote d'Ivoire</option><option value="HR" >Croatia</option><option value="CU" >Cuba</option><option value="CY" >Cyprus</option><option value="CZ" >Czech Republic</option><option value="DK" >Denmark</option><option value="DJ" >Djibouti</option><option value="DM" >Dominica</option><option value="DO" >Dominican Republic</option><option value="EC" >Ecuador</option><option value="EG" >Egypt</option><option value="SV" >El Salvador</option><option value="GQ" >Equatorial Guinea</option><option value="ER" >Eritrea</option><option value="EE" >Estonia</option><option value="ET" >Ethiopia</option><option value="FK" >Falkland Islands (Malvinas)</option><option value="FO" >Faroe Islands</option><option value="FJ" >Fiji</option><option value="FI" >Finland</option><option value="FR" >France</option><option value="GF" >French Guiana</option><option value="PF" >French Polynesia</option><option value="TF" >French Southern Territories</option><option value="GA" >Gabon</option><option value="GM" >Gambia</option><option value="GE" >Georgia</option><option value="DE" >Germany</option><option value="GH" >Ghana</option><option value="GI" >Gibraltar</option><option value="GR" >Greece</option><option value="GL" >Greenland</option><option value="GD" >Grenada</option><option value="GP" >Guadeloupe</option><option value="GU" >Guam</option><option value="GT" >Guatemala</option><option value="GG" >Guernsey</option><option value="GN" >Guinea</option><option value="GW" >Guinea-Bissau</option><option value="GY" >Guyana</option><option value="HT" >Haiti</option><option value="HM" >Heard Island and McDonald Islands</option><option value="VA" >Holy See (Vatican City State)</option><option value="HN" >Honduras</option><option value="HK" >Hong Kong</option><option value="HU" >Hungary</option><option value="IS" >Iceland</option><option value="IN" >India</option><option value="ID" >Indonesia</option><option value="IR" >Iran, Islamic Republic of</option><option value="IQ" >Iraq</option><option value="IE" >Ireland</option><option value="IM" >Isle of Man</option><option value="IL" >Israel</option><option value="IT" >Italy</option><option value="JM" >Jamaica</option><option value="JP" >Japan</option><option value="JE" >Jersey</option><option value="JO" >Jordan</option><option value="KZ" >Kazakhstan</option><option value="KE" >Kenya</option><option value="KI" >Kiribati</option><option value="KP" >Korea, Democratic People's Republic of</option><option value="KR" >Korea, Republic of</option><option value="KW" >Kuwait</option><option value="KG" >Kyrgyzstan</option><option value="LA" >Lao People's Democratic Republic</option><option value="LV" >Latvia</option><option value="LB" >Lebanon</option><option value="LS" >Lesotho</option><option value="LR" >Liberia</option><option value="LY" >Libyan Arab Jamahiriya</option><option value="LI" >Liechtenstein</option><option value="LT" >Lithuania</option><option value="LU" >Luxembourg</option><option value="MO" >Macao</option><option value="MK" >Macedonia, The Former Yugoslav Republic of</option><option value="MG" >Madagascar</option><option value="MW" >Malawi</option><option value="MY" >Malaysia</option><option value="MV" >Maldives</option><option value="ML" >Mali</option><option value="MT" >Malta</option><option value="MH" >Marshall Islands</option><option value="MQ" >Martinique</option><option value="MR" >Mauritania</option><option value="MU" >Mauritius</option><option value="YT" >Mayotte</option><option value="MX" >Mexico</option><option value="FM" >Micronesia, Federated States of</option><option value="MD" >Moldova, Republic of</option><option value="MC" >Monaco</option><option value="MN" >Mongolia</option><option value="ME" >Montenegro</option><option value="MS" >Montserrat</option><option value="MA" >Morocco</option><option value="MZ" >Mozambique</option><option value="MM" >Myanmar</option><option value="NA" >Namibia</option><option value="NR" >Nauru</option><option value="NP" >Nepal</option><option value="NL" >Netherlands</option><option value="AN" >Netherlands Antilles</option><option value="NC" >New Caledonia</option><option value="NZ" >New Zealand</option><option value="NI" >Nicaragua</option><option value="NE" >Niger</option><option value="NG" >Nigeria</option><option value="NU" >Niue</option><option value="NF" >Norfolk Island</option><option value="MP" >Northern Mariana Islands</option><option value="NO" >Norway</option><option value="OM" >Oman</option><option value="PK" >Pakistan</option><option value="PW" >Palau</option><option value="PS" >Palestinian Territories</option><option value="PA" >Panama</option><option value="PG" >Papua New Guinea</option><option value="PY" >Paraguay</option><option value="PE" >Peru</option><option value="PH" >Philippines</option><option value="PN" >Pitcairn</option><option value="PL" >Poland</option><option value="PT" >Portugal</option><option value="PR" >Puerto Rico</option><option value="QA" >Qatar</option><option value="RE" >Reunion</option><option value="RO" >Romania</option><option value="RU" >Russian Federation</option><option value="RW" >Rwanda</option><option value="BL" >Saint Barthelemy</option><option value="SH" >Saint Helena</option><option value="KN" >Saint Kitts and Nevis</option><option value="LC" >Saint Lucia</option><option value="MF" >Saint Martin</option><option value="PM" >Saint Pierre and Miquelon</option><option value="VC" >Saint Vincent and the Grenadines</option><option value="WS" >Samoa</option><option value="SM" >San Marino</option><option value="ST" >Sao Tome and Principe</option><option value="SA" >Saudi Arabia</option><option value="SN" >Senegal</option><option value="RS" >Serbia</option><option value="SC" >Seychelles</option><option value="SL" >Sierra Leone</option><option value="SG" >Singapore</option><option value="SK" >Slovakia</option><option value="SI" >Slovenia</option><option value="SB" >Solomon Islands</option><option value="SO" >Somalia</option><option value="ZA" >South Africa</option><option value="GS" >South Georgia and the South Sandwich Islands</option><option value="ES" >Spain</option><option value="LK" >Sri Lanka</option><option value="SD" >Sudan</option><option value="SR" >Suriname</option><option value="SJ" >Svalbard and Jan Mayen</option><option value="SZ" >Swaziland</option><option value="SE" >Sweden</option><option value="CH" >Switzerland</option><option value="SY" >Syrian Arab Republic</option><option value="TW" >Taiwan</option><option value="TJ" >Tajikistan</option><option value="TZ" >Tanzania, United Republic of</option><option value="TH" >Thailand</option><option value="TL" >Timor-Leste</option><option value="TG" >Togo</option><option value="TK" >Tokelau</option><option value="TO" >Tonga</option><option value="TT" >Trinidad and Tobago</option><option value="TN" >Tunisia</option><option value="TR" >Turkey</option><option value="TM" >Turkmenistan</option><option value="TC" >Turks and Caicos Islands</option><option value="TV" >Tuvalu</option><option value="UG" >Uganda</option><option value="UA" >Ukraine</option><option value="AE" >United Arab Emirates</option><option value="GB" >United Kingdom</option><option value="US" selected>United States</option><option value="UM" >United States Minor Outlying Islands</option><option value="UY" >Uruguay</option><option value="UZ" >Uzbekistan</option><option value="VU" >Vanuatu</option><option value="VE" >Venezuela, Bolivarian Republic of</option><option value="VN" >Viet Nam</option><option value="VG" >Virgin Islands, British</option><option value="VI" >Virgin Islands, U.S.</option><option value="WF" >Wallis and Futuna</option><option value="EH" >Western Sahara</option><option value="YE" >Yemen</option><option value="ZM" >Zambia</option><option value="ZW" >Zimbabwe</option></select></font></td></tr><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' >Phone:</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength="20" name="phone_number" value="" onblur="this.value=phoneCheck(this.value);" ></font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' >Gift Note:</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength="2000" name="gift_note" value="" ></font></td></tr><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' >County:</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength="100" name="county" value="" ></font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' >Student ID:</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength="6" name="Field6043142" value="" ></font></td></tr><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' >Shipping Address Line 1:</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength="40" name="Field6128808" value="" ></font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' >Shipping Address Line 2:</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength="40" name="Field6128809" value="" ></font></td></tr><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' >Shipping City:</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength="30" name="Field6128810" value="" ></font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' >Shipping State:</font></td><td   align=left colspan=2><font  class='CT' ><select name="Field6128811"  size="1" ><option value="">-- please make a selection --</option><option value="Alabama" >Alabama</option><option value="Alaska" >Alaska</option><option value="American Samoa" >American Samoa</option><option value="Arizona" >Arizona</option><option value="Arkansas" >Arkansas</option><option value="Armed Forces Africa" >Armed Forces Africa</option><option value="Armed Forces Americas" >Armed Forces Americas</option><option value="Armed Forces Canada" >Armed Forces Canada</option><option value="Armed Forces Europe" >Armed Forces Europe</option><option value="Armed Forces Middle East" >Armed Forces Middle East</option><option value="Armed Forces Pacific" >Armed Forces Pacific</option><option value="California" >California</option><option value="Colorado" >Colorado</option><option value="Connecticut" >Connecticut</option><option value="Delaware" >Delaware</option><option value="District of Columbia" >District of Columbia</option><option value="Federated States of Micronesia" >Federated States of Micronesia</option><option value="Florida" >Florida</option><option value="Georgia" >Georgia</option><option value="Guam" >Guam</option><option value="Hawaii" >Hawaii</option><option value="Idaho" >Idaho</option><option value="Illinois" >Illinois</option><option value="Indiana" >Indiana</option><option value="Iowa" >Iowa</option><option value="Kansas" >Kansas</option><option value="Kentucky" >Kentucky</option><option value="Louisiana" >Louisiana</option><option value="Maine" >Maine</option><option value="Marshall Islands" >Marshall Islands</option><option value="Maryland" >Maryland</option><option value="Massachusetts" >Massachusetts</option><option value="Michigan" >Michigan</option><option value="Minnesota" >Minnesota</option><option value="Mississippi" >Mississippi</option><option value="Missouri" >Missouri</option><option value="Montana" >Montana</option><option value="Nebraska" >Nebraska</option><option value="Nevada" >Nevada</option><option value="New Hampshire" >New Hampshire</option><option value="New Jersey" >New Jersey</option><option value="New Mexico" >New Mexico</option><option value="New York" >New York</option><option value="North Carolina" >North Carolina</option><option value="North Dakota" >North Dakota</option><option value="Northern Mariana Islands" >Northern Mariana Islands</option><option value="Ohio" >Ohio</option><option value="Oklahoma" >Oklahoma</option><option value="Oregon" >Oregon</option><option value="Palau" >Palau</option><option value="Pennsylvania" >Pennsylvania</option><option value="Puerto Rico" >Puerto Rico</option><option value="Rhode Island" >Rhode Island</option><option value="South Carolina" >South Carolina</option><option value="South Dakota" >South Dakota</option><option value="Tennessee" >Tennessee</option><option value="Texas" >Texas</option><option value="Utah" >Utah</option><option value="Vermont" >Vermont</option><option value="Virgin Islands" >Virgin Islands</option><option value="Virginia" >Virginia</option><option value="Washington" >Washington</option><option value="West Virginia" >West Virginia</option><option value="Wisconsin" >Wisconsin</option><option value="Wyoming" >Wyoming</option><option value="Not in USA" >Not in USA</option></select></font></td></tr><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' >Shipping Zip/Postal Code:</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength="10" name="Field6128812" value="" ></font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' >Shipping Province:</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength="128" name="Field6128813" value="" ></font></td></tr><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' >Shipping Country:</font></td><td   align=left colspan=2><font  class='CT' ><select name="Field6128814"  size="1" ><option value="">-- please make a selection --</option><option value="Albania" >Albania</option><option value="Algeria" >Algeria</option><option value="American Samoa" >American Samoa</option><option value="Andorra" >Andorra</option><option value="Angola" >Angola</option><option value="Anguilla" >Anguilla</option><option value="Antarctica" >Antarctica</option><option value="Antigua and Barbuda" >Antigua and Barbuda</option><option value="Argentina" >Argentina</option><option value="Armenia" >Armenia</option><option value="Aruba" >Aruba</option><option value="Australia" >Australia</option><option value="Austria" >Austria</option><option value="Azerbaijan" >Azerbaijan</option><option value="Bahamas" >Bahamas</option><option value="Bahrain" >Bahrain</option><option value="Bangladesh" >Bangladesh</option><option value="Barbados" >Barbados</option><option value="Belarus" >Belarus</option><option value="Belgium" >Belgium</option><option value="Belize" >Belize</option><option value="Benin" >Benin</option><option value="Bermuda" >Bermuda</option><option value="Bhutan" >Bhutan</option><option value="Bolivia" >Bolivia</option><option value="Bosnia and Herzegovina" >Bosnia and Herzegovina</option><option value="Botswana" >Botswana</option><option value="Bouvet Island" >Bouvet Island</option><option value="Brazil" >Brazil</option><option value="British Indian Ocean Territory" >British Indian Ocean Territory</option><option value="Brunei Darussalam" >Brunei Darussalam</option><option value="Bulgaria" >Bulgaria</option><option value="Burkina Faso" >Burkina Faso</option><option value="Burundi" >Burundi</option><option value="Cambodia" >Cambodia</option><option value="Cameroon" >Cameroon</option><option value="Canada" >Canada</option><option value="Cape Verde" >Cape Verde</option><option value="Cayman Islands" >Cayman Islands</option><option value="Central African Republic" >Central African Republic</option><option value="Chad" >Chad</option><option value="Chile" >Chile</option><option value="China" >China</option><option value="Christmas Island" >Christmas Island</option><option value="Cocos (Keeling) Islands" >Cocos (Keeling) Islands</option><option value="Colombia" >Colombia</option><option value="Comoros" >Comoros</option><option value="Congo" >Congo</option><option value="Congo, The Democratic Republic" >Congo, The Democratic Republic</option><option value="Cook Islands" >Cook Islands</option><option value="Costa Rica" >Costa Rica</option><option value="Cote d'Ivoire" >Cote d'Ivoire</option><option value="Croatia" >Croatia</option><option value="Cuba" >Cuba</option><option value="Cyprus" >Cyprus</option><option value="Czech Republic" >Czech Republic</option><option value="Denmark" >Denmark</option><option value="Djibouti" >Djibouti</option><option value="Dominica" >Dominica</option><option value="Dominican Republic" >Dominican Republic</option><option value="Ecuador" >Ecuador</option><option value="Egypt" >Egypt</option><option value="El Salvador" >El Salvador</option><option value="Equatorial Guinea" >Equatorial Guinea</option><option value="Eritrea" >Eritrea</option><option value="Estonia" >Estonia</option><option value="Ethiopia" >Ethiopia</option><option value="Falkland Islands (Malvinas)" >Falkland Islands (Malvinas)</option><option value="Faroe Islands" >Faroe Islands</option><option value="Fiji" >Fiji</option><option value="Finland" >Finland</option><option value="France" >France</option><option value="French Guiana" >French Guiana</option><option value="French Polynesia" >French Polynesia</option><option value="French Southern Territories" >French Southern Territories</option><option value="Gabon" >Gabon</option><option value="Gambia" >Gambia</option><option value="Georgia" >Georgia</option><option value="Germany" >Germany</option><option value="Ghana" >Ghana</option><option value="Gibraltar" >Gibraltar</option><option value="Greece" >Greece</option><option value="Greenland" >Greenland</option><option value="Grenada" >Grenada</option><option value="Guadeloupe" >Guadeloupe</option><option value="Guam" >Guam</option><option value="Guatemala" >Guatemala</option><option value="Guinea" >Guinea</option><option value="Guinea-Bissau" >Guinea-Bissau</option><option value="Guyana" >Guyana</option><option value="Haiti" >Haiti</option><option value="Heard Island and McDonald Islands" >Heard Island and McDonald Islands</option><option value="Honduras" >Honduras</option><option value="Hong Kong" >Hong Kong</option><option value="Hungary" >Hungary</option><option value="Iceland" >Iceland</option><option value="India" >India</option><option value="Indonesia" >Indonesia</option><option value="Iran,  Islamic Republic of" >Iran,  Islamic Republic of</option><option value="Iraq" >Iraq</option><option value="Ireland" >Ireland</option><option value="Israel" >Israel</option><option value="Italy" >Italy</option><option value="Jamaica" >Jamaica</option><option value="Japan" >Japan</option><option value="Jordan" >Jordan</option><option value="Kazakhstan" >Kazakhstan</option><option value="Kenya" >Kenya</option><option value="Kiribati" >Kiribati</option><option value="Korea,  Republic of" >Korea,  Republic of</option><option value="Korea, Democratic People's Republic of" >Korea, Democratic People's Republic of</option><option value="Kuwait" >Kuwait</option><option value="Kyrgyzstan" >Kyrgyzstan</option><option value="Lao People's Democratic Republic" >Lao People's Democratic Republic</option><option value="Latvia" >Latvia</option><option value="Lebanon" >Lebanon</option><option value="Lesotho" >Lesotho</option><option value="Liberia" >Liberia</option><option value="Libyan Arab Jamahiriya" >Libyan Arab Jamahiriya</option><option value="Liechtenstein" >Liechtenstein</option><option value="Lithuania" >Lithuania</option><option value="Luxembourg" >Luxembourg</option><option value="Macao" >Macao</option><option value="Macedonia, The Former Yugoslav Republic of" >Macedonia, The Former Yugoslav Republic of</option><option value="Madagascar" >Madagascar</option><option value="Malawi" >Malawi</option><option value="Malaysia" >Malaysia</option><option value="Maldives" >Maldives</option><option value="Mali" >Mali</option><option value="Malta" >Malta</option><option value="Marshall Islands" >Marshall Islands</option><option value="Martinique" >Martinique</option><option value="Mauritania" >Mauritania</option><option value="Mauritius" >Mauritius</option><option value="Mayotte" >Mayotte</option><option value="Mexico" >Mexico</option><option value="Micronesia, Federated States of" >Micronesia, Federated States of</option><option value="Moldova,  Republic of" >Moldova,  Republic of</option><option value="Monaco" >Monaco</option><option value="Mongolia" >Mongolia</option><option value="Montserrat" >Montserrat</option><option value="Morocco" >Morocco</option><option value="Mozambique" >Mozambique</option><option value="Myanmar" >Myanmar</option><option value="Namibia" >Namibia</option><option value="Nauru" >Nauru</option><option value="Nepal" >Nepal</option><option value="Netherlands" >Netherlands</option><option value="Netherlands Antilles" >Netherlands Antilles</option><option value="New Caledonia" >New Caledonia</option><option value="New Zealand" >New Zealand</option><option value="Nicaragua" >Nicaragua</option><option value="Niger" >Niger</option><option value="Nigeria" >Nigeria</option><option value="Niue" >Niue</option><option value="Norfolk Island" >Norfolk Island</option><option value="Northern Mariana Islands" >Northern Mariana Islands</option><option value="Norway" >Norway</option><option value="Oman" >Oman</option><option value="Pakistan" >Pakistan</option><option value="Palau" >Palau</option><option value="Palestine" >Palestine</option><option value="Panama" >Panama</option><option value="Papua New Guinea" >Papua New Guinea</option><option value="Paraguay" >Paraguay</option><option value="Peru" >Peru</option><option value="Philippines" >Philippines</option><option value="Pitcairn" >Pitcairn</option><option value="Poland" >Poland</option><option value="Portugal" >Portugal</option><option value="Puerto Rico" >Puerto Rico</option><option value="Qatar" >Qatar</option><option value="Reunion" >Reunion</option><option value="Romania" >Romania</option><option value="Russian Federation" >Russian Federation</option><option value="Rwanda" >Rwanda</option><option value="Saint Helena" >Saint Helena</option><option value="Saint Kitts and Nevis" >Saint Kitts and Nevis</option><option value="Saint Lucia" >Saint Lucia</option><option value="Saint Pierre and Miquelon" >Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines" >Saint Vincent and the Grenadines</option><option value="Samoa" >Samoa</option><option value="San Marino" >San Marino</option><option value="Sao Tome and Principe" >Sao Tome and Principe</option><option value="Saudi Arabia" >Saudi Arabia</option><option value="Senegal" >Senegal</option><option value="Serbia and Montenegro" >Serbia and Montenegro</option><option value="Seychelles" >Seychelles</option><option value="Sierra Leone" >Sierra Leone</option><option value="Singapore" >Singapore</option><option value="Slovakia" >Slovakia</option><option value="Slovenia" >Slovenia</option><option value="Solomon Islands" >Solomon Islands</option><option value="Somalia" >Somalia</option><option value="South Africa" >South Africa</option><option value="South Georgia and the South Sandwich Islands" >South Georgia and the South Sandwich Islands</option><option value="Spain" >Spain</option><option value="Sri Lanka" >Sri Lanka</option><option value="Sudan" >Sudan</option><option value="Suriname" >Suriname</option><option value="Svalbard and Jan Mayen" >Svalbard and Jan Mayen</option><option value="Swaziland" >Swaziland</option><option value="Sweden" >Sweden</option><option value="Switzerland" >Switzerland</option><option value="Syrian Arab Republic" >Syrian Arab Republic</option><option value="Taiwan" >Taiwan</option><option value="Tajikistan" >Tajikistan</option><option value="Tanzania, United Republic of" >Tanzania, United Republic of</option><option value="Thailand" >Thailand</option><option value="Timor-Leste" >Timor-Leste</option><option value="Togo" >Togo</option><option value="Tokelau" >Tokelau</option><option value="Tonga" >Tonga</option><option value="Trinidad and Tobago" >Trinidad and Tobago</option><option value="Tunisia" >Tunisia</option><option value="Turkey" >Turkey</option><option value="Turkmenistan" >Turkmenistan</option><option value="Turks and Caicos Islands" >Turks and Caicos Islands</option><option value="Tuvalu" >Tuvalu</option><option value="Uganda" >Uganda</option><option value="Ukraine" >Ukraine</option><option value="United Arab Emirates" >United Arab Emirates</option><option value="United Kingdom" >United Kingdom</option><option value="United States" >United States</option><option value="United States Minor Outlying Islands" >United States Minor Outlying Islands</option><option value="Uruguay" >Uruguay</option><option value="Uzbekistan" >Uzbekistan</option><option value="Vanuatu" >Vanuatu</option><option value="Vatican City" >Vatican City</option><option value="Venezuela" >Venezuela</option><option value="Vietnam" >Vietnam</option><option value="Virgin Islands, British" >Virgin Islands, British</option><option value="Virgin Islands, US" >Virgin Islands, US</option><option value="Wallis and Futuna" >Wallis and Futuna</option><option value="Western Sahara" >Western Sahara</option><option value="Yemen" >Yemen</option><option value="Zambia" >Zambia</option><option value="Zimbabwe" >Zimbabwe</option></select></font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' >Shipping First Name:</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength="50" name="Field6133811" value="" ></font></td></tr><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' >Shipping Last Name:</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength="50" name="Field6133812" value="" ></font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' >I am a(n):</font></td><td   align=left colspan=2><font  class='CT' ><select name="Field5086688"  size="1" ><option value="">-- please make a selection --</option><option value="alumna/us" >alumna/us</option><option value="parent" >parent</option><option value="student" >student</option><option value="friend" >friend</option></select></font></td></tr>
<script language="javascript">
function ProfileFieldLock(thisform) {
//#171974 Terry 2012/04/08
    if (thisform.FieldLock != null)
	    if (thisform.FieldLock.checked == true) {
		    if (thisform.first_name != null) {
		    //thisform.first_name.disabled = false;
		    thisform.first_name.readOnly = false;
            thisform.first_name.style.color = "black";
            }
		    if (thisform.last_name != null) {
		    //thisform.last_name.disabled = false;
		    thisform.last_name.readOnly = false;
            thisform.last_name.style.color = "black";
            }
		    if (thisform.email_address != null) {
		    //thisform.email_address.disabled = false;
		    thisform.email_address.readOnly = false;
            thisform.email_address.style.color = "black";
            }
	    }
	    else {
	        if (thisform.first_name != null) {
	            thisform.first_name.value = thisform.lock_first_name.value;
	         //   thisform.first_name.disabled = true;
	         	thisform.first_name.readOnly = true;
                thisform.first_name.style.color = "gray";
	        }
	        if (thisform.last_name != null) {
	            thisform.last_name.value = thisform.lock_last_name.value;
	         //   thisform.last_name.disabled = true;
	            thisform.last_name.readOnly = true;
                thisform.last_name.style.color = "gray";
	        }
	        if (thisform.email_address != null) {
	            thisform.email_address.value = thisform.lock_email_address.value;
	         //   thisform.email_address.disabled = true;
	            thisform.email_address.readOnly = true;
                thisform.email_address.style.color = "gray";
	        }
	    }
	return true;
}

</script>

<!--Standard SupporterFields section end-->
<tr  class='CTsubtitle' ><td  colspan=3><b><font  class='CTtablein' >Payment Information</font></b><a name="Payment"><br></a></td></tr>
<script language="javascript">
function getPaymentType() {
	var thisform
	thisform = document.SUPPORTER1160635;
	for(i=0; i < thisform.elements['paymentTypeSelector'].options.length; i++) {
		if(thisform.elements['paymentTypeSelector'].options[i].selected == true)
			return thisform.elements['paymentTypeSelector'].options[i].value;
	}
}
function ChangePay2() {
	ChangePay(getPaymentType());
}
function ChangePay3() {
	var paymentStatus
	var thisform
	thisform = document.SUPPORTER1160635;
	for(i=0; i < thisform.elements['PaymentStatusSelector'].options.length; i++) {
		if(thisform.elements['PaymentStatusSelector'].options[i].selected == true)
			paymentStatus = thisform.elements['PaymentStatusSelector'].options[i].value;
	}
	thisform.PaymentStatus.value = paymentStatus
	if (paymentStatus == "H") {
		thisform.PaymentType.value = "BILLME"
	} else {
		thisform.PaymentType.value = "CREDIT"
	}
	thisform.Reload.value='Y';
	thisform.action="https://www.kintera.org/site/apps/ka/sd/donorcustom.asp?c=**cindex**&b=**bindex**#Payment";
	thisform.submit();
}
</script>
<!--Payment section begin-->
<A name="Payment"></A>
<input type=hidden name="PaymentStatus" value="P"><input type=hidden name="PaymentType" value="CREDIT" id="PaymentType0"><script src="/CommonLib/lib/INC_jsCcValid1.js" Language="JavaScript"></script><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' ><label for='CardName'>Cardholder's Name</label>:</font><font  class='Alert' >*</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength=100 name="CardName" value="" id="CardName"></font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' ><label for='CardNumber'>Credit Card Number</label>:</font><font  class='Alert' >*</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size=20 maxlength=20 name="CardNumber" value="" id="CardNumber"><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' ><label for='CardSecNumber'>CVV Number</label>:</font><font  class='Alert' >*</font></td><td   align=left colspan=2><font  class='CT' >
	        <input type="text" size=8 maxlength=4 name="CardSecNumber" value="" id="CardSecNumber">
	        &nbsp;&nbsp;<a href="javascript:PopupCVV();">Explain</a>
	        <script language="JavaScript">
	        <!--
	        var c;
	        function PopupCVV() {
    		    c = window.open('/CommonLib/Field/cvv.htm','file','scrollbars=yes,resizable=yes,width=640,height=480,left=100,top=100');
		        c.focus();
	        }
	        function CloseCVV() {
		        if (c) {
			        if (!c.closed) c.close();
			        c = null;
		        }
	        }
	        window.onfocus = CloseCVV;
	        //-->
	        </script>
	        </font></td></tr></font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' >Credit Card Type:</font><font  class='Alert' >*</font></td><td   align=left colspan=2><font  class='CT' ><select name="CardType" size=1 title='Credit Card Types' onchange="ChangeCreditCardType(form, this);"><option  value="Visa">Visa</option><option  value="American Express">American Express</option><option  value="MasterCard">MasterCard</option><option  value="Discover">Discover</option></select>
	<script language="javascript">
	<!--
	function ChangeCreditCardType(thisform, pointer) {
	    var typeval;
	    for (var i=0; i<pointer.length; i++)
		    if (pointer[i].selected) typeval = pointer[i].value;
		var r = false;
		if (thisform.CardStart != null ||thisform.IssueNumber != null) {
		    if (typeval != "Maestro" && typeval != "Solo" && typeval != "Switch/UK Maestro") r = true;
		}
		else {
		    if (typeval == "Maestro" || typeval == "Solo" || typeval == "Switch/UK Maestro") r = true;
		}
		if (r) {
		    if(thisform.Reload != null) thisform.Reload.value='Y';
		    thisform.action="https://www.kintera.org/site/apps/ka/sd/donorcustom.asp?c=**cindex**&b=**bindex**&js=true#Payment";
		    thisform.submit();
		}
	}
	//-->
	</script>
	</font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1>&nbsp;</td><td   align=left colspan=2><font  class='CT' >&nbsp;<img src='/CommonLib/images/ccVisaLogo.gif' border=0> &nbsp;&nbsp;&nbsp;<img src='/CommonLib/images/ccAmericanExpressLogo.gif' border=0> &nbsp;&nbsp;&nbsp;<img src='/CommonLib/images/ccMasterCardLogo.gif' border=0> &nbsp;&nbsp;&nbsp;<img src='/CommonLib/images/ccDiscoverLogo.gif' border=0> &nbsp;&nbsp;&nbsp;</font></td></tr><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' >Credit Card Expiration:</font><font  class='Alert' >*</font></td><td   align=left colspan=2><font  class='CT' >
	<select name="CardExpmn" size="1" id="CardExpmn" title="Credit Card Expiration Month">
	<option value="01" >January</option>
	<option value="02" >February</option>
	<option value="03" >March</option>
	<option value="04" >April</option>
	<option value="05" >May</option>
	<option value="06" >June</option>
	<option value="07" >July</option>
	<option value="08" >August</option>
	<option value="09" >September</option>
	<option value="10" Selected>October</option>
	<option value="11" >November</option>
	<option value="12" >December</option>
	</select><select name="CardExpyr" size=1 id="CardExpyr" title="Credit Card Expiration Year">
	<option value="2016" selected>2016</option><option value="2017" >2017</option><option value="2018" >2018</option><option value="2019" >2019</option><option value="2020" >2020</option><option value="2021" >2021</option><option value="2022" >2022</option><option value="2023" >2023</option><option value="2024" >2024</option><option value="2025" >2025</option><option value="2026" >2026</option><option value="2027" >2027</option></select></font></td></tr>
<!--Payment section end--><tr  class='CTsubtitle' ><td  colspan=3><b><font  class='CTtablein' >Billing Information</font></b></td></tr>
		<tr  class='CTeven' ><td align=right width=30%><font  class='CT' >
		<input type="checkbox" name="CheckAddress" value="on" onclick="ChangeAddress(form);" id="CheckAddress">
		</font></td><td align=left colspan=2><font  class='CT' >
		If the billing information is the same as the contact information check this box.<br>
		If not please fill out the information below:<br>
		</font></td></tr>
		<tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' ><label for='BillAddress1'>Address Line 1</label>:</font><font  class='Alert' >*</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength=80 id="BillAddress1" name="BillAddress1" value=""></font></td></tr><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' ><label for='BillAddress2'>Address Line 2</label>:</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength=80 id="BillAddress2" name="BillAddress2" value=""></font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' ><label for='BillCity'>City</label>:</font><font  class='Alert' >*</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength=30 id="BillCity" name="BillCity" value=""></font></td></tr><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' >State:</font></td><td   align=left colspan=2><font  class='CT' ><select name="BillState" size=1 title="State" ><option value="">-- please make a selection --</option><option value="AL" >Alabama</option><option value="AK" >Alaska</option><option value="AS" >American Samoa</option><option value="AZ" >Arizona</option><option value="AR" >Arkansas</option><option value="AA" >Armed Forces Americas</option><option value="AE" >Armed Forces Europe</option><option value="AP" >Armed Forces Pacific</option><option value="CA" >California</option><option value="CO" >Colorado</option><option value="CT" >Connecticut</option><option value="DE" >Delaware</option><option value="DC" >District of Columbia</option><option value="FM" >F.S. Micronesia</option><option value="FL" >Florida</option><option value="GA" >Georgia</option><option value="GU" >Guam </option><option value="HI" >Hawaii</option><option value="ID" >Idaho</option><option value="IL" selected>Illinois</option><option value="IN" >Indiana</option><option value="IA" >Iowa</option><option value="KS" >Kansas</option><option value="KY" >Kentucky</option><option value="LA" >Louisiana</option><option value="ME" >Maine</option><option value="MH" >Marshall Islands</option><option value="MD" >Maryland</option><option value="MA" >Massachusetts</option><option value="MI" >Michigan</option><option value="MN" >Minnesota</option><option value="MS" >Mississippi</option><option value="MO" >Missouri</option><option value="MT" >Montana</option><option value="NE" >Nebraska</option><option value="NV" >Nevada</option><option value="NH" >New Hampshire</option><option value="NJ" >New Jersey</option><option value="NM" >New Mexico</option><option value="NY" >New York</option><option value="NC" >North Carolina</option><option value="ND" >North Dakota</option><option value="MP" >Northern Mariana Islands</option><option value="OH" >Ohio</option><option value="OK" >Oklahoma</option><option value="OR" >Oregon</option><option value="PW" >Palau</option><option value="PA" >Pennsylvania</option><option value="PR" >Puerto Rico</option><option value="RI" >Rhode Island</option><option value="SC" >South Carolina</option><option value="SD" >South Dakota</option><option value="TN" >Tennessee</option><option value="TX" >Texas</option><option value="UT" >Utah</option><option value="VT" >Vermont</option><option value="VI" >Virgin Islands</option><option value="VA" >Virginia</option><option value="WA" >Washington</option><option value="WV" >West Virginia</option><option value="WI" >Wisconsin</option><option value="WY" >Wyoming</option><option value="XX" >Not in USA</option></select></font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' ><label for='BillProvince'>Province</label>:</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength=20 id="BillProvince" name="BillProvince" value=""></font></td></tr><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' ><label for='BillZip'>ZIP/Postal Code</label>:</font><font  class='Alert' >*</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength=10 id="BillZip" name="BillZip" value="" onblur="return checkZip(this);"></font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' >Country:</font><font  class='Alert' >*</font></td><td   align=left colspan=2><font  class='CT' ><select name="BillCountry" size=1 title="Country" ><option value="">-- please make a selection --</option><option value="AF" >Afghanistan</option><option value="AX" >Aland Islands</option><option value="AL" >Albania</option><option value="DZ" >Algeria</option><option value="AS" >American Samoa</option><option value="AD" >Andorra</option><option value="AO" >Angola</option><option value="AI" >Anguilla</option><option value="AQ" >Antarctica</option><option value="AG" >Antigua and Barbuda</option><option value="AR" >Argentina</option><option value="AM" >Armenia</option><option value="AW" >Aruba</option><option value="AU" >Australia</option><option value="AT" >Austria</option><option value="AZ" >Azerbaijan</option><option value="BS" >Bahamas</option><option value="BH" >Bahrain</option><option value="BD" >Bangladesh</option><option value="BB" >Barbados</option><option value="BY" >Belarus</option><option value="BE" >Belgium</option><option value="BZ" >Belize</option><option value="BJ" >Benin</option><option value="BM" >Bermuda</option><option value="BT" >Bhutan</option><option value="BO" >Bolivia, Plurinational State of</option><option value="BA" >Bosnia and Herzegovina</option><option value="BW" >Botswana</option><option value="BV" >Bouvet Island</option><option value="BR" >Brazil</option><option value="IO" >British Indian Ocean Territory</option><option value="BN" >Brunei Darussalam</option><option value="BG" >Bulgaria</option><option value="BF" >Burkina Faso</option><option value="BI" >Burundi</option><option value="KH" >Cambodia</option><option value="CM" >Cameroon</option><option value="CA" >Canada</option><option value="CV" >Cape Verde</option><option value="KY" >Cayman Islands</option><option value="CF" >Central African Republic</option><option value="TD" >Chad</option><option value="CL" >Chile</option><option value="CN" >China</option><option value="CX" >Christmas Island</option><option value="CC" >Cocos (Keeling) Islands</option><option value="CO" >Colombia</option><option value="KM" >Comoros</option><option value="CG" >Congo</option><option value="CD" >Congo, The Democratic Republic of the</option><option value="CK" >Cook Islands</option><option value="CR" >Costa Rica</option><option value="CI" >Cote d'Ivoire</option><option value="HR" >Croatia</option><option value="CU" >Cuba</option><option value="CY" >Cyprus</option><option value="CZ" >Czech Republic</option><option value="DK" >Denmark</option><option value="DJ" >Djibouti</option><option value="DM" >Dominica</option><option value="DO" >Dominican Republic</option><option value="EC" >Ecuador</option><option value="EG" >Egypt</option><option value="SV" >El Salvador</option><option value="GQ" >Equatorial Guinea</option><option value="ER" >Eritrea</option><option value="EE" >Estonia</option><option value="ET" >Ethiopia</option><option value="FK" >Falkland Islands (Malvinas)</option><option value="FO" >Faroe Islands</option><option value="FJ" >Fiji</option><option value="FI" >Finland</option><option value="FR" >France</option><option value="GF" >French Guiana</option><option value="PF" >French Polynesia</option><option value="TF" >French Southern Territories</option><option value="GA" >Gabon</option><option value="GM" >Gambia</option><option value="GE" >Georgia</option><option value="DE" >Germany</option><option value="GH" >Ghana</option><option value="GI" >Gibraltar</option><option value="GR" >Greece</option><option value="GL" >Greenland</option><option value="GD" >Grenada</option><option value="GP" >Guadeloupe</option><option value="GU" >Guam</option><option value="GT" >Guatemala</option><option value="GG" >Guernsey</option><option value="GN" >Guinea</option><option value="GW" >Guinea-Bissau</option><option value="GY" >Guyana</option><option value="HT" >Haiti</option><option value="HM" >Heard Island and McDonald Islands</option><option value="VA" >Holy See (Vatican City State)</option><option value="HN" >Honduras</option><option value="HK" >Hong Kong</option><option value="HU" >Hungary</option><option value="IS" >Iceland</option><option value="IN" >India</option><option value="ID" >Indonesia</option><option value="IR" >Iran, Islamic Republic of</option><option value="IQ" >Iraq</option><option value="IE" >Ireland</option><option value="IM" >Isle of Man</option><option value="IL" >Israel</option><option value="IT" >Italy</option><option value="JM" >Jamaica</option><option value="JP" >Japan</option><option value="JE" >Jersey</option><option value="JO" >Jordan</option><option value="KZ" >Kazakhstan</option><option value="KE" >Kenya</option><option value="KI" >Kiribati</option><option value="KP" >Korea, Democratic People's Republic of</option><option value="KR" >Korea, Republic of</option><option value="KW" >Kuwait</option><option value="KG" >Kyrgyzstan</option><option value="LA" >Lao People's Democratic Republic</option><option value="LV" >Latvia</option><option value="LB" >Lebanon</option><option value="LS" >Lesotho</option><option value="LR" >Liberia</option><option value="LY" >Libyan Arab Jamahiriya</option><option value="LI" >Liechtenstein</option><option value="LT" >Lithuania</option><option value="LU" >Luxembourg</option><option value="MO" >Macao</option><option value="MK" >Macedonia, The Former Yugoslav Republic of</option><option value="MG" >Madagascar</option><option value="MW" >Malawi</option><option value="MY" >Malaysia</option><option value="MV" >Maldives</option><option value="ML" >Mali</option><option value="MT" >Malta</option><option value="MH" >Marshall Islands</option><option value="MQ" >Martinique</option><option value="MR" >Mauritania</option><option value="MU" >Mauritius</option><option value="YT" >Mayotte</option><option value="MX" >Mexico</option><option value="FM" >Micronesia, Federated States of</option><option value="MD" >Moldova, Republic of</option><option value="MC" >Monaco</option><option value="MN" >Mongolia</option><option value="ME" >Montenegro</option><option value="MS" >Montserrat</option><option value="MA" >Morocco</option><option value="MZ" >Mozambique</option><option value="MM" >Myanmar</option><option value="NA" >Namibia</option><option value="NR" >Nauru</option><option value="NP" >Nepal</option><option value="NL" >Netherlands</option><option value="AN" >Netherlands Antilles</option><option value="NC" >New Caledonia</option><option value="NZ" >New Zealand</option><option value="NI" >Nicaragua</option><option value="NE" >Niger</option><option value="NG" >Nigeria</option><option value="NU" >Niue</option><option value="NF" >Norfolk Island</option><option value="MP" >Northern Mariana Islands</option><option value="NO" >Norway</option><option value="OM" >Oman</option><option value="PK" >Pakistan</option><option value="PW" >Palau</option><option value="PS" >Palestinian Territories</option><option value="PA" >Panama</option><option value="PG" >Papua New Guinea</option><option value="PY" >Paraguay</option><option value="PE" >Peru</option><option value="PH" >Philippines</option><option value="PN" >Pitcairn</option><option value="PL" >Poland</option><option value="PT" >Portugal</option><option value="PR" >Puerto Rico</option><option value="QA" >Qatar</option><option value="RE" >Reunion</option><option value="RO" >Romania</option><option value="RU" >Russian Federation</option><option value="RW" >Rwanda</option><option value="BL" >Saint Barthelemy</option><option value="SH" >Saint Helena</option><option value="KN" >Saint Kitts and Nevis</option><option value="LC" >Saint Lucia</option><option value="MF" >Saint Martin</option><option value="PM" >Saint Pierre and Miquelon</option><option value="VC" >Saint Vincent and the Grenadines</option><option value="WS" >Samoa</option><option value="SM" >San Marino</option><option value="ST" >Sao Tome and Principe</option><option value="SA" >Saudi Arabia</option><option value="SN" >Senegal</option><option value="RS" >Serbia</option><option value="SC" >Seychelles</option><option value="SL" >Sierra Leone</option><option value="SG" >Singapore</option><option value="SK" >Slovakia</option><option value="SI" >Slovenia</option><option value="SB" >Solomon Islands</option><option value="SO" >Somalia</option><option value="ZA" >South Africa</option><option value="GS" >South Georgia and the South Sandwich Islands</option><option value="ES" >Spain</option><option value="LK" >Sri Lanka</option><option value="SD" >Sudan</option><option value="SR" >Suriname</option><option value="SJ" >Svalbard and Jan Mayen</option><option value="SZ" >Swaziland</option><option value="SE" >Sweden</option><option value="CH" >Switzerland</option><option value="SY" >Syrian Arab Republic</option><option value="TW" >Taiwan</option><option value="TJ" >Tajikistan</option><option value="TZ" >Tanzania, United Republic of</option><option value="TH" >Thailand</option><option value="TL" >Timor-Leste</option><option value="TG" >Togo</option><option value="TK" >Tokelau</option><option value="TO" >Tonga</option><option value="TT" >Trinidad and Tobago</option><option value="TN" >Tunisia</option><option value="TR" >Turkey</option><option value="TM" >Turkmenistan</option><option value="TC" >Turks and Caicos Islands</option><option value="TV" >Tuvalu</option><option value="UG" >Uganda</option><option value="UA" >Ukraine</option><option value="AE" >United Arab Emirates</option><option value="GB" >United Kingdom</option><option value="US" selected>United States</option><option value="UM" >United States Minor Outlying Islands</option><option value="UY" >Uruguay</option><option value="UZ" >Uzbekistan</option><option value="VU" >Vanuatu</option><option value="VE" >Venezuela, Bolivarian Republic of</option><option value="VN" >Viet Nam</option><option value="VG" >Virgin Islands, British</option><option value="VI" >Virgin Islands, U.S.</option><option value="WF" >Wallis and Futuna</option><option value="EH" >Western Sahara</option><option value="YE" >Yemen</option><option value="ZM" >Zambia</option><option value="ZW" >Zimbabwe</option></select></font></td></tr>
<!--Standard MatchingFields section begin-->
<tr  class='CTsubtitle' ><td  colspan=3><b><font  class='CTtablein' >Matching Gift Information</font></b></td></tr>
				<tr  class='CTodd' ><td colspan=3><b><font  class='CT' >
				Will this donation be potentially matched?<br>
				If you know the following information regarding the matching gift, please complete.
				</font></b></td></tr>
				<tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' >Company Name:</font></td><td   align=left colspan=2><font  class='CT' ><input type=text size="35" maxlength=250 name="MatchingName" value=""></font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' >Matching Gift Amount:</font></td><td   align=left colspan=2><font  class='CT' >$<input type=text size=12 maxlength=12 name="MatchingAmount" value=""></font></td></tr>
<!--Standard MatchingFields section end-->

<!--Standard FunOrgFields section begin-->

<!--Standard FunOrgFields section end-->
<!--Standard BeneficiaryFields section begin-->

<!--Standard BeneficiaryFields section end-->
<!--TransactionFields section begin-->
<tr  class='CTsubtitle' ><td  colspan=3><b><font  class='CTtablein' >Additional Information</font></b></td></tr><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' >Reasons for joining (OI):</font></td><td   align=left colspan=2><font  class='CT' ><select name="Field6139805"  size="1" ><option value="">-- please make a selection --</option><option value="To become a Volunteer" >To become a Volunteer</option><option value="Renewal Notice" >Renewal Notice</option><option value="To support the mission of the Oriental Institute" >To support the mission of the Oriental Institute</option><option value="To receive the member's benefits" >To receive the member's benefits</option><option value="To make a charitable contribution" >To make a charitable contribution</option><option value="To have access to travel and educational opportunities" >To have access to travel and educational opportunities</option><option value="Other (Please add to Special Instructions below.)" >Other (Please add to Special Instructions below.)</option></select></font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' >Pledge Agreement:</font></td><td   align=left colspan=2><font  class='CT' ><textarea name="Field6140139" rows="" cols="35" wrap="PHYSICAL" onpropertychange="if (checkLength(this,3200)== false)event.returnValue=false;return;" onKeyDown="if( event.keyCode==8 || event.keyCode==37 || event.keyCode==38 || event.keyCode==39 || event.keyCode==40 ||event.altKey ||event.keyCode ==9){event.returnValue=true;return;}else if (event.shiftKey){if (event.keyCode!=16 && event.keyCode !=9){if (checkLength(this,3200)== false)event.returnValue=false;}}else if ( event.ctrlKey ){if (event.keyCode==86){if (checkLength(this,3200)== false)event.returnValue=false;}}else {if (checkLength(this,3200)== false)event.returnValue=false;};" ></textarea></font></td></tr><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' >Type of tribute:</font></td><td   align=left colspan=2><font  class='CT' >
				    <input type="radio" name="Field5770736"  value="in honor of" > in honor of<br>
				    <input type="radio" name="Field5770736"  value="in memory of" > in memory of<br></font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' >Tribute name:</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength="128" name="Field5770737" value="" ></font></td></tr><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' >BYP Designation:</font></td><td   align=left colspan=2><font  class='CT' ><select name="Field6091021"  size="1" ><option value="">-- please make a selection --</option><option value="BYP" >BYP</option><option value="BYP100" >BYP100</option></select></font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' >Guest Degree/Class Year:</font></td><td   align=left colspan=2><font  class='CT' ><input type="text" size="35" maxlength="10" name="Field4708170" value="" ></font></td></tr><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' >This is a pledge payment:</font></td><td   align=left colspan=2><font  class='CT' ><input type="checkbox" name="Field4708172"  value="Yes" > Yes<br></font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' >This is a joint gift:</font></td><td   align=left colspan=2><font  class='CT' ><input type="checkbox" name="Field4708173"  value="Yes" > Yes<br></font></td></tr><tr  class='CTeven' ><td   align=left width=30% colspan=1><font  class='CT' >I/we wish to remain anonymous:</font></td><td   align=left colspan=2><font  class='CT' ><input type="checkbox" name="Field4708179"  value="Yes" > Yes<br></font></td></tr><tr  class='CTodd' ><td   align=left width=30% colspan=1><font  class='CT' >Special Instructions:</font></td><td   align=left colspan=2><font  class='CT' ><textarea name="Field4708184" rows="5" cols="35" wrap="PHYSICAL" onpropertychange="if (checkLength(this,3200)== false)event.returnValue=false;return;" onKeyDown="if( event.keyCode==8 || event.keyCode==37 || event.keyCode==38 || event.keyCode==39 || event.keyCode==40 ||event.altKey ||event.keyCode ==9){event.returnValue=true;return;}else if (event.shiftKey){if (event.keyCode!=16 && event.keyCode !=9){if (checkLength(this,3200)== false)event.returnValue=false;}}else if ( event.ctrlKey ){if (event.keyCode==86){if (checkLength(this,3200)== false)event.returnValue=false;}}else {if (checkLength(this,3200)== false)event.returnValue=false;};" ></textarea></font></td></tr>
<!--TransactionFields section end--></table>
	<script language="JavaScript" type="text/javascript">
	<!--
	function CheckAll(thisform, IdList){
		var arrIdList = IdList.split(",");
		var allchecked = true;
		for (var i = 0; i < thisform.elements.length; i++)
			if (thisform.elements[i].type == "checkbox" && thisform.elements[i].name == "SegmentID")
				for (var j = 0; j < arrIdList.length; j++)
					if (thisform.elements[i].value == arrIdList[j] && thisform.elements[i].checked == false)
						allchecked = false;
		for (var i = 0; i < thisform.elements.length; i++)
			if (thisform.elements[i].type == "checkbox" && thisform.elements[i].name == "SegmentID")
				for (var j = 0; j < arrIdList.length; j++)
					if (thisform.elements[i].value == arrIdList[j])
						if (allchecked == false)
							thisform.elements[i].checked = true;
						else
							thisform.elements[i].checked = false;
	}
	//-->
	</script>

	</td></tr>
</table><!--1-->
<table width="100%" id="TableButton">
	<tr><td align="center"><input type="button" name="SubmitButton" id="SubmitButton" value="Submit" onclick="SubmitForm1160635(form);"  class='HtmlButton'  />
	<span id="Processing"></span>
	</td></tr>

	<tr><td align="center"><font  class='CT' ><small>By clicking Submit, <br />your credit card will be processed</small></font></td></tr>

</table>
</form>
</td></tr>
<script language="JavaScript">
<!--
history.go(1);
formSetmain(document.SUPPORTER1160635);
onunload = fileClose;

var recurring_type="N";
function reloadForm(){
	document.SUPPORTER1160635.Reload.value='Y';
	document.SUPPORTER1160635.action="https://www.kintera.org/site/apps/ka/sd/donorcustom.asp?c=**cindex**&b=**bindex**";
	document.SUPPORTER1160635.submit();
}
function SubmitForm1160635(thisform){
	if(thisform.SubmitButton!=null) thisform.SubmitButton.disabled=true;
	if(thisform.RestartButton!=null) thisform.RestartButton.disabled=true;
	if(CheckForm1160635(thisform)) thisform.submit();
	else{
		if(thisform.SubmitButton!=null) thisform.SubmitButton.disabled=false;
		if(thisform.RestartButton!=null) thisform.RestartButton.disabled=false;
	}
}
function CheckForm1160635(thisform){
	focus_field = "";
	warning = "";
thisform.MatchingAmount.value = jsDV_strTrim(thisform.MatchingAmount.value);
	if(recurring_type=='Y'){

		thisform.RecurringAmount.value = jsDV_strTrim(thisform.RecurringAmount.value);
		CheckAmount(thisform.RecurringAmount);
		warning=checkField(thisform.RecurringAmount,"Amount",warning);

	}
	else{
		thisform.Amount.value = jsDV_strTrim(thisform.Amount.value);
		CheckAmount(thisform.Amount);
		warning=checkField(thisform.Amount,"Amount",warning);
	}
warning=checkSelect(thisform.BeneficiaryID,"Donor Designations",warning);warning=checkField(thisform.first_name,"First Name",warning);warning=checkField(thisform.last_name,"Last Name",warning);warning=checkField(thisform.email_address,"Primary Email",warning);warning=checkField(thisform.address_line_1,"Address Line 1",warning);warning=checkField(thisform.city,"City",warning);warning=checkSelect(thisform.state,"State",warning);warning=checkField(thisform.zip,"ZIP/Postal Code",warning);warning=checkSelect(thisform.country,"Country",warning);warning=checkField(thisform.CardName,"Cardholder's Name",warning);warning=checkField(thisform.CardNumber,"Credit Card Number",warning);warning=checkField(thisform.CardSecNumber,"CVV Number",warning);warning=checkField(thisform.BillAddress1,"Billing Address Line 1",warning);warning=checkField(thisform.BillCity,"Billing City",warning);warning=checkField(thisform.BillZip,"Billing ZIP/Postal Code",warning);warning=checkSelect(thisform.BillCountry,"Billing ",warning);if(thisform.MatchingAmount.value!="") warning=checkField(thisform.MatchingName,"Matching Gift Company Name",warning);
	if(warning!=""){
	    warning="Please enter the following fields to continue:\n- "+warning+"";
		alert(warning);
	    if(focus_field != "") focus_field.focus();
	    return false;
	}

	if(thisform.email_address!=null)
		if(thisform.email_address.value!="")
			if(validEmail(thisform.email_address.value) == false){
				thisform.email_address.focus();
				return false;
			}
	if (thisform.email_address_1!=null)
		if (thisform.email_address_1.value!="")
			if (validEmail(thisform.email_address_1.value, "You have entered an invalid email address.") == false){
				thisform.email_address_1.focus();
				return false;
			}
	if (thisform.email_address_2!=null)
		if (thisform.email_address_2.value!="")
			if (validEmail(thisform.email_address_2.value, "You have entered an invalid email address.") == false){
				thisform.email_address_2.focus();
				return false;
			}
	if((thisform.zip!=null) && (thisform.country!=null))
		if (checkCountryZip(thisform.zip,thisform.country) == false){
			thisform.zip.focus();
			return false;
		}

	if (!ccTypeValid(thisform.CardNumber, thisform.CardType)){
		alert ("Your credit card number is invalid - please reenter");
		thisform.CardNumber.focus();
		return false;
	}
	if(!((null == thisform.CardSecNumber)||("undefined" == typeof(thisform.CardSecNumber)))){
		if (!ccCVVCheck(thisform.CardSecNumber.value)){
			alert ("Your CVV number is invalid - please reenter");
			thisform.CardSecNumber.focus();
			return false;
		}
	}
	for(i=0; i < thisform.CardExpyr.options.length; i++)
		if(thisform.CardExpyr.options[i].selected) expyear=thisform.CardExpyr.options[i].value;
	for(i=0; i < thisform.CardExpmn.options.length; i++)
		if(thisform.CardExpmn.options[i].selected) expmonth=thisform.CardExpmn.options[i].value;
	if ((expyear < 2016) || (expyear == 2016 && expmonth < 10)){
		thisform.CardExpmn.focus();
		alert ("Your credit card is expired - please reenter");
		return false;
	}

	if ((thisform.BillZip!=null) && (thisform.BillCountry!=null))
		if (checkCountryZip(thisform.BillZip,thisform.BillCountry) == false){
			//alert("Please enter a valid zip code");
			thisform.BillZip.focus();
			return false;
		}

	if(thisform.MatchingAmount.value!=""){
		for(i = 0; i <= thisform.MatchingAmount.value.length -1; i++)
			thisform.MatchingAmount.value = thisform.MatchingAmount.value.replace(",","");
		if(numericCheck(thisform.MatchingAmount.value, 4, "nomsg") == false){
			alert ("Please enter a valid matching gift Amount.");
			thisform.MatchingAmount.value="";
			thisform.MatchingAmount.focus();
			return false;
		}
		if(jsDV_isValidMoney(thisform.MatchingAmount.value) == "-1"){
			alert("Please enter a valid matching gift Amount.");
			thisform.MatchingAmount.value="";
			thisform.MatchingAmount.focus();
			return false;
		}
		if(thisform.MatchingAmount.value<=0){
			alert("Please enter a matching gift Amount that is greater than $0.");
			thisform.MatchingAmount.value="";
			thisform.MatchingAmount.focus();
			return false;
		}
	}

	thisform.action="https://www.kintera.org/site/apps/ka/sd/donateprocess.asp?c=**cindex**&b=**bindex**&targetURL=**targetURL**";
	if(document.all) //IE
		document.all["Processing"].innerHTML = "<font  class='Alert' ><i><br><br></i></font>";
	else if(!document.all && document.getElementById) //NN6
		document.getElementById("Processing").innerHTML = "<font  class='Alert' ><i><br><br></i></font>";
	return true;
}
function CountTotal(ptrAmt, ptrNum, ptrTotal){
	var thisform, numGift, i, j;
	thisform = document.SUPPORTER1160635;
	CheckAmount(ptrAmt);
	for(i=0; i<ptrNum.length; i++)
		if(ptrNum[i].selected) numGift = Math.round(ptrNum.options[i].value) + 1;
	ptrTotal.value = ptrAmt.value * numGift;

}
function CountTerm(ptrAmt, ptrNum, ptrTotal){
	var numGift;
	CheckAmount(ptrAmt);
	for (var i=0; i<ptrNum.length; i++)
		if(ptrNum[i].selected) numGift=Math.round(ptrNum.options[i].value) + 1;

	//US 595661
	ptrAmt.value = Math.floor(ptrTotal.value / numGift * 100) / 100;
	ptrTotal.value = Math.floor(ptrAmt.value * numGift * 100) / 100;
}
function SetAmount(thisform, amt){
	if(recurring_type=='Y'){

		thisform.RecurringAmount.value=amt;

	}
	else thisform.Amount.value = amt;
}
function CheckAmtLevel(thisform, pointer){
	var i, j;
	CheckAmount(pointer);

	return false;
}
function CheckAmount(pointer){
	var returnValue, amountValue;
	for(i=0; i<=pointer.value.length-1; i++); pointer.value = pointer.value.replace(",","");
	amountValue = jsDV_strTrim(pointer.value);
	if(amountValue != ""){
		returnValue = jsDV_isValidMoney(amountValue);
	   	if(returnValue == "-1"){
	       	alert("Please enter a valid amount");
	       	pointer.value = "";
	       	pointer.focus();
	       	return false;
		}
		else pointer.value = returnValue;

		if(amountValue < 5){
	        alert("Please enter a minimum donation amount of $5");
	        pointer.value = "";
	        //pointer.focus();
	        return false;
		}
		if(amountValue > 2147483648){
	        alert("Please enter a maximum donation amount of $2,147,483,648");
	        pointer.value = "";
	        pointer.focus();
	        return false;
		}
	}
}
function ChangeName(thisform){
	thisform.CardName.value=thisform.FirstName.value+" "+thisform.LastName.value;
	return true;
}
function ChangeAddress(thisform){
	if(thisform.CheckAddress.value=="on"){
		if(thisform.address_line_1!=null) thisform.BillAddress1.value=thisform.address_line_1.value;
		if(thisform.address_line_2!=null) thisform.BillAddress2.value=thisform.address_line_2.value;
		if(thisform.city!=null) thisform.BillCity.value=thisform.city.value;
		if(thisform.province!=null) thisform.BillProvince.value=thisform.province.value;
		if(thisform.zip!=null) thisform.BillZip.value=thisform.zip.value;
		if(thisform.state!=null) setSelectValue(thisform.BillState,thisform.state.value);
		if(thisform.country!=null) setSelectValue(thisform.BillCountry,thisform.country.value);
		thisform.CheckAddress.value="off";
    }
	else{
		thisform.BillAddress1.value="";
		thisform.BillAddress2.value="";
		thisform.BillCity.value="";
		thisform.BillProvince.value="";
		thisform.BillZip.value="";
		setSelectValue(thisform.BillState,"");
		setSelectValue(thisform.BillCountry,"");
		thisform.CheckAddress.value="on";
    }
	return true;
}
function CheckRecurring(thisform,thetype){
	var check_paypal_option=false;
	if(thisform.EventPaymentTypes!=null)
	    if(thisform.EventPaymentTypes.value.indexOf("PAYPAL")>=0)
	        if(thisform.paymentTypeSelector!=null) check_paypal_option=true;
	recurring_type = thetype;
	if(recurring_type=='Y'){

		thisform.RecurringAmount.value = thisform.Amount.value;

		thisform.Amount.disabled=true;
		if(thisform.RecurringAmount!=null) thisform.RecurringAmount.disabled=false;
		if(thisform.BillingScheduleID!=null) thisform.BillingScheduleID.disabled=false;
		if(thisform.NumberOfPayments!=null) thisform.NumberOfPayments.disabled=false;
		if(thisform.BillingScheduleID.value=="0"){
			if(thisform.Amount1!=null) thisform.Amount1.disabled=false;

		}
		if(check_paypal_option) DisablePayPal(thisform);
	}
	else{

		thisform.Amount.value=thisform.RecurringAmount.value;

		thisform.Amount.disabled=false;
		if(thisform.RecurringAmount!=null) thisform.RecurringAmount.disabled=true;
		if(thisform.BillingScheduleID!=null) thisform.BillingScheduleID.disabled=true;
		if(thisform.NumberOfPayments!=null) thisform.NumberOfPayments.disabled=true;
		if(check_paypal_option) EnablePayPal(thisform);
	}
}
function EnablePayPal(thisform){
	var payList = thisform.paymentTypeSelector;
	var paylen = payList.length;
	var found_paypal=false;
	for(var i = 0; i < paylen; i++)
		if (payList.options[i].value== "PAYPAL") found_paypal=true;
    if(!found_paypal)
        payList.options[paylen] = new Option("PayPal","PAYPAL");
}
function DisablePayPal(thisform){
	var payList = thisform.paymentTypeSelector;
	var paylen = payList.length;
	var found_paypal=false;
	for(var i = 0; i < paylen; i++)
		if (payList.options[i].value== "PAYPAL") payList.options[i]=null;

}
function RefreshCaptcha(){
    document.getElementById('imgCaptcha').src='pagelet/captcha/CaptchaRenderer.aspx?s=&r='+Math.random()+'';
}
function toggleUKTaxpayerStatus(checkedVal){
    var declareGiftRadio;
    if(document.getElementById("Declare_Gift_Aid") == "undefined")
        return false;
    if(document.getElementById("Declare_Gift_Aid") == null)
        return false;
    declareGiftRadio = document.getElementsByName("Declare_Gift_Aid");
    if(checkedVal == "Y"){
        declareGiftRadio[0].checked = true;
        declareGiftRadio[0].disabled = false;
        declareGiftRadio[1].disabled = false;
    } else {
        declareGiftRadio[1].checked = true;
        declareGiftRadio[0].disabled = true;
        declareGiftRadio[1].disabled = true;
    }
    return false;
}
//-->
</script>

</table>
