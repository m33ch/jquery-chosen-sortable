(function($){
  
  $.fn.chosenSortable = function(){
    $this = this.filter('.chzn-sortable');
    
    $this.each(function(){
      $select = $(this);
      $chosen = $select.siblings('.chzn-container');

      $chosen.find('.chzn-choices').sortable({
        'items': 'li:not(.search-field)'
      });
      
      
    })
    
  };
  
}(jQuery));