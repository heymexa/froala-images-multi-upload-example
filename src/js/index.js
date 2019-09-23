import $ from 'jquery';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/froala_editor.pkgd.min';
import 'froala-editor/js/plugins/image.min';

import 'froala-images-multi-upload/build/js/imagesMultiUpload';
import 'froala-images-multi-upload/build/css/imagesMultiUpload.css';

window.$ = window.jQuery = $;

$('#froala-editor').froalaEditor({
  // Set image buttons, including the name
  // of the buttons defined in customImageButtons.
  imageEditButtons: ['imageDisplay', 'imageAlign', 'imageInfo', 'imageRemove'],
  imageUploadURL: 'http://i.froala.com/upload',
  toolbarButtons: ['imagesMultiUpload']
});
