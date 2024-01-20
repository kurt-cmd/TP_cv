document.addEventListener("DOMContentLoaded", function() {
    var cvSelector = document.getElementById("cvSelector");
    var viewCvBtn = document.getElementById("viewCvBtn");

    cvSelector.addEventListener("change", function() {
        viewCvBtn.href = cvSelector.value;
    });
});
