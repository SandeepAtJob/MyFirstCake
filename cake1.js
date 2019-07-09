//Progress Bar
function doOnCurrentPageChanged(survey) {
    document
            .getElementById('surveyPrev')
            .style
            .display = !survey.isFirstPage
            ? "inline"
            : "none";
    document
            .getElementById('surveyNext')
            .style
            .display = !survey.isLastPage
            ? "inline"
            : "none";
    document
            .getElementById('surveyComplete')
            .style
            .display = survey.isLastPage
            ? "inline"
            : "none";
    // css w3 school
    var progressBar = document.getElementById('surveyProgress');
    oldWidth = progressBar.style.width.slice(0, -1);
    newWidth = ((survey.currentPageNo + 1) / survey.visiblePageCount) * 100;

    for (i = 0; i < newWidth; i++) {
        //oldWidth = 1 + i;
        progressBar.style.width = newWidth + '%';
        progressBar.innerHTML = newWidth + '%';
    }

    if (document.getElementById('surveyPageNo'))
        document
                .getElementById('surveyPageNo')
                .value = survey.currentPageNo;
}

var defaultThemeColors = Survey
        .StylesManager
        .ThemeColors["default"];
defaultThemeColors["$main-color"] = "#2489C5";
Survey
        .StylesManager
        .applyTheme();


var json = {
//    "title": "Dog: ![Dog](https://surveyjs.io/Content/Images/examples/markdown/dog.svg =14x14)",
    "title": "![M](https://i.ibb.co/rmRFCJQ/Logo50p.png)",
    "showQuestionNumbers": "off",
    "clearInvisibleValues": "onHidden",
    "pages": [
//        {
//            "name": "Intro",
//            "visibleIf": "false",
//            "elements": [
//                {
//                    "type": "html",
//                    "name": "Intro1",
//                    "html": "\n<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n<img src=\"https://i.ibb.co/rmRFCJQ/Logo50p.png\" alt=\"Mobile Measure\">\n<!--\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n-->\n</body>\n</html>"
//                }
//            ]
//        },
        {
            "name": "page1",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "S1",
                    "title": "S1. Please select the city you stay.",
                    "isRequired": true,
                    "choices": [{"value": 1, "text": "Delhi"}, {"value": 2, "text": "NCR"}, {"value": 3, "text": "Mumbai"}, {"value": 4, "text": "Kolkata"}, {"value": 5, "text": "Bangalore"}, {"value": 6, "text": "Hyderabad"}, {"value": 7, "text": "Pune"}],
                    "hasOther": true,
                    "otherText": "Other (Please Specify)"
                }
            ]
        },
        {
            "name": "page2",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "S2",
                    "title": "S2. Select Gender.",
                    "isRequired": true,
                    "choices": [{"value": 1, "text": "Male"}, {"value": 2, "text": "Female"}]
                }
            ]
        },
        {
            "name": "page3",
            "elements": [
                {
                    "type": "text",
                    "name": "S3",
                    "title": "Please mention your age in the space below?",
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "numeric",
                            "text": "Please check the age ",
                            "minValue": 8,
                            "maxValue": 99,
                            "AG.setValue": 3
                        }
                    ],
                    "inputType": "number"
                },
                {
                    "type": "radiogroup",
                    "name": "AG",
                    "title": "Age Group",
                    "visibleIf": "{S3} notempty",
                    "enableIf": "false",
                    "colCount": "4",
                    "choices": [{"value": "1", "text": "Less than 15 Years"}, {"value": "2", "text": "15-20 years"}, {"value": "3", "text": "21-30 years"}, {"value": "4", "text": "31-40 years"}, {"value": "5", "text": "41-50 years"}, {"value": "6", "text": "51-60 years"}, {"value": "7", "text": "60+ years"}, {"value": "9", "text": "None of above"}]
                }
            ]
        },
        {
            "name": "page4",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "S4a",
                    "title": "S4a. Please select highest level of education of the chief wage earner in your household? Chief Wage Earner is the person who contributes the maximum to your household expenses.",
                    "isRequired": true,
                    "choices": [{"value": "1", "text": "Illiterate"}, {"value": "2", "text": "Literate but no formal schooling/ School Upto 4 years"}, {"value": "3", "text": "Schooling 5-9 years"}, {"value": "4", "text": "SSC/ HSC"}, {"value": "5", "text": "Some college but not graduate"}, {"value": "6", "text": "Graduate / Post Graduate General"}, {"value": "7", "text": "Graduate / Post Graduate Professional"}]
                }
            ]
        },
        {
            "name": "page5",
            "elements": [
                {
                    "type": "checkbox",
                    "name": "S4b",
                    "title": "S4b. From below list, please select the items you have at home for you or your family\’s use?",
                    "isRequired": true,
                    "choices": [{"value": 1, "text": "Electricity Connection"}, {"value": 2, "text": "Ceiling Fan"}, {"value": 3, "text": "LPG Stove"}, {"value": 4, "text": "Two Wheeler (Motorcycle / Scooter)"}, {"value": 5, "text": "Colour TV"}, {"value": 6, "text": "Refrigerator"}, {"value": 7, "text": "Washing Machine"}, {"value": 8, "text": "Car / Jeep / Van"}, {"value": 9, "text": "Air Conditioner"}, {"value": 10, "text": "Personal Computer/Laptop"}]
                },
                {
                    "type": "radiogroup",
                    "name": "SEC",
                    "title": "SEC",
                    "colCount": "5",
                    "visibleIf": "{S4b} notempty",
                    "enableIf": "false",
                    "choices": [{"value": "1", "text": "A1"}, {"value": "2", "text": "A2"}, {"value": "3", "text": "A3"}, {"value": "4", "text": "B1"}, {"value": "5", "text": "B2"}, {"value": "6", "text": "C1"}, {"value": "7", "text": "C2"}, {"value": "8", "text": "D1"}, {"value": "9", "text": "D2"}, {"value": "10", "text": "E1"}, {"value": "11", "text": "E2"}, {"value": "12", "text": "E3"}]
                }
            ]
        }
    ],
    triggers: [
        {
            type: "complete",
            name: "AG",
            operator: "equal",
            value: "1"
        }
    ]
};
window.survey = new Survey.Model(json);
//var q = survey.getQuestionByName('SEC');
//q.hasOther = true; 
//q.colCount = 12; 
//survey.render();


//var onValueChangingProcessing = false;
survey.onValueChanged.add(function (survey, options) {
    //Age force to Group
    if (options.name == "S3") {
        var AG;
        if (survey.getValue("S3") < 15) {
            AG=1;
        } else if (survey.getValue("S3") < 21) {
            AG=2;
        } else if (survey.getValue("S3") < 31) {
            AG=3;
        } else if (survey.getValue("S3") < 41) {
            AG=4;
        } else if (survey.getValue("S3") < 51) {
            AG=5;
        } else if (survey.getValue("S3") < 61) {
            AG=6;
        } else if (survey.getValue("S3") >= 61) {
            AG=7;
        } else {
            AG=9;
        }
        survey.setValue("AG", AG);
    }
    if (options.name == "S4a" || options.name == "S4b") {
        var S4bl = 0;//S4b lenght
        if (undefined !== survey.getValue("S4b") && survey.getValue("S4b").length)
            S4bl = survey.getValue("S4b").length;
        var X = parseInt("" + S4bl + survey.getValue("S4a"), 10) //X = Concatenate(S4a lenght,S4avalue)
        var SEC;
        if(X===1) SEC=12;if(X===2) SEC=11;if(X===3) SEC=11;if(X===4) SEC=11;if(X===5) SEC=11;if(X===6) SEC=10;if(X===7) SEC=9;
        if(X===11) SEC=11;if(X===12) SEC=10;if(X===13) SEC=10;if(X===14) SEC=10;if(X===15) SEC=9;if(X===16) SEC=9;if(X===17) SEC=9;
        if(X===21) SEC=10;if(X===22) SEC=10;if(X===23) SEC=9;if(X===24) SEC=9;if(X===25) SEC=8;if(X===26) SEC=8;if(X===27) SEC=8;
        if(X===31) SEC=9;if(X===32) SEC=9;if(X===33) SEC=8;if(X===34) SEC=8;if(X===35) SEC=7;if(X===36) SEC=7;if(X===37) SEC=7;
        if(X===41) SEC=8;if(X===42) SEC=7;if(X===43) SEC=7;if(X===44) SEC=6;if(X===45) SEC=6;if(X===46) SEC=5;if(X===47) SEC=5;
        if(X===51) SEC=7;if(X===52) SEC=6;if(X===53) SEC=6;if(X===54) SEC=5;if(X===55) SEC=4;if(X===56) SEC=4;if(X===57) SEC=4;
        if(X===61) SEC=6;if(X===62) SEC=5;if(X===63) SEC=5;if(X===64) SEC=4;if(X===65) SEC=3;if(X===66) SEC=3;if(X===67) SEC=3;
        if(X===71) SEC=6;if(X===72) SEC=4;if(X===73) SEC=4;if(X===74) SEC=3;if(X===75) SEC=3;if(X===76) SEC=2;if(X===77) SEC=2;
        if(X===81) SEC=4;if(X===82) SEC=3;if(X===83) SEC=3;if(X===84) SEC=3;if(X===85) SEC=2;if(X===86) SEC=2;if(X===87) SEC=2;
        if(X===91) SEC=4;if(X===92) SEC=3;if(X===93) SEC=3;if(X===94) SEC=2;if(X===95) SEC=2;if(X===96) SEC=1;if(X===97) SEC=1;
        if(X===101) SEC=4;if(X===102) SEC=3;if(X===103) SEC=3;if(X===104) SEC=2;if(X===105) SEC=2;if(X===106) SEC=1;if(X===107) SEC=1;
        survey.setValue("SEC", SEC);
    }

});

//User Time
var startTime, endTime;
var timeDiff
var diffDays
var diffHrs
var diffMins
function start() {
    startTime = new Date();
}
;
function end() {
    endTime = new Date();
    timeDiff = endTime.getTime() - startTime.getTime(); //in ms
    //console.log(startTime.getTime());
    //console.log(endTime.getTime());
    //console.log(timeDiff);
    // strip the ms
    timeDiff = timeDiff / (1000 * 60);
    //console.log(timeDiff);
    survey.setValue("user_time_spent", timeDiff);
    // get seconds
    var seconds = Math.round(timeDiff);
    //console.log(seconds + " seconds");
}
start();
//*****UserID
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}
function getUrlParam(parameter, defaultvalue) {
    var urlparameter = defaultvalue;
    if (window.location.href.indexOf(parameter) > -1) {
        urlparameter = getUrlVars()[parameter];
    }
    return urlparameter;
}
var UserID = getUrlParam('UserID', '');
console.log(UserID + " UserID");
survey.setValue("UserID", UserID);
survey.setValue("Collection", "survey2");


survey.onComplete.add(function (sender, options) {
    end();
    options.showDataSaving();//you may pass a text parameter to show your own text
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://Localhost:3000/post-survey");
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.onload = xhr.onerror = function () {
        if (xhr.status == 200) {
            options.showDataSavingSuccess(); //you may pass a text parameter to show your own text
            //Or you may clear all messages
            //options.showDataSavingClear();
        } else {
            //Error
            options.showDataSavingError(); //you may pass a text parameter to show your own text
        }
    };
    //sender.data.params[0]='Sandy';
    xhr.send(JSON.stringify(sender.data));
});

//Create showdown mardown converter
var converter = new showdown.Converter();
survey
        .onTextMarkdown
        .add(function (survey, options) {
            //convert the mardown text to html
            var str = converter.makeHtml(options.text);
            //remove root paragraphs <p></p>
            str = str.substring(3);
            str = str.substring(0, str.length - 4);
            //set html
            options.html = str;
        });

//$("#surveyElement").Survey({model: survey});
$("#surveyElement").Survey({model: survey, onCurrentPageChanged: doOnCurrentPageChanged});
doOnCurrentPageChanged(survey);

