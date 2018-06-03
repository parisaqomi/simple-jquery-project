$('.selectTabHeader').removeClass('selectTabHeader');
$(this).addClass('selectTabHeader');

$(document).ready(function () {

    $('#tabHeader li').click(function () {
        // Set header
        $('.selectTabHeader').removeClass('selectTabHeader');
        $(this).addClass('selectTabHeader');

        // Show Actual area
        let v = this.id;

        $('.selectedTab').removeClass('selectedTab');

        $('.' + v).addClass('selectedTab');
    });

    $('#foodData li').click(function () {
        // Set header
        $('.selectTabHeader').removeClass('selectTabHeader');
        $(this).addClass('selectTabHeader');

        // Show Actual area
        let v = this.id;

        $('.selectedTab').removeClass('selectedTab');

        $('.' + v).addClass('selectedTab');
    });

});