$(document).ready(function () {
  var table = $("#example").DataTable({
    pageLength: 10,
    dom: "Bfrtip",
    buttons: [
      {
        extend: "pageLength",
        className: "extendButton",
      },
      ,
      "csv",
      "excel",
      "pdf",
      "print",
      "colvis",
    ],
  });
  $("#search-input").on("keyup", function () {
    table.search(this.value).draw();
  });
  $(".dt-buttons").addClass("mb-2 dt-buttons-header mr-2");
  $(".dataTables_filter").addClass("datatable-filter-style");
  $(".dataTables_filter label").addClass("label-style");
  $(".dataTables_filter label input").removeClass("form-control-sm");
  $(".dataTables_filter label input").addClass(
    "form-control input-lg col-xs-12"
  );
  $('.dataTables_filter input[type="search"]').css({
    width: "350px",
    display: "inline-block",
  });
});
