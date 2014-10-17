/*
*
* Project: SelectSubmit
* URL: https://github.com/carmichaelize/select-submit
* Author: Scott Carmichael
* Version: 1.0
*
* Copyright (c) 2014 Scott Carmichael
* Licensed under MIT (http://www.opensource.org/licenses/mit-license.php)
*
*/

;(function ($, window, document, undefined) {

    $.fn.selectSubmit = function(select){

        function plugin(select){

            //Get Elements
            this.$select = select;
            this.$form = this.$select.parents('form');

            //Methods
            this.actions(this);

            //Init
            this.create();

        };

        plugin.prototype.actions = function(self){

            //Submit
            this.submit = function(){
                if( self.$form.length > 0 ){
                    self.$form.submit();
                }
            }

            //Create
            this.create = function(){
                self.$select.on('change', self.submit);
            }

            //Destroy
            this.destroy = function(){
                self.$select.off('change', self.submit);
            }

        }

        this.each(function(){
            if( $(this).is('select') ){
                if (typeof select === "string" && ( select == 'create' || select == 'destroy' ) ){

                    //Get Plugin Instance
                    $this = $(this).data('plugin_selectSubmit');
                    //Call Method
                    $this[select].call($this);

                } else if ( !$(this).data('plugin_selectSubmit') ) {

                    $(this).data('plugin_selectSubmit', new plugin($(this)) );

                }
            }
        });

        //Preserve Chaining
        return this;

    }

})(jQuery, window, document);