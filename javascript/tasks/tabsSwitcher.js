//---------------------------------------------------------------------------
//                        tabsSwitcher.js
//---------------------------------------------------------------------------
function toggleObjectVisibility(elementId, isVisible){
	var obj = document.getElementById(elementId);
	
	if (obj == null)
		return;

	if (isVisible)
		obj.className = obj.className.replace('_hidden', '_visible');
	else
		obj.className = obj.className.replace('_visible', '_hidden');
}

function hideAllTabs() {
	toggleObjectVisibility("tabChars", false);   
	toggleObjectVisibility("tabStrings", false);  
	toggleObjectVisibility("tabArrays", false); 
	/*var mainObj = document.getElementsByTagName("main");
	var tabs = mainObj[0].getElementsByTagName("div");
	for (var tab in tabs){
		if (isVisible)
			tab.className = tab.className.replace('_hidden', '_visible');
		else
			tab.className = tab.className.replace('_visible', '_hidden');
	}*/
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function onTabClick(senderId){
	hideAllTabs();
	toggleObjectVisibility(senderId, true);
	toggleObjectVisibility("nonexistantobject", true);
}
