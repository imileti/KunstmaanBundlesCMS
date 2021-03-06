var kunstmaanbundles = kunstmaanbundles || {};

kunstmaanbundles.mediaChooser = (function(window, undefined) {

    var init, initDelBtn;

    var $body = $('body');

    init = function() {
        // Save and update preview can be found in url-chooser.js
        initDelBtn();
    };


    // Del btn
    initDelBtn = function() {
        $body.on('click', '.js-media-chooser-del-preview-btn', function(e) {
            var $this = $(this),
                linkedID = $this.data('linked-id'),
                $widget = $('#' + linkedID + '-widget'),
                $input = $('#' + linkedID);

            $('.media-chooser__preview__img').attr({'src': '', 'srcset': '', 'alt': ''});

            $(".media-thumbnail__icon").remove();

            $widget.removeClass('media-chooser--choosen');
            $input.val('');
        });
    };


    return {
        init: init
    };

})(window);
