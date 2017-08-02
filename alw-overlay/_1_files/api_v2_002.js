/* API host: app3_platform3 */

(function(){
    var resultObj = ({"informationalMessages":[],"definition":{"name":"reminder","responseName":"BEU87VDPGO","channel":"24hourimpact2016/reminder","hasDiscountsEnabled":false,"discountLabel":"Promotional Discount Codes","discountLineItemLabel":"Promotional Discount Codes Applied","header":"Sign up for a <i>24Hour Impact</i> reminder!","footer":"","pages":[{"columns":[{"sections":[{"name":"_kimbia.question","displayIfEmpty":false,"label":"Profile","questions":[{"questionType":"TEXT","name":"FirstName","answerName":"First Name","answerRequired":true,"descriptionBeforeAnswer":false,"entryDisplay":"FIELD","restrictedToPrompt":false,"visible":true,"captureDatatype":"java.lang.String","inRepeatingBlock":false,"paymentPlan":{"oneTimeOption":false},"label":"First Name","description":"","donationHeaders":[],"suppressLabel":false,"popupUrlParameters":{},"includedInOptionalCalculatedFee":false},{"questionType":"TEXT","name":"LastName","answerName":"Last Name","answerRequired":true,"descriptionBeforeAnswer":false,"entryDisplay":"FIELD","restrictedToPrompt":false,"visible":true,"captureDatatype":"java.lang.String","inRepeatingBlock":false,"paymentPlan":{"oneTimeOption":false},"label":"Last Name","description":"","donationHeaders":[],"suppressLabel":false,"popupUrlParameters":{},"includedInOptionalCalculatedFee":false},{"questionType":"TEXT","name":"ContactEmail","answerName":"Email Address","answerRequired":true,"descriptionBeforeAnswer":false,"entryDisplay":"FIELD","regex":"^([a-zA-Z0-9_\\.\\+\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,6})+$","regexErrorMessage":"Please use the format email@domain.com.","restrictedToPrompt":false,"visible":true,"captureDatatype":"java.lang.String","inRepeatingBlock":false,"paymentPlan":{"oneTimeOption":false},"label":"Email Address","description":"","donationHeaders":[],"suppressLabel":false,"popupUrlParameters":{},"includedInOptionalCalculatedFee":false}]}]}]},{"columns":[{"sections":[{"name":"_payment","displayIfEmpty":false,"label":"Payment Details","questions":[{"name":"_payment.firstName","answerName":"_payment.firstName","answerRequired":true,"entryDisplay":"FIELD","defaultAnswerQuestionName":"First Name","visible":true,"captureDatatype":"java.lang.String","inRepeatingBlock":false,"paymentPlan":{"oneTimeOption":false},"label":"First Name","donationHeaders":[],"suppressLabel":false,"popupUrlParameters":{},"includedInOptionalCalculatedFee":false},{"name":"_payment.lastName","answerName":"_payment.lastName","answerRequired":true,"entryDisplay":"FIELD","defaultAnswerQuestionName":"Last Name","visible":true,"captureDatatype":"java.lang.String","inRepeatingBlock":false,"paymentPlan":{"oneTimeOption":false},"label":"Last Name","donationHeaders":[],"suppressLabel":false,"popupUrlParameters":{},"includedInOptionalCalculatedFee":false},{"name":"_payment.email","answerName":"_payment.email","answerRequired":true,"entryDisplay":"FIELD","regex":"^([a-zA-Z0-9_\\.\\+\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,6})+$","regexErrorMessage":"Please use the format email@domain.com.","defaultAnswerQuestionName":"Email Address","visible":true,"captureDatatype":"java.lang.String","inRepeatingBlock":false,"paymentPlan":{"oneTimeOption":false},"label":"Cardholder Email","donationHeaders":[],"suppressLabel":false,"popupUrlParameters":{},"includedInOptionalCalculatedFee":false},{"name":"_payment.address","answerName":"_payment.address","answerRequired":true,"promptDisplay":"DROPDOWN_MENU","entryDisplay":"FIELD","restrictedToPrompt":false,"visible":true,"captureDatatype":"com.kimbia.model.MailingAddress","inRepeatingBlock":false,"defaultCountry":"US","paymentPlan":{"oneTimeOption":false},"label":"Billing Address","donationHeaders":[],"suppressLabel":false,"popupUrlParameters":{},"includedInOptionalCalculatedFee":false},{"name":"_payment.accountNumber","answerName":"_payment.accountNumber","answerRequired":true,"entryDisplay":"FIELD","regex":"^(?:4[\\x20\\x2d]?([0-9][\\x20\\x2d]?){12}(?:([0-9][\\x20\\x2d]?){3})?|5[\\x20\\x2d]?[1-5][\\x20\\x2d]?([0-9][\\x20\\x2d]?){14}|6[\\x20\\x2d]?(?:0[\\x20\\x2d]?(1[\\x20\\x2d]?){2}|5[\\x20\\x2d]?([0-9][\\x20\\x2d]?){2})([0-9][\\x20\\x2d]?){12}|3[\\x20\\x2d]?[47][\\x20\\x2d]?([0-9][\\x20\\x2d]?){13}|62[\\x20\\x2d]?([0-9][\\x20\\x2d]?){14,17})$","regexErrorMessage":"Invalid account number. Please enter numbers only, without dashes.","visible":true,"captureDatatype":"java.lang.String","inRepeatingBlock":false,"paymentPlan":{"oneTimeOption":false},"label":"Credit Card Number","donationHeaders":[],"suppressLabel":false,"popupUrlParameters":{},"includedInOptionalCalculatedFee":false},{"name":"_payment.verification","answerName":"_payment.verification","answerRequired":true,"entryDisplay":"FIELD","regex":"^[0-9]{3,4}$","regexErrorMessage":"Invalid verification code. For American Express cards, please enter the 4 digits located on the right-front of your card. For other cards, please use the last 3 digits from the signature bar on the back of your card.","visible":true,"captureDatatype":"java.lang.String","inRepeatingBlock":false,"paymentPlan":{"oneTimeOption":false},"label":"Verification Code","donationHeaders":[],"suppressLabel":false,"popupUrlParameters":{},"includedInOptionalCalculatedFee":false},{"name":"_payment.monthExpires","answerName":"_payment.monthExpires","answerRequired":true,"promptDisplay":"DROPDOWN_MENU","entryDisplay":"FIELD","restrictedToPrompt":true,"visible":true,"captureDatatype":"java.lang.String","inRepeatingBlock":false,"paymentPlan":{"oneTimeOption":false},"label":"Expiration Month","prompts":[{"name":"1","answerData":"1","answerDataFixed":true,"label":"01 - January","listPrice":{"currency":"USD","amount":0},"priceFixed":true},{"name":"2","answerData":"2","answerDataFixed":true,"label":"02 - February","listPrice":{"currency":"USD","amount":0},"priceFixed":true},{"name":"3","answerData":"3","answerDataFixed":true,"label":"03 - March","listPrice":{"currency":"USD","amount":0},"priceFixed":true},{"name":"4","answerData":"4","answerDataFixed":true,"label":"04 - April","listPrice":{"currency":"USD","amount":0},"priceFixed":true},{"name":"5","answerData":"5","answerDataFixed":true,"label":"05 - May","listPrice":{"currency":"USD","amount":0},"priceFixed":true},{"name":"6","answerData":"6","answerDataFixed":true,"label":"06 - June","listPrice":{"currency":"USD","amount":0},"priceFixed":true},{"name":"7","answerData":"7","answerDataFixed":true,"label":"07 - July","listPrice":{"currency":"USD","amount":0},"priceFixed":true},{"name":"8","answerData":"8","answerDataFixed":true,"label":"08 - August","listPrice":{"currency":"USD","amount":0},"priceFixed":true},{"name":"9","answerData":"9","answerDataFixed":true,"label":"09 - September","listPrice":{"currency":"USD","amount":0},"priceFixed":true},{"name":"10","answerData":"10","answerDataFixed":true,"label":"10 - October","listPrice":{"currency":"USD","amount":0},"priceFixed":true},{"name":"11","answerData":"11","answerDataFixed":true,"label":"11 - November","listPrice":{"currency":"USD","amount":0},"priceFixed":true},{"name":"12","answerData":"12","answerDataFixed":true,"label":"12 - December","listPrice":{"currency":"USD","amount":0},"priceFixed":true}],"donationHeaders":[],"suppressLabel":false,"popupUrlParameters":{},"includedInOptionalCalculatedFee":false},{"name":"_payment.yearExpires","answerName":"_payment.yearExpires","answerRequired":true,"promptDisplay":"DROPDOWN_MENU","entryDisplay":"FIELD","restrictedToPrompt":true,"visible":true,"captureDatatype":"java.lang.String","inRepeatingBlock":false,"paymentPlan":{"oneTimeOption":false},"label":"Expiration Year","prompts":[{"name":"2016","answerData":"2016","answerDataFixed":true,"label":"2016","listPrice":{"currency":"USD","amount":0},"priceFixed":true},{"name":"2017","answerData":"2017","answerDataFixed":true,"label":"2017","listPrice":{"currency":"USD","amount":0},"priceFixed":true},{"name":"2018","answerData":"2018","answerDataFixed":true,"label":"2018","listPrice":{"currency":"USD","amount":0},"priceFixed":true},{"name":"2019","answerData":"2019","answerDataFixed":true,"label":"2019","listPrice":{"currency":"USD","amount":0},"priceFixed":true},{"name":"2020","answerData":"2020","answerDataFixed":true,"label":"2020","listPrice":{"currency":"USD","amount":0},"priceFixed":true},{"name":"2021","answerData":"2021","answerDataFixed":true,"label":"2021","listPrice":{"currency":"USD","amount":0},"priceFixed":true},{"name":"2022","answerData":"2022","answerDataFixed":true,"label":"2022","listPrice":{"currency":"USD","amount":0},"priceFixed":true},{"name":"2023","answerData":"2023","answerDataFixed":true,"label":"2023","listPrice":{"currency":"USD","amount":0},"priceFixed":true},{"name":"2024","answerData":"2024","answerDataFixed":true,"label":"2024","listPrice":{"currency":"USD","amount":0},"priceFixed":true},{"name":"2025","answerData":"2025","answerDataFixed":true,"label":"2025","listPrice":{"currency":"USD","amount":0},"priceFixed":true}],"donationHeaders":[],"suppressLabel":false,"popupUrlParameters":{},"includedInOptionalCalculatedFee":false}]}]}]}],"otherPages":{},"currency":{"isoCode":"USD","decimalPlaces":2,"symbol":"$","symbolAfterValue":false},"testMode":false},"displayGuidelines":{"fieldLabelPosition":"left","isShowTally":true,"isShareLinkDisplay":false,"isShowPaymentInfo":true,"submitButtonLabel":"Submit","reloadWithData":false,"acceptedCCTypes":[""]},"translations":{"socialMedia.shareThisForm.messageDefault":" Check this out","mail.countries.UG":"Uganda","mail.countries.US":"United States","mail.countries.UM":"US Minor Outlying Islands","mail.countries.UY":"Uruguay","question.validation.choices.number.zeroOrGreater":" Please enter a number of zero or greater.","mail.countries.UZ":"Uzbekistan","confirmation.miniProfileEditor.buttons.doThisLater":" Do this later","mail.fieldLabels.department":"Department","mail.countries.VA":"Vatican City","mail.countries.VC":"Saint Vincent and the Grenadines","mail.countries.TJ":"Tajikistan","mail.countries.TG":"Togo","mail.countries.TH":"Thailand","mail.countries.TF":"French Southern Territories","confirmation.socialMedia.listItem.linkText.email":"email","mail.countries.TC":"Turks and Caicos Islands","question.validation.choices.nonFeeMoney.amountOfAtLeast":" Please enter an amount of at least {0}.","confirmation.socialMedia.listItem.linkText.facebook":" Facebook","mail.countries.TD":"Chad","mail.countries.TR":"Turkey","paymentPlan.types.installment.name":" installment","mail.countries.TO":"Tonga","mail.countries.TM":"Turkmenistan","mail.countries.TN":"Tunisia","mail.countries.TK":"Tokelau","mail.countries.TL":"Timor-Leste","mail.countries.TZ":"United Republic of Tanzania","mail.countries.TW":"Taiwan","mail.countries.TV":"Tuvalu","mail.countries.TT":"Trinidad and Tobago","confirmation.socialMedia.listItem.linkText.tweetAbout":" Tweet about your participation on","confirmation.labels.confirmationCode":" Confirmation Code:","mail.countries.UA":"Ukraine","mail.fieldLabels.district":"District","question.validation.choices.number.maximum":" Please enter a number no greater than {0}.","mail.countries.SB":"Solomon Islands","mail.countries.SC":"Seychelles","mail.countries.SD":"Sudan","mail.countries.SE":"Sweden","mail.countries.SG":"Singapore","mail.countries.SH":"Saint Helena","mail.countries.SI":"Slovenia","mail.countries.SJ":"Svalbard and Jan Mayen Islands","mail.countries.SK":"Slovakia","mail.countries.SL":"Sierra Leone","mail.countries.SM":"San Marino","security.linkText.learnMore":" Learn More","mail.countries.SN":"Senegal","mail.countries.SO":"Somalia Region","mail.countries.SR":"Suriname","mail.countries.CA.state.BC":"British Columbia","mail.countries.ST":"Sao Tome and Principe","paymentPlan.types.ongoing.messages.indicateFrequencyOrChooseAnotherType":" Please indicate the frequency of <b>ongoing payments</b>, or click another payment type.","mail.countries.SV":"El Salvador","mail.countries.SY":"Syrian Arab Republic","mail.countries.SZ":"Swaziland","multiReg.labels.registrationList":" Registrations","tallyTable.total":"Total","paymentPlan.intervals.BIMONTHLY":" BIMONTHLY","mail.countries.RE":"Reunion","mail.fieldLabels.countyAndCity":"County and City","mail.countries.RO":"Romania","paymentPlan.types.ongoing.messages.indicateFrequency":" Please indicate the frequency of <b>ongoing payments</b>.","paymentPlan.labels.section":" Payment Plan","mail.countries.RW":"Rwanda","mail.countries.RU":"Russian Federation","mail.countries.SA":"Saudi Arabia","mail.countries.US.state.AE":"Armed Forces (AE)","mail.countries.US.state.AL":"Alabama","mail.countries.US.state.AK":"Alaska","mail.fieldLabels.island":"Island","mail.countries.US.state.AP":"Armed Forces (AP)","confirmation.miniProfileEditor.captions.typeInStatement":" Type in a personal statement, or leave blank to use the default.","tallyTable.linkTitles.registrantRemoval":" REMOVE this profile","mail.fieldLabels.postalCode":"Postal Code","mail.countries.QA":"Qatar","mail.countries.US.state.AS":"American Samoa","mail.countries.US.state.AR":"Arkansas","mail.countries.CA.postalCodeErrorMessage":"Please supply a Canadian postal code, following format A0A 0A0, where A is a letter and 0 is a digit, with a space separating the third and fourth characters.","paymentPlan.intervals.DAILY":" DAILY","paymentPlan.intervals.MONTHLY":" MONTHLY","paymentPlan.types.installment.messages.intervalAmountBelowMinimum":" Your {0} installment amount ({1}) will be less than the minimum {0} installment amount ({2}). Please increase your {3} to at least {4} to maintain that number of installment payments.","mail.countries.US.state.AZ":"Arizona","mail.countries.PN":"Pitcairn","navigation.main.buttons.multiRegDiscardRegistrant":" Discard This Registrant","mail.countries.PM":"Saint Pierre and Miquelon","mail.countries.PL":"Poland","mail.countries.PK":"Pakistan","mail.countries.PH":"Philippines","mail.countries.PG":"Papua New Guinea","mail.countries.PF":"French Polynesia","mail.countries.PE":"Peru","mail.countries.PA":"Panama","mail.countries.PY":"Paraguay","mail.countries.PW":"Palau","system.messages.instructions.submitFormTimeout":" The communication timed out. Your transaction may have succeeded. Please wait 5 minutes, check your email, and try again if necessary.","mail.countries.PS":"Palestinian Territory","mail.countries.US.state.CA":"California","mail.countries.PT":"Portugal","mail.countries.PR":"Puerto Rico","mail.fieldLabels.village":"Village","mail.countries.OM":"Oman","mail.countries.US.postalCodeErrorMessage":"Please supply a 5-digit US zip code.","system.messages.noPaymentNecessaryWithCurrentSelections":" No payment necessary with current selections.","socialMedia.shareThisForm.linkTitles.twitter":" Tweet this Link","socialMedia.shareThisForm.buttons.twitter":" Twitter","question.validation.choices.number.requiredIfChecked":" Please enter a <b>number</b>.","mail.countries.NG":"Nigeria","mail.countries.NF":"Norfolk Island","mail.countries.NE":"Niger","mail.countries.NL":"Netherlands","mail.countries.NI":"Nicaragua","mail.countries.NC":"New Caledonia","mail.countries.NA":"Namibia","mail.countries.NU":"Niue","mail.countries.NZ":"New Zealand","mail.countries.NO":"Norway","navigation.main.buttons.back":" Back","mail.countries.US.state.AA":"Armed Forces (AA)","mail.countries.NP":"Nepal","confirmation.miniProfileEditor.labels.personalPicture":" Personal Picture","mail.countries.NR":"Republic of Nauru","confirmation.messages.youWillBeChargedATotalOf":"You will be charged a total of {0}.","mail.fieldLabels.cityAndDistrict":"City and District","confirmation.miniProfileEditor.instructions":" You may change the information that appears on your personal fundraising page.","mail.countries.US.state.GA":"Georgia","confirmation.pageTitle.default":" Transaction Summary","mail.countries.US.state.FL":"Florida","mail.countries.US.state.FM":"Federated States of Micronesia","mail.countries.US.state.DE":"Delaware","embedThisForm.linkTitles.placeACopyOfThisFormOnYourOwn":" Place a copy of this form on your own website or blog","mail.countries.US.state.DC":"District of Columbia","socialMedia.shareThisForm.linkTitles.facebook":" Post Link on your wall","mail.countries.US.state.CT":"Connecticut","security.statement.linkText.returnToForm":" Return to Form","mail.countries.US.state.CO":"Colorado","paymentPlan.types.installment.messages.indicateNumberOrChooseAnotherType":" Please indicate the number of <b>installment payments</b>, or click another payment type.","paymentPlan.types.oneTime.name":" one time","mail.fieldLabels.postalDistrict":"Postal District","mail.countries.ZM":"Zambia","mail.countries.ZW":"Zimbabwe","question.validation.text.maxCharacterLimitExceeded":"Maximum {0} characters ({1} too many)","mail.countries.ZA":"South Africa","confirmation.linkText.jumpStartMakeDonationOnYourPersonalFundraisingPageToBegin":"{0}Check out your personal fundraising page{1} to begin fundraising and see how easy it is for your supporters to give!","paymentPlan.types.oneTime.button":" One-time payment for the full amount","mail.countries.US.state.IN":"Indiana","mail.countries.YT":"Mayotte","question.menus.options.unansweredPleaseChoose":" -Choose-","confirmation.miniProfileEditor.buttons.saveChanges":" Save changes","paymentPlan.hints.installment":" {0} per payment.","embedThisForm.linkTitles.close":" Close","mail.countries.YE":"Yemen","confirmation.socialMedia.listItem.linkText.viewYourPersonalFundraisingPage":" View your personal fundraising page","mail.countries.CA.state.AB":"Alberta","question.validation.choices.regex.default":" Invalid entry","mail.fieldLabels.city":"City","paymentPlan.hints.default":" ({0} minimum per payment)","question.buttons.noneOfTheAbove":" None of the above","paymentPlan.intervals.BIWEEKLY":" BIWEEKLY","mail.countries.US.state.HI":"Hawaii","system.messages.instructions.genericTimeout":" The communication timed out. Please try again.","mail.countries.WS":"Samoa","mail.countries.WF":"Wallis and Futuna Islands","mail.countries.US.state.GU":"Guam","mail.countries.US.state.ID":"Idaho","mail.countries.US.state.IA":"Iowa","mail.countries.VU":"Vanuatu","question.buttons.previewMemorialOrTributeCardDefault":" Preview","mail.countries.US.state.IL":"Illinois","mail.countries.VN":"Viet Nam","paymentPlan.intervals.WEEKLY":" WEEKLY","navigation.main.buttons.multiRegAddAnotherRegistrant":" Add Another Registrant","socialMedia.shareThisForm.buttons.email":" Email","paymentPlan.intervals.ANNUALLY":" ANNUALLY","mail.countries.VE":"Venezuela","mail.countries.VG":"British Virgin Islands","mail.countries.VI":"US Virgin Islands","mail.countries.CU":"Cuba","mail.countries.CR":"Costa Rica","mail.countries.CS":"Serbia and Montenegro","mail.countries.CX":"Christmas Island","mail.countries.CY":"Cyprus","mail.countries.CV":"Cape Verde","mail.countries.CZ":"Czech Republic","mail.countries.DE":"Germany","mail.countries.US.state.MA":"Massachusetts","mail.countries.US.state.MD":"Maryland","mail.countries.DJ":"Djibouti","mail.countries.US.state.ME":"Maine","mail.countries.US.state.MH":"Marshall Islands","mail.countries.DM":"Dominica","mail.countries.US.state.MI":"Michigan","mail.countries.DK":"Denmark","mail.countries.US.state.MN":"Minnesota","mail.countries.US.state.MP":"Northern Mariana Islands","mail.countries.US.state.MO":"Missouri","mail.countries.DO":"Dominican Republic","mail.countries.US.state.KS":"Kansas","mail.fieldLabels.prefecture":"Prefecture","mail.countries.DZ":"Algeria","mail.countries.US.state.KY":"Kentucky","mail.fieldLabels.governorate":"Governorate","confirmation.socialMedia.listItem.linkText.twitter":" Twitter","mail.countries.EC":"Ecuador","mail.countries.EE":"Estonia","socialMedia.shareThisForm.buttons.groupingLabel":" SHARE LINK:","mail.countries.US.state.LA":"Louisiana","mail.countries.EG":"Egypt","mail.countries.EH":"Western Sahara","question.validation.choices.money.amountOfAtLeast":" Please enter an amount of at least {0}.","mail.fieldLabels.street2":"Street Address 2","mail.fieldLabels.street1":"Street Address","navigation.main.buttons.submit":" Submit","mail.countries.ES":"Spain","mail.countries.ER":"Eritrea","mail.countries.US.state.NV":"Nevada","mail.countries.AW":"Aruba","mail.countries.AT":"Austria","mail.countries.US.state.NY":"New York","mail.countries.AU":"Australia","mail.countries.AR":"Argentina","mail.countries.AS":"American Samoa","mail.countries.AQ":"Antarctica","question.hints.variablePriceHasMinimumAndMaximum":" (min: {0} | max: {1})","mail.fieldLabels.districtAndProvince":"District and Province","mail.countries.AZ":"Azerbaijan","mail.countries.AX":"Aaland Islands","mail.countries.US.state.OH":"Ohio","mail.countries.BH":"Bahrain","mail.countries.BG":"Bulgaria","mail.countries.BF":"Burkina Faso","mail.countries.BE":"Belgium","mail.countries.BD":"Bangladesh","confirmation.socialMedia.listItem.linkText.postOntoFacebook":" Post about your participation on","mail.countries.BB":"Barbados","mail.countries.BA":"Bosnia and Herzegowina","mail.countries.BO":"Bolivia","mail.countries.US.state.OR":"Oregon","mail.countries.BN":"Brunei Darussalam","embedThisForm.linkTitles.embedThisForm":" Embed This Form","mail.countries.BM":"Bermuda","mail.countries.US.state.OK":"Oklahoma","mail.countries.CA.state.SK":"Saskatchewan","mail.countries.BJ":"Benin","mail.countries.BI":"Burundi","mail.countries.BV":"Bouvet Island","mail.countries.BW":"Botswana","mail.countries.US.state.MS":"Mississippi","mail.countries.US.state.MT":"Montana","tallyTable.discount.lineItems.labels.default":" Discounts Applied","mail.countries.BR":"Brazil","mail.countries.BS":"Bahamas","question.validation.choices.nonFeeMoney.amountNoGreaterThan":" Please enter an amount no greater than {0}.","mail.countries.BT":"Bhutan","mail.countries.CA":"Canada","mail.countries.BY":"Belarus","mail.countries.BZ":"Belize","confirmation.miniProfileEditor.labels.section":" Personalize Your Fundraising","mail.countries.CG":"Congo Republic","mail.countries.US.state.NH":"New Hampshire","mail.countries.CF":"Central African Republic","mail.countries.CI":"Côte d’Ivoire","mail.countries.CH":"Switzerland","mail.countries.US.state.NE":"Nebraska","mail.countries.CC":"Cocos Islands","mail.countries.US.state.ND":"North Dakota","mail.countries.US.state.NC":"North Carolina","mail.fieldLabels.country":"Country","mail.countries.CD":"Congo Democratic Republic","mail.countries.CO":"Colombia","mail.countries.CN":"China","mail.countries.US.state.NM":"New Mexico","mail.countries.CK":"Cook Islands","mail.countries.CM":"Cameroon","mail.countries.US.state.NJ":"New Jersey","mail.countries.CL":"Chile","mail.countries.US.state.PW":"Palau","tallyTable.linkTitles.registrantEditing":" EDIT this profile","discount.instructions.sentence2":" If you have multiple codes, enter them one at a time, and update the total after each code.","discount.instructions.sentence1":" If the code is valid, the transaction total displayed in the table will reflect your discount.","mail.countries.CA.state.YT":"Yukon","mail.fieldLabels.county":"County","question.validation.multipleChoice.sentenceSubjects.donation":" Donation","mail.countries.US.state.PA":"Pennsylvania","question.validation.choices.textBox.requiredIfChosen":" Please fill out the text box for <i>{0}</i>.","socialMedia.shareThisForm.buttons.facebook":" Facebook","paymentPlan.hints.ongoing":" {0} per payment, until you contact us to cancel.","mail.countries.AI":"Anguilla","mail.countries.US.state.PR":"Puerto Rico","mail.countries.AL":"Albania","mail.countries.AM":"Armenia","mail.countries.AN":"Netherlands Antilles","mail.countries.AO":"Angola","mail.countries.AD":"Andorra","mail.countries.AE":"United Arab Emirates","mail.countries.AF":"Afghanistan","mail.countries.AG":"Antigua and Barbuda","mail.countries.US.state.SD":"South Dakota","mail.countries.US.state.SC":"South Carolina","mail.fieldLabels.territory":"Territory","mail.fieldLabels.regionAndDistrict":"Region and District","confirmation.miniProfileEditor.labels.statement":" Personal Statement","paymentPlan.types.installment.button":" installment payments.","discount.tableHead.codesEntered":" Codes Entered","confirmation.socialMedia.listItem.linkText.sendLinkViaEmail":"Send Link via","mail.fieldLabels.pin":"Pin","mail.countries.US.state.RI":"Rhode Island","paymentPlan.types.ongoing.name":" ongoing","mail.countries.LK":"Sri Lanka","mail.countries.LR":"Liberia","mail.countries.US.state.UT":"Utah","mail.countries.LT":"Lithuania","mail.countries.LS":"Lesotho","mail.fieldLabels.districtOrSubdivision":"District/Subdivision","mail.countries.LV":"Latvia","mail.countries.LU":"Luxembourg","mail.countries.CA.state.MB":"Manitoba","mail.countries.LY":"Libya","multiReg.alertAndConfirm.confirmRegistrantRemoval":" Are you sure that you want to REMOVE {0}? This is permanent!","mail.countries.KZ":"Kazakhstan","mail.countries.US.state.TX":"Texas","mail.countries.LA":"Lao Peoples Democratic Republic","mail.countries.LB":"Lebanon","mail.countries.LC":"Saint Lucia","navigation.main.buttons.continue":" Continue","mail.countries.LI":"Liechtenstein","mail.countries.MO":"Macau","mail.countries.MN":"Mongolia","mail.countries.MM":"Myanmar","mail.countries.ML":"Mali","mail.countries.MS":"Montserrat","mail.countries.MR":"Mauritania","mail.countries.MQ":"Martinique","mail.countries.US.state.TN":"Tennessee","mail.countries.MP":"Northern Mariana Islands","mail.countries.MW":"Malawi","mail.countries.MV":"Maldives","mail.countries.MU":"Mauritius","mail.countries.MT":"Malta","paymentPlan.types.ongoing.button":" ongoing payments.","mail.countries.MZ":"Mozambique","mail.countries.MY":"Malaysia","mail.countries.MX":"Mexico","mail.countries.MC":"Monaco","mail.countries.MA":"Morocco","mail.countries.MG":"Madagascar","mail.countries.MD":"Moldova","paymentPlan.types.ongoing.messages.belowMinimumPleaseSelectGreaterAmount":" Your chosen ongoing payment amount ({0}) is less than the minimum ongoing payment ({1}). Please select a greater amount to meet the minimum.","mail.countries.MK":"Macedonia","mail.countries.MH":"Marshall Islands","mail.countries.JM":"Jamaica","mail.countries.JP":"Japan","mail.countries.JO":"Jordan","confirmation.messages.youWereChargedATotalOf":" You were charged a total of {0}.","mail.countries.US.state.WY":"Wyoming","confirmation.miniProfileEditor.linkText.manageYourFundraisingByClickingHere":" Manage your fundraising by {0}clicking here{1}.","mail.countries.US.state.WV":"West Virginia","mail.countries.US.state.WA":"Washington","paymentPlan.intervals.SEMIANNUALLY":" SEMIANNUALLY","mail.countries.US.state.WI":"Wisconsin","confirmation.button.reloadWithData":" Reload Form","mail.countries.KP":"North Korea","mail.countries.KN":"Saint Kitts and Nevis","mail.countries.KM":"Comoros","mail.countries.KY":"Cayman Islands","mail.countries.KW":"Kuwait","navigation.main.buttons.showTotal":" Show Total","mail.countries.KR":"South Korea","mail.countries.US.state.VT":"Vermont","mail.countries.US.state.VA":"Virginia","mail.countries.KH":"Cambodia","mail.countries.KI":"Kiribati Island","question.validation.messages.isRequired":" {0} is required.","mail.countries.US.state.VI":"Virgin Islands","mail.countries.KG":"Kyrgyzstan","paymentPlan.intervals.QUARTERLY":" QUARTERLY","security.sentence.yourDataIsSecure":" Your data is secure.","mail.countries.KE":"Kenya","discount.button.applyCode":" Apply Code","confirmation.headings.jumpstartYourFundraising":" Jumpstart your fundraising","mail.countries.HR":"Croatia","mail.countries.HT":"Haiti","mail.countries.HU":"Hungary","mail.countries.HK":"Hong Kong","question.validation.choices.number.minimum":" Please enter a number of at least {0}.","question.hints.variablePriceHasMaximum":" (maximum {0})","mail.countries.HM":"Heard and McDonald Islands","mail.fieldLabels.state":"State","mail.countries.HN":"Honduras","system.messages.instructions.validationFailedOnClient":" Please correct any errors or omissions, and resubmit.","question.hints.variablePriceHasMinimum":" (minimum {0})","mail.countries.GW":"Guinea-Bissau","mail.countries.GY":"Guyana","mail.countries.CA.state.QC":"Quebec","mail.countries.IR":"Iran","question.validation.multipleChoice.sentenceSubjects.default":" This","mail.countries.IS":"Iceland","mail.countries.IQ":"Iraq","mail.countries.IT":"Italy","mail.countries.CA.state.PE":"Prince Edward Island","mail.countries.IN":"India","mail.countries.IO":"British Indian Ocean Territory","mail.countries.IL":"Israel","mail.countries.IM":"Isle of Man","multiReg.additionalQuestionsSectionNameDefault":" Questions for {0}","mail.countries.IE":"Ireland","mail.countries.ID":"Indonesia","multiReg.nameOfRegistrantDefault":" this registrant","navigation.main.buttons.updateTotal":" Update Total","paymentPlan.intervals.ONCE":" ONCE","question.validation.choices.money.amountLessThan":" Please enter an amount less than {0}.","mail.fieldLabels.suburb":"Suburb","mail.countries.FR":"France","mail.countries.FM":"Micronesia","mail.countries.FO":"Faroe Islands","mail.countries.FI":"Finland","mail.countries.FJ":"Fiji","mail.countries.FK":"Falkland Islands","mail.countries.CA.state.ON":"Ontario","mail.countries.CA.state.NS":"Nova Scotia","paymentPlan.messages.paymentPlanIsRequired":" A payment plan is required.","mail.countries.CA.state.NT":"Northwest Territories","mail.countries.CA.state.NU":"Nunavut","mail.countries.ET":"Ethiopia","paymentPlan.menus.options.select":" Select...","mail.fieldLabels.zipCode":"Zip Code","mail.countries.GT":"Guatemala","mail.countries.GU":"Guam","mail.countries.GR":"Greece","mail.countries.CA.state.NB":"New Brunswick","mail.countries.GS":"South Georgia","mail.countries.GP":"Guadeloupe","socialMedia.shareThisForm.linkTitles.email":" Send Link in a message","mail.countries.GQ":"Equatorial Guinea","mail.countries.GN":"Guinea","mail.countries.GL":"Greenland","mail.fieldLabels.province":"Province","mail.countries.GM":"Gambia","mail.countries.CA.state.NL":"Newfoundland and Labrador","mail.countries.GH":"Ghana","mail.countries.GI":"Gibraltar","mail.countries.GF":"French Guiana","mail.countries.GE":"Georgia","mail.countries.GD":"Grenada","mail.countries.GB":"United Kingdom","mail.countries.GA":"Gabon","system.messages.instructions.submitFormSuccess":" Form submission succeeded. Please check your email."},"localeString":"en","dateFormat":"m/d/yyyy","hasSignupValidation":false,"success":true});
    kimbiaPresenter_1.formDefinitionCallback(resultObj);
})();