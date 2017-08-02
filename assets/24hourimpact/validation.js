        history.go(1);
        formSetmain(document.SUPPORTER287377);
        onunload = fileClose;

        var recurring_type = "N";

        function reloadForm() {
            document.SUPPORTER287377.Reload.value = 'Y';
            document.SUPPORTER287377.action = "https://www.kintera.org/site/apps/ka/sd/donorcustom.asp?c=**cindex**&b=**bindex**";
            document.SUPPORTER287377.submit();
        }

        function SubmitForm287377(thisform) {
            if (thisform.SubmitButton != null) thisform.SubmitButton.disabled = true;
            if (thisform.RestartButton != null) thisform.RestartButton.disabled = true;
            if (CheckForm287377(thisform)) thisform.submit();
            else {
                if (thisform.SubmitButton != null) thisform.SubmitButton.disabled = false;
                if (thisform.RestartButton != null) thisform.RestartButton.disabled = false;
            }
        }

        function CheckForm287377(thisform) {
            focus_field = "";
            warning = "";

            if (recurring_type == 'Y') {

                thisform.RecurringAmount.value = jsDV_strTrim(thisform.RecurringAmount.value);
                CheckAmount(thisform.RecurringAmount);
                warning = checkField(thisform.RecurringAmount, "Amount", warning);

            } else {
                thisform.Amount.value = jsDV_strTrim(thisform.Amount.value);
                CheckAmount(thisform.Amount);
                warning = checkField(thisform.Amount, "Amount", warning);
            }
            warning = checkField(thisform.BeneficiaryID, "Area of Support", warning);
            warning = checkField(thisform.first_name, "First Name", warning);
            warning = checkField(thisform.last_name, "Last Name", warning);
            warning = checkField(thisform.address_line_1, "Address Line 1", warning);
            warning = checkField(thisform.city, "City", warning);
            warning = checkSelect(thisform.state, "State", warning);
            warning = checkField(thisform.zip, "ZIP/Postal Code", warning);
            warning = checkSelect(thisform.country, "Country", warning);
            warning = checkField(thisform.email_address, "Primary Email", warning);
            warning = checkField(thisform.CardName, "Cardholder's Name", warning);
            warning = checkField(thisform.CardNumber, "Credit Card Number", warning);
            warning = checkField(thisform.CardSecNumber, "CVV Number", warning);
            warning = checkField(thisform.CardType, "Card Type", warning);
            warning = checkField(thisform.BillAddress1, "Billing Address Line 1", warning);
            warning = checkField(thisform.BillCity, "Billing City", warning);
            warning = checkField(thisform.BillZip, "Billing ZIP/Postal Code", warning);
            warning = checkSelect(thisform.BillCountry, "Billing ", warning);
            if (warning != "") {
                warning = "Please enter the following fields to continue:\n- " + warning + "";
                alert(warning);
                if (focus_field != "") focus_field.focus();
                return false;
            }

            if (thisform.email_address != null)
                if (thisform.email_address.value != "")
                    if (validEmail(thisform.email_address.value) == false) {
                        thisform.email_address.focus();
                        return false;
                    }
            if (thisform.email_address_1 != null)
                if (thisform.email_address_1.value != "")
                    if (validEmail(thisform.email_address_1.value, "You have entered an invalid email address.") == false) {
                        thisform.email_address_1.focus();
                        return false;
                    }
            if (thisform.email_address_2 != null)
                if (thisform.email_address_2.value != "")
                    if (validEmail(thisform.email_address_2.value, "You have entered an invalid email address.") == false) {
                        thisform.email_address_2.focus();
                        return false;
                    }
            if ((thisform.zip != null) && (thisform.country != null))
                if (checkCountryZip(thisform.zip, thisform.country) == false) {
                    thisform.zip.focus();
                    return false;
                }

            if (!ccTypeValid(thisform.CardNumber, thisform.CardType)) {
                alert("Your credit card number is invalid - please reenter");
                thisform.CardNumber.focus();
                return false;
            }
            if (!((null == thisform.CardSecNumber) || ("undefined" == typeof(thisform.CardSecNumber)))) {
                if (!ccCVVCheck(thisform.CardSecNumber.value)) {
                    alert("Your CVV number is invalid - please reenter");
                    thisform.CardSecNumber.focus();
                    return false;
                }
            }
            for (i = 0; i < thisform.CardExpyr.options.length; i++)
                if (thisform.CardExpyr.options[i].selected) expyear = thisform.CardExpyr.options[i].value;
            for (i = 0; i < thisform.CardExpmn.options.length; i++)
                if (thisform.CardExpmn.options[i].selected) expmonth = thisform.CardExpmn.options[i].value;
            if ((expyear < 2012) || (expyear == 2012 && expmonth < 5)) {
                thisform.CardExpmn.focus();
                alert("Your credit card is expired - please reenter");
                return false;
            }

            if ((thisform.BillZip != null) && (thisform.BillCountry != null))
                if (checkCountryZip(thisform.BillZip, thisform.BillCountry) == false) {
                    //alert("Please enter a valid zip code");
                    thisform.BillZip.focus();
                    return false;
                }

            thisform.action = "https://www.kintera.org/site/apps/ka/sd/donateprocess.asp?c=**cindex**&b=**bindex**&targetURL=**targetURL**";
            if (document.all) //IE
                document.all["Processing"].innerHTML = "<font class='Alert' ><i> Processing...</i></font>";
            else if (!document.all && document.getElementById) //NN6
                document.getElementById("Processing").innerHTML = "<font class='Alert' ><i> Processing...</i></font>";

            //DH - 07/25/2011
            sessvars.allfields = $('form').serializeArray();
            return true;

        }

        function CountTotal(ptrAmt, ptrNum, ptrTotal) {
            var thisform, numGift, i, j;
            thisform = document.SUPPORTER287377;
            CheckAmount(ptrAmt);
            for (i = 0; i < ptrNum.length; i++)
                if (ptrNum[i].selected) numGift = Math.round(ptrNum.options[i].value) + 1;
            ptrTotal.value = ptrAmt.value * numGift;

        }

        function CountTerm(ptrAmt, ptrNum, ptrTotal) {
            var numGift;
            CheckAmount(ptrAmt);
            for (var i = 0; i < ptrNum.length; i++)
                if (ptrNum[i].selected) numGift = Math.round(ptrNum.options[i].value) + 1;
            ptrAmt.value = ptrTotal.value / numGift;
        }

        function SetAmount(thisform, amt) {
            if (recurring_type == 'Y') {

                thisform.TotalAmount.value = amt;
                CountTerm(thisform.RecurringAmount, thisform.NumberOfPayments, thisform.TotalAmount);

            } else thisform.Amount.value = amt;
        }

        function CheckAmtLevel(thisform, pointer) {
            var i, j;
            CheckAmount(pointer);

            return false;
        }

        function CheckAmount(pointer) {
            var returnValue, amountValue;
            for (i = 0; i <= pointer.value.length - 1; i++);
            pointer.value = pointer.value.replace(",", "");
            amountValue = jsDV_strTrim(pointer.value);
            if (amountValue != "") {
                returnValue = jsDV_isValidMoney(amountValue);
                if (returnValue == "-1") {
                    alert("Please enter a valid amount");
                    pointer.value = "";
                    pointer.focus();
                    return false;
                } else pointer.value = returnValue;

                if (amountValue < 1) {
                    alert("Please enter a minimum donation amount of $1");
                    pointer.value = "";
                    //pointer.focus();
                    return false;
                }
                if (amountValue > 100000) {
                    alert("Please enter a maximum donation amount of $100,000");
                    pointer.value = "";
                    pointer.focus();
                    return false;
                }
            }
        }

        function ChangeName(thisform) {
            thisform.CardName.value = thisform.FirstName.value + " " + thisform.LastName.value;
            return true;
        }

        function ChangeAddress(thisform) {
            if (thisform.CheckAddress.value == "on") {
                if (thisform.address_line_1 != null) thisform.BillAddress1.value = thisform.address_line_1.value;
                if (thisform.address_line_2 != null) thisform.BillAddress2.value = thisform.address_line_2.value;
                if (thisform.city != null) thisform.BillCity.value = thisform.city.value;
                if (thisform.province != null) thisform.BillProvince.value = thisform.province.value;
                if (thisform.zip != null) thisform.BillZip.value = thisform.zip.value;
                if (thisform.state != null) setSelectValue(thisform.BillState, thisform.state.value);
                if (thisform.country != null) setSelectValue(thisform.BillCountry, thisform.country.value);
                thisform.CheckAddress.value = "off";
            } else {
                thisform.BillAddress1.value = "";
                thisform.BillAddress2.value = "";
                thisform.BillCity.value = "";
                thisform.BillProvince.value = "";
                thisform.BillZip.value = "";
                setSelectValue(thisform.BillState, "");
                setSelectValue(thisform.BillCountry, "");
                thisform.CheckAddress.value = "on";
            }
            return true;
        }

        function CheckRecurring(thisform, thetype) {
            recurring_type = thetype;
            if (recurring_type == 'Y') {

                thisform.TotalAmount.value = thisform.Amount.value;
                CountTerm(thisform.RecurringAmount, thisform.NumberOfPayments, thisform.TotalAmount);

                thisform.Amount.disabled = true;
                if (thisform.RecurringAmount != null) thisform.RecurringAmount.disabled = false;
                if (thisform.BillingScheduleID != null) thisform.BillingScheduleID.disabled = false;
                if (thisform.NumberOfPayments != null) thisform.NumberOfPayments.disabled = false;
                if (thisform.BillingScheduleID.value == "0") {
                    if (thisform.Amount1 != null) thisform.Amount1.disabled = false;

                }
            } else {

                thisform.Amount.value = thisform.TotalAmount.value;

                thisform.Amount.disabled = false;
                if (thisform.RecurringAmount != null) thisform.RecurringAmount.disabled = true;
                if (thisform.BillingScheduleID != null) thisform.BillingScheduleID.disabled = true;
                if (thisform.NumberOfPayments != null) thisform.NumberOfPayments.disabled = true;
            }
        }

        function RefreshCaptcha() {
            document.getElementById('imgCaptcha').src = 'pagelet/captcha/CaptchaRenderer.aspx?s=&r=' + Math.random() + '';
        }

        function toggleUKTaxpayerStatus(checkedVal) {
                var declareGiftRadio;

                if (document.getElementById("Declare_Gift_Aid") == "undefined")
                    return false;

                if (document.getElementById("Declare_Gift_Aid") == null)
                    return false;

                declareGiftRadio = document.getElementsByName("Declare_Gift_Aid");
                if (checkedVal == "Y") {
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

        function getValue(name) {
            try {
                var q = unescape(location.search.substring(1)).split(/[=&]/);
                for (var j = 0; j < q.length; j += 2) {
                    if (q[j] == name) {
                        return q[j + 1];
                    }
                }
                return null;
            } catch (err) {}
        }

        function setValue(obj) {
            try {
                var myValue = getValue("BeneficiaryID");
                for (var i = 0; i < obj.options.length; i++) {
                    if (obj.options[i].value == myValue) {
                        obj.selectedIndex = i;
                    }
                }
            } catch (err) {}
        }

        setValue(document.SUPPORTER287377.BeneficiaryID);
        //-->
        $.extend({
            getUrlVars: function() {
                var vars = [],
                    hash;
                var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                for (var i = 0; i < hashes.length; i++) {

                    hash = hashes[i].split('=');
                    vars.push(hash[0]);
                    vars[hash[0]] = hash[1];
                }
                return vars;
            },
            getUrlVar: function(name) {
                return $.getUrlVars()[name];
            }
        });
        var amt = $.getUrlVar("amount");
        if (amt != undefined) {
            amt = $.getUrlVar("amount").split("#"); //remove possible hash tag
            $('input[name=Amount]').val(amt[0]);
        }