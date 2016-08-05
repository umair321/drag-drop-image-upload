# drag-drop-image-upload
<h1>Drang Drog File Upload in Angularjs</h1><br/>
<h2>This module only works with Angular 1.5+</h2>
<p>Include "dragndrop.js" from dist folder, add it to your app dependencies: <strong>angular.module('YOUR_APP_NAME', ['dragdrop']);</strong></p>

<h3>HTML Markup</h3>


<pre>
  <xmp>
    <!--img element to show dropped image-->
    <img ng-if="scope_which_will_get_image" ng-src="{{scope_which_will_get_image}}" />
    
     <!--div element to dropped image-->
    <div drag-and-drop-upload bind-model="scope_which_will_get_image" style="height:200px;width:200px;">
         Upload Image here
    </div>
</xmp>
</pre>
