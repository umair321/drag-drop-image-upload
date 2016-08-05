/* 
 * DragAndDrop Fileupload
 * Author: Umair Hamid
 */
(function (ng) {
    'use strict';

    var app = ng.module('dragdrop', []);

    app.directive('dragAndDropUpload', function ($parse) {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                var bindToScope = attrs.bindModel;
                element.bind('dragover', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    element.addClass('dragover');
                });

                element.bind('dragleave', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    element.addClass('dragover');
                });

                element.bind('drop', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    element.removeClass('dragover');
                    triggerCallback(e);
                });
                function triggerCallback(e) {
                    var files;
                    var reader = new FileReader();
                    if (e.dataTransfer) {
                        files = e.dataTransfer.files;
                    } else if (e.target) {
                        files = e.target.files;
                    }
                    reader.onload = function (e) {
                        $parse(bindToScope).assign(scope, e.target.result);
                        //scope[bindToScope] = e.target.result;
                        scope.$apply();
                    };
                    reader.readAsDataURL(files[0]);
                }
            }
        };
    });

}(angular));

