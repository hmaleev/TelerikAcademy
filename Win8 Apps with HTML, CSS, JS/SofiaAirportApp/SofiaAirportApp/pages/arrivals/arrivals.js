﻿// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/arrivals/arrivals.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            var p = document.getElementById("txt");
            var table = document.getElementById("table");
            table.innerHTML = "";
            var x = 0;
            var tableEndRow;
            var currentPage;
            var endPage;
            var results = "20";
            var link;

           WinJS.xhr({
                url: "http://www.sofia-airport.bg/pages/arrivals.aspx",
                type: "GET"
           }).then(function (response) {
               console.log(response);
               response.responseText
               var pageinfo = document.getElementById("pageinfo");
               pageinfo.innerHTML = toStaticHTML(response.responseText);
               currentPage = document.getElementsByClassName("gridLinkActivePage");
               currentPage = currentPage[0].textContent;
               pageinfo.outerHTML = "";

               switch (results) {
                   case "10": endPage = parseInt(currentPage) + 1; break;
                   case "20": endPage = parseInt(currentPage) + 2; break;
                   case "30": endPage = parseInt(currentPage) + 3; break;
               }

               GetPages();
           })
          
           function GetPages() {
               for (var i = currentPage; i < endPage; i++) {

                   WinJS.xhr({
                       url: "http://www.sofia-airport.bg/pages/arrivals.aspx?lm01=103&lm02=51&lm03=51&p="+i,
                       type: "GET"
                   }).then(function (response) {
                       p.innerHTML += toStaticHTML(response.responseText);
                       table.innerHTML += document.getElementsByTagName("table")[x].innerHTML;

                       if (tableEndRow !== undefined) {
                           table.rows[tableEndRow].innerHTML = "";
                           table.rows[tableEndRow+1].innerHTML = "";

                      
                       table.rows[0].outerHTML = "<tr><th>Дата</th><th>Час</th><th>Полет</th><th>Направление</th><th>Терминал</th><th>Очакван час</th><th>Статус</th><th>Наземен оператор</th></tr>";
                       table.rows[1].innerHTML = " ";
                       for (var i = 1; i < table.rows.length; i++) {
                           console.log(i);
                           if (i < table.rows.length-1 && table.rows[i+1].outerHTML!="<tr></tr>"    ) {

                               table.rows[i + 1].cells[3].outerHTML = "";
                               table.rows[i+1].cells[8].outerHTML = ""
                              // table.rows[i + 1].cells[4].childNodes[0].attributes.removeNamedItem("href");
                           }
                               if (i % 2 == 1) {
                                   table.rows[i].style.backgroundColor = "#200C69";
                                   table.rows[i].style.color = "#ffffff";
                               }
                               else {
                                   table.rows[i].style.backgroundColor = "#0093DD";
                                   table.rows[i].style.color = "#ffffff";
                               }
                            
                           }

                       }
                       tableEndRow = table.rows.length;
                       x++;

                   },
              function (error) {
                  console.log(error);
              });
               }
           }
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />
            console.log(viewState);
            // TODO: Respond to changes in viewState.
        }
    });
})();