(function($){
  
  var _update;
  
  /*
   * On
   * @context ul.chzn-choices
   */
  _update = function(){
    $form_field     = $(this).closest('.chzn-container').siblings('select');
    console.log($form_field);
    $options        = $('option', $form_field);
    $clone          = $form_field.clone();
    $clone.children().remove();
    $(this).find('li[class!="search-field"]').each(function(){
      var $option = $options.filter('option[value="' + $(this).attr('rel') + '"]');
        $clone.append($option);
      });
    $form_field.replaceWith($clone);
    
    console.info('List sorted');
  };
  
  /*
   * Extend jQuery
   */
  $.fn.chosenSortable = function(){
    $this = this.filter('.chzn-sortable');
    
    $this.each(function(){
      $select = $(this);
      $chosen = $select.siblings('.chzn-container');

      $chosen.find('.chzn-choices').sortable({
        'placeholder' : 'ui-state-highlight'
      , 'items'       : 'li:not(.search-field)'
      , 'update'      : _update
      , 'tolerance'   : 'pointer'
      });
      
    });
    
  };
  
}(jQuery));