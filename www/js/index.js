/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log(device.platform);
        if(device.platform == "Android" || device.platform == "iOS") {
            isApp = true;
        }
        console.log(isApp);
        if(isApp){
            //defaultPdfUrl="js/pdfJs/web/viewer.html?file=file:///android_asset/www/pdf/";
            defaultPdfUrl="js/pdfJs/web/viewer.html?file=";
        } else {
            defaultPdfUrl="js/pdfJs/web/viewer.html?file=../../../pdf/";
        }
        console.log(defaultPdfUrl);
    }
};

app.initialize();

$(document).ready(function (event) {
    //getPdfData();

    if(device.platform == "iOS") {
        $(document).on("focus","#globalOvrly",function(e){
            e.preventDefault(); 
            e.stopPropagation();
            
            $("#homePage").css("height",$(window).height()-$(window).height()/1.8+"px");
        });
    }

    $(document).on("blur","#globalOvrly",function(e){
        e.preventDefault(); 
        e.stopPropagation();
        $("#homePage").css("height","auto");
    });

    var dWidth = $(document).width();
    var dHeight = $(document).height();
    console.log("WIDTH == " + dWidth);
    console.log("HEIGHT == " + dHeight);
    //$("#pdfImage").css("width",dWidth+"px");


    $("#overlayConent").css("height",dHeight + "px");
    $("#pdfImage").css("height",dHeight+"px");

    document.addEventListener("backbutton", function(e){
        if($(".overlay").hasClass("on")) {
            $(".overlay").removeClass("on");
            return false;
        } else {
            parent.history.back();
        }
    });

    $(document).on("click","#actionMain",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        var selY = $("#selectYear").val();
        selectedYear = selY;
        var pdfObj = pdfLink[selectedYear];
        if(pdfObj == "" || pdfObj == undefined){
            alert("Comming soon");
            return false;
        } 
        $.mobile.changePage("homePage.html",{transition: "flip"});
        
    });

    $(document).on("submit","#formGlobalSearch",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();

        var keyVal = $("#globalOvrly").val();
        if(keyVal == "") {
            showAlert("Kata pencarian tidak boleh kosong");
            return false;
        }

        globalSearchKeyword=keyVal;
        $.mobile.changePage("searchResult.html",{transition: "slide",reloadPage: true});
    });
    $(document).on("click","#globalSchOrlyBtn",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();

        var keyVal = $("#globalOvrly").val();
        if(keyVal == "") {
            showAlert("Kata pencarian tidak boleh kosong");
            return false;
        }

        globalSearchKeyword=keyVal;
        $.mobile.changePage("searchResult.html",{transition: "slide",reloadPage: true});
    });

    $(document).on("click","#globalSearch",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        $("#menuContainer").removeClass("on");
        $("#searchGlobalOverlay").addClass("on");

        setTimeout(function(){
            $("#globalOvrly").focus();
        },500);
    });

    $(document).on("click","#globalClose",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        $("#searchGlobalOverlay").removeClass("on");
    });

    $(document).on("click","#mainImage",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        gettext("https://cdn.mozilla.net/pdfjs/tracemonkey.pdf").then(function (text) {
            alert('parse ' + text);
        }, function (reason) {
            console.error(reason);
        });
    });

    $(document).on("click",".changeLPI",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        var selY = $(this).text();
        selectedYear = selY;
        var pdfObj = pdfLink[selectedYear];
        if(pdfObj == "" || pdfObj == undefined){
            alert("Comming soon");
            return false;
        }
        console.log($.mobile.activePage.attr('id'));

        if($.mobile.activePage.attr('id') == 'homePage'){
            triggerCreate=true;
        }
        console.log(triggerCreate);
        $.mobile.changePage("homePage.html",{transition: "flip",reloadPage: true});
    });

    // $(document).on("click","#searchBookmarkOverlay",function(e){
    //     e.stopPropagation();
    //     e.stopImmediatePropagation();
    //     $("#searchBookmarkOverlay").removeClass("on");
    // });
    
    $(document).on("pageinit","#homePage",function(e){
        var dWidth = $(document).width();
        var dHeight = $(document).height();
        
        //var sdBarH = $(window).height();

        //$("#homePage #overlayConent").css("height",sdBarH-160 + "px");
        $("#tagLine").html("LPI " + selectedYear);
        $("#redBarTitle").html("Laporan Perekonomian Indonesia "+ selectedYear );
        if(selectedUrl !=""){
            $(".pdfTitle").html("LPI " + selectedYear);
            $("#pdfImage").attr("src",selectedUrl);
            $("#pdfContainer").addClass("on");
            selectedUrl="";

            setTimeout(function(){ 
                if(highlightRender == "Y") {
                    var iframe = document.getElementById('pdfImage');
                    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
                    
                    innerDoc.getElementById("viewFind").click();
                    innerDoc.getElementById("findInput").value = highlightText;
                    innerDoc.getElementById("findHighlightAll").click();
                    
                    highlightRender="";
                    highlightText="";
                }
            }, 800);
        }

        var pdfObj = pdfLink[selectedYear].content;
        console.log(pdfObj);
        var restHtml="";
        console.log($("#laporanTitle"));

        $("#laporanTitle").html(pdfLink[selectedYear].title);
        
        if(selectedYear!="2018"){
            $("#prakataDwn").hide();
            $("#dewanGubernur").hide();
        } else {
            $("#prakataDwn").show();
            $("#dewanGubernur").show();
            $("#readPrakata").attr("data-url",pdfLink[selectedYear].prakataLink);
            $("#readPrakata").attr("data-chapter","Prakata");
        }
        
        $("#prakataId").html(pdfLink[selectedYear].prakata);
        
        $("#mainImage").html('<img src="img/'+pdfLink[selectedYear].cover+'" />');
        for(var i=0;i<pdfObj.length;i++) {
            restHtml +='<div class="card">'+
                        '    <div class="card-header" id="headingOne">'+
                        '        <div class="collapseTitle" data-toggle="collapse" data-target="#collapse'+i+'" aria-expanded="true" aria-controls="collapseOne">'+
                                pdfObj[i].title+
                        '            <span class="collapseArrow"><img src="img/leftArrow.png" class="collapseArrowImg"/></span>'+
                        '        </div>'+
                        '    </div>'+
                        ' '+
                        '    <div id="collapse'+i+'" class="collapse" aria-labelledby="headingOne" data-parent="#mainContent">'+
                        '    <div class="card-body">'+
                                pdfObj[i].desc+
                        '        <div id="readPdf" data-url="'+pdfObj[i].link+'" data-chapter="'+pdfObj[i].title+'"  class="readMoreBtn smallBtn">Baca lebih ></div>'+
                        '    </div>'+
                        '    </div>'+
                        '</div>';
        }
        
        console.log(triggerCreate);
        if(triggerCreate){
            
            triggerCreate=false;
            generateHome();
        }
        generateSideBar("homePage");

        $("#mainContent").html(restHtml);
    });

    $(document).on("pageinit","#bookmarkPage",function(e){
        var dHeight = $(window).height();
        $("#bookmarkPage .content").css("min-height",dHeight+"px");
        $("#bkTagLine").html("LPI " + selectedYear);

        generateSideBar("bookmarkPage");
        //$("#bookmarkPage #overlayConent").css("height",dHeight-160 + "px");

        var bookmarkJson = JSON.parse(window.localStorage.getItem("bookmark"));
        
        var restHtml = "";

        if(bookmarkJson != null && bookmarkJson != undefined){
            var obj = bookmarkJson[selectedYear];
            
            if(obj != undefined){
                for(var i=0;i<obj.length;i++){
                    restHtml += '<li class="bookmarkList clearfix">'+
                                '<div class="bkTitle">'+obj[i].title+'<br/>'+obj[i].chapter+'</div>'+
                                '<div class="actionBookmark">'+
                                '<div class="deleteBookmark" data-idx="'+i+'" data-page="'+obj[i].page+'"><img src="img/deleteIcon.png" /></div>'+
                                '<div class="goToDetail" data-url="'+obj[i].url+'" data-chap="'+obj[i].chapter+'"><img src="img/goToIcon.png" /></div>'+
                                '<div>'+
                                '</li>';
                }

                $("#bookmarkList").html(restHtml);

                $('#pagination-container').pagination({
                    dataSource: obj,
                    callback: function(data, pagination) {
                        // template method of yourself
                        var html = renderBookmark(data);
                        $("#bookmarkList").html(html);
                    }
                });
            }
        } else {
            restHtml += '<div id="bookmarkEmpty>Tidak ada bookmark</div>';
            $("#bookmarkList").html(restHtml);
        }
        
        $(document).on("click",".deleteBookmark",function(e){
            e.stopPropagation();
            e.stopImmediatePropagation();
            var dataId = $(this).attr("data-idx");
            
            var bkObj = JSON.parse(window.localStorage.getItem("bookmark"));
            var bkArr = [];

            if(bkObj != null) {
                if(bkObj[selectedYear] == null){
                    bkObj[selectedYear] = [];
                } else {
                    bkArr = bkObj[selectedYear];
                }
            } else {
                bkObj = {};
            }

            bkArr.splice(dataId, 1);
            
            bkObj[selectedYear] = bkArr;

            console.log(bkObj);

            window.localStorage.setItem("bookmark",JSON.stringify(bkObj));

            showAlert("Bookmark telah dihapus");
            
            $(this).parent().parent().remove();
        });

        $(document).on("click","#bkSearch",function(e){
            e.stopPropagation();
            e.stopImmediatePropagation();
            $("#searchBookmarkOverlay").addClass("on");
        });

        $(document).on("click",".goToDetail",function(e){
            e.stopPropagation();
            e.stopImmediatePropagation();

            selectedUrl = $(this).attr("data-url");
            selectedChapter = $(this).attr("data-chap");
            $.mobile.changePage("homePage.html",{transition: "flip"});
        });

        $(document).on("click","#schOrlyBtn",function(e){
            e.stopPropagation();
            e.stopImmediatePropagation();
            var key = $("#schOvrly").val();
            if(key =="") {
                showAlert("Kata Pencarian tidak boleh kosong");
                return false;
            }

            reRenderBookmark(key);

        });
    });

    $(document).on("pageshow","#searchResultPage",function(e){
        var dHeight = $(window).height();
        $("#searchResultPage .content").css("min-height",dHeight+"px");
        $("#searchResTagLine").html("LPI " + selectedYear);
    });

    $(document).on("pageinit","#searchResultPage",function(e){
        var dHeight = $(window).height();
        $("#searchResultPage .content").css("min-height",dHeight+"px");
        $("#searchResTagLine").html("LPI " + selectedYear);

        generateSideBar("searchResultPage");
        console.log(globalSearchKeyword);
        $(".keyword").html('"' + globalSearchKeyword + '"');
        
        var bookmarkJson = JSON.parse(window.localStorage.getItem("bookmark"));
        var notesJson = JSON.parse(window.localStorage.getItem("notes"));
        var highlightJson = JSON.parse(window.localStorage.getItem("highlight"));

        var restHtml = "";
        
        if(bookmarkJson != null && bookmarkJson != undefined){
            var obj = bookmarkJson[selectedYear];
            if(obj != undefined){
                for(var i=0;i<obj.length;i++){
                    var checkStr = obj[i].title + " " +obj[i].chapter;
                    
                    if(checkStr.toLowerCase().search(globalSearchKeyword.toLowerCase()) > -1){
                        restHtml += '<li class="bookmarkList clearfix">'+
                                '<div class="bkTitle">Bookmark</div>'+
                                '<div class="bkTitle">'+obj[i].title+'<br/>'+obj[i].chapter+'</div>'+
                                '<div class="actionBookmark">'+
                                '<div class="deleteBookmark" data-idx="'+i+'" data-page="'+obj[i].page+'"><img src="img/deleteIcon.png" /></div>'+
                                '<div class="goToDetail" data-url="'+obj[i].url+'" data-chap="'+obj[i].chapter+'"><img src="img/goToIcon.png" /></div>'+
                                '<div>'+
                                '</li>';
                    }
                }
            }
        }

        if(notesJson != null && notesJson != undefined){
            var obj = notesJson[selectedYear];

            if(obj != undefined){
                for(var i=0;i<obj.length;i++){
                    var checkStr = obj[i].title + " " +obj[i].notes;
                    
                    if(checkStr.toLowerCase().search(globalSearchKeyword.toLowerCase()) > -1){

                        restHtml += '<li class="notesList clearfix">'+
                                    '<div class="bkTitle">Notes</div>'+
                                    '<div class="bkTitle">'+obj[i].title+'<br/><span>'+obj[i].notes+'</span></div>'+
                                    '<div class="actionBookmark">'+
                                    '<div class="deleteNotes" data-idx="'+i+'" data-page="'+obj[i].page+'"><img src="img/deleteIcon.png" /></div>'+
                                    '<div class="goToDetail" data-url="'+obj[i].url+'" ><img src="img/goToIcon.png" /></div>'+
                                    '<div>'+
                                    '</li>';
                    }
                }
            }
        }

        if(highlightJson != null && highlightJson != undefined){
            var obj = highlightJson[selectedYear];

            if(obj != undefined){
                for(var i=0;i<obj.length;i++){
                    var checkStr = obj[i].title + " " +obj[i].text;
                    
                    if(checkStr.toLowerCase().search(globalSearchKeyword.toLowerCase()) > -1){
                        restHtml += '<li class="highlightList clearfix">'+
                                    '<div class="bkTitle">Highlight</div>'+
                                    '<div class="bkTitle">'+obj[i].title+'<br/><span>'+obj[i].text+'</span></div>'+
                                    '<div class="actionBookmark">'+
                                    '<div class="deleteHighligh" data-idx="'+i+'" data-page="'+obj[i].page+'"><img src="img/deleteIcon.png" /></div>'+
                                    '<div class="goToHighlight" data-url="'+obj[i].url+'" data-hText="'+obj[i].text+'"><img src="img/goToIcon.png" /></div>'+
                                    '<div>'+
                                    '</li>';
                    }
                }
            }
        }
        $("#searchResultList").html(restHtml);
    });

    $(document).on("pageinit","#notesPage",function(e){
        var dHeight = $(window).height();
        $("#notesPage .content").css("min-height",dHeight+"px");
        $("#notesTagLine").html("LPI " + selectedYear);

        generateSideBar("notesPage");
        //$("#notesPage #overlayConent").css("height",dHeight-160 + "px");

        var notesJson = JSON.parse(window.localStorage.getItem("notes"));
        
        var restHtml = "";

        if(notesJson != null && notesJson != undefined){
            var obj = notesJson[selectedYear];
            
            if(obj != undefined){
                for(var i=0;i<obj.length;i++){
                    restHtml += '<li class="notesList clearfix">'+
                                '<div class="bkTitle">'+obj[i].title+'<br/><span>'+obj[i].notes+'</span></div>'+
                                '<div class="actionBookmark">'+
                                '<div class="deleteNotes" data-idx="'+i+'" data-page="'+obj[i].page+'"><img src="img/deleteIcon.png" /></div>'+
                                '<div class="goToDetail" data-url="'+obj[i].url+'" ><img src="img/goToIcon.png" /></div>'+
                                '<div>'+
                                '</li>';
                }

                $("#notesList").html(restHtml);

                $('#pagination-container-nts').pagination({
                    dataSource: obj,
                    callback: function(data, pagination) {
                        // template method of yourself
                        var html = renderNotes(data);
                        $("#notesList").html(html);
                    }
                });
            }
        } else {
            restHtml += '<div id="bookmarkEmpty>Tidak ada bookmark</div>';
            $("#notesList").html(restHtml);
        }
        

        $(document).on("click",".deleteNotes",function(e){
            e.stopPropagation();
            e.stopImmediatePropagation();
            var dataId = $(this).attr("data-idx");
            
            var bkObj = JSON.parse(window.localStorage.getItem("notes"));
            var bkArr = [];

            if(bkObj != null) {
                if(bkObj[selectedYear] == null){
                    bkObj[selectedYear] = [];
                } else {
                    bkArr = bkObj[selectedYear];
                }
            } else {
                bkObj = {};
            }

            bkArr.splice(dataId, 1);
            
            bkObj[selectedYear] = bkArr;

            console.log(bkObj);

            window.localStorage.setItem("notes",JSON.stringify(bkObj));

            showAlert("Notes telah dihapus");
            
            $(this).parent().parent().remove();
        });

        $(document).on("click",".goToDetail",function(e){
            e.stopPropagation();
            e.stopImmediatePropagation();

            selectedUrl = $(this).attr("data-url");
            
            $.mobile.changePage("homePage.html",{transition: "flip"});
        });

        $(document).on("click","#deleteNotesDetail",function(e){
            e.stopPropagation();
            e.stopImmediatePropagation();

            var dataId = $("#notesPage").attr("idx");
            
            var bkObj = JSON.parse(window.localStorage.getItem("notes"));
            var bkArr = [];

            if(bkObj != null) {
                if(bkObj[selectedYear] == null){
                    bkObj[selectedYear] = [];
                } else {
                    bkArr = bkObj[selectedYear];
                }
            } else {
                bkObj = {};
            }

            bkArr.splice(dataId, 1);
            
            bkObj[selectedYear] = bkArr;

            console.log(bkObj);

            window.localStorage.setItem("notes",JSON.stringify(bkObj));

            showAlert("Notes telah dihapus");
            
            $("#notesPage").val("");
        });

        $(document).on("click","#ntsSearch",function(e){
            e.stopPropagation();
            e.stopImmediatePropagation();
            $("#searchBookmarkOverlay").addClass("on");
        });

        $(document).on("click","#schNtsOrlyBtn",function(e){
            e.stopPropagation();
            e.stopImmediatePropagation();
            var key = $("#schNtsOvrly").val();
            if(key =="") {
                showAlert("Kata Pencarian tidak boleh kosong");
                return false;
            }

            reRenderNotes(key);
        });
    });

    $(document).on("pageinit","#highlightPage",function(e){
        var dHeight = $(window).height();
        $("#highlightPage .content").css("min-height",dHeight+"px");
        $("#highlightTagLine").html("LPI " + selectedYear);
        
        generateSideBar("highlightPage");
        //$("#highlightPage #overlayConent").css("height",dHeight-160 + "px");

        var notesJson = JSON.parse(window.localStorage.getItem("highlight"));
        
        var restHtml = "";

        if(notesJson != null && notesJson != undefined){
            var obj = notesJson[selectedYear];
            
            if(obj != undefined){
                for(var i=0;i<obj.length;i++){
                    restHtml += '<li class="highlightList clearfix">'+
                                '<div class="bkTitle">'+obj[i].title+'<br/><span>'+obj[i].text+'</span></div>'+
                                '<div class="actionBookmark">'+
                                '<div class="deleteHighligh" data-idx="'+i+'" data-page="'+obj[i].page+'"><img src="img/deleteIcon.png" /></div>'+
                                '<div class="goToHighlight" data-url="'+obj[i].url+'" data-hText="'+obj[i].text+'"><img src="img/goToIcon.png" /></div>'+
                                '<div>'+
                                '</li>';
                }
                $("#highlightList").html(restHtml);

                $('#pagination-container-high').pagination({
                    dataSource: obj,
                    callback: function(data, pagination) {
                        // template method of yourself
                        var html = renderHigh(data);
                        $("#highlightList").html(html);
                    }
                });
            }
        } else {
            restHtml += '<div id="bookmarkEmpty>Tidak ada highlight</div>';
            $("#highlightList").html(restHtml);
        }

        $(document).on("click",".deleteHighligh",function(e){
            e.stopPropagation();
            e.stopImmediatePropagation();
            var dataId = $(this).attr("data-idx");
            
            var bkObj = JSON.parse(window.localStorage.getItem("highlight"));
            var bkArr = [];

            if(bkObj != null) {
                if(bkObj[selectedYear] == null){
                    bkObj[selectedYear] = [];
                } else {
                    bkArr = bkObj[selectedYear];
                }
            } else {
                bkObj = {};
            }

            bkArr.splice(dataId, 1);
            
            bkObj[selectedYear] = bkArr;

            console.log(bkObj);

            window.localStorage.setItem("highlight",JSON.stringify(bkObj));

            showAlert("Highlight telah dihapus");
            
            $(this).parent().parent().remove();
        });

        $(document).on("click",".goToHighlight",function(e){
            e.stopPropagation();
            e.stopImmediatePropagation();

            selectedUrl = $(this).attr("data-url");
            highlightText = $(this).attr("data-hText");
            highlightRender = "Y";        
            $.mobile.changePage("homePage.html",{transition: "flip"});
        });

        $(document).on("click","#highSearch",function(e){
            e.stopPropagation();
            e.stopImmediatePropagation();
            $("#searchBookmarkOverlay").addClass("on");
        });

        $(document).on("click","#schHighOrlyBtn",function(e){
            e.stopPropagation();
            e.stopImmediatePropagation();
            var key = $("#schHighOvrly").val();
            if(key =="") {
                showAlert("Kata Pencarian tidak boleh kosong");
                return false;
            }

            reRenderHighlight(key);

        });
    });

    $(document).on("click",".collapseTitle",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        if($(this).attr("aria-expanded") == "true") {
            $(this).find(".collapseArrowImg").addClass("down");
        } else {
            $(this).find(".collapseArrowImg").removeClass("down");
        }
    });

    $(document).on("click","#readPdf, #readPrakata",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        // var url =$(this).attr("data-url");
        // selectedChapter = $(this).attr("data-chapter");
        // var finalUrl = defaultPdfUrl+selectedYear+"/"+url;
        // $("#pdfImage").attr("src",finalUrl);

        var url =$(this).attr("data-url");
        selectedChapter = $(this).attr("data-chapter");
        var finalUrl = "js/pdfJs/web/viewer.html?file="+url;
        console.log(finalUrl);

        $("#pdfImage").attr("src",finalUrl);

        $(".pdfTitle").html("LPI " + selectedYear);
        
        $("#pdfContainer").addClass("on");

    });

    $(document).on("click",".sideBarPdf",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        // var url =$(this).attr("data-url");
        // selectedChapter = $(this).attr("data-chapter");
        // var finalUrl = defaultPdfUrl+selectedYear+"/"+url;
        
        var url =$(this).attr("data-url");
        selectedChapter = $(this).attr("data-chapter");
        var finalUrl = "js/pdfJs/web/viewer.html?file="+url;

        console.log(finalUrl);

        $("#pdfImage").attr("src",finalUrl);
        $(".pdfTitle").html("LPI " + selectedYear);
        
        $("#pdfContainer").addClass("on");
        $("#menuContainer").removeClass("on");
    });

    $(document).on("click",".goToIndex",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        $.mobile.changePage("index.html",{transition: "flip"});
    });

    $(document).on("click",".goToHome",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        $.mobile.changePage("homePage.html",{reloadPage: true,transition: "flip"});
    });

    $(document).on("click","#pdfHeaderOverlay",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        $("#pdfContainer").removeClass("on");
    });

    $(document).on("click","#menuNav",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        $(".selectedYear").html(selectedYear);
        $("#menuContainer").addClass('on');
    });

    $(document).on("click","#menuNavOverlay",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        $(".selectedYear").html(selectedYear);
        $("#menuContainer").addClass('on');
    });

    $(document).on("click","#closeOverlay",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        $("#menuContainer").removeClass('on');
    });
    
    $(document).on("click","#goToPrakata",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        $("#menuContainer").removeClass('on');
        console.log($("#prakata").offset().top);
        $(window).scrollTop($("#prakata").offset().top);
    });
    
    $(document).on("click","#goToDewan",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        $("#menuContainer").removeClass('on');
        console.log($("#prakata").offset().top);
        $(window).scrollTop($("#dewanGubernur").offset().top);
    });

    $(document).on("click","#documentFooter",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();

        var bkObj = JSON.parse(window.localStorage.getItem("notes"));
        var bkArr = [];

        if(bkObj != null) {
            if(bkObj[selectedYear] == null){
                bkObj[selectedYear] = [];
            } else {
                bkArr = bkObj[selectedYear];
            }
        } else {
            bkObj = {};
        }

        var iframe = document.getElementById('pdfImage');
        var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

        var pageNum = innerDoc.getElementById("pageNumber").value;

        var index = bkArr.findIndex(x => x.idx==pageNum+"-"+selectedChapter);
        console.log(index);

        if(index > -1) {
            $("#notesPage").val(bkArr[index].notes);
            $("#notesPage").attr("idx",index);
        } else {
            $("#notesPage").val("");
            $("#notesPage").attr("idx","");
        }
        
        $("#darkOverlay").fadeIn();
        $("#notesOverlay").fadeIn();
    });

    $(document).on("click","#darkOverlay",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        $("#darkOverlay").fadeOut();
        $("#notesOverlay").fadeOut();
    });

    $(document).on("click","#goToBookmark",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        $.mobile.changePage("bookmark.html",{transition: "slide"});
    });

    $(document).on("click","#goNotes",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        $.mobile.changePage("notes.html",{transition: "slide"});
    });

    $(document).on("click","#goHighlight",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        $.mobile.changePage("highlight.html",{transition: "slide"});
    });

    $(document).on("click","#submitNotes",function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        var iframe = document.getElementById('pdfImage');
        var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

        var pdfUrl = $("#pdfImage").attr("src");
        
        console.log(pdfUrl);

        var pageNum = innerDoc.getElementById("pageNumber").value;
        var url = innerDoc.getElementById("viewBookmark").getAttribute('href');
        var notesPage = $("#notesPage").val();

        if(notesPage == ""){
            showAlert("Notes tidak boleh kosong");
            return false;
        }

        var notesObj = {
            "page" : pageNum,
            "url"  : pdfUrl+""+url,
            "notes" : notesPage,
            "chapter" : selectedChapter,
            "title" : "pg. " + pageNum,
            "idx" : pageNum+"-"+selectedChapter 
        }

        var noteObj = JSON.parse(window.localStorage.getItem("notes"));
        var noteArr = [];

        if(noteObj != null) {
            if(noteObj[selectedYear] == null){
                noteObj[selectedYear] = [];
            } else {
                noteArr = noteObj[selectedYear];
            }
        } else {
            noteObj = {};
        }
        
        noteArr.push(notesObj);
        noteObj[selectedYear] = noteArr;

        console.log(noteObj);

        window.localStorage.setItem("notes",JSON.stringify(noteObj));

        showAlert("Notes telah ditambahkan");
        $("#darkOverlay").fadeOut();
        $("#notesOverlay").fadeOut();
    });
    
});

function listDir(path){
    window.resolveLocalFileSystemURL(path,
        function (fileSystem) {
            var reader = fileSystem.createReader();
            reader.readEntries(
                function (entries) {
                    console.log(entries);
                },
                function (err) {
                    console.log(err);
                }
            );
        }, function (err) {
            console.log(err);
        }
    );
}


function setBookmark(el){
    console.log(el.href);
    var fileUrl = el.href.split("?")[1];
    
    var urlParams = new URLSearchParams(fileUrl.replace("#","&"));

    console.log(urlParams);
    console.log(urlParams.get("page"));
    console.log(urlParams.get("zoom"));

    var bookmarkObj = {
        "page" : urlParams.get("page"),
        "url"  : el.href,
        "chapter" : selectedChapter,
        "selectedYear" : selectedYear,
        "title" : "pg. " + urlParams.get("page")
    }

    var bkObj = JSON.parse(window.localStorage.getItem("bookmark"));
    var bkArr = [];

    if(bkObj != null) {
        if(bkObj[selectedYear] == null){
            bkObj[selectedYear] = [];
        } else {
            bkArr = bkObj[selectedYear];
        }
    } else {
        bkObj = {};
    }
    
    bkArr.push(bookmarkObj);
    bkObj[selectedYear] = bkArr;

    console.log(bkObj);
    
    showAlert("Bookmark telah ditambahkan");
    window.localStorage.setItem("bookmark",JSON.stringify(bkObj));

    // var excerpt = "";

    // gettext(el.href,urlParams.get("page")).then(function (text) {
    //     if(text != undefined && text != "") {
    //         excerpt = text;

    //         var bookmarkObj = {
    //             "page" : urlParams.get("page"),
    //             "url"  : el.href,
    //             "chapter" : selectedChapter,
    //             "title" : "pg. " + urlParams.get("page") + " " +excerpt
    //         }
        
    //         var bkObj = JSON.parse(window.localStorage.getItem("bookmark"));
    //         var bkArr = [];
        
    //         if(bkObj != null) {
    //             if(bkObj[selectedYear] == null){
    //                 bkObj[selectedYear] = [];
    //             } else {
    //                 bkArr = bkObj[selectedYear];
    //             }
    //         } else {
    //             bkObj = {};
    //         }
            
    //         bkArr.push(bookmarkObj);
    //         bkObj[selectedYear] = bkArr;
        
    //         console.log(bkObj);
            
    //         showAlert("Bookmark telah ditambahkan");
    //         window.localStorage.setItem("bookmark",JSON.stringify(bkObj));
    //     }
    // }, function (reason) {
    //     console.error(reason);
    // });

}

function showAlert(content) {
    var restHtml= '     <div class="modal-dialog modal-sm">'+
                   '       <div class="modal-content">'+
                   '         <div class="modal-header">'+
                   '           <h4 class="modal-title">Bank Indonesia</h4>'+
                   '         </div>'+
                   '         <div class="modal-body">'+
                   '           <p>'+content+'</p>'+
                   '         </div>'+
                   '         <div class="modal-footer">'+
                   '           <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
                   '         </div>'+
                   '       </div>'+        
                   '     </div>';
    $("#mainModal").html(restHtml);
    $("#mainModal").modal('show');
}

function generateSideBar(target){
    var pdfObj = pdfLink[selectedYear].content;
    var restHtml="";

    for(var i=0;i<pdfObj.length;i++) {
        restHtml +='<li class="sideBarPdf '+pdfObj[i].class+'" data-url="'+pdfObj[i].link+'" data-chapter="'+pdfObj[i].title+'">'+
                        pdfObj[i].title+
                    '</li>';
    }
    
    var listLPIs =Array.from(listLPI);

    listLPIs.splice($.inArray(selectedYear, listLPIs),1);

    var lpiHtml="";

    for(var o=0;o<listLPIs.length;o++){
        lpiHtml +='<li class="changeLPI">'+listLPIs[o]+'</li>';
    }
    $("#"+target+ " #listLpi").html(lpiHtml);

    $("#"+target+ " #sideBar").html(restHtml);
}

function saveHighlights(){
    var iframe = document.getElementById('pdfImage');
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

    var pdfUrl = $("#pdfImage").attr("src");
    
    console.log(pdfUrl);

    var pageNum = innerDoc.getElementById("pageNumber").value;
    var url = innerDoc.getElementById("viewBookmark").getAttribute('href');
    var notesPage = $("#notesPage").val();
    var htText = innerDoc.getElementById("findInput").value;

    console.log("htText " + htText);

    var bookmarkObj = {
        "page" : pageNum,
        "url"  : pdfUrl+""+url,
        "chapter" : selectedChapter,
        "text" : htText,
        "title" : "pg. " + pageNum
    }

    var bkObj = JSON.parse(window.localStorage.getItem("highlight"));
    var bkArr = [];

    if(bkObj != null) {
        if(bkObj[selectedYear] == null){
            bkObj[selectedYear] = [];
        } else {
            bkArr = bkObj[selectedYear];
        }
    } else {
        bkObj = {};
    }
    
    bkArr.push(bookmarkObj);
    bkObj[selectedYear] = bkArr;

    console.log(bkObj);
    
    showAlert("Highlight telah ditambahkan");
    window.localStorage.setItem("highlight",JSON.stringify(bkObj));   
}

function gettext(pdfUrl,pgNum){
    // If absolute URL from the remote server is provided, configure the CORS
    // header on that server.
    var url = pdfUrl;
    var finalText = "";

    // Asynchronous download of PDF
    //var loadingTask = pdfjsLib.getDocument(url);
    //loadingTask.promise.then(function(pdf) {
    var pdf = pdfjsLib.getDocument(url);
    return pdf.then(function(pdf) {
        
        var countPromises = []; // collecting all page promises
        countPromises.push(pdf.getPage(pgNum).then(function(page) {
            
            var textContent = page.getTextContent();
            
            return textContent.then(function(text){ // return content promise
                return text.items.map(function (s) { console.log(s.str); return s.str; }).join(''); // value page text 
            });
        }));
        // Wait for all pages and join text
        return Promise.all(countPromises).then(function (texts) {
            return texts.join('');
        });
    }, function (reason) {
        // PDF loading error
        console.error(reason);
    });
}

function generateHome(){
    loading.show();
    setTimeout(function(){
        var dWidth = $(document).width();
        var dHeight = $(document).height();

        //var sdBarH = $(window).height();
        
        // console.log(triggerCreate);
        // if(triggerCreate){
        //     console.log("HERE");
        //     console.log(selectedYear);
        //     triggerCreate=false;
        //     $("#homePage").trigger('pageinit');
        // }

        //$("#homePage #overlayConent").css("height",sdBarH-160 + "px");
        $("#tagLine").html("LPI " + selectedYear);
        $("#redBarTitle").html("Laporan Perekonomian Indonesia "+ selectedYear );
        if(selectedUrl !=""){
            $(".pdfTitle").html("LPI " + selectedYear);
            $("#pdfImage").attr("src",selectedUrl);
            $("#pdfContainer").addClass("on");
            selectedUrl="";

            setTimeout(function(){ 
                if(highlightRender == "Y") {
                    var iframe = document.getElementById('pdfImage');
                    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
                    
                    innerDoc.getElementById("viewFind").click();
                    innerDoc.getElementById("findInput").value = highlightText;
                    innerDoc.getElementById("findHighlightAll").click();
                    
                    highlightRender="";
                    highlightText="";
                }
            }, 800);
        }

        var pdfObj = pdfLink[selectedYear].content;
        
        var restHtml="";

        $("#laporanTitle").html(pdfLink[selectedYear].title);
        if(selectedYear!="2018"){
            $("#prakataDwn").hide();
            $("#dewanGubernur").hide();
        } else {
            $("#prakataDwn").show();
            $("#dewanGubernur").show();
        }
        $("#prakataId").html(pdfLink[selectedYear].prakata);
        $("#mainImage").html('<img src="img/'+pdfLink[selectedYear].cover+'" />');
        for(var i=0;i<pdfObj.length;i++) {
            restHtml +='<div class="card">'+
                        '    <div class="card-header" id="headingOne">'+
                        '        <div class="collapseTitle" data-toggle="collapse" data-target="#collapse'+i+'" aria-expanded="true" aria-controls="collapseOne">'+
                                pdfObj[i].title+
                        '            <span class="collapseArrow"><img src="img/leftArrow.png" class="collapseArrowImg"/></span>'+
                        '        </div>'+
                        '    </div>'+
                        ' '+
                        '    <div id="collapse'+i+'" class="collapse" aria-labelledby="headingOne" data-parent="#mainContent">'+
                        '    <div class="card-body">'+
                                pdfObj[i].desc+
                        '        <div id="readPdf" data-url="'+pdfObj[i].link+'" data-chapter="'+pdfObj[i].title+'"  class="readMoreBtn smallBtn">Baca lebih ></div>'+
                        '    </div>'+
                        '    </div>'+
                        '</div>';
        }
        
        generateSideBar("homePage");

        $("#mainContent").html(restHtml);
        loading.hide();
    },800);
}

var loading = {
    show: function() {
        $("#loadingModal").modal('show');
    },
    hide: function() {
        $("#loadingModal").modal('hide');
    }
}

function getPdfData(){
    $.ajax({
        type: "GET",
        url: "http://lokuttaradhammaapp.com/api/bi/init",
        data: "",
        async:true,
        crossDomain: true,
        timeout: "60000",
        beforeSend: function( xhr ) {
            xhr.setRequestHeader("athAppKey", "-=l0kuttar@Dhamm@2018=-");
        },
        success: function (response) {
            if (typeof(response)=="string") {
                response = $.parseJSON(response);
            }
            console.log(JSON.stringify(response));
            console.log(response);
            if(response.error_code == "0") {
                //callback(response);
                pdfLink = response;
                window.localStorage.setItem("pdfLink",pdfLink);
            } else {
                console.log("ERROR");
                //$.mobile.loading('hide');
                //showAlert(response.message);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            if(ajaxOptions === "timeout") {
                //loading.hide();
                //showAlert(AJAX_TIMEOUT);
                console.log("TIMEOUT");
            } else {
                //loading.hide();
                //showAlert(ajaxOptions);
                console.log(thrownError);
            }
        }
    });
}

function checkBookmark(pgNm){
    var iframe = document.getElementById('pdfImage');
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

    var bookmarkJson = JSON.parse(window.localStorage.getItem("bookmark"));
        
    if(bookmarkJson != null && bookmarkJson != undefined){
        var obj = bookmarkJson[selectedYear];
        console.log(obj.length);
        for(var i=0;i<obj.length;i++){
            console.log(pgNm + " " + selectedChapter+ " " + selectedYear);
            console.log(obj[i].page + " " + obj[i].chapter + " " +obj[i].selectedYear);
            if(obj[i].page == pgNm && obj[i].chapter == selectedChapter && obj[i].selectedYear == selectedYear){
                return true;
            }
        }
    }
}

function renderBookmark(obj) {
    var restHtml="";
    for(var i=0;i<obj.length;i++){
        restHtml += '<li class="bookmarkList clearfix">'+
                    '<div class="bkTitle">'+obj[i].title+'<br/>'+obj[i].chapter+'</div>'+
                    '<div class="actionBookmark">'+
                    '<div class="deleteBookmark" data-idx="'+i+'" data-page="'+obj[i].page+'"><img src="img/deleteIcon.png" /></div>'+
                    '<div class="goToDetail" data-url="'+obj[i].url+'" data-chap="'+obj[i].chapter+'"><img src="img/goToIcon.png" /></div>'+
                    '<div>'+
                    '</li>';
    }
    return restHtml;
}

function reRenderBookmark(key) {
    var restHtml = "";

    var bookmarkJson = JSON.parse(window.localStorage.getItem("bookmark"));
        
    if(bookmarkJson != null && bookmarkJson != undefined){
        
        var obj = bookmarkJson[selectedYear];
        var dataSource = [];

        if(obj != undefined){
            for(var i=0;i<obj.length;i++){
                var checkStr = obj[i].title + " " +obj[i].chapter;
                
                if(checkStr.toLowerCase().search(key.toLowerCase()) > -1){
                    dataSource.push(obj[i]);

                    restHtml += '<li class="bookmarkList clearfix">'+
                            '<div class="bkTitle">'+obj[i].title+'<br/>'+obj[i].chapter+'</div>'+
                            '<div class="actionBookmark">'+
                            '<div class="deleteBookmark" data-idx="'+i+'" data-page="'+obj[i].page+'"><img src="img/deleteIcon.png" /></div>'+
                            '<div class="goToDetail" data-url="'+obj[i].url+'" data-chap="'+obj[i].chapter+'"><img src="img/goToIcon.png" /></div>'+
                            '<div>'+
                            '</li>';
                }
            }

            $("#bookmarkList").html(restHtml);
            
            $('#pagination-container').pagination({
                dataSource: dataSource,
                callback: function(data, pagination) {
                    // template method of yourself
                    var html = renderBookmark(data);
                    $("#bookmarkList").html(html);
                }
            });  
            
            $("#searchBookmarkOverlay").removeClass("on");
        }
    }
}

function renderNotes(obj) {
    var restHtml="";
    for(var i=0;i<obj.length;i++){
        restHtml += '<li class="notesList clearfix">'+
                        '<div class="bkTitle">'+obj[i].title+'<br/><span>'+obj[i].notes+'</span></div>'+
                        '<div class="actionBookmark">'+
                        '<div class="deleteNotes" data-idx="'+i+'" data-page="'+obj[i].page+'"><img src="img/deleteIcon.png" /></div>'+
                        '<div class="goToDetail" data-url="'+obj[i].url+'" ><img src="img/goToIcon.png" /></div>'+
                        '<div>'+
                        '</li>';
    }
    return restHtml;
}

function reRenderNotes(key) {
    var restHtml = "";

    var notesJson = JSON.parse(window.localStorage.getItem("notes"));
        
    if(notesJson != null && notesJson != undefined){
        
        var obj = notesJson[selectedYear];
        var dataSource = [];

        if(obj != undefined){
            for(var i=0;i<obj.length;i++){
                var checkStr = obj[i].title + " " +obj[i].notes;
                
                if(checkStr.toLowerCase().search(key.toLowerCase()) > -1){
                    dataSource.push(obj[i]);

                    restHtml += '<li class="notesList clearfix">'+
                                '<div class="bkTitle">'+obj[i].title+'<br/><span>'+obj[i].notes+'</span></div>'+
                                '<div class="actionBookmark">'+
                                '<div class="deleteNotes" data-idx="'+i+'" data-page="'+obj[i].page+'"><img src="img/deleteIcon.png" /></div>'+
                                '<div class="goToDetail" data-url="'+obj[i].url+'" ><img src="img/goToIcon.png" /></div>'+
                                '<div>'+
                                '</li>';
                }
            }

            $("#notesList").html(restHtml);
            
            $('#pagination-container-nts').pagination({
                dataSource: dataSource,
                callback: function(data, pagination) {
                    // template method of yourself
                    var html = renderNotes(data);
                    $("#notesList").html(html);
                }
            });  
            
            $("#searchBookmarkOverlay").removeClass("on");
        }
    }
}

function renderHigh(obj){
    var restHtml="";
    for(var i=0;i<obj.length;i++){
        restHtml += '<li class="highlightList clearfix">'+
                        '<div class="bkTitle">'+obj[i].title+'<br/><span>'+obj[i].text+'</span></div>'+
                        '<div class="actionBookmark">'+
                        '<div class="deleteHighligh" data-idx="'+i+'" data-page="'+obj[i].page+'"><img src="img/deleteIcon.png" /></div>'+
                        '<div class="goToHighlight" data-url="'+obj[i].url+'" data-hText="'+obj[i].text+'"><img src="img/goToIcon.png" /></div>'+
                        '<div>'+
                        '</li>';
    }
    return restHtml;
}

function reRenderHighlight(key){
    var restHtml = "";

    var notesJson = JSON.parse(window.localStorage.getItem("highlight"));
        
    if(notesJson != null && notesJson != undefined){
        
        var obj = notesJson[selectedYear];
        var dataSource = [];

        if(obj != undefined){
            for(var i=0;i<obj.length;i++){
                var checkStr = obj[i].title + " " +obj[i].text;
                
                if(checkStr.toLowerCase().search(key.toLowerCase()) > -1){
                    dataSource.push(obj[i]);

                    restHtml += '<li class="highlightList clearfix">'+
                                '<div class="bkTitle">'+obj[i].title+'<br/><span>'+obj[i].text+'</span></div>'+
                                '<div class="actionBookmark">'+
                                '<div class="deleteHighligh" data-idx="'+i+'" data-page="'+obj[i].page+'"><img src="img/deleteIcon.png" /></div>'+
                                '<div class="goToHighlight" data-url="'+obj[i].url+'" data-hText="'+obj[i].text+'"><img src="img/goToIcon.png" /></div>'+
                                '<div>'+
                                '</li>';
                }
            }

            $("#highlightList").html(restHtml);
            
            $('#pagination-container-high').pagination({
                dataSource: dataSource,
                callback: function(data, pagination) {
                    // template method of yourself
                    var html = renderHigh(data);
                    $("#highlightList").html(restHtml);
                }
            });  
            
            $("#searchBookmarkOverlay").removeClass("on");
        }
    }
}