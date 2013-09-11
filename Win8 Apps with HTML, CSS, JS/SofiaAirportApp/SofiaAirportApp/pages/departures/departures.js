﻿// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/departures/departures.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.

        ready: function (element, options) {
            // TODO: Initialize the page here.
            var p = document.getElementById("txt");
            var table = document.getElementById("table-departures");
            var date = new Date().toGMTString();
            date = date.replace("UTC", "GMT");
            var pageinfo = document.getElementById("pageinfo");
            var tableEndRow;
            var currentPage;
            var endPage;
            var results = Windows.Storage.ApplicationData.current.roamingSettings.values["displayFlights"];
            var update = document.getElementById("update");

            update.addEventListener("click", function () {
                WinJS.Navigation.navigate("/pages/departures/departures.html");
            }, false);
            if (results===undefined) {
                results = "20";
            }

            UpdateInformation();
          
            function UpdateInformation(e) {
                WinJS.UI.Fragments.clearCache();
                table.innerHTML = "<tbody></tbody>";
               // console.log("Test");
                WinJS.xhr({
                    url: "http://www.sofia-airport.bg/pages/departures.aspx",
                    type: "GET"
                }).then(function (response) {
                    console.log(response);

                    pageinfo.innerHTML = toStaticHTML(response.responseText);
                    currentPage = document.getElementsByClassName("gridLinkActivePage");
                    currentPage = currentPage[0].textContent;
                    pageinfo.outerHTML = "";
                    switch (results) {
                        case "10": endPage = parseInt(currentPage) + 1; break;
                        case "20": endPage = parseInt(currentPage) + 2; break;
                    }

                    var x = 0;
                    console.log("here");
                   
                    for (var i = currentPage; i < endPage; i++) {

                        WinJS.xhr({
                            url: "http://www.sofia-airport.bg/pages/departures.aspx?lm01=103&lm02=51&lm03=51&p=" + i,
                           // url: "http://www.sofia-airport.bg/pages/departures.aspx?lm01=103&lm02=51&lm03=51&p=" + i+"&time="+date,
                            type: "GET",
                            headers: {
                                    "If-Modified-Since": date
                            }
                        }).then(function (response) {
                            p.innerHTML += toStaticHTML(response.responseText);
                            table.innerHTML += document.getElementsByTagName("tbody")[x].innerHTML;


                            if (tableEndRow !== undefined && tableEndRow < table.rows.length) {
                                table.rows[tableEndRow + 1].innerHTML = "";
                                table.rows[tableEndRow].innerHTML = "";
                            }
                            tableEndRow = table.rows.length;
                            x++;
                            table.rows[0].outerHTML = "<tr><th>Дата</th><th>Час</th><th>Полет</th><th>Направление</th><th>Терминал</th><th>Очакван час</th><th>Статус</th><th>Наземен оператор</th></tr>";
                            table.rows[1].innerHTML = " ";
                            for (var i = 1; i < table.rows.length; i++) {
                                console.log(i);
                                if (i % 2 == 1) {
                                    table.rows[i].style.backgroundColor = "#200C69";
                                    table.rows[i].style.color = "#ffffff";
                                }
                                else {
                                    table.rows[i].style.backgroundColor = "#0093DD";
                                    table.rows[i].style.color = "#ffffff";
                                }
                            }
                            console.log(table.innerHTML);
                            date = new Date().toGMTString()
                        },
                   function (error) {
                       console.log(error);
                   });
                    }
                })
            }
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
          
            //addconsole.log("here");
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });
})();