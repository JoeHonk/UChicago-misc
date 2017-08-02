

      function ChangeShipAddress(thisform) {
        if (thisform.CheckShipAddress.value == "on") {
          if (thisform.first_name != null) thisform.Field6133811.value = thisform.first_name.value;
          if (thisform.last_name != null) thisform.Field6133812.value = thisform.last_name.value;
            if (thisform.address_line_1 != null) thisform.Field6128808.value = thisform.address_line_1.value;
            if (thisform.address_line_2 != null) thisform.Field6128809.value = thisform.address_line_2.value;
            if (thisform.city != null) thisform.Field6128810.value = thisform.city.value;
            if (thisform.province != null) thisform.Field6128813.value = thisform.province.value;
            if (thisform.zip != null) thisform.Field6128812.value = thisform.zip.value;
            if (thisform.state != null) setSelectValue(thisform.Field6128811, thisform.state.value);
            if (thisform.country != null) setSelectValue(thisform.Field6128814, thisform.country.value);
            thisform.CheckShipAddress.value = "off";
        } else {
            thisform.Field6128808.value = "";
            thisform.Field6128809.value = "";
            thisform.Field6128810.value = "";
            thisform.Field6128813.value = "";
            thisform.Field6128812.value = "";
            setSelectValue(thisform.Field6128811, "");
            setSelectValue(thisform.Field6128814, "");
            thisform.CheckShipAddress.value = "on";
        }
        return true;
    }
