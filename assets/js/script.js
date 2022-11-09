const store = window.localStorage;
let current_day = dayjs().format("dddd, MMMM DD, h:mma");
const current_day_text = $("#current-day")
const hourText = $(".hourText")
current_day_text.text(current_day);

console.log(hourText)
const hourTime = dayjs().format("H");
const jsTime = dayjs().startOf("day").add(8, "hour");

for  (var i = 9; i  < 18; i++){
    let timeSlot = dayjs().startOf("day").add(i, "hour").format("ha");
    let currentState;

    if (hourTime == i){
        currentState = "present";
    } else if (hourTime > i){
        currentState = "future";
    } else {
        currentState = "past";
    };


    var newStuff = `        
<div class="hour" id="hour-${i}">
    <label class="hourText">${timeSlot}</label>
    <textarea class="textArea ${currentState} inputText hour-${i}"></textarea>
    <button class="saveBtn"><img src="./assets/images/floppy-disk.png"></button>
</div>`
;
console.log(newStuff);
$("#all_times").append(newStuff)



};

$(".saveBtn").on("click", function(){
    let value = $(this).siblings(".textArea").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
})

for (var i = 9; i < 18; i++){
    $(`.hour-${i}`).val(localStorage.getItem(`hour-${i}`));
    console.log($(`#hour-${i}`))
    console.log($(`#hour-${i}`).val(localStorage.getItem(`hour-${i}`)))
}

console.log(localStorage)
