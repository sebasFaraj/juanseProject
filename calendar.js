document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: 'local',
      initialView: 'dayGridMonth',
      themeSystem: 'bootstrap5',
      weekNumbers: true,
      dayMaxEvents: true,
      headerToolbar: 
      {
        left: 'dayGridMonth timeGridWeek timeGridDay list',
        center: 'title',
        end: 'prev today next',
      },
      events: [
        {
            title: "Data Structures",
            start: "2024-10-16T10:30:00",
            end: "2024-10-16T11:20:00",
            editable: true
        },
        {
            title: "Calc III",
            start: "2024-10-16T12:50:00",
            end: "2024-10-16T13:40:00",
            editable: true
        },
        {
            title: "Physics II",
            start: "2024-10-16T14:00:00",
            end: "2024-10-16T14:50:00",
            editable: true
        },
        {
            title: "Meeting Juanse",
            start: "2024-10-16T21:00:00",
            end: "2024-10-16T22:00:00"
        }
      ]
    });
    calendar.render();
  });