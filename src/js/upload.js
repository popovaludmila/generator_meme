const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const uploadInput = document.querySelector('#upload-file');
const imgContainer = document.querySelector('.memo-img');

const uploadNewPhoto = () => {
    const file = uploadInput.files[0];
    const fileName = file.name.toLowerCase();
  
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  
    if (matches) {
      imgContainer.src = URL.createObjectURL(file);
    }
  };

export {uploadNewPhoto};
