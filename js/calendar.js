$(document).ready(function () {
    function generateCalendar(year, month) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();

        let calendarHTML = "<table class='table table-bordered'>";
        calendarHTML += "<thead><tr><th>Dom</th><th>Lun</th><th>Mar</th><th>Mié</th><th>Jue</th><th>Vie</th><th>Sáb</th></tr></thead><tbody>";

        let day = 1;

        for (let i = 0; i < 6; i++) {
            calendarHTML += "<tr>";
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    calendarHTML += "<td></td>";
                } else if (day > daysInMonth) {
                    calendarHTML += "<td></td>";
                } else {
                    calendarHTML += `<td>${day}</td>`;
                    day++;
                }
            }
            calendarHTML += "</tr>";
        }

        calendarHTML += "</tbody></table>";
        $("#calendar").html(calendarHTML);
    }

    const today = new Date();
    generateCalendar(today.getFullYear(), today.getMonth());
});
