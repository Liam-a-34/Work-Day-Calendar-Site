const store = window.localStorage;
let current_day = dayjs().format("dddd, MMMM DD, h:mma");
const current_day_text = $("#current-day")
const hourText = $(".hourText")
current_day_text.text(current_day);

// Makes the hourTime variable equal the current time but only in hour format
const hourTime = dayjs().format("H");
const jsTime = dayjs().startOf("day").add(8, "hour");
//For loop for making and designing time boxes
for  (var i = 9; i  < 18; i++){
    let timeSlot = dayjs().startOf("day").add(i, "hour").format("ha");
    let currentState;
//If the current hour is equal to the index, it sets the box to red. If it's later than the current index, it sets the box to green. If the current hour is behind the index, it sets the time box to grey
    if (hourTime == i){
        currentState = "present";
    } else if (hourTime > i){
        currentState = "future";
    } else {
        currentState = "past";
    };

// Creates a time box with specified values from above, and pre set values
    var newStuff = `        
<div class="hour" id="hour-${i}">
    <label class="hourText">${timeSlot}</label>
    <textarea class="textArea ${currentState} inputText hour-${i}"></textarea>
    <button class="saveBtn"><img src="./assets/images/floppy-disk.png"></button>
</div>`
;
//Appends the time box to the main section
$("#all_times").append(newStuff)



};
//On save button click, creates a key: value with the key being the time box's hour id, and the value being the text area's value. Then stores it
$(".saveBtn").on("click", function(){
    let value = $(this).siblings(".textArea").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
})
//Fills in all the stored information in to the text areas they were stored in.
for (var i = 9; i < 18; i++){
    $(`.hour-${i}`).val(localStorage.getItem(`hour-${i}`));
    console.log($(`#hour-${i}`))
    console.log($(`#hour-${i}`).val(localStorage.getItem(`hour-${i}`)))
}


