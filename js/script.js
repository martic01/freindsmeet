function indexInput() {
    return parseInt(document.getElementById("input1").value);
}

function textInput() {
    return document.getElementById("input2").value;
}
function colourInput() {
    return document.getElementById("input3").value;
}
function firstLetter(textinput) {
    let newText = textinput.trim();
    let shift =  newText.charAt(0).toUpperCase();
    let remain = newText.slice(1,newText.length);
    let joinin = shift + remain
    let trimed = joinin
    return trimed
}

function compareInput() {
    return parseInt(document.getElementById("compareinput").value);
}
function textUpercase() {
    let newText = $("li").html();
    let shift =  newText.charAt(0).toUpperCase()
    return shift
}
function increaseByone() {
    return indexInput() + 1;
}
function increaseByone2() {
    return compareInput() + 1;
}
function PromtTimer() {
    $(".letgo").show()
    $(".compare").show()
    $(".changecomp").hide()
    setTimeout(function () {
        $(".letgo").hide()
        $(".compare").hide()
        $(".changecomp").show()
        $(".image").html('<img src="img/close.webp">')
        $(".return").html(compareInput() + " matches you might become friends" )
    }, 8000);
}
function PromtTimer2() {
    $(".letgo").show()
    $(".compare").show()
    $(".changecomp").hide()
    setTimeout(function () {
        $(".letgo").hide()
        $(".compare").hide()
        $(".changecomp").show()
        $(".image").html('<img src="img/almost.webp">')
        $(".return").html(compareInput() + " matches you will be bestfriends" )
    }, 8000);
}
function PromtTimer3() {
    $(".letgo").show()
    $(".compare").show()
    $(".changecomp").hide()
    setTimeout(function () {
        $(".letgo").hide()
        $(".compare").hide()
        $(".changecomp").show()
        $(".image").html('<img src="img/good.webp">')
        $(".return").html("All matches you will be Bestfriends , if you two are opposite gender you might get married" )
    }, 8000);
}
function PromtTimer4() {
    $(".letgo").show()
    $(".compare").show()
    $(".changecomp").hide()
    setTimeout(function () {
        $(".letgo").hide()
        $(".compare").hide()
        $(".changecomp").show()
        $(".image").html('<img src="img/almost.webp">')
        $(".return").html("There is nothing to compare your names match friends list names , that shows you are friends already" )
    }, 8000);
}
function arrayDrop() {
    //   let  renewedArray = {};
    let maxLength = 16
    let minimumLength = 3
    let length1 = $("#input2").val()
    let length2 = $("#input3").val()
    let rule2 = minimumLength > length1.trim().length
    let rule3 = minimumLength > length2.trim().length
    let rule = length1.trim().length > maxLength

    let questNm = $(".questnm").text();
    let quest1 = $(".quest1").text();
    let quest2 = $(".quest2").text();
    let quest3 = $(".quest3").text();
    let quest4 = $(".quest4").text();
    let quest5 = $(".quest5").text();
    let quest6 = $(".quest6").text();
    let questFrdNm = $(".questfrdnm").text();
    let quest8 = $(".quest8").text();
    let quest9 = $(".quest9").text();
    let quest10 = $(".quest10").text();
    let quest11 = $(".quest11").text();
    let quest12 = $(".quest12").text();
    let quest13 = $(".quest13").text();
    let quest14 = $(".quest14").text();
    let questionsArray = [quest1, quest2, quest3, quest4, quest5, quest6, questFrdNm, quest8, quest9, quest10, quest11, quest12, quest13, quest14];
    let name = firstLetter(textInput())
    let colorName = firstLetter(colourInput())
    if (indexInput() === 0 && name !== "" && name !== questNm && !rule2) {
        //   renewedArray[name] = []
        //   var arrayName = renewedArray[name]
        textUpercase()
        $(".name").html(name);
        $(".s").show();
        $("#input1").val(increaseByone())
        $("#input2").removeClass("curve");
        $("#input2").val(questionsArray[0])
        console.log(questionsArray[0])
    } else if (indexInput() === 1 && name !== "" && name !== quest1 && !rule2) {
        $("#food").show();
        // arrayName.concat(name)
        // console.log(renewedArray)
        $(".food").html(name);
        $("#input2").removeClass("curve");
        $("#input1").val(increaseByone())
        $("#input2").val(questionsArray[1])


    }
    else if (indexInput() === 2 && name !== "" && name !== quest2 && !rule2) {
        $("#frnd").show();
        // arrayName.concat(name)
        // console.log(renewedArray)
        $(".frnd").html(name);
        $("#input2").removeClass("curve");
        $("#input1").val(increaseByone())
        $("#input2").val(questionsArray[2])

    } else if (indexInput() === 3 && name !== "" && name !== quest3 && !rule2) {
        $("#num").show();
        // arrayName.concat(name)
        // console.log(renewedArray)
        $(".num").html(name);
        $("#input2").removeClass("curve");
        $("#input1").val(increaseByone())
        $("#input2").val(questionsArray[3])

    } else if (indexInput() === 4 && name !== "" && name !== quest4 && !rule2) {
        $("#game").show();
        // arrayName.concat(name)
        // console.log(renewedArray)
        $(".game").html(name);
        $("#input2").removeClass("curve");
        $("#input1").val(increaseByone())
        $("#input2").val(questionsArray[4])

    } else if (indexInput() === 5 && name !== "" && name !== quest5 && !rule2) {
        $("#movie").show();

        // arrayName.concat(name)
        // console.log(renewedArray)
        $(".movie").html(name);
        $("#input2").removeClass("curve");
        $("#input1").val(increaseByone())
        $("#input2").val(questionsArray[5])

    } else if (indexInput() === 6 && name !== "" && name !== quest6 && !rule2) {
        $("#song").show();
        $("#input3").show();
        // arrayName.concat(name)
        // console.log(renewedArray)
        $(".song").html(name);
        $("#input2").removeClass("curve");
        $("#input3").removeClass("curve");
        $("#input2").prop("type", "color")
        $("#input1").val(increaseByone())


    } else if (indexInput() === 7 && colorName !== "" && !rule2 && !rule3) {
        $("#color").show();
        $("#input1").hide();
        $("#input2").hide();
        $("#input3").hide();
        $("#drop").hide();
        $("#done").show();
        // $("#input3").hide();
        $("#input3").val("Switch");
        $("#color").css("background-color", name);
        $("#input2").prop("type", "text")
        $("#input2").val(questionsArray[6])

        // arrayName.concat(name)
        // console.log(renewedArray)
        $(".color").html(colorName);
        $("#input2").removeClass("curve");
        $("#input1").val(increaseByone())
        $(".edit").show()
        $(".delete").show()
        $(".color").addClass("white");
    } else if (indexInput() === 8 && name !== "" && name !== questFrdNm && !rule2) {
        //   renewedArray[name] = []
        //   var arrayName = renewedArray[name]
        $(".name2").html(name);
        $("#input1").val(increaseByone())
        $("#input2").removeClass("curve");
        $("#input2").val(questionsArray[7])

    } else if (indexInput() === 9 && name !== "" && name !== quest8 && !rule2) {
        $("#food2").show();
        // arrayName.concat(name)
        // console.log(renewedArray)
        $(".food2").html(name);
        $("#input2").removeClass("curve");
        $("#input1").val(increaseByone())
        $("#input2").val(questionsArray[8])


    }
    else if (indexInput() === 10 && name !== "" && name !== quest9 && !rule2) {
        $("#frnd2").show();
        // arrayName.concat(name)
        // console.log(renewedArray)
        $(".frnd2").html(name);
        $("#input2").removeClass("curve");
        $("#input1").val(increaseByone())
        $("#input2").val(questionsArray[9])

    } else if (indexInput() === 11 && name !== "" && name !== quest10 && !rule2) {
        $("#num2").show();
        // arrayName.concat(name)
        // console.log(renewedArray)
        $(".num2").html(name);
        $("#input2").removeClass("curve");
        $("#input1").val(increaseByone())
        $("#input2").val(questionsArray[10])

    } else if (indexInput() === 12 && name !== "" && name !== quest11 && !rule2) {
        $("#game2").show();
        // arrayName.concat(name)
        // console.log(renewedArray)
        $(".game2").html(name);
        $("#input2").removeClass("curve");
        $("#input1").val(increaseByone())
        $("#input2").val(questionsArray[11])

    } else if (indexInput() === 13 && name !== "" && name !== quest12 && !rule2) {
        $("#movie2").show();

        // arrayName.concat(name)
        // console.log(renewedArray)
        $(".movie2").html(name);
        $("#input2").removeClass("curve");
        $("#input1").val(increaseByone())
        $("#input2").val(questionsArray[12])

    } else if (indexInput() === 14 && name !== "" && name !== quest13 && !rule2) {
        $("#song2").show();
        $("#input3").show();
        // arrayName.concat(name)
        // console.log(renewedArray)
        $(".song2").html(name);
        $("#input2").removeClass("curve");
        $("#input3").removeClass("curve");
        $("#input2").prop("type", "color")
        $("#input1").val(increaseByone())
        $("#input3").val(questionsArray[13])


    } else if (indexInput() === 15 && colorName !== "" && !rule2 && !rule3) {
        $("#color2").show();
        $("#input3").hide();
        $("#color2").css("background-color", name);
        $("#input3").val("Switch2");
        // arrayName.concat(name)
        // console.log(renewedArray)
        $(".color2").html(colorName);
        $("#input2").removeClass("curve");
        $("#input1").val(increaseByone())
        $("#input1").hide();
        $("#input2").hide();
        $("#drop").hide();
        $("#done").show();
        $(".edit2").show()
        $(".delete2").show()
        $(".color2").addClass("white");
    } else {
        $("#input2").addClass("redin");
    }

    if (name !== "" && colorName === "Switch" && !rule2) {
        $("#color").show();
        $("#input1").hide();
        $("#input2").hide();
        $("#input3").hide();
        $("#input3").hide("");
        $("#drop").hide();
        $("#done").show();


    }
    if (name !== "" && colorName === "Switch2" && !rule2 && name !== questionsArray) {
        $("#color").show();
        $("#input1").hide();
        $("#input2").hide();
        $("#input3").hide();
        $("#input3").hide("");
        $("#drop").hide();
        $("#done").show();

    }
}

function compareResult() {
    $(".list2").show();
    $(".list1").addClass("move");
    $(".list3").addClass("move2");
    $(".buttin").hide();

    let firstNm = $(".name").html();
    let food1 = $(".food").html();
    let friend1 = $(".frnd").html();
    let number1 = $(".num").html();
    let game1 = $(".game").html();
    let movie1 = $(".movie").html();
    let song1 = $(".song").html();
    let color1 = $(".color").html();
    let secoundNm = $(".name2").html();
    let food2 = $(".food2").html();
    let friend2 = $(".frnd2").html();
    let number2 = $(".num2").html();
    let game2 = $(".game2").html();
    let movie2 = $(".movie2").html();
    let song2 = $(".song2").html();
    let color2 = $(".color2").html();


    let comparisons = [
        { value1: food1, value2: food2, resultClass: ".foodresult", resultId: "#foodresult" },
        { value1: friend1, value2: friend2, resultClass: ".frndresult", resultId: "#frndresult" },
        { value1: number1, value2: number2, resultClass: ".numresult", resultId: "#numresult" },
        { value1: game1, value2: game2, resultClass: ".gameresult", resultId: "#gameresult" },
        { value1: movie1, value2: movie2, resultClass: ".movieresult", resultId: "#movieresult" },
        { value1: song1, value2: song2, resultClass: ".songresult", resultId: "#songresult" },
        { value1: color1, value2: color2, resultClass: ".colorresult", resultId: "#colorresult" }
    ];

    comparisons.forEach(function(comparison) {
        if (comparison.value1 === comparison.value2) {
            $(comparison.resultClass).html(comparison.value1);
            $(comparison.resultId).show();
            $("#compareinput").val(increaseByone2());
        }
    });


    let compareInputl = compareInput()




    if (friend1 === secoundNm && friend2 === firstNm && compareInputl >= 0) {
        $(".frndresult").html("Same");
        $("#frndresult").show();
        $(".frnd").addClass("green");
        $(".frnd2").addClass("green");
        $(".name").addClass("green");
        $(".name2").addClass("green");
        PromtTimer4()
    }
    if (food1 === food2 ) {
        $(".foodresult").html(food1);
        $("#foodresult").show();
       

    }
    if (friend1 === friend2  ) {
        $(".frndresult").html(friend1);
        $("#frndresult").show();
       
    }
    if (number1 === number2) {
        $(".numresult").html(number1);
       
        $("#numresult").show();
    }
    if (game1 === game2) {
        $(".gameresult").html(game1);
       
        $("#gameresult").show();
    }
    if (movie1 === movie2) {
        $(".movieresult").html(movie1);
       
        $("#movieresult").show();
    }
    if (song1 === song2) {
        $(".songresult").html(song1);
       
        $("#songresult").show();

    }
    if (color1 === color2) {
        $(".colorresult").html(color1);
       
        $("#colorresult").show();
    }
    
    if (compareInputl === 0 && friend1 !== secoundNm && friend2 !== firstNm ) {
        $(".compare").hide()
        $(".changecomp").show()
    }
   else if (compareInputl <= 4 && friend1 !== secoundNm && friend2 !== firstNm) {
       PromtTimer()
    }
    else if (compareInputl  < 7 && friend1 !== secoundNm && friend2 !== firstNm) {
        PromtTimer2()
     }
     else if (compareInputl === 7 && friend1 !== secoundNm && friend2 !== firstNm) {
        PromtTimer3()
     }

}
function doneButton() {
    let check = colourInput()
    $("#input2").removeClass("redin");
    if (check === "Switch") {
        $("#input1").show();
        $("#input1").val(8);
        $("#input2").val("");
        $("#input3").val("");
        $("#input2").show();
        $("#input3").hide();
        $(".list1").hide();
        $(".switch").show();
        $(".list3").show();
        $(".edit").hide();
        $(".delete").hide();
        $("#done").hide();
        $("#drop").show();

    }
    if (check === "Switch2") {
        $(".inputs").hide();
        $(".list1").show();
        $(".list3").show();
        $(".switch").hide();
        $(".change").hide();
        $(".buttin").show();
    }
}

window.onload = function () {


    $("#input2").click(function () {
        $("#input2").removeClass("redin");
        $("#input2").addClass("curve");
        let questNm = $(".questnm").text();
        let quest1 = $(".quest1").text();
        let quest2 = $(".quest2").text();
        let quest3 = $(".quest3").text();
        let quest4 = $(".quest4").text();
        let quest5 = $(".quest5").text();
        let quest6 = $(".quest6").text();
        let questFrdNm = $(".questfrdnm").text();
        let quest8 = $(".quest8").text();
        let quest9 = $(".quest9").text();
        let quest10 = $(".quest10").text();
        let quest11 = $(".quest11").text();
        let quest12 = $(".quest12").text();
        let quest13 = $(".quest13").text();
        let name = textInput()
        if (indexInput() === 0 && name === "" && name !== questNm) {
            $("#input2").val(questNm);
        } else if (indexInput() === 0 && name !== "" && name === questNm) {
            $("#input2").val("");
        } else if (indexInput() === 1 && name === "" && name !== quest1) {
            $("#input2").val(quest1);
        } else if (indexInput() === 1 && name !== "" && name === quest1) {
            $("#input2").val("");
        } else if (indexInput() === 2 && name === "" && name !== quest2) {
            $("#input2").val(quest2);
        }else if (indexInput() === 2 && name !== "" && name === quest2) {
            $("#input2").val("");
        } else if (indexInput() === 3 && name === "" && name !== quest3) {
            $("#input2").val(quest3);
        } else if (indexInput() === 3 && name !== "" && name === quest3) {
            $("#input2").val("");
        }else if (indexInput() === 4 && name === "" && name !== quest4) {
            $("#input2").val(quest4);
        }else if (indexInput() === 4 && name !== "" && name === quest4) {
            $("#input2").val("");
        } else if (indexInput() === 5 && name === "" && name !== quest5) {
            $("#input2").val(quest5);
        } else if (indexInput() === 5 && name !== "" && name === quest5) {
            $("#input2").val("");
        }else if (indexInput() === 6 && name === "" && name !== quest6) {
            $("#input2").val(quest6);
        } else if (indexInput() === 6 && name !== "" && name === quest6) {
            $("#input2").val("");
        }else if (indexInput() === 8 && name === "" && name !== questFrdNm) {
            $("#input2").val(questFrdNm);
        }else if (indexInput() === 8 && name !== "" && name === questFrdNm) {
            $("#input2").val("");
        } else if (indexInput() === 9 && name === "" && name !== quest8) {
            $("#input2").val(quest8);
        }else if (indexInput() === 9 && name !== "" && name === quest8) {
            $("#input2").val("");
        } else if (indexInput() === 10 && name === "" && name !== quest9) {
            $("#input2").val(quest9);
        }else if (indexInput() === 10 && name !== "" && name === quest9) {
            $("#input2").val("");
        } else if (indexInput() === 11 && name === "" && name !== quest10) {
            $("#input2").val(quest10);
        }else if (indexInput() === 11 && name !== "" && name === quest10) {
            $("#input2").val("");
        } else if (indexInput() === 12 && name === "" && name !== quest11) {
            $("#input2").val(quest11);
        } else if (indexInput() === 12 && name !== "" && name === quest11) {
            $("#input2").val("");
        }else if (indexInput() === 13 && name === "" && name !== quest12) {
            $("#input2").val(quest12);
        } else if (indexInput() === 13 && name !== "" && name === quest12) {
            $("#input2").val("");
        }else if (indexInput() === 14 && name === "" && name !== quest13) {
            $("#input2").val(quest13);
        }else if (indexInput() === 14 && name !== "" && name === quest13) {
            $("#input2").val("");
        } else {
            $("#input2").val(name);
        }

    })
    $("#input2").on('input', function () {
        let maxLength = 16
        let minimumLength = 3
        let length1 = $(this).val()
        let rule = length1.length > maxLength
        let rule2 = length1.length < minimumLength

        if (rule) {
            $(this).val(length1.slice(0, maxLength));
            // PromtTimer()
            // textLength()
        }


    });
    $("#input3").on('input', function () {
        let maxLength = 7
        let minimumLength = 2
        let length1 = $(this).val()
        let rule = length1.length > maxLength
        let rule2 = length1.length < minimumLength

        if (rule) {
            $(this).val(length1.slice(0, maxLength));
            // PromtTimer()
            // textLength()
        }
        //  if (rule2) {
        //     $(".color").html("");
        //     $(".frnd").html("");
        //     $(".name").html("");
        //     $(".num").html("");
        //     $(".game").html("");
        //     $(".song").html("");
        //     $(".movie").html("");
        //     // PromtTimer()
        //     // textLength()
        // }

    });
    $("#done").click(function () {
        doneButton()
    });
    $(".comp").click(function () {
        compareResult()
    });
    $(".switch").click(function () {
        $(".list3").toggle()
        $(".list1").toggle()
    });
    $("#drop").click(function () {
        arrayDrop()
    });

    $(".edit").click(function () {
        let index = $(".edit").index(this)
        let text = $(this).find("div").text()
        $(".inputs").show()
        if (index === index) {
            $("#input1").val(index);
            $("#input2").val(text);
            $("#input3").val("Switch");
            $("#done").hide()
            $("#drop").show()
            $("#input3").hide();
            $("#input2").show();
            $("#input1").show();
            $("#input2").prop("type", "text")
        } else {
            $("#input1").val();
            $("#input2").val();
        }

    });
    $(".edit2").click(function () {
        let index = $(".edit2").index(this)
        let text = $(this).find("div").text()
        $(".inputs").show()
        if (index === 1) {
            $("#done").hide()
            $("#drop").show()
            $("#input3").hide();
            $("#input2").show();
            $("#input1").show();
            $("#input1").val(9);
            $("#input2").val(text);
            $("#input3").hide();
            $("#input3").val("Switch2");
            $("#input2").prop("type", "text")
        } else if (index === 2) {
            $("#done").hide()
            $("#drop").show()
            $("#input3").hide();
            $("#input2").show();
            $("#input1").show();
            $("#input1").val(10);
            $("#input2").val(text);
            $("#input3").hide();
            $("#input3").val("Switch2");
            $("#input2").prop("type", "text")
        } else if (index === 3) {
            $("#input1").val(11);
            $("#done").hide()
            $("#drop").show()
            $("#input3").hide();
            $("#input2").show();
            $("#input1").show();
            $("#input2").val(text);
            $("#input3").hide();
            $("#input3").val("Switch2");
            $("#input2").prop("type", "text")
        } else if (index === 4) {
            $("#input1").val(12);
            $("#done").hide()
            $("#drop").show()
            $("#input3").hide();
            $("#input2").show();
            $("#input1").show();
            $("#input2").val(text);
            $("#input3").hide();
            $("#input3").val("Switch2");
            $("#input2").prop("type", "text")
        } else if (index === 5) {
            $("#input1").val(13);
            $("#done").hide()
            $("#drop").show()
            $("#input3").hide();
            $("#input2").show();
            $("#input1").show();
            $("#input2").val(text);
            $("#input3").hide();
            $("#input3").val("Switch2");
            $("#input2").prop("type", "text")
        } else if (index === 6) {
            $("#input1").val(14);
            $("#done").hide()
            $("#drop").show()
            $("#input3").hide();
            $("#input2").show();
            $("#input1").show();
            $("#input3").val("Switch2");
            $("#input2").val(text);
            $("#input3").hide();
            $("#input2").prop("type", "text")
        } else if (index === 7) {
            $("#input1").val(15);
            $("#done").hide()
            $("#drop").show()
            $("#input3").show();
            $("#input2").show();
            $("#input1").show();
            $("#input3").val("Switch2");
            $("#input2").val(text);
            $("#input2").prop("type", "color")
        } else {
            $("#input1").val();
            $("#input2").val();
        }

    });
    $(".editcolour").click(function () {
        let index = $(".editcolour").index(this)
        let text = $(this).find("span").text()

        if (index === index) {
            $("#done").hide()
            $("#drop").show()
            $("#input3").hide();
            $("#input2").show();
            $("#input1").show();
            $("#input1").val(7);
            $("#input3").val(text);
            $("#input3").show();
            $("#input2").prop("type", "color")

        }

    });

    $(".editcolour2").click(function () {
        let index = $(".editcolour2").index(this)
        if (index === index) {
            $("#done").hide()
            $("#drop").show()
            $("#input3").hide();
            $("#input2").show();
            $("#input1").show();
            $("#input1").val(15);
            $("#input3").val(text);
            $("#input3").show();
            $("#input2").prop("type", "color")

        }

    });


    $(".delete").click(function () {
        let index = $(".delete").index(this)
        if (index === 1) {
            $("#food").hide();
        } else if (index === 2) {
            $("#frnd").hide();
        } else if (index === 3) {
            $("#num").hide();
        } else if (index === 4) {
            $("#game").hide();
        } else if (index === 5) {
            $("#movie").hide();
        } else if (index === 6) {
            $("#song").hide();
        } else if (index === 7) {
            $("#color").hide();
        }
    });
    $(".delete2").click(function () {
        let index = $(".delete2").index(this)
        if (index === 1) {
            $("#food2").hide();
        } else if (index === 2) {
            $("#frnd2").hide();
        } else if (index === 3) {
            $("#num2").hide();
        } else if (index === 4) {
            $("#game2").hide();
        } else if (index === 5) {
            $("#movie2").hide();
        } else if (index === 6) {
            $("#song2").hide();
        } else if (index === 7) {
            $("#color2").hide();
        }
    });
    $(".owners-li").click(function () {
        $(".adi").html('<audio src="audio/song.mp3" autoplay loop controls></audio>');
    });
}