var countQuest = -1;
var plus = 0;
var test_start = 0;
var questions = ["Those cats __ chins", "Where __ she __ to go?", "She __ like ___ .", "Я собираюсь поспать", "Do you enjoy __ chess?", "Where __ __ Petrovs live?", "__ hair is long", "(чей?) That's __!", "__ you like __?", "Three __ always oversleep.", "Отметьте не содержащее ошибок:", "Вставьте артикль, если нужно: _ Sun", "Вставьте артикль, если нужно: _ my neck", "Вставьте артикль, если нужно: _ finally", "Вставьте артикль, если нужно: _ third day", "Вставьте артикль, если нужно: _ man"];
var number1 = ["has", "is, going", "doesn't, cook", "I want to sleep", "to playing", "do, a", "their", "my", "Do, to swim", "deer", "My buddy usually gets up in the morning", "не нужно", "не нужно", "не нужно", "не нужно", "не нужно"];
var number2 = ["do", "has, going", "don't, cook", "I am going to sleep", "to play", "do, the", "theirs", "me", "Do, swimming", "deers", "I vacuum every days", "a", "a", "a", "a", "a"];
var number3 = ["have", "is, go", "doesn't, cooking", "I are going to sleep", "playing", "does, the", "them", "mine", "Does, swim", "a deer", "Are we going to riding a bicycle?", "the", "the", "the", "the", "the"];
var answer = [2, 0, 2, 1, 2, 1, 0, 2, 1, 0, 0, 2, 0, 0, 2, 1];

$(document).ready(function () {
    $("#start").click(check);
});

function check(num) {
    $(".result").css("display", "none");
    $("#area").css("display", "block");
    $("#start").css("display", "none");
    $("#resultyes").css("display", "none");
    $("#resultno").css("display", "none");
    if (num == 4) {
        if (test_start == 0) {
            $("#question").html(questions[countQuest]);
            $("#option1").html(number1[countQuest]);
            $("#option2").html(number2[countQuest]);
            $("#option3").html(number3[countQuest]);
            test_start = 1;

        }
    }
    if (num !== 4) {
        if (num == answer[countQuest])
            plus++;
        if (questions.length - 1 > countQuest) {
            countQuest++;
            $("#question").html(questions[countQuest]);

            $("#option1").html(number1[countQuest]);
            $("#option2").html(number2[countQuest]);
            $("#option3").html(number3[countQuest]);
        } else {
            $("#area").css("display", "none");
            $(".result").css("display", "block");
            if (plus >= 9 * answer.length / 10) {
                $("#next").css("display", "block");
                $(".result #res").html(plus);
                $("#resultyes").css("display", "block");
                $("#resultno").css("display", "none");
            } else {
                $("#start").css("display", "block");
                $(".result #res").html(plus);
                $("#resultno").css("display", "block");
                $("#resultyes").css("display", "none");
            }
            countQuest = -1;
            plus = 0;
            test_start = 0;
        }
    }
}