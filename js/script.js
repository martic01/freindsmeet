function indexInput() {
    return parseInt(document.getElementById("input1").value);
}

function textInput() {
    return document.getElementById("input2").value;
}
function colourInput() {
    return document.getElementById("input3").value;
}
function increaseByone() {
    return indexInput() + 1;
}

function arrayDrop() {
//   let  renewedArray = {};
let maxLength = 16
let minimumLength = 3
let length1 = $("#input2").val()
let length2 = $("#input3").val()
let rule2 =  minimumLength > length1.trim().length 
let rule3 =  minimumLength > length2.trim().length
let rule = length1.trim().length  > maxLength

    let questNm = $(".questnm").text();
    let quest1 = $(".quest1").text();
    let quest2 = $(".quest2").text();
    let quest3 = $(".quest3").text();
    let quest4 = $(".quest4").text();
    let quest5 = $(".quest5").text();
    let quest6 = $(".quest6").text();
    let quest7 = $(".quest7").text();
    let questionsArray = [quest1, quest2, quest3, quest4, quest5, quest6, quest7];
    let name = textInput()
    let colorName = colourInput()
    if (indexInput() === 0 && name !== "" && name !== questNm && !rule2  ) {
    //   renewedArray[name] = []
    //   var arrayName = renewedArray[name]
        $(".name").html(name + "'s");
        $("#input1").val(increaseByone())
        $("#input2").removeClass("curve");
        $("#input2").val(questionsArray[0])
        console.log(questionsArray[0])
    } else if (indexInput() === 1 && name !== "" && name !== quest1 && !rule2 ) {
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

    }else if (indexInput() === 6 && name !== "" && name !== quest6  && !rule2) {
        $("#song").show();
        $("#input3").show();
        // arrayName.concat(name)
        // console.log(renewedArray)
        $(".song").html(name);
        $("#input2").removeClass("curve");
        $("#input3").removeClass("curve");
        $("#input2").prop("type","color")
        $("#input1").val(increaseByone())
        $("#input3").val(questionsArray[7])


    }else if (indexInput() === 7  && colorName !== quest7  && colorName !==""  && !rule2 && !rule3) {
        $("#color").show();
        $("#input3").hide();
        console.log(name)
        $("#color").css("background-color",name);
        $("#input2").prop("type","text")
        // arrayName.concat(name)
        // console.log(renewedArray)
        $(".color").html(colorName);
        $("#input2").removeClass("curve");
        $("#input1").val(increaseByone())
        $(".edit").show()
        $(".delete").show()
        $(".color").addClass("white");
    }else if (indexInput() === 8 && name !== "" && name !== questNm && !rule2 ) {
        //   renewedArray[name] = []
        //   var arrayName = renewedArray[name]
            $(".name2").html(name + "'s");
            $("#input1").val(increaseByone())
            $("#input2").removeClass("curve");
            $("#input2").val("friend " + questionsArray[0])
        
        } else if (indexInput() === 9 && name !== "" && name !== quest1 && !rule2 ) {
            $("#food2").show();
            // arrayName.concat(name)
            // console.log(renewedArray)
            $(".food2").html(name);
            $("#input2").removeClass("curve");
            $("#input1").val(increaseByone())
            $("#input2").val("friend " + questionsArray[1])
    
    
        }
        else if (indexInput() === 10 && name !== "" && name !== quest2 && !rule2) {
            $("#frnd2").show();
            // arrayName.concat(name)
            // console.log(renewedArray)
            $(".frnd2").html(name);
            $("#input2").removeClass("curve");
            $("#input1").val(increaseByone())
            $("#input2").val("friend " + questionsArray[2])
    
        } else if (indexInput() === 11 && name !== "" && name !== quest3 && !rule2) {
            $("#num2").show();
            // arrayName.concat(name)
            // console.log(renewedArray)
            $(".num2").html(name);
            $("#input2").removeClass("curve");
            $("#input1").val(increaseByone())
            $("#input2").val("friend " + questionsArray[3])
    
        } else if (indexInput() === 12 && name !== "" && name !== quest4 && !rule2) {
            $("#game2").show();
            // arrayName.concat(name)
            // console.log(renewedArray)
            $(".game2").html(name);
            $("#input2").removeClass("curve");
            $("#input1").val(increaseByone())
            $("#input2").val("friend " + questionsArray[4])
    
        } else if (indexInput() === 13 && name !== "" && name !== quest5 && !rule2) {
            $("#movie2").show();
           
            // arrayName.concat(name)
            // console.log(renewedArray)
            $(".movie2").html(name);
            $("#input2").removeClass("curve");
            $("#input1").val(increaseByone())
            $("#input2").val("friend " + questionsArray[5])
    
        }else if (indexInput() === 14 && name !== "" && name !== quest6  && !rule2) {
            $("#song2").show();
            $("#input3").show();
            // arrayName.concat(name)
            // console.log(renewedArray)
            $(".song2").html(name);
            $("#input2").removeClass("curve");
            $("#input3").removeClass("curve");
            $("#input2").prop("type","color")
            $("#input1").val(increaseByone())
            $("#input3").val("friend " + questionsArray[7])
    
    
        }else if (indexInput() === 15  && colorName !== quest7  && colorName !==""  && !rule2 && !rule3) {
            $("#color2").show();
            $("#input3").hide();
            console.log(name)
            $("#color2").css("background-color",name);
            // arrayName.concat(name)
            // console.log(renewedArray)
            $(".color2").html(colorName);
            $("#input2").removeClass("curve");
            $("#input1").val(increaseByone())
            $(".inputs").hide()
            $(".edit").show()
            $(".delete").show()
            $(".color2").addClass("white");
        }
    // else if (name !== "") {
    //     arrays[name] = [name, name];

    // }
    // $("#input2").val(arrays[name]);

}

window.onload = function () {


    $("#input2").click(function () {
        $("#input2").addClass("curve");
        let questNm = $(".questnm").text();
        let quest1 = $(".quest1").text();
        let quest2 = $(".quest2").text();
        let quest3 = $(".quest3").text();
        let quest4 = $(".quest4").text();
        let quest5 = $(".quest5").text();
        let quest6 = $(".quest6").text();
        let quest7 = $(".quest7").text();
        let name = textInput()
        if (indexInput() === 0 && name === "" && name !== questNm) {
            $("#input2").val(questNm);
        } else if (indexInput() === 1 && name === "" && name !== quest1) {
            $("#input2").val(quest1);
        }else if (indexInput() === 2 && name === "" && name !== quest2) {
            $("#input2").val(quest2);
        }else if (indexInput() === 3 && name === "" && name !== quest3) {
            $("#input2").val(quest3);
        }else if (indexInput() === 4 && name === "" && name !== quest4) {
            $("#input2").val(quest4);
        }else if (indexInput() === 5 && name === "" && name !== quest5) {
            $("#input2").val(quest5);
        }else if (indexInput() === 6 && name === "" && name !== quest6) {
            $("#input2").val(quest6);
        }else if (indexInput() === 7 && name === "" && name !== quest7) {
            $("#input2").val(quest7);
        }else  if (indexInput() === 8 && name === "" && name !== questNm) {
            $("#input2").val("what your friend name");
        } else if (indexInput() === 9 && name === "" && name !== quest1) {
            $("#input2").val("friend " + quest1);
        }else if (indexInput() === 10 && name === "" && name !== quest2) {
            $("#input2").val("friend " + quest2);
        }else if (indexInput() === 11 && name === "" && name !== quest3) {
            $("#input2").val("friend " + quest3);
        }else if (indexInput() === 12 && name === "" && name !== quest4) {
            $("#input2").val("friend " + quest4);
        }else if (indexInput() === 13 && name === "" && name !== quest5) {
            $("#input2").val("friend " + quest5);
        }else if (indexInput() === 14 && name === "" && name !== quest6) {
            $("#input2").val("friend " + quest6);
        }else if (indexInput() === 15 && name === "" && name !== quest7) {
            $("#input2").val("friend " + quest7);
        }else {
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


    $("#drop").click(function () {
        arrayDrop()
    });
    $("#drop2").click(function () {
        arrayDrop()
        $(".inputs").hide()
        $("#drop2").hide()
    });
    $(".edit").click(function () {
      let  index = $(".edit").index(this)
      let  text = $(this).find("span").text()
      $(".inputs").show()
      $("#drop2").show()
      $("#drop").hide()
        if (index === index ) {
            $("#input1").val(index);
            $("#input2").val(text);
            $("#input3").hide();
            $("#input2").prop("type","text")
        }else{
            $("#input1").val();
            $("#input2").val();
        }
       
    });
    $(".editcolour").click(function () {
        let  index = $(".editcolour").index(this)
        let  text = $(this).find("span").text()

         if (index === index ) {
            $("#input1").val(7);
            $("#input3").val(text);
            $("#input3").show();
            $("#input2").prop("type","color")

        }

    });
    $(".name").click(function () {
        let  index = $(".name").index(this)
        $(".inputs").show()
        $("#drop2").hide()
        $("#drop").show()
          if (index === index ) {
              $("#input1").val(index);
              $("#input2").val("");
              $("#input3").hide();
              $("#input2").prop("type","text")
          }else{
              $("#input1").val();
              $("#input2").val();
          }
         
      });

    $(".delete").click(function () {
        let  index = $(".delete").index(this)
        if (index === 1 ) {
            $("#food").hide();
        }else if (index === 2 ) {
            $("#frnd").hide();
        }else if (index === 3 ) {
            $("#num").hide();
        }else if (index === 4 ) {
            $("#game").hide();
        }else if (index === 5 ) {
            $("#movie").hide();
        }else if (index === 6 ) {
            $("#song").hide();
        }else if (index === 7 ) {
            $("#color").hide();
        }
    });
}