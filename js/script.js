var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
 
var checkin = $('#dpd1').datepicker({
  onRender: function(date) {
    return date.valueOf() < now.valueOf() ? 'disabled' : '';
  }
}).on('changeDate', function(ev) {
  if (ev.date.valueOf() > checkout.date.valueOf()) {
    var newDate = new Date(ev.date)
    newDate.setDate(newDate.getDate() + 1);
    checkout.setValue(newDate);
  }
  checkin.hide();
  $('#dpd2')[0].focus();
}).data('datepicker');
var checkout = $('#dpd2').datepicker({
  onRender: function(date) {
    return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
  }
}).on('changeDate', function(ev) {
  checkout.hide();
}).data('datepicker');



$(document).ready(function(){
    $(".menu-bars").click(function(){
        $("nav").animate({right: '-5px'});
    });
     $(".close").click(function(){
        $("nav").animate({right: '-255px'});
    });
});



//function carouselNormalization() {
//var items = $('#carousel-example-generic .item'), //grab all slides
//    heights = [], //create empty array to store height values
//    tallest; //create variable to make note of the tallest slide
//
//if (items.length) {
//    function normalizeHeights() {
//        items.each(function() { //add heights to array
//            heights.push($(this).height()); 
//        });
//        tallest = Math.max.apply(null, heights); //cache largest value
//        items.each(function() {
//            $(this).css('min-height',tallest + 'px');
//        });
//    };
//    normalizeHeights();
//
//    $(window).on('resize orientationchange', function () {
//        tallest = 0, heights.length = 0; //reset vars
//        items.each(function() {
//            $(this).css('min-height','0'); //reset min-height
//        }); 
//        normalizeHeights(); //run it again 
//    });
//}
//}