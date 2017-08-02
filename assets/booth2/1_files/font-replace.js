if($.browser.msie){
	if(!$.fontAvailable('UniversLTStdBold')||!$.fontAvailable('UniversLTStdBoldCn')||!$.fontAvailable('UniversLTStdLight')) {
		Cufon.replace('.univers-std',{fontFamily:'UniversLTStd'});
		Cufon.replace('.univers-std.boldcn',{fontFamily:'UniversLTStdBoldCn'});
		Cufon.replace('.univers-std.light',{fontFamily:'UniversLTStdLight'});
		Cufon.replace('#sub_content h3',{fontFamily:'UniversLTStdLight'});
	}
}
