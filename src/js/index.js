import FroalaEditor from 'froala-editor';

import 'froala-editor/js/third_party/font_awesome.min';
import 'froala-editor/js/plugins/image.min';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import 'froala-images-multi-upload/build/js/imagesMultiUpload';
import 'froala-images-multi-upload/build/css/imagesMultiUpload.css';

new FroalaEditor('#froala-editor', {
  imageEditButtons: ['imageDisplay', 'imageAlign', 'imageInfo', 'imageRemove'],
  imageUploadURL: 'http://i.froala.com/upload',
  toolbarButtons: ['imagesMultiUpload'],
  pluginsEnabled: ['image', 'imagesMultiUpload']
});
