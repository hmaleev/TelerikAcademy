﻿(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            //window.gotocontacts = function gotocontacts(e) {
            //    e.preventDefault();
            //    WinJS.Navigation.navigate('/pages/contacts/contacts.html')
            //}
        }
    });
})();

function gotocreation(e) {
    e.preventDefault();
    WinJS.Navigation.navigate('/pages/creation/creation.html');
}

function GoToSpaceFlightPrograms(e) {
    e.preventDefault();
    WinJS.Navigation.navigate('/pages/spaceFlightPrograms/spaceFlightPrograms.html');
}