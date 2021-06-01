import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
        }
      }
  }
  return cookieValue;
}

const csrftoken = getCookie('csrftoken');
console.log(csrftoken);

class App extends Component {
    render() {
        return (
          <div>
            <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken}></input>
  
            <CKEditor
              editor={ClassicEditor}
              data=""
              onChange={(event, editor) => {
                const data = editor.getData();
                this.setState({ content: editor.getData() });
              }}
              onBlur={(event, editor) => {}}
              config={{
                ckfinder: {
                  // Upload the images to the server using the CKFinder QuickUpload command.
                  uploadUrl: "http://localhost:8000/media/uploads/",
                  options: {
                    resourceType: "Images",
                  },
                  headers: {
                    'X-CSRF-TOKEN': csrftoken,
                  }
                },
              }}
            />
          </div>
        );
    }
}

export default App;